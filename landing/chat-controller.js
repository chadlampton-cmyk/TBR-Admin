(function initChatControllerModule(global) {
  "use strict";

  function createChatController(config) {
    const cfg = config && typeof config === "object" ? config : {};

    function loadChatQueue() {
      const raw = cfg.readSessionValue?.(cfg.getChatQueueStorageKey?.());
      if (!raw) {
        cfg.setChatQueue?.([]);
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        cfg.setChatQueue?.(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        cfg.setChatQueue?.([]);
      }
    }

    function pruneChatQueue() {
      const now = Date.now();
      const queue = Array.isArray(cfg.getChatQueue?.()) ? cfg.getChatQueue?.() : [];
      const nextQueue = queue.filter((item) => {
        if (!item || item.type !== "message") {
          return false;
        }
        const queuedAt = Number(item.queuedAt || 0);
        if (!queuedAt || !Number.isFinite(queuedAt)) {
          return false;
        }
        return now - queuedAt <= Number(cfg.getChatQueueTtlMs?.() || 0);
      });
      if (nextQueue.length !== queue.length) {
        cfg.setChatQueue?.(nextQueue);
        saveChatQueue();
      }
    }

    function saveChatQueue() {
      cfg.writeSessionValue?.(cfg.getChatQueueStorageKey?.(), JSON.stringify(cfg.getChatQueue?.() || []));
    }

    function saveSeenUpTo(upto) {
      const value = Number(upto || 0);
      if (!value || value <= 0) {
        cfg.removeSessionValue?.(cfg.getChatSeenStorageKey?.());
        return;
      }
      cfg.writeSessionValue?.(cfg.getChatSeenStorageKey?.(), String(value));
    }

    function updateChatStatusFromState() {
      const scheduledSendCount = Number(cfg.getScheduledSendCount?.() || 0);
      const chatQueue = Array.isArray(cfg.getChatQueue?.()) ? cfg.getChatQueue?.() : [];
      const scheduledText = scheduledSendCount > 0 ? scheduledSendCount + " scheduled send(s)" : "";
      if (!cfg.isRealtimeEnabled?.()) {
        const offline = "Realtime offline. Messages will send when connection returns.";
        cfg.setChatStatus?.(scheduledText ? offline + " • " + scheduledText : offline, "error");
        return;
      }
      if (chatQueue.length) {
        const queue = "Connected. " + chatQueue.length + " queued item(s) retrying...";
        cfg.setChatStatus?.(scheduledText ? queue + " • " + scheduledText : queue, "warn");
        return;
      }
      cfg.setChatStatus?.(scheduledText, "ok");
    }

    function enqueueChatAction(action) {
      if (!action || typeof action !== "object") {
        return;
      }
      if (action.type === "react") {
        return;
      }
      const queue = Array.isArray(cfg.getChatQueue?.()) ? cfg.getChatQueue?.().slice() : [];
      queue.push(action);
      cfg.setChatQueue?.(queue);
      saveChatQueue();
      updateChatStatusFromState();
    }

    function isRetryableChatError(error) {
      if (!error) {
        return false;
      }
      const status = Number(error.status || 0);
      if (!status) {
        return true;
      }
      if (status === 408 || status === 425 || status === 429) {
        return true;
      }
      return status >= 500;
    }

    async function flushChatQueue() {
      const queue = Array.isArray(cfg.getChatQueue?.()) ? cfg.getChatQueue?.() : [];
      if (cfg.isChatFlushInProgress?.() || !cfg.isRealtimeEnabled?.() || !queue.length) {
        return;
      }
      cfg.setChatFlushInProgress?.(true);
      try {
        while ((cfg.getChatQueue?.() || []).length) {
          const nextQueue = Array.isArray(cfg.getChatQueue?.()) ? cfg.getChatQueue?.() : [];
          const item = nextQueue[0];
          if (!item || !item.type) {
            nextQueue.shift();
            cfg.setChatQueue?.(nextQueue);
            continue;
          }
          if (item.type === "message") {
            try {
              await sendChat(String(item.text || ""), null, item.replyTo || null);
            } catch (error) {
              if (isRetryableChatError(error)) {
                throw error;
              }
              nextQueue.shift();
              cfg.setChatQueue?.(nextQueue);
              saveChatQueue();
              const reason = error && error.message ? error.message : "Unable to send queued message.";
              cfg.setLockedChatErrorStatus?.("Dropped queued message: " + reason, 7000);
              continue;
            }
            cfg.removeFirstLocalPendingByText?.(String(item.text || ""));
          } else if (item.type === "react") {
            nextQueue.shift();
            cfg.setChatQueue?.(nextQueue);
            saveChatQueue();
            continue;
          }
          nextQueue.shift();
          cfg.setChatQueue?.(nextQueue);
          saveChatQueue();
        }
        await pollChat();
      } catch (error) {
        // Keep remaining queue for next reconnect attempt.
      } finally {
        cfg.setChatFlushInProgress?.(false);
        updateChatStatusFromState();
      }
    }

    function setChatAttention(on) {
      const disableAll = !!cfg.getChatAlertsDisabledAll?.();
      const pulseEnabled = !disableAll && cfg.isChatPulseEnabled?.() !== false;
      const chatDrawer = cfg.getChatDrawer?.();
      const chatLauncher = cfg.getChatLauncher?.();
      if (!chatDrawer || !chatLauncher) {
        return;
      }
      if (!on || !pulseEnabled) {
        chatDrawer.classList.remove("chat-attention");
        chatLauncher.classList.remove("chat-attention");
        return;
      }
      chatDrawer.classList.add("chat-attention");
      chatLauncher.classList.add("chat-attention");
    }

    function clearChatAttention(force) {
      if (cfg.isPendingChatResponse?.() && !force) {
        return;
      }
      setChatAttention(false);
    }

    function acknowledgeChatMessages() {
      cfg.setChatReadAcknowledged?.(true);
      cfg.setPendingChatResponse?.(false);
      clearChatAttention(true);
      cfg.setUnreadCount?.(0);
      cfg.renderUnread?.();
      markChatSeenUpToLatest();
    }

    function acknowledgeChatComposerInteraction() {
      cfg.setPendingChatResponse?.(false);
      acknowledgeChatMessages();
      setChatAttention(false);
    }

    function markChatSeenUpToLatest() {
      if (!cfg.isRealtimeEnabled?.() || !cfg.isChatReadAcknowledged?.()) {
        return;
      }
      if (cfg.areChatReadReceiptsDisabled?.()) {
        return;
      }
      const ids = cfg.getChatEntryIds?.() || [];
      const upto = ids.length ? Math.max(...ids) : 0;
      const lastSeenUpTo = Number(cfg.getLastSeenUpTo?.() || 0);
      const pendingSeenUpTo = Number(cfg.getPendingSeenUpTo?.() || 0);
      if (!upto || upto <= Math.max(lastSeenUpTo, pendingSeenUpTo)) {
        return;
      }
      cfg.setPendingSeenUpTo?.(upto);
      saveSeenUpTo(Math.max(lastSeenUpTo, upto));
      flushSeenSyncQueue();
    }

    async function flushSeenSyncQueue() {
      if (cfg.isSeenSyncInFlight?.() || !cfg.isRealtimeEnabled?.() || cfg.areChatReadReceiptsDisabled?.()) {
        return;
      }
      if (Number(cfg.getPendingSeenUpTo?.() || 0) <= Number(cfg.getLastSeenUpTo?.() || 0)) {
        return;
      }
      cfg.setSeenSyncInFlight?.(true);
      try {
        while (Number(cfg.getPendingSeenUpTo?.() || 0) > Number(cfg.getLastSeenUpTo?.() || 0)) {
          const target = Number(cfg.getPendingSeenUpTo?.() || 0);
          await sendChatSeen(target);
          cfg.setLastSeenUpTo?.(Math.max(Number(cfg.getLastSeenUpTo?.() || 0), target));
          if (Number(cfg.getPendingSeenUpTo?.() || 0) <= target) {
            cfg.setPendingSeenUpTo?.(0);
          }
          saveSeenUpTo(Number(cfg.getLastSeenUpTo?.() || 0));
        }
      } catch (error) {
        // Keep pending seen marker for retry on next poll tick.
      } finally {
        cfg.setSeenSyncInFlight?.(false);
      }
    }

    function stopTypingTimer() {
      const timer = cfg.getTypingStopTimer?.();
      if (timer) {
        global.clearTimeout(timer);
        cfg.setTypingStopTimer?.(null);
      }
    }

    function scheduleTypingStop() {
      stopTypingTimer();
      cfg.setTypingStopTimer?.(
        global.setTimeout(() => {
          if (!cfg.isTypingActive?.()) {
            return;
          }
          sendChatTyping(false)
            .catch(() => {
              // Ignore transient realtime failures.
            })
            .finally(() => {
              cfg.setTypingActive?.(false);
            });
        }, Number(cfg.getChatTypingIdleMs?.() || 0))
      );
    }

    function handleComposerTypingState(value) {
      const text = String(value || "").trim();
      if (!cfg.isRealtimeEnabled?.()) {
        return;
      }
      if (!text) {
        stopTypingTimer();
        if (!cfg.isTypingActive?.()) {
          return;
        }
        sendChatTyping(false)
          .catch(() => {
            // Ignore transient realtime failures.
          })
          .finally(() => {
            cfg.setTypingActive?.(false);
          });
        return;
      }
      scheduleTypingStop();
      const nowMs = Date.now();
      if (cfg.isTypingActive?.() && nowMs - Number(cfg.getLastTypingSentAt?.() || 0) < Number(cfg.getChatTypingThrottleMs?.() || 0)) {
        return;
      }
      cfg.setTypingActive?.(true);
      cfg.setLastTypingSentAt?.(nowMs);
      sendChatTyping(true).catch(() => {
        // Ignore transient realtime failures.
      });
    }

    async function submitChatText(text, attachment, forcedReplyTo) {
      stopTypingTimer();
      if (cfg.isTypingActive?.()) {
        cfg.setTypingActive?.(false);
        sendChatTyping(false).catch(() => {
          // Ignore transient realtime failures.
        });
      }
      const hasText = !!text;
      const hasAttachment = !!(attachment && typeof attachment === "object");
      if (!hasText && !hasAttachment) {
        return;
      }
      if (hasAttachment && cfg.areChatAttachmentsDisabled?.()) {
        cfg.setChatStatus?.("Attachments are disabled by admin.", "warn");
        return;
      }
      if (hasAttachment && attachment && attachment.kind === "video" && cfg.areChatVideoAttachmentsDisabled?.()) {
        cfg.setChatStatus?.("Video attachments are disabled by admin.", "warn");
        return;
      }
      cfg.setPendingChatResponse?.(false);
      clearChatAttention();
      cfg.setChatStatus?.(hasAttachment ? "Uploading attachment..." : "Sending message...", "warn");
      const currentReply = cfg.getReplyingToMessage?.();
      const replyToPayload = forcedReplyTo ? { ...forcedReplyTo } : (currentReply ? { ...currentReply } : null);
      const pendingId = cfg.appendLocalPendingMessage?.(text, attachment, replyToPayload);
      let sendCommitted = false;
      let sentMessage = null;
      try {
        if (hasAttachment) {
          cfg.setAttachmentBusy?.(true);
          cfg.setAttachmentProgress?.(0);
          const response = await sendChatWithProgress(
            text,
            attachment || null,
            (pct) => {
              cfg.setAttachmentProgress?.(pct);
            },
            replyToPayload
          );
          sentMessage = response && response.message ? response.message : null;
          sendCommitted = true;
          cfg.setAttachmentProgress?.(100);
        } else {
          const response = await sendChat(text, attachment || null, replyToPayload);
          sentMessage = response && response.message ? response.message : null;
          sendCommitted = true;
        }
        cfg.removeLocalPendingMessage?.(pendingId);
        const committedEntry = cfg.normalizeServerMessageToEntry?.(sentMessage);
        if (committedEntry) {
          cfg.appendEntryToUI?.(committedEntry, false);
          if (committedEntry.id > Number(cfg.getLastChatId?.() || 0)) {
            cfg.setLastChatId?.(committedEntry.id);
          }
          markChatSeenUpToLatest();
        }
        try {
          await pollChat();
        } catch (error) {
          // Message already sent; realtime sync can catch up in next poll.
        }
        updateChatStatusFromState();
        cfg.clearReplyingMessage?.();
        if (hasAttachment) {
          cfg.setAttachmentBusy?.(false);
          cfg.clearPendingAttachment?.();
        }
      } catch (error) {
        if (hasAttachment) {
          const reason = error && error.message ? error.message : "Attachment send failed.";
          if (reason.toLowerCase().includes("canceled")) {
            cfg.setChatStatus?.("Upload canceled.", "warn");
          } else {
            cfg.setChatStatus?.(reason, "error");
          }
          cfg.setAttachmentBusy?.(false);
          cfg.setAttachmentRetryVisible?.(true);
          cfg.setPendingAttachmentRetry?.({
            text,
            attachment,
            replyTo: replyToPayload
          });
          cfg.updateLocalPendingMessage?.(pendingId, "Failed");
          return;
        }
        if (sendCommitted) {
          cfg.removeLocalPendingMessage?.(pendingId);
          cfg.setChatStatus?.("Message sent. Live sync will catch up shortly.", "warn");
          return;
        }
        if (isRetryableChatError(error)) {
          enqueueChatAction({
            type: "message",
            text,
            replyTo: replyToPayload,
            queuedAt: Date.now()
          });
          cfg.clearReplyingMessage?.();
          cfg.updateLocalPendingMessage?.(pendingId, "Queued");
          return;
        }
        const reason = error && error.message ? error.message : "Unable to send message.";
        cfg.setLockedChatErrorStatus?.(reason, 9000);
        cfg.updateLocalPendingMessage?.(pendingId, "Failed");
      }
    }

    async function sendChat(text, attachment, replyTo) {
      return cfg.api?.("/chat/send", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          displayName: cfg.getSessionDisplayName?.(),
          text,
          attachment: attachment || null,
          replyTo: replyTo || null
        })
      });
    }

    function sendChatWithProgress(text, attachment, onProgress, replyTo) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        cfg.setAttachmentUploadXhr?.(xhr);
        xhr.open("POST", (cfg.getRealtimeBaseUrl?.() || "") + "/chat/send", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4) {
            return;
          }
          if (cfg.getAttachmentUploadXhr?.() === xhr) {
            cfg.setAttachmentUploadXhr?.(null);
          }
          let data = null;
          try {
            data = xhr.responseText ? JSON.parse(xhr.responseText) : {};
          } catch (error) {
            data = {};
          }
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(data || {});
            return;
          }
          const err = new Error((data && data.error) || "Upload failed");
          err.status = xhr.status;
          reject(err);
        };
        xhr.onerror = () => {
          if (cfg.getAttachmentUploadXhr?.() === xhr) {
            cfg.setAttachmentUploadXhr?.(null);
          }
          reject(new Error("Upload failed"));
        };
        xhr.onabort = () => {
          if (cfg.getAttachmentUploadXhr?.() === xhr) {
            cfg.setAttachmentUploadXhr?.(null);
          }
          reject(new Error("Upload canceled"));
        };
        if (xhr.upload && onProgress) {
          xhr.upload.onprogress = (event) => {
            if (!event.lengthComputable) {
              return;
            }
            const pct = Math.round((event.loaded / event.total) * 100);
            onProgress(pct);
          };
        }
        xhr.send(
          JSON.stringify({
            username: cfg.getSessionUsername?.(),
            displayName: cfg.getSessionDisplayName?.(),
            text,
            attachment: attachment || null,
            replyTo: replyTo || null
          })
        );
      });
    }

    async function sendChatReaction(messageId, emoji) {
      await cfg.api?.("/chat/react", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          messageId,
          emoji
        })
      });
    }

    async function sendChatEdit(messageId, text) {
      await cfg.api?.("/chat/edit", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          messageId,
          text
        })
      });
    }

    async function sendChatDelete(messageId, asHost) {
      return cfg.api?.("/chat/delete", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          messageId,
          asHost: !!asHost
        })
      });
    }

    async function sendChatSeen(seenUpTo) {
      if (!seenUpTo) {
        return;
      }
      await cfg.api?.("/chat/seen", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          seenUpTo
        })
      });
    }

    async function sendChatTyping(typing) {
      await cfg.api?.("/chat/typing", {
        method: "POST",
        body: JSON.stringify({
          username: cfg.getSessionUsername?.(),
          displayName: cfg.getSessionDisplayName?.(),
          typing: !!typing
        })
      });
    }

    function handleIncomingChatEvents(events, suppressAlerts) {
      const list = Array.isArray(events) ? events : [];
      const suppress = !!suppressAlerts;
      for (const event of list) {
        const eventId = Number(event && event.id ? event.id : 0);
        if (eventId > Number(cfg.getLastChatId?.() || 0)) {
          cfg.setLastChatId?.(eventId);
        }
        if (event.type === "message") {
          const item = event.payload && event.payload.message ? event.payload.message : null;
          const messageId = Number(item && item.id ? item.id : 0);
          if (!item || !messageId) {
            continue;
          }
          const isKnownMessage = cfg.hasSeenMessageId?.(messageId);
          const entry = cfg.normalizeServerMessageToEntry?.(item);
          if (!entry) {
            continue;
          }
          const isRemote = entry.username !== cfg.getSessionUsername?.();
          const isUnreadRemote = isRemote && entry.id > Number(cfg.getLastSeenUpTo?.() || 0) && entry.kind !== "system";
          cfg.appendEntryToUI?.(entry, isUnreadRemote);
          if (!suppress && isUnreadRemote && !isKnownMessage) {
            cfg.notifyIncomingRemoteMessage?.(entry);
          }
          continue;
        }

        if (event.type === "reaction") {
          const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
          if (!suppress) {
            cfg.notifyIncomingReaction?.(event.id, payload);
          }
          cfg.applyReactionUpdate?.(payload.messageId, payload.reactions);
          continue;
        }

        if (event.type === "edit") {
          const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
          cfg.applyMessageEdit?.(payload.messageId, payload.text, payload.editedAt);
          continue;
        }

        if (event.type === "delete") {
          const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
          cfg.applyMessageDelete?.(payload.messageId);
          continue;
        }

        if (event.type === "seen") {
          const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
          cfg.applySeenUpdate?.(payload.username, payload.seenUpTo);
          continue;
        }

        if (event.type === "clear") {
          cfg.clearChatUiForAdminReset?.();
          cfg.setChatStatus?.("Chat history was cleared by admin.", "warn");
          continue;
        }

        if (event.type === "typing") {
          const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
          cfg.setTypingUsers?.(Array.isArray(payload.typingUsers) ? payload.typingUsers : []);
        }
      }
    }

    function handleIncomingLegacyMessages(messages, suppressAlerts) {
      const list = Array.isArray(messages) ? messages : [];
      const suppress = !!suppressAlerts;
      for (const item of list) {
        const messageId = Number(item && item.id ? item.id : 0);
        if (!messageId) {
          continue;
        }
        const isKnownMessage = cfg.hasSeenMessageId?.(messageId);
        const entry = cfg.normalizeServerMessageToEntry?.(item);
        if (!entry) {
          continue;
        }
        const isRemote = entry.username !== cfg.getSessionUsername?.();
        const isUnreadRemote = isRemote && entry.id > Number(cfg.getLastSeenUpTo?.() || 0) && entry.kind !== "system";
        cfg.appendEntryToUI?.(entry, isUnreadRemote);
        if (!suppress && isUnreadRemote && !isKnownMessage) {
          cfg.notifyIncomingRemoteMessage?.(entry);
        }
        if (messageId > Number(cfg.getLastChatId?.() || 0)) {
          cfg.setLastChatId?.(messageId);
        }
      }
    }

    function resetChatSyncState() {
      cfg.setLastChatId?.(0);
      cfg.setLastSeenUpTo?.(0);
      cfg.setPendingSeenUpTo?.(0);
      cfg.clearSeenMessageIds?.();
      cfg.clearChatEntriesById?.();
      cfg.clearChatMessagesUi?.();
      saveSeenUpTo(0);
    }

    function clearChatUiForAdminReset() {
      cfg.setLastChatId?.(0);
      cfg.clearSeenMessageIds?.();
      cfg.clearChatEntriesById?.();
      cfg.clearChatMessagesUi?.();
      cfg.setPendingSeenUpTo?.(0);
      cfg.setLastSeenUpTo?.(0);
      saveSeenUpTo(0);
      cfg.clearEditingMessageStatus?.();
      cfg.clearReplyingMessage?.();
      cfg.clearLocalPendingMessages?.();
      cfg.setChatQueue?.([]);
      saveChatQueue();
      clearChatAttention();
      cfg.setUnreadCount?.(0);
      updateChatStatusFromState();
    }

    async function pollChat(allowRetry) {
      if (cfg.isChatPollInFlight?.()) {
        return;
      }
      cfg.setChatPollInFlight?.(true);
      try {
        const canRetry = allowRetry !== false;
        const lastChatId = Number(cfg.getLastChatId?.() || 0);
        const data = await cfg.api?.("/chat/since?since=" + encodeURIComponent(String(lastChatId)));
        cfg.setRealtimeEnabled?.(true);
        const serverLastEventId = Number(data && data.lastEventId ? data.lastEventId : 0);
        const syncMode = String((data && data.syncMode) || "events").toLowerCase();
        if (canRetry && syncMode !== "messages" && lastChatId > 0 && serverLastEventId < lastChatId) {
          const fullData = await cfg.api?.("/chat/since?since=0");
          const fullEvents = Array.isArray(fullData && fullData.events) ? fullData.events : [];
          const fullMessages = Array.isArray(fullData && fullData.messages) ? fullData.messages : [];
          if (fullMessages.length) {
            handleIncomingLegacyMessages(fullMessages, false);
          }
          if (fullEvents.length) {
            handleIncomingChatEvents(fullEvents, false);
          }
          cfg.setTypingUsers?.(Array.isArray(fullData && fullData.typingUsers) ? fullData.typingUsers : []);
          const fullLatestMessageId = fullMessages.length ? Number(fullMessages[fullMessages.length - 1].id || 0) : 0;
          cfg.setLastChatId?.(Math.max(Number(cfg.getLastChatId?.() || 0), Number(fullData && fullData.lastEventId ? fullData.lastEventId : 0), fullLatestMessageId));
          updateChatStatusFromState();
          cfg.refreshMessagePopovers?.();
          markChatSeenUpToLatest();
          return;
        }
        flushSeenSyncQueue();
        cfg.setTypingUsers?.(Array.isArray(data && data.typingUsers) ? data.typingUsers : []);
        const isInitialHydration = Number(cfg.getLastChatId?.() || 0) === 0 && Number(cfg.getSeenMessageIdsSize?.() || 0) === 0;
        const events = Array.isArray(data && data.events) ? data.events : [];
        const messages = Array.isArray(data && data.messages) ? data.messages : [];
        if (messages.length) {
          handleIncomingLegacyMessages(messages, isInitialHydration);
        }
        if (events.length) {
          handleIncomingChatEvents(events, isInitialHydration);
        }
        const latestMessageId = messages.length ? Number(messages[messages.length - 1].id || 0) : 0;
        if (latestMessageId > Number(cfg.getLastChatId?.() || 0)) {
          cfg.setLastChatId?.(latestMessageId);
        }
        if (serverLastEventId > Number(cfg.getLastChatId?.() || 0)) {
          cfg.setLastChatId?.(serverLastEventId);
        }
        updateChatStatusFromState();
        cfg.refreshMessagePopovers?.();
        markChatSeenUpToLatest();
      } finally {
        cfg.setChatPollInFlight?.(false);
      }
    }

    function stopChatStreamRetry() {
      const timer = cfg.getChatStreamRetryTimer?.();
      if (timer) {
        global.clearTimeout(timer);
        cfg.setChatStreamRetryTimer?.(null);
      }
    }

    function closeChatStream() {
      const stream = cfg.getChatStream?.();
      if (stream) {
        try {
          stream.close();
        } catch (error) {
          // Ignore close races.
        }
        cfg.setChatStream?.(null);
      }
    }

    function scheduleChatStreamReconnect() {
      if (cfg.getChatStreamRetryTimer?.() || !cfg.isRealtimeEnabled?.()) {
        return;
      }
      cfg.setChatStreamRetryTimer?.(
        global.setTimeout(() => {
          cfg.setChatStreamRetryTimer?.(null);
          startChatStream();
        }, 1500)
      );
    }

    function handleChatStreamPayload(payload) {
      if (!payload || typeof payload !== "object") {
        return;
      }
      const events = Array.isArray(payload.events) ? payload.events : (payload.event ? [payload.event] : []);
      if (events.length) {
        handleIncomingChatEvents(events, false);
      }
      if (Array.isArray(payload.typingUsers)) {
        cfg.setTypingUsers?.(payload.typingUsers);
      }
      const serverLastEventId = Number(payload.lastEventId || 0);
      if (serverLastEventId > Number(cfg.getLastChatId?.() || 0)) {
        cfg.setLastChatId?.(serverLastEventId);
      }
      updateChatStatusFromState();
      cfg.refreshMessagePopovers?.();
      markChatSeenUpToLatest();
    }

    function startChatStream() {
      if (!cfg.isRealtimeEnabled?.() || cfg.getChatStream?.() || typeof global.EventSource !== "function") {
        return;
      }
      stopChatStreamRetry();
      const since = Number(cfg.getLastChatId?.() || 0);
      const streamUrl =
        (cfg.getRealtimeBaseUrl?.() || "") +
        "/chat/stream?since=" +
        encodeURIComponent(String(since)) +
        "&_=" +
        encodeURIComponent(String(Date.now()));
      try {
        const stream = new EventSource(streamUrl);
        cfg.setChatStream?.(stream);
        stream.addEventListener("open", () => {
          cfg.setRealtimeEnabled?.(true);
          updateChatStatusFromState();
        });
        stream.addEventListener("init", (event) => {
          try {
            const payload = event && event.data ? JSON.parse(event.data) : {};
            handleChatStreamPayload(payload);
          } catch (error) {
            // Ignore malformed stream payloads.
          }
        });
        stream.addEventListener("chat", (event) => {
          try {
            const payload = event && event.data ? JSON.parse(event.data) : {};
            handleChatStreamPayload(payload);
          } catch (error) {
            // Ignore malformed stream payloads.
          }
        });
        stream.onerror = () => {
          closeChatStream();
          scheduleChatStreamReconnect();
        };
      } catch (error) {
        scheduleChatStreamReconnect();
      }
    }

    return {
      loadChatQueue,
      pruneChatQueue,
      saveChatQueue,
      saveSeenUpTo,
      updateChatStatusFromState,
      enqueueChatAction,
      isRetryableChatError,
      flushChatQueue,
      setChatAttention,
      clearChatAttention,
      acknowledgeChatMessages,
      acknowledgeChatComposerInteraction,
      markChatSeenUpToLatest,
      flushSeenSyncQueue,
      stopTypingTimer,
      scheduleTypingStop,
      handleComposerTypingState,
      submitChatText,
      sendChat,
      sendChatWithProgress,
      sendChatReaction,
      sendChatEdit,
      sendChatDelete,
      sendChatSeen,
      sendChatTyping,
      handleIncomingChatEvents,
      handleIncomingLegacyMessages,
      resetChatSyncState,
      clearChatUiForAdminReset,
      pollChat,
      stopChatStreamRetry,
      closeChatStream,
      scheduleChatStreamReconnect,
      handleChatStreamPayload,
      startChatStream
    };
  }

  global.ChatController = {
    create: createChatController
  };
})(window);
