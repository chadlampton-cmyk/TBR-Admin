(function initReviewCutInteractionControllerModule(global) {
  "use strict";

  function bind(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const els = cfg.elements || {};
    const api = cfg.api || {};

    els.playBtn?.addEventListener("click", () => {
      if (typeof api.onPlayToggle === "function") {
        api.onPlayToggle();
      }
    });

    els.scrub?.addEventListener("input", () => {
      if (typeof api.onScrubInput === "function") {
        api.onScrubInput(els.scrub.value);
      }
    });

    els.scrub?.addEventListener("change", () => {
      if (typeof api.onScrubCommit === "function") {
        api.onScrubCommit();
      }
    });

    els.pan?.addEventListener("input", () => {
      if (typeof api.onPanInput === "function") {
        api.onPanInput(els.pan.value);
      }
    });

    els.closeBtn?.addEventListener("click", () => {
      if (typeof api.onClose === "function") {
        api.onClose();
      }
    });

    els.loadBtn?.addEventListener("click", () => {
      if (typeof api.onLoadRequest === "function") {
        api.onLoadRequest();
      }
    });

    els.backdrop?.addEventListener("click", (event) => {
      if (event.target !== els.backdrop) {
        return;
      }
      if (typeof api.onClose === "function") {
        api.onClose();
      }
    });

    els.fileInput?.addEventListener("change", async (event) => {
      if (typeof api.onFileChosen !== "function") {
        return;
      }
      const file = event.target && event.target.files ? event.target.files[0] : null;
      if (!file) {
        return;
      }
      await api.onFileChosen(file);
      event.target.value = "";
    });

    els.waveCanvas?.addEventListener("pointerdown", (event) => {
      if (typeof api.onWavePointerDown === "function") {
        api.onWavePointerDown(event);
      }
    });

    els.waveCanvas?.addEventListener("pointermove", (event) => {
      if (typeof api.onWavePointerMove === "function") {
        api.onWavePointerMove(event);
      }
    });

    els.waveCanvas?.addEventListener("pointerup", (event) => {
      if (typeof api.onWavePointerUp === "function") {
        api.onWavePointerUp(event);
      }
    });

    els.waveCanvas?.addEventListener("pointerleave", () => {
      if (typeof api.onWavePointerLeave === "function") {
        api.onWavePointerLeave();
      }
    });

    els.waveCanvas?.addEventListener("pointercancel", () => {
      if (typeof api.onWavePointerCancel === "function") {
        api.onWavePointerCancel();
      }
    });

    els.playhead?.addEventListener("pointerdown", (event) => {
      if (typeof api.onWavePointerDown === "function") {
        api.onWavePointerDown(event);
      }
    });

    els.playhead?.addEventListener("pointermove", (event) => {
      if (typeof api.onWavePointerMove === "function") {
        api.onWavePointerMove(event);
      }
    });

    els.playhead?.addEventListener("pointerup", (event) => {
      if (typeof api.onWavePointerUp === "function") {
        api.onWavePointerUp(event);
      }
    });

    els.playhead?.addEventListener("pointerleave", () => {
      if (typeof api.onWavePointerLeave === "function") {
        api.onWavePointerLeave();
      }
    });

    els.playhead?.addEventListener("pointercancel", () => {
      if (typeof api.onWavePointerCancel === "function") {
        api.onWavePointerCancel();
      }
    });
  }

  global.ReviewCutInteractionController = {
    bind
  };
})(window);
