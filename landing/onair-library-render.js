(function initOnAirLibraryRenderModule(global) {
  "use strict";

  function getLibraryDisplayLabel(libraryKind) {
    if (libraryKind === "post-production") {
      return "Post-Production";
    }
    if (libraryKind === "episodes") {
      return "Episodes";
    }
    return "Music";
  }

  function populateOnAirMusicTrackSelect(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const selects = Array.isArray(cfg.selects)
      ? cfg.selects.filter(Boolean)
      : [cfg.select].filter(Boolean);
    const tracks = Array.isArray(cfg.musicLibrary) ? cfg.musicLibrary : [];
    if (!selects.length) {
      return;
    }
    const sharedTracks = tracks.filter((track) => track && track.source === "shared");
    const localTracks = tracks.filter((track) => !track || track.source !== "shared");
    selects.forEach((select) => {
      const previous = select.value;
      select.innerHTML = "";
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = tracks.length ? "Select an uploaded track" : "No uploaded tracks yet";
      select.appendChild(defaultOption);
      if (sharedTracks.length) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = "Shared Music Library";
        sharedTracks.forEach((track) => {
          const option = document.createElement("option");
          option.value = track.id;
          option.textContent = track.name;
          optgroup.appendChild(option);
        });
        select.appendChild(optgroup);
      }
      if (localTracks.length) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = "This Browser";
        localTracks.forEach((track) => {
          const option = document.createElement("option");
          option.value = track.id;
          option.textContent = track.name;
          optgroup.appendChild(option);
        });
        select.appendChild(optgroup);
      }
      if (previous && tracks.some((track) => track.id === previous)) {
        select.value = previous;
      } else {
        select.value = "";
      }
    });
  }

  function updateOnAirLibraryTabsUI(config) {
    const currentView = String(config && config.libraryView || "");
    const selector = String(config && config.selector || "[data-library-view]");
    document.querySelectorAll(selector).forEach((button) => {
      const buttonView = String(button.dataset.libraryView || button.dataset.reviewLibraryView || "");
      const isActive = buttonView === currentView;
      button.classList.toggle("active", isActive);
      if (button.getAttribute("role") === "tab") {
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      }
    });
  }

  function renderOnAirLibraryList(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const list = cfg.list || null;
    if (!list) {
      return;
    }
    const libraryView = String(cfg.libraryView || "music");
    const musicLibrary = Array.isArray(cfg.musicLibrary) ? cfg.musicLibrary : [];
    const libraryAssets = cfg.libraryAssets && typeof cfg.libraryAssets === "object" ? cfg.libraryAssets : {};
    const assets = libraryView === "music"
      ? musicLibrary.slice()
      : Array.isArray(libraryAssets[libraryView])
        ? libraryAssets[libraryView]
        : [];
    list.innerHTML = "";
    if (cfg.note) {
      if (libraryView === "post-production") {
        cfg.note.textContent = assets.length
          ? "Post-Production holds raw takes and in-progress drafts. Open a draft in Review Cut or delete a bad take."
          : "No post-production takes yet. Stopped recordings will appear here automatically.";
      } else if (libraryView === "episodes") {
        cfg.note.textContent = assets.length
          ? "Episodes holds approved saved shows and exports."
          : "No saved episodes yet.";
      } else {
        cfg.note.textContent = assets.length
          ? getLibraryDisplayLabel(libraryView) + " Library"
          : "No assets in " + getLibraryDisplayLabel(libraryView) + " yet.";
      }
    }
    if (!assets.length) {
      const empty = document.createElement("p");
      empty.className = "camera-status onair-library-empty";
      empty.textContent = "Nothing is stored in this library yet.";
      list.appendChild(empty);
      return;
    }
    assets.forEach((asset) => {
      const row = document.createElement("div");
      row.className = "onair-library-row";
      row.dataset.libraryKind = libraryView;
      const meta = document.createElement("div");
      meta.className = "onair-library-meta";
      const title = document.createElement("p");
      title.className = "onair-library-title";
      title.textContent = String(asset.title || asset.name || asset.originalFilename || "Untitled Asset");
      const detail = document.createElement("p");
      detail.className = "onair-library-detail";
      detail.textContent = [
        asset && asset.source === "browser-local" ? "This Browser" : cfg.formatLibraryAssetStatus?.(asset.status),
        cfg.formatLibraryAssetSize?.(asset.byteSize || asset.size)
      ].filter(Boolean).join(" • ");
      meta.appendChild(title);
      meta.appendChild(detail);
      row.appendChild(meta);
      const actions = document.createElement("div");
      actions.className = "onair-library-actions";
      if (libraryView === "music") {
        [cfg.createMusicPreviewAction?.(asset), cfg.createMusicUseAction?.(asset), cfg.createMusicDeleteAction?.(asset)].forEach((action) => {
          if (action) {
            actions.appendChild(action);
          }
        });
      } else if (libraryView === "post-production") {
        [cfg.createPostProductionReviewAction?.(asset), cfg.createPostProductionDeleteAction?.(asset)].forEach((action) => {
          if (action) {
            actions.appendChild(action);
          }
        });
      } else if (libraryView === "episodes") {
        [cfg.createEpisodeExportAction?.(asset), cfg.createEpisodeDeleteAction?.(asset)].forEach((action) => {
          if (action) {
            actions.appendChild(action);
          }
        });
      } else {
        const action = cfg.createDefaultOpenAction?.(asset);
        if (action) {
          actions.appendChild(action);
        }
      }
      row.appendChild(actions);
      list.appendChild(row);
    });
  }

  function renderOnAirReviewLibraryList(config) {
    const cfg = config && typeof config === "object" ? config : {};
    const list = cfg.list || null;
    const libraryView = String(cfg.libraryView || "post-production");
    const libraryAssets = cfg.libraryAssets && typeof cfg.libraryAssets === "object" ? cfg.libraryAssets : {};
    const assets = libraryView === "music"
      ? (Array.isArray(cfg.musicLibrary)
          ? cfg.musicLibrary.slice().sort((left, right) => Number(right && right.createdAt || 0) - Number(left && left.createdAt || 0))
          : [])
      : (Array.isArray(libraryAssets[libraryView])
          ? libraryAssets[libraryView].slice().sort((left, right) => Number(right && right.createdAt || 0) - Number(left && left.createdAt || 0))
          : []);
    if (!list) {
      return;
    }
    list.innerHTML = "";
    if (cfg.note) {
      if (assets.length) {
        cfg.note.textContent = libraryView === "music"
          ? "Preview a music cue, insert it on the selected or next open track, or replace the current selection."
          : "Preview a shared asset, insert it on the selected or next open track, or replace the current selection.";
      } else if (libraryView === "post-production") {
        cfg.note.textContent = "No post-production takes are available yet. Finished recordings will appear here.";
      } else if (libraryView === "episodes") {
        cfg.note.textContent = "No saved episodes are available yet.";
      } else {
        cfg.note.textContent = "No music library tracks are available to insert yet.";
      }
    }
    if (!assets.length) {
      const empty = document.createElement("p");
      empty.className = "camera-status onair-library-empty";
      empty.textContent = libraryView === "post-production"
        ? "Completed takes will appear here for review insert."
        : libraryView === "episodes"
          ? "Saved episodes will appear here for reuse in Review Cut."
          : "Upload a music track first, then it will appear here for review insert.";
      list.appendChild(empty);
      return;
    }
    assets.slice(0, 10).forEach((asset) => {
      const row = document.createElement("div");
      row.className = "onair-review-library-row";
      const meta = document.createElement("div");
      meta.className = "onair-review-library-meta";
      const title = document.createElement("p");
      title.className = "onair-library-title";
      title.textContent = String(asset.title || asset.name || asset.originalFilename || "Untitled Track");
      const detail = document.createElement("p");
      detail.className = "onair-library-detail";
      const detailParts = [];
      detailParts.push(asset && asset.source === "browser-local"
        ? "This Browser"
        : getLibraryDisplayLabel(asset && asset.libraryKind ? asset.libraryKind : libraryView));
      const statusLabel = cfg.formatLibraryAssetStatus?.(asset.status);
      if (statusLabel && statusLabel !== "Ready") {
        detailParts.push(statusLabel);
      }
      const sizeLabel = cfg.formatLibraryAssetSize?.(asset.byteSize || asset.size);
      if (sizeLabel) {
        detailParts.push(sizeLabel);
      }
      detail.textContent = detailParts.join(" • ");
      meta.appendChild(title);
      meta.appendChild(detail);
      row.appendChild(meta);
      const actions = document.createElement("div");
      actions.className = "onair-review-library-actions";
      [cfg.createReviewPreviewAction?.(asset), cfg.createReviewInsertAction?.(asset), cfg.createReviewReplaceAction?.(asset)].forEach((action) => {
        if (action) {
          actions.appendChild(action);
        }
      });
      row.appendChild(actions);
      list.appendChild(row);
    });
  }

  global.OnAirLibraryRender = {
    getLibraryDisplayLabel,
    populateOnAirMusicTrackSelect,
    updateOnAirLibraryTabsUI,
    renderOnAirLibraryList,
    renderOnAirReviewLibraryList
  };
})(window);
