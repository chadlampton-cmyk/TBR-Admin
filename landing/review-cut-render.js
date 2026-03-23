(function initReviewCutRenderModule(global) {
  "use strict";

  function getWaveLayout(canvas, laneCount) {
    if (!canvas) {
      return null;
    }
    const rect = canvas.getBoundingClientRect();
    const width = canvas.width;
    const height = canvas.height;
    const shellInset = Math.max(4, Math.floor(height * 0.04));
    const shellWidth = Math.max(12, width - shellInset * 2);
    const shellHeight = Math.max(12, height - shellInset * 2);
    const meterInsetX = Math.max(16, Math.floor(width * 0.02));
    const meterInsetY = Math.max(18, Math.floor(height * 0.18));
    const meterX = shellInset + meterInsetX;
    const meterY = shellInset + meterInsetY;
    const meterWidth = Math.max(24, shellWidth - meterInsetX * 2);
    const meterHeight = Math.max(16, shellHeight - meterInsetY * 2);
    const trackHeaderWidth = Math.max(92, Math.min(148, Math.floor(meterWidth * 0.11)));
    const timelineX = meterX + trackHeaderWidth + 10;
    const timelineWidth = Math.max(24, meterWidth - trackHeaderWidth - 10);
    const safeLaneCount = Math.max(1, Number(laneCount) || 1);
    const laneGap = Math.max(6, Math.floor(height * 0.03));
    const laneHeight = Math.max(18, Math.floor((meterHeight - laneGap * Math.max(0, safeLaneCount - 1)) / safeLaneCount));
    return {
      rect,
      width,
      height,
      meterX,
      meterY,
      meterWidth,
      meterHeight,
      trackHeaderWidth,
      timelineX,
      timelineWidth,
      laneCount: safeLaneCount,
      laneGap,
      laneHeight
    };
  }

  function getSecondsFromClientX(clientX, layout, duration, viewport) {
    if (!layout || !(duration > 0) || !viewport) {
      return 0;
    }
    const localX = ((clientX - layout.rect.left) / Math.max(1, layout.rect.width)) * layout.width;
    const localPercent = Math.max(0, Math.min(1, (localX - layout.timelineX) / Math.max(1, layout.timelineWidth)));
    const absolutePercent = viewport.windowSize < 1
      ? Math.max(0, Math.min(1, viewport.windowStart + viewport.windowSize * localPercent))
      : localPercent;
    return duration * absolutePercent;
  }

  function isTimelineHitAtClient(clientX, layout) {
    if (!layout) {
      return false;
    }
    const localX = ((clientX - layout.rect.left) / Math.max(1, layout.rect.width)) * layout.width;
    return localX >= layout.timelineX && localX <= layout.timelineX + layout.timelineWidth;
  }

  global.ReviewCutRender = {
    getWaveLayout,
    getSecondsFromClientX,
    isTimelineHitAtClient
  };
})(window);
