(function initReviewCutNoiseToolsModule(global) {
  "use strict";

  function sampleNoiseFloorMapFromAudioBuffer(buffer, bucketCount) {
    const channelData = [];
    for (let channel = 0; channel < Math.max(1, buffer.numberOfChannels); channel += 1) {
      channelData.push(buffer.getChannelData(channel));
    }
    const totalSamples = buffer.length || 0;
    const buckets = new Array(Math.max(60, bucketCount || 180)).fill(0);
    if (!totalSamples) {
      return buckets;
    }
    const samplesPerBucket = Math.max(128, Math.floor(totalSamples / buckets.length));
    for (let bucketIndex = 0; bucketIndex < buckets.length; bucketIndex += 1) {
      const start = bucketIndex * samplesPerBucket;
      const end = Math.min(totalSamples, start + samplesPerBucket);
      let sumSquares = 0;
      let zeroCrossings = 0;
      let sampleCount = 0;
      let lastMixedSample = 0;
      let initialized = false;
      for (let sampleIndex = start; sampleIndex < end; sampleIndex += 1) {
        let mixedSample = 0;
        for (let channel = 0; channel < channelData.length; channel += 1) {
          mixedSample += Number(channelData[channel][sampleIndex] || 0);
        }
        mixedSample /= Math.max(1, channelData.length);
        sumSquares += mixedSample * mixedSample;
        if (initialized) {
          const changedSign = (mixedSample >= 0 && lastMixedSample < 0) || (mixedSample < 0 && lastMixedSample >= 0);
          if (changedSign) {
            zeroCrossings += 1;
          }
        } else {
          initialized = true;
        }
        lastMixedSample = mixedSample;
        sampleCount += 1;
      }
      if (!sampleCount) {
        buckets[bucketIndex] = 0;
        continue;
      }
      const rms = Math.sqrt(sumSquares / sampleCount);
      const zeroCrossRate = zeroCrossings / Math.max(1, sampleCount - 1);
      const hissWeight = Math.max(0, Math.min(1, (zeroCrossRate - 0.03) / 0.18));
      const floorWeight = Math.max(0, Math.min(1, (rms - 0.003) / 0.055));
      buckets[bucketIndex] = Math.max(0, Math.min(1, floorWeight * 0.58 + hissWeight * 0.42));
    }
    return buckets;
  }

  function getNoiseProfileLabel(profile) {
    const targetProfile = String(profile || "off").trim().toLowerCase();
    if (targetProfile === "high") {
      return "High";
    }
    if (targetProfile === "medium") {
      return "Medium";
    }
    if (targetProfile === "low") {
      return "Low";
    }
    return "Off";
  }

  function getNoiseAtEditedProgress(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const clampedProgress = Math.max(0, Math.min(1, Number(cfg.progress) || 0));
    const editedDuration = Math.max(0, Number(cfg.totalDuration) || 0);
    const noiseFloorMap = Array.isArray(cfg.noiseFloorMap) ? cfg.noiseFloorMap : [];
    if (!(editedDuration > 0) || !noiseFloorMap.length) {
      return 0;
    }
    const editedTime = editedDuration * clampedProgress;
    const position = typeof cfg.getTimelinePosition === "function" ? cfg.getTimelinePosition(editedTime) : null;
    if (!position || !position.segment || position.segment.type !== "media" || String(position.segment.sourceKind || "recording") !== "recording") {
      return 0;
    }
    const sourceDuration = Math.max(0, Number(position.segment.sourceEnd || 0) - Number(position.segment.sourceStart || 0));
    if (!(sourceDuration > 0)) {
      return 0;
    }
    const sourceRelativeTime = Math.max(
      0,
      Math.min(sourceDuration, Number(position.sourceTime || 0) - Number(position.segment.sourceStart || 0))
    );
    const sourceProgress = Math.max(0, Math.min(1, sourceRelativeTime / sourceDuration));
    const noiseIndex = Math.max(0, Math.min(noiseFloorMap.length - 1, Math.round(sourceProgress * (noiseFloorMap.length - 1))));
    return Math.max(0, Math.min(1, Number(noiseFloorMap[noiseIndex] || 0)));
  }

  function getNoiseSummary(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const noiseFloorMap = Array.isArray(cfg.noiseFloorMap) ? cfg.noiseFloorMap : [];
    if (!noiseFloorMap.length) {
      return { average: 0, peak: 0, profile: "off", percent: 0, scope: "show" };
    }
    const duration = Math.max(0, Number(typeof cfg.getTimelineDuration === "function" ? cfg.getTimelineDuration() : cfg.duration) || 0);
    const hasSelection = !!cfg.hasSelection && duration > 0;
    const start = hasSelection ? Math.min(Number(cfg.selectionStart) || 0, Number(cfg.selectionEnd) || 0) : 0;
    const end = hasSelection ? Math.max(Number(cfg.selectionStart) || 0, Number(cfg.selectionEnd) || 0) : duration;
    const sampleCount = hasSelection ? 18 : Math.max(24, Math.min(64, noiseFloorMap.length));
    let total = 0;
    let peak = 0;
    for (let index = 0; index < sampleCount; index += 1) {
      const progress = sampleCount <= 1 ? 0 : index / Math.max(1, sampleCount - 1);
      const time = start + (end - start) * progress;
      const value = hasSelection
        ? getNoiseAtEditedProgress({
            progress: duration > 0 ? time / duration : 0,
            totalDuration: duration,
            noiseFloorMap,
            getTimelinePosition: cfg.getTimelinePosition
          })
        : Number(noiseFloorMap[Math.max(0, Math.min(noiseFloorMap.length - 1, Math.round(progress * (noiseFloorMap.length - 1))))] || 0);
      total += value;
      peak = Math.max(peak, value);
    }
    const average = total / Math.max(1, sampleCount);
    const percent = Math.round(Math.max(average, peak * 0.82) * 100);
    const profile = percent >= 63 ? "high" : percent >= 37 ? "medium" : percent > 0 ? "low" : "off";
    return {
      average,
      peak,
      profile,
      percent,
      scope: hasSelection ? "selection" : "show"
    };
  }

  function renderClipNoiseOverlay(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const ctx = cfg.ctx || null;
    const clip = cfg.clip || null;
    const duration = Math.max(0, Number(cfg.duration) || 0);
    const clipX = Number(cfg.clipX) || 0;
    const clipY = Number(cfg.clipY) || 0;
    const clipWidth = Math.max(0, Number(cfg.clipWidth) || 0);
    const clipHeight = Math.max(0, Number(cfg.clipHeight) || 0);
    const noiseFloorMap = Array.isArray(cfg.noiseFloorMap) ? cfg.noiseFloorMap : [];
    if (!ctx || !clip || !(duration > 0) || !(clipWidth > 0) || !(clipHeight > 0) || !noiseFloorMap.length) {
      return;
    }
    const clipNoiseBuckets = Math.max(12, Math.min(60, Math.floor(clipWidth / 8)));
    for (let bucketIndex = 0; bucketIndex < clipNoiseBuckets; bucketIndex += 1) {
      const bucketStartTime = clip.start + (clip.duration * bucketIndex / clipNoiseBuckets);
      const bucketMidTime = clip.start + (clip.duration * (bucketIndex + 0.5) / clipNoiseBuckets);
      const bucketEndTime = clip.start + (clip.duration * (bucketIndex + 1) / clipNoiseBuckets);
      const noiseValue = Math.max(
        getNoiseAtEditedProgress({
          progress: bucketStartTime / duration,
          totalDuration: duration,
          noiseFloorMap,
          getTimelinePosition: cfg.getTimelinePosition
        }),
        getNoiseAtEditedProgress({
          progress: bucketMidTime / duration,
          totalDuration: duration,
          noiseFloorMap,
          getTimelinePosition: cfg.getTimelinePosition
        }),
        getNoiseAtEditedProgress({
          progress: bucketEndTime / duration,
          totalDuration: duration,
          noiseFloorMap,
          getTimelinePosition: cfg.getTimelinePosition
        })
      );
      if (noiseValue <= 0.08) {
        continue;
      }
      const noiseX = clipX + (clipWidth * bucketIndex / clipNoiseBuckets);
      const noiseWidth = Math.max(1, clipWidth / clipNoiseBuckets);
      const overlayAlpha = 0.1 + noiseValue * 0.22;
      const color = noiseValue > 0.68
        ? "rgba(255, 126, 92, " + overlayAlpha.toFixed(3) + ")"
        : noiseValue > 0.42
          ? "rgba(236, 178, 98, " + overlayAlpha.toFixed(3) + ")"
          : "rgba(172, 182, 196, " + Math.max(0.06, overlayAlpha * 0.7).toFixed(3) + ")";
      ctx.fillStyle = color;
      ctx.fillRect(noiseX, clipY + 1, noiseWidth, clipHeight - 2);
      if (noiseValue > 0.42) {
        ctx.fillStyle = noiseValue > 0.68
          ? "rgba(255, 168, 140, 0.86)"
          : "rgba(241, 205, 142, 0.78)";
        ctx.fillRect(noiseX, clipY + 1, noiseWidth, Math.max(2, clipHeight * 0.08));
      }
    }
  }

  global.ReviewCutNoiseTools = {
    sampleNoiseFloorMapFromAudioBuffer,
    getNoiseProfileLabel,
    getNoiseAtEditedProgress,
    getNoiseSummary,
    renderClipNoiseOverlay
  };
})(window);
