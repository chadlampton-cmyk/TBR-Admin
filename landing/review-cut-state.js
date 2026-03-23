(function initReviewCutStateModule(global) {
  "use strict";

  const MAX_TRACKS = 5;
  const MAX_LANE_INDEX = MAX_TRACKS - 1;
  const SOURCE_PALETTES = [
    { bodyTop: "rgba(88, 117, 148, 0.24)", bodyBottom: "rgba(30, 45, 60, 0.14)", accent: "rgba(177, 208, 238, 0.94)", stroke: "rgba(171, 197, 222, 0.34)", text: "rgba(231, 239, 247, 0.92)", wave: "rgba(219, 232, 245, 0.86)", waveBase: "rgba(214, 226, 238, 0.14)" },
    { bodyTop: "rgba(88, 137, 118, 0.24)", bodyBottom: "rgba(28, 50, 42, 0.14)", accent: "rgba(165, 227, 191, 0.94)", stroke: "rgba(146, 204, 170, 0.34)", text: "rgba(230, 245, 236, 0.92)", wave: "rgba(222, 244, 231, 0.86)", waveBase: "rgba(207, 232, 217, 0.14)" },
    { bodyTop: "rgba(151, 113, 77, 0.24)", bodyBottom: "rgba(58, 39, 27, 0.14)", accent: "rgba(244, 201, 136, 0.94)", stroke: "rgba(220, 181, 120, 0.34)", text: "rgba(248, 239, 223, 0.92)", wave: "rgba(249, 232, 197, 0.88)", waveBase: "rgba(237, 218, 178, 0.14)" },
    { bodyTop: "rgba(123, 94, 146, 0.24)", bodyBottom: "rgba(42, 30, 57, 0.14)", accent: "rgba(213, 189, 244, 0.94)", stroke: "rgba(186, 164, 222, 0.34)", text: "rgba(241, 235, 248, 0.92)", wave: "rgba(235, 224, 249, 0.88)", waveBase: "rgba(220, 207, 237, 0.14)" },
    { bodyTop: "rgba(142, 92, 101, 0.24)", bodyBottom: "rgba(56, 31, 39, 0.14)", accent: "rgba(236, 183, 197, 0.94)", stroke: "rgba(216, 163, 176, 0.34)", text: "rgba(248, 234, 239, 0.92)", wave: "rgba(248, 224, 232, 0.87)", waveBase: "rgba(234, 210, 219, 0.14)" }
  ];

  function clampZoomLevel(nextLevel) {
    return Math.max(1, Math.min(12, Number(nextLevel) || 1));
  }

  function getTimelineDuration(state) {
    const segments = Array.isArray(state && state.timelineSegments) ? state.timelineSegments : [];
    const assetDuration = Math.max(0, Number(state && state.assetDuration) || 0);
    if (!segments.length) {
      return assetDuration;
    }
    return Math.max(0, Number(state && state.editedDuration) || 0, Number(state && state.explicitDuration) || 0);
  }

  function getTimelineSourceToken(state) {
    return [
      String(state && state.activeKind || ""),
      String(state && state.recordingMediaUrl || ""),
      String(state && state.recordingAudioUrl || ""),
      String(state && state.assetDuration || 0)
    ].join("|");
  }

  function recalculateTimelineDuration(segments) {
    return (Array.isArray(segments) ? segments : []).reduce((maxEnd, segment) => {
      const duration = Math.max(0, Number(segment && segment.duration) || 0);
      const start = Math.max(0, Number(segment && segment.timelineStart) || 0);
      return Math.max(maxEnd, start + duration);
    }, 0);
  }

  function getNormalizedSourceBounds(clipLike) {
    const sourceStart = Math.max(0, Number(clipLike && clipLike.sourceStart) || 0);
    const duration = Math.max(0, Number(clipLike && clipLike.duration) || 0);
    const rawSourceEnd = Math.max(0, Number(clipLike && clipLike.sourceEnd) || 0);
    const sourceEnd = rawSourceEnd > sourceStart + 0.0005 ? rawSourceEnd : sourceStart + duration;
    return { sourceStart, sourceEnd: Math.max(sourceStart, sourceEnd) };
  }

  function clampFadeSeconds(seconds, clipDuration) {
    const duration = Math.max(0, Number(clipDuration) || 0);
    const maxFade = duration > 0 ? Math.min(6, Math.max(0, duration - 0.02)) : 0;
    return Math.max(0, Math.min(maxFade, Number(seconds) || 0));
  }

  function normalizeClipFadePair(fadeInSeconds, fadeOutSeconds, clipDuration) {
    const duration = Math.max(0, Number(clipDuration) || 0);
    let fadeIn = clampFadeSeconds(fadeInSeconds, duration);
    let fadeOut = clampFadeSeconds(fadeOutSeconds, duration);
    if (!(duration > 0.02)) {
      return { fadeIn: 0, fadeOut: 0 };
    }
    const maxTotal = Math.max(0.02, duration - 0.03);
    const total = fadeIn + fadeOut;
    if (total > maxTotal && total > 0.0005) {
      const scale = maxTotal / total;
      fadeIn *= scale;
      fadeOut *= scale;
    }
    return {
      fadeIn: clampFadeSeconds(fadeIn, duration),
      fadeOut: clampFadeSeconds(fadeOut, duration)
    };
  }

  function clampGainDb(dbValue) {
    return Math.max(-24, Math.min(18, Number(dbValue) || 0));
  }

  function dbToGainMultiplier(dbValue) {
    return Math.pow(10, clampGainDb(dbValue) / 20);
  }

  function formatGainDb(dbValue) {
    const rounded = Math.round(clampGainDb(dbValue) * 10) / 10;
    if (Math.abs(rounded) < 0.05) {
      return "0 dB";
    }
    return (rounded > 0 ? "+" : "") + rounded.toFixed(1).replace(/\.0$/, "") + " dB";
  }

  function hashString(value) {
    const source = String(value || "");
    let hash = 0;
    for (let index = 0; index < source.length; index += 1) {
      hash = ((hash << 5) - hash + source.charCodeAt(index)) | 0;
    }
    return Math.abs(hash);
  }

  function getClipDisplayLabel(clip, recordingDefaultLabel) {
    if (!clip) {
      return "";
    }
    if (String(clip.sourceKind || "recording") === "recording") {
      return String(clip.sourceAssetLabel || recordingDefaultLabel || "Show Recording");
    }
    return String(clip.sourceAssetLabel || "Library Insert");
  }

  function getClipPalette(clip, uniqueSourceCount, recordingDefaultLabel) {
    const label = getClipDisplayLabel(clip, recordingDefaultLabel);
    const paletteIndex = hashString(String(clip && clip.sourceKind || "") + "|" + String(clip && clip.sourceAssetId || "") + "|" + label) % SOURCE_PALETTES.length;
    if (String(clip && clip.sourceKind || "recording") === "recording" && uniqueSourceCount <= 1) {
      return {
        bodyTop: "rgba(82, 99, 118, 0.18)",
        bodyBottom: "rgba(26, 37, 48, 0.10)",
        accent: "rgba(194, 208, 224, 0.88)",
        stroke: "rgba(154, 173, 194, 0.24)",
        text: "rgba(226, 234, 242, 0.9)",
        wave: "rgba(224, 232, 239, 0.84)",
        waveBase: "rgba(210, 220, 229, 0.14)"
      };
    }
    return SOURCE_PALETTES[paletteIndex];
  }

  function getTrackLabel(laneIndex, clips, recordingDefaultLabel) {
    const laneClips = Array.isArray(clips) ? clips.filter((clip) => clip && clip.laneIndex === laneIndex) : [];
    if (!laneClips.length) {
      return "Empty";
    }
    const labels = Array.from(new Set(laneClips.map((clip) => getClipDisplayLabel(clip, recordingDefaultLabel)).filter(Boolean)));
    if (labels.length === 1) {
      return labels[0];
    }
    return labels[0] + " +" + String(labels.length - 1);
  }

  function normalizeCleanupPreviewMode(mode) {
    const value = String(mode || "").toLowerCase();
    if (value === "original" || value === "cleaned") {
      return value;
    }
    return "auto";
  }

  function normalizeFadeCurveMode(mode) {
    return String(mode || "").toLowerCase() === "linear" ? "linear" : "soft";
  }

  function getViewport(config) {
    const duration = Math.max(0, Number(config && config.durationSeconds) || 0);
    const current = Math.max(0, Number(config && config.focusSeconds) || 0);
    const zoomLevel = clampZoomLevel(config && config.zoomLevel);
    const currentProgress = duration > 0 ? Math.max(0, Math.min(1, current / duration)) : 0;
    const windowSize = duration > 0 ? Math.max(1 / zoomLevel, 0.08) : 1;
    const clampedWindowSize = Math.max(0.08, Math.min(1, windowSize));
    const windowStart = duration > 0
      ? Math.max(0, Math.min(1 - clampedWindowSize, currentProgress - clampedWindowSize / 2))
      : 0;
    return {
      currentProgress,
      windowSize: clampedWindowSize,
      windowStart,
      windowEnd: Math.min(1, windowStart + clampedWindowSize)
    };
  }

  function getRulerStepSeconds(visibleDurationSeconds, meterWidthPx) {
    const visibleDuration = Math.max(0.01, Number(visibleDurationSeconds) || 0.01);
    const meterWidth = Math.max(120, Number(meterWidthPx) || 120);
    const targetTickCount = Math.max(3, Math.floor(meterWidth / 92));
    const rawStep = visibleDuration / targetTickCount;
    const steps = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800];
    return steps.find((step) => step >= rawStep) || steps[steps.length - 1];
  }

  function formatRulerLabel(seconds, stepSeconds, formatPreviewClock) {
    const safeSeconds = Math.max(0, Number(seconds) || 0);
    if (stepSeconds < 1) {
      return safeSeconds.toFixed(stepSeconds < 0.5 ? 1 : 0);
    }
    if (safeSeconds < 60) {
      return String(Math.round(safeSeconds));
    }
    return typeof formatPreviewClock === "function" ? formatPreviewClock(safeSeconds) : String(Math.round(safeSeconds));
  }

  global.ReviewCutState = {
    MAX_TRACKS,
    MAX_LANE_INDEX,
    SOURCE_PALETTES,
    clampZoomLevel,
    getTimelineDuration,
    getTimelineSourceToken,
    recalculateTimelineDuration,
    getNormalizedSourceBounds,
    clampFadeSeconds,
    normalizeClipFadePair,
    clampGainDb,
    dbToGainMultiplier,
    formatGainDb,
    getClipDisplayLabel,
    getClipPalette,
    getTrackLabel,
    normalizeCleanupPreviewMode,
    normalizeFadeCurveMode,
    getViewport,
    getRulerStepSeconds,
    formatRulerLabel
  };
})(window);
