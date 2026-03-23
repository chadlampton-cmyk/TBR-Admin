(function initReviewCutPlaybackModule(global) {
  "use strict";

  function isNativeMediaPlaying(media) {
    return !!(media && media.src && !media.paused && !media.ended);
  }

  function syncEditedTimeFromMedia(config) {
    if (!config || config.canUseClipPlayback) {
      return { changed: false, editedTime: Number(config && config.editedTime) || 0 };
    }
    const media = config.media;
    if (!media || !Number.isFinite(media.currentTime)) {
      return { changed: false, editedTime: Number(config && config.editedTime) || 0 };
    }
    const duration = Math.max(0, Number(config.duration) || 0);
    const currentEditedTime = Math.max(0, Number(config.editedTime) || 0);
    const nextEditedTime = Math.max(0, Math.min(duration, Number(media.currentTime) || 0));
    return {
      changed: Math.abs(nextEditedTime - currentEditedTime) > 0.01,
      editedTime: nextEditedTime
    };
  }

  global.ReviewCutPlayback = {
    isNativeMediaPlaying,
    syncEditedTimeFromMedia
  };
})(window);
