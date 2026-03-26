(function initOnAirLibraryControllerModule(global) {
  "use strict";

  const renderApi = global.OnAirLibraryRender || {};
  const storageApi = global.OnAirLibraryStorage || {};

  function normalizeLibraryKind(libraryKind) {
    return libraryKind === "post-production" ? "post-production" : libraryKind === "episodes" ? "episodes" : "music";
  }

  function createOnAirLibraryController(config) {
    const cfg = config && typeof config === "object" ? config : {};
    return {
      setLibraryOpen(open) {
        const nextOpen = !!open;
        if (nextOpen && cfg.isAudioOpen && cfg.isAudioOpen()) {
          cfg.setAudioOpen?.(false);
        }
        cfg.setLibraryOpenState?.(nextOpen);
        if (!nextOpen) {
          cfg.closePreview?.();
        }
        cfg.elements?.libraryDrawer?.classList.toggle("open", nextOpen);
        cfg.elements?.libraryPanel?.classList.toggle("hidden", !nextOpen);
      },
      setAudioOpen(open) {
        const nextOpen = !!open;
        if (nextOpen && cfg.isLibraryOpen && cfg.isLibraryOpen()) {
          this.setLibraryOpen(false);
        }
        cfg.setAudioOpenState?.(nextOpen);
        cfg.elements?.audioDrawer?.classList.toggle("open", nextOpen);
        cfg.elements?.audioPanel?.classList.toggle("hidden", !nextOpen);
        if (nextOpen) {
          cfg.onAudioOpened?.();
        }
      },
      renderLibraryList() {
        renderApi.renderOnAirLibraryList?.({
          list: cfg.elements?.libraryList,
          note: cfg.elements?.libraryNote,
          libraryView: cfg.getLibraryView?.(),
          musicLibrary: cfg.getMusicLibrary?.(),
          libraryAssets: cfg.getLibraryAssets?.(),
          formatLibraryAssetStatus: cfg.formatLibraryAssetStatus,
          formatLibraryAssetSize: cfg.formatLibraryAssetSize,
          createMusicPreviewAction: cfg.createMusicPreviewAction,
          createMusicUseAction: cfg.createMusicUseAction,
          createMusicDeleteAction: cfg.createMusicDeleteAction,
          createPostProductionReviewAction: cfg.createPostProductionReviewAction,
          createPostProductionDeleteAction: cfg.createPostProductionDeleteAction,
          createEpisodeExportAction: cfg.createEpisodeExportAction,
          createEpisodeDeleteAction: cfg.createEpisodeDeleteAction,
          createDefaultOpenAction: cfg.createDefaultOpenAction
        });
      },
      renderReviewLibraryList() {
        renderApi.renderOnAirReviewLibraryList?.({
          list: cfg.elements?.reviewLibraryList,
          note: cfg.elements?.reviewLibraryNote,
          libraryView: cfg.getReviewLibraryView?.(),
          musicLibrary: cfg.getMusicLibrary?.(),
          libraryAssets: cfg.getLibraryAssets?.(),
          formatLibraryAssetStatus: cfg.formatLibraryAssetStatus,
          formatLibraryAssetSize: cfg.formatLibraryAssetSize,
          createReviewPreviewAction: cfg.createReviewPreviewAction,
          createReviewInsertAction: cfg.createReviewInsertAction,
          createReviewReplaceAction: cfg.createReviewReplaceAction
        });
      },
      populateMusicTrackSelect() {
        renderApi.populateOnAirMusicTrackSelect?.({
          selects: [cfg.elements?.musicTrackSelect, cfg.elements?.musicNextTrackSelect],
          musicLibrary: cfg.getMusicLibrary?.()
        });
      },
      updateTabsUi() {
        renderApi.updateOnAirLibraryTabsUI?.({
          libraryView: cfg.getLibraryView?.()
        });
      },
      updateReviewTabsUi() {
        renderApi.updateOnAirLibraryTabsUI?.({
          libraryView: cfg.getReviewLibraryView?.(),
          selector: "[data-review-library-view]"
        });
      },
      getLibraryDisplayLabel(libraryKind) {
        return renderApi.getLibraryDisplayLabel
          ? renderApi.getLibraryDisplayLabel(libraryKind)
          : normalizeLibraryKind(libraryKind);
      },
      async loadLibraryKind(libraryKind, forceRefresh) {
        const normalizedKind = normalizeLibraryKind(libraryKind);
        const libraryAssets = cfg.getLibraryAssets?.() || {};
        if (!forceRefresh && Array.isArray(libraryAssets[normalizedKind]) && libraryAssets[normalizedKind].length) {
          return;
        }
        if (!(cfg.authApi && typeof cfg.authApi.listLibraryAssets === "function")) {
          cfg.setLibraryAssetsForKind?.(normalizedKind, []);
          this.renderLibraryList();
          return;
        }
        if (cfg.elements?.libraryNote) {
          cfg.elements.libraryNote.textContent = "Loading " + this.getLibraryDisplayLabel(normalizedKind) + " Library...";
        }
        const response = await cfg.authApi.listLibraryAssets(normalizedKind, 250, cfg.getShowLibraryFilterId?.());
        cfg.setLibraryAssetsForKind?.(normalizedKind, response && response.ok && Array.isArray(response.assets) ? response.assets : []);
        this.renderLibraryList();
      },
      async loadReviewLibraryKind(libraryKind, forceRefresh) {
        const normalizedKind = normalizeLibraryKind(libraryKind);
        const libraryAssets = cfg.getLibraryAssets?.() || {};
        if (normalizedKind === "music") {
          if (!forceRefresh && Array.isArray(cfg.getMusicLibrary?.()) && cfg.getMusicLibrary?.().length) {
            this.renderReviewLibraryList();
            return;
          }
          await this.refreshMusicLibrary();
          this.renderReviewLibraryList();
          return;
        }
        if (!forceRefresh && Array.isArray(libraryAssets[normalizedKind]) && libraryAssets[normalizedKind].length) {
          this.renderReviewLibraryList();
          return;
        }
        if (cfg.elements?.reviewLibraryNote) {
          cfg.elements.reviewLibraryNote.textContent = "Loading " + this.getLibraryDisplayLabel(normalizedKind) + " for Review Cut...";
        }
        if (!(cfg.authApi && typeof cfg.authApi.listLibraryAssets === "function")) {
          cfg.setLibraryAssetsForKind?.(normalizedKind, []);
          this.renderReviewLibraryList();
          return;
        }
        const response = await cfg.authApi.listLibraryAssets(normalizedKind, 250, cfg.getShowLibraryFilterId?.());
        cfg.setLibraryAssetsForKind?.(normalizedKind, response && response.ok && Array.isArray(response.assets) ? response.assets : []);
        this.renderReviewLibraryList();
      },
      async setLibraryView(nextView, forceRefresh) {
        const normalizedKind = normalizeLibraryKind(nextView);
        cfg.setLibraryViewState?.(normalizedKind);
        this.updateTabsUi();
        await this.loadLibraryKind(normalizedKind, !!forceRefresh);
      },
      async setReviewLibraryView(nextView, forceRefresh) {
        const normalizedKind = normalizeLibraryKind(nextView);
        cfg.setReviewLibraryViewState?.(normalizedKind);
        this.updateReviewTabsUi();
        await this.loadReviewLibraryKind(normalizedKind, !!forceRefresh);
      },
      async refreshMusicLibrary() {
        let localTracks = [];
        let sharedTracks = [];
        let unavailableSharedTracks = [];
        let localOk = false;
        let sharedOk = false;
        try {
          localTracks = await cfg.getAllMusicLibraryTracks();
          localOk = true;
        } catch (error) {
          localTracks = [];
        }
        if (cfg.authApi && typeof cfg.authApi.listLibraryAssets === "function") {
          try {
            const response = await cfg.authApi.listLibraryAssets("music", 250, cfg.getShowLibraryFilterId?.());
            if (response && response.ok) {
              const filteredShared = await storageApi.filterPlayableSharedMusicAssets(
                Array.isArray(response.assets) ? response.assets : [],
                {
                  isBrowserLocalSharedAsset: cfg.isBrowserLocalSharedAsset,
                  getLocalTrackIdForAsset: cfg.getLocalTrackIdForAsset,
                  hasBrowserLocalMusicTrack: cfg.hasBrowserLocalMusicTrack
                }
              );
              sharedTracks = filteredShared.playable;
              unavailableSharedTracks = filteredShared.unavailable;
              sharedOk = true;
              cfg.setLibraryAssetsForKind?.("music", sharedTracks);
            }
          } catch (error) {
            sharedTracks = [];
          }
        }
        cfg.setMusicLibrary?.(storageApi.mergeOnAirMusicLibraries(localTracks, sharedTracks));
        if (sharedOk) {
          cfg.setMusicCatalogStatus?.("synced");
        } else if (localOk) {
          cfg.setMusicCatalogStatus?.("ready");
        } else {
          cfg.setMusicCatalogStatus?.("error");
        }
        this.populateMusicTrackSelect();
        this.renderReviewLibraryList();
        if (cfg.isLibraryOpen && cfg.isLibraryOpen() && cfg.getLibraryView?.() === "music") {
          this.renderLibraryList();
        }
        if (!sharedOk && !localOk && cfg.elements?.musicCuesNote) {
          cfg.elements.musicCuesNote.textContent = "Music library is unavailable right now.";
        } else if (unavailableSharedTracks.length && cfg.elements?.musicCuesNote) {
          cfg.elements.musicCuesNote.textContent =
            unavailableSharedTracks.length +
            " older browser-only track" +
            (unavailableSharedTracks.length === 1 ? " is" : "s are") +
            " unavailable on this device and hidden from the shared library.";
        }
        cfg.updateMusicCuesUi?.();
      }
    };
  }

  global.OnAirLibraryController = {
    create: createOnAirLibraryController
  };
})(window);
