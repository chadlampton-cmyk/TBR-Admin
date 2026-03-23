(function initReviewCutSessionControllerModule(global) {
  "use strict";

  function syncEditedTimeFromMedia(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const syncFn = typeof cfg.syncFn === "function" ? cfg.syncFn : null;
    if (!syncFn) {
      return false;
    }
    const result = syncFn({
      canUseClipPlayback: !!(cfg.canUseClipPlayback && cfg.canUseClipPlayback()),
      media: cfg.getActiveMedia ? cfg.getActiveMedia() : null,
      duration: cfg.getTimelineDuration ? cfg.getTimelineDuration() : 0,
      editedTime: cfg.getEditedTime ? cfg.getEditedTime() : 0
    }) || { changed: false, editedTime: cfg.getEditedTime ? cfg.getEditedTime() : 0 };
    if (!result.changed) {
      return false;
    }
    cfg.setEditedTime?.(result.editedTime);
    return true;
  }

  function updateTimelineIndicators(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const shouldRender = cfg.render !== false;
    const duration = cfg.getTimelineDuration ? cfg.getTimelineDuration() : 0;
    const current = Math.max(0, Math.min(duration, Number(cfg.getEditedTime ? cfg.getEditedTime() : 0) || 0));
    const timeEl = cfg.elements && cfg.elements.time ? cfg.elements.time : null;
    const scrubEl = cfg.elements && cfg.elements.scrub ? cfg.elements.scrub : null;
    if (timeEl && typeof cfg.formatClock === "function") {
      timeEl.textContent = cfg.formatClock(current) + " / " + cfg.formatClock(duration);
    }
    if (scrubEl && !(cfg.isScrubInFlight && cfg.isScrubInFlight())) {
      const value = duration > 0 ? Math.round((current / duration) * 1000) : 0;
      scrubEl.max = String(duration > 0 ? 1000 : 1000);
      scrubEl.value = String(Math.max(0, Math.min(1000, value)));
    }
    if (shouldRender) {
      cfg.queueWaveRender?.();
    }
    cfg.syncPlayhead?.();
  }

  function seekEditedTime(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const options = cfg.options && typeof cfg.options === "object" ? cfg.options : {};
    cfg.ensureTimeline?.();
    if (!options.silentDiagnostic && cfg.pushDiagnostic) {
      cfg.pushDiagnostic(
        "seek",
        "target=" + Number(cfg.targetSeconds || 0).toFixed(3) +
          " | followViewport=" + String(!!options.followViewport) +
          " | play=" + String(!!options.play)
      );
    }
    const totalDuration = cfg.getTimelineDuration ? cfg.getTimelineDuration() : 0;
    const nextEditedTime = Math.max(0, Math.min(totalDuration, Number(cfg.targetSeconds) || 0));
    cfg.setEditedTime?.(nextEditedTime);
    if (options.followViewport) {
      cfg.setViewportFocusTime?.(nextEditedTime);
    }
    const media = cfg.getActiveMedia ? cfg.getActiveMedia() : null;
    const position = cfg.getTimelinePosition ? cfg.getTimelinePosition(nextEditedTime) : null;
    const activeLoopBounds = cfg.isLoopSelectionPlaybackActive && cfg.isLoopSelectionPlaybackActive()
      ? (cfg.getLoopBounds ? cfg.getLoopBounds() : null)
      : null;
    if (cfg.canUseClipPlayback && cfg.canUseClipPlayback()) {
      if (cfg.isPlaying && cfg.isPlaying()) {
        cfg.scheduleClipPlayback?.(nextEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
      } else {
        cfg.stopClipPlayback?.();
      }
    } else if (media && position && position.segment && position.segment.type === "media") {
      const targetSourceTime = Math.max(0, Number(position.sourceTime) || 0);
      if (Math.abs(Number(media.currentTime || 0) - targetSourceTime) > 0.06) {
        try {
          media.currentTime = targetSourceTime;
        } catch (error) {
          // Ignore seek races.
        }
      }
      if (options.play) {
        media.play().catch(() => {});
      } else if (!(cfg.isPlaying && cfg.isPlaying())) {
        media.pause();
      }
    } else if (media) {
      media.pause();
    }
    if (cfg.isPlaying && cfg.isPlaying()) {
      cfg.setPlaybackAnchor?.(performance.now(), nextEditedTime);
    }
    cfg.updateUi?.({ render: true, applyGain: true });
    cfg.syncPlayhead?.();
  }

  function stopVisualLoop(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const visualPlaybackMode = cfg.getVisualPlaybackMode ? cfg.getVisualPlaybackMode() : "";
    if (visualPlaybackMode && cfg.pushDiagnostic) {
      cfg.pushDiagnostic("visual_stop", "mode=" + String(visualPlaybackMode || ""));
    }
    const visualFrameId = cfg.getVisualFrameId ? cfg.getVisualFrameId() : 0;
    if (visualFrameId && cfg.cancelVisualFrame) {
      cfg.cancelVisualFrame(visualFrameId);
      cfg.clearVisualFrameId?.();
    }
    cfg.setVisualPlaybackMode?.("");
  }

  function advanceClipTransport(config) {
    const cfg = config && typeof config === "object" ? config : {};
    if (!(cfg.canCallbackContinue && cfg.canCallbackContinue(cfg.sessionId))) {
      return false;
    }
    const totalDuration = cfg.getTimelineDuration ? cfg.getTimelineDuration() : 0;
    const loopBounds = cfg.isLoopSelectionPlaybackActive && cfg.isLoopSelectionPlaybackActive()
      ? (cfg.getLoopBounds ? cfg.getLoopBounds() : null)
      : null;
    const elapsed = Math.max(0, (performance.now() - (cfg.getPlaybackAnchorAt ? cfg.getPlaybackAnchorAt() : 0)) / 1000);
    let nextEditedTime = Math.max(0, Math.min(totalDuration, (cfg.getPlaybackAnchorEditedTime ? cfg.getPlaybackAnchorEditedTime() : 0) + elapsed));
    if (loopBounds && nextEditedTime >= loopBounds.end - 0.01) {
      const loopStart = Math.max(0, Number(loopBounds.start) || 0);
      cfg.setEditedTime?.(loopStart);
      cfg.stopClipPlayback?.(cfg.sessionId);
      cfg.scheduleClipPlayback?.(loopStart, loopBounds.end, cfg.sessionId);
      cfg.setPlaybackAnchor?.(performance.now(), loopStart);
      cfg.updateTimelineIndicators?.({ render: false });
      return true;
    }
    cfg.setEditedTime?.(nextEditedTime);
    cfg.updateTimelineIndicators?.({ render: false });
    if (nextEditedTime >= totalDuration - 0.01) {
      cfg.finishSession?.("clip_reached_end", { resetToStart: false, finalTransportState: "finished" });
      return false;
    }
    return true;
  }

  function tickVisuals(config) {
    const cfg = config && typeof config === "object" ? config : {};
    try {
      cfg.pushDiagnostic?.("visual_tick_enter", "session=" + String(Number(cfg.sessionId) || 0));
      cfg.clearVisualFrameId?.();
      if ((cfg.getPlaybackSessionId ? cfg.getPlaybackSessionId() : 0) !== Number(cfg.sessionId)) {
        cfg.pushDiagnostic?.("visual_tick_guard_exit", "reason=session-mismatch | session=" + String(Number(cfg.sessionId) || 0));
        return;
      }
      const visualPlaybackMode = cfg.getVisualPlaybackMode ? cfg.getVisualPlaybackMode() : "";
      if (!cfg.isModalOpen || !cfg.isModalOpen() || !visualPlaybackMode) {
        cfg.pushDiagnostic?.("visual_tick_guard_exit", "reason=inactive-visual-mode | mode=" + String(visualPlaybackMode || ""));
        return;
      }
      if (visualPlaybackMode === "native" && !(cfg.isNativeMediaPlaying && cfg.isNativeMediaPlaying())) {
        cfg.pushDiagnostic?.("visual_tick_guard_exit", "reason=native-not-playing");
        cfg.stopVisualLoop?.();
        return;
      }
      if (visualPlaybackMode === "clip" && !(cfg.canCallbackContinue && cfg.canCallbackContinue(cfg.sessionId))) {
        cfg.pushDiagnostic?.("visual_tick_guard_exit", "reason=clip-callback-blocked | session=" + String(Number(cfg.sessionId) || 0));
        cfg.stopVisualLoop?.();
        return;
      }
      if (visualPlaybackMode === "clip") {
        if (!advanceClipTransport(cfg)) {
          cfg.pushDiagnostic?.("visual_tick_guard_exit", "reason=advance-returned-false | session=" + String(Number(cfg.sessionId) || 0));
          return;
        }
      } else {
        cfg.setEditedTime?.(cfg.getLivePlaybackTime ? cfg.getLivePlaybackTime() : (cfg.getEditedTime ? cfg.getEditedTime() : 0));
        cfg.updateTimelineIndicators?.({ render: false });
      }
      cfg.ensurePlaybackViewportVisibility?.();
      cfg.pushDiagnostic?.(
        "visual_tick_after_advance",
        "session=" + String(Number(cfg.sessionId) || 0) + " | mode=" + String(visualPlaybackMode || "")
      );
      cfg.syncPlayhead?.();
      if (cfg.requestFrame && cfg.setVisualFrameId) {
        cfg.setVisualFrameId(cfg.requestFrame(() => tickVisuals(cfg)));
        cfg.pushDiagnostic?.("visual_tick_rescheduled", "session=" + String(Number(cfg.sessionId) || 0));
      }
    } catch (error) {
      cfg.pushDiagnostic?.(
        "visual_tick_failed",
        "message=" + String((error && error.message) || error || "unknown") + " | session=" + String(Number(cfg.sessionId) || 0)
      );
      cfg.stopVisualLoop?.();
    }
  }

  function startVisualLoop(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const nextMode = String(cfg.mode || "").toLowerCase();
    if (nextMode !== "clip" && nextMode !== "native") {
      return;
    }
    if (nextMode === "native" && !(cfg.isNativeMediaPlaying && cfg.isNativeMediaPlaying())) {
      return;
    }
    if (nextMode === "clip" && (cfg.getTransportState ? cfg.getTransportState() : "") !== "playing") {
      return;
    }
    cfg.setVisualPlaybackMode?.(nextMode);
    cfg.pushDiagnostic?.("visual_start", "mode=" + nextMode);
    if (cfg.getVisualFrameId && cfg.getVisualFrameId()) {
      return;
    }
    const sessionId = cfg.getPlaybackSessionId ? cfg.getPlaybackSessionId() : 0;
    if (cfg.requestFrame && cfg.setVisualFrameId) {
      cfg.setVisualFrameId(cfg.requestFrame(() => tickVisuals({
        ...cfg,
        sessionId
      })));
    }
  }

  global.ReviewCutSessionController = {
    syncEditedTimeFromMedia,
    updateTimelineIndicators,
    seekEditedTime,
    stopVisualLoop,
    advanceClipTransport,
    tickVisuals,
    startVisualLoop
  };
})(window);
