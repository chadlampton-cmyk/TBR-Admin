(function initReviewCutMediaControllerModule(global) {
  "use strict";

  function bind(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const els = cfg.elements || {};
    const api = cfg.api || {};

    els.audio?.addEventListener("loadedmetadata", () => {
      api.onAudioLoadedMetadata?.();
    });

    els.audio?.addEventListener("loadeddata", () => {
      api.onAudioLoadedData?.();
    });

    els.audio?.addEventListener("canplay", () => {
      api.onAudioCanPlay?.();
    });

    els.audio?.addEventListener("play", () => {
      api.onAudioPlay?.();
    });

    els.audio?.addEventListener("pause", () => {
      api.onAudioPause?.();
    });

    els.audio?.addEventListener("ended", () => {
      api.onAudioEnded?.();
    });

    els.audio?.addEventListener("error", () => {
      api.onAudioError?.();
    });

    els.audio?.addEventListener("timeupdate", () => {
      api.onAudioTimeUpdate?.();
    });

    els.video?.addEventListener("loadedmetadata", () => {
      api.onVideoLoadedMetadata?.();
    });

    els.video?.addEventListener("loadeddata", () => {
      api.onVideoLoadedData?.();
    });

    els.video?.addEventListener("play", () => {
      api.onVideoPlay?.();
    });

    els.video?.addEventListener("pause", () => {
      api.onVideoPause?.();
    });

    els.video?.addEventListener("ended", () => {
      api.onVideoEnded?.();
    });

    els.video?.addEventListener("timeupdate", () => {
      api.onVideoTimeUpdate?.();
    });
  }

  global.ReviewCutMediaController = {
    bind
  };
})(window);
