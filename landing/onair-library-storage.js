(function initOnAirLibraryStorageModule(global) {
  "use strict";

  function normalizeSharedMusicAsset(asset) {
    if (!asset || typeof asset !== "object") {
      return null;
    }
    return {
      id: String(asset.id || "").trim(),
      name: String(asset.title || asset.originalFilename || "Untitled Track").trim() || "Untitled Track",
      mimeType: String(asset.mimeType || "audio/mpeg"),
      size: Math.max(0, Number(asset.byteSize || 0) || 0),
      createdAt: Date.parse(String(asset.createdAt || "")) || Date.now(),
      source: "shared",
      status: String(asset.status || "uploaded"),
      storageProvider: String(asset.storageProvider || ""),
      originalFilename: String(asset.originalFilename || ""),
      metadata: asset.metadata && typeof asset.metadata === "object" ? asset.metadata : {}
    };
  }

  function normalizeLocalMusicTrack(record) {
    if (!record || typeof record !== "object") {
      return null;
    }
    return {
      ...record,
      name: String(record.name || "Untitled Track").trim() || "Untitled Track",
      source: "browser-local"
    };
  }

  async function filterPlayableSharedMusicAssets(sharedAssets, helpers) {
    const cfg = helpers && typeof helpers === "object" ? helpers : {};
    const assets = Array.isArray(sharedAssets) ? sharedAssets : [];
    const playable = [];
    const unavailable = [];
    for (const asset of assets) {
      if (!(cfg.isBrowserLocalSharedAsset && cfg.isBrowserLocalSharedAsset(asset))) {
        playable.push(asset);
        continue;
      }
      const localTrackId = cfg.getLocalTrackIdForAsset ? cfg.getLocalTrackIdForAsset(asset) : "";
      if (localTrackId && cfg.hasBrowserLocalMusicTrack && await cfg.hasBrowserLocalMusicTrack(localTrackId)) {
        playable.push(asset);
        continue;
      }
      unavailable.push(asset);
    }
    return { playable, unavailable };
  }

  function mergeOnAirMusicLibraries(localTracks, sharedAssets) {
    const merged = [];
    const seen = new Set();
    (Array.isArray(sharedAssets) ? sharedAssets : []).forEach((asset) => {
      const normalized = normalizeSharedMusicAsset(asset);
      if (!normalized || !normalized.id || seen.has(normalized.id)) {
        return;
      }
      seen.add(normalized.id);
      merged.push(normalized);
    });
    (Array.isArray(localTracks) ? localTracks : []).forEach((track) => {
      const normalized = normalizeLocalMusicTrack(track);
      if (!normalized || !normalized.id || seen.has(normalized.id)) {
        return;
      }
      seen.add(normalized.id);
      merged.push(normalized);
    });
    return merged.sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));
  }

  global.OnAirLibraryStorage = {
    normalizeSharedMusicAsset,
    normalizeLocalMusicTrack,
    filterPlayableSharedMusicAssets,
    mergeOnAirMusicLibraries
  };
})(window);
