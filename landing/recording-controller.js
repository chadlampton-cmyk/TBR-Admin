(function initRecordingControllerModule(global) {
  "use strict";

  function createRecordingController(config) {
    const cfg = config && typeof config === "object" ? config : {};
    return {
      async stopHostRecordingWithReason(reasonText) {
        await cfg.stopOnAirMusicCue?.().catch(() => {
          // Ignore cue-stop failures during recording finalize.
        });
        let ready = false;
        if (cfg.recordingDemoMode) {
          cfg.abortLocalRecordingCapture?.();
          ready = true;
        } else {
          const blob = await cfg.stopLocalRecordingCaptureAndFinalize?.().catch(() => null);
          const recordingAudioBlob = cfg.getRecordingAudioBlob ? cfg.getRecordingAudioBlob() : null;
          ready = !!((blob && blob.size > 0) || (recordingAudioBlob && recordingAudioBlob.size > 0));
          if (ready && cfg.getAppendFinishedRecordingToTimeline?.()) {
            await cfg.appendLatestRecordingAssetToOnAirReviewTimeline?.().catch(() => false);
          }
        }
        cfg.setAppendFinishedRecordingToTimeline?.(false);
        this.clearRecordingAutomation();
        cfg.setRecordingStartInProgress?.(false);
        cfg.setOnAirCountdownPopoutOpen?.(false);
        cfg.setRecordingState?.(false, ready, cfg.sessionUsername);
        if (ready) {
          cfg.beginRecordingProcessingPhase?.();
          cfg.saveCurrentRecordingToPostProduction?.()
            .then((asset) => {
              if (!asset) {
                return;
              }
              cfg.setOnAirMediaStatus?.("Recording saved to Post-Production as " + String(asset.title || "draft") + ".");
              if (cfg.getRecordingWorkflowState?.() !== "processing") {
                cfg.setOnAirReviewStatus?.(
                  "Recording saved to Post-Production. Open Review Cut to polish the draft or return to the library later."
                );
              }
            })
            .catch((error) => {
              cfg.setOnAirMediaStatus?.(
                (error && error.message ? error.message : "Recording saved locally but could not be pushed to Post-Production.") +
                " The local review asset is still available in this browser."
              );
            });
        } else {
          cfg.setRecordingWorkflowState?.("ready");
        }
        cfg.sendHostSignalToAll?.("host-record-state", { recording: false, downloadReady: ready, startedAt: 0 }).catch(() => {
          // Ignore sync errors.
        });
        if (reasonText) {
          cfg.sendChat?.(reasonText).catch(() => {
            // Ignore chat post errors.
          });
        }
      },

      clearRecordingAutomation() {
        cfg.clearRecordingAutomationTimers?.();
      },

      setupRecordingAutomation() {
        this.clearRecordingAutomation();

        const adminMaxMinutes = Math.max(20, Number(cfg.getAdminRecordingMaxMinutes?.() || 180));
        const autoStopMinutes = (() => {
          const requested = cfg.getRecordingAutoStopMinutes?.();
          if (!requested) {
            return adminMaxMinutes;
          }
          return Math.min(requested, adminMaxMinutes);
        })();
        if (autoStopMinutes > 0) {
          cfg.setRecordingAutoStopTimerId?.(window.setTimeout(() => {
            if (!cfg.isRecording?.() || !cfg.isCurrentUserHost?.()) {
              return;
            }
            cfg.setOnAirMediaStatus?.("Auto-stop safety timer reached. Finalizing recording.");
            this.stopHostRecordingWithReason("Recording auto-stopped after " + autoStopMinutes + " minutes.").catch(() => {
              // Ignore stop races.
            });
          }, autoStopMinutes * 60 * 1000));
        }

        const autoSplitMinutes = cfg.getRecordingAutoSplitMinutes?.();
        if (cfg.recordingDemoMode) {
          return;
        }
        if (autoSplitMinutes > 0) {
          cfg.setRecordingAutoSplitTimerId?.(window.setInterval(() => {
            if (!cfg.isRecording?.() || !cfg.isCurrentUserHost?.() || cfg.isRecordingSplitInProgress?.()) {
              return;
            }
            cfg.setRecordingSplitInProgress?.(true);
            cfg.setOnAirMediaStatus?.("Auto-splitting recording segment...");
            cfg.stopLocalRecordingCaptureAndFinalize?.()
              .then(async (blob) => {
                if (!(blob && blob.size > 0)) {
                  throw new Error("Segment finalize failed.");
                }
                await cfg.startLocalRecordingCapture?.(false);
                cfg.setOnAirMediaStatus?.("Auto-split complete. Recording continues.");
                cfg.sendChat?.("Recording auto-split at " + autoSplitMinutes + " minute interval.").catch(() => {
                  // Ignore chat post errors.
                });
              })
              .catch(() => {
                cfg.setOnAirMediaStatus?.("Auto-split failed. Recording stopped for safety.");
                this.stopHostRecordingWithReason("Recording stopped because auto-split failed.").catch(() => {
                  // Ignore stop races.
                });
              })
              .finally(() => {
                cfg.setRecordingSplitInProgress?.(false);
              });
          }, autoSplitMinutes * 60 * 1000));
        }
      },

      async startHostRecordingFlow() {
        if (!cfg.canCurrentUserControlRecording?.()) {
          cfg.setRecordingStartInProgress?.(false);
          cfg.setOnAirCountdownPopoutOpen?.(false);
          cfg.setOnAirMediaStatus?.("Recording is restricted to admins right now.");
          return;
        }
        cfg.setRecordingStartInProgress?.(true);
        cfg.setRecordingWorkflowState?.("countdown");
        cfg.clearRecordingProcessingTimer?.();
        this.clearRecordingAutomation();
        if (!cfg.recordingDemoMode) {
          cfg.ensureOnAirReviewTimeline?.();
          cfg.setAppendFinishedRecordingToTimeline?.(false);
          if (cfg.hasLocalRecordingAsset?.()) {
            await cfg.convertCurrentRecordingAssetToOnAirReviewClipAsset?.().catch(() => null);
          }
          cfg.setAppendFinishedRecordingToTimeline?.(cfg.getOnAirReviewMediaClipCount?.() > 0);
          cfg.clearLocalRecordingAsset?.();
        }
        const countdown = cfg.getRecordingCountdownSeconds?.() || 0;
        await cfg.primeOnAirMusicCueForRecordingStart?.().catch(() => false);
        cfg.setOnAirMediaStatus?.("Recording starts in " + countdown + " seconds...");
        cfg.sendChat?.("Recording starts in " + countdown + " seconds.").catch(() => {
          // Ignore chat post errors.
        });

        await cfg.runRecordingCountdown?.(countdown);

        if (!cfg.isCurrentUserHost?.()) {
          cfg.setRecordingStartInProgress?.(false);
          cfg.setOnAirCountdownPopoutOpen?.(false);
          cfg.setRecordingWorkflowState?.("ready");
          cfg.setOnAirMediaStatus?.("Recording start canceled: host changed.");
          return;
        }

        const startedAt = Date.now();
        try {
          if (!cfg.recordingDemoMode) {
            await cfg.startLocalRecordingCapture?.(false);
          }
        } catch (error) {
          cfg.setRecordingStartInProgress?.(false);
          cfg.setOnAirCountdownPopoutOpen?.(false);
          cfg.setRecordingWorkflowState?.("ready");
          cfg.setOnAirMediaStatus?.(error && error.message ? error.message : "Recording could not start.");
          throw error;
        }
        cfg.setRecordingState?.(true, false, cfg.sessionUsername, startedAt);
        this.setupRecordingAutomation();
        await cfg.startQueuedOnAirMusicForRecording?.();
        cfg.setRecordingStartInProgress?.(false);
        cfg.sendHostSignalToAll?.("host-record-state", { recording: true, downloadReady: false, startedAt }).catch(() => {
          // Ignore sync errors.
        });
        cfg.sendChat?.("Recording started by " + (cfg.sessionDisplayName || cfg.sessionUsername) + ".").catch(() => {
          // Ignore chat post errors.
        });
      }
    };
  }

  global.RecordingController = {
    create: createRecordingController
  };
})(window);
