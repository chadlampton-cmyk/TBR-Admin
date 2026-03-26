(function initOnAirLibraryBridgeModule(global) {
  "use strict";

  function createOnAirLibraryBridge(config) {
    const cfg = config && typeof config === "object" ? config : {};
    return {
      async loadSharedLibraryAssetAsFile(asset) {
        if (!asset || !(cfg.authApi && typeof cfg.authApi.requestMediaDownload === "function")) {
          throw new Error("Shared library asset is unavailable.");
        }
        const ticket = await cfg.authApi.requestMediaDownload(asset.id);
        if (!ticket || !ticket.ok || !ticket.downloadUrl) {
          throw new Error((ticket && ticket.error) || "Unable to open this library asset right now.");
        }
        const response = await fetch(ticket.downloadUrl, { method: "GET" });
        if (!response.ok) {
          throw new Error("Library asset download failed with status " + response.status + ".");
        }
        const blob = await response.blob();
        const fallbackExtension = String(asset.libraryKind || "").trim().toLowerCase() === "episodes" ? "wav" : "webm";
        const filename =
          String(asset.originalFilename || "").trim() ||
          (String(asset.title || "asset").trim().replace(/[^\w.-]+/g, "-") || "asset") +
            "." +
            cfg.getFilenameExtensionFromMimeType(asset.mimeType, fallbackExtension);
        return cfg.createNamedUploadBlob(
          blob,
          filename,
          String(asset.mimeType || blob.type || "application/octet-stream").trim()
        );
      },

      async openPostProductionAssetInReviewCut(asset) {
        const file = await this.loadSharedLibraryAssetAsFile(asset);
        const imported = await cfg.importOnAirReviewFile(file);
        if (!imported) {
          throw new Error("Review Cut could not load this post-production asset.");
        }
        cfg.setOnAirReviewSourceAsset?.(asset && typeof asset === "object" ? { ...asset } : null);
        cfg.setRecordingWorkflowState?.("review");
        await cfg.setReviewLibraryView?.("post-production", false);
        cfg.syncReviewPanelUi?.();
        cfg.setOnAirReviewModalOpen?.(true);
        cfg.setOnAirReviewStatusMessage?.(
          "Editing post-production draft: " + String(asset.title || file.name || "Untitled Asset") + "."
        );
      },

      async exportLibraryAssetAudio(asset) {
        const file = await this.loadSharedLibraryAssetAsFile(asset);
        cfg.downloadBlobObject?.(file, cfg.getLibraryAssetDownloadFilename(asset, "wav"));
      },

      async saveCurrentRecordingToPostProduction() {
        if (cfg.isPostProductionSaveInFlight && cfg.isPostProductionSaveInFlight()) {
          return null;
        }
        const recordingAudioBlob = cfg.getRecordingAudioBlob ? cfg.getRecordingAudioBlob() : null;
        const recordingAudioMimeType = cfg.getRecordingAudioMimeType ? cfg.getRecordingAudioMimeType() : "";
        const recordingAudioDurationSeconds = cfg.getRecordingAudioDurationSeconds ? cfg.getRecordingAudioDurationSeconds() : 0;
        const recordingMediaBlob = cfg.getRecordingMediaBlob ? cfg.getRecordingMediaBlob() : null;
        const sourceBlob = recordingAudioBlob || null;
        const sourceMimeType = String(recordingAudioMimeType || (sourceBlob && sourceBlob.type) || "audio/webm").trim() || "audio/webm";
        const sourceDuration = Math.max(0, Number(recordingAudioDurationSeconds || 0) || 0);
        if (!sourceBlob || !(sourceBlob.size > 0)) {
          return null;
        }
        cfg.setPostProductionSaveInFlight?.(true);
        try {
          const title = cfg.getOnAirPostProductionAssetTitle();
          const asset = await cfg.uploadBlobToSharedLibrary("post-production", sourceBlob, {
            assetRole: "raw-recording",
            title,
            filenameBase: title.replace(/[^\w.-]+/g, "-").toLowerCase(),
            mimeType: sourceMimeType,
            durationSeconds: sourceDuration > 0 ? sourceDuration : null,
            metadata: {
              reviewKind: "audio",
              hasAudio: true,
              hasVideo: !!(recordingMediaBlob && recordingMediaBlob.size > 0),
              sourceTakeId: "take_" + Date.now(),
              savedFromReviewCut: false
            }
          });
          cfg.setLibraryAssetsForKind?.("post-production", []);
          await cfg.loadOnAirLibraryKind?.("post-production", true);
          return asset;
        } finally {
          cfg.setPostProductionSaveInFlight?.(false);
        }
      },

      async saveOnAirReviewRenderToLibrary(libraryKind) {
        if (cfg.isReviewSaveInFlight && cfg.isReviewSaveInFlight()) {
          return null;
        }
        cfg.setReviewSaveInFlight?.(true);
        try {
          const editedBlob = await cfg.renderOnAirReviewEditedAudioBlob();
          const sourceAsset = cfg.getOnAirReviewSourceAsset ? cfg.getOnAirReviewSourceAsset() : null;
          const sourceAssetId = String(sourceAsset && sourceAsset.id || "").trim();
          const sourceTakeId =
            String(sourceAsset && sourceAsset.metadata && sourceAsset.metadata.sourceTakeId || "").trim() ||
            sourceAssetId ||
            "take_" + Date.now();
          const title = libraryKind === "episodes" ? cfg.getOnAirEpisodesAssetTitle() : cfg.getOnAirPostProductionAssetTitle() + "-draft";
          const assetRole = libraryKind === "episodes" ? "episode-audio" : "post-draft-audio";
          const asset = await cfg.uploadBlobToSharedLibrary(libraryKind, editedBlob, {
            assetRole,
            title,
            filenameBase: title.replace(/[^\w.-]+/g, "-").toLowerCase(),
            mimeType: "audio/wav",
            durationSeconds: cfg.getOnAirReviewTimelineDuration(),
            metadata: {
              reviewKind: "audio",
              hasAudio: true,
              hasVideo: false,
              sourceTakeId,
              sourceAssetId,
              savedFromReviewCut: true,
              episodeKey: libraryKind === "episodes" ? "episode_" + Date.now() : ""
            }
          });
          cfg.setLibraryAssetsForKind?.(libraryKind, []);
          await cfg.loadOnAirLibraryKind?.(libraryKind, true);
          if (libraryKind === "post-production") {
            cfg.setOnAirReviewSourceAsset?.(asset && typeof asset === "object" ? { ...asset } : sourceAsset);
          }
          return asset;
        } finally {
          cfg.setReviewSaveInFlight?.(false);
        }
      }
    };
  }

  global.OnAirLibraryBridge = {
    create: createOnAirLibraryBridge
  };
})(window);
