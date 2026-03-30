window.OnAirAudioState = (() => {
  function clampCueMultiplier(value) {
    return Math.max(0, Math.min(1.5, Number(value) || 0));
  }

  function create(config) {
    const state = config && typeof config === "object" ? config : {};

    function getPrimaryCue() {
      return typeof state.getPrimaryCue === "function" ? state.getPrimaryCue() : null;
    }

    function getAuxCues() {
      return typeof state.getAuxCues === "function" ? state.getAuxCues() : [];
    }

    function setAuxCues(nextValue) {
      if (typeof state.setAuxCues === "function") {
        state.setAuxCues(Array.isArray(nextValue) ? nextValue : []);
      }
    }

    return {
      getOnAirCueVolumeMultiplier(cueTarget) {
        if (!cueTarget) {
          return 1;
        }
        if (cueTarget.kind === "primary") {
          const primaryVolume = typeof state.getPrimaryVolume === "function" ? state.getPrimaryVolume() : 1;
          return clampCueMultiplier(primaryVolume);
        }
        const cue = cueTarget.cue || null;
        return clampCueMultiplier(cue && cue.volumeMultiplier);
      },

      getOnAirCueEffectiveVolume(cueTarget) {
        const baseVolume = typeof state.getBaseVolume === "function" ? state.getBaseVolume() : 1;
        const duckMultiplier = typeof state.getDuckMultiplier === "function" ? state.getDuckMultiplier() : 1;
        return Math.max(
          0,
          Math.min(1, baseVolume * this.getOnAirCueVolumeMultiplier(cueTarget) * duckMultiplier)
        );
      },

      getActiveOnAirMusicCueTargets() {
        const targets = [];
        const primaryCue = getPrimaryCue();
        if (primaryCue && !primaryCue.cleanedUp) {
          targets.push({
            kind: "primary",
            cue: primaryCue,
            getRecordingGainNode: () => null,
            setFadeFrameId(value) {
              primaryCue.fadeTimeoutId = value;
            },
            getFadeFrameId() {
              return primaryCue.fadeTimeoutId || 0;
            }
          });
        }
        const nextAuxCues = getAuxCues().filter((cue) => cue && !cue.cleanedUp);
        setAuxCues(nextAuxCues);
        nextAuxCues.forEach((cue) => {
          targets.push({
            kind: "aux",
            cue,
            getRecordingGainNode: () => null,
            setFadeFrameId(value) {
              cue.fadeTimeoutId = value;
            },
            getFadeFrameId() {
              return cue.fadeTimeoutId || 0;
            }
          });
        });
        return targets;
      },

      createExplicitOnAirMusicCueTarget(cue) {
        if (!cue) {
          return null;
        }
        return {
          kind: cue.kind || "aux",
          cue,
          getRecordingGainNode: () => null,
          setFadeFrameId(value) {
            cue.fadeTimeoutId = value;
          },
          getFadeFrameId() {
            return cue.fadeTimeoutId || 0;
          }
        };
      },

      createPrimaryOnAirMusicCueTarget() {
        const primaryCue = getPrimaryCue();
        if (!primaryCue) {
          return null;
        }
        return {
          kind: "primary",
          cue: primaryCue,
          getRecordingGainNode: () => null,
          setFadeFrameId(value) {
            primaryCue.fadeTimeoutId = value;
          },
          getFadeFrameId() {
            return primaryCue.fadeTimeoutId || 0;
          },
          setAutoFadeInTimerId(value) {
            primaryCue.autoFadeInTimerId = value;
          },
          getAutoFadeInTimerId() {
            return primaryCue.autoFadeInTimerId || 0;
          },
          setAutoFadeOutTimerId(value) {
            primaryCue.autoFadeOutTimerId = value;
          },
          getAutoFadeOutTimerId() {
            return primaryCue.autoFadeOutTimerId || 0;
          }
        };
      },

      getOnAirCueDisplayName(cueTarget) {
        if (!cueTarget) {
          return "Live cue";
        }
        if (cueTarget.kind === "primary") {
          if (cueTarget.cue && cueTarget.cue.trackName) {
            return cueTarget.cue.trackName;
          }
          const musicLibrary = typeof state.getMusicLibrary === "function" ? state.getMusicLibrary() : [];
          const currentTrackId = typeof state.getCurrentTrackId === "function" ? state.getCurrentTrackId() : "";
          const activeTrack = musicLibrary.find((track) => track.id === currentTrackId);
          return activeTrack ? activeTrack.name : "Primary cue";
        }
        return String((cueTarget.cue && cueTarget.cue.trackName) || "Layered cue");
      },

      clearOnAirMusicAutoFadeTimers(target) {
        if (!target) {
          return;
        }
        const inTimer = target.getAutoFadeInTimerId ? target.getAutoFadeInTimerId() : 0;
        const outTimer = target.getAutoFadeOutTimerId ? target.getAutoFadeOutTimerId() : 0;
        if (inTimer) {
          clearTimeout(inTimer);
          target.setAutoFadeInTimerId(0);
        }
        if (outTimer) {
          clearTimeout(outTimer);
          target.setAutoFadeOutTimerId(0);
        }
      },

      hasOnAirPrimaryCue() {
        const primaryCue = getPrimaryCue();
        return !!(primaryCue && !primaryCue.cleanedUp);
      }
    };
  }

  return { create };
})();
