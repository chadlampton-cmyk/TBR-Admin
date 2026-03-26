(function initRealtimeControllerModule(global) {
  "use strict";

  function createRealtimeController(config) {
    const cfg = config && typeof config === "object" ? config : {};

    function setHostOwner(username) {
      const normalized = String(username || "").trim().toLowerCase();
      cfg.setCurrentHostUsername?.(normalized);
      const hostOwnerStatus = cfg.getHostOwnerStatus?.();
      if (!hostOwnerStatus) {
        return;
      }
      if (!normalized) {
        hostOwnerStatus.textContent = "Host: Unassigned";
      } else if (normalized === cfg.getSessionUsername?.()) {
        hostOwnerStatus.textContent = "Host: " + cfg.getDisplayNameForUsername?.(normalized) + " (You)";
      } else {
        hostOwnerStatus.textContent = "Host: " + cfg.getDisplayNameForUsername?.(normalized);
      }
      cfg.updateHostControlsAvailability?.();
      cfg.refreshMessagePopovers?.();
    }

    function renderHostTransferOptions(rows) {
      const participants = Array.isArray(rows) ? rows : [];
      const select = cfg.getHostTransferSelect?.();
      if (!select) {
        return;
      }
      const prev = select.value;
      select.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Select transfer target";
      select.appendChild(defaultOption);

      participants
        .filter((row) => row.username && row.username !== cfg.getSessionUsername?.())
        .forEach((row) => {
          const option = document.createElement("option");
          option.value = row.username;
          option.textContent = cfg.getDisplayNameForRow?.(row) || row.username;
          select.appendChild(option);
        });

      if (prev && participants.some((row) => row.username === prev && row.username !== cfg.getSessionUsername?.())) {
        select.value = prev;
      } else {
        select.value = "";
      }
    }

    function renderHostSpotlightOptions(rows) {
      const participants = Array.isArray(rows) ? rows : [];
      const select = cfg.getHostSpotlightSelect?.();
      if (!select) {
        return;
      }
      const prev = select.value;
      select.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Select participant";
      select.appendChild(defaultOption);

      participants.forEach((row) => {
        const option = document.createElement("option");
        option.value = row.username;
        option.textContent =
          row.username === cfg.getSessionUsername?.()
            ? (cfg.getDisplayNameForRow?.(row) || row.username) + " (You)"
            : (cfg.getDisplayNameForRow?.(row) || row.username);
        select.appendChild(option);
      });

      const spotlightUsername = cfg.getSpotlightUsername?.() || "";
      if (spotlightUsername && participants.some((row) => row.username === spotlightUsername)) {
        select.value = spotlightUsername;
      } else if (prev && participants.some((row) => row.username === prev)) {
        select.value = prev;
      } else {
        select.value = "";
      }
    }

    async function sendHostSignalToAll(type, payload) {
      if (!cfg.isCurrentUserHost?.()) {
        cfg.setHostStatus?.("Only the active host can use host controls.", true);
        return false;
      }
      if (!cfg.isRealtimeEnabled?.()) {
        cfg.setHostStatus?.("Realtime server is offline. Host controls unavailable.", true);
        const onAirRosterStatus = cfg.getOnAirRosterStatus?.();
        if (onAirRosterStatus) {
          onAirRosterStatus.textContent = "On-Air now: realtime offline.";
        }
        return false;
      }
      const sessionUsername = cfg.getSessionUsername?.();
      const peers = (cfg.getCurrentParticipants?.() || []).filter((name) => name && name !== sessionUsername);
      if (!peers.length) {
        cfg.setHostStatus?.("No other participants are online.", true);
        return false;
      }
      await Promise.all(peers.map((peer) => cfg.sendSignal?.(peer, type, payload)));
      return true;
    }

    async function claimHost() {
      const data = await cfg.api?.("/host/claim", {
        method: "POST",
        body: JSON.stringify({ username: cfg.getSessionUsername?.() })
      });
      setHostOwner(data && data.hostUsername ? data.hostUsername : "");
      return data;
    }

    async function releaseHost() {
      const data = await cfg.api?.("/host/release", {
        method: "POST",
        body: JSON.stringify({ username: cfg.getSessionUsername?.() })
      });
      setHostOwner(data && data.hostUsername ? data.hostUsername : "");
      return data;
    }

    async function transferHost(toUsername) {
      const data = await cfg.api?.("/host/transfer", {
        method: "POST",
        body: JSON.stringify({ from: cfg.getSessionUsername?.(), to: toUsername })
      });
      setHostOwner(data && data.hostUsername ? data.hostUsername : "");
      return data;
    }

    async function sendPresenceHeartbeat() {
      await cfg.api?.("/presence/heartbeat", {
        method: "POST",
        body: JSON.stringify({
          sessionId: cfg.getSessionId?.(),
          username: cfg.getSessionUsername?.(),
          displayName: cfg.getSessionDisplayName?.(),
          onAir: !!cfg.isOnAir?.()
        })
      });
      cfg.setRealtimeEnabled?.(true);
    }

    async function pollPresence() {
      const data = await cfg.api?.("/presence/list");
      cfg.setRealtimeEnabled?.(true);
      if (data && data.adminSettings && typeof data.adminSettings === "object") {
        cfg.mergeAdminSettings?.(data.adminSettings);
      }
      cfg.applyAdminSettingsToUi?.();
      cfg.showRuntimeWarnings?.();
      cfg.applyStudioControlState?.(data && data.studioControlState ? data.studioControlState : null);
      cfg.updateChatStatusFromState?.();
      setHostOwner(data && data.hostUsername ? data.hostUsername : "");
      const participants = Array.isArray(data && data.participants)
        ? data.participants
        : (Array.isArray(data && data.users)
          ? data.users.map((username) => ({
              username: String(username || "").trim().toLowerCase(),
              onAir: false,
              lastSeenAt: Date.now()
            }))
          : []);
      cfg.renderParticipants?.(participants);
    }

    async function pollSignals() {
      if (!cfg.isRealtimeEnabled?.() || !cfg.isVideoRoomEnabled?.()) {
        return;
      }
      const lastSignalId = Number(cfg.getLastSignalId?.() || 0);
      const data = await cfg.api?.(
        "/webrtc/signals?for=" +
          encodeURIComponent(cfg.getSessionUsername?.() || "") +
          "&since=" +
          encodeURIComponent(String(lastSignalId))
      );
      const signals = Array.isArray(data && data.signals) ? data.signals : [];
      for (const signal of signals) {
        if (signal.id > lastSignalId) {
          cfg.setLastSignalId?.(signal.id);
        }
        await cfg.handleSignal?.(signal);
      }
    }

    function setRealtimeOfflineFallback() {
      const participantsStatus = cfg.getParticipantsStatus?.();
      if (participantsStatus) {
        participantsStatus.textContent = "Realtime server offline. Start server to share chat/presence across users.";
      }
      cfg.setChatOnlineState?.("offline", false);
      cfg.setVideoRoomStatus?.("Realtime server offline for video room.", true);
      cfg.setHostStatus?.("Realtime server offline. Host controls unavailable.", true);
      setHostOwner("");
      const onAirRosterStatus = cfg.getOnAirRosterStatus?.();
      if (onAirRosterStatus) {
        onAirRosterStatus.textContent = "On-Air now: realtime offline.";
      }
      cfg.stopTypingTimer?.();
      cfg.setTypingIsActive?.(false);
      cfg.setTypingUsers?.([]);
      cfg.updateChatStatusFromState?.();
      cfg.updatePreflightSummary?.();
    }

    async function syncSessionState() {
      if (cfg.isSessionSyncInFlight?.()) {
        return;
      }
      const refreshSessionFromServer = cfg.getRefreshSessionFromServer?.();
      if (typeof refreshSessionFromServer !== "function") {
        return;
      }
      cfg.setSessionSyncInFlight?.(true);
      try {
        const result = await refreshSessionFromServer();
        if (!result || result.invalid || (!result.ok && !result.transient) || (result.ok && !result.session)) {
          stopRealtimeLoops();
          cfg.leaveVideoRoom?.();
          cfg.stopCameraStream?.();
          cfg.stopMicLoopback?.();
          cfg.stopMicStream?.();
          cfg.clearSession?.();
          cfg.redirectToHome?.();
        }
      } finally {
        cfg.setSessionSyncInFlight?.(false);
      }
    }

    async function initRealtime() {
      if (
        cfg.isRealtimeEnabled?.() &&
        cfg.getHeartbeatTimer?.() &&
        cfg.getChatPollTimer?.() &&
        cfg.getPresencePollTimer?.() &&
        cfg.getSignalPollTimer?.()
      ) {
        return;
      }
      try {
        await cfg.api?.("/health");
        await cfg.loadRtcIceServers?.();
        cfg.setRealtimeEnabled?.(true);
        stopRealtimeBootstrapRetry();
        await sendPresenceHeartbeat();
        await pollPresence();
        await cfg.pollChat?.();
        cfg.startChatStream?.();
        await cfg.flushChatQueue?.();
        cfg.setHostStatus?.("Host controls ready.", false);
        cfg.updateChatStatusFromState?.();

        cfg.setHeartbeatTimer?.(
          global.setInterval(() => {
            sendPresenceHeartbeat().catch(() => {
              cfg.setRealtimeEnabled?.(false);
              setRealtimeOfflineFallback();
            });
          }, Number(cfg.getHeartbeatIntervalMs?.() || 0))
        );

        cfg.setPresencePollTimer?.(
          global.setInterval(() => {
            pollPresence().catch(() => {
              cfg.setRealtimeEnabled?.(false);
              setRealtimeOfflineFallback();
            });
          }, Number(cfg.getPresencePollIntervalMs?.() || 0))
        );

        cfg.setChatPollTimer?.(
          global.setInterval(() => {
            cfg.pollChat?.().catch(() => {
              cfg.updateChatStatusFromState?.();
            });
            cfg.flushChatQueue?.().catch(() => {
              // Retry on next poll.
            });
          }, Number(cfg.getChatPollIntervalMs?.() || 0))
        );

        cfg.setSignalPollTimer?.(
          global.setInterval(() => {
            pollSignals().catch(() => {
              // Keep non-fatal during intermittent network issues.
            });
          }, Number(cfg.getSignalPollIntervalMs?.() || 0))
        );

        cfg.setSessionSyncTimer?.(
          global.setInterval(() => {
            syncSessionState().catch(() => {
              // Ignore transient auth sync errors.
            });
          }, Number(cfg.getSessionSyncIntervalMs?.() || 0))
        );
      } catch (error) {
        cfg.setRealtimeEnabled?.(false);
        setRealtimeOfflineFallback();
        startRealtimeBootstrapRetry();
      }
    }

    function stopRealtimeLoops() {
      [
        cfg.getHeartbeatTimer?.(),
        cfg.getChatPollTimer?.(),
        cfg.getPresencePollTimer?.(),
        cfg.getSignalPollTimer?.(),
        cfg.getSessionSyncTimer?.()
      ].forEach((timer) => {
        if (timer) {
          global.clearInterval(timer);
        }
      });
      cfg.setHeartbeatTimer?.(null);
      cfg.setChatPollTimer?.(null);
      cfg.setPresencePollTimer?.(null);
      cfg.setSignalPollTimer?.(null);
      cfg.setSessionSyncTimer?.(null);
      cfg.closeChatStream?.();
      cfg.stopChatStreamRetry?.();
    }

    function stopRealtimeBootstrapRetry() {
      const timer = cfg.getRealtimeBootstrapRetryTimer?.();
      if (timer) {
        global.clearInterval(timer);
        cfg.setRealtimeBootstrapRetryTimer?.(null);
      }
    }

    function startRealtimeBootstrapRetry() {
      if (cfg.getRealtimeBootstrapRetryTimer?.()) {
        return;
      }
      cfg.setRealtimeBootstrapRetryTimer?.(
        global.setInterval(() => {
          if (
            cfg.isRealtimeEnabled?.() ||
            cfg.getHeartbeatTimer?.() ||
            cfg.getChatPollTimer?.() ||
            cfg.getPresencePollTimer?.() ||
            cfg.getSignalPollTimer?.()
          ) {
            stopRealtimeBootstrapRetry();
            return;
          }
          initRealtime().catch(() => {
            // Keep retrying until realtime reconnects.
          });
        }, Number(cfg.getRealtimeBootstrapRetryIntervalMs?.() || 0))
      );
    }

    function leavePresence(force) {
      if (!force && !cfg.isRealtimeEnabled?.()) {
        return;
      }
      const payload = JSON.stringify({
        sessionId: cfg.getSessionId?.(),
        username: cfg.getSessionUsername?.(),
        displayName: cfg.getSessionDisplayName?.()
      });
      const baseUrl = cfg.getRealtimeBaseUrl?.() || "";
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        const ok = navigator.sendBeacon(baseUrl + "/presence/leave", blob);
        if (ok) {
          return;
        }
      }
      fetch(baseUrl + "/presence/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true
      }).catch(() => {
        // Ignore unload errors.
      });
    }

    async function leavePresenceImmediate() {
      const payload = JSON.stringify({
        sessionId: cfg.getSessionId?.(),
        username: cfg.getSessionUsername?.(),
        displayName: cfg.getSessionDisplayName?.()
      });
      try {
        await cfg.api?.("/presence/leave", {
          method: "POST",
          body: payload
        });
      } catch (error) {
        // Ignore errors; unload fallback still runs.
      }
    }

    function releaseHostOnLeave() {
      if (!cfg.isCurrentUserHost?.()) {
        return;
      }
      const payload = JSON.stringify({ username: cfg.getSessionUsername?.() });
      const baseUrl = cfg.getRealtimeBaseUrl?.() || "";
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon(baseUrl + "/host/release", blob);
        return;
      }
      fetch(baseUrl + "/host/release", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true
      }).catch(() => {
        // Ignore unload errors.
      });
    }

    return {
      setHostOwner,
      renderHostTransferOptions,
      renderHostSpotlightOptions,
      sendHostSignalToAll,
      claimHost,
      releaseHost,
      transferHost,
      sendPresenceHeartbeat,
      pollPresence,
      pollSignals,
      setRealtimeOfflineFallback,
      syncSessionState,
      initRealtime,
      stopRealtimeLoops,
      stopRealtimeBootstrapRetry,
      startRealtimeBootstrapRetry,
      leavePresence,
      leavePresenceImmediate,
      releaseHostOnLeave
    };
  }

  global.RealtimeController = {
    create: createRealtimeController
  };
})(window);
