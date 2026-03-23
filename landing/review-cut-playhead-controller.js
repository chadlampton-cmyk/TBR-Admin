(function initReviewCutPlayheadControllerModule(global) {
  "use strict";

  function createReviewCutPlayheadController(config) {
    const elements = config && typeof config === "object" ? config : {};
    const root = elements.root || null;
    const line = elements.line || null;
    const cap = elements.cap || null;
    const waveCanvas = elements.waveCanvas || null;
    const state = {
      transportState: "idle",
      playbackViewportAnchorTime: null
    };

    function setTransportState(nextState, currentSeconds) {
      const normalized = String(nextState || "").toLowerCase();
      state.transportState = normalized || "idle";
      if (normalized === "playing") {
        if (!Number.isFinite(state.playbackViewportAnchorTime)) {
          state.playbackViewportAnchorTime = Math.max(0, Number(currentSeconds) || 0);
        }
        return;
      }
      if (normalized === "idle") {
        state.playbackViewportAnchorTime = null;
      }
    }

    function setPlaybackViewportAnchorTime(seconds) {
      if (!Number.isFinite(seconds)) {
        state.playbackViewportAnchorTime = null;
        return;
      }
      state.playbackViewportAnchorTime = Math.max(0, Number(seconds) || 0);
    }

    function clearPlaybackViewportAnchorTime() {
      state.playbackViewportAnchorTime = null;
    }

    function getViewportAnchor(currentSeconds, explicitFocusTime) {
      if (Number.isFinite(explicitFocusTime)) {
        return Math.max(0, Number(explicitFocusTime) || 0);
      }
      if (state.transportState === "playing" && Number.isFinite(state.playbackViewportAnchorTime)) {
        return Math.max(0, Number(state.playbackViewportAnchorTime) || 0);
      }
      return Math.max(0, Number(currentSeconds) || 0);
    }

    function hide() {
      if (!root) {
        return;
      }
      root.style.opacity = "0";
    }

    function render(renderConfig) {
      if (!root || !line || !cap || !waveCanvas) {
        return false;
      }
      const cfg = renderConfig && typeof renderConfig === "object" ? renderConfig : {};
      const duration = Math.max(0, Number(cfg.duration) || 0);
      const currentSeconds = Math.max(0, Math.min(duration, Number(cfg.currentSeconds) || 0));
      const layout = cfg.layout || null;
      const viewport = cfg.viewport || null;
      if (!(duration > 0) || !layout || !viewport) {
        hide();
        return false;
      }
      const currentProgress = duration > 0 ? Math.max(0, Math.min(1, currentSeconds / duration)) : 0;
      const windowSize = Math.max(0.000001, Number(viewport.windowSize) || 1);
      const windowStart = Math.max(0, Number(viewport.windowStart) || 0);
      const windowProgress = windowSize < 1
        ? Math.max(0, Math.min(1, (currentProgress - windowStart) / windowSize))
        : currentProgress;
      const playheadX = Number(layout.timelineX || 0) + Number(layout.timelineWidth || 0) * windowProgress;
      const rect = waveCanvas.getBoundingClientRect();
      const scaleX = rect.width > 0 && waveCanvas.width > 0 ? rect.width / waveCanvas.width : 1;
      const scaleY = rect.height > 0 && waveCanvas.height > 0 ? rect.height / waveCanvas.height : 1;
      const cssLeft = Math.round(playheadX * scaleX);
      const cssTop = Math.max(0, (Number(layout.meterY || 0) - 4) * scaleY);
      const cssHeight = Math.max(0, (Number(layout.meterHeight || 0) + 8) * scaleY);
      root.style.opacity = "1";
      root.style.left = cssLeft + "px";
      root.style.top = cssTop + "px";
      root.style.height = cssHeight + "px";
      line.style.height = cssHeight + "px";
      cap.style.top = "0px";
      return true;
    }

    return {
      setTransportState,
      setPlaybackViewportAnchorTime,
      clearPlaybackViewportAnchorTime,
      getViewportAnchor,
      hide,
      render,
      snapshot() {
        return { ...state };
      }
    };
  }

  global.ReviewCutPlayheadController = {
    create: createReviewCutPlayheadController
  };
})(window);
