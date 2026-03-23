(function initReviewCutViewportControllerModule(global) {
  "use strict";

  function createReviewCutViewportController() {
    const state = {
      explicitFocusTime: null
    };

    function setExplicitFocusTime(seconds, duration) {
      if (!Number.isFinite(seconds)) {
        state.explicitFocusTime = null;
        return null;
      }
      const safeDuration = Math.max(0, Number(duration) || 0);
      state.explicitFocusTime = safeDuration > 0
        ? Math.max(0, Math.min(safeDuration, Number(seconds) || 0))
        : 0;
      return state.explicitFocusTime;
    }

    function clearExplicitFocusTime() {
      state.explicitFocusTime = null;
    }

    function getExplicitFocusTime() {
      return Number.isFinite(state.explicitFocusTime) ? state.explicitFocusTime : null;
    }

    function getViewportAnchor(currentSeconds, playbackAnchorSeconds) {
      if (Number.isFinite(state.explicitFocusTime)) {
        return Math.max(0, Number(state.explicitFocusTime) || 0);
      }
      if (Number.isFinite(playbackAnchorSeconds)) {
        return Math.max(0, Number(playbackAnchorSeconds) || 0);
      }
      return Math.max(0, Number(currentSeconds) || 0);
    }

    function getViewport(config) {
      const cfg = config && typeof config === "object" ? config : {};
      const durationSeconds = Math.max(0, Number(cfg.durationSeconds) || 0);
      const currentSeconds = Math.max(0, Number(cfg.currentSeconds) || 0);
      const playbackAnchorSeconds = Number(cfg.playbackAnchorSeconds);
      const zoomLevel = Math.max(1, Number(cfg.zoomLevel) || 1);
      const getViewportFn = typeof cfg.getViewportFn === "function" ? cfg.getViewportFn : null;
      const focusSeconds = getViewportAnchor(currentSeconds, playbackAnchorSeconds);
      if (!getViewportFn) {
        return { currentProgress: 0, windowSize: 1, windowStart: 0, windowEnd: 1 };
      }
      return getViewportFn({
        durationSeconds,
        focusSeconds,
        zoomLevel
      });
    }

    function getPanFocusTime(rawValue, viewport, durationSeconds) {
      const safeDuration = Math.max(0, Number(durationSeconds) || 0);
      if (!(safeDuration > 0) || !viewport) {
        return 0;
      }
      const maxStart = Math.max(0, 1 - Math.max(0, Number(viewport.windowSize) || 1));
      if (!(maxStart > 0)) {
        return Math.max(0, Math.min(safeDuration, Number(durationSeconds) || 0));
      }
      const sliderProgress = Math.max(0, Math.min(1, (Number(rawValue) || 0) / 1000));
      const nextWindowStart = maxStart * sliderProgress;
      return (nextWindowStart + Number(viewport.windowSize || 1) / 2) * safeDuration;
    }

    return {
      setExplicitFocusTime,
      clearExplicitFocusTime,
      getExplicitFocusTime,
      getViewportAnchor,
      getViewport,
      getPanFocusTime,
      snapshot() {
        return { ...state };
      }
    };
  }

  global.ReviewCutViewportController = {
    create: createReviewCutViewportController
  };
})(window);
