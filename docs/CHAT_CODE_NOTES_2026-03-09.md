# Chat Code Notes (March 9, 2026)

This note captures the exact chat code areas used today, what changed, and the last known stable checkpoint reported during testing.

## Last Known Stable (User-Reported)

- **Stable feel reported before**: presence logging + server-on stretch investigation changes.
- **Regression trigger reported**: when realtime server is ON, bubbles stretch and a separator-like vertical behavior appears; when server is OFF, chat appears normal.

## Current Chat Asset Version

- [`landing/hello.html`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html)
  - `styles.css?v=20260309-7`
  - `auth.js?v=20260309-7`
  - `hello.js?v=20260309-7`

## Exact Chat Code Areas (Current)

### 1) Message meta + read receipts compact format
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L3081)
- Key lines:
  - `buildSeenByText` + `buildSeenByTooltip`
  - compact meta in `buildMessageMetaText` (`✓` and `✓✓`)

```js
// hello.js:3081+
function buildSeenByText(entry) { ... }
function buildSeenByTooltip(entry) { ... }
function buildMessageMetaText(entry) {
  ...
  if (seenText && seenText !== "Delivered") return baseTime + " • ✓✓";
  return baseTime + " • ✓";
}
```

### 2) Message rendering (stability mode)
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L3390)
- Key behavior:
  - normal messages + system messages render in `createMessageElement`
  - reaction popover UI intentionally disabled in “stability mode” path

```js
// hello.js:3472+
// Stability mode: keep chat layout compact while isolating stretch issues.
// Reactions and hover popovers are intentionally disabled here.
renderMessageReactions(wrapper, entry);
```

### 3) Unread gating excludes system messages
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L3511)

```js
if (countUnread && !chatOpen && entry.username !== session.username && entry.kind !== "system") {
  unreadCount += 1;
  renderUnread();
}
```

### 4) Incoming event hydration maps system messages explicitly
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L4693)

```js
kind: item.kind === "system" || item.username === "system" ? "system" : "chat"
```

### 5) Chat sync reset when server IDs restart
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L4718)
- Purpose: avoid stale `lastChatId`/`lastSeenUpTo` state after realtime server restart.

```js
function resetChatSyncState() { ... }
async function pollChat(allowRetry) {
  ...
  if (canRetry && lastChatId > 0 && serverLastEventId < lastChatId) {
    resetChatSyncState();
    await pollChat(false);
    return;
  }
}
```

### 6) Chat layout CSS (current compact/stability state)
- File: [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css#L691)
- Current:
  - `.chat-messages` uses `flex` column
  - `.chat-message` uses `inline-block`, `max-width: min(44%, 16rem)`
  - system messages styled as dim bubbles + italics

```css
/* styles.css:691+ */
.chat-messages { display: flex; flex-direction: column; align-items: flex-start; ... }
.chat-message { display: inline-block; width: auto; max-width: min(44%, 16rem); ... }
.chat-message.system { ... background: rgba(...); border: 1px solid ...; ... }
```

### 7) Forced chat reset block (high-priority overrides)
- File: [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css#L4749)
- This block uses `!important` and is intended to override conflicting earlier rules while isolating stretch behavior.

```css
/* styles.css:4749+ */
.chat-drawer .chat-message { ... !important; }
.chat-drawer .chat-meta { ... !important; }
.chat-drawer .chat-message.has-reactions { padding-top: 0.22rem !important; }
.chat-drawer .chat-message-reaction-anchor { position: static !important; ... }
```

## Presence Logging Decision

- Presence login/logoff logs were removed so online/offline visibility is driven by Participants panel + live chat behavior only.
- File: [`realtime/server.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/realtime/server.js)

## Isolation Strategy Going Forward

1. Keep this note as the baseline map.
2. Change one layer at a time and retest with server ON/OFF:
   1. Bubble geometry only
   2. Meta line only
   3. Reply block only
   4. Reaction features (reintroduce later if needed)
3. Record each test result in this file with timestamp.

## Restore Pass (March 9, 2026 - PM)

- Re-enabled reaction UI rendering in [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js#L3321):
  - emoji row
  - `...` menu trigger
  - reaction chips/counts
  - hover/focus open/close wiring
- Kept **presence logging removed** (no login/logout system log events in chat).
- Restored popover visibility behavior in [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css#L833) and [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css#L966).
- Updated message list anchoring in [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css#L691):
  - reduced top padding
  - `justify-content: flex-end` so short histories sit at bottom
- Updated cache-bust query strings in [`landing/hello.html`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html#L13) and [`landing/hello.html`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html#L625) to `v=20260309-8`.

## UI Polish Pass (March 9, 2026 - Late PM)

- Reaction hover popout now renders as:
  - `emoji reactions | ...`
  - with a visible divider and tighter action menu spacing.
- More menu actions now include icons:
  - `↩ Reply`
  - `✎ Edit`
  - `🗑 Delete` / `🗑 Remove`
- Popout action pills were tightened for cleaner visual density.
- Existing direction behavior kept:
  - received message popout on the right
  - self message popout on the left
- Cache-bust updated to `v=20260309-38` in [`landing/hello.html`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html#L13).

---

## Stabilization Addendum (March 10, 2026 - Night)

### Realtime Persistence/Refresh Fix
- Client chat sync path was updated so each poll merges:
  - DB-backed `messages` snapshot
  - then incremental `events`
- This removed a stale-history rollback behavior seen after refresh/restart.
- File: [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js)

### Chat Scroll Fixes
- Removed forced bottom-scroll trigger from typing indicator updates.
- Updated chat list alignment to support normal upward history scrolling.
- Files:
  - [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js)
  - [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css)

### Seen-By Popout Simplification
- Replaced verbose status panel with compact single line:
  - `Seen: <names>`
- Removed extra all-seen/waiting text and unstable movement behavior.
- Made text/readability stronger on frosted panel.
- Files:
  - [`landing/hello.js`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.js)
  - [`landing/styles.css`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/styles.css)

### Current frontend cache-bust checkpoint
- [`landing/hello.html`](/Users/chadlampton/Documents/Websites/TBR-Admin/landing/hello.html):
  - `hello.js?v=20260310-94`
