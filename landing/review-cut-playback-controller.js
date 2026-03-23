(function initReviewCutPlaybackControllerModule(global) {
  "use strict";

  function createReviewCutPlaybackController() {
    const state = {
      playbackFrameId: 0,
      visualFrameId: 0,
      visualPlaybackMode: "",
      transportState: "idle",
      clipPlaybackLoopActive: false,
      playbackSessionId: 0,
      playbackAnchorAt: 0,
      playbackAnchorEditedTime: 0,
      loopSelectionActive: false
    };

    return {
      snapshot() {
        return { ...state };
      },
      isPlaying(isNativePlayingFn) {
        return state.transportState === "playing" || !!(typeof isNativePlayingFn === "function" && isNativePlayingFn());
      },
      getTransportState() {
        return state.transportState;
      },
      setTransportState(value) {
        const nextValue = String(value || "").toLowerCase();
        if (
          nextValue === "playing" ||
          nextValue === "paused" ||
          nextValue === "idle" ||
          nextValue === "starting" ||
          nextValue === "finished"
        ) {
          state.transportState = nextValue;
          return;
        }
        state.transportState = "idle";
      },
      getPlaybackFrameId() {
        return state.playbackFrameId;
      },
      setPlaybackFrameId(value) {
        state.playbackFrameId = Number(value) || 0;
      },
      clearPlaybackFrame() {
        state.playbackFrameId = 0;
      },
      getVisualFrameId() {
        return state.visualFrameId;
      },
      setVisualFrameId(value) {
        state.visualFrameId = Number(value) || 0;
      },
      clearVisualFrame() {
        state.visualFrameId = 0;
      },
      getVisualPlaybackMode() {
        return state.visualPlaybackMode;
      },
      setVisualPlaybackMode(value) {
        state.visualPlaybackMode = String(value || "");
      },
      isClipPlaybackLoopActive() {
        return !!state.clipPlaybackLoopActive;
      },
      setClipPlaybackLoopActive(value) {
        state.clipPlaybackLoopActive = !!value;
      },
      getPlaybackSessionId() {
        return state.playbackSessionId;
      },
      bumpPlaybackSession() {
        state.playbackSessionId += 1;
        return state.playbackSessionId;
      },
      getPlaybackAnchorAt() {
        return state.playbackAnchorAt;
      },
      getPlaybackAnchorEditedTime() {
        return state.playbackAnchorEditedTime;
      },
      setPlaybackAnchor(anchorAt, anchorEditedTime) {
        state.playbackAnchorAt = Number(anchorAt) || 0;
        state.playbackAnchorEditedTime = Number(anchorEditedTime) || 0;
      },
      isLoopSelectionActive() {
        return !!state.loopSelectionActive;
      },
      setLoopSelectionActive(value) {
        state.loopSelectionActive = !!value;
      },
      resetSession(config) {
        const cfg = config && typeof config === "object" ? config : {};
        const hadActivePlayback =
          !!(cfg.isClipPlaybackLoopActive && cfg.isClipPlaybackLoopActive()) ||
          !!(cfg.getPlaybackFrameId && cfg.getPlaybackFrameId()) ||
          !!(cfg.getVisualFrameId && cfg.getVisualFrameId()) ||
          !!(cfg.hasScheduledClipPlayback && cfg.hasScheduledClipPlayback());
        if (hadActivePlayback && !cfg.silentDiagnostic && cfg.pushDiagnostic) {
          cfg.pushDiagnostic("clip_stop", String(cfg.reason || ""));
        }
        const previousSessionId = cfg.getPlaybackSessionId ? cfg.getPlaybackSessionId() : 0;
        if (cfg.bumpPlaybackSession) {
          cfg.bumpPlaybackSession();
        }
        const playbackFrameId = cfg.getPlaybackFrameId ? cfg.getPlaybackFrameId() : 0;
        if (playbackFrameId && cfg.cancelPlaybackFrame) {
          cfg.cancelPlaybackFrame(playbackFrameId);
        }
        cfg.clearPlaybackFrameId?.();
        cfg.setTransportState?.(String(cfg.finalTransportState || "idle"));
        cfg.setClipPlaybackLoopActive?.(false);
        cfg.setLoopSelectionActive?.(false);
        cfg.setPlaybackAnchor?.(0, 0);
        cfg.stopVisualLoop?.();
        cfg.stopClipPlayback?.(previousSessionId || undefined);
      },
      finishSession(config) {
        const cfg = config && typeof config === "object" ? config : {};
        if (cfg.reason && cfg.pushDiagnostic) {
          cfg.pushDiagnostic(String(cfg.reason), "");
        }
        const finalTransportState = String(cfg.finalTransportState || (cfg.resetToStart === false ? "paused" : "finished"));
        cfg.resetSession?.({
          silentDiagnostic: true,
          finalTransportState
        });
        const media = cfg.getActiveMedia ? cfg.getActiveMedia() : null;
        if (media) {
          try {
            media.pause();
          } catch (error) {
            // Ignore pause races.
          }
        }
        if (cfg.resetToStart !== false) {
          cfg.setEditedTime?.(0);
          cfg.setViewportFocusTime?.(0);
        }
        cfg.updatePlayState?.();
        cfg.updateUi?.({ render: true, applyGain: true });
        cfg.syncPlayhead?.();
      },
      async startPlaybackLoop(config) {
        const cfg = config && typeof config === "object" ? config : {};
        try {
          let media = cfg.getActiveMedia ? cfg.getActiveMedia() : null;
          const canStartClipPlayback = cfg.canStartClipPlayback ? !!cfg.canStartClipPlayback() : false;
          if (!media && canStartClipPlayback) {
            media = cfg.getFallbackMedia ? cfg.getFallbackMedia() : null;
          }
          if (!media && !canStartClipPlayback) {
            cfg.pushDiagnostic?.("play_rejected", "reason=no-media");
            return null;
          }
          if (cfg.isLibraryPreviewPlaying && cfg.isLibraryPreviewPlaying()) {
            cfg.closeLibraryPreview?.();
          }
          cfg.pushDiagnostic?.("play_preflight", "step=before_resume_audio_graph");
          await (cfg.resumeAudioGraph ? cfg.resumeAudioGraph().catch(() => {}) : Promise.resolve());
          cfg.pushDiagnostic?.("play_preflight", "step=after_resume_audio_graph");
          cfg.ensureTimeline?.();
          cfg.pushDiagnostic?.("play_preflight", "step=after_ensure_timeline");
          cfg.resetSession?.({ silentDiagnostic: true });
          cfg.pushDiagnostic?.("play_preflight", "step=after_reset_session");
          const sessionId = cfg.bumpPlaybackSession ? cfg.bumpPlaybackSession() : 0;
          cfg.pushDiagnostic?.("play_preflight", "step=after_bump_session | session=" + String(sessionId));
          const loopBounds = cfg.getLoopBounds ? cfg.getLoopBounds() : null;
          cfg.pushDiagnostic?.("play_preflight", "step=after_get_loop_bounds | hasLoop=" + String(!!loopBounds));
          const totalDuration = cfg.getTimelineDuration ? cfg.getTimelineDuration() : 0;
          const editedTime = cfg.getEditedTime ? cfg.getEditedTime() : 0;
          let playbackStart = editedTime;
          if (loopBounds) {
            playbackStart = editedTime >= loopBounds.start && editedTime <= loopBounds.end
              ? editedTime
              : loopBounds.start;
          } else if (totalDuration > 0 && editedTime >= totalDuration - 0.01) {
            playbackStart = 0;
          }
          cfg.pushDiagnostic?.("play_preflight", "step=after_compute_playback_start | start=" + Number(playbackStart || 0).toFixed(3));
          cfg.pushDiagnostic?.("play_requested", "start=" + Number(playbackStart || 0).toFixed(3));
          if ((cfg.canUseClipPlayback && cfg.canUseClipPlayback()) || canStartClipPlayback) {
            cfg.setTransportState?.("starting");
            cfg.setEditedTime?.(playbackStart);
            cfg.pushDiagnostic?.("play_preflight", "step=before_schedule | session=" + String(sessionId));
            const didSchedule = cfg.scheduleClipPlayback
              ? cfg.scheduleClipPlayback(playbackStart, loopBounds ? loopBounds.end : undefined, sessionId)
              : false;
            cfg.pushDiagnostic?.("play_preflight", "step=after_schedule | scheduled=" + String(!!didSchedule) + " | session=" + String(sessionId));
            if (!didSchedule) {
              cfg.pushDiagnostic?.("play_rejected", "reason=schedule-failed");
              cfg.resetSession?.({ silentDiagnostic: true });
              cfg.updatePlayState?.();
              cfg.updateUi?.({ render: true, applyGain: true });
              return null;
            }
            if (!cfg.commitPlaybackStart?.(sessionId, playbackStart, loopBounds)) {
              cfg.resetSession?.({ silentDiagnostic: true });
            }
            return null;
          }
          cfg.setClipPlaybackLoopActive?.(false);
          cfg.setLoopSelectionActive?.(false);
          cfg.setPlaybackAnchor?.(performance.now(), playbackStart);
          cfg.beginPlaybackSession?.("native-start");
          const position = cfg.getTimelinePosition ? cfg.getTimelinePosition(playbackStart) : null;
          if (position && position.segment && position.segment.type === "media") {
            cfg.seekEditedTime?.(playbackStart, { play: true });
          } else if (media) {
            media.pause();
          }
          cfg.startVisualLoop?.("native");
          cfg.pushDiagnostic?.("play_started", "mode=native");
          cfg.updatePlayState?.();
          return null;
        } catch (error) {
          cfg.pushDiagnostic?.("play_start_failed", "message=" + String((error && error.message) || error || "unknown"));
          cfg.resetSession?.({ silentDiagnostic: true });
          cfg.updatePlayState?.();
          cfg.updateUi?.({ render: true, applyGain: true });
          return null;
        }
      },
      restartAfterFinished(config) {
        const cfg = config && typeof config === "object" ? config : {};
        const transportState = cfg.getTransportState ? cfg.getTransportState() : "idle";
        if (transportState !== "finished") {
          return cfg.startPlaybackLoop ? cfg.startPlaybackLoop() : null;
        }
        cfg.pushDiagnostic?.("play_restart_after_finished", "");
        cfg.setEditedTime?.(0);
        cfg.setViewportFocusTime?.(0);
        cfg.updateUi?.({ render: true, applyGain: true });
        cfg.syncPlayhead?.();
        return cfg.startPlaybackLoop ? cfg.startPlaybackLoop() : null;
      },
      handlePlayToggle(config) {
        const cfg = config && typeof config === "object" ? config : {};
        const getActiveMedia = typeof cfg.getActiveMedia === "function" ? cfg.getActiveMedia : null;
        const canStartClipPlayback = typeof cfg.canStartClipPlayback === "function" ? cfg.canStartClipPlayback : null;
        const isPlaying = typeof cfg.isPlaying === "function" ? cfg.isPlaying : null;
        const getTransportState = typeof cfg.getTransportState === "function" ? cfg.getTransportState : null;
        const onPause = typeof cfg.onPause === "function" ? cfg.onPause : null;
        const onStart = typeof cfg.onStart === "function" ? cfg.onStart : null;
        const onRestartAfterFinished = typeof cfg.onRestartAfterFinished === "function" ? cfg.onRestartAfterFinished : null;
        const onRejected = typeof cfg.onRejected === "function" ? cfg.onRejected : null;
        const onStartFailed = typeof cfg.onStartFailed === "function" ? cfg.onStartFailed : null;
        const onAfterToggle = typeof cfg.onAfterToggle === "function" ? cfg.onAfterToggle : null;
        const pushDiagnostic = typeof cfg.pushDiagnostic === "function" ? cfg.pushDiagnostic : null;
        const media = getActiveMedia ? getActiveMedia() : null;
        const canStart = canStartClipPlayback ? !!canStartClipPlayback() : false;

        if ((!media || !media.src) && !canStart) {
          if (pushDiagnostic) {
            pushDiagnostic("play_click_rejected", "reason=no-media");
          }
          if (onRejected) {
            onRejected();
          }
          return null;
        }

        if (pushDiagnostic) {
          pushDiagnostic("play_button_click", "");
        }

        if (isPlaying && isPlaying()) {
          if (onPause) {
            onPause();
          }
          if (onAfterToggle) {
            onAfterToggle();
          }
          return null;
        }

        const startPromise = getTransportState && getTransportState() === "finished"
          ? (onRestartAfterFinished ? onRestartAfterFinished() : null)
          : (onStart ? onStart() : null);

        if (startPromise && typeof startPromise.catch === "function") {
          startPromise.catch((error) => {
            if (pushDiagnostic) {
              pushDiagnostic("play_click_start_failed", "message=" + String((error && error.message) || error || "unknown"));
            }
            if (onStartFailed) {
              onStartFailed(error);
            }
          });
        }

        if (onAfterToggle) {
          onAfterToggle();
        }
        return startPromise;
      }
    };
  }

  global.ReviewCutPlaybackController = {
    create: createReviewCutPlaybackController
  };
})(window);
