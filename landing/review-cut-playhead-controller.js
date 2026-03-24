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
      playbackViewportAnchorTime: null,
      isVisible: false,
      cssLeft: null,
      cssTop: null,
      cssHeight: null
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
      if (!state.isVisible) {
        return;
      }
      root.style.opacity = "0";
      state.isVisible = false;
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
      const canvasRect = waveCanvas.getBoundingClientRect();
      const parentRect = root.parentElement && typeof root.parentElement.getBoundingClientRect === "function"
        ? root.parentElement.getBoundingClientRect()
        : canvasRect;
      const scaleX = canvasRect.width > 0 && waveCanvas.width > 0 ? canvasRect.width / waveCanvas.width : 1;
      const scaleY = canvasRect.height > 0 && waveCanvas.height > 0 ? canvasRect.height / waveCanvas.height : 1;
      const offsetLeft = Math.max(0, canvasRect.left - parentRect.left);
      const offsetTop = Math.max(0, canvasRect.top - parentRect.top);
      const cssLeft = offsetLeft + playheadX * scaleX;
      const cssTop = offsetTop + Math.max(0, (Number(layout.meterY || 0) - 4) * scaleY);
      const cssHeight = Math.max(0, (Number(layout.meterHeight || 0) + 8) * scaleY);
      if (!state.isVisible) {
        root.style.opacity = "1";
        state.isVisible = true;
      }
      if (state.cssLeft !== cssLeft) {
        root.style.left = cssLeft.toFixed(3) + "px";
        state.cssLeft = cssLeft;
      }
      if (state.cssTop !== cssTop) {
        root.style.top = cssTop.toFixed(3) + "px";
        state.cssTop = cssTop;
      }
      if (state.cssHeight !== cssHeight) {
        root.style.height = cssHeight.toFixed(3) + "px";
        line.style.height = cssHeight.toFixed(3) + "px";
        state.cssHeight = cssHeight;
      }
      if (cap.style.top !== "0px") {
        cap.style.top = "0px";
      }
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
