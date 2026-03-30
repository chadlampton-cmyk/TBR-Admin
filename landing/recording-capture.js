(function initRecordingCaptureModule(global) {
  "use strict";

  function createRecordingCaptureController(config) {
    const cfg = config && typeof config === "object" ? config : {};
    let audioMasterCapture = null;
    let recordingMixBus = null;

    function stopRecordingCanvasLoop() {
      const frameId = cfg.getRecordingMediaCanvasFrameId ? cfg.getRecordingMediaCanvasFrameId() : 0;
      if (frameId) {
        cancelAnimationFrame(frameId);
        cfg.setRecordingMediaCanvasFrameId?.(0);
      }
    }

    function disconnectRecordingAudioSources() {
      const sources = cfg.getRecordingMediaAudioSources ? cfg.getRecordingMediaAudioSources() : [];
      (Array.isArray(sources) ? sources : []).forEach((source) => {
        try {
          source.disconnect();
        } catch (error) {
          // Ignore disconnect races.
        }
      });
      cfg.setRecordingMediaAudioSources?.([]);
    }

    function clearAudioMasterCapture() {
      if (!audioMasterCapture) {
        return;
      }
      if (audioMasterCapture.processor) {
        try {
          audioMasterCapture.processor.onaudioprocess = null;
        } catch (error) {
          // Ignore processor cleanup races.
        }
        try {
          audioMasterCapture.processor.disconnect();
        } catch (error) {
          // Ignore disconnect races.
        }
      }
      if (audioMasterCapture.silentGain) {
        try {
          audioMasterCapture.silentGain.disconnect();
        } catch (error) {
          // Ignore disconnect races.
        }
      }
      if (audioMasterCapture.mixBus) {
        try {
          audioMasterCapture.mixBus.disconnect();
        } catch (error) {
          // Ignore disconnect races.
        }
      }
      audioMasterCapture = null;
    }

    function setupAudioMasterCapture(audioContext, mixBus, destination, channelMode) {
      clearAudioMasterCapture();
      if (!audioContext || !mixBus || !destination || typeof audioContext.createScriptProcessor !== "function") {
        return null;
      }
      const channelCount = channelMode === "mono" ? 1 : 2;
      const processor = audioContext.createScriptProcessor(4096, channelCount, channelCount);
      const silentGain = audioContext.createGain();
      silentGain.gain.value = 0;
      const buffers = channelCount === 1 ? [[]] : [[], []];
      const capture = {
        channelCount,
        buffers,
        frameCount: 0,
        processor,
        silentGain,
        mixBus,
        sampleRate: Number(audioContext.sampleRate || 48000) || 48000
      };
      processor.onaudioprocess = (event) => {
        const inputBuffer = event && event.inputBuffer ? event.inputBuffer : null;
        if (!inputBuffer) {
          return;
        }
        const availableChannels = Math.max(1, Number(inputBuffer.numberOfChannels) || 1);
        const sampleFrames = Math.max(0, Number(inputBuffer.length) || 0);
        for (let channelIndex = 0; channelIndex < channelCount; channelIndex += 1) {
          const sourceChannel = Math.min(channelIndex, availableChannels - 1);
          const data = inputBuffer.getChannelData(sourceChannel);
          buffers[channelIndex].push(new Float32Array(data));
        }
        capture.frameCount += sampleFrames;
      };
      mixBus.connect(destination);
      mixBus.connect(processor);
      processor.connect(silentGain);
      silentGain.connect(audioContext.destination);
      audioMasterCapture = capture;
      return audioMasterCapture;
    }

    function finalizeAudioMasterCapture() {
      if (!audioMasterCapture || !(audioMasterCapture.frameCount > 0) || typeof cfg.encodeAudioBufferToWavBlob !== "function") {
        clearAudioMasterCapture();
        return null;
      }
      const capture = audioMasterCapture;
      const audioContext = cfg.getRecordingMediaAudioContext ? cfg.getRecordingMediaAudioContext() : null;
      const bufferContext = audioContext || new (global.AudioContext || global.webkitAudioContext)({ sampleRate: capture.sampleRate });
      const audioBuffer = bufferContext.createBuffer(
        capture.channelCount,
        capture.frameCount,
        capture.sampleRate
      );
      for (let channelIndex = 0; channelIndex < capture.channelCount; channelIndex += 1) {
        const channelData = audioBuffer.getChannelData(channelIndex);
        let offset = 0;
        capture.buffers[channelIndex].forEach((chunk) => {
          channelData.set(chunk, offset);
          offset += chunk.length;
        });
      }
      const blob = cfg.encodeAudioBufferToWavBlob(audioBuffer);
      clearAudioMasterCapture();
      if (bufferContext !== audioContext) {
        bufferContext.close().catch(() => {});
      }
      return blob;
    }

    async function refreshRecordingAudioSources() {
      const audioContext = cfg.getRecordingMediaAudioContext ? cfg.getRecordingMediaAudioContext() : null;
      if (!audioContext || !recordingMixBus) {
        return;
      }

      disconnectRecordingAudioSources();

      const addAudioSource = (stream) => {
        if (!stream || !stream.getAudioTracks || !stream.getAudioTracks().length) {
          return;
        }
        const source = audioContext.createMediaStreamSource(stream);
        const sourceBus = audioContext.createGain();
        source.connect(sourceBus);
        sourceBus.connect(recordingMixBus);
        const nextSources = cfg.getRecordingMediaAudioSources ? cfg.getRecordingMediaAudioSources().slice() : [];
        nextSources.push(source, sourceBus);
        cfg.setRecordingMediaAudioSources?.(nextSources);
      };

      addAudioSource(cfg.getMicProcessedStream?.() || cfg.getMicStream?.());
      addAudioSource(cfg.getOnAirRemoteVideoStream?.() || cfg.getRemoteVideoStream?.());
      addAudioSource(cfg.getOnAirMixerDestinationStream?.());

      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }
    }

    function stopLocalRecordingCapture() {
      stopRecordingCanvasLoop();
      disconnectRecordingAudioSources();
      if (recordingMixBus) {
        try {
          recordingMixBus.disconnect();
        } catch (error) {
          // Ignore disconnect races.
        }
        recordingMixBus = null;
      }
      clearAudioMasterCapture();
      cfg.disconnectOnAirMusicRecordingStream?.();
      const audioContext = cfg.getRecordingMediaAudioContext ? cfg.getRecordingMediaAudioContext() : null;
      if (audioContext) {
        audioContext.close().catch(() => {
          // Ignore close races.
        });
        cfg.setRecordingMediaAudioContext?.(null);
      }
      cfg.setRecordingMediaAudioDestination?.(null);
      const mediaStream = cfg.getRecordingMediaStream ? cfg.getRecordingMediaStream() : null;
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        cfg.setRecordingMediaStream?.(null);
      }
      cfg.setRecordingMediaCanvas?.(null);
      cfg.setRecordingMediaCanvasContext?.(null);
    }

    function hasRecordingVideoSources() {
      if (cfg.getRecordingDefaultFormat?.() === "audio") {
        return false;
      }
      const localStream = cfg.getOnAirCameraVideoStream?.() || cfg.getCameraVideoStream?.() || cfg.getCameraStream?.() || null;
      const remoteStream = cfg.getOnAirRemoteVideoStream?.() || cfg.getRemoteVideoStream?.() || null;
      const localReady = !!(localStream && localStream.getVideoTracks && localStream.getVideoTracks().length);
      const remoteReady = !!(remoteStream && remoteStream.getVideoTracks && remoteStream.getVideoTracks().length);
      return localReady || remoteReady;
    }

    function getRecordingVideoProfile() {
      const quality = cfg.getRecordingDefaultQuality?.() === "high" ? "high" : "standard";
      if (quality === "high") {
        return {
          width: 1920,
          height: 1080,
          frameRate: 30,
          videoBitsPerSecond: 7000000,
          audioBitsPerSecond: 192000
        };
      }
      return {
        width: 1280,
        height: 720,
        frameRate: 24,
        videoBitsPerSecond: 3500000,
        audioBitsPerSecond: 128000
      };
    }

    function startRecordingCanvasLoop() {
      const canvas = cfg.getRecordingMediaCanvas ? cfg.getRecordingMediaCanvas() : null;
      const context = cfg.getRecordingMediaCanvasContext ? cfg.getRecordingMediaCanvasContext() : null;
      if (!canvas || !context) {
        return;
      }
      stopRecordingCanvasLoop();
      const localElement = cfg.getOnAirCameraVideo?.() || cfg.getCameraVideo?.();
      const remoteElement = cfg.getOnAirRemoteVideo?.() || cfg.getRemoteVideo?.();

      const render = () => {
        const currentCanvas = cfg.getRecordingMediaCanvas ? cfg.getRecordingMediaCanvas() : null;
        const currentContext = cfg.getRecordingMediaCanvasContext ? cfg.getRecordingMediaCanvasContext() : null;
        if (!currentCanvas || !currentContext) {
          return;
        }
        cfg.drawRecordingCompositeFrame?.(currentCanvas, currentContext, localElement, remoteElement);
        cfg.setRecordingMediaCanvasFrameId?.(requestAnimationFrame(render));
      };
      render();
    }

    async function buildLocalRecordingStream() {
      if (!global.MediaRecorder) {
        throw new Error("MediaRecorder is not supported in this browser.");
      }
      const output = new MediaStream();
      const includeVideo = hasRecordingVideoSources();
      const videoProfile = getRecordingVideoProfile();

      if (includeVideo) {
        const canvas = document.createElement("canvas");
        canvas.width = videoProfile.width;
        canvas.height = videoProfile.height;
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Unable to prepare recording canvas.");
        }
        cfg.setRecordingMediaCanvas?.(canvas);
        cfg.setRecordingMediaCanvasContext?.(context);
        startRecordingCanvasLoop();

        const captureStream = canvas.captureStream(videoProfile.frameRate);
        const videoTrack = captureStream.getVideoTracks()[0];
        if (videoTrack) {
          output.addTrack(videoTrack);
        }
      }

      const preferredSampleRate = Number(cfg.getRecordingSampleRate?.() || 0) || 0;
      const audioContext = new (global.AudioContext || global.webkitAudioContext)(
        preferredSampleRate > 0
          ? { sampleRate: preferredSampleRate }
          : undefined
      );
      cfg.setRecordingMediaAudioContext?.(audioContext);
      const recordingChannelMode = cfg.getRecordingChannelMode?.() === "mono" ? "mono" : "stereo";
      const audioDestination = audioContext.createMediaStreamDestination();
      try {
        audioDestination.channelCountMode = "explicit";
        audioDestination.channelInterpretation = "speakers";
        audioDestination.channelCount = recordingChannelMode === "mono" ? 1 : 2;
      } catch (error) {
        // Some browsers do not allow all destination channel properties to be reassigned.
      }
      const mixBus = audioContext.createGain();
      try {
        mixBus.channelCountMode = "explicit";
        mixBus.channelInterpretation = "speakers";
        mixBus.channelCount = recordingChannelMode === "mono" ? 1 : 2;
      } catch (error) {
        // Ignore browsers that don't allow explicit mix-bus channel config.
      }
      recordingMixBus = mixBus;
      cfg.setRecordingMediaAudioDestination?.(audioDestination);
      cfg.setRecordingMediaAudioSources?.([]);
      if (!includeVideo) {
        setupAudioMasterCapture(audioContext, mixBus, audioDestination, recordingChannelMode);
      } else {
        mixBus.connect(audioDestination);
      }
      await refreshRecordingAudioSources();

      const mixedTrack = audioDestination.stream.getAudioTracks()[0];
      if (mixedTrack) {
        output.addTrack(mixedTrack);
      }

      const localMicTracks = cfg.getMicProcessedStream?.()?.getAudioTracks?.().length || cfg.getMicStream?.()?.getAudioTracks?.().length || 0;
      const remoteAudioTracks = cfg.getOnAirRemoteVideoStream?.()?.getAudioTracks?.().length || cfg.getRemoteVideoStream?.()?.getAudioTracks?.().length || 0;
      const musicBusTracks = cfg.getOnAirMixerDestinationStream?.()?.getAudioTracks?.().length || 0;
      const mixedAudioTracks = audioDestination.stream.getAudioTracks().length;
      cfg.pushRecordingDiagnostic?.(
        "build_stream",
        "video=" +
          (includeVideo ? "on" : "off") +
          " | sampleRate=" +
          Number(audioContext.sampleRate || preferredSampleRate || 0) +
          " | localMicTracks=" +
          localMicTracks +
          " | remoteAudioTracks=" +
          remoteAudioTracks +
          " | musicBusTracks=" +
          musicBusTracks +
          " | mixedAudioTracks=" +
          mixedAudioTracks,
        {
          stage: "Preparing",
          stageNote: includeVideo
            ? "Building " + videoProfile.width + "x" + videoProfile.height + " " + videoProfile.frameRate + "fps video + audio capture."
            : "Building audio-only capture at " + Number(audioContext.sampleRate || preferredSampleRate || 48000) + " Hz.",
          audio: mixedAudioTracks > 0 ? "Live" : "Missing",
          audioNote:
            mixedAudioTracks > 0
              ? "Recorder sees " + mixedAudioTracks + " mixed audio track" + (mixedAudioTracks === 1 ? "" : "s") + " in " + recordingChannelMode + " mode."
              : "Recorder did not get a mixed audio track."
        }
      );

      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }
      return {
        stream: output,
        hasVideo: includeVideo,
        videoProfile
      };
    }

    async function startLocalRecordingCapture(resetAsset) {
      if (resetAsset) {
        cfg.clearLocalRecordingAsset?.();
      }
      stopLocalRecordingCapture();
      cfg.setRecordingMediaChunks?.([]);
      cfg.setRecordingAudioChunks?.([]);
      cfg.setMediaDebugEnabled?.(true);
      cfg.pushRecordingDiagnostic?.("capture_start", "resetAsset=" + (resetAsset ? "yes" : "no"), {
        stage: "Starting",
        stageNote: "Recorder is starting now.",
        chunkCount: 0,
        chunkBytes: 0,
        chunkNote: "Waiting for first chunk.",
        review: "Recording",
        reviewNote: "No review file until stop."
      });
      const recordingBuild = await buildLocalRecordingStream();
      cfg.setRecordingMediaStream?.(recordingBuild.stream);
      cfg.setRecordingMediaMimeType?.(recordingBuild.hasVideo ? cfg.getSupportedRecordingMimeType?.() || "" : "");

      cfg.setRecordingStopPromise?.(new Promise((resolve) => {
        cfg.setRecordingStopResolve?.(resolve);
      }));

      if (recordingBuild.hasVideo) {
        const recordingMediaMimeType = cfg.getRecordingMediaMimeType ? cfg.getRecordingMediaMimeType() : "";
        const options = recordingMediaMimeType ? { mimeType: recordingMediaMimeType } : {};
        if (recordingBuild.videoProfile && recordingBuild.videoProfile.videoBitsPerSecond) {
          options.videoBitsPerSecond = recordingBuild.videoProfile.videoBitsPerSecond;
        }
        if (recordingBuild.videoProfile && recordingBuild.videoProfile.audioBitsPerSecond) {
          options.audioBitsPerSecond = recordingBuild.videoProfile.audioBitsPerSecond;
        }
        const mediaRecorder = new MediaRecorder(recordingBuild.stream, options);
        cfg.setRecordingMediaRecorder?.(mediaRecorder);

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            const mediaChunks = (cfg.getRecordingMediaChunks ? cfg.getRecordingMediaChunks() : []).slice();
            mediaChunks.push(event.data);
            cfg.setRecordingMediaChunks?.(mediaChunks);
            const audioChunks = cfg.getRecordingAudioChunks ? cfg.getRecordingAudioChunks() : [];
            const totalChunks = mediaChunks.length + audioChunks.length;
            const diagnostics = cfg.getRecordingDiagnostics ? cfg.getRecordingDiagnostics() : { chunkBytes: 0 };
            const totalBytes = Number(diagnostics.chunkBytes || 0) + event.data.size;
            cfg.setRecordingDiagnosticState?.({
              chunkCount: totalChunks,
              chunkBytes: totalBytes,
              chunkNote: "Received " + totalChunks + " total chunks. Last size " + cfg.formatDiagnosticBytes?.(event.data.size) + "."
            });
            if (cfg.isMediaDebugEnabled?.() && mediaChunks.length % 10 === 0) {
              cfg.pushMediaDebug?.("recording.video_chunk", "count=" + mediaChunks.length + " | size=" + event.data.size);
            }
          }
        };

        mediaRecorder.onstop = () => {
          const type = (cfg.getRecordingMediaMimeType ? cfg.getRecordingMediaMimeType() : "") || "video/webm";
          const mediaChunks = cfg.getRecordingMediaChunks ? cfg.getRecordingMediaChunks() : [];
          if (mediaChunks.length) {
            const existingUrl = cfg.getRecordingMediaUrl ? cfg.getRecordingMediaUrl() : "";
            if (existingUrl) {
              URL.revokeObjectURL(existingUrl);
            }
            const blob = new Blob(mediaChunks, { type });
            cfg.setRecordingMediaBlob?.(blob);
            cfg.setRecordingMediaUrl?.(URL.createObjectURL(blob));
          }
          cfg.refreshRecordingAssetDurations?.().catch(() => {});
          const recordingMediaBlob = cfg.getRecordingMediaBlob ? cfg.getRecordingMediaBlob() : null;
          cfg.pushRecordingDiagnostic?.(
            "video_stop",
            "chunks=" + mediaChunks.length + " | blob=" + (recordingMediaBlob ? recordingMediaBlob.size : 0),
            {
              stage: "Saving",
              stageNote: "Video recorder stopped and is saving the take."
            }
          );
          const resolve = cfg.getRecordingStopResolve ? cfg.getRecordingStopResolve() : null;
          cfg.setRecordingStopResolve?.(null);
          if (resolve) {
            resolve(recordingMediaBlob || (cfg.getRecordingAudioBlob ? cfg.getRecordingAudioBlob() : null) || null);
          }
        };

        mediaRecorder.onerror = () => {
          cfg.pushRecordingDiagnostic?.("video_error", "Video recorder error.", {
            stage: "Problem",
            stageNote: "Video recorder hit an error."
          });
          const resolve = cfg.getRecordingStopResolve ? cfg.getRecordingStopResolve() : null;
          cfg.setRecordingStopResolve?.(null);
          if (resolve) {
            resolve(null);
          }
        };

        mediaRecorder.start(1000);
        cfg.pushRecordingDiagnostic?.("video_start", "mime=" + (recordingMediaMimeType || "default"), {
          stage: "Recording",
          stageNote: "Video and audio recording is live."
        });
      } else {
        cfg.setRecordingMediaRecorder?.(null);
        cfg.pushRecordingDiagnostic?.("video_skip", "No live camera source, staying audio-only.", {
          stage: "Recording",
          stageNote: "Audio-only recording is live."
        });
      }

      const audioDestination = cfg.getRecordingMediaAudioDestination ? cfg.getRecordingMediaAudioDestination() : null;
      if (!recordingBuild.hasVideo && audioMasterCapture) {
        cfg.setRecordingAudioMediaRecorder?.(null);
        cfg.setRecordingAudioMimeType?.("audio/wav");
        cfg.pushRecordingDiagnostic?.("audio_master_start", "format=wav | sampleRate=" + Number(audioMasterCapture.sampleRate || 48000), {
          audio: "Live",
          audioNote: "PCM/WAV master capture is active."
        });
      } else if (audioDestination && global.MediaRecorder) {
        const recordingAudioMimeType = cfg.getAudioOnlyRecordingMimeType?.() || "";
        cfg.setRecordingAudioMimeType?.(recordingAudioMimeType);
        const audioOptions = recordingAudioMimeType ? { mimeType: recordingAudioMimeType } : {};
        if (recordingBuild.videoProfile && recordingBuild.videoProfile.audioBitsPerSecond) {
          audioOptions.audioBitsPerSecond = recordingBuild.videoProfile.audioBitsPerSecond;
        }
        const audioRecorder = new MediaRecorder(audioDestination.stream, audioOptions);
        cfg.setRecordingAudioMediaRecorder?.(audioRecorder);
        audioRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            const audioChunks = (cfg.getRecordingAudioChunks ? cfg.getRecordingAudioChunks() : []).slice();
            audioChunks.push(event.data);
            cfg.setRecordingAudioChunks?.(audioChunks);
            const mediaChunks = cfg.getRecordingMediaChunks ? cfg.getRecordingMediaChunks() : [];
            const totalChunks = mediaChunks.length + audioChunks.length;
            const diagnostics = cfg.getRecordingDiagnostics ? cfg.getRecordingDiagnostics() : { chunkBytes: 0 };
            const totalBytes = Number(diagnostics.chunkBytes || 0) + event.data.size;
            cfg.setRecordingDiagnosticState?.({
              chunkCount: totalChunks,
              chunkBytes: totalBytes,
              chunkNote: "Received " + totalChunks + " total chunks. Last audio size " + cfg.formatDiagnosticBytes?.(event.data.size) + "."
            });
            if (cfg.isMediaDebugEnabled?.() && audioChunks.length % 10 === 0) {
              cfg.pushMediaDebug?.("recording.audio_chunk", "count=" + audioChunks.length + " | size=" + event.data.size);
            }
          }
        };
        audioRecorder.onstop = () => {
          const type = (cfg.getRecordingAudioMimeType ? cfg.getRecordingAudioMimeType() : "") || "audio/webm";
          const audioChunks = cfg.getRecordingAudioChunks ? cfg.getRecordingAudioChunks() : [];
          if (audioChunks.length) {
            const existingUrl = cfg.getRecordingAudioUrl ? cfg.getRecordingAudioUrl() : "";
            if (existingUrl) {
              URL.revokeObjectURL(existingUrl);
            }
            const blob = new Blob(audioChunks, { type });
            cfg.setRecordingAudioBlob?.(blob);
            cfg.setRecordingAudioUrl?.(URL.createObjectURL(blob));
          }
          cfg.refreshRecordingAssetDurations?.().catch(() => {});
          const recordingAudioBlob = cfg.getRecordingAudioBlob ? cfg.getRecordingAudioBlob() : null;
          cfg.pushRecordingDiagnostic?.(
            "audio_stop",
            "chunks=" + audioChunks.length + " | blob=" + (recordingAudioBlob ? recordingAudioBlob.size : 0),
            {
              stage: "Saving",
              stageNote: "Audio recorder stopped and is saving the take."
            }
          );
          const mediaRecorder = cfg.getRecordingMediaRecorder ? cfg.getRecordingMediaRecorder() : null;
          const resolve = cfg.getRecordingStopResolve ? cfg.getRecordingStopResolve() : null;
          if (!mediaRecorder && resolve) {
            cfg.setRecordingStopResolve?.(null);
            resolve(recordingAudioBlob || null);
          }
          cfg.syncReviewPanelUI?.();
        };
        audioRecorder.start(1000);
        cfg.pushRecordingDiagnostic?.("audio_start", "mime=" + (recordingAudioMimeType || "default"), {
          audio: "Live",
          audioNote: "Audio recorder started and is listening."
        });
      } else {
        cfg.pushRecordingDiagnostic?.("audio_missing", "Audio recorder did not start.", {
          audio: "Missing",
          audioNote: "Audio recorder failed to start."
        });
      }
    }

    function waitForMediaRecorderStop(recorder) {
      return new Promise((resolve) => {
        if (!recorder || recorder.state === "inactive") {
          resolve();
          return;
        }

        let settled = false;
        const finalize = () => {
          if (settled) {
            return;
          }
          settled = true;
          resolve();
        };

        recorder.addEventListener("stop", finalize, { once: true });
        recorder.addEventListener("error", finalize, { once: true });

        try {
          recorder.requestData();
        } catch (error) {
          // Ignore flush timing races before stop.
        }

        try {
          recorder.stop();
        } catch (error) {
          finalize();
        }
      });
    }

    async function stopLocalRecordingCaptureAndFinalize() {
      const mediaRecorder = cfg.getRecordingMediaRecorder ? cfg.getRecordingMediaRecorder() : null;
      const audioRecorder = cfg.getRecordingAudioMediaRecorder ? cfg.getRecordingAudioMediaRecorder() : null;
      cfg.setRecordingMediaRecorder?.(null);
      cfg.setRecordingAudioMediaRecorder?.(null);
      const stopTasks = [];

      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        stopTasks.push(waitForMediaRecorderStop(mediaRecorder));
      }
      if (audioRecorder && audioRecorder.state !== "inactive") {
        stopTasks.push(waitForMediaRecorderStop(audioRecorder));
      }

      if (stopTasks.length) {
        cfg.pushRecordingDiagnostic?.("finalize_wait", "recorders=" + stopTasks.length, {
          stage: "Saving",
          stageNote: "Waiting for recorder files to finish saving."
        });
        await Promise.allSettled(stopTasks);
      }

      cfg.setRecordingStopPromise?.(null);
      cfg.setRecordingStopResolve?.(null);
      if (audioMasterCapture && !recordingMediaBlob) {
        const wavBlob = finalizeAudioMasterCapture();
        if (wavBlob && wavBlob.size > 0) {
          const existingUrl = cfg.getRecordingAudioUrl ? cfg.getRecordingAudioUrl() : "";
          if (existingUrl) {
            URL.revokeObjectURL(existingUrl);
          }
          cfg.setRecordingAudioMimeType?.("audio/wav");
          cfg.setRecordingAudioBlob?.(wavBlob);
          cfg.setRecordingAudioUrl?.(URL.createObjectURL(wavBlob));
          cfg.pushRecordingDiagnostic?.(
            "audio_master_stop",
            "blob=" + wavBlob.size + " | sampleRate=" + Number((audioMasterCapture && audioMasterCapture.sampleRate) || 48000),
            {
              stage: "Saving",
              stageNote: "Audio master capture saved as WAV."
            }
          );
        }
      }
      stopLocalRecordingCapture();
      cfg.syncReviewPanelUI?.();
      const recordingMediaBlob = cfg.getRecordingMediaBlob ? cfg.getRecordingMediaBlob() : null;
      const recordingAudioBlob = cfg.getRecordingAudioBlob ? cfg.getRecordingAudioBlob() : null;
      cfg.pushRecordingDiagnostic?.(
        "finalize_done",
        "videoBlob=" +
          (recordingMediaBlob ? recordingMediaBlob.size : 0) +
          " | audioBlob=" +
          (recordingAudioBlob ? recordingAudioBlob.size : 0),
        {
          stage: "Saved",
          stageNote: "Recorder finished saving review files.",
          review: recordingMediaBlob || recordingAudioBlob ? "Ready" : "Missing",
          reviewNote: recordingMediaBlob || recordingAudioBlob ? "Review file saved for playback." : "Recorder stopped without a saved review file."
        }
      );
      return recordingMediaBlob || recordingAudioBlob;
    }

    function abortLocalRecordingCapture() {
      const mediaRecorder = cfg.getRecordingMediaRecorder ? cfg.getRecordingMediaRecorder() : null;
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        try {
          mediaRecorder.stop();
        } catch (error) {
          // Ignore stop errors on teardown.
        }
      }
      cfg.setRecordingMediaRecorder?.(null);
      const audioRecorder = cfg.getRecordingAudioMediaRecorder ? cfg.getRecordingAudioMediaRecorder() : null;
      if (audioRecorder && audioRecorder.state !== "inactive") {
        try {
          audioRecorder.stop();
        } catch (error) {
          // Ignore teardown stop races.
        }
      }
      cfg.setRecordingAudioMediaRecorder?.(null);
      cfg.setRecordingStopPromise?.(null);
      cfg.setRecordingStopResolve?.(null);
      stopLocalRecordingCapture();
    }

    return {
      stopRecordingCanvasLoop,
      refreshRecordingAudioSources,
      stopLocalRecordingCapture,
      hasRecordingVideoSources,
      startRecordingCanvasLoop,
      buildLocalRecordingStream,
      startLocalRecordingCapture,
      waitForMediaRecorderStop,
      stopLocalRecordingCaptureAndFinalize,
      abortLocalRecordingCapture
    };
  }

  global.RecordingCapture = {
    create: createRecordingCaptureController
  };
})(window);
