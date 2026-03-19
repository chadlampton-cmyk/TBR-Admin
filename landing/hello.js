const sessionUserEl = document.getElementById("session-user");
const profileUserEl = document.getElementById("profile-user");
const profileAvatarEl = document.getElementById("profile-avatar");
const profileAvatarImgEl = document.getElementById("profile-avatar-img");
const profileMenuEl = document.getElementById("profile-menu");
const profileMenuBtn = document.getElementById("profile-menu-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const profileLogoutBtn = document.getElementById("profile-logout-btn");
const profileOpenLink = document.getElementById("profile-open-link");
const settingsOpenLink = document.getElementById("settings-open-link");
const helpOpenLink = document.getElementById("help-open-link");
const loungeProfileModal = document.getElementById("lounge-profile-modal");
const loungeProfileBackdrop = document.getElementById("lounge-profile-backdrop");
const loungeProfileCloseBtn = document.getElementById("lounge-profile-close-btn");
const loungeProfileBackBtn = document.getElementById("lounge-profile-back-btn");
const loungeProfileMessage = document.getElementById("lounge-profile-message");
const loungeProfilePhotoPreview = document.getElementById("lounge-profile-photo-preview");
const loungeProfilePhotoFallback = document.getElementById("lounge-profile-photo-fallback");
const loungeProfilePhotoInput = document.getElementById("lounge-profile-photo-input");
const loungeProfilePhotoUploadBtn = document.getElementById("lounge-profile-photo-upload-btn");
const loungeProfilePhotoRemoveBtn = document.getElementById("lounge-profile-photo-remove-btn");
const loungeProfilePhotoEditBtn = document.getElementById("lounge-profile-photo-edit-btn");
const loungeProfileAliasInput = document.getElementById("lounge-profile-alias-input");
const loungeProfileUseAliasToggle = document.getElementById("lounge-profile-use-alias-toggle");
const loungeProfileDisplayName = document.getElementById("lounge-profile-display-name");
const loungeProfileUserMeta = document.getElementById("lounge-profile-user-meta");
const loungeProfileCreatedMeta = document.getElementById("lounge-profile-created-meta");
const loungeProfileSaveBtn = document.getElementById("lounge-profile-save-btn");
const loungeAvatarStudioModal = document.getElementById("lounge-avatar-studio-modal");
const loungeAvatarStudioBackdrop = document.getElementById("lounge-avatar-studio-backdrop");
const loungeAvatarStudioCloseBtn = document.getElementById("lounge-avatar-studio-close-btn");
const loungeAvatarCategorySelect = document.getElementById("lounge-avatar-category-select");
const loungeAvatarPresetGrid = document.getElementById("lounge-avatar-preset-grid");
const loungeProfileCurrentPasswordInput = document.getElementById("lounge-profile-current-password-input");
const loungeProfileNewPasswordInput = document.getElementById("lounge-profile-new-password-input");
const loungeProfileConfirmPasswordInput = document.getElementById("lounge-profile-confirm-password-input");
const loungeProfileChangePasswordBtn = document.getElementById("lounge-profile-change-password-btn");
const loungeProfileDeleteAccountBtn = document.getElementById("lounge-profile-delete-account-btn");
const loungeProfileDeleteModal = document.getElementById("lounge-profile-delete-modal");
const loungeProfileDeleteBackdrop = document.getElementById("lounge-profile-delete-backdrop");
const loungeProfileDeleteCancelBtn = document.getElementById("lounge-profile-delete-cancel-btn");
const loungeProfileDeleteConfirmBtn = document.getElementById("lounge-profile-delete-confirm-btn");
const loungeSettingsModal = document.getElementById("lounge-settings-modal");
const loungeSettingsBackdrop = document.getElementById("lounge-settings-backdrop");
const loungeSettingsCloseBtn = document.getElementById("lounge-settings-close-btn");
const loungeSettingsFrame = document.getElementById("lounge-settings-frame");
const loungeHelpModal = document.getElementById("lounge-help-modal");
const loungeHelpBackdrop = document.getElementById("lounge-help-backdrop");
const loungeHelpFrame = document.getElementById("lounge-help-frame");
const sessionAirPill = document.getElementById("session-air-pill");
const chatLauncher = document.getElementById("chat-launcher");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatDrawer = document.getElementById("studio-chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatAttachBtn = document.getElementById("chat-attach-btn");
const chatPlusMenu = document.getElementById("chat-plus-menu");
const chatPlusScheduleBtn = document.getElementById("chat-plus-schedule-btn");
const chatPlusAttachBtn = document.getElementById("chat-plus-attach-btn");
const chatAttachInput = document.getElementById("chat-attach-input");
const chatAttachPreview = document.getElementById("chat-attach-preview");
const chatAttachPreviewText = document.getElementById("chat-attach-preview-text");
const chatAttachProgress = document.getElementById("chat-attach-progress");
const chatAttachCancelBtn = document.getElementById("chat-attach-cancel-btn");
const chatAttachRetryBtn = document.getElementById("chat-attach-retry-btn");
const chatAttachRemoveBtn = document.getElementById("chat-attach-remove-btn");
const chatReplyPreview = document.getElementById("chat-reply-preview");
const chatReplyPreviewTitle = document.getElementById("chat-reply-preview-title");
const chatReplyPreviewText = document.getElementById("chat-reply-preview-text");
const chatReplyPreviewClose = document.getElementById("chat-reply-preview-close");
const chatStatusEl = document.getElementById("chat-status");
const chatTypingEl = document.getElementById("chat-typing");
const chatQuickToggle = document.getElementById("chat-quick-toggle");
const chatQuickNotes = document.getElementById("chat-quick-notes");
const chatSearchInput = document.getElementById("chat-search-input");
const chatSearchNextBtn = document.getElementById("chat-search-next-btn");
const chatEmojiToggle = document.getElementById("chat-emoji-toggle");
const chatEmojiPicker = document.getElementById("chat-emoji-picker");
const chatEmojiRecent = document.getElementById("chat-emoji-recent");
const chatMessages = document.getElementById("chat-messages");
const chatUnreadCount = document.getElementById("chat-unread-count");
const chatOnlineStatus = document.getElementById("chat-online-status");
const chatMediaModal = document.getElementById("chat-media-modal");
const chatMediaModalBackdrop = document.getElementById("chat-media-modal-backdrop");
const chatMediaModalClose = document.getElementById("chat-media-modal-close");
const chatMediaModalBody = document.getElementById("chat-media-modal-body");
const chatMediaModalDownload = document.getElementById("chat-media-modal-download");
const chatConfirmModal = document.getElementById("chat-confirm-modal");
const chatConfirmBackdrop = document.getElementById("chat-confirm-backdrop");
const chatConfirmTitle = document.getElementById("chat-confirm-title");
const chatConfirmText = document.getElementById("chat-confirm-text");
const chatConfirmCancelBtn = document.getElementById("chat-confirm-cancel-btn");
const chatConfirmOkBtn = document.getElementById("chat-confirm-ok-btn");
const chatScheduleModal = document.getElementById("chat-schedule-modal");
const chatScheduleBackdrop = document.getElementById("chat-schedule-backdrop");
const chatScheduleMessageInput = document.getElementById("chat-schedule-message-input");
const chatSchedulePresetSelect = document.getElementById("chat-schedule-preset-select");
const chatScheduleCustomWrap = document.getElementById("chat-schedule-custom-wrap");
const chatScheduleMinutesInput = document.getElementById("chat-schedule-minutes-input");
const chatScheduleWarning = document.getElementById("chat-schedule-warning");
const chatScheduleCancelBtn = document.getElementById("chat-schedule-cancel-btn");
const chatScheduleOkBtn = document.getElementById("chat-schedule-ok-btn");
const chatSendBtn = chatForm ? chatForm.querySelector(".chat-send") : null;
const quickNoteButtons = Array.from(document.querySelectorAll(".quick-note-btn"));
const cameraVideo = document.getElementById("camera-video");
const remoteVideo = document.getElementById("remote-video");
const remoteAudio = document.getElementById("remote-audio");
const videoStage = document.getElementById("video-stage");
const localVideoTile = document.getElementById("local-video-tile");
const remoteVideoTile = document.getElementById("remote-video-tile");
const remoteVideoLabel = document.getElementById("remote-video-label");
const remoteVideoPlaceholder = document.getElementById("remote-video-placeholder");
const extraVideoTiles = document.getElementById("extra-video-tiles");
const speakerDeviceSelect = document.getElementById("speaker-device-select");
const speakerStatus = document.getElementById("speaker-status");
const onAirOverlay = document.getElementById("onair-overlay");
const onAirCountdownPopout = document.getElementById("onair-countdown-popout");
const onAirCountdownNumber = document.getElementById("onair-countdown-number");
const onAirCountdownNote = document.getElementById("onair-countdown-note");
const onAirCloseBtn = document.getElementById("onair-close-btn");
const onAirCameraVideo = document.getElementById("onair-camera-video");
const onAirRemoteVideo = document.getElementById("onair-remote-video");
const onAirVideoStage = document.getElementById("onair-video-stage");
const onAirLocalVideoTile = document.getElementById("onair-local-video-tile");
const onAirRemoteVideoTile = document.getElementById("onair-remote-video-tile");
const onAirRemoteVideoLabel = document.getElementById("onair-remote-video-label");
const onAirRemoteVideoPlaceholder = document.getElementById("onair-remote-video-placeholder");
const onAirExtraVideoTiles = document.getElementById("onair-extra-video-tiles");
const onAirMicEnabledToggle = document.getElementById("onair-mic-enabled-toggle");
const onAirMicEnabledLabel = document.getElementById("onair-mic-enabled-label");
const onAirMicMuteBtn = document.getElementById("onair-mic-mute-btn");
const onAirMicStatus = document.getElementById("onair-mic-status");
const onAirLiveMicSlider = document.getElementById("onair-live-mic-slider");
const onAirLiveMicSliderValue = document.getElementById("onair-live-mic-slider-value");
const onAirLiveMicMeterFill = document.getElementById("onair-live-mic-meter-fill");
const onAirMicGainSlider = document.getElementById("onair-mic-gain");
const onAirMicGainValue = document.getElementById("onair-mic-gain-value");
const onAirLimiterToggle = document.getElementById("onair-limiter-toggle");
const onAirNoiseToggle = document.getElementById("onair-noise-toggle");
const onAirAudioStatus = document.getElementById("onair-audio-status");
const onAirCameraPauseBtn = document.getElementById("onair-camera-pause-btn");
const onAirCameraStatus = document.getElementById("onair-camera-status");
const onAirLivePill = document.getElementById("onair-live-pill");
const onAirPlaybackBtn = document.getElementById("onair-playback-btn");
const onAirRecordBtn = document.getElementById("onair-record-btn");
const onAirDownloadBtn = document.getElementById("onair-download-btn");
const onAirRecordPill = document.getElementById("onair-record-pill");
const onAirStatusLine = document.getElementById("onair-status-line");
const onAirRecordStrip = document.getElementById("onair-record-strip");
const onAirRecordDot = document.getElementById("onair-record-dot");
const onAirRecordTimer = document.getElementById("onair-record-timer");
const onAirRecordLevelBadge = document.getElementById("onair-record-level-badge");
const onAirRecordWave = document.getElementById("onair-record-wave");
const onAirMediaStatus = document.getElementById("onair-media-status");
const workflowReadyPill = document.getElementById("workflow-ready-pill");
const workflowCountdownPill = document.getElementById("workflow-countdown-pill");
const workflowRecordingPill = document.getElementById("workflow-recording-pill");
const workflowProcessingPill = document.getElementById("workflow-processing-pill");
const workflowReviewPill = document.getElementById("workflow-review-pill");
const workflowExportPill = document.getElementById("workflow-export-pill");
const onAirReviewLaunchBtn = document.getElementById("onair-review-launch-btn");
const onAirReviewPanel = document.getElementById("onair-review-panel");
const onAirReviewStatus = document.getElementById("onair-review-status");
const onAirReviewBadge = document.getElementById("onair-review-badge");
const onAirReviewVideo = document.getElementById("onair-review-video");
const onAirReviewAudio = document.getElementById("onair-review-audio");
const onAirReviewModal = document.getElementById("onair-review-modal");
const onAirReviewBackdrop = document.getElementById("onair-review-backdrop");
const onAirReviewWindowStatus = document.getElementById("onair-review-window-status");
const onAirReviewPlayer = document.getElementById("onair-review-player");
const onAirReviewPlayBtn = document.getElementById("onair-review-play-btn");
const onAirReviewTime = document.getElementById("onair-review-time");
const onAirReviewLoopReadout = document.getElementById("onair-review-loop-readout");
const onAirReviewScrub = document.getElementById("onair-review-scrub");
const onAirReviewWaveCanvas = document.getElementById("onair-review-wave-canvas");
const onAirReviewWaveNote = document.getElementById("onair-review-wave-note");
const onAirReviewUndoBtn = document.getElementById("onair-review-undo-btn");
const onAirReviewRedoBtn = document.getElementById("onair-review-redo-btn");
const onAirReviewMoveModeBtn = document.getElementById("onair-review-move-mode-btn");
const onAirReviewSelectModeBtn = document.getElementById("onair-review-select-mode-btn");
const onAirReviewSelectAllBtn = document.getElementById("onair-review-select-all-btn");
const onAirReviewClearSelectionBtn = document.getElementById("onair-review-clear-selection-btn");
const onAirReviewDeleteBtn = document.getElementById("onair-review-delete-btn");
const onAirReviewRippleDeleteBtn = document.getElementById("onair-review-ripple-delete-btn");
const onAirReviewSplitBtn = document.getElementById("onair-review-split-btn");
const onAirReviewSplitSelectionBtn = document.getElementById("onair-review-split-selection-btn");
const onAirReviewGainDownBtn = document.getElementById("onair-review-gain-down-btn");
const onAirReviewGainReadout = document.getElementById("onair-review-gain-readout");
const onAirReviewGainUpBtn = document.getElementById("onair-review-gain-up-btn");
const onAirReviewGainResetBtn = document.getElementById("onair-review-gain-reset-btn");
const onAirReviewGainNormalizeBtn = document.getElementById("onair-review-gain-normalize-btn");
const onAirReviewOverlapBlendBtn = document.getElementById("onair-review-overlap-blend-btn");
const onAirReviewOverlapFrontBtn = document.getElementById("onair-review-overlap-front-btn");
const onAirReviewOverlapBackBtn = document.getElementById("onair-review-overlap-back-btn");
const onAirReviewZoomOutBtn = document.getElementById("onair-review-zoom-out-btn");
const onAirReviewZoomFitBtn = document.getElementById("onair-review-zoom-fit-btn");
const onAirReviewZoomInBtn = document.getElementById("onair-review-zoom-in-btn");
const onAirReviewMuteBtn = document.getElementById("onair-review-mute-btn");
const onAirReviewCloseBtn = document.getElementById("onair-review-close-btn");
const onAirExportPanel = document.getElementById("onair-export-panel");
const onAirExportNote = document.getElementById("onair-export-note");
const onAirExportVideoBtn = document.getElementById("onair-export-video-btn");
const onAirExportAudioBtn = document.getElementById("onair-export-audio-btn");
const onAirMusicCuesBadge = document.getElementById("onair-music-cues-badge");
const onAirMusicTrackSelect = document.getElementById("onair-music-track-select");
const onAirMusicSlotSelect = document.getElementById("onair-music-slot-select");
const onAirMusicUploadBtn = document.getElementById("onair-music-upload-btn");
const onAirMusicUploadInput = document.getElementById("onair-music-upload-input");
const onAirMusicQueueBtn = document.getElementById("onair-music-queue-btn");
const onAirMusicPlayBtn = document.getElementById("onair-music-play-btn");
const onAirMusicStopBtn = document.getElementById("onair-music-stop-btn");
const onAirMusicClearBtn = document.getElementById("onair-music-clear-btn");
const onAirLibraryOpenBtn = document.getElementById("onair-library-open-btn");
const onAirAudioDrawer = document.getElementById("onair-audio-drawer");
const onAirAudioSideTab = document.getElementById("onair-audio-side-tab");
const onAirAudioCloseBtn = document.getElementById("onair-audio-close-btn");
const onAirAudioPanel = document.getElementById("onair-audio-panel");
const onAirAudioFadeInBtn = document.getElementById("onair-audio-fade-in-btn");
const onAirAudioFadeOutBtn = document.getElementById("onair-audio-fade-out-btn");
const onAirAudioAutoFadeInToggle = document.getElementById("onair-audio-auto-fade-in-toggle");
const onAirAudioAutoFadeOutToggle = document.getElementById("onair-audio-auto-fade-out-toggle");
const onAirAudioResetMixBtn = document.getElementById("onair-audio-reset-mix-btn");
const onAirAudioStopAllBtn = document.getElementById("onair-audio-stop-all-btn");
const onAirAudioDuckVoiceToggle = document.getElementById("onair-audio-duck-voice-toggle");
const onAirAudioVolumeSlider = document.getElementById("onair-audio-volume-slider");
const onAirAudioSliderValue = document.getElementById("onair-audio-slider-value");
const onAirActiveCuesMeta = document.getElementById("onair-active-cues-meta");
const onAirActiveCuesList = document.getElementById("onair-active-cues-list");
const onAirGuestVolumeSlider = document.getElementById("onair-guest-volume-slider");
const onAirGuestVolumeValue = document.getElementById("onair-guest-volume-value");
const onAirGuestAudioName = document.getElementById("onair-guest-audio-name");
const onAirGuestMeterFill = document.getElementById("onair-guest-meter-fill");
const onAirMasterMeterFill = document.getElementById("onair-master-meter-fill");
const onAirMasterMeterValue = document.getElementById("onair-master-meter-value");
const onAirMusicBusMeterTrack = document.getElementById("onair-music-bus-meter-track");
const onAirMusicBusMeterFill = document.getElementById("onair-music-bus-meter-fill");
const onAirMusicBusMeterValue = document.getElementById("onair-music-bus-meter-value");
const onAirMusicBusMeterBadge = document.getElementById("onair-music-bus-meter-badge");
const onAirClippingWarning = document.getElementById("onair-clipping-warning");
const onAirClippingBarFill = document.getElementById("onair-clipping-bar-fill");
const onAirPeakHoldValue = document.getElementById("onair-peak-hold-value");
const onAirLibraryDrawer = document.getElementById("onair-library-drawer");
const onAirLibrarySideTab = document.getElementById("onair-library-side-tab");
const onAirLibraryCloseBtn = document.getElementById("onair-library-close-btn");
const onAirLibraryPanel = document.getElementById("onair-library-panel");
const onAirLibraryList = document.getElementById("onair-library-list");
const onAirLibraryNote = document.getElementById("onair-library-note");
const onAirLibraryPreview = document.getElementById("onair-library-preview");
const onAirLibraryPreviewPlayBtn = document.getElementById("onair-library-preview-play-btn");
const onAirLibraryPreviewCloseBtn = document.getElementById("onair-library-preview-close-btn");
const onAirLibraryPreviewMuteBtn = document.getElementById("onair-library-preview-mute-btn");
const onAirLibraryPreviewTime = document.getElementById("onair-library-preview-time");
const onAirLibraryPreviewAudio = document.getElementById("onair-library-preview-audio");
const onAirMusicNext = document.getElementById("onair-music-next");
const onAirMusicCuesNote = document.getElementById("onair-music-cues-note");
const onAirMusicPlayer = document.getElementById("onair-music-player");
const cameraStatus = document.getElementById("camera-status");
const videoRoomStatus = document.getElementById("video-room-status");
const cameraDeviceSelect = document.getElementById("camera-device-select");
const cameraEnabledToggle = document.getElementById("camera-enabled-toggle");
const cameraBlurToggle = document.getElementById("camera-blur-toggle");
const cameraBackgroundImageToggle = document.getElementById("camera-background-image-toggle");
const micDeviceSelect = document.getElementById("mic-device-select");
const micEnabledToggle = document.getElementById("mic-enabled-toggle");
const micEnabledLabel = document.getElementById("mic-enabled-label");
const micMuteBtn = document.getElementById("mic-mute-btn");
const micStatus = document.getElementById("mic-status");
const micMeterFill = document.getElementById("mic-meter-fill");
const micGainSlider = document.getElementById("mic-gain");
const micGainValue = document.getElementById("mic-gain-value");
const limiterToggle = document.getElementById("limiter-toggle");
const noiseToggle = document.getElementById("noise-toggle");
const audioStatus = document.getElementById("audio-status");
const headphonesToggle = document.getElementById("headphones-toggle");
const pushToTalkToggle = document.getElementById("push-to-talk-toggle");
const pttHoldBtn = document.getElementById("ptt-hold-btn");
const micLoopbackBtn = document.getElementById("mic-loopback-btn");
const micLoopbackStatus = document.getElementById("mic-loopback-status");
const echoWarning = document.getElementById("echo-warning");
const cameraPermissionBadge = document.getElementById("camera-permission-badge");
const cameraPermissionDetail = document.getElementById("camera-permission-detail");
const micPermissionBadge = document.getElementById("mic-permission-badge");
const micPermissionDetail = document.getElementById("mic-permission-detail");
const airStatusEl = document.getElementById("air-status");
const airToggleBtn = document.getElementById("air-toggle-btn");
const onAirRosterStatus = document.getElementById("onair-roster-status");
const participantsStatus = document.getElementById("participants-status");
const participantsList = document.getElementById("participants-list");
const hostMuteAllBtn = document.getElementById("host-mute-all-btn");
const hostClearSpotlightBtn = document.getElementById("host-clear-spotlight-btn");
const hostSpotlightSelect = document.getElementById("host-spotlight-select");
const hostSpotlightApplyBtn = document.getElementById("host-spotlight-apply-btn");
const hostOwnerStatus = document.getElementById("host-owner-status");
const hostClaimBtn = document.getElementById("host-claim-btn");
const hostTransferSelect = document.getElementById("host-transfer-select");
const hostTransferBtn = document.getElementById("host-transfer-btn");
const hostStatus = document.getElementById("host-status");
const runtimeWarning = document.getElementById("runtime-warning");
const mediaDebugPanel = document.getElementById("media-debug-panel");
const mediaDebugLog = document.getElementById("media-debug-log");
const mediaDebugClearBtn = document.getElementById("media-debug-clear-btn");
const recordingDiagnosticStage = document.getElementById("recording-diagnostic-stage");
const recordingDiagnosticStageNote = document.getElementById("recording-diagnostic-stage-note");
const recordingDiagnosticAudio = document.getElementById("recording-diagnostic-audio");
const recordingDiagnosticAudioNote = document.getElementById("recording-diagnostic-audio-note");
const recordingDiagnosticChunks = document.getElementById("recording-diagnostic-chunks");
const recordingDiagnosticChunksNote = document.getElementById("recording-diagnostic-chunks-note");
const recordingDiagnosticReview = document.getElementById("recording-diagnostic-review");
const recordingDiagnosticReviewNote = document.getElementById("recording-diagnostic-review-note");
const preflightOverallPill = document.getElementById("preflight-overall-pill");
const preflightOverallText = document.getElementById("preflight-overall-text");
const preflightMicCheckBtn = document.getElementById("preflight-mic-check-btn");
const preflightMicCheckStatus = document.getElementById("preflight-mic-check-status");
const preflightCameraPill = document.getElementById("preflight-camera-pill");
const preflightCameraDetail = document.getElementById("preflight-camera-detail");
const preflightMicPill = document.getElementById("preflight-mic-pill");
const preflightMicDetail = document.getElementById("preflight-mic-detail");
const preflightPermissionsPill = document.getElementById("preflight-permissions-pill");
const preflightPermissionsDetail = document.getElementById("preflight-permissions-detail");
const preflightConnectionPill = document.getElementById("preflight-connection-pill");
const preflightConnectionDetail = document.getElementById("preflight-connection-detail");
const preflightRecordingPill = document.getElementById("preflight-recording-pill");
const preflightRecordingDetail = document.getElementById("preflight-recording-detail");

const session = window.TBRAuth.requireSession();
if (!session) {
  window.location.replace("./");
}
const isGuestUser =
  typeof window.TBRAuth.isCurrentUserGuest === "function" && window.TBRAuth.isCurrentUserGuest();

const sessionIdentity = window.TBRAuth.getIdentity(session.username);
const sessionPermissions =
  typeof window.TBRAuth.getCurrentUserPermissions === "function"
    ? window.TBRAuth.getCurrentUserPermissions()
    : { hostControl: true, recordingControl: true, chatModeration: false, guestManagement: false, siteSettings: false };
let loungeProfileState = window.TBRAuth.getCurrentUserProfile ? window.TBRAuth.getCurrentUserProfile() : { alias: "", useAlias: false, avatarDataUrl: "" };
let loungeSelectedAvatarPresetId = "";
const AVATAR_PRESETS = [
  { id: "space-planet", category: "space", title: "Planet Orbit", emoji: "🪐", bgA: "#173459", bgB: "#10233f" },
  { id: "space-nebula", category: "space", title: "Nebula Glow", emoji: "✨", bgA: "#4b2369", bgB: "#1f1d4e" },
  { id: "space-rocket", category: "space", title: "Rocket Launch", emoji: "🚀", bgA: "#3f2349", bgB: "#1e1d3c" },
  { id: "animal-panda", category: "animals", title: "Panda Mood", emoji: "🐼", bgA: "#1f303f", bgB: "#16222f" },
  { id: "animal-wolf", category: "animals", title: "Wolf Pack", emoji: "🐺", bgA: "#2d3f56", bgB: "#1d2b3d" },
  { id: "animal-eagle", category: "animals", title: "Eagle Eye", emoji: "🦅", bgA: "#4a331c", bgB: "#302211" },
  { id: "myth-dragon", category: "mythical", title: "Dragon Fire", emoji: "🐉", bgA: "#3d1f30", bgB: "#1f1227" },
  { id: "myth-unicorn", category: "mythical", title: "Unicorn Shine", emoji: "🦄", bgA: "#4a2158", bgB: "#1f1c43" },
  { id: "myth-phoenix", category: "mythical", title: "Phoenix Rise", emoji: "🔥", bgA: "#572715", bgB: "#2a1620" },
  { id: "sport-football", category: "sports", title: "Football", emoji: "🏈", bgA: "#2f4a1f", bgB: "#1d2f16" },
  { id: "sport-basketball", category: "sports", title: "Basketball", emoji: "🏀", bgA: "#5b3018", bgB: "#2a1b13" },
  { id: "sport-trophy", category: "sports", title: "Champion Cup", emoji: "🏆", bgA: "#514214", bgB: "#2d2710" }
];
const initialSessionDisplay =
  sessionIdentity.displayName !== sessionIdentity.username
    ? sessionIdentity.displayName + " (@" + sessionIdentity.username + ")"
    : sessionIdentity.username;
if (sessionUserEl) {
  sessionUserEl.textContent = initialSessionDisplay;
}
profileUserEl.textContent = initialSessionDisplay;
if (isGuestUser && profileDropdown) {
  const profileLinks = Array.from(profileDropdown.querySelectorAll('a[href*="profile"]'));
  profileLinks.forEach((link) => link.classList.add("hidden"));
}
if (sessionIdentity.avatarDataUrl) {
  profileAvatarEl.textContent = "";
  profileAvatarEl.classList.add("hidden");
  if (profileAvatarImgEl) {
    profileAvatarImgEl.src = sessionIdentity.avatarDataUrl;
    profileAvatarImgEl.classList.remove("hidden");
  }
} else {
  profileAvatarEl.classList.remove("hidden");
  if (profileAvatarImgEl) {
    profileAvatarImgEl.removeAttribute("src");
    profileAvatarImgEl.classList.add("hidden");
  }
  profileAvatarEl.textContent = sessionIdentity.initial || "U";
}

const REALTIME_URL_KEY = "tbr_realtime_url";
const LOCAL_REALTIME_URL = "http://localhost:8787";
const PRODUCTION_REALTIME_URL = "https://realtime.turnbucklereport.com";

function normalizeRealtimeBaseUrl(rawValue) {
  let value = String(rawValue || "").trim();
  if (!value) {
    return PRODUCTION_REALTIME_URL;
  }
  if (!/^https?:\/\//i.test(value)) {
    if (/^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i.test(value)) {
      value = "http://" + value;
    } else {
      value = "https://" + value;
    }
  }
  try {
    const parsed = new URL(value);
    let path = String(parsed.pathname || "");
    if (path.toLowerCase() === "/health") {
      path = "";
    }
    const normalizedPath = path && path !== "/" ? path.replace(/\/+$/, "") : "";
    return parsed.origin + normalizedPath;
  } catch (error) {
    return PRODUCTION_REALTIME_URL;
  }
}

function getDefaultRealtimeBaseUrl() {
  return isLocalRuntimeHost() ? LOCAL_REALTIME_URL : PRODUCTION_REALTIME_URL;
}

function isLocalRealtimeUrl(url) {
  return /^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(String(url || "").trim());
}

function shouldPromoteToDefaultUrl(currentUrl) {
  const normalized = normalizeRealtimeBaseUrl(currentUrl || "");
  if (isLocalRuntimeHost()) {
    return !isLocalRealtimeUrl(normalized);
  }
  return normalized !== PRODUCTION_REALTIME_URL;
}

const savedRealtimeUrl = localStorage.getItem(REALTIME_URL_KEY);
const resolvedRealtimeUrl = shouldPromoteToDefaultUrl(savedRealtimeUrl)
  ? getDefaultRealtimeBaseUrl()
  : normalizeRealtimeBaseUrl(savedRealtimeUrl || getDefaultRealtimeBaseUrl());
let REALTIME_BASE_URL = resolvedRealtimeUrl;
try {
  localStorage.setItem(REALTIME_URL_KEY, REALTIME_BASE_URL);
} catch (error) {
  // Ignore storage write failures.
}
const HEARTBEAT_MS = 5000;
const POLL_CHAT_MS = 1200;
const POLL_PRESENCE_MS = 2500;
const POLL_WEBRTC_MS = 900;
const SESSION_SYNC_MS = 5000;
const REALTIME_BOOTSTRAP_RETRY_MS = 5000;
const DEFAULT_ICE_SERVERS = [{ urls: "stun:stun.l.google.com:19302" }];
const sessionId = "sess_" + Math.random().toString(36).slice(2);
const CHAT_THEME_MAP = {
  blue: {
    bg: "rgba(91, 166, 255, 0.24)",
    border: "rgba(120, 185, 255, 0.42)",
    color: "#eaf3ff"
  },
  black: {
    bg: "rgba(18, 20, 24, 0.66)",
    border: "rgba(96, 102, 114, 0.5)",
    color: "#f3f6fb"
  },
  green: {
    bg: "rgba(67, 211, 176, 0.24)",
    border: "rgba(94, 225, 193, 0.42)",
    color: "#ecfff8"
  },
  purple: {
    bg: "rgba(171, 132, 255, 0.24)",
    border: "rgba(189, 154, 255, 0.44)",
    color: "#f3edff"
  },
  pink: {
    bg: "rgba(255, 123, 177, 0.24)",
    border: "rgba(255, 151, 196, 0.45)",
    color: "#fff0f7"
  },
  orange: {
    bg: "rgba(255, 162, 90, 0.24)",
    border: "rgba(255, 184, 123, 0.45)",
    color: "#fff6ee"
  },
  red: {
    bg: "rgba(255, 95, 127, 0.24)",
    border: "rgba(255, 127, 148, 0.45)",
    color: "#fff0f3"
  }
};

let studioSettings = window.TBRAuth.getStudioSettings();
let adminSettings = {
  guestDisplayName: "Guest",
  allowUserHostControl: true,
  allowUserRecordingControl: true,
  recordingMaxMinutes: 180,
  recordingDownloadAccess: "host-admin",
  recordingLibraryVisibility: "admin-only",
  chatAttachmentsEnabled: true,
  chatVideoAttachmentsEnabled: true,
  chatImageMaxMb: 8,
  chatVideoMaxMb: 20,
  chatReactionsEnabled: true,
  maintenanceModeEnabled: false,
  maintenanceMessage: "",
  supportContactEmail: "admin@turnbucklereport.com"
};
let studioControlVersions = {
  muteAllVersion: 0,
  forceOffAirVersion: 0,
  clearHostVersion: 0,
  clearSpotlightVersion: 0
};
let chatOpen = false;
let emojiPickerOpen = false;
let recentEmojis = [];
let chatQueue = [];
let chatFlushInProgress = false;
let localReactionCache = {};
let pendingAttachment = null;
let unreadCount = 0;
let chatOpenCloseTimer = null;
let chatLauncherSwapTimer = null;
let quickNotesOpen = false;
let searchResults = [];
let searchResultIndex = -1;
let attachmentUploadXhr = null;
let attachmentStageProgressTimer = null;
let pendingAttachmentRetry = null;
let editingMessageId = 0;
let editingMessageExpireAt = 0;
let editingMessageTimer = null;
let replyingToMessageId = 0;
let replyingToMessage = null;
let seenPanelOpenMessageId = 0;
let pendingChatConfirmResolver = null;
let plusMenuOpen = false;
let lastSeenUpTo = 0;
let pendingSeenUpTo = 0;
let seenSyncInFlight = false;
let localTempMessageSeq = -1;
let lastAlertedRemoteMessageId = 0;
let lastAlertedReactionEventId = 0;
let pendingChatResponse = false;
let chatReadAcknowledged = false;
let scheduledSendCount = 0;
let chatStatusLockUntil = 0;
let typingUsers = [];
let typingStopTimer = null;
let typingIsActive = false;
let lastTypingSentAt = 0;
let rtcIceServers = [...DEFAULT_ICE_SERVERS];
let cameraStream = null;
let rawCameraStream = null;
let blurCameraStream = null;
let blurCanvas = null;
let blurContext = null;
let blurSourceVideo = null;
let blurFrameId = null;
let blurForegroundCanvas = null;
let blurForegroundContext = null;
let blurBackgroundImage = null;
let blurBackgroundImageKey = "";
let segmentationEngine = null;
let segmentationMaskFrame = null;
let segmentationBusy = false;
let segmentationSupported = null;
let segmentationLastSentAt = 0;
const SEGMENTATION_INTERVAL_MS = 120;
let micStream = null;
let micAudioContext = null;
let micAnalyser = null;
let micMeterData = null;
let micMeterFrameId = null;
let micInputSourceNode = null;
let micInputGainNode = null;
let micNoiseGateAnalyser = null;
let micNoiseGateGainNode = null;
let micLimiterNode = null;
let micLoudnessGainNode = null;
let micMonitorGainNode = null;
let micProcessedDestination = null;
let micProcessedStream = null;
let micNoiseGateOpen = true;
let micMuted = false;
let micStandbyDisabled = false;
let pttTalking = false;
let micLoopbackContext = null;
let micLoopbackSource = null;
let micLoopbackGain = null;
let micLoopbackStopTimer = null;
let cameraPermissionHandle = null;
let micPermissionHandle = null;
let isOnAir = false;
let realtimeEnabled = false;
let lastChatId = 0;
let lastSignalId = 0;
const seenMessageIds = new Set();
const chatEntriesById = new Map();
let heartbeatTimer = null;
let chatPollTimer = null;
let presencePollTimer = null;
let signalPollTimer = null;
let sessionSyncTimer = null;
let realtimeBootstrapRetryTimer = null;
let sessionSyncInFlight = false;
let chatPollInFlight = false;
let chatStream = null;
let chatStreamRetryTimer = null;
let currentParticipants = [];
let lastReceiptAudienceSignature = "";
const participantDisplayNames = new Map([[session.username, sessionIdentity.displayName || session.username]]);
let spotlightUsername = "";
let onAirMode = false;
let currentHostUsername = "";
let isRecording = false;
let recordingReady = false;
let recordingStartedAt = 0;
let recordingTimerId = null;
let recordingWaveFrameId = null;
let recordingWaveContext = null;
let recordingWaveAudioContext = null;
let recordingWaveAnalyser = null;
let recordingWaveData = null;
let recordingWaveMixNode = null;
let recordingWaveSources = [];
let recordingWaveHistory = [];
let recordingWavePeakLevel = 0;
let recordingWavePeakHoldFrames = 0;
let recordingMediaRecorder = null;
let recordingMediaChunks = [];
let recordingMediaBlob = null;
let recordingMediaUrl = "";
let recordingMediaMimeType = "";
let recordingMediaDurationSeconds = 0;
let recordingMediaStream = null;
let recordingAudioMediaRecorder = null;
let recordingAudioChunks = [];
let recordingAudioBlob = null;
let recordingAudioUrl = "";
let recordingAudioMimeType = "";
let recordingAudioDurationSeconds = 0;
let recordingMediaCanvas = null;
let recordingMediaCanvasContext = null;
let recordingMediaCanvasFrameId = null;
let recordingMediaAudioContext = null;
let recordingMediaAudioDestination = null;
let recordingMediaAudioSources = [];
let recordingStopPromise = null;
let recordingStopResolve = null;
let recordingAssetDurationProbeToken = 0;
let onAirActiveReviewMedia = null;
let onAirReviewScrubInFlight = false;
let onAirReviewModalOpen = false;
let onAirReviewWaveContext = null;
let onAirReviewWavePeaks = [];
let onAirReviewWaveDuration = 0;
let onAirReviewWaveToken = 0;
let onAirReviewWaveRenderQueued = false;
let onAirReviewWavePointerDown = false;
let onAirReviewZoomLevel = 1;
let onAirReviewSelectionStart = 0;
let onAirReviewSelectionEnd = 0;
let onAirReviewSelectionActive = false;
let onAirReviewSelectMode = false;
let onAirReviewMoveMode = false;
let onAirReviewSelectionDragMode = "";
let onAirReviewSelectionAnchor = 0;
let onAirReviewSelectionHandleOffset = 0;
let onAirReviewSelectionPointerClientX = 0;
let onAirReviewSelectionPointerId = null;
let onAirReviewAutoPanFrameId = 0;
let onAirReviewViewportFocusTime = 0;
let onAirReviewTimelineSegments = [];
let onAirReviewGainAdjustments = [];
let onAirReviewOverlapMode = "blend";
let onAirReviewTimelineSourceToken = "";
let onAirReviewEditedDuration = 0;
let onAirReviewEditedTime = 0;
let onAirReviewPlaybackFrameId = 0;
let onAirReviewPlaybackAnchorAt = 0;
let onAirReviewPlaybackAnchorEditedTime = 0;
let onAirReviewLoopSelectionActive = false;
let onAirReviewAudioContext = null;
let onAirReviewVideoSourceNode = null;
let onAirReviewAudioSourceNode = null;
let onAirReviewVideoGainNode = null;
let onAirReviewAudioGainNode = null;
let onAirReviewClipMixGainNode = null;
let onAirReviewAudioGraphUnavailable = false;
let onAirReviewMuted = false;
let onAirReviewUndoStack = [];
let onAirReviewRedoStack = [];
let onAirReviewHistorySuspendDepth = 0;
let onAirReviewClipDragState = null;
let onAirReviewDecodedAudioBuffer = null;
let onAirReviewScheduledClipNodes = [];
let recordingAutoStopTimerId = null;
let recordingAutoSplitTimerId = null;
let recordingSplitInProgress = false;
let recordingStartInProgress = false;
let recordingWorkflowState = "ready";
let recordingProcessingTimerId = null;
let chatMediaPreviewPayload = null;
let onAirMusicQueue = [];
let onAirMusicLibrary = [];
let onAirMusicCatalogStatus = "idle";
let onAirMusicCurrentTrackId = "";
let onAirMusicCurrentObjectUrl = "";
let onAirMusicPrimaryCue = null;
let onAirMusicRecordingStream = null;
let onAirMusicRecordingSourceNode = null;
let onAirMusicRecordingGainNode = null;
let onAirAuxMusicCues = [];
let onAirMixerAudioContext = null;
let onAirMixerMusicBusGainNode = null;
let onAirMixerMasterGainNode = null;
let onAirMixerDestinationNode = null;
let onAirMixerBusAnalyser = null;
let onAirMixerBusMeterData = null;
let onAirMixerBusMeterFrameId = 0;
let onAirMixerBusMeterLevel = 0;
let onAirMixerBusPeakDb = -60;
let outgoingProgramAudioContext = null;
let outgoingProgramAudioDestination = null;
let outgoingProgramAudioSources = [];
const onAirMusicBufferCache = new Map();
let onAirMusicBaseVolume = 0.62;
let onAirMusicPrimaryVolume = 1;
let onAirMusicAutoFadeInEnabled = false;
let onAirMusicAutoFadeOutEnabled = false;
let onAirMusicDuckVoiceEnabled = false;
let onAirMusicFadeFrameId = 0;
let onAirMusicAutoFadeInTimerId = 0;
let onAirMusicAutoFadeOutTimerId = 0;
let onAirCueVolumeApplyFrameId = 0;
let onAirRecordingStartCue = null;
let currentMicMeterLevel = 0;
let onAirGuestVolumePercent = 100;
let onAirLibraryOpen = false;
let onAirLibraryView = "music";
let onAirLibraryPreviewAssetId = "";
let onAirLibraryPreviewObjectUrl = "";
let onAirAudioOpen = false;
let onAirActiveCueRenderSignature = "";
let onAirAudioControlsRenderQueued = false;
const onAirLibraryAssets = {
  music: [],
  episodes: [],
  "post-production": []
};
let cameraPermissionStateValue = "unknown";
let micPermissionStateValue = "unknown";
let preflightMicCheckInProgress = false;
let preflightMicAssessment = {
  state: "neutral",
  summary: "Mic optimization is ready."
};

let videoRoomEnabled = true;
let activePeerUsername = "";
let peerConnection = null;
let hasSentOffer = false;
let videoSender = null;
let audioSender = null;
let pendingIceCandidates = [];
let mediaConnectRetryTimer = null;
const TwilioVideoSDK = window.Twilio && window.Twilio.Video ? window.Twilio.Video : null;
let twilioVideoRoom = null;
let twilioVideoRoomName = "doggfather-studio-lounge";
let twilioVideoConnectPromise = null;
let twilioLocalVideoTrack = null;
let twilioLocalVideoSourceId = "";
let twilioLocalAudioTrack = null;
let twilioLocalAudioSourceId = "";
let twilioRemoteParticipant = null;
let twilioLocalDisconnectRequested = false;
let twilioEnsuringLocalMedia = false;
let twilioPublishSyncInFlight = false;
let mediaDebugEnabled = false;
let mediaDebugEntries = [];
let mediaDebugUploadQueue = [];
let mediaDebugUploadTimer = null;
let mediaDebugUploadInFlight = false;
let mediaDebugServerLoggingEnabled = true;
let mediaDebugRenderQueued = false;
const mediaDebugLastMessageByLabel = new Map();
let recordingDiagnostics = {
  stage: "Idle",
  stageNote: "Not recording yet.",
  audio: "Unknown",
  audioNote: "Waiting for a recording start.",
  chunkCount: 0,
  chunkBytes: 0,
  chunkNote: "No recorder chunks yet.",
  review: "Not Ready",
  reviewNote: "No saved review file yet."
};

const MAX_RECENT_EMOJIS = 6;
const CHAT_REACTION_OPTIONS = ["👍", "❤️", "😄", "😂", "😢", "😮"];
const CHAT_OPEN_STATE_KEY = "tbr_chat_open_" + session.username;
const CHAT_DRAFT_KEY = "tbr_chat_draft_" + session.username;
const CHAT_QUEUE_KEY = "tbr_chat_queue_" + session.username;
const CHAT_REACTION_CACHE_KEY = "tbr_chat_react_cache_" + session.username;
const CHAT_SEEN_UPTO_KEY = "tbr_chat_seen_upto_" + session.username;
const CHAT_STATUS_DEFAULT = "";
const CHAT_EDIT_WINDOW_MS = 60 * 1000;
const CHAT_TYPING_SEND_THROTTLE_MS = 1200;
const CHAT_TYPING_IDLE_MS = 2300;
const CHAT_TYPING_STREAM_CLASS = "chat-typing-stream";
const CHAT_QUEUE_TTL_MS = 10 * 60 * 1000;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_VIDEO_BYTES = 20 * 1024 * 1024;
const MAX_VIDEO_SECONDS = 40;
const RECORDING_DEMO_MODE = false;
const PRESENCE_NAV_SUPPRESS_KEY = "tbr_presence_nav_suppress_until";
const PRESENCE_NAV_SUPPRESS_MS = 15000;
const MUSIC_LIBRARY_DB_NAME = "dfs_music_library";
const MUSIC_LIBRARY_STORE = "tracks";
const NOISE_PROFILE_TO_VALUES = {
  off: { micNoiseSuppression: false, micNoiseGateThresholdDb: -100 },
  low: { micNoiseSuppression: true, micNoiseGateThresholdDb: -55 },
  medium: { micNoiseSuppression: true, micNoiseGateThresholdDb: -45 },
  high: { micNoiseSuppression: true, micNoiseGateThresholdDb: -35 }
};

function formatMicNoiseProfileLabel(profile) {
  const value = String(profile || "medium").trim().toLowerCase();
  if (value === "high") {
    return "High";
  }
  if (value === "low") {
    return "Low";
  }
  if (value === "off") {
    return "Off";
  }
  return "Balanced";
}

function getMediaDebugTimestamp() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const millis = String(now.getMilliseconds()).padStart(3, "0");
  return hours + ":" + minutes + ":" + seconds + "." + millis;
}

function renderMediaDebugLog() {
  if (!mediaDebugLog) {
    return;
  }
  mediaDebugLog.textContent = mediaDebugEntries.join("\n");
  mediaDebugLog.scrollTop = mediaDebugLog.scrollHeight;
}

function queueMediaDebugRender() {
  if (mediaDebugRenderQueued) {
    return;
  }
  mediaDebugRenderQueued = true;
  window.requestAnimationFrame(() => {
    mediaDebugRenderQueued = false;
    renderMediaDebugLog();
  });
}

function formatDiagnosticBytes(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) {
    return "0 B";
  }
  if (value < 1024) {
    return Math.round(value) + " B";
  }
  if (value < 1024 * 1024) {
    return (value / 1024).toFixed(1) + " KB";
  }
  return (value / (1024 * 1024)).toFixed(2) + " MB";
}

function renderRecordingDiagnostics() {
  if (recordingDiagnosticStage) {
    recordingDiagnosticStage.textContent = recordingDiagnostics.stage;
  }
  if (recordingDiagnosticStageNote) {
    recordingDiagnosticStageNote.textContent = recordingDiagnostics.stageNote;
  }
  if (recordingDiagnosticAudio) {
    recordingDiagnosticAudio.textContent = recordingDiagnostics.audio;
  }
  if (recordingDiagnosticAudioNote) {
    recordingDiagnosticAudioNote.textContent = recordingDiagnostics.audioNote;
  }
  if (recordingDiagnosticChunks) {
    recordingDiagnosticChunks.textContent = String(recordingDiagnostics.chunkCount);
  }
  if (recordingDiagnosticChunksNote) {
    recordingDiagnosticChunksNote.textContent = recordingDiagnostics.chunkNote;
  }
  if (recordingDiagnosticReview) {
    recordingDiagnosticReview.textContent = recordingDiagnostics.review;
  }
  if (recordingDiagnosticReviewNote) {
    recordingDiagnosticReviewNote.textContent = recordingDiagnostics.reviewNote;
  }
}

function setRecordingDiagnosticState(partial) {
  recordingDiagnostics = {
    ...recordingDiagnostics,
    ...(partial && typeof partial === "object" ? partial : {})
  };
  renderRecordingDiagnostics();
}

function resetRecordingDiagnostics() {
  recordingDiagnostics = {
    stage: "Idle",
    stageNote: "Not recording yet.",
    audio: "Unknown",
    audioNote: "Waiting for a recording start.",
    chunkCount: 0,
    chunkBytes: 0,
    chunkNote: "No recorder chunks yet.",
    review: "Not Ready",
    reviewNote: "No saved review file yet."
  };
  renderRecordingDiagnostics();
}

function pushRecordingDiagnostic(label, details, summary) {
  if (summary && typeof summary === "object") {
    setRecordingDiagnosticState(summary);
  }
  if (mediaDebugEnabled) {
    pushMediaDebug("recording." + label, details);
  }
}

function pushMusicDiagnostic(label, details) {
  if (mediaDebugEnabled) {
    pushMediaDebug("music." + label, details);
  }
}

function describeMediaError(error) {
  if (!error) {
    return "none";
  }
  const code = Number(error.code || 0);
  const codeLabelMap = {
    1: "aborted",
    2: "network",
    3: "decode",
    4: "src-not-supported"
  };
  return codeLabelMap[code] ? codeLabelMap[code] + " (" + code + ")" : String(code || "unknown");
}

function logReviewAudioState(label) {
  if (!onAirReviewAudio) {
    return;
  }
  const duration = Number(onAirReviewAudio.duration || 0);
  const currentTime = Number(onAirReviewAudio.currentTime || 0);
  const details = [
    "mime=" + (recordingAudioMimeType || "unknown"),
    "blobType=" + ((recordingAudioBlob && recordingAudioBlob.type) || "unknown"),
    "blobSize=" + (recordingAudioBlob ? recordingAudioBlob.size : 0),
    "readyState=" + Number(onAirReviewAudio.readyState || 0),
    "networkState=" + Number(onAirReviewAudio.networkState || 0),
    "duration=" + (Number.isFinite(duration) ? duration.toFixed(3) : String(duration)),
    "currentTime=" + currentTime.toFixed(3),
    "paused=" + (!!onAirReviewAudio.paused),
    "ended=" + (!!onAirReviewAudio.ended),
    "error=" + describeMediaError(onAirReviewAudio.error)
  ].join(" | ");
  pushRecordingDiagnostic("review_audio_" + label, details, {
    review: "Inspecting",
    reviewNote:
      "Audio review " +
      label.replace(/_/g, " ") +
      " | duration " +
      (Number.isFinite(duration) && duration > 0 ? duration.toFixed(2) + "s" : "unknown")
  });
}

function scheduleMediaDebugUpload() {
  if (!mediaDebugServerLoggingEnabled || mediaDebugUploadInFlight || mediaDebugUploadTimer || !mediaDebugUploadQueue.length) {
    return;
  }
  mediaDebugUploadTimer = window.setTimeout(() => {
    mediaDebugUploadTimer = null;
    flushMediaDebugUploads().catch(() => {
      // Keep local diagnostics working even if the upload path is unavailable.
    });
  }, 700);
}

async function flushMediaDebugUploads() {
  if (!mediaDebugServerLoggingEnabled || mediaDebugUploadInFlight || !mediaDebugUploadQueue.length) {
    return;
  }
  mediaDebugUploadInFlight = true;
  const batch = mediaDebugUploadQueue.splice(0, 25);
  try {
    await api("/debug/media-log", {
      method: "POST",
      body: JSON.stringify({
        username: session.username,
        sessionId,
        source: "landing-media-debug",
        entries: batch
      })
    });
  } catch (error) {
    mediaDebugUploadQueue = batch.concat(mediaDebugUploadQueue).slice(-200);
    const status = Number(error && error.status);
    if (status === 404 || status === 413) {
      mediaDebugServerLoggingEnabled = false;
    }
  } finally {
    mediaDebugUploadInFlight = false;
    if (mediaDebugUploadQueue.length) {
      scheduleMediaDebugUpload();
    }
  }
}

function flushMediaDebugUploadsOnUnload() {
  if (!mediaDebugServerLoggingEnabled || !mediaDebugUploadQueue.length || !navigator.sendBeacon) {
    return;
  }
  const batch = mediaDebugUploadQueue.splice(0, mediaDebugUploadQueue.length);
  try {
    const payload = JSON.stringify({
      username: session.username,
      sessionId,
      source: "landing-media-debug",
      entries: batch
    });
    const blob = new Blob([payload], { type: "application/json" });
    const accepted = navigator.sendBeacon(REALTIME_BASE_URL + "/debug/media-log", blob);
    if (!accepted) {
      mediaDebugUploadQueue = batch.concat(mediaDebugUploadQueue).slice(-200);
    }
  } catch (error) {
    mediaDebugUploadQueue = batch.concat(mediaDebugUploadQueue).slice(-200);
  }
}

function pushMediaDebug(label, details) {
  if (!mediaDebugEnabled) {
    return;
  }
  const normalizedLabel = String(label || "").trim();
  const normalizedDetails = details ? String(details) : "";
  const lastMessage = mediaDebugLastMessageByLabel.get(normalizedLabel);
  if (lastMessage === normalizedDetails) {
    return;
  }
  mediaDebugLastMessageByLabel.set(normalizedLabel, normalizedDetails);
  const clientTimestamp = getMediaDebugTimestamp();
  const suffix = normalizedDetails ? " | " + normalizedDetails : "";
  const message = "[" + clientTimestamp + "] " + normalizedLabel + suffix;
  mediaDebugEntries.push(message);
  if (mediaDebugEntries.length > 300) {
    mediaDebugEntries = mediaDebugEntries.slice(-300);
  }
  mediaDebugUploadQueue.push({
    clientTimestamp,
    message
  });
  if (mediaDebugUploadQueue.length > 200) {
    mediaDebugUploadQueue = mediaDebugUploadQueue.slice(-200);
  }
  scheduleMediaDebugUpload();
  queueMediaDebugRender();
}

function setMediaDebugEnabled(enabled) {
  const nextEnabled = !!enabled;
  if (mediaDebugEnabled === nextEnabled) {
    return;
  }
  mediaDebugEnabled = nextEnabled;
  if (mediaDebugPanel) {
    mediaDebugPanel.classList.toggle("hidden", !mediaDebugEnabled);
  }
  if (mediaDebugEnabled) {
    pushMediaDebug("debug.enabled", "Media diagnostics enabled");
  }
}

function clearMediaDebugLog() {
  mediaDebugEntries = [];
  mediaDebugLastMessageByLabel.clear();
  resetRecordingDiagnostics();
  renderMediaDebugLog();
}

function showRuntimeWarnings() {
  if (adminSettings.maintenanceModeEnabled && session.role !== "admin") {
    runtimeWarning.textContent = adminSettings.maintenanceMessage || "Studio maintenance is active right now.";
    runtimeWarning.classList.remove("hidden");
    return;
  }
  const isFile = window.location.protocol === "file:";
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const isSecure = window.location.protocol === "https:";

  if (isFile) {
    runtimeWarning.textContent =
      "You are running from file://. Camera permission may keep prompting. Use http://localhost:8080 for stable testing.";
    runtimeWarning.classList.remove("hidden");
    return;
  }

  if (!isSecure && !isLocalhost) {
    runtimeWarning.textContent =
      "Camera works reliably on HTTPS or localhost. Current origin may block or re-prompt camera access.";
    runtimeWarning.classList.remove("hidden");
    return;
  }

  runtimeWarning.classList.add("hidden");
}

function setMenuOpen(open) {
  profileDropdown.classList.toggle("hidden", !open);
  profileMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
}

function setLoungeProfileMessage(text, isError) {
  if (!loungeProfileMessage) {
    return;
  }
  loungeProfileMessage.textContent = text;
  loungeProfileMessage.classList.remove("hidden", "error", "success");
  loungeProfileMessage.classList.add(isError ? "error" : "success");
}

function clearLoungeProfileMessage() {
  if (!loungeProfileMessage) {
    return;
  }
  loungeProfileMessage.textContent = "";
  loungeProfileMessage.classList.add("hidden");
  loungeProfileMessage.classList.remove("error", "success");
}

function setLoungeProfileModalOpen(open) {
  if (!loungeProfileModal) {
    return;
  }
  const isOpen = !!open;
  loungeProfileModal.classList.toggle("hidden", !isOpen);
  loungeProfileModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  if (!isOpen) {
    setLoungeAvatarStudioOpen(false);
    setLoungeProfileDeleteModalOpen(false);
  }
}

function setLoungeAvatarStudioOpen(open) {
  if (!loungeAvatarStudioModal) {
    return;
  }
  const isOpen = !!open;
  loungeAvatarStudioModal.classList.toggle("hidden", !isOpen);
  loungeAvatarStudioModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function setLoungeProfileDeleteModalOpen(open) {
  if (!loungeProfileDeleteModal) {
    return;
  }
  const isOpen = !!open;
  loungeProfileDeleteModal.classList.toggle("hidden", !isOpen);
  loungeProfileDeleteModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function setLoungeSettingsModalOpen(open) {
  if (!loungeSettingsModal) {
    return;
  }
  const isOpen = !!open;
  loungeSettingsModal.classList.toggle("hidden", !isOpen);
  loungeSettingsModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  if (loungeSettingsFrame) {
    if (isOpen) {
      const nextSrc = "./settings.html?embed=1";
      if (loungeSettingsFrame.getAttribute("src") !== nextSrc) {
        loungeSettingsFrame.setAttribute("src", nextSrc);
      }
    } else {
      loungeSettingsFrame.removeAttribute("src");
    }
  }
}

function setLoungeHelpModalOpen(open) {
  if (!loungeHelpModal) {
    return;
  }
  const isOpen = !!open;
  loungeHelpModal.classList.toggle("hidden", !isOpen);
  loungeHelpModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  if (loungeHelpFrame) {
    if (isOpen) {
      const nextSrc = "./help.html?embed=1";
      if (loungeHelpFrame.getAttribute("src") !== nextSrc) {
        loungeHelpFrame.setAttribute("src", nextSrc);
      }
    } else {
      loungeHelpFrame.removeAttribute("src");
    }
  }
}

function formatLoungeMemberSince(isoText) {
  const date = new Date(String(isoText || ""));
  if (Number.isNaN(date.getTime())) {
    return "Member since --";
  }
  return "Member since " + date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function escapeSvgText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildAvatarPresetDataUrl(preset) {
  const title = escapeSvgText(preset.title);
  const emoji = escapeSvgText(preset.emoji || "⭐");
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${preset.bgA}"/>
      <stop offset="100%" stop-color="${preset.bgB}"/>
    </linearGradient>
  </defs>
  <rect width="240" height="240" rx="120" fill="url(#g)"/>
  <circle cx="120" cy="120" r="104" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
  <text x="120" y="120" text-anchor="middle" dominant-baseline="middle" font-size="102">${emoji}</text>
</svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function getAvatarPresetByDataUrl(dataUrl) {
  const target = String(dataUrl || "");
  return AVATAR_PRESETS.find((preset) => buildAvatarPresetDataUrl(preset) === target) || null;
}

function getFilteredLoungeAvatarPresets() {
  const selected = loungeAvatarCategorySelect ? String(loungeAvatarCategorySelect.value || "all") : "all";
  if (selected === "all") {
    return AVATAR_PRESETS;
  }
  return AVATAR_PRESETS.filter((preset) => preset.category === selected);
}

function setSelectedLoungeAvatarPreset(presetId) {
  loungeSelectedAvatarPresetId = String(presetId || "");
}

function renderLoungeAvatarPresetGrid() {
  if (!loungeAvatarPresetGrid) {
    return;
  }
  loungeAvatarPresetGrid.innerHTML = "";
  getFilteredLoungeAvatarPresets().forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "avatar-preset";
    if (loungeSelectedAvatarPresetId === preset.id) {
      button.classList.add("selected");
    }
    button.setAttribute("data-lounge-avatar-preset-id", preset.id);
    button.setAttribute("title", preset.title);
    button.setAttribute("aria-label", preset.title);
    const img = document.createElement("img");
    img.src = buildAvatarPresetDataUrl(preset);
    img.alt = preset.title;
    img.className = "avatar-preset-image";
    const text = document.createElement("span");
    text.className = "avatar-preset-title";
    text.textContent = preset.title;
    button.appendChild(img);
    button.appendChild(text);
    loungeAvatarPresetGrid.appendChild(button);
  });
}

function renderLoungeProfileIdentity() {
  if (!loungeProfileDisplayName) {
    return;
  }
  const identity = window.TBRAuth.getIdentity(session.username);
  const displayName = loungeProfileState.useAlias && loungeProfileState.alias ? loungeProfileState.alias : identity.username;
  loungeProfileDisplayName.textContent = displayName;
  loungeProfileUserMeta.textContent = "@" + identity.username;
  loungeProfileAliasInput.value = loungeProfileState.alias || "";
  loungeProfileUseAliasToggle.checked = !!loungeProfileState.useAlias && !!loungeProfileState.alias;
  if (loungeProfileState.avatarDataUrl) {
    loungeProfilePhotoPreview.src = loungeProfileState.avatarDataUrl;
    loungeProfilePhotoPreview.classList.remove("hidden");
    loungeProfilePhotoFallback.classList.add("hidden");
  } else {
    loungeProfilePhotoPreview.removeAttribute("src");
    loungeProfilePhotoPreview.classList.add("hidden");
    loungeProfilePhotoFallback.classList.remove("hidden");
    loungeProfilePhotoFallback.textContent = toAvatarInitial(displayName);
  }
  const matchedPreset = getAvatarPresetByDataUrl(loungeProfileState.avatarDataUrl || "");
  setSelectedLoungeAvatarPreset(matchedPreset ? matchedPreset.id : "");
  renderLoungeAvatarPresetGrid();
}

function refreshLoungeProfileMeta() {
  const meta = window.TBRAuth.getCurrentUserMeta ? window.TBRAuth.getCurrentUserMeta() : null;
  if (loungeProfileCreatedMeta) {
    loungeProfileCreatedMeta.textContent = formatLoungeMemberSince(meta && meta.createdAt);
  }
}

function getLoungeProfilePayload() {
  return {
    alias: String(loungeProfileAliasInput.value || "").trim(),
    useAlias: !!loungeProfileUseAliasToggle.checked,
    avatarDataUrl: loungeProfileState.avatarDataUrl || ""
  };
}

function markInternalNavigationInProgress() {
  try {
    sessionStorage.setItem(PRESENCE_NAV_SUPPRESS_KEY, String(Date.now() + PRESENCE_NAV_SUPPRESS_MS));
  } catch (error) {
    // Ignore storage issues.
  }
}

function shouldSuppressPresenceLeaveOnUnload() {
  try {
    const raw = sessionStorage.getItem(PRESENCE_NAV_SUPPRESS_KEY);
    const until = Number(raw || 0);
    return Number.isFinite(until) && until > Date.now();
  } catch (error) {
    return false;
  }
}

function applyChatThemeFromSettings() {
  const themeKey = String(studioSettings.chatSelfBubbleTheme || "blue").toLowerCase();
  const theme = CHAT_THEME_MAP[themeKey] || CHAT_THEME_MAP.blue;
  document.documentElement.style.setProperty("--chat-self-bg", theme.bg);
  document.documentElement.style.setProperty("--chat-self-border", theme.border);
  document.documentElement.style.setProperty("--chat-self-color", theme.color);
}

function applyContainerModeFromSettings() {
  const mode = String(studioSettings.uiContainerMode || "dark").toLowerCase();
  document.body.classList.toggle("ui-light", mode === "light");
}

function applyAdminSettingsToUi() {
  if (chatAttachBtn) {
    chatAttachBtn.disabled = adminSettings.chatAttachmentsEnabled === false;
    chatAttachBtn.title = adminSettings.chatAttachmentsEnabled === false ? "Attachments disabled by admin." : "Attach image or video";
  }
  if (adminSettings.chatAttachmentsEnabled === false) {
    setPlusMenuOpen(false);
  }
}

function setCameraStatus(text, isError) {
  cameraStatus.textContent = text;
  cameraStatus.classList.toggle("error", !!isError);
  onAirCameraStatus.textContent = text;
  onAirCameraStatus.classList.toggle("error", !!isError);
  updatePreflightSummary();
}

function updateOnAirCameraPauseUI() {
  const track = cameraStream ? cameraStream.getVideoTracks()[0] : null;
  const isActive = !!(track && track.enabled);
  onAirCameraPauseBtn.textContent = isActive ? "Pause Camera" : "Resume Camera";
  onAirCameraPauseBtn.disabled = !cameraStream;
}

function setMicStatus(text, isError) {
  micStatus.textContent = text;
  micStatus.classList.toggle("error", !!isError);
  onAirMicStatus.textContent = text;
  onAirMicStatus.classList.toggle("error", !!isError);
  updatePreflightSummary();
}

function applyToggleLabelTooltips() {
  const labels = document.querySelectorAll(".settings-toggle span");
  labels.forEach((label) => {
    const text = String(label.textContent || "").trim();
    if (text) {
      label.setAttribute("title", text);
    } else {
      label.removeAttribute("title");
    }
  });
}

function setAudioRackStatus(text, isError) {
  if (audioStatus) {
    audioStatus.textContent = text;
    audioStatus.classList.toggle("error", !!isError);
  }
  if (!onAirAudioStatus) {
    return;
  }
  onAirAudioStatus.textContent = text;
  onAirAudioStatus.classList.toggle("error", !!isError);
  updatePreflightSummary();
}

function getMicGainPercent() {
  const value = Number(studioSettings.micInputGainPercent);
  if (!Number.isFinite(value)) {
    return 100;
  }
  return Math.min(200, Math.max(0, Math.round(value)));
}

function updateMicGainUI() {
  const gainPercent = getMicGainPercent();
  if (micGainSlider) {
    micGainSlider.value = String(gainPercent);
  }
  if (micGainValue) {
    micGainValue.textContent = gainPercent + "%";
  }
  if (onAirMicGainSlider) {
    onAirMicGainSlider.value = String(gainPercent);
  }
  if (onAirMicGainValue) {
    onAirMicGainValue.textContent = gainPercent + "%";
  }
  if (onAirLiveMicSlider) {
    onAirLiveMicSlider.value = String(gainPercent);
    const liveMicFill = Math.max(0, Math.min(100, gainPercent / 2)).toFixed(2) + "%";
    const liveMicTrack = onAirLiveMicSlider.parentElement;
    if (liveMicTrack) {
      liveMicTrack.style.setProperty("--mic-fill", liveMicFill);
    }
  }
  if (onAirLiveMicSliderValue) {
    onAirLiveMicSliderValue.textContent = gainPercent + "%";
  }
}

function getNoiseGateThresholdDb() {
  const value = Number(studioSettings.micNoiseGateThresholdDb);
  const allowed = new Set([-100, -55, -50, -45, -40, -35, -30]);
  if (!allowed.has(value)) {
    return -45;
  }
  return value;
}

function getLoudnessPreset() {
  const value = String(studioSettings.micLoudnessTargetPreset || "podcast-standard");
  if (value === "natural" || value === "broadcast-loud") {
    return value;
  }
  return "podcast-standard";
}

function getLoudnessGainForPreset(preset) {
  if (preset === "natural") {
    return 1.0;
  }
  if (preset === "broadcast-loud") {
    return 1.3;
  }
  return 1.15;
}

function rebuildMicProcessingGraph() {
  if (
    !micInputSourceNode ||
    !micInputGainNode ||
    !micNoiseGateGainNode ||
    !micLimiterNode ||
    !micLoudnessGainNode ||
    !micAnalyser ||
    !micProcessedDestination
  ) {
    return;
  }

  try {
    micInputSourceNode.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micInputGainNode.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micNoiseGateAnalyser.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micNoiseGateGainNode.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micLimiterNode.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micLoudnessGainNode.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    micAnalyser.disconnect();
  } catch (error) {
    // Ignore disconnect races.
  }
  try {
    if (micMonitorGainNode) {
      micMonitorGainNode.disconnect();
    }
  } catch (error) {
    // Ignore disconnect races.
  }

  micInputSourceNode.connect(micInputGainNode);
  micInputGainNode.connect(micNoiseGateAnalyser);
  micInputGainNode.connect(micNoiseGateGainNode);
  if (studioSettings.micLimiterEnabled !== false) {
    micNoiseGateGainNode.connect(micLimiterNode);
    micLimiterNode.connect(micLoudnessGainNode);
  } else {
    micNoiseGateGainNode.connect(micLoudnessGainNode);
  }
  micLoudnessGainNode.connect(micAnalyser);
  micAnalyser.connect(micProcessedDestination);
  if (studioSettings.micInputMonitoringEnabled && micMonitorGainNode && micAudioContext) {
    micAnalyser.connect(micMonitorGainNode);
    micMonitorGainNode.connect(micAudioContext.destination);
  }
}

function syncMicMonitoringOutput() {
  if (!micMonitorGainNode) {
    return;
  }
  const shouldMonitor = !!(studioSettings.micInputMonitoringEnabled && micStream && !micMuted);
  micMonitorGainNode.gain.value = shouldMonitor ? 0.72 : 0;
}

function applyMicGain(gainPercent, persist) {
  const clamped = Math.min(200, Math.max(0, Math.round(Number(gainPercent) || 100)));
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micInputGainPercent: clamped });
  }
  if (micInputGainNode) {
    micInputGainNode.gain.value = clamped / 100;
  }
  updateMicGainUI();
}

function applyLimiterToggle(enabled, persist) {
  const nextEnabled = !!enabled;
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micLimiterEnabled: nextEnabled });
  }
  if (limiterToggle) {
    limiterToggle.checked = nextEnabled;
  }
  if (onAirLimiterToggle) {
    onAirLimiterToggle.checked = nextEnabled;
  }
  if (micInputSourceNode) {
    rebuildMicProcessingGraph();
    setAudioRackStatus("Limiter " + (nextEnabled ? "enabled." : "disabled."), false);
  }
}

async function applyNoiseReductionToggle(enabled, persist) {
  const nextEnabled = !!enabled;
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micNoiseSuppression: nextEnabled });
  }
  if (noiseToggle) {
    noiseToggle.checked = nextEnabled;
  }
  if (onAirNoiseToggle) {
    onAirNoiseToggle.checked = nextEnabled;
  }
  const track = micStream ? micStream.getAudioTracks()[0] : null;
  if (!track || !track.applyConstraints) {
    setAudioRackStatus("Noise reduction preference saved.", false);
    return;
  }
  try {
    await track.applyConstraints({
      noiseSuppression: nextEnabled
    });
    setAudioRackStatus("Noise reduction " + (nextEnabled ? "enabled." : "disabled."), false);
  } catch (error) {
    setAudioRackStatus("Noise reduction setting is not supported on this device.", true);
  }
}

function applyInputMonitoringToggle(enabled, persist) {
  const nextEnabled = !!enabled;
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micInputMonitoringEnabled: nextEnabled });
  }
  if (micInputSourceNode) {
    rebuildMicProcessingGraph();
  }
  syncMicMonitoringOutput();
  setAudioRackStatus("Input monitoring " + (nextEnabled ? "enabled." : "disabled."), false);
}

function applyNoiseGateThresholdDb(thresholdDb, persist) {
  const parsed = Number(thresholdDb);
  const allowed = new Set([-100, -55, -50, -45, -40, -35, -30]);
  const value = allowed.has(parsed) ? parsed : -45;
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micNoiseGateThresholdDb: value });
  }
  micNoiseGateOpen = value <= -100;
  if (micNoiseGateGainNode && micAudioContext) {
    const target = value <= -100 ? 1 : 0.08;
    micNoiseGateGainNode.gain.setTargetAtTime(target, micAudioContext.currentTime, 0.02);
  }
  if (value <= -100) {
    setAudioRackStatus("Noise gate disabled.", false);
  } else {
    setAudioRackStatus("Noise gate set to " + value + " dB.", false);
  }
}

function applyLoudnessTargetPreset(preset, persist) {
  const normalized = String(preset || "podcast-standard");
  const nextPreset =
    normalized === "natural" || normalized === "broadcast-loud" ? normalized : "podcast-standard";
  if (persist) {
    studioSettings = window.TBRAuth.saveStudioSettings({ micLoudnessTargetPreset: nextPreset });
  }
  if (micLoudnessGainNode) {
    micLoudnessGainNode.gain.value = getLoudnessGainForPreset(nextPreset);
  }
  const label =
    nextPreset === "natural"
      ? "Natural Voice"
      : nextPreset === "broadcast-loud"
        ? "Broadcast Loud"
        : "Podcast Standard";
  setAudioRackStatus("Loudness target: " + label + ".", false);
}

function setMicActiveUI(active) {
  micEnabledToggle.checked = !!active;
  onAirMicEnabledToggle.checked = !!active;
  if (micEnabledLabel) {
    micEnabledLabel.textContent = active ? "Mic On" : "Mic Off";
  }
  if (onAirMicEnabledLabel) {
    onAirMicEnabledLabel.textContent = active ? "Mic On" : "Mic Off";
  }
  micMuteBtn.checked = !!(active && micMuted);
  onAirMicMuteBtn.checked = !!(active && micMuted);
  const muteLocked = !!studioSettings.pushToTalkEnabled || !active;
  micMuteBtn.disabled = muteLocked;
  onAirMicMuteBtn.disabled = muteLocked;
  pttHoldBtn.classList.toggle("active", !!pttTalking);
  pttHoldBtn.disabled = !(active && studioSettings.pushToTalkEnabled);
  if (micLoopbackBtn) {
    if (!active) {
      micLoopbackBtn.disabled = true;
      micLoopbackBtn.classList.remove("active");
      micLoopbackBtn.textContent = "Test My Mic";
      if (micLoopbackStatus) {
        micLoopbackStatus.textContent = "Local loopback test is off.";
      }
    } else {
      micLoopbackBtn.disabled = false;
    }
  }
  applyToggleLabelTooltips();
}

function isMicUiActive() {
  return !!(micStream && !micStandbyDisabled);
}

function setVideoRoomStatus(text, isError) {
  videoRoomStatus.textContent = text;
  videoRoomStatus.classList.toggle("error", !!isError);
  updatePreflightSummary();
}

function applyCameraSettingsFromStudioSettings() {
  const hasImage = !!String(studioSettings.cameraBackgroundImageDataUrl || "").trim();
  const mode = getCameraBackgroundMode();
  cameraBlurToggle.checked = mode === "blur";
  if (cameraBackgroundImageToggle) {
    cameraBackgroundImageToggle.checked = mode === "image";
    cameraBackgroundImageToggle.disabled = !hasImage;
    cameraBackgroundImageToggle.title = hasImage
      ? "Show your saved background image behind you."
      : "Save a background image in Settings first.";
  }
}

function getCameraBackgroundMode() {
  const explicitMode = String(studioSettings.cameraBackgroundMode || "").trim().toLowerCase();
  if (explicitMode === "image" && String(studioSettings.cameraBackgroundImageDataUrl || "").trim()) {
    return "image";
  }
  if (explicitMode === "blur" || studioSettings.cameraBackgroundBlurEnabled) {
    return "blur";
  }
  return "off";
}

function toPermissionLabel(state) {
  if (state === "granted") {
    return "Allowed";
  }
  if (state === "denied") {
    return "Blocked";
  }
  if (state === "prompt") {
    return "Prompt";
  }
  return "Unknown";
}

function applyPermissionState(kind, state) {
  const normalized = String(state || "unknown").toLowerCase();
  const isCamera = kind === "camera";
  const badge = isCamera ? cameraPermissionBadge : micPermissionBadge;
  const detail = isCamera ? cameraPermissionDetail : micPermissionDetail;
  if (isCamera) {
    cameraPermissionStateValue = normalized;
  } else {
    micPermissionStateValue = normalized;
  }

  badge.classList.remove("allowed", "blocked", "prompt", "unknown");
  if (normalized === "granted") {
    badge.classList.add("allowed");
    detail.textContent = "Access granted. Device can be used in this lounge.";
  } else if (normalized === "denied") {
    badge.classList.add("blocked");
    detail.textContent = "Access blocked. Update browser site permissions to allow.";
  } else if (normalized === "prompt") {
    badge.classList.add("prompt");
    detail.textContent = "Not decided yet. Browser will ask when you start the device.";
  } else {
    badge.classList.add("unknown");
    detail.textContent = "Permission state unavailable in this browser right now.";
  }
  badge.textContent = toPermissionLabel(normalized);
  updatePreflightSummary();
}

function setPreflightPill(node, state, label) {
  if (!node) {
    return;
  }
  node.classList.remove("ready", "warning", "blocked", "neutral", "adjusted");
  node.classList.add(String(state || "neutral"));
  node.textContent = String(label || "Checking");
}

function hasDetectedDevice(selectEl, missingLabel) {
  if (!selectEl) {
    return false;
  }
  const options = Array.from(selectEl.options || []);
  if (!options.length) {
    return false;
  }
  return !options.some((option) => String(option.textContent || "").includes(missingLabel));
}

function getRecordingAutoStopLimitMinutes() {
  const requested = Number(studioSettings.recordingAutoStopMinutes || 0);
  const adminMax = Math.max(20, Number(adminSettings.recordingMaxMinutes || 180));
  if (!requested) {
    return adminMax;
  }
  return Math.min(requested, adminMax);
}

function formatPreflightStatusLabel(state) {
  if (state === "ready") {
    return "Ready";
  }
  if (state === "warning") {
    return "Warning";
  }
  if (state === "blocked") {
    return "Blocked";
  }
  if (state === "adjusted") {
    return "Adjusted";
  }
  return "Checking";
}

function updatePreflightSummary() {
  const cameraAvailable = hasDetectedDevice(cameraDeviceSelect, "No camera found");
  const micAvailable = hasDetectedDevice(micDeviceSelect, "No microphone found");
  const cameraState =
    cameraPermissionStateValue === "denied" || !cameraAvailable
      ? "blocked"
      : cameraStream
        ? "ready"
        : cameraPermissionStateValue === "unknown"
          ? "neutral"
          : "warning";
  const cameraDetail =
    !cameraAvailable
      ? "No camera detected on this device."
      : cameraPermissionStateValue === "denied"
        ? "Camera access is blocked in the browser."
        : cameraStream
          ? "Camera is live and ready for the lounge."
          : "Camera is available and can be started when needed.";

  let micState = "warning";
  let micDetail = "Microphone is available and can be started when needed.";
  if (!micAvailable || micPermissionStateValue === "denied") {
    micState = "blocked";
    micDetail = !micAvailable ? "No microphone detected on this device." : "Microphone access is blocked in the browser.";
  } else if (preflightMicCheckInProgress) {
    micState = "neutral";
    micDetail = "Mic optimization is listening and analyzing your voice.";
  } else if (preflightMicAssessment.state === "blocked") {
    micState = "blocked";
    micDetail = preflightMicAssessment.summary;
  } else if (preflightMicAssessment.state === "adjusted") {
    micState = "adjusted";
    micDetail = preflightMicAssessment.summary;
  } else if (micStream) {
    if (!headphonesToggle.checked) {
      micState = "warning";
      micDetail = "Mic is live, but headphones are not confirmed.";
    } else {
      micState = preflightMicAssessment.state === "ready" ? "ready" : "ready";
      micDetail = preflightMicAssessment.state === "ready" ? preflightMicAssessment.summary : "Mic is live and ready for studio use.";
    }
  } else if (preflightMicAssessment.state === "ready") {
    micState = "ready";
    micDetail = preflightMicAssessment.summary;
  }

  let permissionsState = "ready";
  let permissionsDetail = "Camera and microphone permissions are allowed.";
  if (cameraPermissionStateValue === "denied" || micPermissionStateValue === "denied") {
    permissionsState = "blocked";
    permissionsDetail = "At least one device permission is blocked in the browser.";
  } else if (cameraPermissionStateValue === "prompt" || micPermissionStateValue === "prompt") {
    permissionsState = "warning";
    permissionsDetail = "Browser permission is still pending for at least one device.";
  } else if (cameraPermissionStateValue === "unknown" || micPermissionStateValue === "unknown") {
    permissionsState = "neutral";
    permissionsDetail = "Permission state is not fully available in this browser yet.";
  }

  let connectionState = realtimeEnabled ? "ready" : "blocked";
  let connectionDetail = realtimeEnabled
    ? currentParticipants.length + " participant(s) active. Realtime services are connected."
    : "Realtime is offline. Presence, chat, and host coordination are unavailable.";
  if (realtimeEnabled && currentParticipants.length === 0) {
    connectionState = "warning";
    connectionDetail = "Realtime is connected. No active participants are in the room yet.";
  }

  let recordingState = "warning";
  let recordingDetail = "Recording becomes available when an approved host starts a session.";
  if (isRecording) {
    recordingState = "ready";
    recordingDetail = "Recording is currently in progress.";
  } else if (!canCurrentUserControlRecording()) {
    recordingState = session.role === "admin" ? "ready" : "warning";
    recordingDetail =
      session.role === "admin"
        ? "Admins can control recording in the On-Air room."
        : "Recording control is restricted for this account unless an admin grants it.";
  } else if (!isCurrentUserHost()) {
    recordingState = "warning";
    recordingDetail = "Recording is available after you become the active host.";
  } else {
    recordingState = "ready";
    recordingDetail =
      "Ready to record. Countdown " +
      getRecordingCountdownSeconds() +
      "s, auto-stop " +
      getRecordingAutoStopLimitMinutes() +
      "m.";
  }

  const states = [cameraState, micState, permissionsState, connectionState, recordingState];
  const overallState = states.includes("blocked")
    ? "blocked"
    : states.includes("warning")
      ? "warning"
      : states.includes("adjusted")
        ? "adjusted"
        : states.includes("neutral")
          ? "neutral"
          : "ready";
  const overallText =
    overallState === "blocked"
      ? "Studio preflight found a blocker that should be fixed before going on-air."
      : overallState === "warning"
        ? "Studio preflight found conditions worth checking before entering control center."
        : overallState === "adjusted"
          ? "Studio preflight optimized your microphone and the room is close to ready."
          : overallState === "ready"
            ? "Studio preflight looks ready for a clean session."
            : "Studio preflight is still gathering status from the browser and realtime services.";

  setPreflightPill(preflightCameraPill, cameraState, formatPreflightStatusLabel(cameraState));
  setPreflightPill(preflightMicPill, micState, formatPreflightStatusLabel(micState));
  setPreflightPill(preflightPermissionsPill, permissionsState, formatPreflightStatusLabel(permissionsState));
  setPreflightPill(preflightConnectionPill, connectionState, formatPreflightStatusLabel(connectionState));
  setPreflightPill(preflightRecordingPill, recordingState, formatPreflightStatusLabel(recordingState));
  setPreflightPill(preflightOverallPill, overallState, formatPreflightStatusLabel(overallState));
  if (preflightCameraDetail) {
    preflightCameraDetail.textContent = cameraDetail;
  }
  if (preflightMicDetail) {
    preflightMicDetail.textContent = micDetail;
  }
  if (preflightPermissionsDetail) {
    preflightPermissionsDetail.textContent = permissionsDetail;
  }
  if (preflightConnectionDetail) {
    preflightConnectionDetail.textContent = connectionDetail;
  }
  if (preflightRecordingDetail) {
    preflightRecordingDetail.textContent = recordingDetail;
  }
  if (preflightOverallText) {
    preflightOverallText.textContent = overallText;
  }
  if (preflightMicCheckStatus) {
    preflightMicCheckStatus.textContent = preflightMicAssessment.summary;
    preflightMicCheckStatus.classList.toggle("error", preflightMicAssessment.state === "blocked");
  }
}

async function queryPermissionState(name) {
  if (!navigator.permissions || !navigator.permissions.query) {
    return { state: "unknown", handle: null };
  }
  try {
    const handle = await navigator.permissions.query({ name });
    return { state: handle.state || "unknown", handle };
  } catch (error) {
    return { state: "unknown", handle: null };
  }
}

function bindPermissionChange(handle, kind) {
  if (!handle) {
    return;
  }
  handle.onchange = () => {
    applyPermissionState(kind, handle.state || "unknown");
  };
}

async function refreshPermissionPanel() {
  const cameraPermission = await queryPermissionState("camera");
  const microphonePermission = await queryPermissionState("microphone");

  applyPermissionState("camera", cameraPermission.state);
  applyPermissionState("microphone", microphonePermission.state);

  if (cameraPermission.handle && cameraPermission.handle !== cameraPermissionHandle) {
    cameraPermissionHandle = cameraPermission.handle;
    bindPermissionChange(cameraPermissionHandle, "camera");
  }
  if (microphonePermission.handle && microphonePermission.handle !== micPermissionHandle) {
    micPermissionHandle = microphonePermission.handle;
    bindPermissionChange(micPermissionHandle, "microphone");
  }
}

function renderOnAirStatus() {
  if (isOnAir) {
    airStatusEl.textContent = "On-Air";
    airStatusEl.classList.remove("off");
    airStatusEl.classList.add("on");
    airToggleBtn.textContent = "Go Off-Air";
    airToggleBtn.classList.add("on");
    onAirOverlay.classList.remove("hidden");
    onAirOverlay.setAttribute("aria-hidden", "false");
    setOnAirCountdownPopoutOpen(false);
    onAirMode = true;
    if (sessionAirPill) {
      sessionAirPill.textContent = "On-Air";
      sessionAirPill.classList.remove("off");
      sessionAirPill.classList.add("on");
    }
    onAirLivePill.classList.add("active");
    syncOnAirVideoViews();
    setRecordingState(isRecording, recordingReady, currentHostUsername);
  } else {
    airStatusEl.textContent = "Off-Air";
    airStatusEl.classList.remove("on");
    airStatusEl.classList.add("off");
    airToggleBtn.textContent = "Go On-Air";
    airToggleBtn.classList.remove("on");
    onAirOverlay.classList.add("hidden");
    onAirOverlay.setAttribute("aria-hidden", "true");
    setOnAirCountdownPopoutOpen(false);
    onAirMode = false;
    if (sessionAirPill) {
      sessionAirPill.textContent = "Off-Air";
      sessionAirPill.classList.remove("on");
      sessionAirPill.classList.add("off");
    }
    onAirLivePill.classList.remove("active");
    onAirRecordStrip.classList.add("hidden");
    onAirRecordStrip.classList.remove("active");
    stopRecordingTimer();
    stopRecordingWave();
    onAirStatusLine.textContent = "Live mode paused. Return to lounge controls.";
  }
}

async function setOnAirMode(nextState) {
  const desired = !!nextState;
  if (isOnAir === desired) {
    return;
  }
  isOnAir = desired;
  renderOnAirStatus();
  await sendPresenceHeartbeat()
    .then(() => pollPresence())
    .catch(() => {
      setRealtimeOfflineFallback();
    });
}

function updateRemoteVideoLabel(name) {
  const label = getDisplayNameForUsername(name) || String(name || "").trim();
  remoteVideoLabel.textContent = label || "Guest";
  onAirRemoteVideoLabel.textContent = label || "Guest";
  const initial = toAvatarInitial(label || "Guest");
  if (remoteVideoPlaceholder) {
    remoteVideoPlaceholder.textContent = initial;
  }
  if (onAirRemoteVideoPlaceholder) {
    onAirRemoteVideoPlaceholder.textContent = initial;
  }
}

function getSpeakerTargets() {
  return [remoteAudio, remoteVideo, onAirRemoteVideo].filter(Boolean);
}

function setSpeakerStatus(text, isError) {
  if (!speakerStatus) {
    return;
  }
  speakerStatus.textContent = text;
  speakerStatus.classList.toggle("error", !!isError);
}

function fillSpeakerSelect(devices, preferredId) {
  if (!speakerDeviceSelect) {
    return;
  }
  speakerDeviceSelect.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Use system default speaker";
  speakerDeviceSelect.appendChild(defaultOption);

  if (!devices.length) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No speaker selection available";
    speakerDeviceSelect.appendChild(emptyOption);
  }

  devices.forEach((device, index) => {
    const option = document.createElement("option");
    option.value = device.deviceId;
    option.textContent = device.label || ("Speaker " + (index + 1));
    speakerDeviceSelect.appendChild(option);
  });

  if (preferredId && devices.some((device) => device.deviceId === preferredId)) {
    speakerDeviceSelect.value = preferredId;
  } else {
    speakerDeviceSelect.value = "";
  }
}

async function applySpeakerOutput(deviceId, persistPreference) {
  const targets = getSpeakerTargets();
  const supportsSinkSelection = targets.some((element) => typeof element.setSinkId === "function");
  if (!supportsSinkSelection) {
    if (speakerDeviceSelect) {
      speakerDeviceSelect.value = "";
      speakerDeviceSelect.disabled = true;
    }
    setSpeakerStatus("Speaker routing follows your browser or system output on this device.");
    return false;
  }

  const nextId = String(deviceId || "").trim();
  try {
    await Promise.all(
      targets.map((element) => {
        if (typeof element.setSinkId === "function") {
          return element.setSinkId(nextId);
        }
        return Promise.resolve();
      })
    );
    if (persistPreference) {
      studioSettings = window.TBRAuth.saveStudioSettings({
        preferredSpeakerId: nextId
      });
    }
    setSpeakerStatus(nextId ? "Speaker output updated for this browser." : "Using system default speaker output.");
    return true;
  } catch (error) {
    setSpeakerStatus("Unable to switch speaker output in this browser.", true);
    return false;
  }
}

async function loadSpeakerDevices() {
  if (!speakerDeviceSelect) {
    return;
  }
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    speakerDeviceSelect.disabled = true;
    fillSpeakerSelect([], "");
    setSpeakerStatus("Speaker selection is not supported in this browser.");
    return;
  }
  const devices = await navigator.mediaDevices.enumerateDevices();
  const speakers = devices.filter((device) => device.kind === "audiooutput");
  fillSpeakerSelect(speakers, studioSettings.preferredSpeakerId || "");
  const supportsSinkSelection = getSpeakerTargets().some((element) => typeof element.setSinkId === "function");
  speakerDeviceSelect.disabled = !supportsSinkSelection;
  if (!supportsSinkSelection) {
    setSpeakerStatus("Speaker routing follows your browser or system output on this device.");
    return;
  }
  await applySpeakerOutput(studioSettings.preferredSpeakerId || "", false);
}

function useTwilioVideoRoom() {
  return !!TwilioVideoSDK;
}

function getTwilioRemoteParticipant() {
  if (!twilioVideoRoom || !twilioVideoRoom.participants) {
    return null;
  }
  const participantsCollection = twilioVideoRoom.participants;
  const participants =
    typeof participantsCollection.values === "function"
      ? Array.from(participantsCollection.values())
      : Object.values(participantsCollection || {});
  return participants.length ? participants[0] : null;
}

function clearRemoteMediaElements() {
  pushMediaDebug("remote.clear");
  if (remoteAudio) {
    remoteAudio.srcObject = null;
  }
  remoteVideo.srcObject = null;
  onAirRemoteVideo.srcObject = null;
  updateRemoteTileVisibility();
}

function attachTwilioTrackToElements(track) {
  if (!track) {
    return;
  }
  pushMediaDebug("twilio.track.attach", track.kind || "unknown");
  if (track.kind === "audio") {
    if (remoteAudio) {
      track.attach(remoteAudio);
      remoteAudio.muted = false;
      remoteAudio.volume = 1;
      remoteAudio.play().catch(() => {});
    }
    return;
  }
  if (track.kind === "video") {
    track.attach(remoteVideo);
    track.attach(onAirRemoteVideo);
    remoteVideo.play().catch(() => {});
    onAirRemoteVideo.play().catch(() => {});
    updateRemoteTileVisibility();
  }
}

function detachTwilioTrackFromElements(track) {
  if (!track) {
    return;
  }
  pushMediaDebug("twilio.track.detach", track.kind || "unknown");
  if (track.kind === "audio") {
    if (remoteAudio) {
      track.detach(remoteAudio);
      remoteAudio.srcObject = null;
    }
    return;
  }
  if (track.kind === "video") {
    track.detach(remoteVideo);
    track.detach(onAirRemoteVideo);
    remoteVideo.srcObject = null;
    onAirRemoteVideo.srcObject = null;
    updateRemoteTileVisibility();
  }
}

function syncTwilioRemoteParticipantMedia(participant) {
  if (!participant) {
    pushMediaDebug("twilio.remote.sync", "no participant");
    clearRemoteMediaElements();
    updateRemoteVideoLabel(getTargetPeer() || "Guest");
    return;
  }
  pushMediaDebug("twilio.remote.sync", participant.identity || "unknown");
  updateRemoteVideoLabel(participant.identity || "Guest");
  const publications = getTwilioRemotePublicationList(participant);
  let hasAudio = false;
  let hasVideo = false;
  publications.forEach((publication) => {
    if (!publication) {
      return;
    }
    const publicationKind =
      String(
        publication.kind ||
          publication.trackKind ||
          (publication.track && publication.track.kind) ||
          (publication.trackName === "camera" ? "video" : publication.trackName === "microphone" ? "audio" : "")
      ).toLowerCase();
    const track = publication.track || null;
    const isSubscribed = publication.isSubscribed !== false && !!track;
    pushMediaDebug(
      "twilio.remote.publication",
      (participant.identity || "unknown") +
        ":" +
        (publication.trackName || publicationKind || "unknown") +
        " subscribed=" +
        isSubscribed
    );
    if (track && track.kind === "audio") {
      hasAudio = true;
    }
    if (track && track.kind === "video") {
      hasVideo = true;
    }
    if (track) {
      attachTwilioTrackToElements(track);
      return;
    }
    if (publicationKind === "audio") {
      hasAudio = true;
    }
    if (publicationKind === "video") {
      hasVideo = true;
    }
  });
  if (!hasAudio && remoteAudio) {
    remoteAudio.srcObject = null;
  }
  if (!hasVideo) {
    remoteVideo.srcObject = null;
    onAirRemoteVideo.srcObject = null;
  }
  updateRemoteTileVisibility();
  applySpeakerOutput(studioSettings.preferredSpeakerId || "", false).catch(() => {});
}

function bindTwilioParticipant(participant) {
  if (!participant) {
    return;
  }
  pushMediaDebug("twilio.participant.bind", participant.identity || "unknown");
  syncTwilioRemoteParticipantMedia(participant);
  participant.removeAllListeners && participant.removeAllListeners("trackSubscribed");
  participant.removeAllListeners && participant.removeAllListeners("trackUnsubscribed");
  participant.removeAllListeners && participant.removeAllListeners("trackPublished");
  participant.removeAllListeners && participant.removeAllListeners("trackUnpublished");
  participant.on("trackSubscribed", () => {
    pushMediaDebug("twilio.participant.trackSubscribed", participant.identity || "unknown");
    syncTwilioRemoteParticipantMedia(participant);
    setVideoRoomStatus("Connected to " + (participant.identity || "Guest") + ".");
  });
  participant.on("trackUnsubscribed", () => {
    pushMediaDebug("twilio.participant.trackUnsubscribed", participant.identity || "unknown");
    syncTwilioRemoteParticipantMedia(participant);
  });
  participant.on("trackPublished", () => {
    pushMediaDebug("twilio.participant.trackPublished", participant.identity || "unknown");
    syncTwilioRemoteParticipantMedia(participant);
  });
  participant.on("trackUnpublished", () => {
    pushMediaDebug("twilio.participant.trackUnpublished", participant.identity || "unknown");
    syncTwilioRemoteParticipantMedia(participant);
  });
}

function getTwilioPublicationList(collection) {
  if (!collection) {
    return [];
  }
  if (typeof collection.values === "function") {
    return Array.from(collection.values());
  }
  return Object.values(collection || {});
}

function getTwilioRemotePublicationList(participant) {
  if (!participant) {
    return [];
  }
  const seen = new Set();
  const publications = [];
  [participant.videoTracks, participant.audioTracks, participant.trackPublications].forEach((collection) => {
    getTwilioPublicationList(collection).forEach((publication, index) => {
      if (!publication) {
        return;
      }
      const key = publication.sid || publication.trackSid || publication.trackName || publication.kind || String(index);
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      publications.push(publication);
    });
  });
  return publications;
}

function isTwilioPublicationForKind(publication, kind, preferredName) {
  if (!publication) {
    return false;
  }
  const normalizedKind = String(kind || "").trim().toLowerCase();
  const normalizedPreferredName = String(preferredName || "").trim().toLowerCase();
  const publicationKind = String(
    publication.kind ||
      (publication.track && publication.track.kind) ||
      (publication.trackName === "camera" ? "video" : publication.trackName === "microphone" ? "audio" : "")
  )
    .trim()
    .toLowerCase();
  if (publicationKind && publicationKind === normalizedKind) {
    return true;
  }
  const publicationName = String(publication.trackName || "").trim().toLowerCase();
  if (normalizedPreferredName && publicationName === normalizedPreferredName) {
    return true;
  }
  return false;
}

function getPublishedCameraTrack() {
  const preferredStream = cameraStream || rawCameraStream;
  return preferredStream ? preferredStream.getVideoTracks()[0] || null : null;
}

function getTwilioConnectTracks() {
  const tracks = [];
  const nextVideoTrack = getPublishedCameraTrack();
  const nextAudioTrack = getOutgoingAudioTrack();
  if (nextVideoTrack) {
    tracks.push(nextVideoTrack);
  }
  if (nextAudioTrack) {
    tracks.push(nextAudioTrack);
  }
  return tracks;
}

function shouldMaintainTwilioRoomConnection() {
  const hasLocalTracks = getTwilioConnectTracks().length > 0;
  const hasPeer = !!getTargetPeer();
  return hasLocalTracks || hasPeer;
}

function forceUnpublishTwilioLocalAudio() {
  const room = twilioVideoRoom;
  const localParticipant = room && room.localParticipant ? room.localParticipant : null;
  if (!localParticipant) {
    twilioLocalAudioTrack = null;
    twilioLocalAudioSourceId = "";
    return;
  }
  if (twilioLocalAudioTrack) {
    try {
      localParticipant.unpublishTrack(twilioLocalAudioTrack);
    } catch (error) {
      // Ignore Twilio unpublish races.
    }
  }
  getTwilioPublicationList(localParticipant.audioTracks).forEach((publication) => {
    if (publication && publication.track) {
      try {
        localParticipant.unpublishTrack(publication.track);
      } catch (error) {
        // Ignore Twilio unpublish races.
      }
    }
  });
  twilioLocalAudioTrack = null;
  twilioLocalAudioSourceId = "";
  pushMediaDebug("twilio.publish.unpublish", "audio(force)");
}

function forceUnpublishTwilioLocalVideo() {
  const room = twilioVideoRoom;
  const localParticipant = room && room.localParticipant ? room.localParticipant : null;
  if (!localParticipant) {
    twilioLocalVideoTrack = null;
    twilioLocalVideoSourceId = "";
    return;
  }
  if (twilioLocalVideoTrack) {
    try {
      localParticipant.unpublishTrack(twilioLocalVideoTrack);
    } catch (error) {
      // Ignore Twilio unpublish races.
    }
  }
  getTwilioPublicationList(localParticipant.videoTracks).forEach((publication) => {
    if (publication && publication.track) {
      try {
        localParticipant.unpublishTrack(publication.track);
      } catch (error) {
        // Ignore Twilio unpublish races.
      }
    }
  });
  twilioLocalVideoTrack = null;
  twilioLocalVideoSourceId = "";
  pushMediaDebug("twilio.publish.unpublish", "video(force)");
}

async function fetchTwilioVideoRoomToken() {
  pushMediaDebug("twilio.token.request", session.username + " @ " + twilioVideoRoomName);
  const response = await api("/twilio-video/token", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      roomName: twilioVideoRoomName
    })
  });
  if (response && response.roomName) {
    twilioVideoRoomName = String(response.roomName || twilioVideoRoomName);
  }
  pushMediaDebug("twilio.token.success", response && response.roomName ? response.roomName : twilioVideoRoomName);
  return response;
}

async function ensureTwilioRoomConnection() {
  if (!useTwilioVideoRoom() || !videoRoomEnabled || !realtimeEnabled) {
    return null;
  }
  if (!shouldMaintainTwilioRoomConnection()) {
    pushMediaDebug("twilio.room.skip", "no peer and no local media");
    setVideoRoomStatus("Waiting for another participant to join video room.");
    return null;
  }
  if (twilioVideoRoom) {
    twilioRemoteParticipant = getTwilioRemoteParticipant();
    pushMediaDebug("twilio.room.reuse", twilioRemoteParticipant ? twilioRemoteParticipant.identity || "participant" : "no remote participant");
    if (twilioRemoteParticipant) {
      bindTwilioParticipant(twilioRemoteParticipant);
      setVideoRoomStatus("Connected to " + (twilioRemoteParticipant.identity || "Guest") + ".");
    } else {
      setVideoRoomStatus("Waiting for another participant to join video room.");
      clearRemoteMediaElements();
    }
    return twilioVideoRoom;
  }
  if (twilioVideoConnectPromise) {
    return twilioVideoConnectPromise;
  }
  twilioVideoConnectPromise = (async () => {
    const tokenResponse = await fetchTwilioVideoRoomToken();
    const connectTracks = getTwilioConnectTracks();
    pushMediaDebug("twilio.room.connecting", tokenResponse.roomName || twilioVideoRoomName);
    const connectOptions = {
      name: tokenResponse.roomName || twilioVideoRoomName,
      automaticSubscription: true,
      dominantSpeaker: true,
      networkQuality: { local: 1, remote: 1 }
    };
    if (connectTracks.length) {
      connectOptions.tracks = connectTracks;
    } else {
      connectOptions.audio = false;
      connectOptions.video = false;
    }
    const room = await TwilioVideoSDK.connect(tokenResponse.token, connectOptions);
    twilioLocalDisconnectRequested = false;
    twilioVideoRoom = room;
    twilioVideoRoomName = String(room.name || twilioVideoRoomName);
    const joinedVideoTrack = connectTracks.find((track) => track && track.kind === "video");
    const joinedAudioTrack = connectTracks.find((track) => track && track.kind === "audio");
    twilioLocalVideoTrack = joinedVideoTrack || null;
    twilioLocalVideoSourceId = joinedVideoTrack ? String(joinedVideoTrack.id || "") : "";
    twilioLocalAudioTrack = joinedAudioTrack || null;
    twilioLocalAudioSourceId = joinedAudioTrack ? String(joinedAudioTrack.id || "") : "";
    pushMediaDebug("twilio.room.connected", twilioVideoRoomName);
    room.on("participantConnected", (participant) => {
      pushMediaDebug("twilio.room.participantConnected", participant.identity || "unknown");
      twilioRemoteParticipant = participant;
      bindTwilioParticipant(participant);
      syncTwilioPublishedTracks().catch(() => {
        // Ignore follow-up publish races; status/debug already capture failures.
      });
      setVideoRoomStatus("Connected to " + (participant.identity || "Guest") + ".");
    });
    room.on("participantDisconnected", (participant) => {
      pushMediaDebug("twilio.room.participantDisconnected", participant.identity || "unknown");
      if (twilioRemoteParticipant && participant.sid === twilioRemoteParticipant.sid) {
        twilioRemoteParticipant = getTwilioRemoteParticipant();
      }
      if (twilioRemoteParticipant) {
        bindTwilioParticipant(twilioRemoteParticipant);
        setVideoRoomStatus("Connected to " + (twilioRemoteParticipant.identity || "Guest") + ".");
      } else {
        clearRemoteMediaElements();
        setVideoRoomStatus("Waiting for another participant to join video room.");
      }
    });
    room.on("trackSubscribed", (track, publication, participant) => {
      pushMediaDebug(
        "twilio.room.trackSubscribed",
        (participant && participant.identity ? participant.identity : "unknown") + ":" + (track && track.kind ? track.kind : "unknown")
      );
      if (participant) {
        twilioRemoteParticipant = participant;
        bindTwilioParticipant(participant);
      }
      attachTwilioTrackToElements(track);
      updateRemoteTileVisibility();
      if (participant && participant.identity) {
        setVideoRoomStatus("Connected to " + participant.identity + ".");
      }
    });
    room.on("trackUnsubscribed", (track, publication, participant) => {
      pushMediaDebug(
        "twilio.room.trackUnsubscribed",
        (participant && participant.identity ? participant.identity : "unknown") + ":" + (track && track.kind ? track.kind : "unknown")
      );
      detachTwilioTrackFromElements(track);
      if (participant) {
        twilioRemoteParticipant = participant.sid === (twilioRemoteParticipant && twilioRemoteParticipant.sid)
          ? participant
          : twilioRemoteParticipant;
        syncTwilioRemoteParticipantMedia(participant);
      } else {
        updateRemoteTileVisibility();
      }
    });
    room.on("disconnected", (roomRef, error) => {
      pushMediaDebug("twilio.room.disconnected", error && error.message ? error.message : "no error message");
      twilioVideoRoom = null;
      twilioRemoteParticipant = null;
      clearRemoteMediaElements();
      if (twilioLocalDisconnectRequested) {
        twilioLocalDisconnectRequested = false;
        setVideoRoomStatus("Not connected to video room.");
        return;
      }
      setVideoRoomStatus("Connection interrupted. Reconnecting...", true);
    });
    room.on("reconnecting", () => {
      pushMediaDebug("twilio.room.reconnecting");
      setVideoRoomStatus("Reconnecting media room...", true);
    });
    room.on("reconnected", () => {
      pushMediaDebug("twilio.room.reconnected");
      twilioRemoteParticipant = getTwilioRemoteParticipant();
      syncTwilioPublishedTracks().catch(() => {
        // Ignore follow-up publish races; status/debug already capture failures.
      });
      if (twilioRemoteParticipant) {
        bindTwilioParticipant(twilioRemoteParticipant);
        setVideoRoomStatus("Connected to " + (twilioRemoteParticipant.identity || "Guest") + ".");
      } else {
        setVideoRoomStatus("Waiting for another participant to join video room.");
      }
    });
    twilioRemoteParticipant = getTwilioRemoteParticipant();
    if (twilioRemoteParticipant) {
      bindTwilioParticipant(twilioRemoteParticipant);
      setVideoRoomStatus("Connected to " + (twilioRemoteParticipant.identity || "Guest") + ".");
    } else {
      setVideoRoomStatus("Waiting for another participant to join video room.");
    }
    return room;
  })().finally(() => {
    twilioVideoConnectPromise = null;
  });
  return twilioVideoConnectPromise;
}

async function syncTwilioPublishedTracks() {
  if (!useTwilioVideoRoom() || !videoRoomEnabled || !realtimeEnabled) {
    return false;
  }
  if (twilioPublishSyncInFlight) {
    pushMediaDebug("twilio.publish.skip", "sync already in flight");
    return false;
  }
  if (twilioEnsuringLocalMedia) {
    return false;
  }
  twilioPublishSyncInFlight = true;
  try {
  const shouldHaveVideo = !!(cameraEnabledToggle && cameraEnabledToggle.checked);
  const shouldHaveAudio = !!(micEnabledToggle && micEnabledToggle.checked);
  if (shouldHaveVideo && !rawCameraStream) {
    try {
      twilioEnsuringLocalMedia = true;
      pushMediaDebug("twilio.publish.ensure", "camera");
      const started = await startCamera();
      if (!started) {
        return false;
      }
    } finally {
      twilioEnsuringLocalMedia = false;
    }
  }
  if (shouldHaveAudio && !micStream) {
    try {
      twilioEnsuringLocalMedia = true;
      pushMediaDebug("twilio.publish.ensure", "microphone");
      const started = await startMic();
      if (!started) {
        return false;
      }
    } finally {
      twilioEnsuringLocalMedia = false;
    }
  }
  await refreshOutgoingProgramAudioStream();
  const room = await ensureTwilioRoomConnection();
  if (!room) {
    return false;
  }
  const localParticipant = room && room.localParticipant ? room.localParticipant : null;
  if (!localParticipant) {
    throw new Error("Twilio room did not provide a local participant.");
  }
  const nextVideoTrack = getPublishedCameraTrack();
  const nextAudioTrack = getOutgoingAudioTrack();
  const videoPublications = getTwilioPublicationList(localParticipant.videoTracks);
  const audioPublications = getTwilioPublicationList(localParticipant.audioTracks);
  const hasPublishedVideo = videoPublications.some((publication) => isTwilioPublicationForKind(publication, "video", "camera"));
  const hasPublishedAudio = audioPublications.some((publication) => isTwilioPublicationForKind(publication, "audio", "microphone"));
  pushMediaDebug(
    "twilio.publish.sync",
    "video=" +
      (!!nextVideoTrack) +
      " audio=" +
      (!!nextAudioTrack) +
      " remote=" +
      (!!twilioRemoteParticipant) +
      " roomVideo=" +
      hasPublishedVideo +
      " roomAudio=" +
      hasPublishedAudio
  );

  if (twilioLocalVideoTrack && (!nextVideoTrack || twilioLocalVideoSourceId !== String(nextVideoTrack.id || ""))) {
    pushMediaDebug("twilio.publish.unpublish", "video");
    localParticipant.unpublishTrack(twilioLocalVideoTrack);
    twilioLocalVideoTrack = null;
    twilioLocalVideoSourceId = "";
  }
  if (!nextVideoTrack && hasPublishedVideo) {
    videoPublications.forEach((publication) => {
      if (publication && publication.track) {
        localParticipant.unpublishTrack(publication.track);
      }
    });
  }
  if (nextVideoTrack && (!twilioLocalVideoTrack || !hasPublishedVideo)) {
    twilioLocalVideoTrack = nextVideoTrack;
    twilioLocalVideoSourceId = String(nextVideoTrack.id || "");
    pushMediaDebug("twilio.publish.publish", "video");
    const publication = await localParticipant.publishTrack(twilioLocalVideoTrack, { name: "camera" });
    pushMediaDebug(
      "twilio.publish.published",
      "video name=" + String((publication && publication.trackName) || "unknown") + " kind=" + String((publication && publication.kind) || "unknown")
    );
  }

  if (twilioLocalAudioTrack && (!nextAudioTrack || twilioLocalAudioSourceId !== String(nextAudioTrack.id || ""))) {
    pushMediaDebug("twilio.publish.unpublish", "audio");
    localParticipant.unpublishTrack(twilioLocalAudioTrack);
    twilioLocalAudioTrack = null;
    twilioLocalAudioSourceId = "";
  }
  if (!nextAudioTrack && hasPublishedAudio) {
    audioPublications.forEach((publication) => {
      if (publication && publication.track) {
        localParticipant.unpublishTrack(publication.track);
      }
    });
  }
  if (nextAudioTrack && (!twilioLocalAudioTrack || !hasPublishedAudio)) {
    twilioLocalAudioTrack = nextAudioTrack;
    twilioLocalAudioSourceId = String(nextAudioTrack.id || "");
    pushMediaDebug("twilio.publish.publish", "audio");
    const publication = await localParticipant.publishTrack(twilioLocalAudioTrack, { name: "microphone" });
    pushMediaDebug(
      "twilio.publish.published",
      "audio name=" + String((publication && publication.trackName) || "unknown") + " kind=" + String((publication && publication.kind) || "unknown")
    );
  }

  if (!nextVideoTrack) {
    setVideoRoomStatus("Connected to room. Camera is off.");
  } else if (twilioRemoteParticipant) {
    syncTwilioRemoteParticipantMedia(twilioRemoteParticipant);
    setVideoRoomStatus("Connected to " + (twilioRemoteParticipant.identity || "Guest") + ".");
  }
  return true;
  } finally {
    twilioPublishSyncInFlight = false;
  }
}

function toAvatarInitial(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) {
    return "G";
  }
  return (trimmed[0] || "G").toUpperCase();
}

function getActiveRemotePeerUsername() {
  if (useTwilioVideoRoom() && twilioRemoteParticipant && twilioRemoteParticipant.identity) {
    return String(twilioRemoteParticipant.identity || "").trim().toLowerCase();
  }
  return getTargetPeer();
}

function hasLiveVideoTrack(stream) {
  if (!stream || !stream.getVideoTracks) {
    return false;
  }
  const tracks = stream.getVideoTracks();
  return tracks.some((track) => track && track.readyState === "live" && track.enabled);
}

function hasRenderableVideo(element) {
  if (!element) {
    return false;
  }
  return Number(element.readyState || 0) >= 2 && Number(element.videoWidth || 0) > 0 && Number(element.videoHeight || 0) > 0;
}

function createExtraParticipantTile(username, onAirVariant) {
  const display = getDisplayNameForUsername(username) || username;
  const tile = document.createElement("div");
  tile.className = "video-tile placeholder" + (onAirVariant ? " onair-video-tile" : "");
  const label = document.createElement("p");
  label.className = "video-label";
  label.textContent = display;
  const frame = document.createElement("div");
  frame.className = "camera-frame" + (onAirVariant ? " onair-camera-frame" : "");
  const placeholder = document.createElement("div");
  placeholder.className = "camera-placeholder soft";
  placeholder.textContent = toAvatarInitial(display);
  placeholder.setAttribute("aria-hidden", "true");
  frame.appendChild(placeholder);
  tile.appendChild(label);
  tile.appendChild(frame);
  return tile;
}

function createOverflowParticipantTile(count, onAirVariant) {
  const tile = document.createElement("div");
  tile.className = "video-tile placeholder" + (onAirVariant ? " onair-video-tile" : "");
  const label = document.createElement("p");
  label.className = "video-label";
  label.textContent = count + " more";
  const frame = document.createElement("div");
  frame.className = "camera-frame" + (onAirVariant ? " onair-camera-frame" : "");
  const placeholder = document.createElement("div");
  placeholder.className = "camera-placeholder soft";
  placeholder.textContent = "+" + String(count);
  placeholder.setAttribute("aria-hidden", "true");
  frame.appendChild(placeholder);
  tile.appendChild(label);
  tile.appendChild(frame);
  return tile;
}

function renderExtraParticipantTiles(primaryPeer) {
  if (!extraVideoTiles || !onAirExtraVideoTiles) {
    return;
  }
  const others = currentParticipants.filter((name) => name && name !== session.username);
  const extras = others.filter((name) => name !== primaryPeer);
  const hasPrimary = !!primaryPeer;
  const maxTotalTiles = 5;
  const availableExtras = Math.max(0, maxTotalTiles - 1 - (hasPrimary ? 1 : 0));
  const shown = extras.slice(0, availableExtras);
  const overflow = Math.max(0, extras.length - shown.length);

  extraVideoTiles.innerHTML = "";
  onAirExtraVideoTiles.innerHTML = "";

  shown.forEach((username) => {
    extraVideoTiles.appendChild(createExtraParticipantTile(username, false));
    onAirExtraVideoTiles.appendChild(createExtraParticipantTile(username, true));
  });

  if (overflow > 0) {
    extraVideoTiles.appendChild(createOverflowParticipantTile(overflow, false));
    onAirExtraVideoTiles.appendChild(createOverflowParticipantTile(overflow, true));
  }
}

function updateRemoteTileVisibility() {
  const peerUsername = getActiveRemotePeerUsername();
  const hasPeer = !!peerUsername;
  const hasVideo =
    hasRenderableVideo(remoteVideo) ||
    hasRenderableVideo(onAirRemoteVideo) ||
    hasLiveVideoTrack(remoteVideo.srcObject) ||
    hasLiveVideoTrack(onAirRemoteVideo.srcObject);
  const initial = toAvatarInitial(peerUsername);

  if (videoStage) {
    videoStage.classList.toggle("solo", !hasPeer);
  }
  if (onAirVideoStage) {
    onAirVideoStage.classList.toggle("solo", !hasPeer);
  }
  const totalTiles = 1 + (hasPeer ? 1 : 0) + Math.min(3, currentParticipants.filter((name) => name && name !== session.username).length - (hasPeer ? 1 : 0));
  if (videoStage) {
    videoStage.classList.toggle("layout-many", totalTiles >= 4);
  }
  if (onAirVideoStage) {
    onAirVideoStage.classList.toggle("layout-many", totalTiles >= 4);
  }

  remoteVideoTile.classList.toggle("hidden", !hasPeer);
  onAirRemoteVideoTile.classList.toggle("hidden", !hasPeer);
  remoteVideoTile.classList.toggle("video-ready", hasPeer && hasVideo);
  onAirRemoteVideoTile.classList.toggle("video-ready", hasPeer && hasVideo);

  if (remoteVideoPlaceholder) {
    remoteVideoPlaceholder.textContent = initial;
    remoteVideoPlaceholder.classList.toggle("hidden", !hasPeer || hasVideo);
  }
  if (onAirRemoteVideoPlaceholder) {
    onAirRemoteVideoPlaceholder.textContent = initial;
    onAirRemoteVideoPlaceholder.classList.toggle("hidden", !hasPeer || hasVideo);
  }

  renderExtraParticipantTiles(peerUsername);
}

function syncOnAirVideoViews() {
  onAirCameraVideo.srcObject = cameraVideo.srcObject || null;
  onAirRemoteVideo.srcObject = remoteVideo.srcObject || null;
  onAirCameraVideo.classList.toggle("camera-muted", cameraVideo.classList.contains("camera-muted"));
  updateOnAirCameraPauseUI();
  onAirCameraVideo.play().catch(() => {
    // Ignore autoplay restrictions.
  });
  onAirRemoteVideo.play().catch(() => {
    // Ignore autoplay restrictions.
  });
  updateRemoteTileVisibility();
}

[remoteVideo, onAirRemoteVideo].forEach((videoEl) => {
  if (!videoEl) {
    return;
  }
  ["loadedmetadata", "loadeddata", "canplay", "playing"].forEach((eventName) => {
    videoEl.addEventListener(eventName, () => {
      updateRemoteTileVisibility();
    });
  });
});

function stopCameraBlurPipeline() {
  if (blurFrameId) {
    cancelAnimationFrame(blurFrameId);
    blurFrameId = null;
  }
  if (blurSourceVideo) {
    blurSourceVideo.srcObject = null;
    blurSourceVideo = null;
  }
  blurCanvas = null;
  blurContext = null;
  blurForegroundCanvas = null;
  blurForegroundContext = null;
  blurBackgroundImage = null;
  blurBackgroundImageKey = "";
  segmentationMaskFrame = null;
  segmentationBusy = false;
  if (blurCameraStream) {
    blurCameraStream.getTracks().forEach((track) => track.stop());
    blurCameraStream = null;
  }
}

async function ensureSegmentationEngine() {
  if (segmentationSupported === false) {
    return null;
  }
  if (segmentationEngine) {
    return segmentationEngine;
  }
  if (!window.SelfieSegmentation) {
    segmentationSupported = false;
    return null;
  }

  const engine = new window.SelfieSegmentation({
    locateFile: (file) => "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/" + file
  });
  // modelSelection 0 is lighter/faster than 1.
  engine.setOptions({ modelSelection: 0 });
  engine.onResults((results) => {
    segmentationMaskFrame = results && results.segmentationMask ? results.segmentationMask : null;
    segmentationBusy = false;
  });
  segmentationEngine = engine;
  segmentationSupported = true;
  return segmentationEngine;
}

async function loadBackgroundImageAsset(dataUrl) {
  const normalized = String(dataUrl || "").trim();
  if (!normalized) {
    blurBackgroundImage = null;
    blurBackgroundImageKey = "";
    return null;
  }
  if (blurBackgroundImage && blurBackgroundImageKey === normalized) {
    return blurBackgroundImage;
  }
  const image = new Image();
  image.decoding = "async";
  image.src = normalized;
  await image.decode().catch(
    () =>
      new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      })
  );
  blurBackgroundImage = image;
  blurBackgroundImageKey = normalized;
  return blurBackgroundImage;
}

function drawImageCover(context, image, width, height) {
  if (!context || !image || !width || !height) {
    return;
  }
  const sourceWidth = Number(image.naturalWidth || image.videoWidth || image.width || width);
  const sourceHeight = Number(image.naturalHeight || image.videoHeight || image.height || height);
  if (!sourceWidth || !sourceHeight) {
    context.drawImage(image, 0, 0, width, height);
    return;
  }
  const scale = Math.max(width / sourceWidth, height / sourceHeight);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;
  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

async function createProcessedCameraStream(sourceStream, mode) {
  stopCameraBlurPipeline();
  const track = sourceStream ? sourceStream.getVideoTracks()[0] : null;
  if (!track) {
    return null;
  }
  const normalizedMode = String(mode || "off").trim().toLowerCase();
  const settings = track.getSettings ? track.getSettings() : {};
  const width = Number(settings.width || 1280);
  const height = Number(settings.height || 720);
  const scale = Math.min(1, 960 / Math.max(960, width));

  blurCanvas = document.createElement("canvas");
  blurCanvas.width = Math.max(640, Math.round(width * scale));
  blurCanvas.height = Math.max(360, Math.round(height * scale));
  blurContext = blurCanvas.getContext("2d");
  if (!blurContext) {
    return null;
  }
  blurForegroundCanvas = document.createElement("canvas");
  blurForegroundCanvas.width = blurCanvas.width;
  blurForegroundCanvas.height = blurCanvas.height;
  blurForegroundContext = blurForegroundCanvas.getContext("2d");
  if (!blurForegroundContext) {
    return null;
  }
  segmentationLastSentAt = 0;

  blurSourceVideo = document.createElement("video");
  blurSourceVideo.srcObject = sourceStream;
  blurSourceVideo.muted = true;
  blurSourceVideo.playsInline = true;
  await blurSourceVideo.play();
  const segmenter = await ensureSegmentationEngine();
  const backgroundImage =
    normalizedMode === "image"
      ? await loadBackgroundImageAsset(studioSettings.cameraBackgroundImageDataUrl || "")
      : null;

  const draw = () => {
    if (!blurContext || !blurSourceVideo) {
      return;
    }
    const nowMs = performance.now();
    if (segmenter && !segmentationBusy && nowMs - segmentationLastSentAt >= SEGMENTATION_INTERVAL_MS) {
      segmentationBusy = true;
      segmentationLastSentAt = nowMs;
      segmenter.send({ image: blurSourceVideo }).catch(() => {
        segmentationBusy = false;
      });
    }

    blurContext.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
    if (normalizedMode === "image" && backgroundImage) {
      drawImageCover(blurContext, backgroundImage, blurCanvas.width, blurCanvas.height);
    } else if (normalizedMode === "blur") {
      blurContext.filter = "blur(8px)";
      blurContext.drawImage(blurSourceVideo, 0, 0, blurCanvas.width, blurCanvas.height);
      blurContext.filter = "none";
    } else {
      blurContext.drawImage(blurSourceVideo, 0, 0, blurCanvas.width, blurCanvas.height);
    }

    if (segmentationMaskFrame && blurForegroundContext) {
      // Remove subject from processed background.
      blurContext.globalCompositeOperation = "destination-out";
      blurContext.drawImage(segmentationMaskFrame, 0, 0, blurCanvas.width, blurCanvas.height);
      blurContext.globalCompositeOperation = "source-over";

      // Build a sharp foreground (subject only) and place on top.
      blurForegroundContext.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
      blurForegroundContext.globalCompositeOperation = "source-over";
      blurForegroundContext.drawImage(blurSourceVideo, 0, 0, blurCanvas.width, blurCanvas.height);
      blurForegroundContext.globalCompositeOperation = "destination-in";
      blurForegroundContext.drawImage(segmentationMaskFrame, 0, 0, blurCanvas.width, blurCanvas.height);
      blurForegroundContext.globalCompositeOperation = "source-over";
      blurContext.drawImage(blurForegroundCanvas, 0, 0, blurCanvas.width, blurCanvas.height);
    } else {
      blurContext.drawImage(blurSourceVideo, 0, 0, blurCanvas.width, blurCanvas.height);
    }

    blurFrameId = requestAnimationFrame(draw);
  };
  draw();

  blurCameraStream = blurCanvas.captureStream(24);
  return blurCameraStream;
}

async function applyCameraOutputStream() {
  const backgroundMode = getCameraBackgroundMode();
  const previousTrack = cameraStream ? cameraStream.getVideoTracks()[0] || null : null;
  const nextStream = backgroundMode !== "off" && rawCameraStream
    ? (await createProcessedCameraStream(rawCameraStream, backgroundMode)) || rawCameraStream
    : rawCameraStream;
  cameraStream = nextStream;
  const nextTrack = cameraStream ? cameraStream.getVideoTracks()[0] || null : null;
  if (
    useTwilioVideoRoom() &&
    twilioVideoRoom &&
    previousTrack &&
    nextTrack &&
    String(previousTrack.id || "") !== String(nextTrack.id || "")
  ) {
    forceUnpublishTwilioLocalVideo();
  }
  cameraVideo.srcObject = cameraStream;
  await cameraVideo.play().catch(() => {
    // Ignore autoplay restrictions.
  });
  syncOnAirVideoViews();
  addLocalTracksToPeerConnection();
}

function stopCameraStream() {
  pushMediaDebug("camera.stop");
  stopCameraBlurPipeline();
  if (rawCameraStream) {
    rawCameraStream.getTracks().forEach((track) => track.stop());
    rawCameraStream = null;
  }
  cameraStream = null;
  cameraVideo.srcObject = null;
  onAirCameraVideo.srcObject = null;
  cameraVideo.classList.remove("camera-muted");
  onAirCameraVideo.classList.remove("camera-muted");
  if (cameraEnabledToggle) {
    cameraEnabledToggle.checked = false;
  }
  updateOnAirCameraPauseUI();
  addLocalTracksToPeerConnection();
  if (peerConnection && activePeerUsername) {
    renegotiatePeerConnection("Camera off. Updating video room...").catch(() => {
      // Ignore renegotiation races during camera shutdown.
    });
  }
}

function stopMicMeter() {
  if (micMeterFrameId) {
    cancelAnimationFrame(micMeterFrameId);
    micMeterFrameId = null;
  }
  micMeterFill.style.width = "0%";
}

function formatRecordingTimer(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  }
  return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function getAudioOnlyRecordingMimeType() {
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus"
  ];
  for (const type of candidates) {
    if (window.MediaRecorder && window.MediaRecorder.isTypeSupported(type)) {
      return type;
    }
  }
  return "";
}

function clearRecordingProcessingTimer() {
  if (recordingProcessingTimerId) {
    clearTimeout(recordingProcessingTimerId);
    recordingProcessingTimerId = null;
  }
}

function setRecordingWorkflowState(nextState) {
  recordingWorkflowState = nextState;
  const pillStateMap = {
    ready: workflowReadyPill,
    countdown: workflowCountdownPill,
    recording: workflowRecordingPill,
    processing: workflowProcessingPill,
    review: workflowReviewPill,
    export: workflowExportPill
  };
  Object.entries(pillStateMap).forEach(([state, element]) => {
    if (!element) {
      return;
    }
    element.classList.toggle("active", state === nextState);
  });
}

function setOnAirCountdownPopoutOpen(open) {
  if (!onAirCountdownPopout) {
    return;
  }
  onAirCountdownPopout.classList.toggle("hidden", !open);
  onAirCountdownPopout.setAttribute("aria-hidden", open ? "false" : "true");
}

function setOnAirCountdownValue(value) {
  const safeValue = Math.max(1, Number(value || 0));
  if (onAirCountdownNumber) {
    onAirCountdownNumber.textContent = String(safeValue);
  }
  if (onAirCountdownNote) {
    onAirCountdownNote.textContent =
      safeValue === 1 ? "Stand by. Recording starts on the next beat." : "Stand by for record start.";
  }
}

async function runRecordingCountdown(seconds) {
  const totalSeconds = Math.max(1, Number(seconds || 0));
  setOnAirCountdownValue(totalSeconds);
  setOnAirCountdownPopoutOpen(true);
  for (let remaining = totalSeconds; remaining >= 1; remaining -= 1) {
    setOnAirCountdownValue(remaining);
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1000);
    });
  }
  setOnAirCountdownPopoutOpen(false);
}

function formatReviewAssetDuration(seconds) {
  const safeSeconds = Number(seconds || 0);
  if (!Number.isFinite(safeSeconds) || safeSeconds <= 0) {
    return "0s";
  }
  if (safeSeconds < 60) {
    return Math.round(safeSeconds) + "s";
  }
  const minutes = Math.floor(safeSeconds / 60);
  const remaining = Math.round(safeSeconds % 60);
  return minutes + "m " + String(remaining).padStart(2, "0") + "s";
}

function syncReviewMediaElementSource(element, nextUrl) {
  if (!element) {
    return;
  }
  const desired = String(nextUrl || "");
  const current = String(element.getAttribute("src") || "");
  if (current === desired) {
    return;
  }
  if (!desired) {
    element.pause?.();
    element.removeAttribute("src");
    element.load?.();
    return;
  }
  element.src = desired;
}

function probeMediaDurationFromUrl(url, kind) {
  return new Promise((resolve) => {
    if (!url) {
      resolve(0);
      return;
    }
    const element = document.createElement(kind === "video" ? "video" : "audio");
    element.preload = "metadata";
    element.muted = true;

    let settled = false;
    const finalize = (value) => {
      if (settled) {
        return;
      }
      settled = true;
      element.removeAttribute("src");
      element.load();
      resolve(Number.isFinite(value) && value > 0 ? value : 0);
    };

    element.onloadedmetadata = () => {
      finalize(Number(element.duration || 0));
    };
    element.onerror = () => {
      finalize(0);
    };
    element.src = url;
  });
}

function normalizeInfinityDurationReviewAudio() {
  if (!onAirReviewAudio) {
    return;
  }
  if (onAirReviewAudio.paused !== true) {
    return;
  }
  if (Number(onAirReviewAudio.currentTime || 0) !== 0) {
    return;
  }
  if (onAirReviewAudio.duration !== Infinity) {
    return;
  }

  const handleDurationProbe = () => {
    onAirReviewAudio.removeEventListener("timeupdate", handleDurationProbe);
    if (Number.isFinite(onAirReviewAudio.duration) && onAirReviewAudio.duration > 0 && onAirReviewAudio.duration !== Infinity) {
      recordingAudioDurationSeconds = Number(onAirReviewAudio.duration);
      setRecordingDiagnosticState({
        review: "Ready",
        reviewNote: "Audio " + formatReviewAssetDuration(recordingAudioDurationSeconds)
      });
      logReviewAudioState("duration_normalized");
    }
    try {
      onAirReviewAudio.currentTime = 0;
    } catch (error) {
      // Ignore seek reset failures.
    }
    onAirReviewAudio.pause();
  };

  onAirReviewAudio.addEventListener("timeupdate", handleDurationProbe, { once: true });
  try {
    onAirReviewAudio.currentTime = 1e101;
  } catch (error) {
    onAirReviewAudio.removeEventListener("timeupdate", handleDurationProbe);
  }
}

async function refreshRecordingAssetDurations() {
  const token = ++recordingAssetDurationProbeToken;
  const [videoDuration, audioDuration] = await Promise.all([
    probeMediaDurationFromUrl(recordingMediaUrl, "video"),
    probeMediaDurationFromUrl(recordingAudioUrl, "audio")
  ]);
  if (token !== recordingAssetDurationProbeToken) {
    return;
  }
  recordingMediaDurationSeconds = videoDuration;
  recordingAudioDurationSeconds = audioDuration;
  const reviewParts = [];
  if (recordingMediaUrl) {
    reviewParts.push("Video " + formatReviewAssetDuration(recordingMediaDurationSeconds));
  }
  if (recordingAudioUrl) {
    reviewParts.push("Audio " + formatReviewAssetDuration(recordingAudioDurationSeconds));
  }
  if (reviewParts.length) {
    setRecordingDiagnosticState({
      review: "Ready",
      reviewNote: reviewParts.join(" | ")
    });
  }
  syncReviewPanelUI();
}

function syncReviewPanelUI() {
  const hasVideo = !!(recordingMediaBlob && recordingMediaUrl);
  const hasAudio = !!(recordingAudioBlob && recordingAudioUrl);
  const hasReviewAsset = hasVideo || hasAudio;
  if (onAirReviewBadge) {
    if (recordingWorkflowState === "processing") {
      onAirReviewBadge.textContent = "Processing";
    } else if (recordingWorkflowState === "export") {
      onAirReviewBadge.textContent = "Export Ready";
    } else if (recordingWorkflowState === "review") {
      onAirReviewBadge.textContent = "Review Ready";
    } else if (hasReviewAsset) {
      onAirReviewBadge.textContent = "Draft Ready";
    } else {
      onAirReviewBadge.textContent = "No review yet";
    }
  }
  if (onAirReviewStatus && hasReviewAsset && recordingWorkflowState !== "processing") {
    const durationParts = [];
    if (hasVideo) {
      durationParts.push("Video " + formatReviewAssetDuration(recordingMediaDurationSeconds));
    }
    if (hasAudio) {
      durationParts.push("Audio " + formatReviewAssetDuration(recordingAudioDurationSeconds));
    }
    if (durationParts.length) {
      onAirReviewStatus.textContent = "Review assets ready. " + durationParts.join(" | ") + ".";
    }
  } else if (onAirReviewStatus && !hasReviewAsset) {
    onAirReviewStatus.textContent = "Stop recording to generate the review cut.";
  }
  if (onAirReviewVideo) {
    syncReviewMediaElementSource(onAirReviewVideo, hasVideo ? recordingMediaUrl : "");
  }
  if (onAirReviewAudio) {
    syncReviewMediaElementSource(onAirReviewAudio, hasAudio ? recordingAudioUrl : "");
  }
  ensureOnAirReviewTimeline();
  if (onAirReviewLaunchBtn) {
    onAirReviewLaunchBtn.disabled = !hasReviewAsset;
  }
  if (onAirReviewPlayer) {
    onAirReviewPlayer.classList.toggle("hidden", !hasReviewAsset);
  }
  if (onAirReviewPanel) {
    onAirReviewPanel.classList.toggle("is-empty", !hasReviewAsset);
  }
  if (onAirExportPanel) {
    onAirExportPanel.classList.toggle("hidden", recordingWorkflowState !== "export");
  }
  if (onAirExportVideoBtn) {
    onAirExportVideoBtn.disabled = !hasVideo;
  }
  if (onAirExportAudioBtn) {
    onAirExportAudioBtn.disabled = !hasAudio;
  }
  if (!hasReviewAsset) {
    onAirReviewWaveToken = 0;
    onAirReviewWaveDuration = 0;
    onAirReviewWavePeaks = [];
    setOnAirReviewModalOpen(false);
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "No review file loaded yet.";
    }
  }
  updateOnAirReviewTime();
  updateOnAirReviewPlayState();
  updateOnAirReviewMuteState();
}

function setOnAirReviewModalOpen(open) {
  onAirReviewModalOpen = !!open;
  if (onAirReviewModal) {
    onAirReviewModal.classList.toggle("hidden", !onAirReviewModalOpen);
    onAirReviewModal.setAttribute("aria-hidden", onAirReviewModalOpen ? "false" : "true");
  }
  if (!onAirReviewModalOpen) {
    pauseOnAirReviewMedia();
  }
  if (onAirReviewModalOpen) {
    refreshOnAirReviewWaveform().catch(() => {
      // Keep review playback usable even if waveform analysis fails.
    });
  }
  queueOnAirReviewWaveRender();
}

function fillRoundedRect(context, x, y, width, height, radius) {
  if (!context) {
    return;
  }
  if (typeof context.roundRect === "function") {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    context.fill();
    return;
  }
  const safeRadius = Math.max(0, Math.min(Number(radius) || 0, Math.min(width, height) / 2));
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
  context.fill();
}

function strokeRoundedRect(context, x, y, width, height, radius) {
  if (!context) {
    return;
  }
  if (typeof context.roundRect === "function") {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    context.stroke();
    return;
  }
  const safeRadius = Math.max(0, Math.min(Number(radius) || 0, Math.min(width, height) / 2));
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
  context.stroke();
}

function getPreferredOnAirReviewKind() {
  if (onAirReviewAudio && recordingAudioUrl) {
    return "audio";
  }
  if (onAirReviewVideo && recordingMediaUrl) {
    return "video";
  }
  return "";
}

function clampOnAirReviewZoomLevel(nextLevel) {
  return Math.max(1, Math.min(12, Number(nextLevel) || 1));
}

function getOnAirReviewAssetDuration() {
  return Math.max(Number(onAirReviewWaveDuration || 0), Number(recordingAudioDurationSeconds || 0), Number(recordingMediaDurationSeconds || 0), 0);
}

function getOnAirReviewTimelineDuration() {
  return Math.max(0, Number(onAirReviewEditedDuration || 0) || getOnAirReviewAssetDuration());
}

function getOnAirReviewTimelineSourceToken() {
  return [
    String(onAirActiveReviewMedia === onAirReviewVideo ? "video" : onAirActiveReviewMedia === onAirReviewAudio ? "audio" : ""),
    String(recordingMediaUrl || ""),
    String(recordingAudioUrl || ""),
    String(getOnAirReviewAssetDuration() || 0)
  ].join("|");
}

function recalculateOnAirReviewTimelineDuration() {
  onAirReviewEditedDuration = onAirReviewTimelineSegments.reduce((maxEnd, segment) => {
    const duration = Math.max(0, Number(segment && segment.duration) || 0);
    const start = Math.max(0, Number(segment && segment.timelineStart) || 0);
    return Math.max(maxEnd, start + duration);
  }, 0);
}

function buildDefaultOnAirReviewTimeline(durationSeconds) {
  const duration = Math.max(0, Number(durationSeconds) || 0);
  onAirReviewTimelineSegments = duration > 0
    ? [{ type: "media", sourceStart: 0, sourceEnd: duration, duration, timelineStart: 0 }]
    : [];
  onAirReviewGainAdjustments = [];
  onAirReviewOverlapMode = "blend";
  onAirReviewUndoStack = [];
  onAirReviewRedoStack = [];
  recalculateOnAirReviewTimelineDuration();
  onAirReviewEditedTime = Math.max(0, Math.min(onAirReviewEditedTime, onAirReviewEditedDuration));
  updateOnAirReviewOverlapModeUi();
}

function getOnAirReviewNormalizedSourceBounds(clipLike) {
  const sourceStart = Math.max(0, Number(clipLike && clipLike.sourceStart) || 0);
  const duration = Math.max(0, Number(clipLike && clipLike.duration) || 0);
  const rawSourceEnd = Math.max(0, Number(clipLike && clipLike.sourceEnd) || 0);
  const sourceEnd = rawSourceEnd > sourceStart + 0.0005
    ? rawSourceEnd
    : sourceStart + duration;
  return {
    sourceStart,
    sourceEnd: Math.max(sourceStart, sourceEnd)
  };
}

function getOnAirReviewMediaClips() {
  return onAirReviewTimelineSegments
    .filter((segment) => segment && segment.type === "media" && Math.max(0, Number(segment.duration) || 0) > 0.0005)
    .map((segment, index) => {
      const start = Math.max(0, Number(segment.timelineStart) || 0);
      const duration = Math.max(0, Number(segment.duration) || 0);
      const sourceBounds = getOnAirReviewNormalizedSourceBounds(segment);
      return {
        index,
        type: "media",
        start,
        duration,
        end: start + duration,
        sourceStart: sourceBounds.sourceStart,
        sourceEnd: sourceBounds.sourceEnd,
        segment
      };
    })
    .sort((left, right) => left.start - right.start || left.index - right.index);
}

function getOnAirReviewTimelineEntries() {
  const entries = [];
  let cursor = 0;
  getOnAirReviewMediaClips().forEach((clip) => {
    if (clip.start > cursor + 0.0005) {
      entries.push({
        index: -1,
        segment: { type: "gap", duration: clip.start - cursor, timelineStart: cursor },
        start: cursor,
        end: clip.start,
        duration: clip.start - cursor,
        type: "gap"
      });
    }
    entries.push({
      index: clip.index,
      segment: clip.segment,
      start: clip.start,
      end: clip.end,
      duration: clip.duration,
      type: "media"
    });
    cursor = Math.max(cursor, clip.end);
  });
  const totalDuration = getOnAirReviewTimelineDuration();
  if (totalDuration > cursor + 0.0005) {
    entries.push({
      index: -1,
      segment: { type: "gap", duration: totalDuration - cursor, timelineStart: cursor },
      start: cursor,
      end: totalDuration,
      duration: totalDuration - cursor,
      type: "gap"
    });
  }
  return entries;
}

function rebuildOnAirReviewTimelineFromMediaClips(clips, totalDuration) {
  const safeTotalDuration = Math.max(0, Number(totalDuration) || 0);
  onAirReviewTimelineSegments = clips
    .map((clip) => {
      const start = Math.max(0, Math.min(safeTotalDuration, Number(clip && clip.start) || 0));
      const duration = Math.max(0, Number(clip && clip.duration) || 0);
      const end = Math.max(start, Math.min(safeTotalDuration, start + duration));
      if (end - start <= 0.0005) {
        return null;
      }
      const sourceBounds = getOnAirReviewNormalizedSourceBounds({
        sourceStart: clip && clip.sourceStart,
        sourceEnd: clip && clip.sourceEnd,
        duration: end - start
      });
      return {
        type: "media",
        sourceStart: sourceBounds.sourceStart,
        sourceEnd: sourceBounds.sourceEnd,
        duration: end - start,
        timelineStart: start
      };
    })
    .filter(Boolean)
    .sort((left, right) => (left.timelineStart - right.timelineStart) || (left.sourceStart - right.sourceStart));
  recalculateOnAirReviewTimelineDuration();
}

function cloneOnAirReviewTimelineSegments(segments) {
  return Array.isArray(segments)
    ? segments.map((segment) => ({
      type: "media",
      sourceStart: Math.max(0, Number(segment && segment.sourceStart) || 0),
      sourceEnd: Math.max(0, Number(segment && segment.sourceEnd) || 0),
      duration: Math.max(0, Number(segment && segment.duration) || 0),
      timelineStart: Math.max(0, Number(segment && segment.timelineStart) || 0)
    }))
    : [];
}

function cloneOnAirReviewGainAdjustments(adjustments) {
  return Array.isArray(adjustments)
    ? adjustments.map((adjustment) => ({
      start: Math.max(0, Number(adjustment && adjustment.start) || 0),
      end: Math.max(0, Number(adjustment && adjustment.end) || 0),
      db: clampOnAirReviewGainDb(adjustment && adjustment.db)
    }))
    : [];
}

function captureOnAirReviewHistorySnapshot(label) {
  return {
    label: String(label || ""),
    timelineSegments: cloneOnAirReviewTimelineSegments(onAirReviewTimelineSegments),
    gainAdjustments: cloneOnAirReviewGainAdjustments(onAirReviewGainAdjustments),
    overlapMode: String(onAirReviewOverlapMode || "blend"),
    editedTime: Math.max(0, Number(onAirReviewEditedTime) || 0),
    selectionStart: Math.max(0, Number(onAirReviewSelectionStart) || 0),
    selectionEnd: Math.max(0, Number(onAirReviewSelectionEnd) || 0),
    selectionActive: !!onAirReviewSelectionActive,
    selectMode: !!onAirReviewSelectMode,
    zoomLevel: clampOnAirReviewZoomLevel(onAirReviewZoomLevel),
    viewportFocusTime: Math.max(0, Number(onAirReviewViewportFocusTime) || 0),
    muted: !!onAirReviewMuted
  };
}

function applyOnAirReviewHistorySnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    return;
  }
  onAirReviewHistorySuspendDepth += 1;
  try {
    onAirReviewTimelineSegments = cloneOnAirReviewTimelineSegments(snapshot.timelineSegments);
    onAirReviewGainAdjustments = cloneOnAirReviewGainAdjustments(snapshot.gainAdjustments);
    normalizeOnAirReviewGainAdjustments();
    recalculateOnAirReviewTimelineDuration();
    onAirReviewOverlapMode = normalizeOnAirReviewOverlapMode(snapshot.overlapMode);
    onAirReviewEditedTime = Math.max(0, Math.min(getOnAirReviewTimelineDuration(), Number(snapshot.editedTime) || 0));
    onAirReviewZoomLevel = clampOnAirReviewZoomLevel(snapshot.zoomLevel);
    onAirReviewMuted = !!snapshot.muted;
    onAirReviewMoveMode = false;
    onAirReviewClipDragState = null;
    setOnAirReviewSelectMode(!!snapshot.selectMode);
    if (snapshot.selectionActive) {
      setOnAirReviewSelection(snapshot.selectionStart, snapshot.selectionEnd);
    } else {
      clearOnAirReviewSelection();
    }
    setOnAirReviewViewportFocusTime(snapshot.viewportFocusTime || onAirReviewEditedTime);
    seekOnAirReviewEditedTime(onAirReviewEditedTime);
    updateOnAirReviewMuteState();
    updateOnAirReviewOverlapModeUi();
    updateOnAirReviewZoomControls();
    updateOnAirReviewSelectionControls();
    applyOnAirReviewPlaybackGain(true);
    queueOnAirReviewWaveRender();
  } finally {
    onAirReviewHistorySuspendDepth = Math.max(0, onAirReviewHistorySuspendDepth - 1);
  }
}

function updateOnAirReviewHistoryControls() {
  if (onAirReviewUndoBtn) {
    onAirReviewUndoBtn.disabled = !onAirReviewUndoStack.length;
  }
  if (onAirReviewRedoBtn) {
    onAirReviewRedoBtn.disabled = !onAirReviewRedoStack.length;
  }
}

function pushOnAirReviewHistorySnapshot(label) {
  if (onAirReviewHistorySuspendDepth > 0) {
    return;
  }
  const snapshot = captureOnAirReviewHistorySnapshot(label);
  onAirReviewUndoStack.push(snapshot);
  if (onAirReviewUndoStack.length > 40) {
    onAirReviewUndoStack.shift();
  }
  onAirReviewRedoStack = [];
  updateOnAirReviewHistoryControls();
}

function restoreOnAirReviewHistory(targetStack, oppositeStack) {
  if (!targetStack.length) {
    return null;
  }
  const current = captureOnAirReviewHistorySnapshot("");
  const snapshot = targetStack.pop();
  oppositeStack.push(current);
  applyOnAirReviewHistorySnapshot(snapshot);
  updateOnAirReviewHistoryControls();
  return snapshot;
}

function undoOnAirReviewEdit() {
  return restoreOnAirReviewHistory(onAirReviewUndoStack, onAirReviewRedoStack);
}

function redoOnAirReviewEdit() {
  return restoreOnAirReviewHistory(onAirReviewRedoStack, onAirReviewUndoStack);
}

function getOnAirReviewSelectionDuration() {
  return hasOnAirReviewSelection() ? Math.max(0, onAirReviewSelectionEnd - onAirReviewSelectionStart) : 0;
}

function clampOnAirReviewGainDb(dbValue) {
  return Math.max(-24, Math.min(18, Number(dbValue) || 0));
}

function dbToGainMultiplier(dbValue) {
  return Math.pow(10, clampOnAirReviewGainDb(dbValue) / 20);
}

function getOnAirReviewGainDbAt(seconds) {
  const target = Math.max(0, Number(seconds) || 0);
  return clampOnAirReviewGainDb(
    onAirReviewGainAdjustments.reduce((total, adjustment) => {
      if (!adjustment) {
        return total;
      }
      const start = Math.max(0, Number(adjustment.start) || 0);
      const end = Math.max(start, Number(adjustment.end) || start);
      if (target >= start && target <= end) {
        return total + (Number(adjustment.db) || 0);
      }
      return total;
    }, 0)
  );
}

function getOnAirReviewSelectionAverageGainDb() {
  if (!hasOnAirReviewSelection()) {
    return getOnAirReviewGainDbAt(onAirReviewEditedTime);
  }
  const start = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const end = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const sampleCount = Math.max(1, Math.min(12, Math.round((end - start) / 3) || 1));
  let total = 0;
  for (let index = 0; index < sampleCount; index += 1) {
    const progress = sampleCount === 1 ? 0.5 : index / (sampleCount - 1);
    total += getOnAirReviewGainDbAt(start + (end - start) * progress);
  }
  return clampOnAirReviewGainDb(total / sampleCount);
}

function formatOnAirReviewGainDb(dbValue) {
  const rounded = Math.round(clampOnAirReviewGainDb(dbValue) * 10) / 10;
  if (Math.abs(rounded) < 0.05) {
    return "0 dB";
  }
  return (rounded > 0 ? "+" : "") + rounded.toFixed(1).replace(/\.0$/, "") + " dB";
}

function normalizeOnAirReviewGainAdjustments() {
  const normalized = [];
  onAirReviewGainAdjustments
    .slice()
    .sort((left, right) => (Number(left && left.start) || 0) - (Number(right && right.start) || 0))
    .forEach((adjustment) => {
      const start = Math.max(0, Number(adjustment && adjustment.start) || 0);
      const end = Math.max(start, Number(adjustment && adjustment.end) || start);
      const db = clampOnAirReviewGainDb(adjustment && adjustment.db);
      if (end - start <= 0.01 || Math.abs(db) < 0.05) {
        return;
      }
      const previous = normalized[normalized.length - 1];
      if (previous && Math.abs(previous.db - db) < 0.05 && Math.abs(previous.end - start) < 0.02) {
        previous.end = end;
        return;
      }
      normalized.push({ start, end, db });
    });
  onAirReviewGainAdjustments = normalized;
}

function shiftOnAirReviewGainAdjustmentsAfterDelete(selectionStart, selectionEnd) {
  const removedDuration = Math.max(0, Number(selectionEnd) - Number(selectionStart));
  if (!(removedDuration > 0) || !onAirReviewGainAdjustments.length) {
    return;
  }
  const nextAdjustments = [];
  onAirReviewGainAdjustments.forEach((adjustment) => {
    const start = Math.max(0, Number(adjustment && adjustment.start) || 0);
    const end = Math.max(start, Number(adjustment && adjustment.end) || start);
    const db = clampOnAirReviewGainDb(adjustment && adjustment.db);
    if (end <= selectionStart) {
      nextAdjustments.push({ start, end, db });
      return;
    }
    if (start >= selectionEnd) {
      nextAdjustments.push({ start: start - removedDuration, end: end - removedDuration, db });
      return;
    }
    if (start < selectionStart) {
      nextAdjustments.push({ start, end: selectionStart, db });
    }
    if (end > selectionEnd) {
      nextAdjustments.push({
        start: selectionStart,
        end: selectionStart + (end - selectionEnd),
        db
      });
    }
  });
  onAirReviewGainAdjustments = nextAdjustments;
  normalizeOnAirReviewGainAdjustments();
}

function removeOnAirReviewGainAdjustmentsInRange(selectionStart, selectionEnd) {
  const safeStart = Math.max(0, Number(selectionStart) || 0);
  const safeEnd = Math.max(safeStart, Number(selectionEnd) || safeStart);
  const nextAdjustments = [];
  onAirReviewGainAdjustments.forEach((adjustment) => {
    const start = Math.max(0, Number(adjustment && adjustment.start) || 0);
    const end = Math.max(start, Number(adjustment && adjustment.end) || start);
    const db = clampOnAirReviewGainDb(adjustment && adjustment.db);
    if (end <= safeStart || start >= safeEnd) {
      nextAdjustments.push({ start, end, db });
      return;
    }
    if (start < safeStart) {
      nextAdjustments.push({ start, end: safeStart, db });
    }
    if (end > safeEnd) {
      nextAdjustments.push({ start: safeEnd, end, db });
    }
  });
  onAirReviewGainAdjustments = nextAdjustments;
  normalizeOnAirReviewGainAdjustments();
}

function shiftOnAirReviewGainAdjustmentsForClipMove(sourceStart, sourceEnd, deltaSeconds) {
  const safeStart = Math.max(0, Number(sourceStart) || 0);
  const safeEnd = Math.max(safeStart, Number(sourceEnd) || safeStart);
  const delta = Number(deltaSeconds) || 0;
  if (Math.abs(delta) < 0.0005 || safeEnd - safeStart <= 0.0005) {
    return;
  }
  const nextAdjustments = [];
  onAirReviewGainAdjustments.forEach((adjustment) => {
    const start = Math.max(0, Number(adjustment && adjustment.start) || 0);
    const end = Math.max(start, Number(adjustment && adjustment.end) || start);
    const db = clampOnAirReviewGainDb(adjustment && adjustment.db);
    if (end <= safeStart || start >= safeEnd) {
      nextAdjustments.push({ start, end, db });
      return;
    }
    if (start < safeStart) {
      nextAdjustments.push({ start, end: safeStart, db });
    }
    const movedStart = Math.max(safeStart, start) + delta;
    const movedEnd = Math.min(safeEnd, end) + delta;
    nextAdjustments.push({ start: movedStart, end: movedEnd, db });
    if (end > safeEnd) {
      nextAdjustments.push({ start: safeEnd, end, db });
    }
  });
  onAirReviewGainAdjustments = nextAdjustments;
  normalizeOnAirReviewGainAdjustments();
}

function applyOnAirReviewSelectionGain(deltaDb) {
  if (!hasOnAirReviewSelection()) {
    return false;
  }
  const start = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const end = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  if (end - start <= 0.01) {
    return false;
  }
  pushOnAirReviewHistorySnapshot("gain");
  onAirReviewGainAdjustments.push({
    start,
    end,
    db: clampOnAirReviewGainDb(deltaDb)
  });
  normalizeOnAirReviewGainAdjustments();
  updateOnAirReviewSelectionControls();
  applyOnAirReviewPlaybackGain();
  if (canUseOnAirReviewClipPlayback() && isOnAirReviewPlaying()) {
    const activeLoopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
    scheduleOnAirReviewClipPlayback(onAirReviewEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
    onAirReviewPlaybackAnchorAt = performance.now();
    onAirReviewPlaybackAnchorEditedTime = onAirReviewEditedTime;
  }
  queueOnAirReviewWaveRender();
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent =
      "Selection gain updated to " + formatOnAirReviewGainDb(getOnAirReviewSelectionAverageGainDb()) + ".";
  }
  return true;
}

function getOnAirReviewMixedPeakForRange(startSeconds, endSeconds) {
  const buffer = onAirReviewDecodedAudioBuffer;
  if (!buffer || !buffer.length || !(buffer.sampleRate > 0)) {
    return null;
  }
  const start = Math.max(0, Number(startSeconds) || 0);
  const end = Math.max(start, Number(endSeconds) || start);
  const duration = end - start;
  if (duration <= 0.01) {
    return null;
  }
  const clips = getOnAirReviewMediaClips().filter((clip) => clip.end > start && clip.start < end);
  if (!clips.length) {
    return null;
  }
  const channels = [];
  for (let channel = 0; channel < Math.max(1, buffer.numberOfChannels); channel += 1) {
    channels.push(buffer.getChannelData(channel));
  }
  const sampleCount = Math.max(900, Math.min(12000, Math.round(duration * 2200)));
  let peak = 0;
  for (let index = 0; index < sampleCount; index += 1) {
    const progress = sampleCount === 1 ? 0 : index / (sampleCount - 1);
    const editedTime = start + duration * progress;
    let mixedSample = 0;
    clips.forEach((clip) => {
      if (editedTime < clip.start || editedTime > clip.end) {
        return;
      }
      const sourceTime = clip.sourceStart + (editedTime - clip.start);
      const sampleIndex = Math.max(0, Math.min(buffer.length - 1, Math.round(sourceTime * buffer.sampleRate)));
      let clipSample = 0;
      channels.forEach((data) => {
        clipSample += Number(data[sampleIndex] || 0);
      });
      mixedSample += clipSample / Math.max(1, channels.length);
    });
    const gainedSample = mixedSample * dbToGainMultiplier(getOnAirReviewGainDbAt(editedTime));
    peak = Math.max(peak, Math.abs(gainedSample));
  }
  return peak;
}

function normalizeOnAirReviewSelectionGain() {
  if (!hasOnAirReviewSelection()) {
    return false;
  }
  const start = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const end = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  if (end - start <= 0.01) {
    return false;
  }
  const peak = getOnAirReviewMixedPeakForRange(start, end);
  if (!(peak > 0.00001)) {
    return false;
  }
  const targetPeakDb = -3;
  const currentPeakDb = 20 * Math.log10(Math.max(peak, 0.000001));
  const normalizeDeltaDb = clampOnAirReviewGainDb(targetPeakDb - currentPeakDb);
  if (Math.abs(normalizeDeltaDb) < 0.1) {
    return false;
  }
  pushOnAirReviewHistorySnapshot("gain-normalize");
  onAirReviewGainAdjustments.push({
    start,
    end,
    db: normalizeDeltaDb
  });
  normalizeOnAirReviewGainAdjustments();
  updateOnAirReviewSelectionControls();
  applyOnAirReviewPlaybackGain(true);
  if (canUseOnAirReviewClipPlayback() && isOnAirReviewPlaying()) {
    const activeLoopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
    scheduleOnAirReviewClipPlayback(onAirReviewEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
    onAirReviewPlaybackAnchorAt = performance.now();
    onAirReviewPlaybackAnchorEditedTime = onAirReviewEditedTime;
  }
  queueOnAirReviewWaveRender();
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent =
      "Selection normalized to a peak target of -3 dB using " + formatOnAirReviewGainDb(normalizeDeltaDb) + ".";
  }
  return true;
}

function resetOnAirReviewSelectionGain() {
  if (!hasOnAirReviewSelection()) {
    return false;
  }
  const start = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const end = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  if (end - start <= 0.01) {
    return false;
  }
  const beforeCount = onAirReviewGainAdjustments.length;
  pushOnAirReviewHistorySnapshot("gain-reset");
  removeOnAirReviewGainAdjustmentsInRange(start, end);
  if (onAirReviewGainAdjustments.length === beforeCount) {
    if (onAirReviewUndoStack.length) {
      const lastSnapshot = onAirReviewUndoStack[onAirReviewUndoStack.length - 1];
      if (lastSnapshot && lastSnapshot.label === "gain-reset") {
        onAirReviewUndoStack.pop();
        updateOnAirReviewHistoryControls();
      }
    }
    return false;
  }
  updateOnAirReviewSelectionControls();
  applyOnAirReviewPlaybackGain(true);
  if (canUseOnAirReviewClipPlayback() && isOnAirReviewPlaying()) {
    const activeLoopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
    scheduleOnAirReviewClipPlayback(onAirReviewEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
    onAirReviewPlaybackAnchorAt = performance.now();
    onAirReviewPlaybackAnchorEditedTime = onAirReviewEditedTime;
  }
  queueOnAirReviewWaveRender();
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Selection gain reset to 0 dB.";
  }
  return true;
}

function ensureOnAirReviewTimeline() {
  const token = getOnAirReviewTimelineSourceToken();
  const duration = getOnAirReviewAssetDuration();
  if (!token || !(duration > 0)) {
    onAirReviewTimelineSourceToken = "";
    onAirReviewTimelineSegments = [];
    onAirReviewEditedDuration = 0;
    onAirReviewEditedTime = 0;
    return;
  }
  if (onAirReviewTimelineSourceToken !== token || !onAirReviewTimelineSegments.length) {
    onAirReviewTimelineSourceToken = token;
    buildDefaultOnAirReviewTimeline(duration);
  }
}

function getOnAirReviewTimelinePosition(seconds) {
  const totalDuration = getOnAirReviewTimelineDuration();
  const target = Math.max(0, Math.min(totalDuration, Number(seconds) || 0));
  const clips = getOnAirReviewMediaClips();
  let activeClip = null;
  clips.forEach((clip) => {
    if (target >= clip.start && target <= clip.end) {
      if (!activeClip || clip.start >= activeClip.start) {
        activeClip = clip;
      }
    }
  });
  if (activeClip) {
    const offset = Math.max(0, Math.min(activeClip.duration, target - activeClip.start));
    return {
      segment: activeClip.segment,
      offset,
      editedTime: target,
      sourceTime: activeClip.sourceStart + offset
    };
  }
  for (const entry of getOnAirReviewTimelineEntries()) {
    if (target >= entry.start && target <= entry.end) {
      return {
        segment: entry.segment,
        offset: Math.max(0, Math.min(entry.duration, target - entry.start)),
        editedTime: target,
        sourceTime: 0
      };
    }
  }
  return null;
}

function seekOnAirReviewEditedTime(seconds, options) {
  ensureOnAirReviewTimeline();
  const config = options && typeof options === "object" ? options : {};
  const totalDuration = getOnAirReviewTimelineDuration();
  onAirReviewEditedTime = Math.max(0, Math.min(totalDuration, Number(seconds) || 0));
  if (!onAirReviewWavePointerDown || !onAirReviewSelectMode) {
    setOnAirReviewViewportFocusTime(onAirReviewEditedTime);
  }
  const media = getActiveOnAirReviewMediaElement();
  const position = getOnAirReviewTimelinePosition(onAirReviewEditedTime);
  const activeLoopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
  if (canUseOnAirReviewClipPlayback()) {
    if (media) {
      try {
        media.pause();
      } catch (error) {
        // Ignore pause races.
      }
      if (position && position.segment && position.segment.type === "media") {
        try {
          media.currentTime = Math.max(0, Number(position.sourceTime) || 0);
        } catch (error) {
          // Ignore seek races.
        }
      }
    }
    if (isOnAirReviewPlaying()) {
      scheduleOnAirReviewClipPlayback(onAirReviewEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
    } else {
      stopOnAirReviewClipPlayback();
    }
  } else if (media && position && position.segment && position.segment.type === "media") {
    const targetSourceTime = Math.max(0, Number(position.sourceTime) || 0);
    if (Math.abs(Number(media.currentTime || 0) - targetSourceTime) > 0.06) {
      try {
        media.currentTime = targetSourceTime;
      } catch (error) {
        // Ignore seek races.
      }
    }
    if (config.play) {
      media.play().catch(() => {});
    } else if (!isOnAirReviewPlaying()) {
      media.pause();
    }
  } else if (media) {
    media.pause();
  }
  if (isOnAirReviewPlaying()) {
    onAirReviewPlaybackAnchorAt = performance.now();
    onAirReviewPlaybackAnchorEditedTime = onAirReviewEditedTime;
  }
  updateOnAirReviewTime();
  queueOnAirReviewWaveRender();
}

function isOnAirReviewPlaying() {
  return !!onAirReviewPlaybackFrameId;
}

function getOnAirReviewLoopBounds() {
  if (!hasOnAirReviewSelection()) {
    return null;
  }
  const start = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const end = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  if (end - start <= 0.05) {
    return null;
  }
  return { start, end };
}

function stopOnAirReviewPlaybackLoop() {
  if (onAirReviewPlaybackFrameId) {
    cancelAnimationFrame(onAirReviewPlaybackFrameId);
    onAirReviewPlaybackFrameId = 0;
  }
}

function tickOnAirReviewPlayback() {
  onAirReviewPlaybackFrameId = 0;
  if (!onAirReviewModalOpen) {
    return;
  }
  const media = getActiveOnAirReviewMediaElement();
  const totalDuration = getOnAirReviewTimelineDuration();
  const loopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
  const elapsed = Math.max(0, (performance.now() - onAirReviewPlaybackAnchorAt) / 1000);
  let nextEditedTime = Math.max(0, Math.min(totalDuration, onAirReviewPlaybackAnchorEditedTime + elapsed));
  if (loopBounds) {
    if (nextEditedTime >= loopBounds.end - 0.01) {
      nextEditedTime = loopBounds.start;
      if (canUseOnAirReviewClipPlayback()) {
        onAirReviewEditedTime = loopBounds.start;
        if (!onAirReviewWavePointerDown || !onAirReviewSelectMode) {
          setOnAirReviewViewportFocusTime(onAirReviewEditedTime);
        }
        stopOnAirReviewClipPlayback();
        scheduleOnAirReviewClipPlayback(loopBounds.start, loopBounds.end);
        updateOnAirReviewTime();
        queueOnAirReviewWaveRender();
      } else {
        seekOnAirReviewEditedTime(loopBounds.start, { play: true });
      }
      onAirReviewPlaybackAnchorAt = performance.now();
      onAirReviewPlaybackAnchorEditedTime = loopBounds.start;
      onAirReviewPlaybackFrameId = requestAnimationFrame(tickOnAirReviewPlayback);
      return;
    }
  }
  if (canUseOnAirReviewClipPlayback()) {
    onAirReviewEditedTime = nextEditedTime;
    if (!onAirReviewWavePointerDown || !onAirReviewSelectMode) {
      setOnAirReviewViewportFocusTime(onAirReviewEditedTime);
    }
    updateOnAirReviewTime();
    queueOnAirReviewWaveRender();
  } else {
    seekOnAirReviewEditedTime(nextEditedTime, { play: true });
  }
  if (nextEditedTime >= totalDuration - 0.01) {
    stopOnAirReviewPlaybackLoop();
    stopOnAirReviewClipPlayback();
    if (media) {
      media.pause();
    }
    updateOnAirReviewPlayState();
    return;
  }
  onAirReviewPlaybackFrameId = requestAnimationFrame(tickOnAirReviewPlayback);
}

async function startOnAirReviewPlaybackLoop() {
  const media = getActiveOnAirReviewMediaElement();
  if (!media) {
    return;
  }
  await resumeOnAirReviewAudioGraph().catch(() => {});
  ensureOnAirReviewTimeline();
  stopOnAirReviewPlaybackLoop();
  const loopBounds = getOnAirReviewLoopBounds();
  onAirReviewLoopSelectionActive = !!loopBounds;
  const totalDuration = getOnAirReviewTimelineDuration();
  let playbackStart = onAirReviewEditedTime;
  if (loopBounds) {
    playbackStart = onAirReviewEditedTime >= loopBounds.start && onAirReviewEditedTime <= loopBounds.end
      ? onAirReviewEditedTime
      : loopBounds.start;
  } else if (totalDuration > 0 && onAirReviewEditedTime >= totalDuration - 0.01) {
    playbackStart = 0;
  }
  onAirReviewPlaybackAnchorAt = performance.now();
  onAirReviewPlaybackAnchorEditedTime = playbackStart;
  if (canUseOnAirReviewClipPlayback()) {
    try {
      media.pause();
    } catch (error) {
      // Ignore pause races.
    }
    seekOnAirReviewEditedTime(playbackStart);
    scheduleOnAirReviewClipPlayback(playbackStart, loopBounds ? loopBounds.end : undefined);
  } else {
    const position = getOnAirReviewTimelinePosition(playbackStart);
    if (position && position.segment && position.segment.type === "media") {
      seekOnAirReviewEditedTime(playbackStart, { play: true });
    } else {
      media.pause();
    }
  }
  onAirReviewPlaybackFrameId = requestAnimationFrame(tickOnAirReviewPlayback);
  updateOnAirReviewPlayState();
}

function pauseOnAirReviewPlaybackLoop() {
  stopOnAirReviewPlaybackLoop();
  onAirReviewLoopSelectionActive = false;
  stopOnAirReviewClipPlayback();
  const media = getActiveOnAirReviewMediaElement();
  if (media) {
    media.pause();
  }
  updateOnAirReviewPlayState();
}

function applyOnAirReviewDeleteToTimeline(mode) {
  if (!hasOnAirReviewSelection()) {
    return false;
  }
  ensureOnAirReviewTimeline();
  const selectionStart = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const selectionEnd = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const removedDuration = selectionEnd - selectionStart;
  if (selectionEnd - selectionStart <= 0.01) {
    return false;
  }
  pushOnAirReviewHistorySnapshot(mode === "ripple" ? "ripple" : "delete");
  const nextClips = [];
  getOnAirReviewMediaClips().forEach((clip) => {
    const clipStart = clip.start;
    const clipEnd = clip.end;
    if (selectionEnd <= clipStart || selectionStart >= clipEnd) {
      nextClips.push({
        start: mode === "ripple" && clipStart >= selectionEnd ? clipStart - removedDuration : clipStart,
        duration: clip.duration,
        sourceStart: clip.sourceStart,
        sourceEnd: clip.sourceEnd
      });
      return;
    }
    const overlapStart = Math.max(selectionStart, clipStart);
    const overlapEnd = Math.min(selectionEnd, clipEnd);
    const leading = overlapStart - clipStart;
    const trailing = clipEnd - overlapEnd;
    if (leading > 0) {
      nextClips.push({
        start: clipStart,
        duration: leading,
        sourceStart: clip.sourceStart,
        sourceEnd: clip.sourceStart + leading
      });
    }
    if (trailing > 0) {
      const nextStart = mode === "ripple" ? overlapStart : selectionEnd;
      nextClips.push({
        start: nextStart,
        duration: trailing,
        sourceStart: clip.sourceEnd - trailing,
        sourceEnd: clip.sourceEnd
      });
    }
  });
  rebuildOnAirReviewTimelineFromMediaClips(nextClips, mode === "ripple"
    ? Math.max(0, getOnAirReviewTimelineDuration() - removedDuration)
    : getOnAirReviewTimelineDuration());
  if (mode === "ripple") {
    shiftOnAirReviewGainAdjustmentsAfterDelete(selectionStart, selectionEnd);
  } else {
    removeOnAirReviewGainAdjustmentsInRange(selectionStart, selectionEnd);
  }
  const resumeAt = Math.min(selectionStart, onAirReviewEditedDuration);
  clearOnAirReviewSelection();
  seekOnAirReviewEditedTime(resumeAt);
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = mode === "ripple"
      ? "Ripple delete removed the selected range and closed the gap."
      : "Delete removed the selected range and left a gap for manual pacing edits.";
  }
  return true;
}

function getOnAirReviewViewport(durationSeconds, currentSeconds) {
  const duration = Math.max(0, Number(durationSeconds) || 0);
  const focusSeconds = Number.isFinite(onAirReviewViewportFocusTime) && onAirReviewViewportFocusTime > 0
    ? onAirReviewViewportFocusTime
    : currentSeconds;
  const current = Math.max(0, Number(focusSeconds) || 0);
  const currentProgress = duration > 0 ? Math.max(0, Math.min(1, current / duration)) : 0;
  const windowSize = duration > 0 ? Math.max(1 / clampOnAirReviewZoomLevel(onAirReviewZoomLevel), 0.08) : 1;
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

function getOnAirReviewPeakAtEditedProgress(progress, totalDuration) {
  const sourceDuration = getOnAirReviewAssetDuration();
  const clampedProgress = Math.max(0, Math.min(1, Number(progress) || 0));
  const editedDuration = Math.max(0, Number(totalDuration) || 0);
  if (!onAirReviewWavePeaks.length || !(sourceDuration > 0) || !(editedDuration > 0)) {
    return 0;
  }
  const editedTime = editedDuration * clampedProgress;
  const position = getOnAirReviewTimelinePosition(editedTime);
  if (!position || !position.segment || position.segment.type !== "media") {
    return 0;
  }
  const sourceProgress = Math.max(0, Math.min(1, Number(position.sourceTime || 0) / sourceDuration));
  const peakIndex = Math.max(0, Math.min(onAirReviewWavePeaks.length - 1, Math.round(sourceProgress * (onAirReviewWavePeaks.length - 1))));
  return Math.max(0, Math.min(1, Number(onAirReviewWavePeaks[peakIndex] || 0)));
}

function hasOnAirReviewSelection() {
  return onAirReviewSelectionActive && Math.abs(onAirReviewSelectionEnd - onAirReviewSelectionStart) > 0.01;
}

function clearOnAirReviewSelection() {
  onAirReviewSelectionStart = 0;
  onAirReviewSelectionEnd = 0;
  onAirReviewSelectionActive = false;
  onAirReviewSelectionDragMode = "";
  onAirReviewSelectionHandleOffset = 0;
  updateOnAirReviewSelectionControls();
  queueOnAirReviewWaveRender();
}

function setOnAirReviewSelection(startSeconds, endSeconds) {
  const duration = getOnAirReviewTimelineDuration();
  const safeStart = Math.max(0, Math.min(duration, Number(startSeconds) || 0));
  const safeEnd = Math.max(0, Math.min(duration, Number(endSeconds) || 0));
  onAirReviewSelectionStart = Math.min(safeStart, safeEnd);
  onAirReviewSelectionEnd = Math.max(safeStart, safeEnd);
  onAirReviewSelectionActive = Math.abs(onAirReviewSelectionEnd - onAirReviewSelectionStart) > 0.01;
  updateOnAirReviewSelectionControls();
  queueOnAirReviewWaveRender();
}

function setOnAirReviewViewportFocusTime(seconds) {
  const duration = getOnAirReviewTimelineDuration();
  onAirReviewViewportFocusTime = duration > 0 ? Math.max(0, Math.min(duration, Number(seconds) || 0)) : 0;
}

function resetOnAirReviewViewportFocusTime() {
  onAirReviewViewportFocusTime = Math.max(0, Number(onAirReviewEditedTime) || 0);
}

function getOnAirReviewSelectionHandleHit(seconds) {
  if (!hasOnAirReviewSelection()) {
    return "";
  }
  const duration = getOnAirReviewTimelineDuration();
  const viewport = getOnAirReviewViewport(duration, onAirReviewEditedTime);
  const visibleDuration = Math.max(0.2, duration * viewport.windowSize);
  const handleTolerance = Math.max(0.08, visibleDuration * 0.025);
  if (Math.abs(seconds - onAirReviewSelectionStart) <= handleTolerance) {
    return "start";
  }
  if (Math.abs(seconds - onAirReviewSelectionEnd) <= handleTolerance) {
    return "end";
  }
  return "";
}

function updateOnAirReviewSelectionFromDrag(seconds) {
  if (onAirReviewSelectionDragMode === "start") {
    setOnAirReviewSelection(seconds - onAirReviewSelectionHandleOffset, onAirReviewSelectionEnd);
    return;
  }
  if (onAirReviewSelectionDragMode === "end") {
    setOnAirReviewSelection(onAirReviewSelectionStart, seconds - onAirReviewSelectionHandleOffset);
    return;
  }
  setOnAirReviewSelection(onAirReviewSelectionAnchor, seconds);
}

function stopOnAirReviewSelectionAutoPan() {
  if (onAirReviewAutoPanFrameId) {
    cancelAnimationFrame(onAirReviewAutoPanFrameId);
    onAirReviewAutoPanFrameId = 0;
  }
}

function tickOnAirReviewSelectionAutoPan() {
  onAirReviewAutoPanFrameId = 0;
  if (!onAirReviewWavePointerDown || !onAirReviewSelectMode || !onAirReviewWaveCanvas) {
    return;
  }
  const duration = getOnAirReviewTimelineDuration();
  if (!(duration > 0) || onAirReviewZoomLevel <= 1) {
    return;
  }
  const rect = onAirReviewWaveCanvas.getBoundingClientRect();
  const edgeThreshold = Math.max(20, rect.width * 0.045);
  const leftDistance = onAirReviewSelectionPointerClientX - rect.left;
  const rightDistance = rect.right - onAirReviewSelectionPointerClientX;
  const viewport = getOnAirReviewViewport(duration, onAirReviewEditedTime);
  const visibleDuration = duration * viewport.windowSize;
  let direction = 0;
  if (leftDistance < edgeThreshold) {
    direction = -1;
  } else if (rightDistance < edgeThreshold) {
    direction = 1;
  }
  if (!direction) {
    return;
  }
  const nextFocus = Math.max(0, Math.min(duration, onAirReviewViewportFocusTime + direction * Math.max(0.03, visibleDuration * 0.014)));
  if (Math.abs(nextFocus - onAirReviewViewportFocusTime) > 0.001) {
    setOnAirReviewViewportFocusTime(nextFocus);
    const seconds = getOnAirReviewSecondsFromClientX(onAirReviewSelectionPointerClientX);
    updateOnAirReviewSelectionFromDrag(seconds);
  }
  onAirReviewAutoPanFrameId = requestAnimationFrame(tickOnAirReviewSelectionAutoPan);
}

function startOnAirReviewSelectionAutoPan() {
  if (onAirReviewAutoPanFrameId) {
    return;
  }
  onAirReviewAutoPanFrameId = requestAnimationFrame(tickOnAirReviewSelectionAutoPan);
}

function setOnAirReviewSelectMode(enabled) {
  onAirReviewSelectMode = !!enabled;
  if (onAirReviewSelectMode) {
    onAirReviewMoveMode = false;
  }
  if (onAirReviewSelectModeBtn) {
    onAirReviewSelectModeBtn.setAttribute("aria-pressed", onAirReviewSelectMode ? "true" : "false");
    onAirReviewSelectModeBtn.classList.toggle("active", onAirReviewSelectMode);
  }
  if (onAirReviewWaveNote) {
    if (onAirReviewSelectMode) {
      onAirReviewWaveNote.textContent = hasOnAirReviewSelection()
        ? "Selection mode is on. Drag in the waveform to refine the highlighted range."
        : "Selection mode is on. Drag in the waveform to highlight a range.";
    } else if (onAirReviewWavePeaks.length) {
      onAirReviewWaveNote.textContent = hasOnAirReviewSelection()
        ? "Scrub mode is on. Current selection is highlighted and ready for the next edit feature."
        : "Scrub mode is on. Click or drag in the waveform to move through the show.";
    }
  }
  if (onAirReviewMoveModeBtn) {
    onAirReviewMoveModeBtn.setAttribute("aria-pressed", onAirReviewMoveMode ? "true" : "false");
    onAirReviewMoveModeBtn.classList.toggle("active", onAirReviewMoveMode);
  }
}

function setOnAirReviewMoveMode(enabled) {
  onAirReviewMoveMode = !!enabled;
  if (onAirReviewMoveMode) {
    onAirReviewSelectMode = false;
    onAirReviewSelectionDragMode = "";
  }
  if (onAirReviewMoveModeBtn) {
    onAirReviewMoveModeBtn.setAttribute("aria-pressed", onAirReviewMoveMode ? "true" : "false");
    onAirReviewMoveModeBtn.classList.toggle("active", onAirReviewMoveMode);
  }
  if (onAirReviewSelectModeBtn) {
    onAirReviewSelectModeBtn.setAttribute("aria-pressed", onAirReviewSelectMode ? "true" : "false");
    onAirReviewSelectModeBtn.classList.toggle("active", onAirReviewSelectMode);
  }
  if (onAirReviewWaveNote) {
    if (onAirReviewMoveMode) {
      onAirReviewWaveNote.textContent = "Move mode is on. Drag a clip to reposition it across gaps. Ripple still closes gaps automatically.";
    } else if (onAirReviewWavePeaks.length && !onAirReviewSelectMode) {
      onAirReviewWaveNote.textContent = hasOnAirReviewSelection()
        ? "Scrub mode is on. Current selection is highlighted and ready for the next edit feature."
        : "Scrub mode is on. Click or drag in the waveform to move through the show.";
    }
  }
}

function normalizeOnAirReviewOverlapMode(mode) {
  const value = String(mode || "").toLowerCase();
  if (value === "front" || value === "back") {
    return value;
  }
  return "blend";
}

function updateOnAirReviewOverlapModeUi() {
  const mode = normalizeOnAirReviewOverlapMode(onAirReviewOverlapMode);
  [
    [onAirReviewOverlapBlendBtn, "blend"],
    [onAirReviewOverlapFrontBtn, "front"],
    [onAirReviewOverlapBackBtn, "back"]
  ].forEach(([button, value]) => {
    if (!button) {
      return;
    }
    const active = mode === value;
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.classList.toggle("active", active);
  });
}

function setOnAirReviewOverlapMode(mode) {
  const nextMode = normalizeOnAirReviewOverlapMode(mode);
  if (nextMode === onAirReviewOverlapMode) {
    updateOnAirReviewOverlapModeUi();
    return false;
  }
  pushOnAirReviewHistorySnapshot("overlap-mode");
  onAirReviewOverlapMode = nextMode;
  updateOnAirReviewOverlapModeUi();
  if (canUseOnAirReviewClipPlayback() && isOnAirReviewPlaying()) {
    const activeLoopBounds = onAirReviewLoopSelectionActive ? getOnAirReviewLoopBounds() : null;
    scheduleOnAirReviewClipPlayback(onAirReviewEditedTime, activeLoopBounds ? activeLoopBounds.end : undefined);
    onAirReviewPlaybackAnchorAt = performance.now();
    onAirReviewPlaybackAnchorEditedTime = onAirReviewEditedTime;
  }
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Overlap mode set to " + nextMode + " for stacked clips.";
  }
  return true;
}

function hasOnAirReviewSelectableAsset() {
  return !!(
    recordingAudioUrl ||
    recordingMediaUrl ||
    (onAirActiveReviewMedia && onAirActiveReviewMedia.src) ||
    getOnAirReviewAssetDuration() ||
    getOnAirReviewTimelineDuration()
  );
}

function updateOnAirReviewSelectionControls() {
  const hasAsset = hasOnAirReviewSelectableAsset();
  const hasSelection = hasOnAirReviewSelection();
  updateOnAirReviewHistoryControls();
  if (onAirReviewSelectAllBtn) {
    onAirReviewSelectAllBtn.disabled = !hasAsset;
  }
  if (onAirReviewClearSelectionBtn) {
    onAirReviewClearSelectionBtn.disabled = !hasSelection;
  }
  if (onAirReviewDeleteBtn) {
    onAirReviewDeleteBtn.disabled = !hasSelection;
  }
  if (onAirReviewRippleDeleteBtn) {
    onAirReviewRippleDeleteBtn.disabled = !hasSelection;
  }
  if (onAirReviewSplitBtn) {
    onAirReviewSplitBtn.disabled = !getOnAirReviewSplitCandidate();
  }
  if (onAirReviewSplitSelectionBtn) {
    onAirReviewSplitSelectionBtn.disabled = !canSplitOnAirReviewSelectionEdges();
  }
  if (onAirReviewGainDownBtn) {
    onAirReviewGainDownBtn.disabled = !hasSelection;
  }
  if (onAirReviewGainUpBtn) {
    onAirReviewGainUpBtn.disabled = !hasSelection;
  }
  if (onAirReviewGainResetBtn) {
    onAirReviewGainResetBtn.disabled = !hasSelection;
  }
  if (onAirReviewGainNormalizeBtn) {
    onAirReviewGainNormalizeBtn.disabled = !hasSelection;
  }
  if (onAirReviewGainReadout) {
    onAirReviewGainReadout.textContent = formatOnAirReviewGainDb(getOnAirReviewSelectionAverageGainDb());
  }
  if (onAirReviewLoopReadout) {
    onAirReviewLoopReadout.textContent = hasSelection ? "Loop On" : "Loop Off";
  }
}

function getOnAirReviewClipHit(seconds) {
  const target = Math.max(0, Number(seconds) || 0);
  const entries = getOnAirReviewTimelineEntries();
  for (const entry of entries) {
    if (entry.type !== "media") {
      continue;
    }
    if (target >= entry.start && target <= entry.end) {
      return entry;
    }
  }
  return null;
}

function beginOnAirReviewClipDrag(entry, pointerSeconds) {
  if (!entry || entry.type !== "media") {
    return false;
  }
  pushOnAirReviewHistorySnapshot("move");
  onAirReviewClipDragState = {
    entryIndex: entry.index,
    originalStart: entry.start,
    duration: entry.duration,
    pointerOffset: Math.max(0, Math.min(entry.duration, Number(pointerSeconds) - entry.start)),
    moved: false
  };
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Clip move is active. Drag the clip across the gap and release to place it.";
  }
  queueOnAirReviewWaveRender();
  return true;
}

function updateOnAirReviewClipDrag(pointerSeconds) {
  if (!onAirReviewClipDragState) {
    return;
  }
  const desiredStart = Number(pointerSeconds) - Number(onAirReviewClipDragState.pointerOffset || 0);
  if (moveOnAirReviewClip(onAirReviewClipDragState.entryIndex, desiredStart)) {
    onAirReviewClipDragState.moved = true;
  }
}

function endOnAirReviewClipDrag() {
  if (!onAirReviewClipDragState) {
    return;
  }
  if (!onAirReviewClipDragState.moved && onAirReviewUndoStack.length) {
    const lastSnapshot = onAirReviewUndoStack[onAirReviewUndoStack.length - 1];
    if (lastSnapshot && lastSnapshot.label === "move") {
      onAirReviewUndoStack.pop();
      updateOnAirReviewHistoryControls();
    }
  }
  onAirReviewClipDragState = null;
  if (onAirReviewWaveNote && onAirReviewMoveMode) {
    onAirReviewWaveNote.textContent = "Move mode is on. Drag a clip to reposition it across gaps. Ripple still closes gaps automatically.";
  }
  queueOnAirReviewWaveRender();
}

function moveOnAirReviewClip(entryIndex, targetStart) {
  const totalDuration = getOnAirReviewTimelineDuration();
  const mediaEntries = getOnAirReviewMediaClips();
  const clipIndex = mediaEntries.findIndex((entry) => entry.index === entryIndex);
  if (clipIndex === -1) {
    return false;
  }
  const clip = mediaEntries[clipIndex];
  const previous = mediaEntries[clipIndex - 1] || null;
  const next = mediaEntries[clipIndex + 1] || null;
  const overlapLimit = Math.min(4.5, clip.duration * 0.72);
  const minStart = Math.max(0, previous ? previous.start - overlapLimit : 0);
  const maxStart = Math.max(0, next ? next.end - Math.max(0.12, clip.duration * 0.28) : totalDuration);
  let nextStart = Math.max(minStart, Math.min(maxStart, Number(targetStart) || 0));
  const snapTolerance = Math.max(0.08, clip.duration * 0.04);
  if (previous && Math.abs(nextStart - previous.end) <= snapTolerance) {
    nextStart = previous.end;
  }
  if (next && Math.abs(nextStart - Math.max(0, next.start - clip.duration)) <= snapTolerance) {
    nextStart = Math.max(0, next.start - clip.duration);
  }
  if (Math.abs(nextStart - clip.start) < 0.0005) {
    return false;
  }
  const nextClips = mediaEntries.map((entry) => ({
    start: entry.start,
    duration: entry.duration,
    sourceStart: Math.max(0, Number(entry.segment && entry.segment.sourceStart) || 0),
    sourceEnd: Math.max(0, Number(entry.segment && entry.segment.sourceEnd) || 0)
  }));
  nextClips[clipIndex].start = nextStart;
  rebuildOnAirReviewTimelineFromMediaClips(nextClips, Math.max(totalDuration, nextStart + clip.duration));
  shiftOnAirReviewGainAdjustmentsForClipMove(clip.start, clip.end, nextStart - clip.start);
  if (hasOnAirReviewSelection()) {
    const delta = nextStart - clip.start;
    const selectionStart = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
    const selectionEnd = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
    if (selectionStart >= clip.start && selectionEnd <= clip.end) {
      setOnAirReviewSelection(selectionStart + delta, selectionEnd + delta);
    }
  }
  setOnAirReviewViewportFocusTime(nextStart + clip.duration / 2);
  seekOnAirReviewEditedTime(Math.max(0, Math.min(getOnAirReviewTimelineDuration(), onAirReviewEditedTime)));
  return true;
}

function getOnAirReviewSplitCandidate() {
  const clip = getOnAirReviewClipHit(onAirReviewEditedTime);
  if (!clip || clip.type !== "media") {
    return null;
  }
  const splitTime = Math.max(clip.start, Math.min(clip.end, Number(onAirReviewEditedTime) || 0));
  if (splitTime - clip.start <= 0.02 || clip.end - splitTime <= 0.02) {
    return null;
  }
  return { clip, splitTime };
}

function applyOnAirReviewSplitAtPlayhead() {
  const candidate = getOnAirReviewSplitCandidate();
  if (!candidate) {
    return false;
  }
  pushOnAirReviewHistorySnapshot("split");
  const { clip, splitTime } = candidate;
  const leadingDuration = splitTime - clip.start;
  const trailingDuration = clip.end - splitTime;
  const sourceBounds = getOnAirReviewNormalizedSourceBounds(clip);
  const sourceSplitTime = Math.max(
    sourceBounds.sourceStart,
    Math.min(sourceBounds.sourceEnd, sourceBounds.sourceStart + leadingDuration)
  );
  const nextClips = getOnAirReviewMediaClips().flatMap((entry) => {
    if (entry.index !== clip.index) {
      return [{
        start: entry.start,
        duration: entry.duration,
        sourceStart: entry.sourceStart,
        sourceEnd: entry.sourceEnd
      }];
    }
    return [
      {
        start: clip.start,
        duration: leadingDuration,
        sourceStart: clip.sourceStart,
        sourceEnd: sourceSplitTime
      },
      {
        start: splitTime,
        duration: trailingDuration,
        sourceStart: sourceSplitTime,
        sourceEnd: clip.sourceEnd
      }
    ];
  });
  rebuildOnAirReviewTimelineFromMediaClips(nextClips, getOnAirReviewTimelineDuration());
  seekOnAirReviewEditedTime(splitTime);
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Clip split at the playhead. You can now move or edit each side separately.";
  }
  return true;
}

function canSplitOnAirReviewSelectionEdges() {
  if (!hasOnAirReviewSelection()) {
    return false;
  }
  const selectionStart = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const selectionEnd = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  if (selectionEnd - selectionStart <= 0.02) {
    return false;
  }
  return getOnAirReviewMediaClips().some((clip) => {
    if (selectionEnd <= clip.start || selectionStart >= clip.end) {
      return false;
    }
    const canSplitAtStart = selectionStart > clip.start + 0.02 && selectionStart < clip.end - 0.02;
    const canSplitAtEnd = selectionEnd > clip.start + 0.02 && selectionEnd < clip.end - 0.02;
    return canSplitAtStart || canSplitAtEnd;
  });
}

function applyOnAirReviewSplitAtSelectionEdges() {
  if (!canSplitOnAirReviewSelectionEdges()) {
    return false;
  }
  const selectionStart = Math.min(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  const selectionEnd = Math.max(onAirReviewSelectionStart, onAirReviewSelectionEnd);
  pushOnAirReviewHistorySnapshot("split-selection");
  const nextClips = [];
  getOnAirReviewMediaClips().forEach((clip) => {
    if (selectionEnd <= clip.start || selectionStart >= clip.end) {
      nextClips.push({
        start: clip.start,
        duration: clip.duration,
        sourceStart: clip.sourceStart,
        sourceEnd: clip.sourceEnd
      });
      return;
    }
    const overlapStart = Math.max(selectionStart, clip.start);
    const overlapEnd = Math.min(selectionEnd, clip.end);
    const sourceBounds = getOnAirReviewNormalizedSourceBounds(clip);
    const overlapSourceStart = Math.max(
      sourceBounds.sourceStart,
      Math.min(sourceBounds.sourceEnd, sourceBounds.sourceStart + (overlapStart - clip.start))
    );
    const overlapSourceEnd = Math.max(
      overlapSourceStart,
      Math.min(sourceBounds.sourceEnd, sourceBounds.sourceStart + (overlapEnd - clip.start))
    );
    if (overlapStart > clip.start + 0.02) {
      nextClips.push({
        start: clip.start,
        duration: overlapStart - clip.start,
        sourceStart: clip.sourceStart,
        sourceEnd: overlapSourceStart
      });
    }
    nextClips.push({
      start: overlapStart,
      duration: overlapEnd - overlapStart,
      sourceStart: overlapSourceStart,
      sourceEnd: overlapSourceEnd
    });
    if (overlapEnd < clip.end - 0.02) {
      nextClips.push({
        start: overlapEnd,
        duration: clip.end - overlapEnd,
        sourceStart: overlapSourceEnd,
        sourceEnd: clip.sourceEnd
      });
    }
  });
  rebuildOnAirReviewTimelineFromMediaClips(nextClips, getOnAirReviewTimelineDuration());
  setOnAirReviewSelection(selectionStart, selectionEnd);
  seekOnAirReviewEditedTime(selectionStart);
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Selection edges split the overlapping clips so the highlighted range stands on its own.";
  }
  return true;
}

function updateOnAirReviewZoomControls() {
  if (onAirReviewZoomOutBtn) {
    onAirReviewZoomOutBtn.disabled = onAirReviewZoomLevel <= 1;
  }
  if (onAirReviewZoomFitBtn) {
    onAirReviewZoomFitBtn.disabled = onAirReviewZoomLevel <= 1;
  }
  if (onAirReviewZoomInBtn) {
    onAirReviewZoomInBtn.disabled = onAirReviewZoomLevel >= 12;
  }
}

function setOnAirReviewZoomLevel(nextLevel) {
  onAirReviewZoomLevel = clampOnAirReviewZoomLevel(nextLevel);
  updateOnAirReviewZoomControls();
  queueOnAirReviewWaveRender();
}

function resizeOnAirReviewWaveCanvas() {
  if (!onAirReviewWaveCanvas) {
    return;
  }
  const dpr = window.devicePixelRatio || 1;
  const rect = onAirReviewWaveCanvas.getBoundingClientRect();
  const width = Math.max(480, Math.floor(rect.width * dpr));
  const height = Math.max(120, Math.floor(rect.height * dpr));
  if (onAirReviewWaveCanvas.width !== width || onAirReviewWaveCanvas.height !== height) {
    onAirReviewWaveCanvas.width = width;
    onAirReviewWaveCanvas.height = height;
  }
  if (!onAirReviewWaveContext) {
    onAirReviewWaveContext = onAirReviewWaveCanvas.getContext("2d");
  }
}

function buildFallbackReviewWaveformPeaks(durationSeconds) {
  const duration = Math.max(1, Number(durationSeconds) || 1);
  const peaks = [];
  for (let index = 0; index < 180; index += 1) {
    const progress = index / 179;
    const shaped = 0.18 + Math.abs(Math.sin(progress * Math.PI * 7)) * 0.44 + Math.abs(Math.cos(progress * Math.PI * 3.5)) * 0.16;
    peaks.push(Math.max(0.08, Math.min(1, shaped * (0.82 + (duration % 11) * 0.01))));
  }
  return peaks;
}

function sampleWaveformPeaksFromAudioBuffer(buffer, bucketCount) {
  const channelData = [];
  for (let channel = 0; channel < Math.max(1, buffer.numberOfChannels); channel += 1) {
    channelData.push(buffer.getChannelData(channel));
  }
  const totalSamples = buffer.length || 0;
  const buckets = new Array(Math.max(60, bucketCount || 180)).fill(0);
  if (!totalSamples) {
    return buckets;
  }
  const samplesPerBucket = Math.max(1, Math.floor(totalSamples / buckets.length));
  for (let bucketIndex = 0; bucketIndex < buckets.length; bucketIndex += 1) {
    const start = bucketIndex * samplesPerBucket;
    const end = Math.min(totalSamples, start + samplesPerBucket);
    let peak = 0;
    for (let channel = 0; channel < channelData.length; channel += 1) {
      const data = channelData[channel];
      for (let sampleIndex = start; sampleIndex < end; sampleIndex += 1) {
        peak = Math.max(peak, Math.abs(data[sampleIndex] || 0));
      }
    }
    buckets[bucketIndex] = Math.max(0.02, Math.min(1, peak));
  }
  return buckets;
}

async function refreshOnAirReviewWaveform() {
  const hasReviewAsset = !!((recordingAudioBlob && recordingAudioUrl) || (recordingMediaBlob && recordingMediaUrl));
  const sourceBlob = recordingAudioBlob || recordingMediaBlob || null;
  const sourceUrl = recordingAudioUrl || recordingMediaUrl || "";
  const duration = Math.max(Number(recordingAudioDurationSeconds || 0), Number(recordingMediaDurationSeconds || 0), 0);
  const nextToken = sourceUrl + "|" + duration;
  if (!hasReviewAsset) {
    onAirReviewWaveToken = 0;
    onAirReviewWaveDuration = 0;
    onAirReviewWavePeaks = [];
    onAirReviewDecodedAudioBuffer = null;
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "No review file loaded yet.";
    }
    queueOnAirReviewWaveRender();
    return;
  }
  if (onAirReviewWaveToken === nextToken && onAirReviewWavePeaks.length) {
    queueOnAirReviewWaveRender();
    return;
  }
  onAirReviewWaveToken = nextToken;
  onAirReviewWaveDuration = duration;
  if (onAirReviewWaveNote) {
    onAirReviewWaveNote.textContent = "Rendering review waveform...";
  }
  try {
    const arrayBuffer = await sourceBlob.arrayBuffer();
    const decodeContext = new (window.AudioContext || window.webkitAudioContext)();
    try {
      const decoded = await decodeContext.decodeAudioData(arrayBuffer.slice(0));
      onAirReviewWavePeaks = sampleWaveformPeaksFromAudioBuffer(decoded, 220);
      onAirReviewWaveDuration = Math.max(duration, Number(decoded.duration || 0));
      onAirReviewDecodedAudioBuffer = decoded;
    } finally {
      decodeContext.close().catch(() => {});
    }
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "Click anywhere in the strip to scrub the show. Orange line marks the current playhead.";
    }
  } catch (error) {
    onAirReviewWavePeaks = buildFallbackReviewWaveformPeaks(duration);
    onAirReviewDecodedAudioBuffer = null;
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "Waveform preview is approximate on this browser, but scrubbing and playback are still available.";
    }
  }
  queueOnAirReviewWaveRender();
}

function renderOnAirReviewWaveform() {
  if (!onAirReviewWaveCanvas) {
    return;
  }
  resizeOnAirReviewWaveCanvas();
  if (!onAirReviewWaveContext) {
    return;
  }
  const ctx = onAirReviewWaveContext;
  const width = onAirReviewWaveCanvas.width;
  const height = onAirReviewWaveCanvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(2, 6, 11, 0.98)";
  ctx.fillRect(0, 0, width, height);

  const shellInset = Math.max(4, Math.floor(height * 0.04));
  const shellX = shellInset;
  const shellY = shellInset;
  const shellWidth = Math.max(12, width - shellInset * 2);
  const shellHeight = Math.max(12, height - shellInset * 2);
  const shellRadius = Math.max(8, Math.floor(height * 0.08));
  const shellGradient = ctx.createLinearGradient(0, shellY, 0, shellY + shellHeight);
  shellGradient.addColorStop(0, "rgba(20, 28, 36, 0.98)");
  shellGradient.addColorStop(1, "rgba(7, 12, 18, 0.98)");
  ctx.fillStyle = shellGradient;
  fillRoundedRect(ctx, shellX, shellY, shellWidth, shellHeight, shellRadius);
  ctx.strokeStyle = "rgba(110, 131, 150, 0.3)";
  ctx.lineWidth = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 1.15));
  strokeRoundedRect(ctx, shellX, shellY, shellWidth, shellHeight, shellRadius);

  const meterInsetX = Math.max(16, Math.floor(width * 0.02));
  const meterInsetY = Math.max(18, Math.floor(height * 0.18));
  const meterX = shellX + meterInsetX;
  const meterY = shellY + meterInsetY;
  const meterWidth = Math.max(24, shellWidth - meterInsetX * 2);
  const meterHeight = Math.max(16, shellHeight - meterInsetY * 2);
  const laneGap = Math.max(8, Math.floor(height * 0.07));
  const laneHeight = Math.max(10, Math.floor((meterHeight - laneGap) / 2));
  const dividerHeight = Math.max(2, Math.floor(height * 0.03));
  const topLaneY = meterY;
  const bottomLaneY = meterY + laneHeight + laneGap;
  const topLaneBaseY = topLaneY + laneHeight - 2;
  const bottomLaneBaseY = bottomLaneY + 2;
  const duration = getOnAirReviewTimelineDuration();
  const current = Math.max(0, Math.min(duration, Number(onAirReviewEditedTime) || 0));
  const viewport = getOnAirReviewViewport(duration, current);
  const currentProgress = viewport.currentProgress;
  const windowSize = viewport.windowSize;
  const windowStart = viewport.windowStart;
  const mediaClips = duration > 0 ? getOnAirReviewMediaClips() : [];
  const visibleMediaClips = [];
  const overlapRanges = [];
  const overlapClipIndices = new Set();
  if (duration > 0 && mediaClips.length) {
    const activeLanes = [];
    mediaClips
      .slice()
      .sort((left, right) => {
        if (Math.abs(left.start - right.start) > 0.0005) {
          return left.start - right.start;
        }
        return left.index - right.index;
      })
      .forEach((clip) => {
        let laneIndex = 0;
        while (laneIndex < activeLanes.length && activeLanes[laneIndex] > clip.start + 0.001) {
          laneIndex += 1;
        }
        activeLanes[laneIndex] = clip.end;
        visibleMediaClips.push({ ...clip, laneIndex });
      });
    for (let index = 0; index < visibleMediaClips.length; index += 1) {
      for (let inner = index + 1; inner < visibleMediaClips.length; inner += 1) {
        const leftClip = visibleMediaClips[index];
        const rightClip = visibleMediaClips[inner];
        if (rightClip.start >= leftClip.end) {
          break;
        }
        const overlapStart = Math.max(leftClip.start, rightClip.start);
        const overlapEnd = Math.min(leftClip.end, rightClip.end);
        if (overlapEnd - overlapStart > 0.01) {
          overlapClipIndices.add(leftClip.index);
          overlapClipIndices.add(rightClip.index);
          overlapRanges.push({
            start: overlapStart,
            end: overlapEnd,
            frontLane: rightClip.laneIndex,
            backLane: leftClip.laneIndex
          });
        }
      }
    }
  }

  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.fillRect(meterX, meterY, meterWidth, meterHeight);
  const laneGradient = ctx.createLinearGradient(0, meterY, 0, meterY + meterHeight);
  laneGradient.addColorStop(0, "rgba(6, 11, 16, 0.95)");
  laneGradient.addColorStop(1, "rgba(3, 7, 11, 0.98)");
  ctx.fillStyle = laneGradient;
  ctx.fillRect(meterX, topLaneY, meterWidth, laneHeight);
  ctx.fillRect(meterX, bottomLaneY, meterWidth, laneHeight);
  ctx.fillStyle = "rgba(214, 225, 236, 0.18)";
  ctx.fillRect(meterX, Math.round(height / 2) - Math.floor(dividerHeight / 2), meterWidth, dividerHeight);

  if (duration > 0 && visibleMediaClips.length) {
    visibleMediaClips.forEach((clip, clipIndex) => {
      if (!overlapClipIndices.has(clip.index)) {
        return;
      }
      const startProgress = Math.max(0, Math.min(1, clip.start / duration));
      const endProgress = Math.max(startProgress, Math.min(1, clip.end / duration));
      const visibleStart = windowSize < 1
        ? (startProgress - windowStart) / Math.max(windowSize, 1e-6)
        : startProgress;
      const visibleEnd = windowSize < 1
        ? (endProgress - windowStart) / Math.max(windowSize, 1e-6)
        : endProgress;
      const clipX = meterX + meterWidth * Math.max(0, Math.min(1, visibleStart));
      const clipWidth = meterWidth * Math.max(0, Math.min(1, visibleEnd) - Math.max(0, Math.min(1, visibleStart)));
      if (clipWidth <= 0.75) {
        return;
      }
      const laneOffset = Math.min(11, clip.laneIndex * Math.max(4, Math.floor(laneHeight * 0.11)));
      const clipY = meterY + 7 + laneOffset;
      const clipHeight = Math.max(14, meterHeight - 14 - laneOffset * 0.2);
      const radius = Math.max(5, Math.floor(clipHeight * 0.14));
      const fill = ctx.createLinearGradient(0, clipY, 0, clipY + clipHeight);
      if (clip.laneIndex % 2 === 0) {
        fill.addColorStop(0, "rgba(48, 67, 88, 0.16)");
        fill.addColorStop(1, "rgba(17, 27, 37, 0.09)");
      } else {
        fill.addColorStop(0, "rgba(62, 83, 108, 0.14)");
        fill.addColorStop(1, "rgba(21, 34, 47, 0.08)");
      }
      ctx.fillStyle = fill;
      fillRoundedRect(ctx, clipX, clipY, clipWidth, clipHeight, radius);
      ctx.strokeStyle = onAirReviewClipDragState && onAirReviewClipDragState.entryIndex === clip.index
        ? "rgba(255, 177, 102, 0.92)"
        : clip.laneIndex % 2 === 0
          ? "rgba(143, 168, 194, 0.2)"
          : "rgba(125, 154, 182, 0.18)";
      ctx.lineWidth = 1;
      strokeRoundedRect(ctx, clipX + 0.5, clipY + 0.5, Math.max(0, clipWidth - 1), Math.max(0, clipHeight - 1), radius);
      ctx.fillStyle = clip.laneIndex % 2 === 0 ? "rgba(193, 214, 235, 0.22)" : "rgba(176, 198, 220, 0.2)";
      ctx.fillRect(clipX + 6, clipY + 5, Math.max(10, Math.min(clipWidth - 12, 20 + (clipIndex % 2) * 8)), 2);
    });
    if (overlapRanges.length) {
      const animationClock = performance.now();
      const pulse = 0.42 + 0.1 * Math.sin(animationClock / 520);
      overlapRanges.forEach((range) => {
        const startProgress = Math.max(0, Math.min(1, range.start / duration));
        const endProgress = Math.max(startProgress, Math.min(1, range.end / duration));
        const visibleStart = windowSize < 1
          ? (startProgress - windowStart) / Math.max(windowSize, 1e-6)
          : startProgress;
        const visibleEnd = windowSize < 1
          ? (endProgress - windowStart) / Math.max(windowSize, 1e-6)
          : endProgress;
        const overlapX = meterX + meterWidth * Math.max(0, Math.min(1, visibleStart));
        const overlapWidth = meterWidth * Math.max(0, Math.min(1, visibleEnd) - Math.max(0, Math.min(1, visibleStart)));
        if (overlapWidth <= 1) {
          return;
        }
        const overlapTopOffset = Math.min(range.backLane, range.frontLane) * Math.max(5, Math.floor(laneHeight * 0.16));
        const overlapBottomOffset = Math.max(range.backLane, range.frontLane) * Math.max(5, Math.floor(laneHeight * 0.16));
        const overlapY = meterY + 5 + overlapTopOffset;
        const overlapHeight = Math.max(16, meterHeight - 10 - overlapBottomOffset * 0.35);
        const overlapRadius = Math.max(4, Math.floor(overlapHeight * 0.12));
        const overlapCenterY = overlapY + overlapHeight / 2;
        const overlapGradient = ctx.createLinearGradient(0, overlapY, 0, overlapY + overlapHeight);
        overlapGradient.addColorStop(0, "rgba(255, 180, 108, 0.08)");
        overlapGradient.addColorStop(0.22, "rgba(255, 164, 92, 0.16)");
        overlapGradient.addColorStop(0.5, "rgba(255, 142, 74, 0.24)");
        overlapGradient.addColorStop(0.78, "rgba(255, 160, 98, 0.16)");
        overlapGradient.addColorStop(1, "rgba(255, 189, 125, 0.08)");
        ctx.fillStyle = overlapGradient;
        fillRoundedRect(ctx, overlapX, overlapY, overlapWidth, overlapHeight, overlapRadius);
        const coreBandHeight = Math.max(6, Math.min(12, overlapHeight * 0.28));
        const coreBandY = overlapCenterY - coreBandHeight / 2;
        const coreBand = ctx.createLinearGradient(0, coreBandY, 0, coreBandY + coreBandHeight);
        coreBand.addColorStop(0, "rgba(255, 227, 188, 0.18)");
        coreBand.addColorStop(0.5, "rgba(255, 181, 112, 0.34)");
        coreBand.addColorStop(1, "rgba(255, 225, 183, 0.18)");
        ctx.fillStyle = coreBand;
        fillRoundedRect(ctx, overlapX, coreBandY, overlapWidth, coreBandHeight, Math.max(3, Math.floor(coreBandHeight / 2)));
        ctx.strokeStyle = "rgba(255, 176, 97, 0.44)";
        ctx.lineWidth = 1;
        strokeRoundedRect(ctx, overlapX + 0.5, overlapY + 0.5, Math.max(0, overlapWidth - 1), Math.max(0, overlapHeight - 1), overlapRadius);
        const seamX = overlapX + overlapWidth / 2;
        const seamGradient = ctx.createLinearGradient(seamX, overlapY, seamX, overlapY + overlapHeight);
        seamGradient.addColorStop(0, "rgba(255, 236, 207, 0)");
        seamGradient.addColorStop(0.5, "rgba(255, 218, 169, 0.34)");
        seamGradient.addColorStop(1, "rgba(255, 236, 207, 0)");
        ctx.fillStyle = seamGradient;
        ctx.fillRect(seamX - 1, overlapY + 2, 2, Math.max(6, overlapHeight - 4));
        const sheenWidth = Math.max(16, Math.min(overlapWidth * 0.28, 42));
        const sheenOffset = overlapWidth > sheenWidth
          ? ((animationClock / 22) % (overlapWidth + sheenWidth)) - sheenWidth
          : 0;
        const sheenX = overlapX + sheenOffset;
        const sheen = ctx.createLinearGradient(sheenX, 0, sheenX + sheenWidth, 0);
        sheen.addColorStop(0, "rgba(255, 255, 255, 0)");
        sheen.addColorStop(0.35, "rgba(255, 244, 224, " + (pulse * 0.55).toFixed(3) + ")");
        sheen.addColorStop(0.5, "rgba(255, 232, 196, " + pulse.toFixed(3) + ")");
        sheen.addColorStop(0.65, "rgba(255, 244, 224, " + (pulse * 0.55).toFixed(3) + ")");
        sheen.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = sheen;
        ctx.fillRect(overlapX, overlapY + 2, overlapWidth, Math.max(8, overlapHeight - 4));
      });
    }
  }

  if (hasOnAirReviewSelection() && duration > 0) {
    const selectionStartProgress = Math.max(0, Math.min(1, onAirReviewSelectionStart / duration));
    const selectionEndProgress = Math.max(0, Math.min(1, onAirReviewSelectionEnd / duration));
    const visibleSelectionStart = windowSize < 1
      ? (selectionStartProgress - windowStart) / Math.max(windowSize, 1e-6)
      : selectionStartProgress;
    const visibleSelectionEnd = windowSize < 1
      ? (selectionEndProgress - windowStart) / Math.max(windowSize, 1e-6)
      : selectionEndProgress;
    const selectionX = meterX + meterWidth * Math.max(0, Math.min(1, visibleSelectionStart));
    const selectionWidth = meterWidth * Math.max(0, Math.min(1, visibleSelectionEnd) - Math.max(0, Math.min(1, visibleSelectionStart)));
    if (selectionWidth > 0) {
      ctx.fillStyle = "rgba(95, 162, 236, 0.18)";
      ctx.fillRect(selectionX, meterY, selectionWidth, meterHeight);
      ctx.strokeStyle = "rgba(129, 186, 244, 0.72)";
      ctx.lineWidth = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 1.1));
      ctx.strokeRect(selectionX, meterY + 0.5, selectionWidth, meterHeight - 1);
      const handleWidth = Math.max(2, Math.floor((window.devicePixelRatio || 1) * 2));
      ctx.fillStyle = "rgba(176, 214, 255, 0.9)";
      ctx.fillRect(selectionX - handleWidth / 2, meterY + 3, handleWidth, meterHeight - 6);
      ctx.fillRect(selectionX + selectionWidth - handleWidth / 2, meterY + 3, handleWidth, meterHeight - 6);
    }
  }

  if (duration > 0 && onAirReviewGainAdjustments.length) {
    onAirReviewGainAdjustments.forEach((adjustment) => {
      const startProgress = Math.max(0, Math.min(1, Number(adjustment.start || 0) / duration));
      const endProgress = Math.max(startProgress, Math.min(1, Number(adjustment.end || 0) / duration));
      const visibleStart = windowSize < 1
        ? (startProgress - windowStart) / Math.max(windowSize, 1e-6)
        : startProgress;
      const visibleEnd = windowSize < 1
        ? (endProgress - windowStart) / Math.max(windowSize, 1e-6)
        : endProgress;
      const overlayX = meterX + meterWidth * Math.max(0, Math.min(1, visibleStart));
      const overlayWidth = meterWidth * Math.max(0, Math.min(1, visibleEnd) - Math.max(0, Math.min(1, visibleStart)));
      if (overlayWidth <= 0.5) {
        return;
      }
      const db = clampOnAirReviewGainDb(adjustment.db);
      ctx.fillStyle = db >= 0
        ? "rgba(70, 166, 112, 0.12)"
        : "rgba(199, 146, 71, 0.12)";
      ctx.fillRect(overlayX, meterY, overlayWidth, meterHeight);
    });
  }

  if (duration > 0) {
    getOnAirReviewTimelineEntries().forEach((entry) => {
      const startProgress = Math.max(0, Math.min(1, entry.start / duration));
      const endProgress = Math.max(startProgress, Math.min(1, entry.end / duration));
      const visibleStart = windowSize < 1
        ? (startProgress - windowStart) / Math.max(windowSize, 1e-6)
        : startProgress;
      const visibleEnd = windowSize < 1
        ? (endProgress - windowStart) / Math.max(windowSize, 1e-6)
        : endProgress;
      const clipX = meterX + meterWidth * Math.max(0, Math.min(1, visibleStart));
      const clipWidth = meterWidth * Math.max(0, Math.min(1, visibleEnd) - Math.max(0, Math.min(1, visibleStart)));
      if (clipWidth <= 0.5) {
        return;
      }
      if (entry.type === "gap") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
        ctx.fillRect(clipX, meterY, clipWidth, meterHeight);
        return;
      }
    });
  }

  const tickStep = Math.max(12, Math.floor(meterWidth / 42));
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let x = meterX + tickStep; x < meterX + meterWidth; x += tickStep) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, topLaneY + 1);
    ctx.lineTo(x + 0.5, topLaneY + laneHeight - 1);
    ctx.moveTo(x + 0.5, bottomLaneY + 1);
    ctx.lineTo(x + 0.5, bottomLaneY + laneHeight - 1);
    ctx.stroke();
  }

  const visibleBarCount = Math.max(72, Math.floor(meterWidth / Math.max(5, (window.devicePixelRatio || 1) * 5)));
  if (duration > 0 && visibleBarCount > 0) {
    const step = meterWidth / visibleBarCount;
    const lineWidth = Math.max(1, step * 0.36);
    for (let index = 0; index < visibleBarCount; index += 1) {
      const x = meterX + index * step + step / 2;
      const progress = windowSize < 1
        ? windowStart + windowSize * ((index + 0.5) / visibleBarCount)
        : (index + 0.5) / visibleBarCount;
      const peak = Math.max(0, Math.min(1, getOnAirReviewPeakAtEditedProgress(progress, duration)));
      if (peak <= 0.003) {
        continue;
      }
      const gainDb = getOnAirReviewGainDbAt(duration * progress);
      const adjustedPeak = Math.max(0.02, Math.min(1, peak * Math.max(0.25, Math.min(2.4, dbToGainMultiplier(gainDb)))));
      let stroke = "rgba(77, 205, 139, 0.94)";
      if (adjustedPeak >= 0.88) {
        stroke = "rgba(255, 111, 95, 0.98)";
      } else if (adjustedPeak >= 0.68) {
        stroke = "rgba(255, 168, 79, 0.97)";
      } else if (adjustedPeak >= 0.28) {
        stroke = "rgba(246, 214, 99, 0.96)";
      }
      const amp = adjustedPeak * (laneHeight - 4);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(x, topLaneBaseY);
      ctx.lineTo(x, Math.max(topLaneY + 2, topLaneBaseY - amp));
      ctx.moveTo(x, bottomLaneBaseY);
      ctx.lineTo(x, Math.min(bottomLaneY + laneHeight - 2, bottomLaneBaseY + amp));
      ctx.stroke();
    }
  }

  const playheadWindowProgress = windowSize < 1
    ? Math.max(0, Math.min(1, (currentProgress - windowStart) / Math.max(windowSize, 1e-6)))
    : currentProgress;
  const playheadX = meterX + meterWidth * playheadWindowProgress;
  ctx.strokeStyle = "rgba(255, 156, 76, 0.98)";
  ctx.lineWidth = Math.max(2, Math.floor((window.devicePixelRatio || 1) * 1.6));
  ctx.beginPath();
  ctx.moveTo(playheadX, meterY - 4);
  ctx.lineTo(playheadX, meterY + meterHeight + 4);
  ctx.stroke();
}

function queueOnAirReviewWaveRender() {
  if (onAirReviewWaveRenderQueued) {
    return;
  }
  onAirReviewWaveRenderQueued = true;
  window.requestAnimationFrame(() => {
    onAirReviewWaveRenderQueued = false;
    try {
      renderOnAirReviewWaveform();
    } catch (error) {
      if (onAirReviewWaveNote) {
        onAirReviewWaveNote.textContent = "Waveform preview is unavailable on this browser right now.";
      }
      pushRecordingDiagnostic("review_wave_render_failed", String((error && error.message) || error || "render failed"));
    }
  });
}

function seekOnAirReviewFromClientX(clientX) {
  if (!onAirReviewWaveCanvas) {
    return;
  }
  const duration = getOnAirReviewTimelineDuration();
  if (!(duration > 0)) {
    return;
  }
  const rect = onAirReviewWaveCanvas.getBoundingClientRect();
  const localPercent = Math.max(0, Math.min(1, (clientX - rect.left) / Math.max(1, rect.width)));
  const viewport = getOnAirReviewViewport(duration, onAirReviewEditedTime);
  const windowSize = viewport.windowSize;
  const windowStart = viewport.windowStart;
  const absolutePercent = windowSize < 1
    ? Math.max(0, Math.min(1, windowStart + windowSize * localPercent))
    : localPercent;
  seekOnAirReviewEditedTime(duration * absolutePercent);
}

function getOnAirReviewSecondsFromClientX(clientX) {
  if (!onAirReviewWaveCanvas) {
    return 0;
  }
  const duration = getOnAirReviewTimelineDuration();
  if (!(duration > 0)) {
    return 0;
  }
  const rect = onAirReviewWaveCanvas.getBoundingClientRect();
  const localPercent = Math.max(0, Math.min(1, (clientX - rect.left) / Math.max(1, rect.width)));
  const viewport = getOnAirReviewViewport(duration, onAirReviewEditedTime);
  const absolutePercent = viewport.windowSize < 1
    ? Math.max(0, Math.min(1, viewport.windowStart + viewport.windowSize * localPercent))
    : localPercent;
  return duration * absolutePercent;
}

function beginRecordingProcessingPhase() {
  clearRecordingProcessingTimer();
  setRecordingWorkflowState("processing");
  if (onAirReviewStatus) {
    onAirReviewStatus.textContent = "Processing the show cut, cleaning levels, and preparing review assets.";
  }
  if (onAirExportNote) {
    onAirExportNote.textContent = "Exports unlock after the review cut is ready.";
  }
  syncReviewPanelUI();
  recordingProcessingTimerId = window.setTimeout(() => {
    setRecordingWorkflowState("review");
    if (onAirReviewStatus) {
      onAirReviewStatus.textContent = "Review the show cut below before exporting or moving into post-production edits.";
    }
    syncReviewPanelUI();
    window.setTimeout(() => {
      setRecordingWorkflowState("export");
      if (onAirExportNote) {
        onAirExportNote.textContent = "Choose the browser-generated show cut as video or audio-only download.";
      }
      syncReviewPanelUI();
    }, 900);
  }, 1400);
}

function downloadBlobAsset(url, filename) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function updateRecordingTimerText() {
  if (!recordingStartedAt) {
    if (onAirRecordTimer) {
      onAirRecordTimer.textContent = "00:00";
    }
    return;
  }
  if (onAirRecordTimer) {
    onAirRecordTimer.textContent = formatRecordingTimer(Date.now() - recordingStartedAt);
  }
}

function getVideoExportExtension() {
  return recordingMediaMimeType.includes("webm") ? "webm" : "mp4";
}

function getAudioExportExtension() {
  if (recordingAudioMimeType.includes("ogg")) {
    return "ogg";
  }
  return "webm";
}

function startRecordingTimer(startedAt) {
  const parsed = Number(startedAt || 0);
  recordingStartedAt = parsed > 0 ? parsed : Date.now();
  updateRecordingTimerText();
  if (recordingTimerId) {
    clearInterval(recordingTimerId);
  }
  recordingTimerId = window.setInterval(updateRecordingTimerText, 250);
}

function stopRecordingTimer() {
  if (recordingTimerId) {
    clearInterval(recordingTimerId);
    recordingTimerId = null;
  }
}

function resizeRecordingWaveCanvas() {
  if (!onAirRecordWave) {
    return;
  }
  const dpr = window.devicePixelRatio || 1;
  const rect = onAirRecordWave.getBoundingClientRect();
  const width = Math.max(260, Math.floor(rect.width * dpr));
  const height = Math.max(40, Math.floor(rect.height * dpr));
  if (onAirRecordWave.width !== width || onAirRecordWave.height !== height) {
    onAirRecordWave.width = width;
    onAirRecordWave.height = height;
  }
}

function updateOnAirRecordingLevelBadge(level) {
  if (!onAirRecordLevelBadge) {
    return;
  }
  onAirRecordLevelBadge.classList.remove("safe", "healthy", "hot", "clip");
  if (level >= 0.88) {
    onAirRecordLevelBadge.textContent = "Clip";
    onAirRecordLevelBadge.classList.add("clip");
    return;
  }
  if (level >= 0.68) {
    onAirRecordLevelBadge.textContent = "Hot";
    onAirRecordLevelBadge.classList.add("hot");
    return;
  }
  if (level >= 0.28) {
    onAirRecordLevelBadge.textContent = "Nom";
    onAirRecordLevelBadge.classList.add("healthy");
    return;
  }
  onAirRecordLevelBadge.textContent = "Low";
  onAirRecordLevelBadge.classList.add("safe");
}

function drawRecordingWaveFrame(level) {
  if (!recordingWaveContext || !onAirRecordWave) {
    return;
  }
  const ctx = recordingWaveContext;
  const width = onAirRecordWave.width;
  const height = onAirRecordWave.height;
  const centerY = Math.round(height / 2);
  const columnStep = Math.max(2, Math.floor((window.devicePixelRatio || 1) * 2));
  const points = Math.max(40, Math.floor(width / columnStep));
  const elapsedMs = Math.max(0, Date.now() - Number(recordingStartedAt || Date.now()));
  recordingWaveHistory.push({
    at: elapsedMs,
    level: Math.max(0, Math.min(1, Number(level) || 0))
  });
  if (recordingWaveHistory.length > 5000) {
    recordingWaveHistory.splice(0, recordingWaveHistory.length - 5000);
  }
  if (level >= recordingWavePeakLevel) {
    recordingWavePeakLevel = level;
    recordingWavePeakHoldFrames = 18;
  } else if (recordingWavePeakHoldFrames > 0) {
    recordingWavePeakHoldFrames -= 1;
  } else {
    recordingWavePeakLevel = Math.max(level, recordingWavePeakLevel * 0.94);
  }

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(2, 6, 11, 0.98)";
  ctx.fillRect(0, 0, width, height);

  const shellInset = Math.max(2, Math.floor(height * 0.05));
  const shellX = shellInset;
  const shellY = shellInset;
  const shellWidth = Math.max(12, width - shellInset * 2);
  const shellHeight = Math.max(12, height - shellInset * 2);
  const shellRadius = Math.max(5, Math.floor(height * 0.1));
  const shellGradient = ctx.createLinearGradient(0, shellY, 0, shellY + shellHeight);
  shellGradient.addColorStop(0, "rgba(20, 28, 36, 0.98)");
  shellGradient.addColorStop(1, "rgba(7, 12, 18, 0.98)");
  ctx.fillStyle = shellGradient;
  ctx.beginPath();
  ctx.roundRect(shellX, shellY, shellWidth, shellHeight, shellRadius);
  ctx.fill();
  ctx.strokeStyle = "rgba(110, 131, 150, 0.3)";
  ctx.lineWidth = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 1.1));
  ctx.stroke();

  const meterInsetX = Math.max(8, Math.floor(width * 0.018));
  const meterInsetY = Math.max(7, Math.floor(height * 0.16));
  const meterX = shellX + meterInsetX;
  const meterY = shellY + meterInsetY;
  const meterWidth = Math.max(24, shellWidth - meterInsetX * 2);
  const meterHeight = Math.max(16, shellHeight - meterInsetY * 2);
  const dividerHeight = Math.max(2, Math.floor(height * 0.05));
  const laneGap = Math.max(4, Math.floor(height * 0.08));
  const laneHeight = Math.max(4, Math.floor((meterHeight - laneGap) / 2));
  const topLaneY = meterY;
  const bottomLaneY = meterY + laneHeight + laneGap;
  const topLaneBaseY = topLaneY + laneHeight - 1;
  const bottomLaneBaseY = bottomLaneY + 1;
  const peakLaneHeight = Math.max(4, laneHeight - 3);

  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.fillRect(meterX, meterY, meterWidth, meterHeight);

  const laneGradient = ctx.createLinearGradient(0, meterY, 0, meterY + meterHeight);
  laneGradient.addColorStop(0, "rgba(6, 11, 16, 0.95)");
  laneGradient.addColorStop(1, "rgba(3, 7, 11, 0.98)");
  ctx.fillStyle = laneGradient;
  ctx.fillRect(meterX, topLaneY, meterWidth, laneHeight);
  ctx.fillRect(meterX, bottomLaneY, meterWidth, laneHeight);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  ctx.strokeRect(meterX + 0.5, topLaneY + 0.5, meterWidth - 1, laneHeight - 1);
  ctx.strokeRect(meterX + 0.5, bottomLaneY + 0.5, meterWidth - 1, laneHeight - 1);

  ctx.fillStyle = "rgba(214, 225, 236, 0.2)";
  ctx.fillRect(meterX, centerY - Math.floor(dividerHeight / 2), meterWidth, dividerHeight);

  const tickStep = Math.max(8, Math.floor(meterWidth / 32));
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let x = meterX + tickStep; x < meterX + meterWidth; x += tickStep) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, topLaneY + 1);
    ctx.lineTo(x + 0.5, topLaneY + laneHeight - 1);
    ctx.moveTo(x + 0.5, bottomLaneY + 1);
    ctx.lineTo(x + 0.5, bottomLaneY + laneHeight - 1);
    ctx.stroke();
  }

  const segmentWidth = Math.max(1, Math.floor(columnStep * 0.7));
  ctx.lineCap = "round";
  const totalElapsed = Math.max(1, elapsedMs);
  const buckets = new Array(points).fill(0);
  for (let i = 0; i < recordingWaveHistory.length; i += 1) {
    const entry = recordingWaveHistory[i];
    if (!entry || typeof entry !== "object") {
      continue;
    }
    const bucketIndex = Math.max(0, Math.min(points - 1, Math.floor((Number(entry.at || 0) / totalElapsed) * (points - 1))));
    buckets[bucketIndex] = Math.max(buckets[bucketIndex], Math.max(0, Math.min(1, Number(entry.level || 0))));
  }
  for (let i = 0; i < buckets.length; i += 1) {
    const x = meterX + i * columnStep;
    if (x > meterX + meterWidth - 2) {
      break;
    }
    const loudness = buckets[i];
    const amp = Math.max(1, loudness * peakLaneHeight);
    let stroke = "rgba(65, 211, 140, 0.94)";
    if (loudness >= 0.88) {
      stroke = "rgba(255, 111, 95, 0.98)";
    } else if (loudness >= 0.68) {
      stroke = "rgba(255, 162, 79, 0.96)";
    } else if (loudness >= 0.28) {
      stroke = "rgba(255, 210, 79, 0.95)";
    }
    ctx.strokeStyle = stroke;
    ctx.lineWidth = segmentWidth;
    ctx.beginPath();
    ctx.moveTo(x, topLaneBaseY);
    ctx.lineTo(x, Math.max(topLaneY + 2, topLaneBaseY - amp));
    ctx.moveTo(x, bottomLaneBaseY);
    ctx.lineTo(x, Math.min(bottomLaneY + laneHeight - 2, bottomLaneBaseY + amp));
    ctx.stroke();
  }

  const peakAmp = Math.max(1, recordingWavePeakLevel * peakLaneHeight);
  const peakX = Math.max(meterX + 4, meterX + meterWidth - Math.max(6, Math.floor(columnStep * 1.4)));
  ctx.strokeStyle = "rgba(255, 78, 78, 0.96)";
  ctx.lineWidth = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 1.1));
  ctx.beginPath();
  ctx.moveTo(peakX, Math.max(topLaneY + 2, topLaneBaseY - peakAmp));
  ctx.lineTo(peakX, topLaneBaseY);
  ctx.moveTo(peakX, bottomLaneBaseY);
  ctx.lineTo(peakX, Math.min(bottomLaneY + laneHeight - 2, bottomLaneBaseY + peakAmp));
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 80, 96, 0.92)";
  ctx.lineWidth = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 1.25));
  ctx.beginPath();
  ctx.moveTo(meterX + meterWidth - 1.5, meterY - 2);
  ctx.lineTo(meterX + meterWidth - 1.5, meterY + meterHeight + 2);
  ctx.stroke();

  updateOnAirRecordingLevelBadge(level);
}

function disconnectRecordingWaveSources() {
  recordingWaveSources.forEach((node) => {
    try {
      node.disconnect();
    } catch (error) {
      // Ignore disconnect race.
    }
  });
  recordingWaveSources = [];
  if (recordingWaveMixNode) {
    try {
      recordingWaveMixNode.disconnect();
    } catch (error) {
      // Ignore disconnect race.
    }
    recordingWaveMixNode = null;
  }
}

async function refreshRecordingWaveSources() {
  if (!recordingWaveAudioContext || !recordingWaveAnalyser) {
    return;
  }

  disconnectRecordingWaveSources();
  recordingWaveMixNode = recordingWaveAudioContext.createGain();
  recordingWaveMixNode.gain.value = 1;
  recordingWaveMixNode.connect(recordingWaveAnalyser);

  const outgoingMicStream = micProcessedStream || micStream;
  if (outgoingMicStream && outgoingMicStream.getAudioTracks().length) {
    const micSource = recordingWaveAudioContext.createMediaStreamSource(outgoingMicStream);
    micSource.connect(recordingWaveMixNode);
    recordingWaveSources.push(micSource);
  }

  const remoteStream = onAirRemoteVideo.srcObject || remoteVideo.srcObject;
  if (remoteStream && remoteStream.getAudioTracks && remoteStream.getAudioTracks().length) {
    const remoteSource = recordingWaveAudioContext.createMediaStreamSource(remoteStream);
    remoteSource.connect(recordingWaveMixNode);
    recordingWaveSources.push(remoteSource);
  }

  const musicBusStream = onAirMixerDestinationNode && onAirMixerDestinationNode.stream ? onAirMixerDestinationNode.stream : null;
  if (musicBusStream && musicBusStream.getAudioTracks && musicBusStream.getAudioTracks().length) {
    const musicBusSource = recordingWaveAudioContext.createMediaStreamSource(musicBusStream);
    musicBusSource.connect(recordingWaveMixNode);
    recordingWaveSources.push(musicBusSource);
  }
}

function stopRecordingWave() {
  if (recordingWaveFrameId) {
    cancelAnimationFrame(recordingWaveFrameId);
    recordingWaveFrameId = null;
  }
  disconnectRecordingWaveSources();
  recordingWaveAnalyser = null;
  recordingWaveData = null;
  if (recordingWaveAudioContext) {
    recordingWaveAudioContext.close().catch(() => {
      // Ignore close race.
    });
    recordingWaveAudioContext = null;
  }
  if (recordingWaveContext && onAirRecordWave) {
    recordingWaveContext.clearRect(0, 0, onAirRecordWave.width, onAirRecordWave.height);
  }
  recordingWavePeakLevel = 0;
  recordingWavePeakHoldFrames = 0;
  updateOnAirRecordingLevelBadge(0);
}

function startRecordingWave() {
  if (!onAirRecordWave) {
    return;
  }
  stopRecordingWave();
  resizeRecordingWaveCanvas();
  recordingWaveContext = onAirRecordWave.getContext("2d");
  if (!recordingWaveContext) {
    return;
  }
  recordingWaveAudioContext = new (window.AudioContext || window.webkitAudioContext)();
  recordingWaveAnalyser = recordingWaveAudioContext.createAnalyser();
  recordingWaveAnalyser.fftSize = 1024;
  recordingWaveAnalyser.smoothingTimeConstant = 0.86;
  recordingWaveData = new Uint8Array(recordingWaveAnalyser.fftSize);
  refreshRecordingWaveSources().catch(() => {
    // Ignore source refresh failures.
  });
  if (recordingWaveAudioContext.state === "suspended") {
    recordingWaveAudioContext.resume().catch(() => {
      // Ignore resume failure.
    });
  }

  const tick = () => {
    if (!recordingWaveAnalyser || !recordingWaveData) {
      return;
    }
    resizeRecordingWaveCanvas();
  recordingWaveAnalyser.getByteTimeDomainData(recordingWaveData);
  let sum = 0;
  for (let i = 0; i < recordingWaveData.length; i += 1) {
    const value = (recordingWaveData[i] - 128) / 128;
    sum += value * value;
  }
  const rms = Math.sqrt(sum / recordingWaveData.length);
  const level = Math.min(1, Math.max(0.015, rms * 6.2));
  updateOnAirMasterMeter(Math.round(level * 100));
  drawRecordingWaveFrame(level);
  recordingWaveFrameId = requestAnimationFrame(tick);
};

  tick();
}

function hasLocalRecordingAsset() {
  return !!(
    (recordingMediaBlob && recordingMediaBlob.size > 0 && recordingMediaUrl) ||
    (recordingAudioBlob && recordingAudioBlob.size > 0 && recordingAudioUrl)
  );
}

function getSupportedRecordingMimeType() {
  const candidates = [
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=h264,opus",
    "video/webm"
  ];
  for (const type of candidates) {
    if (window.MediaRecorder && window.MediaRecorder.isTypeSupported(type)) {
      return type;
    }
  }
  return "";
}

function stopRecordingCanvasLoop() {
  if (recordingMediaCanvasFrameId) {
    cancelAnimationFrame(recordingMediaCanvasFrameId);
    recordingMediaCanvasFrameId = null;
  }
}

function disconnectRecordingAudioSources() {
  recordingMediaAudioSources.forEach((source) => {
    try {
      source.disconnect();
    } catch (error) {
      // Ignore disconnect races.
    }
  });
  recordingMediaAudioSources = [];
}

async function refreshRecordingAudioSources() {
  if (!recordingMediaAudioContext || !recordingMediaAudioDestination) {
    return;
  }

  disconnectRecordingAudioSources();

  const addAudioSource = (stream) => {
    if (!stream || !stream.getAudioTracks || !stream.getAudioTracks().length) {
      return;
    }
    const source = recordingMediaAudioContext.createMediaStreamSource(stream);
    source.connect(recordingMediaAudioDestination);
    recordingMediaAudioSources.push(source);
  };

  addAudioSource(micProcessedStream || micStream);
  addAudioSource(onAirRemoteVideo.srcObject || remoteVideo.srcObject);
  addAudioSource(onAirMixerDestinationNode && onAirMixerDestinationNode.stream ? onAirMixerDestinationNode.stream : null);

  if (recordingMediaAudioContext.state === "suspended") {
    await recordingMediaAudioContext.resume();
  }
}

function stopLocalRecordingCapture() {
  stopRecordingCanvasLoop();
  disconnectRecordingAudioSources();
  disconnectOnAirMusicRecordingStream();
  if (recordingMediaAudioContext) {
    recordingMediaAudioContext.close().catch(() => {
      // Ignore close races.
    });
    recordingMediaAudioContext = null;
  }
  recordingMediaAudioDestination = null;
  if (recordingMediaStream) {
    recordingMediaStream.getTracks().forEach((track) => track.stop());
    recordingMediaStream = null;
  }
  recordingMediaCanvas = null;
  recordingMediaCanvasContext = null;
}

function clearLocalRecordingAsset() {
  if (recordingMediaUrl) {
    URL.revokeObjectURL(recordingMediaUrl);
  }
  if (recordingAudioUrl) {
    URL.revokeObjectURL(recordingAudioUrl);
  }
  recordingMediaBlob = null;
  recordingMediaUrl = "";
  recordingMediaMimeType = "";
  recordingMediaDurationSeconds = 0;
  recordingAudioBlob = null;
  recordingAudioUrl = "";
  recordingAudioMimeType = "";
  recordingAudioDurationSeconds = 0;
  recordingAssetDurationProbeToken += 1;
  syncReviewPanelUI();
}

function clearRecordingAutomationTimers() {
  if (recordingAutoStopTimerId) {
    clearTimeout(recordingAutoStopTimerId);
    recordingAutoStopTimerId = null;
  }
  if (recordingAutoSplitTimerId) {
    clearInterval(recordingAutoSplitTimerId);
    recordingAutoSplitTimerId = null;
  }
  recordingSplitInProgress = false;
}

function getRecordingCountdownSeconds() {
  const value = Number(studioSettings.recordingDefaultCountdownSeconds || 3);
  if (value === 3 || value === 5 || value === 10) {
    return value;
  }
  return 3;
}

function getRecordingAutoStopMinutes() {
  const value = Number(studioSettings.recordingSafetyAutoStopMinutes || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getRecordingAutoSplitMinutes() {
  const value = Number(studioSettings.recordingAutoSplitMinutes || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function hasRecordingVideoSources() {
  const localStream = (onAirCameraVideo && onAirCameraVideo.srcObject) || (cameraVideo && cameraVideo.srcObject) || cameraStream || null;
  const remoteStream = (onAirRemoteVideo && onAirRemoteVideo.srcObject) || (remoteVideo && remoteVideo.srcObject) || null;
  const localReady = !!(
    localStream &&
    localStream.getVideoTracks &&
    localStream.getVideoTracks().length
  );
  const remoteReady = !!(
    remoteStream &&
    remoteStream.getVideoTracks &&
    remoteStream.getVideoTracks().length
  );
  return localReady || remoteReady;
}

function drawRecordingCompositeFrame(canvas, context, localElement, remoteElement) {
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#050a11";
  context.fillRect(0, 0, width, height);

  const localReady = !!(
    localElement &&
    localElement.srcObject &&
    localElement.srcObject.getVideoTracks &&
    localElement.srcObject.getVideoTracks().length
  );
  const remoteReady = !!(
    remoteElement &&
    remoteElement.srcObject &&
    remoteElement.srcObject.getVideoTracks &&
    remoteElement.srcObject.getVideoTracks().length
  );

  context.strokeStyle = "rgba(200, 220, 240, 0.35)";
  context.lineWidth = 2;

  const drawTile = (videoEl, x, y, w, h, mirror) => {
    if (!videoEl) {
      return;
    }
    context.save();
    if (mirror) {
      context.translate(x + w, y);
      context.scale(-1, 1);
      context.drawImage(videoEl, 0, 0, w, h);
    } else {
      context.drawImage(videoEl, x, y, w, h);
    }
    context.restore();
    context.strokeRect(x, y, w, h);
  };

  if (localReady && remoteReady) {
    const gutter = 18;
    const tileW = Math.floor((width - gutter * 3) / 2);
    const tileH = height - gutter * 2;
    drawTile(localElement, gutter, gutter, tileW, tileH, true);
    drawTile(remoteElement, gutter * 2 + tileW, gutter, tileW, tileH, false);
    return;
  }

  if (localReady) {
    drawTile(localElement, 0, 0, width, height, true);
    return;
  }

  if (remoteReady) {
    drawTile(remoteElement, 0, 0, width, height, false);
    return;
  }

  context.fillStyle = "rgba(224, 239, 255, 0.9)";
  context.font = "600 34px Barlow";
  context.textAlign = "center";
  context.fillText("Waiting for camera signal", Math.floor(width / 2), Math.floor(height / 2));
}

function startRecordingCanvasLoop() {
  if (!recordingMediaCanvas || !recordingMediaCanvasContext) {
    return;
  }
  stopRecordingCanvasLoop();
  const localElement = onAirCameraVideo || cameraVideo;
  const remoteElement = onAirRemoteVideo || remoteVideo;

  const render = () => {
    if (!recordingMediaCanvas || !recordingMediaCanvasContext) {
      return;
    }
    drawRecordingCompositeFrame(recordingMediaCanvas, recordingMediaCanvasContext, localElement, remoteElement);
    recordingMediaCanvasFrameId = requestAnimationFrame(render);
  };
  render();
}

async function buildLocalRecordingStream() {
  if (!window.MediaRecorder) {
    throw new Error("MediaRecorder is not supported in this browser.");
  }
  const output = new MediaStream();
  const includeVideo = hasRecordingVideoSources();

  if (includeVideo) {
    const canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Unable to prepare recording canvas.");
    }
    recordingMediaCanvas = canvas;
    recordingMediaCanvasContext = context;
    startRecordingCanvasLoop();

    const captureStream = canvas.captureStream(30);
    const videoTrack = captureStream.getVideoTracks()[0];
    if (videoTrack) {
      output.addTrack(videoTrack);
    }
  }

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  recordingMediaAudioContext = audioContext;
  recordingMediaAudioDestination = audioContext.createMediaStreamDestination();
  recordingMediaAudioSources = [];
  await refreshRecordingAudioSources();

  const mixedTrack = recordingMediaAudioDestination.stream.getAudioTracks()[0];
  if (mixedTrack) {
    output.addTrack(mixedTrack);
  }

  const localMicTracks = (micProcessedStream || micStream)?.getAudioTracks?.().length || 0;
  const remoteAudioTracks = (onAirRemoteVideo.srcObject || remoteVideo.srcObject)?.getAudioTracks?.().length || 0;
  const musicBusTracks = (onAirMixerDestinationNode && onAirMixerDestinationNode.stream)?.getAudioTracks?.().length || 0;
  const mixedAudioTracks = recordingMediaAudioDestination.stream.getAudioTracks().length;
  pushRecordingDiagnostic(
    "build_stream",
    "video=" +
      (includeVideo ? "on" : "off") +
      " | localMicTracks=" +
      localMicTracks +
      " | remoteAudioTracks=" +
      remoteAudioTracks +
      " | musicBusTracks=" +
      musicBusTracks +
      " | mixedAudioTracks=" +
      mixedAudioTracks,
    {
      stage: "Preparing",
      stageNote: includeVideo ? "Building video and audio capture." : "Building audio-only capture.",
      audio: mixedAudioTracks > 0 ? "Live" : "Missing",
      audioNote:
        mixedAudioTracks > 0
          ? "Recorder sees " + mixedAudioTracks + " mixed audio track" + (mixedAudioTracks === 1 ? "" : "s") + "."
          : "Recorder did not get a mixed audio track."
    }
  );

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
  return {
    stream: output,
    hasVideo: includeVideo
  };
}

async function startLocalRecordingCapture(resetAsset = true) {
  if (resetAsset) {
    clearLocalRecordingAsset();
  }
  stopLocalRecordingCapture();
  recordingMediaChunks = [];
  recordingAudioChunks = [];
  setMediaDebugEnabled(true);
  pushRecordingDiagnostic("capture_start", "resetAsset=" + (resetAsset ? "yes" : "no"), {
    stage: "Starting",
    stageNote: "Recorder is starting now.",
    chunkCount: 0,
    chunkBytes: 0,
    chunkNote: "Waiting for first chunk.",
    review: "Recording",
    reviewNote: "No review file until stop."
  });
  const recordingBuild = await buildLocalRecordingStream();
  recordingMediaStream = recordingBuild.stream;
  recordingMediaMimeType = recordingBuild.hasVideo ? getSupportedRecordingMimeType() : "";

  recordingStopPromise = new Promise((resolve) => {
    recordingStopResolve = resolve;
  });

  if (recordingBuild.hasVideo) {
    const options = recordingMediaMimeType ? { mimeType: recordingMediaMimeType } : undefined;
    recordingMediaRecorder = new MediaRecorder(recordingMediaStream, options);

    recordingMediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        recordingMediaChunks.push(event.data);
        const totalChunks = recordingMediaChunks.length + recordingAudioChunks.length;
        const totalBytes = recordingDiagnostics.chunkBytes + event.data.size;
        setRecordingDiagnosticState({
          chunkCount: totalChunks,
          chunkBytes: totalBytes,
          chunkNote:
            "Received " +
            totalChunks +
            " total chunks. Last size " +
            formatDiagnosticBytes(event.data.size) +
            "."
        });
        if (mediaDebugEnabled && recordingMediaChunks.length % 10 === 0) {
          pushMediaDebug("recording.video_chunk", "count=" + recordingMediaChunks.length + " | size=" + event.data.size);
        }
      }
    };

    recordingMediaRecorder.onstop = () => {
      const type = recordingMediaMimeType || "video/webm";
      if (recordingMediaChunks.length) {
        if (recordingMediaUrl) {
          URL.revokeObjectURL(recordingMediaUrl);
        }
        recordingMediaBlob = new Blob(recordingMediaChunks, { type });
        recordingMediaUrl = URL.createObjectURL(recordingMediaBlob);
      }
      refreshRecordingAssetDurations().catch(() => {
        // Ignore review-duration probe failures.
      });
      pushRecordingDiagnostic("video_stop", "chunks=" + recordingMediaChunks.length + " | blob=" + (recordingMediaBlob ? recordingMediaBlob.size : 0), {
        stage: "Saving",
        stageNote: "Video recorder stopped and is saving the take."
      });
      const resolve = recordingStopResolve;
      recordingStopResolve = null;
      if (resolve) {
        resolve(recordingMediaBlob || recordingAudioBlob || null);
      }
    };

    recordingMediaRecorder.onerror = () => {
      pushRecordingDiagnostic("video_error", "Video recorder error.", {
        stage: "Problem",
        stageNote: "Video recorder hit an error."
      });
      const resolve = recordingStopResolve;
      recordingStopResolve = null;
      if (resolve) {
        resolve(null);
      }
    };

    recordingMediaRecorder.start(1000);
    pushRecordingDiagnostic("video_start", "mime=" + (recordingMediaMimeType || "default"), {
      stage: "Recording",
      stageNote: "Video and audio recording is live."
    });
  } else {
    recordingMediaRecorder = null;
    pushRecordingDiagnostic("video_skip", "No live camera source, staying audio-only.", {
      stage: "Recording",
      stageNote: "Audio-only recording is live."
    });
  }

  recordingAudioMimeType = getAudioOnlyRecordingMimeType();
  const audioOptions = recordingAudioMimeType ? { mimeType: recordingAudioMimeType } : undefined;
  if (recordingMediaAudioDestination && window.MediaRecorder) {
    recordingAudioMediaRecorder = new MediaRecorder(recordingMediaAudioDestination.stream, audioOptions);
    recordingAudioMediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        recordingAudioChunks.push(event.data);
        const totalChunks = recordingMediaChunks.length + recordingAudioChunks.length;
        const totalBytes = recordingDiagnostics.chunkBytes + event.data.size;
        setRecordingDiagnosticState({
          chunkCount: totalChunks,
          chunkBytes: totalBytes,
          chunkNote:
            "Received " + totalChunks + " total chunks. Last audio size " + formatDiagnosticBytes(event.data.size) + "."
        });
        if (mediaDebugEnabled && recordingAudioChunks.length % 10 === 0) {
          pushMediaDebug("recording.audio_chunk", "count=" + recordingAudioChunks.length + " | size=" + event.data.size);
        }
      }
    };
    recordingAudioMediaRecorder.onstop = () => {
      const type = recordingAudioMimeType || "audio/webm";
      if (recordingAudioChunks.length) {
        if (recordingAudioUrl) {
          URL.revokeObjectURL(recordingAudioUrl);
        }
        recordingAudioBlob = new Blob(recordingAudioChunks, { type });
        recordingAudioUrl = URL.createObjectURL(recordingAudioBlob);
      }
      refreshRecordingAssetDurations().catch(() => {
        // Ignore review-duration probe failures.
      });
      pushRecordingDiagnostic("audio_stop", "chunks=" + recordingAudioChunks.length + " | blob=" + (recordingAudioBlob ? recordingAudioBlob.size : 0), {
        stage: "Saving",
        stageNote: "Audio recorder stopped and is saving the take."
      });
      if (!recordingMediaRecorder && recordingStopResolve) {
        const resolve = recordingStopResolve;
        recordingStopResolve = null;
        resolve(recordingAudioBlob || null);
      }
      syncReviewPanelUI();
    };
    recordingAudioMediaRecorder.start(1000);
    pushRecordingDiagnostic("audio_start", "mime=" + (recordingAudioMimeType || "default"), {
      audio: "Live",
      audioNote: "Audio recorder started and is listening."
    });
  } else {
    pushRecordingDiagnostic("audio_missing", "Audio recorder did not start.", {
      audio: "Missing",
      audioNote: "Audio recorder failed to start."
    });
  }
}

function waitForMediaRecorderStop(recorder) {
  return new Promise((resolve) => {
    if (!recorder || recorder.state === "inactive") {
      resolve();
      return;
    }

    let settled = false;
    const finalize = () => {
      if (settled) {
        return;
      }
      settled = true;
      resolve();
    };

    recorder.addEventListener("stop", finalize, { once: true });
    recorder.addEventListener("error", finalize, { once: true });

    try {
      recorder.requestData();
    } catch (error) {
      // Ignore flush timing races before stop.
    }

    try {
      recorder.stop();
    } catch (error) {
      finalize();
    }
  });
}

async function stopLocalRecordingCaptureAndFinalize() {
  const mediaRecorder = recordingMediaRecorder;
  const audioRecorder = recordingAudioMediaRecorder;
  recordingMediaRecorder = null;
  recordingAudioMediaRecorder = null;
  const stopTasks = [];

  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    stopTasks.push(waitForMediaRecorderStop(mediaRecorder));
  }
  if (audioRecorder && audioRecorder.state !== "inactive") {
    stopTasks.push(waitForMediaRecorderStop(audioRecorder));
  }

  if (stopTasks.length) {
    pushRecordingDiagnostic("finalize_wait", "recorders=" + stopTasks.length, {
      stage: "Saving",
      stageNote: "Waiting for recorder files to finish saving."
    });
    await Promise.allSettled(stopTasks);
  }

  recordingStopPromise = null;
  recordingStopResolve = null;
  stopLocalRecordingCapture();
  syncReviewPanelUI();
  pushRecordingDiagnostic(
    "finalize_done",
    "videoBlob=" +
      (recordingMediaBlob ? recordingMediaBlob.size : 0) +
      " | audioBlob=" +
      (recordingAudioBlob ? recordingAudioBlob.size : 0),
    {
      stage: "Saved",
      stageNote: "Recorder finished saving review files.",
      review: recordingMediaBlob || recordingAudioBlob ? "Ready" : "Missing",
      reviewNote: recordingMediaBlob || recordingAudioBlob ? "Review file saved for playback." : "Recorder stopped without a saved review file."
    }
  );
  return recordingMediaBlob || recordingAudioBlob;
}

function abortLocalRecordingCapture() {
  if (recordingMediaRecorder && recordingMediaRecorder.state !== "inactive") {
    try {
      recordingMediaRecorder.stop();
    } catch (error) {
      // Ignore stop errors on teardown.
    }
  }
  recordingMediaRecorder = null;
  if (recordingAudioMediaRecorder && recordingAudioMediaRecorder.state !== "inactive") {
    try {
      recordingAudioMediaRecorder.stop();
    } catch (error) {
      // Ignore teardown stop races.
    }
  }
  recordingAudioMediaRecorder = null;
  recordingStopPromise = null;
  recordingStopResolve = null;
  stopLocalRecordingCapture();
}

function stopMicStream() {
  pushMediaDebug("mic.stop");
  stopMicLoopback();
  if (micStream) {
    micStream.getTracks().forEach((track) => track.stop());
    micStream = null;
  }
  if (micProcessedStream) {
    micProcessedStream.getTracks().forEach((track) => track.stop());
    micProcessedStream = null;
  }
  disconnectOutgoingProgramAudioSources();
  stopMicMeter();
  micInputSourceNode = null;
  micInputGainNode = null;
  micNoiseGateAnalyser = null;
  micNoiseGateGainNode = null;
  micLimiterNode = null;
  micLoudnessGainNode = null;
  micMonitorGainNode = null;
  micProcessedDestination = null;
  micAnalyser = null;
  micMeterData = null;
  micNoiseGateOpen = true;
  if (micAudioContext) {
    micAudioContext.close().catch(() => {
      // Ignore close errors.
    });
    micAudioContext = null;
  }
  micStandbyDisabled = false;
  micMuted = false;
  syncMicMonitoringOutput();
  setMicActiveUI(false);
  updateEchoWarning();
  refreshOutgoingProgramAudioStream().then(() => {
    addLocalTracksToPeerConnection();
    if (useTwilioVideoRoom()) {
      syncTwilioPublishedTracks().catch(() => {
        // Ignore Twilio sync races after mic stop.
      });
    }
  }).catch(() => {
    // Ignore outbound audio refresh failures on teardown.
  });
  if (isRecording) {
    refreshRecordingWaveSources().catch(() => {
      // Ignore source refresh failures.
    });
  }
}

function stopMicLoopback() {
  if (micLoopbackStopTimer) {
    clearTimeout(micLoopbackStopTimer);
    micLoopbackStopTimer = null;
  }
  if (micLoopbackSource) {
    try {
      micLoopbackSource.disconnect();
    } catch (error) {
      // Ignore disconnect errors.
    }
    micLoopbackSource = null;
  }
  if (micLoopbackGain) {
    try {
      micLoopbackGain.disconnect();
    } catch (error) {
      // Ignore disconnect errors.
    }
    micLoopbackGain = null;
  }
  if (micLoopbackContext) {
    micLoopbackContext.close().catch(() => {
      // Ignore close errors.
    });
    micLoopbackContext = null;
  }
  if (micLoopbackBtn) {
    micLoopbackBtn.classList.remove("active");
    micLoopbackBtn.textContent = "Test My Mic";
  }
  if (micLoopbackStatus) {
    micLoopbackStatus.textContent = "Local loopback test is off.";
  }
}

async function startMicLoopback() {
  const loopbackStream = micProcessedStream || micStream;
  if (!loopbackStream) {
    setMicStatus("Start microphone first, then run Test My Mic.", true);
    return;
  }
  if (micLoopbackContext) {
    stopMicLoopback();
    return;
  }

  try {
    micLoopbackContext = new (window.AudioContext || window.webkitAudioContext)();
    micLoopbackSource = micLoopbackContext.createMediaStreamSource(loopbackStream);
    micLoopbackGain = micLoopbackContext.createGain();
    micLoopbackGain.gain.value = 0.95;
    micLoopbackSource.connect(micLoopbackGain);
    micLoopbackGain.connect(micLoopbackContext.destination);
    if (micLoopbackContext.state === "suspended") {
      await micLoopbackContext.resume();
    }
    if (micLoopbackBtn) {
      micLoopbackBtn.classList.add("active");
      micLoopbackBtn.textContent = "Stop Test";
    }
    if (micLoopbackStatus) {
      micLoopbackStatus.textContent = "Mic test running. You should hear yourself.";
    }
    micLoopbackStopTimer = setTimeout(() => {
      stopMicLoopback();
      if (micLoopbackStatus) {
        micLoopbackStatus.textContent = "Mic test complete.";
      }
    }, 12000);
  } catch (error) {
    stopMicLoopback();
    if (micLoopbackStatus) {
      micLoopbackStatus.textContent = "Mic test failed. Check speaker output permissions.";
    }
  }
}

function setLocalCameraEnabled(enabled) {
  if (!cameraStream) {
    return false;
  }
  const track = cameraStream.getVideoTracks()[0];
  if (!track) {
    return false;
  }
  track.enabled = enabled;
  const rawTrack = rawCameraStream ? rawCameraStream.getVideoTracks()[0] : null;
  if (rawTrack) {
    rawTrack.enabled = enabled;
  }
  cameraVideo.classList.toggle("camera-muted", !enabled);
  onAirCameraVideo.classList.toggle("camera-muted", !enabled);
  if (cameraEnabledToggle) {
    cameraEnabledToggle.checked = !!enabled;
  }
  updateOnAirCameraPauseUI();
  if (enabled) {
    setCameraStatus("Camera is live.");
  } else {
    setCameraStatus("Camera is off for you. You can still see others.");
  }
  addLocalTracksToPeerConnection();
  if (peerConnection && activePeerUsername) {
    renegotiatePeerConnection(enabled ? "Camera live. Updating video room..." : "Camera off. Updating video room...").catch(() => {
      // Ignore renegotiation races while toggling camera state.
    });
  }
  return true;
}

function closePeerConnection() {
  if (useTwilioVideoRoom()) {
    pushMediaDebug("twilio.room.localDisconnect", "closePeerConnection");
    twilioLocalDisconnectRequested = true;
    clearMediaConnectRetryTimer();
    pendingIceCandidates = [];
    if (twilioVideoRoom) {
      try {
        twilioVideoRoom.disconnect();
      } catch (error) {
        // Ignore room disconnect races.
      }
    }
    twilioVideoRoom = null;
    twilioRemoteParticipant = null;
    twilioLocalVideoTrack = null;
    twilioLocalVideoSourceId = "";
    twilioLocalAudioTrack = null;
    twilioLocalAudioSourceId = "";
    activePeerUsername = "";
    hasSentOffer = false;
    videoSender = null;
    audioSender = null;
    clearRemoteMediaElements();
    updateRemoteVideoLabel(getTargetPeer() || "Guest");
    applySpotlightUI();
    return;
  }
  clearMediaConnectRetryTimer();
  pendingIceCandidates = [];
  if (peerConnection) {
    peerConnection.onicecandidate = null;
    peerConnection.ontrack = null;
    peerConnection.onconnectionstatechange = null;
    peerConnection.oniceconnectionstatechange = null;
    peerConnection.close();
    peerConnection = null;
  }
  remoteVideo.srcObject = null;
  if (remoteAudio) {
    remoteAudio.srcObject = null;
  }
  onAirRemoteVideo.srcObject = null;
  activePeerUsername = "";
  hasSentOffer = false;
  videoSender = null;
  audioSender = null;
  updateRemoteVideoLabel(getTargetPeer() || "Guest");
  updateRemoteTileVisibility();
  applySpotlightUI();
  if (isRecording) {
    refreshRecordingWaveSources().catch(() => {
      // Ignore source refresh failures.
    });
  }
}

function addLocalTracksToPeerConnection() {
  if (useTwilioVideoRoom()) {
    syncTwilioPublishedTracks().catch((error) => {
      const message = error && error.message ? String(error.message) : "Twilio room update failed.";
      setVideoRoomStatus(message, true);
    });
    return;
  }
  if (!peerConnection) {
    return;
  }
  const videoTrack = cameraStream ? cameraStream.getVideoTracks()[0] : null;
  const outgoingAudioStream = getOutgoingAudioStream();
  const audioTrack = getOutgoingAudioTrack();
  const getTransceivers = () => (typeof peerConnection.getTransceivers === "function" ? peerConnection.getTransceivers() : []);
  const findTransceiverBySender = (sender) => getTransceivers().find((entry) => entry && entry.sender === sender);
  const transceivers = getTransceivers();

  if (!videoSender && typeof peerConnection.addTransceiver === "function") {
    const existingVideo = transceivers.find((entry) => entry && entry.sender && entry.sender.track && entry.sender.track.kind === "video");
    if (existingVideo) {
      videoSender = existingVideo.sender;
    } else {
      const transceiver = peerConnection.addTransceiver("video", { direction: videoTrack ? "sendrecv" : "recvonly" });
      videoSender = transceiver ? transceiver.sender : null;
    }
  }
  if (!audioSender && typeof peerConnection.addTransceiver === "function") {
    const existingAudio = transceivers.find((entry) => entry && entry.sender && entry.sender.track && entry.sender.track.kind === "audio");
    if (existingAudio) {
      audioSender = existingAudio.sender;
    } else {
      const transceiver = peerConnection.addTransceiver("audio", { direction: audioTrack ? "sendrecv" : "recvonly" });
      audioSender = transceiver ? transceiver.sender : null;
    }
  }

  if (videoTrack) {
    if (!videoSender) {
      videoSender = peerConnection.addTrack(videoTrack, cameraStream);
    } else {
      videoSender.replaceTrack(videoTrack).catch(() => {
        // Ignore replacement errors during reconnect races.
      });
    }
    const videoTransceiver = findTransceiverBySender(videoSender);
    if (videoTransceiver && videoTransceiver.direction !== "sendrecv") {
      videoTransceiver.direction = "sendrecv";
    }
  } else if (videoSender) {
    videoSender.replaceTrack(null).catch(() => {
      // Ignore replacement errors.
    });
    const videoTransceiver = findTransceiverBySender(videoSender);
    if (videoTransceiver && videoTransceiver.direction !== "recvonly") {
      videoTransceiver.direction = "recvonly";
    }
  }

  if (audioTrack) {
    if (!audioSender) {
      audioSender = peerConnection.addTrack(audioTrack, outgoingAudioStream);
    } else {
      audioSender.replaceTrack(audioTrack).catch(() => {
        // Ignore replacement errors during reconnect races.
      });
    }
    const audioTransceiver = findTransceiverBySender(audioSender);
    if (audioTransceiver && audioTransceiver.direction !== "sendrecv") {
      audioTransceiver.direction = "sendrecv";
    }
  } else if (audioSender) {
    audioSender.replaceTrack(null).catch(() => {
      // Ignore replacement errors.
    });
    const audioTransceiver = findTransceiverBySender(audioSender);
    if (audioTransceiver && audioTransceiver.direction !== "recvonly") {
      audioTransceiver.direction = "recvonly";
    }
  }
}

async function loadCameraDevices() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    setCameraStatus("Camera controls are not supported in this browser.", true);
    return;
  }

  const devices = await navigator.mediaDevices.enumerateDevices();
  const cameras = devices.filter((device) => device.kind === "videoinput");
  cameraDeviceSelect.innerHTML = "";

  if (!cameras.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "📷 No camera found";
    cameraDeviceSelect.appendChild(option);
    setCameraStatus("No camera detected on this device.", true);
    return;
  }

  cameras.forEach((camera, index) => {
    const option = document.createElement("option");
    option.value = camera.deviceId;
    option.textContent = "📷 " + (camera.label || "Camera " + (index + 1));
    cameraDeviceSelect.appendChild(option);
  });

  if (studioSettings.preferredCameraId) {
    const exists = cameras.some((camera) => camera.deviceId === studioSettings.preferredCameraId);
    if (exists) {
      cameraDeviceSelect.value = studioSettings.preferredCameraId;
    }
  }
  updatePreflightSummary();
}

async function startCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setCameraStatus("Camera access is not supported in this browser.", true);
    return false;
  }

  const selectedId = cameraDeviceSelect.value;
  const constraints = {
    video: selectedId
      ? {
          deviceId: { exact: selectedId },
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        }
      : { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
    audio: false
  };

  try {
    stopCameraStream();
    pushMediaDebug("camera.start.request", selectedId || "default");
    rawCameraStream = await navigator.mediaDevices.getUserMedia(constraints);
    applyPermissionState("camera", "granted");
    await applyCameraOutputStream();
    syncOnAirVideoViews();
    const currentTrack = rawCameraStream.getVideoTracks()[0];
    pushMediaDebug("camera.start.success", currentTrack && currentTrack.id ? currentTrack.id : "track");
    const currentDeviceId = currentTrack && currentTrack.getSettings ? currentTrack.getSettings().deviceId : "";
    studioSettings = window.TBRAuth.saveStudioSettings({
      preferredCameraId: currentDeviceId || selectedId || ""
    });
    setCameraStatus("Camera is live.");
    if (cameraEnabledToggle) {
      cameraEnabledToggle.checked = true;
    }
    await loadCameraDevices();
    addLocalTracksToPeerConnection();
    if (peerConnection && activePeerUsername) {
      await renegotiatePeerConnection("Camera live. Updating video room...").catch(() => false);
    }
    if (realtimeEnabled && !videoRoomEnabled) {
      videoRoomEnabled = true;
      setVideoRoomStatus("Camera live. Joining video room...");
      await maybeStartVideoRoomConnection();
    }
    return true;
  } catch (error) {
    pushMediaDebug("camera.start.error", error && error.message ? error.message : String(error));
    if (error && error.name === "NotAllowedError") {
      setCameraStatus("Camera permission denied. Allow access and try again.", true);
      await refreshPermissionPanel();
      return false;
    }
    setCameraStatus("Unable to start camera on this device.", true);
    return false;
  }
}

async function loadMicDevices() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    setMicStatus("Microphone controls are not supported in this browser.", true);
    return;
  }

  const devices = await navigator.mediaDevices.enumerateDevices();
  const mics = devices.filter((device) => device.kind === "audioinput");
  micDeviceSelect.innerHTML = "";

  if (!mics.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "🎤 No microphone found";
    micDeviceSelect.appendChild(option);
    setMicStatus("No microphone detected on this device.", true);
    return;
  }

  mics.forEach((mic, index) => {
    const option = document.createElement("option");
    option.value = mic.deviceId;
    option.textContent = "🎤 " + (mic.label || "Microphone " + (index + 1));
    micDeviceSelect.appendChild(option);
  });

  if (studioSettings.preferredMicId) {
    const exists = mics.some((mic) => mic.deviceId === studioSettings.preferredMicId);
    if (exists) {
      micDeviceSelect.value = studioSettings.preferredMicId;
    }
  }
  updatePreflightSummary();
}

if (speakerDeviceSelect) {
  speakerDeviceSelect.addEventListener("change", async () => {
    const applied = await applySpeakerOutput(speakerDeviceSelect.value || "", true);
    if (!applied) {
      speakerDeviceSelect.value = studioSettings.preferredSpeakerId || "";
    }
  });
}

function startMicMeter() {
  if (!micAnalyser || !micNoiseGateAnalyser || !micMeterData) {
    return;
  }

  const tick = () => {
    if (!micAnalyser || !micNoiseGateAnalyser || !micMeterData) {
      return;
    }
    micNoiseGateAnalyser.getByteTimeDomainData(micMeterData);
    let sum = 0;
    for (let i = 0; i < micMeterData.length; i += 1) {
      const value = (micMeterData[i] - 128) / 128;
      sum += value * value;
    }
    const rms = Math.sqrt(sum / micMeterData.length);
    const gateThreshold = getNoiseGateThresholdDb();
    if (micNoiseGateGainNode && micAudioContext && gateThreshold > -100) {
      const db = 20 * Math.log10(Math.max(rms, 1e-4));
      const openThreshold = gateThreshold + 2;
      const closeThreshold = gateThreshold - 2;
      const shouldOpen = micNoiseGateOpen ? db > closeThreshold : db >= openThreshold;
      if (shouldOpen !== micNoiseGateOpen) {
        micNoiseGateOpen = shouldOpen;
        const target = shouldOpen ? 1 : 0.08;
        const timeConstant = shouldOpen ? 0.008 : 0.05;
        micNoiseGateGainNode.gain.setTargetAtTime(target, micAudioContext.currentTime, timeConstant);
      }
    }
    micAnalyser.getByteTimeDomainData(micMeterData);
    sum = 0;
    for (let i = 0; i < micMeterData.length; i += 1) {
      const value = (micMeterData[i] - 128) / 128;
      sum += value * value;
    }
    const meterRms = Math.sqrt(sum / micMeterData.length);
    const level = Math.min(100, Math.max(0, Math.round(meterRms * 260)));
    currentMicMeterLevel = level;
    micMeterFill.style.width = level + "%";
    const micMeterTrack = micMeterFill.parentElement;
    if (micMeterTrack) {
      micMeterTrack.classList.remove("safe", "healthy", "hot", "clip");
      if (level >= 88) {
        micMeterTrack.classList.add("clip");
      } else if (level >= 68) {
        micMeterTrack.classList.add("hot");
      } else if (level >= 28) {
        micMeterTrack.classList.add("healthy");
      } else {
        micMeterTrack.classList.add("safe");
      }
    }
    if (onAirLiveMicMeterFill) {
      onAirLiveMicMeterFill.style.width = level + "%";
      const liveMicTrack = onAirLiveMicMeterFill.parentElement;
      if (liveMicTrack) {
        liveMicTrack.classList.remove("safe", "healthy", "hot", "clip");
        if (level >= 88) {
          liveMicTrack.classList.add("clip");
        } else if (level >= 68) {
          liveMicTrack.classList.add("hot");
        } else if (level >= 28) {
          liveMicTrack.classList.add("healthy");
        } else {
          liveMicTrack.classList.add("safe");
        }
      }
    }
    applyOnAirMusicOutputVolume(false);
    micMeterFrameId = requestAnimationFrame(tick);
  };

  stopMicMeter();
  micMeterFrameId = requestAnimationFrame(tick);
}

async function startMic() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setMicStatus("Microphone access is not supported in this browser.", true);
    return false;
  }

  const selectedId = micDeviceSelect.value;
  const constraints = {
    audio: {
      deviceId: selectedId ? { exact: selectedId } : undefined,
      echoCancellation: studioSettings.micEchoCancellation !== false,
      noiseSuppression: studioSettings.micNoiseSuppression !== false,
      autoGainControl: studioSettings.micAutoGainControl !== false
    },
    video: false
  };

  try {
    stopMicStream();
    pushMediaDebug("mic.start.request", selectedId || "default");
    micStream = await navigator.mediaDevices.getUserMedia(constraints);
    applyPermissionState("microphone", "granted");
    const track = micStream.getAudioTracks()[0];
    pushMediaDebug("mic.start.success", track && track.id ? track.id : "track");
    const currentDeviceId = track && track.getSettings ? track.getSettings().deviceId : "";
    studioSettings = window.TBRAuth.saveStudioSettings({
      preferredMicId: currentDeviceId || selectedId || "",
      micEchoCancellation: studioSettings.micEchoCancellation !== false,
      micNoiseSuppression: studioSettings.micNoiseSuppression !== false,
      micAutoGainControl: studioSettings.micAutoGainControl !== false
    });

    micAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    micInputSourceNode = micAudioContext.createMediaStreamSource(micStream);
    micInputGainNode = micAudioContext.createGain();
    micInputGainNode.gain.value = getMicGainPercent() / 100;
    micNoiseGateAnalyser = micAudioContext.createAnalyser();
    micNoiseGateAnalyser.fftSize = 1024;
    micNoiseGateAnalyser.smoothingTimeConstant = 0.78;
    micNoiseGateGainNode = micAudioContext.createGain();
    micNoiseGateGainNode.gain.value = 1;
    micLimiterNode = micAudioContext.createDynamicsCompressor();
    micLimiterNode.threshold.value = -6;
    micLimiterNode.knee.value = 8;
    micLimiterNode.ratio.value = 12;
    micLimiterNode.attack.value = 0.003;
    micLimiterNode.release.value = 0.25;
    micLoudnessGainNode = micAudioContext.createGain();
    micLoudnessGainNode.gain.value = getLoudnessGainForPreset(getLoudnessPreset());
    micMonitorGainNode = micAudioContext.createGain();
    micMonitorGainNode.gain.value = 0.72;
    micAnalyser = micAudioContext.createAnalyser();
    micAnalyser.fftSize = 1024;
    micAnalyser.smoothingTimeConstant = 0.84;
    micProcessedDestination = micAudioContext.createMediaStreamDestination();
    micNoiseGateOpen = getNoiseGateThresholdDb() <= -100;
    rebuildMicProcessingGraph();
    applyNoiseGateThresholdDb(getNoiseGateThresholdDb(), false);
    applyLoudnessTargetPreset(getLoudnessPreset(), false);
    micProcessedStream = micProcessedDestination.stream;
    micMeterData = new Uint8Array(micAnalyser.fftSize);
    if (micAudioContext.state === "suspended") {
      await micAudioContext.resume();
    }
    startMicMeter();
    micStandbyDisabled = false;
    micMuted = false;
    setMicStatus("Mic is live. Speak to test levels.");
    setAudioRackStatus("Audio rack live. Adjust controls in real time.", false);
    setMicActiveUI(true);
    updateEchoWarning();
    await refreshOutgoingProgramAudioStream();
    addLocalTracksToPeerConnection();
    await loadMicDevices();
    if (isRecording) {
      refreshRecordingWaveSources().catch(() => {
        // Ignore source refresh failures.
      });
    }
    return true;
  } catch (error) {
    pushMediaDebug("mic.start.error", error && error.message ? error.message : String(error));
    setMicActiveUI(false);
    if (error && error.name === "NotAllowedError") {
      setMicStatus("Microphone permission denied. Allow access and try again.", true);
      await refreshPermissionPanel();
      return false;
    }
    setMicStatus("Unable to start microphone on this device.", true);
    return false;
  }
}

function renderUnread() {
  chatUnreadCount.textContent = String(unreadCount);
  const disableAll = !!studioSettings.chatAlertsDisabledAll;
  const badgeEnabled = !disableAll && studioSettings.chatBadgeEnabled !== false;
  chatUnreadCount.classList.toggle("hidden", unreadCount === 0 || !badgeEnabled);
}

function setChatStatus(text, tone) {
  if (!chatStatusEl) {
    return;
  }
  const now = Date.now();
  if (now < chatStatusLockUntil && tone !== "error") {
    return;
  }
  const nextText = String(text || CHAT_STATUS_DEFAULT || "").trim();
  chatStatusEl.textContent = nextText;
  chatStatusEl.classList.toggle("hidden", !nextText);
  chatStatusEl.classList.remove("ok", "warn", "error");
  if (tone === "ok" || tone === "warn" || tone === "error") {
    chatStatusEl.classList.add(tone);
  }
}

function setLockedChatErrorStatus(text, lockMs) {
  const ms = Math.max(0, Number(lockMs || 0));
  chatStatusLockUntil = Date.now() + ms;
  setChatStatus(text, "error");
}

function setChatOnlineState(text, isOnline) {
  if (!chatOnlineStatus) {
    return;
  }
  chatOnlineStatus.textContent = String(text || "");
  chatOnlineStatus.classList.toggle("online", !!isOnline);
  chatOnlineStatus.classList.toggle("offline", !isOnline);
}

function renderTypingIndicator() {
  if (!chatMessages) {
    return;
  }
  const existing = chatMessages.querySelector("." + CHAT_TYPING_STREAM_CLASS);
  const others = typingUsers
    .filter((item) => item && item.username && item.username !== session.username)
    .map((item) => String(item.displayName || item.username));
  if (!others.length) {
    if (existing) {
      existing.remove();
    }
    return;
  }
  let label = "";
  if (others.length === 1) {
    label = others[0];
  } else if (others.length === 2) {
    label = others[0] + " & " + others[1];
  } else {
    label = others[0] + " +" + String(others.length - 1);
  }
  const shouldStickBottom = chatMessages.scrollTop + chatMessages.clientHeight >= chatMessages.scrollHeight - 20;
  let bubble = existing;
  if (!bubble) {
    bubble = document.createElement("div");
    bubble.className = "chat-message remote " + CHAT_TYPING_STREAM_CLASS;
    bubble.setAttribute("role", "status");
    bubble.setAttribute("aria-live", "polite");
    const paragraph = document.createElement("p");
    paragraph.className = "chat-message-text";
    const labelSpan = document.createElement("span");
    labelSpan.className = "chat-typing-label";
    const dots = document.createElement("span");
    dots.className = "chat-typing-dots";
    dots.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement("i");
      dots.appendChild(dot);
    }
    paragraph.appendChild(labelSpan);
    paragraph.appendChild(dots);
    bubble.appendChild(paragraph);
    chatMessages.appendChild(bubble);
  } else {
    chatMessages.appendChild(bubble);
  }
  const labelEl = bubble.querySelector(".chat-typing-label");
  if (labelEl) {
    labelEl.textContent = label;
  }
  if (shouldStickBottom) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function setTypingUsers(nextUsers) {
  typingUsers = Array.isArray(nextUsers) ? nextUsers : [];
  renderTypingIndicator();
}

function canEditChatMessage(entry, nowMs) {
  if (!entry || entry.kind === "system" || entry.deleted) {
    return false;
  }
  if (entry.username !== session.username) {
    return false;
  }
  const now = Number.isFinite(nowMs) ? nowMs : Date.now();
  const createdAt = Number(entry.timestamp || 0);
  if (!createdAt) {
    return false;
  }
  return now - createdAt <= CHAT_EDIT_WINDOW_MS;
}

function updateChatComposerEditMode() {
  const editing = Boolean(editingMessageId);
  if (chatSendBtn) {
    chatSendBtn.textContent = editing ? "Save Edit" : "Send";
  }
  if (chatInput) {
    chatInput.placeholder = editing ? "Edit message..." : "Type a message...";
  }
}

function buildReplyPayloadFromEntry(entry) {
  if (!entry || entry.kind === "system" || entry.deleted) {
    return null;
  }
  const text = String(entry.text || "").trim();
  return {
    id: Number(entry.id || 0),
    username: String(entry.username || "").trim().toLowerCase(),
    displayName: getEntryDisplayName(entry),
    text: text.slice(0, 160)
  };
}

function renderReplyPreview() {
  if (!chatReplyPreview || !chatReplyPreviewTitle || !chatReplyPreviewText) {
    return;
  }
  if (!replyingToMessage || !replyingToMessage.id) {
    chatReplyPreview.classList.add("hidden");
    return;
  }
  const name =
    replyingToMessage.username === session.username ? "You" : String(replyingToMessage.displayName || replyingToMessage.username);
  chatReplyPreviewTitle.textContent = "Replying to " + name;
  chatReplyPreviewText.textContent = String(replyingToMessage.text || "");
  chatReplyPreview.classList.remove("hidden");
}

function clearReplyingMessage() {
  replyingToMessageId = 0;
  replyingToMessage = null;
  renderReplyPreview();
}

function startReplyingMessage(entry) {
  const payload = buildReplyPayloadFromEntry(entry);
  if (!payload || !payload.id) {
    return false;
  }
  if (editingMessageId) {
    clearEditingMessageStatus();
  }
  replyingToMessageId = payload.id;
  replyingToMessage = payload;
  renderReplyPreview();
  chatInput.focus();
  setChatStatus("Replying to message #" + String(payload.id) + ".", "ok");
  return true;
}

function clearEditingMessageStatus() {
  editingMessageId = 0;
  editingMessageExpireAt = 0;
  if (editingMessageTimer) {
    clearTimeout(editingMessageTimer);
    editingMessageTimer = null;
  }
  updateChatComposerEditMode();
}

function startEditingMessage(entry) {
  if (!entry || !canEditChatMessage(entry)) {
    setChatStatus("Edit window expired (60s).", "warn");
    return false;
  }
  if (pendingAttachment) {
    clearPendingAttachment();
  }
  const expireAt = Number(entry.timestamp || 0) + CHAT_EDIT_WINDOW_MS;
  const remainingMs = expireAt - Date.now();
  if (remainingMs <= 0) {
    setChatStatus("Edit window expired (60s).", "warn");
    return false;
  }
  clearEditingMessageStatus();
  clearReplyingMessage();
  editingMessageId = Number(entry.id || 0);
  editingMessageExpireAt = expireAt;
  chatInput.value = String(entry.text || "");
  chatInput.focus();
  chatInput.setSelectionRange(chatInput.value.length, chatInput.value.length);
  resizeChatInput();
  writeSessionValue(CHAT_DRAFT_KEY, chatInput.value);
  updateChatComposerEditMode();
  setChatStatus("Editing message. Send within 60 seconds of original post.", "warn");
  editingMessageTimer = setTimeout(() => {
    if (!editingMessageId) {
      return;
    }
    clearEditingMessageStatus();
    setChatStatus("Edit timed out after 60 seconds.", "warn");
  }, remainingMs);
  return true;
}

function resizeChatInput() {
  if (!chatInput) {
    return;
  }
  chatInput.style.height = "auto";
  const next = Math.min(chatInput.scrollHeight, 128);
  chatInput.style.height = String(Math.max(40, next)) + "px";
}

function resizeScheduleMessageInput() {
  if (!chatScheduleMessageInput) {
    return;
  }
  chatScheduleMessageInput.style.height = "auto";
  const next = Math.min(chatScheduleMessageInput.scrollHeight, 128);
  chatScheduleMessageInput.style.height = String(Math.max(40, next)) + "px";
}

function setQuickNotesOpen(open) {
  quickNotesOpen = !!open;
  if (!chatQuickToggle || !chatQuickNotes) {
    return;
  }
  chatQuickToggle.setAttribute("aria-expanded", quickNotesOpen ? "true" : "false");
  chatQuickNotes.classList.toggle("collapsed", !quickNotesOpen);
}

function setAttachmentProgress(percent) {
  if (!chatAttachProgress) {
    return;
  }
  const clamped = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  chatAttachProgress.style.width = clamped + "%";
}

function clearAttachmentStageProgressTimer() {
  if (attachmentStageProgressTimer) {
    clearInterval(attachmentStageProgressTimer);
    attachmentStageProgressTimer = null;
  }
}

function setAttachmentPreviewState(state) {
  if (!chatAttachPreview) {
    return;
  }
  const next = String(state || "").trim();
  chatAttachPreview.dataset.state = next;
}

function startAttachmentStageProgress(label) {
  if (!chatAttachPreview || !chatAttachPreviewText) {
    return;
  }
  clearAttachmentStageProgressTimer();
  chatAttachPreview.classList.remove("hidden");
  setAttachmentPreviewState("staging");
  chatAttachPreviewText.textContent = label || "Preparing attachment...";
  setAttachmentProgress(8);
  let progress = 8;
  attachmentStageProgressTimer = window.setInterval(() => {
    progress = Math.min(88, progress + (progress < 48 ? 11 : progress < 72 ? 7 : 3));
    setAttachmentProgress(progress);
    if (progress >= 88) {
      clearAttachmentStageProgressTimer();
    }
  }, 120);
}

function completeAttachmentStageProgress(label) {
  clearAttachmentStageProgressTimer();
  if (!chatAttachPreview || !chatAttachPreviewText) {
    return;
  }
  setAttachmentPreviewState("ready");
  setAttachmentProgress(100);
  if (label) {
    chatAttachPreviewText.textContent = label;
  }
}

function setAttachmentBusy(isBusy) {
  if (chatAttachCancelBtn) {
    chatAttachCancelBtn.classList.toggle("hidden", !isBusy);
  }
  if (chatAttachRetryBtn) {
    chatAttachRetryBtn.classList.add("hidden");
  }
}

function setAttachmentRetryVisible(show) {
  if (!chatAttachRetryBtn) {
    return;
  }
  chatAttachRetryBtn.classList.toggle("hidden", !show);
}

function clearSearchHighlights() {
  searchResults.forEach((el) => {
    el.classList.remove("chat-search-hit", "active");
  });
  searchResults = [];
  searchResultIndex = -1;
}

function runChatSearch(query) {
  clearSearchHighlights();
  const term = String(query || "").trim().toLowerCase();
  if (!term) {
    return;
  }
  const nodes = Array.from(chatMessages.querySelectorAll(".chat-message"));
  searchResults = nodes.filter((node) => {
    const text = String(node.textContent || "").toLowerCase();
    return text.includes(term);
  });
  searchResults.forEach((node) => node.classList.add("chat-search-hit"));
  if (!searchResults.length) {
    return;
  }
  searchResultIndex = 0;
  const target = searchResults[0];
  target.classList.add("active");
  target.scrollIntoView({ block: "center", behavior: "smooth" });
}

function jumpToNextSearchResult() {
  if (!searchResults.length) {
    return;
  }
  searchResults.forEach((node) => node.classList.remove("active"));
  searchResultIndex = (searchResultIndex + 1) % searchResults.length;
  const target = searchResults[searchResultIndex];
  target.classList.add("active");
  target.scrollIntoView({ block: "center", behavior: "smooth" });
}

function clearPendingAttachment() {
  if (attachmentUploadXhr) {
    attachmentUploadXhr.abort();
    attachmentUploadXhr = null;
  }
  clearAttachmentStageProgressTimer();
  pendingAttachment = null;
  pendingAttachmentRetry = null;
  if (chatAttachInput) {
    chatAttachInput.value = "";
  }
  if (chatAttachPreview) {
    chatAttachPreview.classList.add("hidden");
  }
  setAttachmentProgress(0);
  setAttachmentPreviewState("");
  setAttachmentBusy(false);
  setAttachmentRetryVisible(false);
}

function showPendingAttachmentPreview(payload) {
  if (!chatAttachPreview || !chatAttachPreviewText || !payload) {
    return;
  }
  const summary =
    payload.kind === "video"
      ? "Video ready: " + payload.name + " (" + String(payload.durationSeconds || 0) + "s)"
      : "Image ready: " + payload.name;
  chatAttachPreview.classList.remove("hidden");
  completeAttachmentStageProgress(summary);
}

function triggerDataUrlDownload(dataUrl, filename) {
  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = filename || "chat-media";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function openChatMediaPreview(payload) {
  if (!chatMediaModal || !chatMediaModalBody || !payload || !payload.dataUrl) {
    return;
  }
  chatMediaPreviewPayload = payload;
  chatMediaModalBody.innerHTML = "";
  if (payload.kind === "image") {
    const img = document.createElement("img");
    img.src = payload.dataUrl;
    img.alt = payload.name || "Shared image";
    chatMediaModalBody.appendChild(img);
  } else if (payload.kind === "video") {
    const video = document.createElement("video");
    video.src = payload.dataUrl;
    video.controls = true;
    video.autoplay = true;
    chatMediaModalBody.appendChild(video);
  }
  chatMediaModal.classList.remove("hidden");
  chatMediaModal.setAttribute("aria-hidden", "false");
}

function closeChatMediaPreview() {
  if (!chatMediaModal || !chatMediaModalBody) {
    return;
  }
  chatMediaModal.classList.add("hidden");
  chatMediaModal.setAttribute("aria-hidden", "true");
  chatMediaModalBody.innerHTML = "";
  chatMediaPreviewPayload = null;
}

function closeChatConfirmDialog(result) {
  if (!chatConfirmModal) {
    return;
  }
  chatConfirmModal.classList.add("hidden");
  chatConfirmModal.setAttribute("aria-hidden", "true");
  if (pendingChatConfirmResolver) {
    const resolve = pendingChatConfirmResolver;
    pendingChatConfirmResolver = null;
    resolve(!!result);
  }
}

function openChatConfirmDialog(message, title, okLabel) {
  if (!chatConfirmModal || !chatConfirmTitle || !chatConfirmText || !chatConfirmOkBtn) {
    return Promise.resolve(window.confirm(String(message || "Are you sure?")));
  }
  if (pendingChatConfirmResolver) {
    // Close any stale pending confirm to avoid resolver deadlocks.
    const pendingResolve = pendingChatConfirmResolver;
    pendingChatConfirmResolver = null;
    pendingResolve(false);
  }
  chatConfirmTitle.textContent = title || "Confirm";
  chatConfirmText.textContent = message || "Are you sure?";
  chatConfirmOkBtn.textContent = okLabel || "Delete";
  chatConfirmModal.classList.remove("hidden");
  chatConfirmModal.setAttribute("aria-hidden", "false");
  return new Promise((resolve) => {
    pendingChatConfirmResolver = resolve;
  });
}

function setPlusMenuOpen(open) {
  plusMenuOpen = !!open;
  if (!chatPlusMenu || !chatAttachBtn) {
    return;
  }
  chatPlusMenu.classList.toggle("hidden", !plusMenuOpen);
  chatAttachBtn.setAttribute("aria-expanded", plusMenuOpen ? "true" : "false");
}

function cloneAttachmentPayload(attachment) {
  if (!attachment || typeof attachment !== "object") {
    return null;
  }
  return {
    kind: String(attachment.kind || ""),
    mime: String(attachment.mime || ""),
    name: String(attachment.name || "upload"),
    size: Number(attachment.size || 0),
    dataUrl: String(attachment.dataUrl || ""),
    durationSeconds: Number(attachment.durationSeconds || 0)
  };
}

function closeChatScheduleDialog() {
  if (!chatScheduleModal) {
    return;
  }
  chatScheduleModal.classList.add("hidden");
  chatScheduleModal.setAttribute("aria-hidden", "true");
  if (chatScheduleWarning) {
    chatScheduleWarning.classList.add("hidden");
    chatScheduleWarning.textContent = "";
  }
}

function setScheduleCustomVisible(visible) {
  if (!chatScheduleCustomWrap) {
    return;
  }
  chatScheduleCustomWrap.classList.toggle("hidden", !visible);
}

function setChatScheduleWarning(text) {
  if (!chatScheduleWarning) {
    if (text) {
      setChatStatus(String(text), "warn");
    }
    return;
  }
  chatScheduleWarning.textContent = text ? String(text) : "";
  chatScheduleWarning.classList.toggle("hidden", !text);
}

function resolveScheduledMinutes() {
  const presetValue = chatSchedulePresetSelect ? String(chatSchedulePresetSelect.value || "5") : "5";
  if (presetValue !== "custom") {
    const presetMinutes = Number(presetValue);
    return Number.isFinite(presetMinutes) && presetMinutes > 0 ? presetMinutes : 5;
  }
  const customRaw = Number(chatScheduleMinutesInput ? chatScheduleMinutesInput.value : 0);
  if (!Number.isFinite(customRaw) || customRaw <= 0) {
    setChatScheduleWarning("Enter a custom delay between 0.1 and 30 minutes.");
    return 0;
  }
  if (customRaw > 30) {
    setChatScheduleWarning("Custom times are set to 30 minutes only.");
    return 0;
  }
  setChatScheduleWarning("");
  return Math.max(0.1, customRaw);
}

function openChatScheduleDialog() {
  if (!chatScheduleModal) {
    return;
  }
  if (editingMessageId) {
    setChatStatus("Scheduled send is not available while editing a message.", "warn");
    return;
  }
  if (chatScheduleMessageInput) {
    chatScheduleMessageInput.value = String(chatInput.value || "");
    resizeScheduleMessageInput();
  }
  if (chatSchedulePresetSelect) {
    chatSchedulePresetSelect.value = "5";
  }
  if (chatScheduleMinutesInput) {
    chatScheduleMinutesInput.value = "5";
  }
  setScheduleCustomVisible(false);
  setChatScheduleWarning("");
  chatScheduleModal.classList.remove("hidden");
  chatScheduleModal.setAttribute("aria-hidden", "false");
  if (chatScheduleMessageInput) {
    chatScheduleMessageInput.focus();
    chatScheduleMessageInput.setSelectionRange(
      chatScheduleMessageInput.value.length,
      chatScheduleMessageInput.value.length
    );
  }
}

async function scheduleCurrentComposerSend() {
  if (editingMessageId) {
    setChatStatus("Scheduled send is not available while editing a message.", "warn");
    closeChatScheduleDialog();
    return;
  }
  const text = String(chatScheduleMessageInput ? chatScheduleMessageInput.value : chatInput.value || "").trim();
  const attachment = cloneAttachmentPayload(pendingAttachment);
  const replyTo = replyingToMessage ? { ...replyingToMessage } : null;
  if (!text && !attachment) {
    setChatScheduleWarning("Type a message or attach a file before scheduling.");
    return;
  }
  const minutes = resolveScheduledMinutes();
  if (!minutes) {
    return;
  }
  const delayMs = Math.round(minutes * 60 * 1000);
  clearPendingAttachment();
  clearReplyingMessage();
  chatInput.value = "";
  resizeChatInput();
  removeSessionValue(CHAT_DRAFT_KEY);
  closeChatScheduleDialog();
  scheduledSendCount += 1;
  setChatStatus("Scheduled to send in " + minutes.toFixed(1) + " minute(s).", "ok");
  updateChatStatusFromState();
  window.setTimeout(() => {
    submitChatText(text, attachment, replyTo)
      .catch(() => {
        // submitChatText handles status/errors.
      })
      .finally(() => {
        scheduledSendCount = Math.max(0, scheduledSendCount - 1);
        updateChatStatusFromState();
      });
  }, delayMs);
}

function inferMimeFromName(name) {
  const lower = String(name || "").toLowerCase();
  if (/\.(jpg|jpeg|png|gif|webp|bmp|heic|heif|avif)$/i.test(lower)) {
    return "image/*";
  }
  if (/\.(mp4|mov|m4v|webm|avi|mkv|3gp)$/i.test(lower)) {
    return "video/*";
  }
  return "";
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Unable to read file."));
    reader.readAsDataURL(file);
  });
}

function getVideoDuration(file) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    const src = URL.createObjectURL(file);
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      const duration = Number(video.duration || 0);
      URL.revokeObjectURL(src);
      resolve(duration);
    };
    video.onerror = () => {
      URL.revokeObjectURL(src);
      reject(new Error("Unable to read video metadata."));
    };
    video.src = src;
  });
}

async function buildAttachmentPayload(file) {
  const rawMime = String(file.type || "").toLowerCase();
  const inferred = inferMimeFromName(file.name || "");
  const mime = rawMime || inferred;
  const name = String(file.name || "upload");
  const size = Number(file.size || 0);
  const maxImageBytes = Math.max(1, Number(adminSettings.chatImageMaxMb || 8)) * 1024 * 1024;
  const maxVideoBytes = Math.max(1, Number(adminSettings.chatVideoMaxMb || 20)) * 1024 * 1024;

  if (mime.startsWith("image/") || mime === "image/*") {
    if (adminSettings.chatAttachmentsEnabled === false) {
      throw new Error("Attachments are disabled by admin.");
    }
    if (size > maxImageBytes) {
      throw new Error("Image too large. Max " + String(adminSettings.chatImageMaxMb || 8) + "MB.");
    }
    const dataUrl = await fileToDataUrl(file);
    return { kind: "image", mime, name, size, dataUrl, durationSeconds: 0 };
  }

  if (mime.startsWith("video/") || mime === "video/*") {
    if (adminSettings.chatAttachmentsEnabled === false) {
      throw new Error("Attachments are disabled by admin.");
    }
    if (adminSettings.chatVideoAttachmentsEnabled === false) {
      throw new Error("Video attachments are disabled by admin.");
    }
    if (size > maxVideoBytes) {
      throw new Error("Video too large. Max " + String(adminSettings.chatVideoMaxMb || 20) + "MB.");
    }
    const duration = await getVideoDuration(file);
    if (!Number.isFinite(duration) || duration > MAX_VIDEO_SECONDS) {
      throw new Error("Video must be 40 seconds or less.");
    }
    const dataUrl = await fileToDataUrl(file);
    return {
      kind: "video",
      mime,
      name,
      size,
      dataUrl,
      durationSeconds: Math.round(duration * 10) / 10
    };
  }

  throw new Error("Only image and video files are supported.");
}

async function stageAttachmentFromFile(file, statusPrefix) {
  if (!file) {
    return false;
  }
  try {
    setChatStatus(statusPrefix || "Preparing attachment...", "warn");
    startAttachmentStageProgress(statusPrefix || "Preparing attachment...");
    const payload = await buildAttachmentPayload(file);
    pendingAttachment = payload;
    showPendingAttachmentPreview(payload);
    setChatStatus(
      "Attachment ready: " +
        payload.name +
        (payload.kind === "video" ? " (" + String(payload.durationSeconds) + "s)" : "") +
        ". Send message to share.",
      "ok"
    );
    setAttachmentRetryVisible(false);
    return true;
  } catch (error) {
    clearPendingAttachment();
    setChatStatus(error && error.message ? error.message : "Unable to attach file.", "error");
    return false;
  }
}

function insertTextAtComposerCursor(text) {
  if (!chatInput || !text) {
    return;
  }
  const value = String(chatInput.value || "");
  const start = Number.isFinite(chatInput.selectionStart) ? chatInput.selectionStart : value.length;
  const end = Number.isFinite(chatInput.selectionEnd) ? chatInput.selectionEnd : value.length;
  const nextValue = value.slice(0, start) + text + value.slice(end);
  chatInput.value = nextValue.slice(0, 240);
  const caret = Math.min(chatInput.value.length, start + text.length);
  chatInput.focus();
  chatInput.setSelectionRange(caret, caret);
  writeSessionValue(CHAT_DRAFT_KEY, chatInput.value);
  autoResizeComposer();
  handleComposerTypingState(chatInput.value);
}

async function handleChatComposerPaste(event) {
  if (!event || !event.clipboardData) {
    return;
  }
  const clipboard = event.clipboardData;
  const items = Array.from(clipboard.items || []);
  const fileItem = items.find((item) => item && item.kind === "file");
  const textValue = clipboard.getData("text/plain");
  const hasText = typeof textValue === "string" && textValue.length > 0;

  if (fileItem) {
    event.preventDefault();
    if (hasText) {
      insertTextAtComposerCursor(textValue);
    }
    const file = typeof fileItem.getAsFile === "function" ? fileItem.getAsFile() : null;
    if (!file) {
      setChatStatus("Clipboard attachment could not be read.", "error");
      return;
    }
    if (!file.name) {
      const extension = String(file.type || "").toLowerCase().startsWith("video/") ? "webm" : "png";
      const baseName = String(file.type || "").toLowerCase().startsWith("video/") ? "clipboard-video" : "clipboard-image";
      try {
        Object.defineProperty(file, "name", {
          value: baseName + "." + extension,
          configurable: true
        });
      } catch (error) {
        // Ignore if browser prevents redefining file metadata.
      }
    }
    await stageAttachmentFromFile(file, "Preparing pasted attachment...");
  }
}

function readSessionValue(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeSessionValue(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors.
  }
}

function removeSessionValue(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    // Ignore storage errors.
  }
}

function loadChatQueue() {
  const raw = readSessionValue(CHAT_QUEUE_KEY);
  if (!raw) {
    chatQueue = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    chatQueue = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    chatQueue = [];
  }
}

function pruneChatQueue() {
  const now = Date.now();
  const before = chatQueue.length;
  chatQueue = chatQueue.filter((item) => {
    if (!item || item.type !== "message") {
      return false;
    }
    const queuedAt = Number(item.queuedAt || 0);
    if (!queuedAt || !Number.isFinite(queuedAt)) {
      return false;
    }
    return now - queuedAt <= CHAT_QUEUE_TTL_MS;
  });
  if (chatQueue.length !== before) {
    saveChatQueue();
  }
}

function saveChatQueue() {
  writeSessionValue(CHAT_QUEUE_KEY, JSON.stringify(chatQueue));
}

function loadReactionCache() {
  const raw = readSessionValue(CHAT_REACTION_CACHE_KEY);
  if (!raw) {
    localReactionCache = {};
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    localReactionCache = parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    localReactionCache = {};
  }
}

function loadSeenUpTo() {
  const raw = readSessionValue(CHAT_SEEN_UPTO_KEY);
  const parsed = Number(raw || 0);
  lastSeenUpTo = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function saveSeenUpTo(upto) {
  const value = Number(upto || 0);
  if (!value || value <= 0) {
    removeSessionValue(CHAT_SEEN_UPTO_KEY);
    return;
  }
  writeSessionValue(CHAT_SEEN_UPTO_KEY, String(value));
}

function saveReactionCache() {
  writeSessionValue(CHAT_REACTION_CACHE_KEY, JSON.stringify(localReactionCache));
}

function getReactionCacheKeyFromEntry(entry) {
  if (!entry) {
    return "";
  }
  const id = String(entry.id || "").trim();
  const username = String(entry.username || "").trim().toLowerCase();
  const timestamp = String(entry.timestamp || "").trim();
  if (!id || !username || !timestamp) {
    return "";
  }
  return id + "|" + username + "|" + timestamp;
}

function setCachedReactionForEntry(entry, emoji) {
  const key = getReactionCacheKeyFromEntry(entry);
  if (!key) {
    return;
  }
  if (!emoji) {
    delete localReactionCache[key];
  } else {
    localReactionCache[key] = String(emoji);
  }
  saveReactionCache();
}

function updateChatStatusFromState() {
  const scheduledText = scheduledSendCount > 0 ? scheduledSendCount + " scheduled send(s)" : "";
  if (!realtimeEnabled) {
    const offline = "Realtime offline. Messages will send when connection returns.";
    setChatStatus(scheduledText ? offline + " • " + scheduledText : offline, "error");
    return;
  }
  if (chatQueue.length) {
    const queue = "Connected. " + chatQueue.length + " queued item(s) retrying...";
    setChatStatus(scheduledText ? queue + " • " + scheduledText : queue, "warn");
    return;
  }
  setChatStatus(scheduledText, "ok");
}

function enqueueChatAction(action) {
  if (!action || typeof action !== "object") {
    return;
  }
  if (action.type === "react") {
    // Reactions are best-effort; do not queue/retry to avoid retry storms.
    return;
  }
  chatQueue.push(action);
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
  if (chatFlushInProgress || !realtimeEnabled || !chatQueue.length) {
    return;
  }
  chatFlushInProgress = true;
  try {
    while (chatQueue.length) {
      const item = chatQueue[0];
      if (!item || !item.type) {
        chatQueue.shift();
        continue;
      }
      if (item.type === "message") {
        try {
          await sendChat(String(item.text || ""), null, item.replyTo || null);
        } catch (error) {
          if (isRetryableChatError(error)) {
            throw error;
          }
          // Non-retryable request (400/401/403/etc): drop this queued item.
          chatQueue.shift();
          saveChatQueue();
          const reason = error && error.message ? error.message : "Unable to send queued message.";
          setLockedChatErrorStatus("Dropped queued message: " + reason, 7000);
          continue;
        }
        removeFirstLocalPendingByText(String(item.text || ""));
      } else if (item.type === "react") {
        // Legacy safeguard: drop any stale queued reactions.
        chatQueue.shift();
        saveChatQueue();
        continue;
      }
      chatQueue.shift();
      saveChatQueue();
    }
    await pollChat();
  } catch (error) {
    // Keep remaining queue for next reconnect attempt.
  } finally {
    chatFlushInProgress = false;
    updateChatStatusFromState();
  }
}

function setChatAttention(on) {
  const disableAll = !!studioSettings.chatAlertsDisabledAll;
  const pulseEnabled = !disableAll && studioSettings.chatPulseEnabled !== false;
  if (!on || !pulseEnabled) {
    chatDrawer.classList.remove("chat-attention");
    chatLauncher.classList.remove("chat-attention");
    return;
  }
  chatDrawer.classList.add("chat-attention");
  chatLauncher.classList.add("chat-attention");
}

function clearChatAttention(force) {
  if (pendingChatResponse && !force) {
    return;
  }
  setChatAttention(false);
}

function acknowledgeChatMessages() {
  chatReadAcknowledged = true;
  pendingChatResponse = false;
  clearChatAttention(true);
  unreadCount = 0;
  renderUnread();
  markChatSeenUpToLatest();
}

function acknowledgeChatComposerInteraction() {
  pendingChatResponse = false;
  acknowledgeChatMessages();
  setChatAttention(false);
}

function notifyIncomingRemoteMessage(entry) {
  if (!entry || entry.username === session.username) {
    return;
  }
  chatReadAcknowledged = false;
  const disableAll = !!studioSettings.chatAlertsDisabledAll;
  const pulseEnabled = !disableAll && studioSettings.chatPulseEnabled !== false;
  pendingChatResponse = pulseEnabled;
  if (pulseEnabled) {
    setChatAttention(true);
  }
  const messageId = Number(entry.id || 0);
  if (messageId > lastAlertedRemoteMessageId) {
    playAlertTone();
    lastAlertedRemoteMessageId = messageId;
  }
}

function shouldNotifyReaction(payload) {
  const messageId = Number(payload && payload.messageId ? payload.messageId : 0);
  const nextReactions = payload && payload.reactions && typeof payload.reactions === "object" ? payload.reactions : {};
  if (!messageId) {
    return false;
  }
  const entry = chatEntriesById.get(messageId);
  if (!entry) {
    return false;
  }
  const currentReactions = entry.reactions && typeof entry.reactions === "object" ? entry.reactions : {};
  const keys = new Set([...Object.keys(currentReactions), ...Object.keys(nextReactions)]);
  const changedUsers = [];
  keys.forEach((username) => {
    const before = String(currentReactions[username] || "");
    const after = String(nextReactions[username] || "");
    if (before !== after) {
      changedUsers.push(String(username || "").trim().toLowerCase());
    }
  });
  if (!changedUsers.length) {
    return false;
  }
  if (changedUsers.length === 1 && changedUsers[0] === session.username) {
    return false;
  }
  return changedUsers.some((username) => username && username !== session.username);
}

function notifyIncomingReaction(eventId, payload) {
  if (!shouldNotifyReaction(payload)) {
    return;
  }
  const disableAll = !!studioSettings.chatAlertsDisabledAll;
  const pulseEnabled = !disableAll && studioSettings.chatPulseEnabled !== false;
  pendingChatResponse = pulseEnabled;
  if (pulseEnabled) {
    setChatAttention(true);
  }
  const numericEventId = Number(eventId || 0);
  if (numericEventId > lastAlertedReactionEventId) {
    playAlertTone();
    lastAlertedReactionEventId = numericEventId;
  }
}

function getRecentEmojiStorageKey() {
  return "tbr_recent_emojis_" + session.username;
}

function loadRecentEmojis() {
  try {
    const raw = localStorage.getItem(getRecentEmojiStorageKey());
    if (!raw) {
      recentEmojis = [];
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      recentEmojis = [];
      return;
    }
    recentEmojis = parsed
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .slice(0, MAX_RECENT_EMOJIS);
  } catch (error) {
    recentEmojis = [];
  }
}

function saveRecentEmojis() {
  try {
    localStorage.setItem(getRecentEmojiStorageKey(), JSON.stringify(recentEmojis.slice(0, MAX_RECENT_EMOJIS)));
  } catch (error) {
    // Ignore storage errors.
  }
}

function renderRecentEmojis() {
  if (!chatEmojiRecent) {
    return;
  }
  chatEmojiRecent.innerHTML = "";
  if (!recentEmojis.length) {
    const empty = document.createElement("div");
    empty.className = "chat-emoji-empty";
    empty.textContent = "No recent emojis yet.";
    chatEmojiRecent.appendChild(empty);
    return;
  }
  recentEmojis.slice(0, MAX_RECENT_EMOJIS).forEach((emoji) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-emoji-btn";
    button.setAttribute("data-emoji", emoji);
    button.setAttribute("aria-label", "Recent emoji " + emoji);
    button.textContent = emoji;
    chatEmojiRecent.appendChild(button);
  });
}

function pushRecentEmoji(emoji) {
  if (!emoji) {
    return;
  }
  recentEmojis = [emoji, ...recentEmojis.filter((item) => item !== emoji)].slice(0, MAX_RECENT_EMOJIS);
  saveRecentEmojis();
  renderRecentEmojis();
}

function setEmojiPickerOpen(open) {
  emojiPickerOpen = !!open;
  if (!chatEmojiPicker || !chatEmojiToggle) {
    return;
  }
  chatEmojiPicker.classList.toggle("hidden", !emojiPickerOpen);
  chatEmojiToggle.setAttribute("aria-expanded", emojiPickerOpen ? "true" : "false");
  if (emojiPickerOpen) {
    renderRecentEmojis();
  }
}

function insertEmojiIntoChatInput(emoji) {
  if (!chatInput || !emoji) {
    return;
  }
  const start = Number.isFinite(chatInput.selectionStart) ? chatInput.selectionStart : chatInput.value.length;
  const end = Number.isFinite(chatInput.selectionEnd) ? chatInput.selectionEnd : chatInput.value.length;
  const next = chatInput.value.slice(0, start) + emoji + chatInput.value.slice(end);
  chatInput.value = next.slice(0, 240);
  const caret = Math.min(chatInput.value.length, start + emoji.length);
  chatInput.focus();
  chatInput.setSelectionRange(caret, caret);
}

function formatChatTimestamp(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function getOnlineReceiptAudienceUsernames() {
  return (Array.isArray(currentParticipants) ? currentParticipants : [])
    .map((name) => String(name || "").trim().toLowerCase())
    .filter((name) => name && name !== session.username);
}

function buildReceiptAudienceSignature(usernames) {
  return (Array.isArray(usernames) ? usernames : [])
    .map((name) => String(name || "").trim().toLowerCase())
    .filter((name) => name && name !== session.username)
    .sort()
    .join("|");
}

function getReadReceiptProgress(entry) {
  const audienceUsernames = getOnlineReceiptAudienceUsernames();
  const audienceSet = new Set(audienceUsernames);
  const seenBy = entry && entry.seenBy && typeof entry.seenBy === "object" ? entry.seenBy : {};
  const seenUsernames = Object.keys(seenBy)
    .map((name) => String(name || "").trim().toLowerCase())
    .filter((name) => name && name !== session.username && audienceSet.has(name));
  const seenSet = new Set(seenUsernames);
  const waitingUsernames = audienceUsernames.filter((name) => !seenSet.has(name));
  return {
    total: audienceUsernames.length,
    seenCount: seenUsernames.length,
    seenUsernames,
    waitingUsernames
  };
}

function buildSeenByText(entry) {
  if (!entry || entry.username !== session.username) {
    return "";
  }
  const progress = getReadReceiptProgress(entry);
  if (!progress.total) {
    return "Delivered";
  }
  if (progress.seenCount >= progress.total) {
    return "Seen";
  }
  return "Delivered";
}

function buildSeenByTooltip(entry) {
  if (!entry || entry.username !== session.username) {
    return "";
  }
  const progress = getReadReceiptProgress(entry);
  if (!progress.total) {
    return "No other participants online yet.";
  }
  if (!progress.seenCount) {
    return "Delivered";
  }
  const seenUsers = progress.seenUsernames.map((name) => getDisplayNameForUsername(name));
  const waitingUsers = progress.waitingUsernames.map((name) => getDisplayNameForUsername(name));
  if (progress.seenCount >= progress.total) {
    return "Seen by everyone online: " + seenUsers.join(", ");
  }
  return "Seen by " + seenUsers.join(", ") + ". Waiting on " + waitingUsers.join(", ") + ".";
}

function buildMessageMetaText(entry) {
  if (entry.username !== session.username) {
    return "";
  }
  if (entry.deliveryState) {
    const state = String(entry.deliveryState || "").toLowerCase();
    if (state === "sending") {
      return "…";
    }
    if (state === "queued") {
      return "Q";
    }
    if (state === "failed") {
      return "!";
    }
    return String(entry.deliveryState || "");
  }
  return "";
}

function getMessageMetaState(entry) {
  if (!entry || entry.username !== session.username) {
    return "none";
  }
  if (entry.deliveryState) {
    const state = String(entry.deliveryState || "").toLowerCase();
    if (state === "sending") {
      return "sending";
    }
    if (state === "queued") {
      return "queued";
    }
    if (state === "failed") {
      return "failed";
    }
    return "queued";
  }
  const progress = getReadReceiptProgress(entry);
  if (progress.total > 0 && progress.seenCount >= progress.total) {
    return "read";
  }
  return "delivered";
}

function renderMessageMeta(meta, entry) {
  if (!meta) {
    return;
  }
  const state = getMessageMetaState(entry);
  if (!state || state === "none") {
    meta.textContent = "";
    meta.removeAttribute("data-state");
    meta.removeAttribute("title");
    return;
  }
  meta.setAttribute("data-state", state);
  if (state === "sending") {
    meta.textContent = "…";
  } else if (state === "queued") {
    meta.textContent = "Q";
  } else if (state === "failed") {
    meta.textContent = "!";
  } else {
    meta.textContent = "";
  }
  const metaTitle = buildSeenByTooltip(entry);
  if (metaTitle) {
    meta.title = metaTitle;
  } else {
    meta.removeAttribute("title");
  }
}

function refreshAllMessageMeta() {
  chatEntriesById.forEach((entry, id) => {
    const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
    if (!wrapper) {
      return;
    }
    const meta = wrapper.querySelector(".chat-meta");
    if (meta) {
      renderMessageMeta(meta, entry);
    }
  });
}

function appendLocalPendingMessage(text, attachment, replyTo) {
  const id = localTempMessageSeq;
  localTempMessageSeq -= 1;
  const entry = {
    id,
    kind: "chat",
    username: session.username,
    text: String(text || ""),
    timestamp: Date.now(),
    reactions: {},
    attachment: attachment ? { ...attachment } : null,
    replyTo: replyTo ? { ...replyTo } : null,
    editedAt: 0,
    deleted: false,
    seenBy: {},
    deliveryState: "Sending"
  };
  appendEntryToUI(entry, false);
  return id;
}

function updateLocalPendingMessage(id, state) {
  const entry = chatEntriesById.get(id);
  if (!entry) {
    return;
  }
  entry.deliveryState = state;
  chatEntriesById.set(id, entry);
  const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
  if (!wrapper) {
    return;
  }
  const meta = wrapper.querySelector(".chat-meta");
  if (meta) {
    renderMessageMeta(meta, entry);
  }
}

function removeLocalPendingMessage(id) {
  const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
  if (wrapper) {
    wrapper.remove();
  }
  chatEntriesById.delete(id);
  seenMessageIds.delete(id);
}

function removeFirstLocalPendingByText(text) {
  const target = String(text || "");
  let matchedId = null;
  chatEntriesById.forEach((entry, id) => {
    if (matchedId !== null) {
      return;
    }
    if (id >= 0 || entry.username !== session.username) {
      return;
    }
    if (String(entry.text || "") === target && (entry.deliveryState === "Queued" || entry.deliveryState === "Failed")) {
      matchedId = id;
    }
  });
  if (matchedId !== null) {
    removeLocalPendingMessage(matchedId);
  }
}

function clearLocalPendingMessages() {
  const pendingIds = [];
  chatEntriesById.forEach((entry, id) => {
    if (Number(id) < 0 && entry && entry.username === session.username) {
      pendingIds.push(Number(id));
    }
  });
  pendingIds.forEach((id) => {
    removeLocalPendingMessage(id);
  });
}

function getReactionCounts(reactions) {
  const counts = new Map();
  if (!reactions || typeof reactions !== "object") {
    return counts;
  }
  Object.values(reactions).forEach((emoji) => {
    const key = String(emoji || "").trim();
    if (!key) {
      return;
    }
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function getReactionUsersByEmoji(reactions) {
  const usersByEmoji = new Map();
  if (!reactions || typeof reactions !== "object") {
    return usersByEmoji;
  }
  Object.entries(reactions).forEach(([username, emoji]) => {
    const key = String(emoji || "").trim();
    const user = String(username || "").trim().toLowerCase();
    if (!key || !user) {
      return;
    }
    const list = usersByEmoji.get(key) || [];
    list.push(user);
    usersByEmoji.set(key, list);
  });
  return usersByEmoji;
}

function clearReactionHoverTimers(wrapper) {
  if (!wrapper) {
    return;
  }
  if (wrapper._reactionShowTimer) {
    clearTimeout(wrapper._reactionShowTimer);
    wrapper._reactionShowTimer = null;
  }
  if (wrapper._reactionHideTimer) {
    clearTimeout(wrapper._reactionHideTimer);
    wrapper._reactionHideTimer = null;
  }
}

function isReactionHoverActive(wrapper) {
  if (!wrapper) {
    return false;
  }
  const popover = wrapper.querySelector(".chat-message-react-popover");
  const moreMenu = wrapper.querySelector(".chat-more-menu");
  const hoverWithin =
    wrapper.matches(":hover") ||
    !!(popover && popover.matches(":hover")) ||
    !!(moreMenu && moreMenu.matches(":hover"));
  return hoverWithin || wrapper.classList.contains("reaction-pinned") || wrapper.classList.contains("more-open");
}

function setReactionPopoverOpen(wrapper, open) {
  if (!wrapper) {
    return;
  }
  wrapper.classList.toggle("reaction-open", !!open);
  if (!open) {
    wrapper.classList.remove("reaction-pinned");
  }
  if (!open) {
    setMessageMoreMenuOpen(wrapper, false);
  }
}

function setMessageMoreMenuOpen(wrapper, open) {
  if (!wrapper) {
    return;
  }
  if (open) {
    clearReactionHoverTimers(wrapper);
    updateMoreMenuDirection(wrapper);
    wrapper.classList.add("reaction-pinned");
  }
  wrapper.classList.toggle("more-open", !!open);
  const moreTrigger = wrapper.querySelector(".chat-more-trigger");
  if (moreTrigger) {
    moreTrigger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  const menu = wrapper.querySelector(".chat-more-menu");
  if (menu) {
    menu.setAttribute("aria-hidden", open ? "false" : "true");
  }
  if (!open) {
    wrapper.classList.remove("reaction-pinned");
    const wrapperId = Number(wrapper.getAttribute("data-chat-message-id") || 0);
    if (wrapperId && seenPanelOpenMessageId === wrapperId) {
      seenPanelOpenMessageId = 0;
    }
  }
}

function updateMoreMenuDirection(wrapper) {
  if (!wrapper || !chatMessages) {
    return;
  }
  wrapper.classList.remove("more-open-down");
  const menu = wrapper.querySelector(".chat-more-menu");
  if (!menu) {
    return;
  }
  const wrapperRect = wrapper.getBoundingClientRect();
  const messagesRect = chatMessages.getBoundingClientRect();
  const menuHeight = Math.max(120, Number(menu.offsetHeight || 0));
  const availableBelow = messagesRect.bottom - wrapperRect.bottom;
  if (availableBelow < menuHeight + 16) {
    wrapper.classList.add("more-open-down");
  }
}

function closeAllMessageMoreMenus(exceptWrapper) {
  const wrappers = Array.from(chatMessages.querySelectorAll(".chat-message.more-open"));
  wrappers.forEach((wrapper) => {
    if (exceptWrapper && wrapper === exceptWrapper) {
      return;
    }
    setMessageMoreMenuOpen(wrapper, false);
  });
  if (!exceptWrapper) {
    seenPanelOpenMessageId = 0;
  }
}

function queueReactionPopoverOpen(wrapper) {
  if (!wrapper) {
    return;
  }
  clearReactionHoverTimers(wrapper);
  setReactionPopoverOpen(wrapper, true);
}

function queueReactionPopoverClose(wrapper) {
  if (!wrapper) {
    return;
  }
  if (isReactionHoverActive(wrapper)) {
    return;
  }
  clearReactionHoverTimers(wrapper);
  setReactionPopoverOpen(wrapper, false);
}

function renderMessageReactions(wrapper, entry) {
  const reactionAnchor = wrapper.querySelector(".chat-message-reaction-anchor");
  const existingPopover = wrapper.querySelector(".chat-message-react-popover");
  wrapper.classList.remove("has-reactions");
  if (reactionAnchor) {
    reactionAnchor.remove();
  }
  if (existingPopover) {
    existingPopover.remove();
  }
  if (!wrapper || !entry || entry.kind === "system" || entry.deleted || adminSettings.chatReactionsEnabled === false) {
    return;
  }

  const anchor = document.createElement("div");
  anchor.className = "chat-message-reaction-anchor";

  const popover = document.createElement("div");
  popover.className = "chat-message-react-popover";

  CHAT_REACTION_OPTIONS.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chat-react-option";
    btn.setAttribute("data-react-message-id", String(entry.id));
    btn.setAttribute("data-react-emoji", emoji);
    btn.setAttribute("aria-label", "React with " + emoji);
    btn.textContent = emoji;
    btn.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      applyReactionChoice(entry.id, emoji);
    });
    popover.appendChild(btn);
  });

  const moreMenu = document.createElement("div");
  moreMenu.className = "chat-more-menu";
  moreMenu.setAttribute("aria-hidden", "true");
  popover.appendChild(moreMenu);

  const moreTrigger = document.createElement("button");
  moreTrigger.type = "button";
  moreTrigger.className = "chat-more-trigger";
  moreTrigger.setAttribute("data-chat-more-trigger", String(entry.id));
  moreTrigger.setAttribute("aria-label", "More options");
  moreTrigger.setAttribute("aria-expanded", "false");
  moreTrigger.textContent = "...";
  popover.appendChild(moreTrigger);

  wrapper.appendChild(popover);

  const usersByEmoji = getReactionUsersByEmoji(entry.reactions);
  const counts = getReactionCounts(entry.reactions);
  counts.forEach((count, emoji) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chat-reaction-chip";
    chip.setAttribute("data-react-message-id", String(entry.id));
    chip.setAttribute("data-react-emoji", emoji);
    chip.setAttribute("data-count", count > 1 ? String(count) : "");
    const users = usersByEmoji.get(emoji) || [];
    const readableUsers = users.map((username) => getDisplayNameForUsername(username));
    chip.title = readableUsers.length ? readableUsers.join(", ") : "Reaction";
    if (users.includes(session.username)) {
      chip.classList.add("own");
    }
    chip.textContent = emoji;
    chip.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      applyReactionChoice(entry.id, emoji);
    });
    anchor.appendChild(chip);
  });

  wrapper.appendChild(anchor);
  if (counts.size) {
    wrapper.classList.add("has-reactions");
  }

  if (!wrapper.dataset.reactionBindDone) {
    wrapper.dataset.reactionBindDone = "1";
    wrapper.addEventListener("mouseenter", () => {
      queueReactionPopoverOpen(wrapper);
    });
    wrapper.addEventListener("mouseleave", () => {
      window.requestAnimationFrame(() => {
        queueReactionPopoverClose(wrapper);
      });
    });
    wrapper.addEventListener("focusin", () => {
      setReactionPopoverOpen(wrapper, true);
    });
    wrapper.addEventListener("focusout", () => {
      window.requestAnimationFrame(() => {
        queueReactionPopoverClose(wrapper);
      });
    });
  }

  popover.addEventListener("mouseenter", () => {
    clearReactionHoverTimers(wrapper);
    wrapper.classList.add("reaction-pinned");
    setReactionPopoverOpen(wrapper, true);
  });
  popover.addEventListener("mouseleave", () => {
    wrapper.classList.remove("reaction-pinned");
    window.requestAnimationFrame(() => {
      queueReactionPopoverClose(wrapper);
    });
  });
  popover.addEventListener("pointerdown", () => {
    clearReactionHoverTimers(wrapper);
    wrapper.classList.add("reaction-pinned");
    setReactionPopoverOpen(wrapper, true);
  });
  moreMenu.addEventListener("mouseenter", () => {
    clearReactionHoverTimers(wrapper);
    wrapper.classList.add("reaction-pinned");
    setReactionPopoverOpen(wrapper, true);
    setMessageMoreMenuOpen(wrapper, true);
  });
  moreMenu.addEventListener("mouseleave", () => {
    window.requestAnimationFrame(() => {
      queueReactionPopoverClose(wrapper);
    });
  });
  moreMenu.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    clearReactionHoverTimers(wrapper);
    wrapper.classList.add("reaction-pinned");
    setReactionPopoverOpen(wrapper, true);
    setMessageMoreMenuOpen(wrapper, true);
  });
}

async function applyReactionChoice(messageId, emoji) {
  if (adminSettings.chatReactionsEnabled === false) {
    setChatStatus("Reactions are disabled by admin.", "warn");
    return;
  }
  const id = Number(messageId || 0);
  const symbol = String(emoji || "").trim();
  if (!id || !symbol) {
    return;
  }
  const entry = chatEntriesById.get(id);
  if (!entry || entry.deleted || entry.kind === "system") {
    setChatStatus("Message no longer exists.", "error");
    return;
  }
  let desiredEmoji = symbol;
  try {
    desiredEmoji = applyLocalReactionToggle(id, symbol);
  } catch (error) {
    // Do not block send if optimistic local paint fails.
    desiredEmoji = symbol;
  }
  try {
    await sendChatReaction(id, desiredEmoji);
    try {
      await pollChat();
    } catch (error) {
      // Reaction already sent; UI will self-heal on next poll.
    }
    updateChatStatusFromState();
  } catch (error) {
    if (error && (error.status === 400 || error.status === 404)) {
      setLockedChatErrorStatus(error.message || "Message no longer exists.", 9000);
      return;
    }
    const statusPart = error && error.status ? " (HTTP " + String(error.status) + ")" : "";
    const reason = error && error.message ? error.message : "Unknown realtime error";
    setLockedChatErrorStatus("Reaction send failed" + statusPart + ": " + reason, 9000);
  }
}

function refreshMessagePopovers() {
  chatEntriesById.forEach((entry, id) => {
    const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
    if (!wrapper || entry.kind === "system" || entry.deleted) {
      return;
    }
    const moreMenu = wrapper.querySelector(".chat-more-menu");
    if (!moreMenu) {
      return;
    }
    moreMenu.innerHTML = "";
    const isSelf = entry.username === session.username;
    const canSelfEdit = isSelf;
    const canHostRemove = !isSelf && isCurrentUserHost();
    const canReply = true;

    if (canReply) {
      const replyBtn = document.createElement("button");
      replyBtn.type = "button";
      replyBtn.className = "chat-react-action";
      replyBtn.setAttribute("data-chat-reply", String(entry.id));
      replyBtn.innerHTML = '<span class="chat-react-icon" aria-hidden="true">↩</span><span>Reply</span>';
      moreMenu.appendChild(replyBtn);
    }
    if (isSelf) {
      const seenBtn = document.createElement("button");
      seenBtn.type = "button";
      seenBtn.className = "chat-react-action";
      seenBtn.setAttribute("data-chat-seen", String(entry.id));
      seenBtn.innerHTML = '<span class="chat-react-icon" aria-hidden="true">👁</span><span>Seen by</span>';
      moreMenu.appendChild(seenBtn);

      const seenPanel = document.createElement("div");
      seenPanel.className = "chat-seen-panel";
      seenPanel.setAttribute("data-chat-seen-panel", String(entry.id));
      if (seenPanelOpenMessageId === Number(entry.id || 0)) {
        seenPanel.classList.add("is-open");
        setReactionPopoverOpen(wrapper, true);
        setMessageMoreMenuOpen(wrapper, true);
      }
      const progress = getReadReceiptProgress(entry);
      const seenNames = progress.seenUsernames.map((name) => getDisplayNameForUsername(name));
      const seenText = seenNames.length ? seenNames.join(", ") : "Nobody";
      seenPanel.innerHTML = "<p><strong>Seen:</strong> " + seenText + "</p>";
      moreMenu.appendChild(seenPanel);
    }
    if (canSelfEdit) {
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "chat-react-action";
      editBtn.setAttribute("data-chat-edit", String(entry.id));
      editBtn.innerHTML = '<span class="chat-react-icon" aria-hidden="true">✎</span><span>Edit</span>';
      moreMenu.appendChild(editBtn);
    }
    if (isSelf) {
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "chat-react-action danger";
      deleteBtn.setAttribute("data-chat-delete", String(entry.id));
      deleteBtn.innerHTML = '<span class="chat-react-icon" aria-hidden="true">🗑</span><span>Delete</span>';
      moreMenu.appendChild(deleteBtn);
      return;
    }
    if (canHostRemove) {
      const hostDeleteBtn = document.createElement("button");
      hostDeleteBtn.type = "button";
      hostDeleteBtn.className = "chat-react-action danger";
      hostDeleteBtn.setAttribute("data-chat-host-delete", String(entry.id));
      hostDeleteBtn.innerHTML = '<span class="chat-react-icon" aria-hidden="true">🗑</span><span>Remove</span>';
      moreMenu.appendChild(hostDeleteBtn);
    }

  });
}

function createMessageElement(entry) {
  const wrapper = document.createElement("div");
  const isSelf = entry.username === session.username;
  wrapper.className = "chat-message " + (entry.kind === "system" ? "system" : isSelf ? "self" : "remote");
  wrapper.setAttribute("data-chat-message-id", String(entry.id));
  const sentTime = formatChatTimestamp(entry.timestamp);
  if (sentTime) {
    const timeAbove = document.createElement("span");
    timeAbove.className = "chat-time-above";
    timeAbove.textContent = sentTime;
    wrapper.appendChild(timeAbove);
  }
  if (entry.attachment && typeof entry.attachment === "object") {
    const mediaBox = document.createElement("div");
    mediaBox.className = "chat-message-media";
    if (entry.attachment.kind === "image" && entry.attachment.dataUrl) {
      const img = document.createElement("img");
      img.src = entry.attachment.dataUrl;
      img.alt = entry.attachment.name || "Shared image";
      img.loading = "lazy";
      img.className = "chat-media-clickable";
      img.setAttribute("data-chat-media-open", "1");
      img.setAttribute("data-chat-media-kind", "image");
      img.setAttribute("data-chat-media-name", entry.attachment.name || "image");
      img.setAttribute("data-chat-media-url", entry.attachment.dataUrl);
      mediaBox.appendChild(img);
    } else if (entry.attachment.kind === "video" && entry.attachment.dataUrl) {
      const video = document.createElement("video");
      video.src = entry.attachment.dataUrl;
      video.controls = true;
      video.preload = "metadata";
      mediaBox.appendChild(video);
    }
    if (entry.attachment.dataUrl) {
      const downloadBtn = document.createElement("button");
      downloadBtn.type = "button";
      downloadBtn.className = "chat-media-download";
      downloadBtn.textContent = "Save";
      downloadBtn.setAttribute("data-chat-media-download", "1");
      downloadBtn.setAttribute("data-chat-media-name", entry.attachment.name || "media");
      downloadBtn.setAttribute("data-chat-media-url", entry.attachment.dataUrl);
      mediaBox.appendChild(downloadBtn);
    }
    if (mediaBox.childElementCount) {
      wrapper.appendChild(mediaBox);
    }
  }
  if (entry.replyTo && typeof entry.replyTo === "object" && Number(entry.replyTo.id || 0) > 0) {
    const replyBlock = document.createElement("button");
    replyBlock.type = "button";
    replyBlock.className = "chat-reply-block";
    replyBlock.setAttribute("data-chat-reply-jump-id", String(entry.replyTo.id));
    const replyName = entry.replyTo.username === session.username ? "You" : String(entry.replyTo.displayName || entry.replyTo.username || "User");
    const replyTitle = document.createElement("span");
    replyTitle.className = "chat-reply-block-title";
    replyTitle.textContent = "Reply to " + replyName;
    const replyText = document.createElement("span");
    replyText.className = "chat-reply-block-text";
    replyText.textContent = String(entry.replyTo.text || "");
    replyBlock.appendChild(replyTitle);
    replyBlock.appendChild(replyText);
    wrapper.appendChild(replyBlock);
  }
  const paragraph = document.createElement("p");
  paragraph.className = "chat-message-text";
  if (entry.kind === "system") {
    paragraph.textContent = "System: " + entry.text;
  } else if (isSelf) {
    paragraph.textContent = "You: " + entry.text;
  } else {
    paragraph.textContent = getEntryDisplayName(entry) + ": " + entry.text;
  }
  paragraph.classList.toggle("edited", !!entry.editedAt);
  wrapper.appendChild(paragraph);
  const meta = document.createElement("span");
  meta.className = "chat-meta";
  renderMessageMeta(meta, entry);
  wrapper.appendChild(meta);

  if (entry.kind !== "system") {
    if (entry.deleted) {
      wrapper.classList.add("deleted");
      paragraph.textContent = "Message removed";
      paragraph.classList.remove("edited");
      return wrapper;
    }
    // Stability mode: keep chat layout compact while isolating stretch issues.
    // Reactions and hover popovers are intentionally disabled here.
    renderMessageReactions(wrapper, entry);
  }
  return wrapper;
}

function appendEntryToUI(entry, countUnread) {
  const normalizedId = Number(entry && entry.id ? entry.id : 0);
  if (!normalizedId) {
    return;
  }
  entry.id = normalizedId;
  if (seenMessageIds.has(normalizedId)) {
    const existing = chatEntriesById.get(normalizedId);
    if (existing && entry && typeof entry === "object") {
      if (entry.seenBy && typeof entry.seenBy === "object") {
        existing.seenBy = {
          ...(existing.seenBy && typeof existing.seenBy === "object" ? existing.seenBy : {}),
          ...entry.seenBy
        };
      }
      if (entry.reactions && typeof entry.reactions === "object") {
        existing.reactions = { ...entry.reactions };
      }
      if (typeof entry.text === "string" && entry.text !== existing.text) {
        existing.text = entry.text;
      }
      if (Number(entry.editedAt || 0) > Number(existing.editedAt || 0)) {
        existing.editedAt = Number(entry.editedAt || 0);
      }
      if (entry.deleted && !existing.deleted) {
        existing.deleted = true;
      }
      chatEntriesById.set(normalizedId, existing);
      const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(normalizedId) + '"]');
      if (wrapper) {
        if (existing.deleted) {
          applyMessageDelete(normalizedId);
        } else {
          const meta = wrapper.querySelector(".chat-meta");
          if (meta) {
            renderMessageMeta(meta, existing);
          }
          renderMessageReactions(wrapper, existing);
        }
      }
    }
    return;
  }
  const cacheKey = getReactionCacheKeyFromEntry(entry);
  if (!entry.reactions || typeof entry.reactions !== "object") {
    entry.reactions = {};
  }
  if (cacheKey && Object.prototype.hasOwnProperty.call(localReactionCache, cacheKey)) {
    const cacheEmoji = localReactionCache[cacheKey];
    if (cacheEmoji) {
      entry.reactions[session.username] = cacheEmoji;
    } else {
      delete entry.reactions[session.username];
    }
  }
  seenMessageIds.add(normalizedId);
  const shouldStickBottom = chatMessages.scrollTop + chatMessages.clientHeight >= chatMessages.scrollHeight - 20;
  const wrapper = createMessageElement(entry);
  chatMessages.appendChild(wrapper);
  const typingBubble = chatMessages.querySelector("." + CHAT_TYPING_STREAM_CLASS);
  if (typingBubble) {
    chatMessages.appendChild(typingBubble);
  }
  chatEntriesById.set(normalizedId, entry);
  if (entry.kind !== "system" && !entry.deleted) {
    refreshMessagePopovers();
  }
  if (shouldStickBottom || entry.username === session.username) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (countUnread && !chatOpen && entry.username !== session.username && entry.kind !== "system") {
    unreadCount += 1;
    renderUnread();
  }
}

function applyReactionUpdate(messageId, reactions) {
  const id = Number(messageId || 0);
  if (!id) {
    return;
  }
  const entry = chatEntriesById.get(id);
  if (!entry) {
    return;
  }
  entry.reactions = reactions && typeof reactions === "object" ? { ...reactions } : {};
  const cacheKey = getReactionCacheKeyFromEntry(entry);
  if (cacheKey && Object.prototype.hasOwnProperty.call(localReactionCache, cacheKey)) {
    const cacheEmoji = localReactionCache[cacheKey];
    if (cacheEmoji) {
      entry.reactions[session.username] = cacheEmoji;
    } else {
      delete entry.reactions[session.username];
    }
  }
  chatEntriesById.set(id, entry);
  const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
  if (!wrapper) {
    return;
  }
  renderMessageReactions(wrapper, entry);
}

function applyMessageEdit(messageId, text, editedAt) {
  const id = Number(messageId || 0);
  if (!id) {
    return;
  }
  const entry = chatEntriesById.get(id);
  if (!entry) {
    return;
  }
  entry.text = String(text || "");
  entry.editedAt = Number(editedAt || 0);
  chatEntriesById.set(id, entry);
  const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
  if (!wrapper) {
    return;
  }
  const textEl = wrapper.querySelector(".chat-message-text");
  if (textEl) {
    if (entry.username === session.username) {
      textEl.textContent = "You: " + entry.text;
    } else {
      textEl.textContent = getEntryDisplayName(entry) + ": " + entry.text;
    }
    textEl.classList.toggle("edited", !!entry.editedAt);
  }
  const meta = wrapper.querySelector(".chat-meta");
  if (meta) {
    renderMessageMeta(meta, entry);
  }
}

function applyMessageDelete(messageId) {
  const id = Number(messageId || 0);
  if (!id) {
    return;
  }
  const entry = chatEntriesById.get(id);
  if (!entry) {
    return;
  }
  if (editingMessageId === id) {
    clearEditingMessageStatus();
  }
  if (replyingToMessageId === id) {
    clearReplyingMessage();
  }
  entry.deleted = true;
  entry.text = "";
  entry.attachment = null;
  entry.reactions = {};
  entry.replyTo = null;
  entry.editedAt = Number(entry.editedAt || Date.now());
  chatEntriesById.set(id, entry);
  const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
  if (wrapper) {
    clearReactionHoverTimers(wrapper);
    wrapper.classList.add("deleted");
    wrapper.classList.remove("reaction-open", "more-open", "more-open-down");
    const media = wrapper.querySelector(".chat-message-media");
    if (media) {
      media.remove();
    }
    const replyBlock = wrapper.querySelector(".chat-reply-block");
    if (replyBlock) {
      replyBlock.remove();
    }
    const popover = wrapper.querySelector(".chat-message-react-popover");
    if (popover) {
      popover.remove();
    }
    const reactionAnchor = wrapper.querySelector(".chat-message-reaction-anchor");
    if (reactionAnchor) {
      reactionAnchor.remove();
    }
    const textEl = wrapper.querySelector(".chat-message-text");
    if (textEl) {
      textEl.textContent = "Message removed";
      textEl.classList.remove("edited");
    }
  const meta = wrapper.querySelector(".chat-meta");
  if (meta) {
    renderMessageMeta(meta, entry);
  }
}
  if (chatSearchQuery) {
    runChatSearch(chatSearchQuery);
  }
}

function applySeenUpdate(username, seenUpTo) {
  const user = String(username || "").trim().toLowerCase();
  const upto = Number(seenUpTo || 0);
  if (!user || !upto) {
    return;
  }
  chatEntriesById.forEach((entry, id) => {
    if (id > upto || entry.username === user) {
      return;
    }
    if (!entry.seenBy || typeof entry.seenBy !== "object") {
      entry.seenBy = {};
    }
    entry.seenBy[user] = Date.now();
    chatEntriesById.set(id, entry);
    const wrapper = chatMessages.querySelector('[data-chat-message-id="' + String(id) + '"]');
    if (wrapper) {
      const meta = wrapper.querySelector(".chat-meta");
      if (meta) {
        renderMessageMeta(meta, entry);
      }
    }
  });
}

function applyLocalReactionToggle(messageId, emoji) {
  const id = Number(messageId || 0);
  if (!id || !emoji) {
    return "";
  }
  const entry = chatEntriesById.get(id);
  if (!entry) {
    return "";
  }
  const reactions = entry.reactions && typeof entry.reactions === "object" ? { ...entry.reactions } : {};
  const current = String(reactions[session.username] || "");
  let nextEmoji = "";
  if (current === emoji) {
    delete reactions[session.username];
    setCachedReactionForEntry(entry, "");
  } else {
    reactions[session.username] = emoji;
    nextEmoji = emoji;
    setCachedReactionForEntry(entry, emoji);
  }
  applyReactionUpdate(id, reactions);
  return nextEmoji;
}

function scrollChatToBottom() {
  // Wait one frame so layout is updated after the drawer becomes visible.
  window.requestAnimationFrame(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

function markChatSeenUpToLatest() {
  if (!realtimeEnabled || !chatReadAcknowledged) {
    return;
  }
  if (studioSettings.chatReadReceiptsEnabled === false) {
    return;
  }
  const ids = Array.from(chatEntriesById.keys());
  const upto = ids.length ? Math.max(...ids) : 0;
  if (!upto || upto <= Math.max(lastSeenUpTo, pendingSeenUpTo)) {
    return;
  }
  pendingSeenUpTo = upto;
  saveSeenUpTo(Math.max(lastSeenUpTo, pendingSeenUpTo));
  flushSeenSyncQueue();
}

async function flushSeenSyncQueue() {
  if (seenSyncInFlight || !realtimeEnabled || studioSettings.chatReadReceiptsEnabled === false) {
    return;
  }
  if (pendingSeenUpTo <= lastSeenUpTo) {
    return;
  }
  seenSyncInFlight = true;
  try {
    while (pendingSeenUpTo > lastSeenUpTo) {
      const target = pendingSeenUpTo;
      await sendChatSeen(target);
      lastSeenUpTo = Math.max(lastSeenUpTo, target);
      if (pendingSeenUpTo <= target) {
        pendingSeenUpTo = 0;
      }
      saveSeenUpTo(lastSeenUpTo);
    }
  } catch (error) {
    // Keep pending seen marker for retry on next poll tick.
  } finally {
    seenSyncInFlight = false;
  }
}

function setChatOpen(open) {
  if (chatOpenCloseTimer) {
    clearTimeout(chatOpenCloseTimer);
    chatOpenCloseTimer = null;
  }
  if (chatLauncherSwapTimer) {
    clearTimeout(chatLauncherSwapTimer);
    chatLauncherSwapTimer = null;
  }
  chatOpen = open;
  if (open) {
    chatDrawer.classList.remove("hidden", "chat-closing");
    chatDrawer.classList.add("chat-opening");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        chatDrawer.classList.remove("chat-opening");
      });
    });
    chatLauncher.classList.remove("chat-launcher-showing");
    chatLauncher.classList.add("chat-launcher-hiding");
    chatLauncherSwapTimer = setTimeout(() => {
      chatLauncher.classList.add("hidden");
      chatLauncher.classList.remove("chat-launcher-hiding");
    }, 170);
  } else {
    setPlusMenuOpen(false);
    closeChatScheduleDialog();
    chatDrawer.classList.remove("chat-opening");
    chatDrawer.classList.add("chat-closing");
    chatOpenCloseTimer = setTimeout(() => {
      chatDrawer.classList.add("hidden");
      chatDrawer.classList.remove("chat-closing");
    }, 190);
    chatLauncher.classList.remove("hidden", "chat-launcher-hiding");
    chatLauncher.classList.add("chat-launcher-showing");
    chatLauncherSwapTimer = setTimeout(() => {
      chatLauncher.classList.remove("chat-launcher-showing");
    }, 190);
  }
  chatLauncher.setAttribute("aria-expanded", open ? "true" : "false");
  writeSessionValue(CHAT_OPEN_STATE_KEY, chatOpen ? "1" : "0");
  if (open) {
    chatReadAcknowledged = false;
    scrollChatToBottom();
  } else {
    setEmojiPickerOpen(false);
    chatReadAcknowledged = false;
    handleComposerTypingState("");
  }
}

function playAlertTone() {
  const disableAll = !!studioSettings.chatAlertsDisabledAll;
  const soundEnabled = !disableAll && studioSettings.chatSoundEnabled !== false;
  if (!soundEnabled || isRecording) {
    return;
  }
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(280, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.35);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.36);
    oscillator.onended = () => audioContext.close();
  } catch (error) {
    // Ignore autoplay and audio context errors.
  }
}

function applyMicSettingsFromStudioSettings() {
  headphonesToggle.checked = !!studioSettings.usingHeadphones;
  pushToTalkToggle.checked = !!studioSettings.pushToTalkEnabled;
  updateMicGainUI();
  if (onAirLimiterToggle) {
    onAirLimiterToggle.checked = studioSettings.micLimiterEnabled !== false;
  }
  if (limiterToggle) {
    limiterToggle.checked = studioSettings.micLimiterEnabled !== false;
  }
  if (onAirNoiseToggle) {
    onAirNoiseToggle.checked = studioSettings.micNoiseSuppression !== false;
  }
  if (noiseToggle) {
    noiseToggle.checked = studioSettings.micNoiseSuppression !== false;
  }
  if (micInputGainNode) {
    applyMicGain(getMicGainPercent(), false);
    applyNoiseGateThresholdDb(getNoiseGateThresholdDb(), false);
    applyLoudnessTargetPreset(getLoudnessPreset(), false);
    applyInputMonitoringToggle(!!studioSettings.micInputMonitoringEnabled, false);
  }
  if (micInputSourceNode) {
    applyLimiterToggle(studioSettings.micLimiterEnabled !== false, false);
  }
  syncMicMonitoringOutput();
  updateEchoWarning();
  setMicActiveUI(isMicUiActive());
}

function updateEchoWarning() {
  const micTrack = micStream ? micStream.getAudioTracks()[0] : null;
  const micLive = !!(micTrack && micTrack.enabled);
  const hasHeadphones = !!headphonesToggle.checked;
  const shouldWarn = micLive && !hasHeadphones;
  echoWarning.classList.toggle("hidden", !shouldWarn);
  updatePreflightSummary();
}

function setMicMuted(nextMuted) {
  if (!micStream) {
    setMicStatus("Start microphone first to use mute.", true);
    return;
  }
  const track = micStream.getAudioTracks()[0];
  if (!track) {
    setMicStatus("No active microphone track available.", true);
    return;
  }
  micStandbyDisabled = false;
  micMuted = !!nextMuted;
  track.enabled = !micMuted;
  syncMicMonitoringOutput();
  setMicActiveUI(true);
  updateEchoWarning();
  if (micMuted) {
    setMicStatus("Mic is muted. Others cannot hear you.");
    if (useTwilioVideoRoom()) {
      syncTwilioPublishedTracks().catch(() => {
        // Ignore Twilio sync races during mute changes.
      });
    }
  } else {
    setMicStatus("Mic is live. Others can hear you.");
  }
  addLocalTracksToPeerConnection();
  if (!useTwilioVideoRoom() && peerConnection && activePeerUsername) {
    renegotiatePeerConnection(micMuted ? "Mic muted. Updating audio..." : "Mic live. Updating audio...").catch(() => {
      // Ignore renegotiation races while toggling mute.
    });
  }
}

function setMicStandbyEnabled(enabled) {
  const nextEnabled = !!enabled;
  if (!micStream) {
    micStandbyDisabled = !nextEnabled;
    setMicActiveUI(false);
    return false;
  }
  micStandbyDisabled = !nextEnabled;
  if (nextEnabled) {
    if (studioSettings.pushToTalkEnabled) {
      setMicMuted(true);
      setMicStatus("Push-to-talk enabled. Hold Space or button to speak.");
    } else {
      setMicMuted(false);
    }
    setMicStatus("Mic is live. Others can hear you.");
    setMicActiveUI(true);
    return true;
  }
  micMuted = true;
  const track = micStream.getAudioTracks()[0];
  if (track) {
    track.enabled = false;
  }
  syncMicMonitoringOutput();
  if (useTwilioVideoRoom()) {
    syncTwilioPublishedTracks().catch(() => {
      // Ignore Twilio sync races while standing by.
    });
  }
  addLocalTracksToPeerConnection();
  setMicStatus("Microphone is off.");
  updateEchoWarning();
  setMicActiveUI(false);
  return true;
}

function canUsePushToTalk() {
  return !!(studioSettings.pushToTalkEnabled && micStream && !micStandbyDisabled);
}

function beginPushToTalk() {
  if (!canUsePushToTalk() || pttTalking) {
    return;
  }
  pttTalking = true;
  setMicMuted(false);
  setMicStatus("Push-to-talk active.");
  setMicActiveUI(true);
}

function endPushToTalk() {
  if (!pttTalking) {
    return;
  }
  pttTalking = false;
  if (canUsePushToTalk()) {
    setMicMuted(true);
    setMicStatus("Push-to-talk ready. Hold Space or button to speak.");
  }
  setMicActiveUI(isMicUiActive());
}

function getConnectionQuality(row) {
  const ageMs = Date.now() - Number(row && row.lastSeenAt ? row.lastSeenAt : 0);
  if (ageMs <= 7000) {
    return "good";
  }
  if (ageMs <= 12000) {
    return "fair";
  }
  return "poor";
}

function setHostStatus(text, isError) {
  hostStatus.textContent = text;
  hostStatus.classList.toggle("error", !!isError);
}

function canCurrentUserHost() {
  if (session.role === "admin") {
    return true;
  }
  return adminSettings.allowUserHostControl !== false && !!sessionPermissions.hostControl;
}

function canCurrentUserControlRecording() {
  if (session.role === "admin") {
    return true;
  }
  return adminSettings.allowUserRecordingControl !== false && !!sessionPermissions.recordingControl;
}

function canCurrentUserDownloadRecording() {
  const access = String(adminSettings.recordingDownloadAccess || "host-admin");
  if (access === "all") {
    return true;
  }
  if (access === "admin-only") {
    return session.role === "admin";
  }
  return session.role === "admin" || isCurrentUserHost();
}

function applyStudioControlState(nextState) {
  const state = nextState && typeof nextState === "object" ? nextState : {};
  const muteAllVersion = Number(state.muteAllVersion || 0);
  const forceOffAirVersion = Number(state.forceOffAirVersion || 0);
  const clearHostVersion = Number(state.clearHostVersion || 0);
  const clearSpotlightVersion = Number(state.clearSpotlightVersion || 0);
  if (muteAllVersion > studioControlVersions.muteAllVersion && micStream) {
    setMicMuted(true);
    setMicStatus("Mic muted by admin.");
  }
  if (forceOffAirVersion > studioControlVersions.forceOffAirVersion && isOnAir) {
    setOnAirMode(false).catch(() => {
      // Ignore transient close failures.
    });
  }
  if (clearHostVersion > studioControlVersions.clearHostVersion) {
    setHostOwner("");
  }
  if (clearSpotlightVersion > studioControlVersions.clearSpotlightVersion) {
    applySpotlight("", "admin").catch(() => {
      // Ignore spotlight reset races.
    });
  }
  studioControlVersions = {
    muteAllVersion,
    forceOffAirVersion,
    clearHostVersion,
    clearSpotlightVersion
  };
}

function isCurrentUserHost() {
  return !!(currentHostUsername && currentHostUsername === session.username);
}

function updateHostControlsAvailability() {
  const isHost = isCurrentUserHost();
  const canHost = canCurrentUserHost();
  hostMuteAllBtn.disabled = !isHost;
  hostClearSpotlightBtn.disabled = !isHost;
  hostSpotlightApplyBtn.disabled = !isHost;
  hostTransferBtn.disabled = !isHost;
  hostTransferSelect.disabled = !isHost;
  hostClaimBtn.disabled = !canHost && !isHost;
  hostClaimBtn.textContent = isHost ? "Release Host" : canHost ? "Become Host" : "Host Locked";
  hostClaimBtn.classList.toggle("on", isHost);
  updateMediaActionsUI();
}

function updateMediaActionsUI() {
  const isHost = isCurrentUserHost();
  const hasDemoOrAsset = RECORDING_DEMO_MODE || hasLocalRecordingAsset();
  const canRecord = canCurrentUserControlRecording();
  const canDownload = canCurrentUserDownloadRecording();
  onAirRecordBtn.disabled = !isHost || !canRecord || recordingStartInProgress || recordingSplitInProgress;
  onAirRecordBtn.textContent = recordingStartInProgress ? "Starting..." : isRecording ? "Stop Recording" : "Record";
  onAirPlaybackBtn.disabled = !isHost || isRecording || !recordingReady || !hasDemoOrAsset;
  onAirDownloadBtn.disabled = isRecording || !recordingReady || !hasDemoOrAsset || !canDownload;
  updateOnAirMusicCuesUI();
  updatePreflightSummary();
  syncReviewPanelUI();
}

function getSelectedOnAirMusicTrack() {
  if (!onAirMusicTrackSelect) {
    return "";
  }
  return String(onAirMusicTrackSelect.value || "").trim();
}

function openMusicLibraryDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB is unavailable."));
      return;
    }
    const request = window.indexedDB.open(MUSIC_LIBRARY_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MUSIC_LIBRARY_STORE)) {
        db.createObjectStore(MUSIC_LIBRARY_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Unable to open music library."));
  });
}

async function getAllMusicLibraryTracks() {
  const db = await openMusicLibraryDb();
  return await new Promise((resolve, reject) => {
    const transaction = db.transaction(MUSIC_LIBRARY_STORE, "readonly");
    const store = transaction.objectStore(MUSIC_LIBRARY_STORE);
    const request = store.getAll();
    request.onsuccess = () => {
      const rows = Array.isArray(request.result) ? request.result : [];
      resolve(
        rows.sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0))
      );
    };
    request.onerror = () => reject(request.error || new Error("Unable to read music library."));
    transaction.oncomplete = () => db.close();
  });
}

async function putMusicLibraryTrack(record) {
  const db = await openMusicLibraryDb();
  return await new Promise((resolve, reject) => {
    const transaction = db.transaction(MUSIC_LIBRARY_STORE, "readwrite");
    const store = transaction.objectStore(MUSIC_LIBRARY_STORE);
    const request = store.put(record);
    request.onsuccess = () => resolve(record);
    request.onerror = () => reject(request.error || new Error("Unable to save track."));
    transaction.oncomplete = () => db.close();
  });
}

async function deleteMusicLibraryTrack(id) {
  const db = await openMusicLibraryDb();
  return await new Promise((resolve, reject) => {
    const transaction = db.transaction(MUSIC_LIBRARY_STORE, "readwrite");
    const store = transaction.objectStore(MUSIC_LIBRARY_STORE);
    const request = store.delete(String(id || "").trim());
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error || new Error("Unable to delete track."));
    transaction.oncomplete = () => db.close();
  });
}

async function getMusicLibraryTrackById(id) {
  const existing = onAirMusicLibrary.find((track) => track && track.id === id);
  if (existing && (existing.source === "shared" || existing.file)) {
    return existing;
  }
  const db = await openMusicLibraryDb();
  return await new Promise((resolve, reject) => {
    const transaction = db.transaction(MUSIC_LIBRARY_STORE, "readonly");
    const store = transaction.objectStore(MUSIC_LIBRARY_STORE);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Unable to load track."));
    transaction.oncomplete = () => db.close();
  });
}

async function hasBrowserLocalMusicTrack(id) {
  const trackId = String(id || "").trim();
  if (!trackId) {
    return false;
  }
  try {
    const track = await getMusicLibraryTrackById(trackId);
    return !!(track && track.file);
  } catch (error) {
    return false;
  }
}

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

function getLocalTrackIdForAsset(assetOrTrack) {
  const metadata = assetOrTrack && assetOrTrack.metadata && typeof assetOrTrack.metadata === "object"
    ? assetOrTrack.metadata
    : null;
  return String((metadata && metadata.localTrackId) || "").trim();
}

function isBrowserLocalSharedAsset(assetOrTrack) {
  if (!assetOrTrack || typeof assetOrTrack !== "object") {
    return false;
  }
  const storageProvider = String(assetOrTrack.storageProvider || "").trim().toLowerCase();
  const metadata = assetOrTrack.metadata && typeof assetOrTrack.metadata === "object" ? assetOrTrack.metadata : null;
  const source = String((metadata && metadata.source) || "").trim().toLowerCase();
  return storageProvider === "browser-local" || source === "browser-local";
}

async function resolveMusicTrackForPlayback(trackOrAsset) {
  if (!trackOrAsset || typeof trackOrAsset !== "object") {
    return null;
  }
  if (trackOrAsset.file) {
    return normalizeLocalMusicTrack(trackOrAsset);
  }
  const directId = String(trackOrAsset.id || "").trim();
  const localTrackId = getLocalTrackIdForAsset(trackOrAsset);
  const candidateIds = [localTrackId, directId].filter(Boolean);
  for (const candidateId of candidateIds) {
    try {
      const localTrack = await getMusicLibraryTrackById(candidateId);
      if (localTrack && localTrack.file) {
        return normalizeLocalMusicTrack(localTrack);
      }
    } catch (error) {
      // Ignore local lookup failures and continue to next candidate.
    }
  }
  if (isBrowserLocalSharedAsset(trackOrAsset)) {
    return null;
  }
  return trackOrAsset;
}

async function filterPlayableSharedMusicAssets(sharedAssets) {
  const assets = Array.isArray(sharedAssets) ? sharedAssets : [];
  const playable = [];
  const unavailable = [];
  for (const asset of assets) {
    if (!isBrowserLocalSharedAsset(asset)) {
      playable.push(asset);
      continue;
    }
    const localTrackId = getLocalTrackIdForAsset(asset);
    if (localTrackId && await hasBrowserLocalMusicTrack(localTrackId)) {
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

function populateOnAirMusicTrackSelect() {
  if (!onAirMusicTrackSelect) {
    return;
  }
  const previous = onAirMusicTrackSelect.value;
  onAirMusicTrackSelect.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = onAirMusicLibrary.length ? "Select an uploaded track" : "No uploaded tracks yet";
  onAirMusicTrackSelect.appendChild(defaultOption);
  const sharedTracks = onAirMusicLibrary.filter((track) => track && track.source === "shared");
  const localTracks = onAirMusicLibrary.filter((track) => !track || track.source !== "shared");
  if (sharedTracks.length) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = "Shared Music Library";
    sharedTracks.forEach((track) => {
      const option = document.createElement("option");
      option.value = track.id;
      option.textContent = track.name;
      optgroup.appendChild(option);
    });
    onAirMusicTrackSelect.appendChild(optgroup);
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
    onAirMusicTrackSelect.appendChild(optgroup);
  }
  if (previous && onAirMusicLibrary.some((track) => track.id === previous)) {
    onAirMusicTrackSelect.value = previous;
  } else {
    onAirMusicTrackSelect.value = "";
  }
}

function getLibraryDisplayLabel(libraryKind) {
  if (libraryKind === "post-production") {
    return "Post-Production";
  }
  if (libraryKind === "episodes") {
    return "Episodes";
  }
  return "Music";
}

function setOnAirLibraryOpen(open) {
  onAirLibraryOpen = !!open;
  if (!onAirLibraryOpen) {
    closeOnAirLibraryPreview();
  }
  if (onAirLibraryDrawer) {
    onAirLibraryDrawer.classList.toggle("open", onAirLibraryOpen);
  }
  if (onAirLibraryPanel) {
    onAirLibraryPanel.classList.toggle("hidden", !onAirLibraryOpen);
  }
}

function setOnAirAudioOpen(open) {
  onAirAudioOpen = !!open;
  if (onAirAudioDrawer) {
    onAirAudioDrawer.classList.toggle("open", onAirAudioOpen);
  }
  if (onAirAudioPanel) {
    onAirAudioPanel.classList.toggle("hidden", !onAirAudioOpen);
  }
  if (onAirAudioOpen) {
    onAirActiveCueRenderSignature = "";
    queueOnAirAudioControlsRefresh();
  }
}

function updateOnAirAudioSliderFill() {
  if (!onAirAudioVolumeSlider) {
    return;
  }
  const min = Number(onAirAudioVolumeSlider.min || 0);
  const max = Number(onAirAudioVolumeSlider.max || 100);
  const value = Number(onAirAudioVolumeSlider.value || 0);
  const range = Math.max(1, max - min);
  const percent = Math.max(0, Math.min(100, ((value - min) / range) * 100));
  onAirAudioVolumeSlider.style.setProperty("--volume-fill", percent.toFixed(2) + "%");
  if (onAirAudioSliderValue) {
    onAirAudioSliderValue.textContent = Math.round(value) + "%";
  }
}

function updateOnAirGuestAudioUI() {
  const guestName = getTargetPeer();
  if (onAirGuestAudioName) {
    onAirGuestAudioName.textContent = guestName ? getDisplayNameForUsername(guestName) : "No guest live";
  }
  if (onAirGuestVolumeSlider) {
    onAirGuestVolumeSlider.disabled = !isCurrentUserHost() || !guestName;
    onAirGuestVolumeSlider.value = String(onAirGuestVolumePercent);
  }
  if (onAirGuestVolumeValue) {
    onAirGuestVolumeValue.textContent = Math.round(onAirGuestVolumePercent) + "%";
  }
  if (onAirGuestMeterFill) {
    onAirGuestMeterFill.style.width = Math.max(0, Math.min(100, Number(onAirGuestVolumePercent) || 0)) + "%";
  }
}

function applyOnAirGuestVolume(rawValue) {
  const next = Math.max(0, Math.min(150, Number(rawValue) || 0));
  onAirGuestVolumePercent = next;
  if (remoteAudio) {
    remoteAudio.volume = Math.max(0, Math.min(1.5, next / 100));
  }
  updateOnAirGuestAudioUI();
}

function updateOnAirMasterMeter(levelPercent, peakDbOverride) {
  const nextLevel = Math.max(0, Math.min(100, Number(levelPercent) || 0));
  if (onAirMasterMeterFill) {
    onAirMasterMeterFill.style.width = nextLevel + "%";
  }
  if (onAirMusicBusMeterFill) {
    onAirMusicBusMeterFill.style.width = nextLevel + "%";
  }
  if (onAirClippingBarFill) {
    onAirClippingBarFill.style.width = nextLevel + "%";
  }
  const approxDb = Number.isFinite(peakDbOverride)
    ? Math.max(-60, Math.min(0, Math.round(peakDbOverride)))
    : Math.round(-60 + (nextLevel / 100) * 60);
  if (onAirMasterMeterValue) {
    onAirMasterMeterValue.textContent = approxDb + " dBFS";
  }
  if (onAirMusicBusMeterValue) {
    onAirMusicBusMeterValue.textContent = approxDb + " dBFS";
  }
  if (onAirMusicBusMeterTrack) {
    onAirMusicBusMeterTrack.classList.remove("safe", "healthy", "hot", "clip");
    if (nextLevel >= 88) {
      onAirMusicBusMeterTrack.classList.add("clip");
    } else if (nextLevel >= 68) {
      onAirMusicBusMeterTrack.classList.add("hot");
    } else if (nextLevel >= 42) {
      onAirMusicBusMeterTrack.classList.add("healthy");
    } else {
      onAirMusicBusMeterTrack.classList.add("safe");
    }
  }
  if (onAirMusicBusMeterBadge) {
    onAirMusicBusMeterBadge.classList.remove("safe", "healthy", "hot", "clip");
    if (nextLevel >= 88) {
      onAirMusicBusMeterBadge.textContent = "Clip";
      onAirMusicBusMeterBadge.classList.add("clip");
    } else if (nextLevel >= 68) {
      onAirMusicBusMeterBadge.textContent = "Hot";
      onAirMusicBusMeterBadge.classList.add("hot");
    } else if (nextLevel >= 42) {
      onAirMusicBusMeterBadge.textContent = "Healthy";
      onAirMusicBusMeterBadge.classList.add("healthy");
    } else {
      onAirMusicBusMeterBadge.textContent = "Safe";
      onAirMusicBusMeterBadge.classList.add("safe");
    }
  }
  if (onAirPeakHoldValue) {
    onAirPeakHoldValue.textContent = approxDb + " dBFS";
  }
  if (onAirClippingWarning) {
    onAirClippingWarning.classList.remove("safe", "warn", "hot");
    if (nextLevel >= 88) {
      onAirClippingWarning.textContent = "Clipping Risk";
      onAirClippingWarning.classList.add("hot");
    } else if (nextLevel >= 68) {
      onAirClippingWarning.textContent = "Hot";
      onAirClippingWarning.classList.add("warn");
    } else {
      onAirClippingWarning.textContent = "Safe";
      onAirClippingWarning.classList.add("safe");
    }
  }
}

function getAnalyserPeakSnapshot(analyser, data) {
  if (!analyser || !data) {
    return { levelPercent: 0, peakDb: -60 };
  }
  analyser.getByteTimeDomainData(data);
  let peak = 0;
  for (let index = 0; index < data.length; index += 1) {
    const sample = (data[index] - 128) / 128;
    peak = Math.max(peak, Math.abs(sample));
  }
  const peakDb = 20 * Math.log10(Math.max(peak, 1e-4));
  const normalized = (Math.max(-48, Math.min(0, peakDb)) + 48) / 48;
  return {
    levelPercent: Math.min(100, Math.max(0, Math.round(normalized * 100))),
    peakDb
  };
}

function startOnAirMixerBusMeter() {
  if (onAirMixerBusMeterFrameId || !onAirMixerBusAnalyser || !onAirMixerBusMeterData) {
    return;
  }

  const tick = () => {
    onAirMixerBusMeterFrameId = 0;
    if (!onAirMixerBusAnalyser || !onAirMixerBusMeterData) {
      onAirMixerBusMeterLevel = 0;
      onAirMixerBusPeakDb = -60;
      updateOnAirMasterMeter(0, -60);
      return;
    }
    const snapshot = getAnalyserPeakSnapshot(onAirMixerBusAnalyser, onAirMixerBusMeterData);
    const attack = snapshot.levelPercent > onAirMixerBusMeterLevel ? 0.8 : 0.18;
    onAirMixerBusMeterLevel += (snapshot.levelPercent - onAirMixerBusMeterLevel) * attack;
    onAirMixerBusPeakDb = Math.max(snapshot.peakDb, onAirMixerBusPeakDb - 0.9);
    updateOnAirMasterMeter(onAirMixerBusMeterLevel, onAirMixerBusPeakDb);
    onAirMixerBusMeterFrameId = requestAnimationFrame(tick);
  };

  onAirMixerBusMeterFrameId = requestAnimationFrame(tick);
}

function disconnectOutgoingProgramAudioSources() {
  outgoingProgramAudioSources.forEach((source) => {
    try {
      source.disconnect();
    } catch (error) {
      // Ignore disconnect races.
    }
  });
  outgoingProgramAudioSources = [];
}

function getOutgoingAudioStream() {
  const mixedTrack = outgoingProgramAudioDestination && outgoingProgramAudioDestination.stream
    ? outgoingProgramAudioDestination.stream.getAudioTracks()[0]
    : null;
  if (mixedTrack) {
    return outgoingProgramAudioDestination.stream;
  }
  return micProcessedStream || micStream || null;
}

function getOutgoingAudioTrack() {
  const outgoingStream = getOutgoingAudioStream();
  return outgoingStream && outgoingStream.getAudioTracks ? outgoingStream.getAudioTracks()[0] || null : null;
}

async function refreshOutgoingProgramAudioStream() {
  const hasMic = !!(micProcessedStream && micProcessedStream.getAudioTracks && micProcessedStream.getAudioTracks().length);
  const musicStream = onAirMixerDestinationNode && onAirMixerDestinationNode.stream ? onAirMixerDestinationNode.stream : null;
  const hasMusicBus = !!(musicStream && musicStream.getAudioTracks && musicStream.getAudioTracks().length);

  if (!hasMic && !hasMusicBus) {
    disconnectOutgoingProgramAudioSources();
    if (outgoingProgramAudioContext) {
      outgoingProgramAudioContext.close().catch(() => {
        // Ignore close races.
      });
    }
    outgoingProgramAudioContext = null;
    outgoingProgramAudioDestination = null;
    return;
  }

  if (!outgoingProgramAudioContext) {
    outgoingProgramAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    outgoingProgramAudioDestination = outgoingProgramAudioContext.createMediaStreamDestination();
  }

  disconnectOutgoingProgramAudioSources();

  if (hasMic) {
    const micSource = outgoingProgramAudioContext.createMediaStreamSource(micProcessedStream);
    micSource.connect(outgoingProgramAudioDestination);
    outgoingProgramAudioSources.push(micSource);
  }

  if (hasMusicBus) {
    const musicSource = outgoingProgramAudioContext.createMediaStreamSource(musicStream);
    musicSource.connect(outgoingProgramAudioDestination);
    outgoingProgramAudioSources.push(musicSource);
  }

  if (outgoingProgramAudioContext.state === "suspended") {
    await outgoingProgramAudioContext.resume();
  }
}

function getOnAirMusicVolumeNormalized() {
  if (!onAirAudioVolumeSlider) {
    return onAirMusicBaseVolume;
  }
  const min = Number(onAirAudioVolumeSlider.min || 0);
  const max = Number(onAirAudioVolumeSlider.max || 100);
  const value = Number(onAirAudioVolumeSlider.value || Math.round(onAirMusicBaseVolume * 100));
  const range = Math.max(1, max - min);
  return Math.max(0, Math.min(1, (value - min) / range));
}

function getConfiguredRecordingFadeDurationSeconds(settingKey, fallbackSeconds) {
  const parsed = Number(studioSettings[settingKey]);
  const fallback = Math.max(1, Number(fallbackSeconds) || 1);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(1, Math.min(20, Math.round(parsed)));
}

function getConfiguredRecordingFadeStartSeconds(settingKey, fallbackSeconds) {
  const parsed = Number(studioSettings[settingKey]);
  const fallback = Math.max(1, Number(fallbackSeconds) || 1);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(1, Math.min(30, Math.round(parsed)));
}

function getRecordingFadeInDurationMs() {
  return getConfiguredRecordingFadeDurationSeconds("recordingMusicFadeInDurationSeconds", 2) * 1000;
}

function getRecordingFadeOutDurationMs() {
  return getConfiguredRecordingFadeDurationSeconds("recordingMusicFadeOutDurationSeconds", 5) * 1000;
}

function getRecordingAutoFadeInStartMs() {
  return getConfiguredRecordingFadeStartSeconds("recordingMusicAutoFadeInStartSeconds", 1) * 1000;
}

function getRecordingAutoFadeOutStartMs() {
  return getConfiguredRecordingFadeStartSeconds("recordingMusicAutoFadeOutStartSeconds", 5) * 1000;
}

function getRecordingAutoFadeInDurationMs() {
  return getConfiguredRecordingFadeDurationSeconds("recordingMusicAutoFadeInDurationSeconds", 2) * 1000;
}

function getRecordingAutoFadeOutDurationMs() {
  return getConfiguredRecordingFadeDurationSeconds("recordingMusicAutoFadeOutDurationSeconds", 5) * 1000;
}

function handleOnAirVolumeSliderInput(rawValue) {
  if (!onAirAudioVolumeSlider) {
    return;
  }
  const min = Number(onAirAudioVolumeSlider.min || 0);
  const max = Number(onAirAudioVolumeSlider.max || 100);
  const nextValue = Math.max(min, Math.min(max, Number(rawValue) || 0));
  onAirAudioVolumeSlider.value = String(nextValue);
  updateOnAirAudioSliderFill();
  const range = Math.max(1, max - min);
  setOnAirMusicVolumeNormalized((nextValue - min) / range, { apply: true });
}

function setOnAirMusicVolumeNormalized(nextVolume, options) {
  const config = options && typeof options === "object" ? options : {};
  const clamped = Math.max(0, Math.min(1, Number(nextVolume) || 0));
  onAirMusicBaseVolume = clamped;
  if (onAirAudioVolumeSlider) {
    onAirAudioVolumeSlider.value = String(Math.round(clamped * 100));
    updateOnAirAudioSliderFill();
  }
  if (config.apply !== false) {
    applyOnAirMusicOutputVolume(true);
  }
}

function cancelOnAirMusicFade() {
  const targets = [createPrimaryOnAirMusicCueTarget(), ...onAirAuxMusicCues.map((cue) => createExplicitOnAirMusicCueTarget(cue))].filter(Boolean);
  targets.forEach((target) => {
    const frameId = target.getFadeFrameId ? target.getFadeFrameId() : 0;
    if (frameId) {
      clearTimeout(frameId);
      target.setFadeFrameId(0);
    }
  });
}

function getOnAirMusicDuckMultiplier() {
  if (!onAirMusicDuckVoiceEnabled || micMuted || !micStream) {
    return 1;
  }
  if (currentMicMeterLevel >= 70) {
    return 0.34;
  }
  if (currentMicMeterLevel >= 48) {
    return 0.5;
  }
  if (currentMicMeterLevel >= 28) {
    return 0.7;
  }
  return 1;
}

function getOnAirMusicEffectiveVolume(cueTarget) {
  return Math.max(0, Math.min(1, onAirMusicBaseVolume * getOnAirCueVolumeMultiplier(cueTarget) * getOnAirMusicDuckMultiplier()));
}

function getOnAirCueVolumeMultiplier(cueTarget) {
  if (!cueTarget) {
    return 1;
  }
  if (cueTarget.kind === "primary") {
    return Math.max(0, Math.min(1.5, Number(onAirMusicPrimaryVolume) || 1));
  }
  const cue = cueTarget.cue || null;
  return Math.max(0, Math.min(1.5, Number(cue && cue.volumeMultiplier) || 1));
}

function getOnAirCueEffectiveVolume(cueTarget) {
  return Math.max(
    0,
    Math.min(1, onAirMusicBaseVolume * getOnAirCueVolumeMultiplier(cueTarget) * getOnAirMusicDuckMultiplier())
  );
}

function getActiveOnAirMusicCueTargets() {
  const targets = [];
  if (onAirMusicPrimaryCue && !onAirMusicPrimaryCue.cleanedUp) {
    targets.push({
      kind: "primary",
      cue: onAirMusicPrimaryCue,
      getRecordingGainNode: () => null,
      setFadeFrameId(value) {
        onAirMusicPrimaryCue.fadeTimeoutId = value;
      },
      getFadeFrameId() {
        return onAirMusicPrimaryCue.fadeTimeoutId || 0;
      }
    });
  }
  onAirAuxMusicCues = onAirAuxMusicCues.filter((cue) => cue && !cue.cleanedUp);
  onAirAuxMusicCues.forEach((cue) => {
    targets.push({
      kind: "aux",
      cue,
      getRecordingGainNode: () => null,
      setFadeFrameId(value) {
        cue.fadeTimeoutId = value;
      },
      getFadeFrameId() {
        return cue.fadeTimeoutId || 0;
      }
    });
  });
  return targets;
}

function createExplicitOnAirMusicCueTarget(cue) {
  if (!cue) {
    return null;
  }
  return {
    kind: cue.kind || "aux",
    cue,
    getRecordingGainNode: () => null,
    setFadeFrameId(value) {
      cue.fadeTimeoutId = value;
    },
    getFadeFrameId() {
      return cue.fadeTimeoutId || 0;
    }
  };
}

function createPrimaryOnAirMusicCueTarget() {
  if (!onAirMusicPrimaryCue) {
    return null;
  }
  return {
    kind: "primary",
    cue: onAirMusicPrimaryCue,
    getRecordingGainNode: () => null,
    setFadeFrameId(value) {
      onAirMusicPrimaryCue.fadeTimeoutId = value;
    },
    getFadeFrameId() {
      return onAirMusicPrimaryCue.fadeTimeoutId || 0;
    },
    setAutoFadeInTimerId(value) {
      onAirMusicPrimaryCue.autoFadeInTimerId = value;
    },
    getAutoFadeInTimerId() {
      return onAirMusicPrimaryCue.autoFadeInTimerId || 0;
    },
    setAutoFadeOutTimerId(value) {
      onAirMusicPrimaryCue.autoFadeOutTimerId = value;
    },
    getAutoFadeOutTimerId() {
      return onAirMusicPrimaryCue.autoFadeOutTimerId || 0;
    }
  };
}

function getOnAirCueDisplayName(cueTarget) {
  if (!cueTarget) {
    return "Live cue";
  }
  if (cueTarget.kind === "primary") {
    if (cueTarget.cue && cueTarget.cue.trackName) {
      return cueTarget.cue.trackName;
    }
    const activeTrack = onAirMusicLibrary.find((track) => track.id === onAirMusicCurrentTrackId);
    return activeTrack ? activeTrack.name : "Primary cue";
  }
  return String((cueTarget.cue && cueTarget.cue.trackName) || "Layered cue");
}

function clearOnAirMusicAutoFadeTimers(target) {
  if (!target) {
    return;
  }
  const inTimer = target.getAutoFadeInTimerId ? target.getAutoFadeInTimerId() : 0;
  const outTimer = target.getAutoFadeOutTimerId ? target.getAutoFadeOutTimerId() : 0;
  if (inTimer) {
    clearTimeout(inTimer);
    target.setAutoFadeInTimerId(0);
  }
  if (outTimer) {
    clearTimeout(outTimer);
    target.setAutoFadeOutTimerId(0);
  }
}

function setOnAirMusicPlaybackAndRecordingVolume(nextVolume, specificTarget, options) {
  const config = options && typeof options === "object" ? options : {};
  const directWrite = !!config.directWrite;
  const target = Math.max(0, Math.min(1, Number(nextVolume) || 0));
  const targets = specificTarget ? [specificTarget] : getActiveOnAirMusicCueTargets();
  const now = getOnAirMixerCurrentTime();
  targets.forEach((cueTarget) => {
    if (cueTarget.cue) {
      cueTarget.cue.currentGain = target;
      cueTarget.cue.state = target <= 0.001 ? "fading" : "playing";
    }
    const gainNode = cueTarget.cue && cueTarget.cue.gainNode
      ? cueTarget.cue.gainNode
      : cueTarget.getRecordingGainNode
        ? cueTarget.getRecordingGainNode()
        : null;
    if (gainNode) {
      try {
        gainNode.gain.cancelScheduledValues(now);
        if (directWrite) {
          gainNode.gain.setValueAtTime(target, now);
        } else {
          gainNode.gain.setTargetAtTime(target, now, 0.035);
        }
      } catch (error) {
        gainNode.gain.value = target;
      }
    }
  });
}

function applyOnAirMusicOutputVolume(immediate) {
  const cueTargets = getActiveOnAirMusicCueTargets();
  if (!cueTargets.length) {
    return;
  }
  if (immediate) {
    cancelOnAirMusicFade();
    cueTargets.forEach((cueTarget) => {
      setOnAirMusicPlaybackAndRecordingVolume(getOnAirCueEffectiveVolume(cueTarget), cueTarget);
    });
    return;
  }
  cueTargets.forEach((cueTarget) => {
    const currentValue = cueTarget.cue && Number.isFinite(cueTarget.cue.currentGain)
      ? cueTarget.cue.currentGain
      : getOnAirCueEffectiveVolume(cueTarget);
    const target = getOnAirCueEffectiveVolume(cueTarget);
    if (Math.abs(currentValue - target) < 0.015) {
      setOnAirMusicPlaybackAndRecordingVolume(target, cueTarget);
      return;
    }
    setOnAirMusicPlaybackAndRecordingVolume(
      currentValue + (target - currentValue) * 0.18,
      cueTarget
    );
  });
}

function queueOnAirCueVolumeApply() {
  if (onAirCueVolumeApplyFrameId) {
    return;
  }
  onAirCueVolumeApplyFrameId = window.requestAnimationFrame(() => {
    onAirCueVolumeApplyFrameId = 0;
    getActiveOnAirMusicCueTargets().forEach((cueTarget) => {
      setOnAirMusicPlaybackAndRecordingVolume(
        getOnAirCueEffectiveVolume(cueTarget),
        cueTarget,
        { directWrite: true }
      );
    });
  });
}

function startOnAirMusicFade(targetVolume, durationMs, options) {
  const cueTargets = getActiveOnAirMusicCueTargets();
  if (!cueTargets.length) {
    return Promise.resolve(false);
  }
  const config = options && typeof options === "object" ? options : {};
  const requestedTargets = config.target ? [config.target] : cueTargets;
  const target = Math.max(0, Math.min(1, Number(targetVolume) || 0));
  const duration = Math.max(120, Number(durationMs) || 900);
  const startVolumes = requestedTargets.map((cueTarget) =>
    Math.max(0, Math.min(1, Number((cueTarget.cue && cueTarget.cue.currentGain) || 0)))
  );
  if (startVolumes.every((startVolume) => Math.abs(startVolume - target) < 0.001)) {
    if (typeof config.after === "function") {
      config.after();
    }
    return Promise.resolve(true);
  }
  requestedTargets.forEach((cueTarget) => {
    const frameId = cueTarget.getFadeFrameId ? cueTarget.getFadeFrameId() : 0;
    if (frameId) {
      clearTimeout(frameId);
      cueTarget.setFadeFrameId(0);
    }
  });
  return new Promise((resolve) => {
    const contextNow = getOnAirMixerCurrentTime();
    requestedTargets.forEach((cueTarget) => {
      if (cueTarget.cue && cueTarget.cue.gainNode) {
        try {
          cueTarget.cue.gainNode.gain.cancelScheduledValues(contextNow);
          cueTarget.cue.gainNode.gain.setValueAtTime(startVolumes[requestedTargets.indexOf(cueTarget)], contextNow);
          cueTarget.cue.gainNode.gain.linearRampToValueAtTime(target, contextNow + duration / 1000);
        } catch (error) {
          cueTarget.cue.gainNode.gain.value = target;
        }
      }
      if (cueTarget.cue) {
        cueTarget.cue.currentGain = target;
        cueTarget.cue.state = target <= 0.001 ? "fading" : "playing";
      }
      cueTarget.setFadeFrameId(window.setTimeout(() => {
        cueTarget.setFadeFrameId(0);
      }, duration));
    });
    window.setTimeout(() => {
      if (typeof config.after === "function") {
        config.after();
      }
      resolve(true);
      queueOnAirAudioControlsRefresh();
    }, duration + 16);
  });
}

function updateOnAirAudioControlsUI() {
  const isHost = isCurrentUserHost();
  const isPlaying = getActiveOnAirMusicCueTargets().length > 0;
  if (onAirAudioFadeInBtn) {
    onAirAudioFadeInBtn.disabled = !isHost || !isPlaying;
  }
  if (onAirAudioFadeOutBtn) {
    onAirAudioFadeOutBtn.disabled = !isHost || !isPlaying;
  }
  if (onAirAudioResetMixBtn) {
    onAirAudioResetMixBtn.disabled = !isHost;
  }
  if (onAirAudioStopAllBtn) {
    onAirAudioStopAllBtn.disabled = !isHost || !isPlaying;
  }
  if (onAirAudioAutoFadeInToggle) {
    onAirAudioAutoFadeInToggle.disabled = !isHost;
    onAirAudioAutoFadeInToggle.checked = onAirMusicAutoFadeInEnabled;
  }
  if (onAirAudioAutoFadeOutToggle) {
    onAirAudioAutoFadeOutToggle.disabled = !isHost;
    onAirAudioAutoFadeOutToggle.checked = onAirMusicAutoFadeOutEnabled;
  }
  if (onAirAudioDuckVoiceToggle) {
    onAirAudioDuckVoiceToggle.disabled = !isHost;
    onAirAudioDuckVoiceToggle.checked = onAirMusicDuckVoiceEnabled;
  }
  if (onAirAudioVolumeSlider) {
    onAirAudioVolumeSlider.disabled = !isHost;
  }
  renderOnAirActiveCueControls();
  updateOnAirGuestAudioUI();
}

function queueOnAirAudioControlsRefresh() {
  if (onAirAudioControlsRenderQueued) {
    return;
  }
  onAirAudioControlsRenderQueued = true;
  window.requestAnimationFrame(() => {
    onAirAudioControlsRenderQueued = false;
    updateOnAirAudioControlsUI();
  });
}

function renderOnAirActiveCueControls() {
  if (!onAirActiveCuesList) {
    return;
  }
  const cueTargets = getActiveOnAirMusicCueTargets();
  if (onAirActiveCuesMeta) {
    onAirActiveCuesMeta.textContent = cueTargets.length
      ? cueTargets.length + " live cue" + (cueTargets.length === 1 ? "" : "s")
      : "No active cues";
  }
  if (!onAirAudioOpen) {
    return;
  }
  const renderSignature = cueTargets
    .map((cueTarget) => {
      const id = cueTarget.kind === "primary"
        ? "primary:" + String(onAirMusicCurrentTrackId || "")
        : "aux:" + String((cueTarget.cue && cueTarget.cue.id) || "");
      return id + ":" + String((cueTarget.cue && cueTarget.cue.state) || "idle");
    })
    .join("|");
  if (renderSignature === onAirActiveCueRenderSignature) {
    return;
  }
  onAirActiveCueRenderSignature = renderSignature;
  onAirActiveCuesList.innerHTML = "";
  if (!cueTargets.length) {
    const empty = document.createElement("p");
    empty.className = "onair-active-cues-empty";
    empty.textContent = "Start a cue to get independent cue volume controls here.";
    onAirActiveCuesList.appendChild(empty);
    return;
  }
  cueTargets.forEach((cueTarget, index) => {
    const row = document.createElement("div");
    row.className = "onair-active-cue-row";
    const main = document.createElement("div");
    main.className = "onair-active-cue-main";
    const head = document.createElement("div");
    head.className = "onair-active-cue-head";
    const stateDot = document.createElement("span");
    stateDot.className = "onair-active-cue-state-dot " + String((cueTarget.cue && cueTarget.cue.state) || "playing");
    head.appendChild(stateDot);
    const title = document.createElement("p");
    title.className = "onair-active-cue-title";
    title.textContent = getOnAirCueDisplayName(cueTarget);
    head.appendChild(title);
    const note = document.createElement("p");
    note.className = "onair-active-cue-note";
    const elapsedMs = cueTarget.cue && cueTarget.cue.startedAt ? Math.max(0, Date.now() - cueTarget.cue.startedAt) : 0;
    const elapsedLabel = formatPreviewClock(elapsedMs / 1000);
    note.textContent = elapsedLabel + " \u2022 " + (cueTarget.kind === "primary" ? "Primary cue" : "Layer " + String(index));
    const controls = document.createElement("div");
    controls.className = "onair-audio-slider-shell onair-active-cue-slider-shell";
    const sliderHead = document.createElement("div");
    sliderHead.className = "onair-audio-slider-head";
    const sliderLabel = document.createElement("span");
    sliderLabel.className = "onair-audio-slider-label";
    sliderLabel.textContent = "Channel Volume";
    sliderHead.appendChild(sliderLabel);
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "150";
    slider.step = "1";
    slider.className = "onair-active-cue-slider";
    slider.value = String(Math.round(getOnAirCueVolumeMultiplier(cueTarget) * 100));
    slider.disabled = !isCurrentUserHost();
    const value = document.createElement("span");
    value.className = "onair-audio-slider-value";
    value.textContent = slider.value + "%";
    sliderHead.appendChild(value);
    controls.appendChild(sliderHead);
    slider.addEventListener("input", () => {
      value.textContent = String(Math.round(Number(slider.value || 0))) + "%";
      if (!isCurrentUserHost()) {
        renderOnAirActiveCueControls();
        return;
      }
      const nextMultiplier = Math.max(0, Math.min(1.5, (Number(slider.value || 0) || 0) / 100));
      if (cueTarget.kind === "primary") {
        onAirMusicPrimaryVolume = nextMultiplier;
      } else if (cueTarget.cue) {
        cueTarget.cue.volumeMultiplier = nextMultiplier;
      }
      queueOnAirCueVolumeApply();
    });
    const sliderTrack = document.createElement("div");
    sliderTrack.className = "onair-audio-slider-track";
    sliderTrack.appendChild(slider);
    controls.appendChild(sliderTrack);
    main.appendChild(head);
    main.appendChild(controls);
    main.appendChild(note);
    const top = document.createElement("div");
    top.className = "onair-channel-top";
    const actions = document.createElement("div");
    actions.className = "onair-active-cue-actions";
    const fadeBtn = document.createElement("button");
    fadeBtn.type = "button";
    fadeBtn.className = "btn sso onair-active-cue-action";
    fadeBtn.textContent = "Fade";
    fadeBtn.disabled = !isCurrentUserHost();
    fadeBtn.addEventListener("click", () => {
      if (!isCurrentUserHost()) {
        return;
      }
      startOnAirMusicFade(0, getRecordingFadeOutDurationMs(), {
        target: cueTarget,
        after() {
          if (cueTarget.kind === "primary") {
            stopPrimaryOnAirMusicCue().catch(() => {}).finally(() => {
              updateOnAirMusicCuesUI();
              queueOnAirAudioControlsRefresh();
            });
          } else if (cueTarget.cue) {
            stopSingleOnAirMusicCue(cueTarget.cue).catch(() => {}).finally(() => {
              onAirAuxMusicCues = onAirAuxMusicCues.filter((entry) => entry.id !== cueTarget.cue.id);
              updateOnAirMusicCuesUI();
              queueOnAirAudioControlsRefresh();
            });
          }
        }
      }).catch(() => {
        onAirMediaStatus.textContent = "Unable to fade this cue right now.";
      });
    });
    const stopBtn = document.createElement("button");
    stopBtn.type = "button";
    stopBtn.className = "btn sso onair-active-cue-action";
    stopBtn.textContent = "Stop";
    stopBtn.disabled = !isCurrentUserHost();
    stopBtn.addEventListener("click", () => {
      if (!isCurrentUserHost()) {
        return;
      }
      const stopPromise = cueTarget.kind === "primary"
        ? stopPrimaryOnAirMusicCue()
        : stopSingleOnAirMusicCue(cueTarget.cue);
      Promise.resolve(stopPromise).catch(() => {}).finally(() => {
        if (cueTarget.kind !== "primary" && cueTarget.cue) {
          onAirAuxMusicCues = onAirAuxMusicCues.filter((entry) => entry.id !== cueTarget.cue.id);
        }
        updateOnAirMusicCuesUI();
        queueOnAirAudioControlsRefresh();
      });
    });
    actions.appendChild(fadeBtn);
    actions.appendChild(stopBtn);
    top.appendChild(actions);
    row.appendChild(main);
    row.appendChild(top);
    onAirActiveCuesList.appendChild(row);
  });
}

function formatLibraryAssetSize(byteSize) {
  const size = Math.max(0, Number(byteSize || 0) || 0);
  if (!size) {
    return "";
  }
  if (size >= 1024 * 1024 * 1024) {
    return (size / (1024 * 1024 * 1024)).toFixed(1) + " GB";
  }
  if (size >= 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(1) + " MB";
  }
  if (size >= 1024) {
    return Math.round(size / 1024) + " KB";
  }
  return size + " B";
}

function formatLibraryAssetStatus(status) {
  const value = String(status || "").trim().toLowerCase();
  if (value === "export-ready") {
    return "Export Ready";
  }
  if (value === "post-production") {
    return "Post-Production";
  }
  return value ? value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) : "Uploaded";
}

function formatPreviewClock(seconds) {
  const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const mins = Math.floor(safe / 60);
  const secs = String(safe % 60).padStart(2, "0");
  return String(mins).padStart(2, "0") + ":" + secs;
}

function getActiveOnAirReviewMediaElement() {
  if (
    onAirReviewVideo &&
    onAirReviewVideo.src
  ) {
    if (onAirActiveReviewMedia === onAirReviewVideo || !onAirReviewAudio || !onAirReviewAudio.src) {
      return onAirReviewVideo;
    }
  }
  if (
    onAirReviewAudio &&
    onAirReviewAudio.src
  ) {
    if (onAirActiveReviewMedia === onAirReviewAudio || !onAirReviewVideo || !onAirReviewVideo.src) {
      return onAirReviewAudio;
    }
  }
  if (
    onAirReviewVideo &&
    onAirReviewVideo.src
  ) {
    return onAirReviewVideo;
  }
  if (onAirReviewAudio && onAirReviewAudio.src) {
    return onAirReviewAudio;
  }
  return onAirActiveReviewMedia && onAirActiveReviewMedia.src ? onAirActiveReviewMedia : null;
}

function canUseOnAirReviewClipPlayback() {
  return getActiveOnAirReviewMediaElement() === onAirReviewAudio && !!onAirReviewDecodedAudioBuffer;
}

function ensureOnAirReviewAudioGraph() {
  if (onAirReviewAudioGraphUnavailable) {
    return null;
  }
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    onAirReviewAudioGraphUnavailable = true;
    pushRecordingDiagnostic("review_audio_graph_unavailable", "reason=no-audio-context");
    return null;
  }
  try {
    if (!onAirReviewAudioContext) {
      onAirReviewAudioContext = new AudioContextCtor();
    }
    if (onAirReviewVideo && !onAirReviewVideoSourceNode) {
      onAirReviewVideoSourceNode = onAirReviewAudioContext.createMediaElementSource(onAirReviewVideo);
      onAirReviewVideoGainNode = onAirReviewAudioContext.createGain();
      onAirReviewVideoGainNode.gain.value = 1;
      onAirReviewVideoSourceNode.connect(onAirReviewVideoGainNode);
      onAirReviewVideoGainNode.connect(onAirReviewAudioContext.destination);
    }
    if (onAirReviewAudio && !onAirReviewAudioSourceNode) {
      onAirReviewAudioSourceNode = onAirReviewAudioContext.createMediaElementSource(onAirReviewAudio);
      onAirReviewAudioGainNode = onAirReviewAudioContext.createGain();
      onAirReviewAudioGainNode.gain.value = 1;
      onAirReviewAudioSourceNode.connect(onAirReviewAudioGainNode);
      onAirReviewAudioGainNode.connect(onAirReviewAudioContext.destination);
    }
    if (!onAirReviewClipMixGainNode) {
      onAirReviewClipMixGainNode = onAirReviewAudioContext.createGain();
      onAirReviewClipMixGainNode.gain.value = 1;
      onAirReviewClipMixGainNode.connect(onAirReviewAudioContext.destination);
    }
  } catch (error) {
    onAirReviewAudioGraphUnavailable = true;
    pushRecordingDiagnostic(
      "review_audio_graph_failed",
      "message=" + String((error && error.message) || "graph init failed")
    );
    return null;
  }
  return onAirReviewAudioContext;
}

function getOnAirReviewActiveGainNode() {
  if (canUseOnAirReviewClipPlayback()) {
    return onAirReviewClipMixGainNode;
  }
  const media = getActiveOnAirReviewMediaElement();
  if (!media) {
    return null;
  }
  if (media === onAirReviewVideo) {
    return onAirReviewVideoGainNode;
  }
  if (media === onAirReviewAudio) {
    return onAirReviewAudioGainNode;
  }
  return null;
}

async function resumeOnAirReviewAudioGraph() {
  const context = ensureOnAirReviewAudioGraph();
  if (context && context.state === "suspended") {
    try {
      await context.resume();
    } catch (error) {
      onAirReviewAudioGraphUnavailable = true;
      pushRecordingDiagnostic(
        "review_audio_graph_resume_failed",
        "message=" + String((error && error.message) || "resume failed")
      );
    }
  }
  applyOnAirReviewPlaybackGain(true);
}

function stopOnAirReviewClipPlayback() {
  onAirReviewScheduledClipNodes.forEach((entry) => {
    if (entry && entry.source) {
      try {
        entry.source.stop();
      } catch (error) {
        // Ignore stop races.
      }
      try {
        entry.source.disconnect();
      } catch (error) {
        // Ignore disconnect races.
      }
    }
    if (entry && entry.gainNode) {
      try {
        entry.gainNode.disconnect();
      } catch (error) {
        // Ignore disconnect races.
      }
    }
  });
  onAirReviewScheduledClipNodes = [];
}

function getOnAirReviewGainBoundariesForClip(clip, fromEditedTime) {
  const clipStart = Math.max(0, Number(clip && clip.start) || 0);
  const clipEnd = Math.max(clipStart, Number(clip && clip.end) || clipStart);
  const rangeStart = Math.max(clipStart, Number(fromEditedTime) || 0);
  const boundaries = [rangeStart, clipEnd];
  onAirReviewGainAdjustments.forEach((adjustment) => {
    const start = Math.max(clipStart, Number(adjustment && adjustment.start) || 0);
    const end = Math.min(clipEnd, Math.max(start, Number(adjustment && adjustment.end) || start));
    if (end <= rangeStart || start >= clipEnd) {
      return;
    }
    boundaries.push(Math.max(rangeStart, start));
    boundaries.push(end);
  });
  return boundaries
    .filter((value) => Number.isFinite(value))
    .sort((left, right) => left - right)
    .filter((value, index, values) => index === 0 || Math.abs(value - values[index - 1]) > 0.0005);
}

function getOnAirReviewOverlapMixMultiplier(clip, chunkStart, chunkDuration, clips) {
  const mode = normalizeOnAirReviewOverlapMode(onAirReviewOverlapMode);
  if (!clip || !Array.isArray(clips) || !clips.length) {
    return 1;
  }
  const midpoint = Math.max(chunkStart, chunkStart + Math.max(0.005, chunkDuration / 2));
  const overlapping = clips
    .filter((entry) => entry && midpoint >= entry.start && midpoint <= entry.end)
    .sort((left, right) => {
      if (Math.abs(left.start - right.start) > 0.0005) {
        return left.start - right.start;
      }
      return left.sourceStart - right.sourceStart;
    });
  if (overlapping.length <= 1) {
    return 1;
  }
  if (mode === "blend") {
    return Math.max(0.55, 1 / Math.sqrt(overlapping.length));
  }
  const frontClip = overlapping[overlapping.length - 1];
  const backClip = overlapping[0];
  if (mode === "front") {
    return frontClip === clip ? 1 : 0.16;
  }
  if (mode === "back") {
    return backClip === clip ? 1 : 0.16;
  }
  return 1;
}

function scheduleOnAirReviewClipPlayback(fromEditedTime, endEditedTime) {
  if (!canUseOnAirReviewClipPlayback()) {
    return false;
  }
  const context = ensureOnAirReviewAudioGraph();
  const buffer = onAirReviewDecodedAudioBuffer;
  if (!context || !buffer || !onAirReviewClipMixGainNode) {
    return false;
  }
  stopOnAirReviewClipPlayback();
  const playbackStart = Math.max(0, Number(fromEditedTime) || 0);
  const playbackEnd = Number.isFinite(endEditedTime)
    ? Math.max(playbackStart, Number(endEditedTime) || playbackStart)
    : getOnAirReviewTimelineDuration();
  const clockStart = context.currentTime + 0.02;
  const clips = getOnAirReviewMediaClips();
  clips.forEach((clip) => {
    if (clip.end <= playbackStart || clip.start >= playbackEnd) {
      return;
    }
    const boundaries = getOnAirReviewGainBoundariesForClip(clip, playbackStart)
      .map((value) => Math.max(playbackStart, Math.min(playbackEnd, value)));
    for (let index = 0; index < boundaries.length - 1; index += 1) {
      const chunkStart = Math.max(playbackStart, boundaries[index]);
      const chunkEnd = Math.min(playbackEnd, Math.max(chunkStart, boundaries[index + 1]));
      const chunkDuration = chunkEnd - chunkStart;
      if (chunkDuration <= 0.01) {
        continue;
      }
      const sourceOffset = Math.max(0, clip.sourceStart + (chunkStart - clip.start));
      if (sourceOffset >= buffer.duration) {
        continue;
      }
      const sourceBounds = getOnAirReviewNormalizedSourceBounds(clip);
      const clipSourceEnd = Math.min(buffer.duration, sourceBounds.sourceEnd);
      const availableClipDuration = Math.max(0, clipSourceEnd - sourceOffset);
      if (availableClipDuration <= 0.005) {
        continue;
      }
      const safeDuration = Math.min(
        chunkDuration,
        Math.max(0.01, buffer.duration - sourceOffset),
        availableClipDuration
      );
      if (safeDuration <= 0.01) {
        continue;
      }
      const source = context.createBufferSource();
      const gainNode = context.createGain();
      const midpoint = chunkStart + safeDuration / 2;
      const clipGain = dbToGainMultiplier(getOnAirReviewGainDbAt(midpoint));
      const overlapGain = getOnAirReviewOverlapMixMultiplier(clip, chunkStart, safeDuration, clips);
      gainNode.gain.value = Math.max(0, Math.min(1.2, clipGain * overlapGain));
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(onAirReviewClipMixGainNode);
      try {
        source.start(clockStart + Math.max(0, chunkStart - playbackStart), sourceOffset, safeDuration);
      } catch (error) {
        continue;
      }
      onAirReviewScheduledClipNodes.push({ source, gainNode });
    }
  });
  return true;
}

function applyOnAirReviewPlaybackGain(immediate) {
  const media = getActiveOnAirReviewMediaElement();
  if (!media) {
    return;
  }
  const gainNode = onAirReviewAudioGraphUnavailable ? null : getOnAirReviewActiveGainNode();
  const targetDb = getOnAirReviewGainDbAt(onAirReviewEditedTime);
  const targetGain = onAirReviewMuted ? 0 : (canUseOnAirReviewClipPlayback() ? 1 : dbToGainMultiplier(targetDb));
  media.muted = false;
  media.volume = canUseOnAirReviewClipPlayback()
    ? 0
    : Math.max(0, Math.min(1, onAirReviewMuted ? 0 : Math.min(1, targetGain)));
  const context = onAirReviewAudioContext;
  if (gainNode && context) {
    const now = context.currentTime;
    try {
      gainNode.gain.cancelScheduledValues(now);
      if (immediate) {
        gainNode.gain.setValueAtTime(targetGain, now);
      } else {
        gainNode.gain.setTargetAtTime(targetGain, now, 0.025);
      }
    } catch (error) {
      gainNode.gain.value = targetGain;
    }
  }
}

function updateOnAirReviewPlayState() {
  if (!onAirReviewPlayBtn) {
    return;
  }
  const isPlaying = isOnAirReviewPlaying();
  onAirReviewPlayBtn.textContent = isPlaying ? "❚❚" : "▶";
  onAirReviewPlayBtn.setAttribute("aria-label", isPlaying ? "Pause review" : "Play review");
  onAirReviewPlayBtn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
}

function updateOnAirReviewMuteState() {
  if (!onAirReviewMuteBtn) {
    return;
  }
  onAirReviewMuteBtn.textContent = onAirReviewMuted ? "🔇" : "🔊";
  onAirReviewMuteBtn.setAttribute("aria-label", onAirReviewMuted ? "Unmute review" : "Mute review");
  onAirReviewMuteBtn.setAttribute("aria-pressed", onAirReviewMuted ? "true" : "false");
}

function updateOnAirReviewTime() {
  if (!onAirReviewTime) {
    return;
  }
  const duration = getOnAirReviewTimelineDuration();
  const current = Math.max(0, Math.min(duration, Number(onAirReviewEditedTime) || 0));
  onAirReviewTime.textContent = formatPreviewClock(current) + " / " + formatPreviewClock(duration);
  if (onAirReviewScrub && !onAirReviewScrubInFlight) {
    const max = duration > 0 ? 1000 : 0;
    const value = duration > 0 ? Math.round((current / duration) * 1000) : 0;
    onAirReviewScrub.max = String(max || 1000);
    onAirReviewScrub.value = String(Math.max(0, Math.min(1000, value)));
  }
  if (onAirReviewGainReadout) {
    onAirReviewGainReadout.textContent = formatOnAirReviewGainDb(getOnAirReviewSelectionAverageGainDb());
  }
  applyOnAirReviewPlaybackGain();
  queueOnAirReviewWaveRender();
}

function pauseOnAirReviewMedia() {
  stopOnAirReviewPlaybackLoop();
  stopOnAirReviewClipPlayback();
  [onAirReviewVideo, onAirReviewAudio].forEach((media) => {
    if (!media) {
      return;
    }
    try {
      media.pause();
    } catch (error) {
      // Ignore pause races.
    }
  });
}

function closeOnAirReviewPlayback() {
  pauseOnAirReviewMedia();
  setOnAirReviewModalOpen(false);
  updateOnAirReviewPlayState();
  updateOnAirReviewMuteState();
  updateOnAirReviewTime();
}

function openOnAirReviewPlayback(kind) {
  const isVideo = kind === "video";
  const target = isVideo ? onAirReviewVideo : onAirReviewAudio;
  const other = isVideo ? onAirReviewAudio : onAirReviewVideo;
  if (!target || !target.src) {
    return;
  }
  if (other) {
    try {
      other.pause();
    } catch (error) {
      // Ignore pause races.
    }
  }
  onAirActiveReviewMedia = target;
  ensureOnAirReviewAudioGraph();
  ensureOnAirReviewTimeline();
  seekOnAirReviewEditedTime(onAirReviewEditedTime || 0);
  setOnAirReviewModalOpen(true);
  if (onAirReviewWindowStatus) {
    onAirReviewWindowStatus.textContent =
      (isVideo ? "Video" : "Audio") +
      " review loaded. Click anywhere in the waveform strip to scrub through the show.";
  }
  updateOnAirReviewTime();
  updateOnAirReviewPlayState();
  updateOnAirReviewMuteState();
  applyOnAirReviewPlaybackGain(true);
  queueOnAirReviewWaveRender();
}

function clearOnAirLibraryPreviewObjectUrl() {
  if (onAirLibraryPreviewObjectUrl) {
    URL.revokeObjectURL(onAirLibraryPreviewObjectUrl);
    onAirLibraryPreviewObjectUrl = "";
  }
}

async function resolveSharedMediaPlaybackUrl(assetId, mimeType) {
  if (!assetId || !session || !session.token) {
    throw new Error("Shared track playback is unavailable right now.");
  }
  pushMusicDiagnostic("shared_download_request", "asset=" + String(assetId || "") + " | transport=backend-stream");
  try {
    const response = await fetch(
      REALTIME_BASE_URL + "/media/download?assetId=" + encodeURIComponent(String(assetId || "")),
      {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        headers: {
          Authorization: "Bearer " + session.token
        }
      }
    );
    if (!response.ok) {
      pushMusicDiagnostic("shared_download_fetch_failed", "asset=" + String(assetId || "") + " | status=" + response.status);
      throw new Error("Shared track download failed.");
    }
    const blob = await response.blob();
    const normalizedMimeType = String(mimeType || blob.type || "audio/mpeg").trim() || "audio/mpeg";
    pushMusicDiagnostic("shared_download_blob_ok", "asset=" + String(assetId || "") + " | type=" + normalizedMimeType + " | size=" + blob.size);
    return URL.createObjectURL(blob.type ? blob : new Blob([blob], { type: normalizedMimeType }));
  } catch (error) {
    pushMusicDiagnostic("shared_download_failed", "asset=" + String(assetId || "") + " | message=" + String((error && error.message) || "fetch failed"));
    throw error;
  }
}

async function ensureOnAirMixerReady() {
  if (!onAirMixerAudioContext) {
    onAirMixerAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    onAirMixerMusicBusGainNode = onAirMixerAudioContext.createGain();
    onAirMixerMasterGainNode = onAirMixerAudioContext.createGain();
    onAirMixerDestinationNode = onAirMixerAudioContext.createMediaStreamDestination();
    onAirMixerBusAnalyser = onAirMixerAudioContext.createAnalyser();
    onAirMixerBusAnalyser.fftSize = 1024;
    onAirMixerBusAnalyser.smoothingTimeConstant = 0.82;
    onAirMixerBusMeterData = new Uint8Array(onAirMixerBusAnalyser.fftSize);
    onAirMixerMusicBusGainNode.gain.value = 1;
    onAirMixerMasterGainNode.gain.value = 1;
    onAirMixerMusicBusGainNode.connect(onAirMixerMasterGainNode);
    onAirMixerMasterGainNode.connect(onAirMixerDestinationNode);
    onAirMixerMasterGainNode.connect(onAirMixerBusAnalyser);
    onAirMixerMasterGainNode.connect(onAirMixerAudioContext.destination);
    pushMusicDiagnostic("mixer_context_created", "state=" + String(onAirMixerAudioContext.state || "unknown"));
  }
  if (onAirMixerAudioContext.state === "suspended") {
    try {
      await onAirMixerAudioContext.resume();
      pushMusicDiagnostic("mixer_context_resumed", "state=" + String(onAirMixerAudioContext.state || "unknown"));
    } catch (error) {
      pushMusicDiagnostic("mixer_context_resume_failed", "message=" + String((error && error.message) || "resume failed"));
      throw error;
    }
  }
  startOnAirMixerBusMeter();
  try {
    await refreshOutgoingProgramAudioStream();
    pushMusicDiagnostic("mixer_program_audio_ready", "tracks=" + String((getOutgoingAudioStream()?.getAudioTracks?.().length) || 0));
  } catch (error) {
    pushMusicDiagnostic("mixer_program_audio_failed", "message=" + String((error && error.message) || "outgoing refresh failed"));
  }
  try {
    addLocalTracksToPeerConnection();
  } catch (error) {
    pushMusicDiagnostic("mixer_peer_sync_failed", "message=" + String((error && error.message) || "peer track sync failed"));
  }
  if (useTwilioVideoRoom()) {
    syncTwilioPublishedTracks().catch(() => {
      // Ignore Twilio sync races while mixer starts.
    });
  }
  return onAirMixerAudioContext;
}

function getOnAirMixerCurrentTime() {
  return onAirMixerAudioContext ? onAirMixerAudioContext.currentTime : 0;
}

async function fetchSharedMediaArrayBuffer(assetId) {
  if (!assetId || !session || !session.token) {
    throw new Error("Shared track playback is unavailable right now.");
  }
  const response = await fetch(
    REALTIME_BASE_URL + "/media/download?assetId=" + encodeURIComponent(String(assetId || "")),
    {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + session.token
      }
    }
  );
  if (!response.ok) {
    throw new Error("Shared track download failed.");
  }
  return await response.arrayBuffer();
}

async function decodeOnAirPlayableTrack(playableTrack) {
  if (!playableTrack || typeof playableTrack !== "object") {
    return null;
  }
  const context = await ensureOnAirMixerReady();
  const cacheKey = String(playableTrack.id || playableTrack.name || "").trim();
  if (cacheKey && onAirMusicBufferCache.has(cacheKey)) {
    return onAirMusicBufferCache.get(cacheKey);
  }
  let audioData = null;
  if (playableTrack.file && typeof playableTrack.file.arrayBuffer === "function") {
    audioData = await playableTrack.file.arrayBuffer();
  } else {
    audioData = await fetchSharedMediaArrayBuffer(playableTrack.id);
  }
  const decoded = await context.decodeAudioData(audioData.slice(0));
  if (cacheKey) {
    onAirMusicBufferCache.set(cacheKey, decoded);
  }
  return decoded;
}

function createOnAirCueEngineState(kind, playableTrack, slotLabel, buffer) {
  return {
    id: "cue_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
    kind,
    trackId: String((playableTrack && playableTrack.id) || ""),
    trackName: String((playableTrack && playableTrack.name) || "Live cue"),
    slotLabel: String(slotLabel || ""),
    buffer,
    sourceNode: null,
    gainNode: null,
    volumeMultiplier: 1,
    currentGain: 0,
    startedAt: 0,
    duration: Number(buffer && buffer.duration) || 0,
    state: "queued",
    fadeTimeoutId: 0,
    autoFadeInTimerId: 0,
    autoFadeOutTimerId: 0,
    stopping: false,
    cleanedUp: false
  };
}

function clearOnAirCueFadeTimer(cue) {
  if (!cue || !cue.fadeTimeoutId) {
    return;
  }
  clearTimeout(cue.fadeTimeoutId);
  cue.fadeTimeoutId = 0;
}

function cleanupOnAirEngineCue(cue, options) {
  if (!cue || cue.cleanedUp) {
    return;
  }
  const config = options && typeof options === "object" ? options : {};
  cue.cleanedUp = true;
  cue.state = "stopped";
  clearOnAirCueFadeTimer(cue);
  clearOnAirMusicAutoFadeTimers(createExplicitOnAirMusicCueTarget(cue));
  if (cue.sourceNode) {
    try {
      cue.sourceNode.onended = null;
      cue.sourceNode.disconnect();
    } catch (error) {
      // Ignore disconnect races.
    }
    cue.sourceNode = null;
  }
  if (cue.gainNode) {
    try {
      cue.gainNode.disconnect();
    } catch (error) {
      // Ignore disconnect races.
    }
    cue.gainNode = null;
  }
  if (cue.kind === "primary") {
    if (onAirMusicPrimaryCue && onAirMusicPrimaryCue.id === cue.id) {
      onAirMusicPrimaryCue = null;
    }
    onAirMusicCurrentTrackId = "";
    onAirMusicPrimaryVolume = 1;
    if (!config.keepPreparedCue) {
      onAirRecordingStartCue = null;
    }
  } else {
    onAirAuxMusicCues = onAirAuxMusicCues.filter((entry) => entry && entry.id !== cue.id);
  }
  if (isRecording) {
    refreshRecordingAudioSources().catch(() => {
      // Ignore recording source refresh failures while cue stops.
    });
    refreshRecordingWaveSources().catch(() => {
      // Ignore waveform refresh failures while cue stops.
    });
  }
  updateOnAirMusicCuesUI();
  queueOnAirAudioControlsRefresh();
}

async function startOnAirEngineCue(cue, options) {
  if (!cue || !cue.buffer) {
    throw new Error("Cue buffer is unavailable.");
  }
  const context = await ensureOnAirMixerReady();
  const sourceNode = context.createBufferSource();
  const gainNode = context.createGain();
  sourceNode.buffer = cue.buffer;
  gainNode.gain.value = 0;
  sourceNode.connect(gainNode);
  gainNode.connect(onAirMixerMusicBusGainNode);
  cue.sourceNode = sourceNode;
  cue.gainNode = gainNode;
  cue.cleanedUp = false;
  cue.stopping = false;
  cue.startedAt = performance.now();
  cue.duration = Number(cue.buffer.duration) || cue.duration || 0;
  cue.state = "playing";
  pushMusicDiagnostic(
    "cue_engine_start",
    "track=" +
      String(cue.trackId || "") +
      " | duration=" +
      String(Number(cue.duration || 0).toFixed(3)) +
      " | contextState=" +
      String(context && context.state || "unknown")
  );
  sourceNode.onended = () => {
    if (cue.stopping) {
      cleanupOnAirEngineCue(cue, { keepPreparedCue: cue.kind === "primary" });
      return;
    }
    const continueQueue = cue.kind === "primary" && Array.isArray(onAirMusicQueue) && onAirMusicQueue.length > 0 && isCurrentUserHost();
    cleanupOnAirEngineCue(cue);
    if (continueQueue) {
      playNextQueuedOnAirMusicCue().catch(() => {
        onAirMediaStatus.textContent = "The next queued music cue could not be started.";
      });
    }
  };
  const cueTarget = createExplicitOnAirMusicCueTarget(cue);
  const startMuted = options && options.startMuted;
  const initialVolume = startMuted ? 0 : getOnAirCueEffectiveVolume(cueTarget);
  setOnAirMusicPlaybackAndRecordingVolume(initialVolume, cueTarget);
  sourceNode.start(0);
  if (isRecording) {
    refreshRecordingAudioSources().catch(() => {
      // Ignore recording source refresh failures while cue starts.
    });
    refreshRecordingWaveSources().catch(() => {
      // Ignore waveform refresh failures while cue starts.
    });
  }
  scheduleOnAirCueAutoFades(cueTarget, () => {
    stopSingleOnAirMusicCue(cue).catch(() => {}).finally(() => {
      updateOnAirMusicCuesUI();
      queueOnAirAudioControlsRefresh();
    });
  });
  updateOnAirMusicCuesUI();
  queueOnAirAudioControlsRefresh();
  return cue;
}

function updateOnAirLibraryPreviewTime() {
  if (!onAirLibraryPreviewAudio || !onAirLibraryPreviewTime) {
    return;
  }
  const duration = Number.isFinite(onAirLibraryPreviewAudio.duration) ? onAirLibraryPreviewAudio.duration : 0;
  const current = Number.isFinite(onAirLibraryPreviewAudio.currentTime) ? onAirLibraryPreviewAudio.currentTime : 0;
  onAirLibraryPreviewTime.textContent = formatPreviewClock(current) + " / " + formatPreviewClock(duration);
}

function updateOnAirLibraryPreviewPlayState() {
  if (!onAirLibraryPreviewPlayBtn || !onAirLibraryPreviewAudio) {
    return;
  }
  const isPlaying = !onAirLibraryPreviewAudio.paused && !onAirLibraryPreviewAudio.ended;
  onAirLibraryPreviewPlayBtn.textContent = isPlaying ? "❚❚" : "▶";
  onAirLibraryPreviewPlayBtn.setAttribute("aria-label", isPlaying ? "Pause preview" : "Play preview");
  onAirLibraryPreviewPlayBtn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
}

function updateOnAirLibraryPreviewMuteState() {
  if (!onAirLibraryPreviewMuteBtn || !onAirLibraryPreviewAudio) {
    return;
  }
  const isMuted = !!onAirLibraryPreviewAudio.muted || Number(onAirLibraryPreviewAudio.volume || 0) <= 0.001;
  onAirLibraryPreviewMuteBtn.textContent = isMuted ? "🔇" : "🔊";
  onAirLibraryPreviewMuteBtn.setAttribute("aria-label", isMuted ? "Unmute preview" : "Mute preview");
  onAirLibraryPreviewMuteBtn.setAttribute("aria-pressed", isMuted ? "true" : "false");
}

function closeOnAirLibraryPreview() {
  if (onAirLibraryPreviewAudio) {
    try {
      onAirLibraryPreviewAudio.pause();
    } catch (error) {
      // Ignore pause issues.
    }
    onAirLibraryPreviewAudio.removeAttribute("src");
    onAirLibraryPreviewAudio.load();
  }
  onAirLibraryPreviewAssetId = "";
  clearOnAirLibraryPreviewObjectUrl();
  if (onAirLibraryPreview) {
    onAirLibraryPreview.classList.add("hidden");
  }
  if (onAirLibraryPreviewTime) {
    onAirLibraryPreviewTime.textContent = "00:00 / 00:00";
  }
  updateOnAirLibraryPreviewPlayState();
  updateOnAirLibraryPreviewMuteState();
}

async function startOnAirLibraryPreview(asset) {
  if (!asset || !onAirLibraryPreviewAudio) {
    return;
  }
  pushMusicDiagnostic("preview_request", "asset=" + String(asset.id || "") + " | title=" + String(asset.title || asset.name || "unknown"));
  const playableTrack = await resolveMusicTrackForPlayback(asset);
  if (!playableTrack) {
    pushMusicDiagnostic("preview_unavailable", "asset=" + String(asset.id || "") + " | local-only-missing");
    onAirMediaStatus.textContent = "This track only exists in another browser and must be uploaded again for shared playback.";
    return;
  }
  const assetId = String((playableTrack && playableTrack.id) || asset.id || "").trim();
  if (
    assetId &&
    assetId === onAirLibraryPreviewAssetId &&
    onAirLibraryPreview &&
    !onAirLibraryPreview.classList.contains("hidden")
  ) {
    if (onAirLibraryPreviewAudio.paused) {
      await onAirLibraryPreviewAudio.play().catch(() => {});
    } else {
      onAirLibraryPreviewAudio.pause();
    }
    updateOnAirLibraryPreviewPlayState();
    return;
  }
  let previewUrl = "";
  clearOnAirLibraryPreviewObjectUrl();
  if (playableTrack && playableTrack.file) {
    onAirLibraryPreviewObjectUrl = URL.createObjectURL(playableTrack.file);
    previewUrl = onAirLibraryPreviewObjectUrl;
  } else if (playableTrack && typeof playableTrack.objectUrl === "string" && playableTrack.objectUrl) {
    previewUrl = playableTrack.objectUrl;
  } else if (playableTrack && typeof playableTrack.dataUrl === "string" && playableTrack.dataUrl) {
    previewUrl = playableTrack.dataUrl;
  } else if (assetId) {
    try {
      previewUrl = await resolveSharedMediaPlaybackUrl(assetId, (playableTrack && playableTrack.mimeType) || asset.mimeType || "audio/mpeg");
      if (String(previewUrl).startsWith("blob:")) {
        onAirLibraryPreviewObjectUrl = previewUrl;
      }
    } catch (error) {
      onAirMediaStatus.textContent = error && error.message ? error.message : "Unable to preview this track right now.";
      return;
    }
  }
  if (!previewUrl) {
    pushMusicDiagnostic("preview_url_missing", "asset=" + assetId);
    onAirMediaStatus.textContent = "Unable to preview this track right now.";
    return;
  }
  onAirLibraryPreviewAssetId = assetId;
  if (onAirLibraryPreview) {
    onAirLibraryPreview.classList.remove("hidden");
  }
  onAirLibraryPreviewAudio.src = previewUrl;
  onAirLibraryPreviewAudio.currentTime = 0;
  onAirLibraryPreviewAudio.load();
  pushMusicDiagnostic("preview_source_ready", "asset=" + assetId + " | urlType=" + (String(previewUrl).startsWith("blob:") ? "blob" : "direct"));
  updateOnAirLibraryPreviewTime();
  updateOnAirLibraryPreviewPlayState();
  updateOnAirLibraryPreviewMuteState();
  await onAirLibraryPreviewAudio.play().then(() => {
    pushMusicDiagnostic("preview_play_ok", "asset=" + assetId);
  }).catch((error) => {
    pushMusicDiagnostic("preview_play_failed", "asset=" + assetId + " | message=" + String((error && error.message) || "play blocked"));
  });
  updateOnAirLibraryPreviewPlayState();
}

function renderOnAirLibraryList() {
  if (!onAirLibraryList) {
    return;
  }
  const assets =
    onAirLibraryView === "music"
      ? onAirMusicLibrary.slice()
      : Array.isArray(onAirLibraryAssets[onAirLibraryView])
        ? onAirLibraryAssets[onAirLibraryView]
        : [];
  onAirLibraryList.innerHTML = "";
  if (onAirLibraryNote) {
    onAirLibraryNote.textContent = assets.length
      ? getLibraryDisplayLabel(onAirLibraryView) + " Library"
      : "No assets in " + getLibraryDisplayLabel(onAirLibraryView) + " yet.";
  }
  if (!assets.length) {
    const empty = document.createElement("p");
    empty.className = "camera-status onair-library-empty";
    empty.textContent = "Nothing is stored in this library yet.";
    onAirLibraryList.appendChild(empty);
    return;
  }
  assets.forEach((asset) => {
    const row = document.createElement("div");
    row.className = "onair-library-row";
    const meta = document.createElement("div");
    meta.className = "onair-library-meta";
    const title = document.createElement("p");
    title.className = "onair-library-title";
    title.textContent = String(asset.title || asset.name || asset.originalFilename || "Untitled Asset");
    const detail = document.createElement("p");
    detail.className = "onair-library-detail";
    const pieces = [
      asset && asset.source === "browser-local" ? "This Browser" : formatLibraryAssetStatus(asset.status),
      formatLibraryAssetSize(asset.byteSize || asset.size)
    ].filter(Boolean);
    detail.textContent = pieces.join(" • ");
    meta.appendChild(title);
    meta.appendChild(detail);
    row.appendChild(meta);
    if (onAirLibraryView === "music") {
      const actions = document.createElement("div");
      actions.className = "onair-library-actions";
      const previewAction = document.createElement("button");
      previewAction.type = "button";
      previewAction.className = "btn sso onair-library-action";
      previewAction.textContent = "Preview";
      previewAction.addEventListener("click", async () => {
        await startOnAirLibraryPreview(asset);
      });
      actions.appendChild(previewAction);
      const useAction = document.createElement("button");
      useAction.type = "button";
      useAction.className = "btn sso onair-library-action";
      useAction.textContent = "Use Track";
      useAction.addEventListener("click", async () => {
        const playableTrack = await resolveMusicTrackForPlayback(asset);
        const selectedTrackId = String((playableTrack && playableTrack.id) || asset.id || "").trim();
        if (onAirMusicTrackSelect) {
          onAirMusicTrackSelect.value = selectedTrackId;
        }
        updateOnAirMusicCuesUI();
        onAirMediaStatus.textContent =
          "Selected " +
          String(asset.title || asset.name || "track") +
          (asset && asset.source === "browser-local" ? " from this browser." : " from the shared Music Library.");
      });
      actions.appendChild(useAction);
      const deleteAction = document.createElement("button");
      deleteAction.type = "button";
      deleteAction.className = "btn sso onair-library-action";
      deleteAction.textContent = "Delete";
      deleteAction.addEventListener("click", async () => {
        if (!isCurrentUserHost()) {
          setHostStatus("Only the active host can delete music tracks.", true);
          return;
        }
        if (asset && asset.source === "browser-local") {
          try {
            await deleteMusicLibraryTrack(asset.id);
          } catch (error) {
            onAirMediaStatus.textContent = error && error.message ? error.message : "Unable to delete this local track right now.";
            return;
          }
        } else {
          if (!window.TBRAuth || typeof window.TBRAuth.deleteLibraryAsset !== "function") {
            onAirMediaStatus.textContent = "Delete is unavailable right now.";
            return;
          }
          const deleted = await window.TBRAuth.deleteLibraryAsset(asset.id);
          if (!deleted || !deleted.ok) {
            onAirMediaStatus.textContent = (deleted && deleted.error) || "Unable to delete this track right now.";
            return;
          }
        }
        await refreshOnAirMusicLibrary();
        await setOnAirLibraryView("music", true);
        if (onAirMusicTrackSelect && onAirMusicTrackSelect.value === asset.id) {
          onAirMusicTrackSelect.value = "";
        }
        onAirMediaStatus.textContent =
          "Deleted " +
          String(asset.title || asset.name || "track") +
          (asset && asset.source === "browser-local" ? " from this browser." : " from the shared Music Library.");
      });
      actions.appendChild(deleteAction);
      row.appendChild(actions);
    } else {
      const action = document.createElement("button");
      action.type = "button";
      action.className = "btn sso onair-library-action";
      action.textContent = "Open Asset";
      action.addEventListener("click", async () => {
        if (!window.TBRAuth || typeof window.TBRAuth.requestMediaDownload !== "function") {
          return;
        }
        const ticket = await window.TBRAuth.requestMediaDownload(asset.id);
        if (!ticket || !ticket.ok || !ticket.downloadUrl) {
          onAirMediaStatus.textContent = "Unable to open this library asset right now.";
          return;
        }
        window.open(ticket.downloadUrl, "_blank", "noopener");
      });
      row.appendChild(action);
    }
    onAirLibraryList.appendChild(row);
  });
}

function updateOnAirLibraryTabsUI() {
  document.querySelectorAll("[data-library-view]").forEach((button) => {
    button.classList.toggle("active", String(button.dataset.libraryView || "") === onAirLibraryView);
  });
}

async function loadOnAirLibraryKind(libraryKind, forceRefresh) {
  const normalizedKind = libraryKind === "post-production" ? "post-production" : libraryKind === "episodes" ? "episodes" : "music";
  if (
    !forceRefresh &&
    Array.isArray(onAirLibraryAssets[normalizedKind]) &&
    onAirLibraryAssets[normalizedKind].length
  ) {
    return;
  }
  if (!window.TBRAuth || typeof window.TBRAuth.listLibraryAssets !== "function") {
    onAirLibraryAssets[normalizedKind] = [];
    renderOnAirLibraryList();
    return;
  }
  if (onAirLibraryNote) {
    onAirLibraryNote.textContent = "Loading " + getLibraryDisplayLabel(normalizedKind) + " Library...";
  }
  const response = await window.TBRAuth.listLibraryAssets(normalizedKind, 250);
  onAirLibraryAssets[normalizedKind] = response && response.ok && Array.isArray(response.assets) ? response.assets : [];
  renderOnAirLibraryList();
}

async function setOnAirLibraryView(nextView, forceRefresh) {
  onAirLibraryView = nextView === "post-production" ? "post-production" : nextView === "episodes" ? "episodes" : "music";
  updateOnAirLibraryTabsUI();
  await loadOnAirLibraryKind(onAirLibraryView, !!forceRefresh);
}

async function refreshOnAirMusicLibrary() {
  let localTracks = [];
  let sharedTracks = [];
  let unavailableSharedTracks = [];
  let localOk = false;
  let sharedOk = false;
  try {
    localTracks = await getAllMusicLibraryTracks();
    localOk = true;
  } catch (error) {
    localTracks = [];
  }
  if (window.TBRAuth && typeof window.TBRAuth.listLibraryAssets === "function") {
    try {
      const response = await window.TBRAuth.listLibraryAssets("music", 250);
      if (response && response.ok) {
        const filteredShared = await filterPlayableSharedMusicAssets(Array.isArray(response.assets) ? response.assets : []);
        sharedTracks = filteredShared.playable;
        unavailableSharedTracks = filteredShared.unavailable;
        sharedOk = true;
        onAirLibraryAssets.music = sharedTracks;
      }
    } catch (error) {
      sharedTracks = [];
    }
  }
  onAirMusicLibrary = mergeOnAirMusicLibraries(localTracks, sharedTracks);
  if (sharedOk) {
    onAirMusicCatalogStatus = "synced";
  } else if (localOk) {
    onAirMusicCatalogStatus = "ready";
  } else {
    onAirMusicCatalogStatus = "error";
  }
  populateOnAirMusicTrackSelect();
  if (onAirLibraryOpen && onAirLibraryView === "music") {
    renderOnAirLibraryList();
  }
  if (!sharedOk && !localOk && onAirMusicCuesNote) {
    onAirMusicCuesNote.textContent = "Music library is unavailable right now.";
  } else if (unavailableSharedTracks.length && onAirMusicCuesNote) {
    onAirMusicCuesNote.textContent = unavailableSharedTracks.length + " older browser-only track" + (unavailableSharedTracks.length === 1 ? " is" : "s are") + " unavailable on this device and hidden from the shared library.";
  }
  updateOnAirMusicCuesUI();
}

function clearOnAirMusicObjectUrl() {
  if (onAirMusicCurrentObjectUrl) {
    URL.revokeObjectURL(onAirMusicCurrentObjectUrl);
    onAirMusicCurrentObjectUrl = "";
  }
}

function createOnAirAuxMusicCue(trackId, slotLabel, trackName) {
  return {
    id: "cue_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
    trackId: String(trackId || ""),
    slotLabel: String(slotLabel || ""),
    trackName: String(trackName || "Live cue"),
    kind: "aux",
    objectUrl: "",
    sourceNode: null,
    gainNode: null,
    fadeTimeoutId: 0,
    currentGain: 0,
    startedAt: 0,
    duration: 0,
    state: "queued",
    stopping: false,
    cleanedUp: false,
    volumeMultiplier: 1
  };
}

function clearOnAirAuxMusicCueObjectUrl(cue) {
  if (cue && cue.objectUrl) {
    URL.revokeObjectURL(cue.objectUrl);
    cue.objectUrl = "";
  }
}

function disconnectOnAirAuxCueRecording(cue) {
  // Web Audio mixer cues are already routed through the shared music bus.
}

function scheduleOnAirCueAutoFades(cueTarget, stopAfterFadeOut) {
  if (!cueTarget || !cueTarget.cue) {
    return;
  }
  clearOnAirMusicAutoFadeTimers(cueTarget);
  if (onAirMusicAutoFadeInEnabled) {
    const fadeInDelay = getRecordingAutoFadeInStartMs();
    const fadeInDuration = getRecordingAutoFadeInDurationMs();
    cueTarget.setAutoFadeInTimerId(window.setTimeout(() => {
      cueTarget.setAutoFadeInTimerId(0);
      startOnAirMusicFade(getOnAirMusicEffectiveVolume(cueTarget), fadeInDuration, { target: cueTarget }).catch(() => {});
    }, fadeInDelay));
  }
  if (onAirMusicAutoFadeOutEnabled) {
    const fadeOutDelay = getRecordingAutoFadeOutStartMs();
    const fadeOutDuration = getRecordingAutoFadeOutDurationMs();
    cueTarget.setAutoFadeOutTimerId(window.setTimeout(() => {
      cueTarget.setAutoFadeOutTimerId(0);
      startOnAirMusicFade(0, fadeOutDuration, {
        target: cueTarget,
        after() {
          if (typeof stopAfterFadeOut === "function") {
            stopAfterFadeOut();
          }
        }
      }).catch(() => {});
    }, fadeOutDelay));
  }
}

function disconnectOnAirMusicRecordingStream() {
  onAirMusicRecordingSourceNode = null;
  onAirMusicRecordingGainNode = null;
  onAirMusicRecordingStream = null;
}

function connectOnAirMusicToRecordingMix(targetCue) {
  // Music is routed through the shared Web Audio music bus and the recording mixer
  // attaches that bus once when recording starts.
}

async function stopSingleOnAirMusicCue(cue) {
  if (!cue) {
    return;
  }
  clearOnAirMusicAutoFadeTimers(createExplicitOnAirMusicCueTarget(cue));
  clearOnAirCueFadeTimer(cue);
  cue.stopping = true;
  try {
    if (cue.sourceNode) {
      cue.sourceNode.stop(0);
    }
  } catch (error) {
    // Ignore stop races.
  }
  cleanupOnAirEngineCue(cue);
}

async function stopPrimaryOnAirMusicCue() {
  const primaryCue = onAirMusicPrimaryCue;
  clearOnAirMusicAutoFadeTimers(createPrimaryOnAirMusicCueTarget());
  if (primaryCue) {
    clearOnAirCueFadeTimer(primaryCue);
    primaryCue.stopping = true;
    try {
      if (primaryCue.sourceNode) {
        primaryCue.sourceNode.stop(0);
      }
    } catch (error) {
      // Ignore stop races.
    }
    cleanupOnAirEngineCue(primaryCue);
  }
  onAirRecordingStartCue = null;
}

async function stopOnAirMusicCue() {
  cancelOnAirMusicFade();
  const auxCues = onAirAuxMusicCues.slice();
  for (const cue of auxCues) {
    await stopSingleOnAirMusicCue(cue);
  }
  onAirAuxMusicCues = [];
  await stopPrimaryOnAirMusicCue();
  applyOnAirMusicOutputVolume(true);
  updateOnAirMusicCuesUI();
  queueOnAirAudioControlsRefresh();
}

async function playOnAirMusicCue(trackRecord, slotLabel, options) {
  if (!trackRecord) {
    return;
  }
  pushMusicDiagnostic("cue_request", "track=" + String(trackRecord.id || "") + " | slot=" + String(slotLabel || ""));
  const config = options && typeof options === "object" ? options : {};
  await ensureOnAirMixerReady();
  const playableTrack = await resolveMusicTrackForPlayback(trackRecord);
  pushMusicDiagnostic(
    "cue_resolved",
    "track=" +
      String(trackRecord.id || "") +
      " | playable=" +
      (playableTrack ? String(playableTrack.id || "") : "missing") +
      " | source=" +
      String((playableTrack && playableTrack.source) || "unknown")
  );
  if (!playableTrack) {
    pushMusicDiagnostic("cue_unavailable", "track=" + String(trackRecord.id || "") + " | local-only-missing");
    onAirMediaStatus.textContent = "This track only exists in another browser and must be uploaded again for shared playback.";
    updateOnAirMusicCuesUI();
    return;
  }
  const layeringAllowed = config.allowLayer !== false;
  const canUsePrimary = !onAirMusicPrimaryCue;
  const usePrimary = !layeringAllowed || canUsePrimary;
  const buffer = await decodeOnAirPlayableTrack(playableTrack);
  if (!buffer) {
    onAirMediaStatus.textContent = "Selected track could not be decoded for playback.";
    updateOnAirMusicCuesUI();
    return;
  }
  const cue = usePrimary
    ? createOnAirCueEngineState("primary", playableTrack, slotLabel, buffer)
    : createOnAirAuxMusicCue(
    String((playableTrack && playableTrack.id) || trackRecord.id || ""),
    slotLabel,
    trackRecord.name
  );
  if (!usePrimary) {
    cue.buffer = buffer;
    cue.duration = Number(buffer.duration) || 0;
    cue.kind = "aux";
  }
  if (!usePrimary) {
    onAirAuxMusicCues.push(cue);
  }
  if (usePrimary) {
    onAirMusicCurrentTrackId = String((playableTrack && playableTrack.id) || trackRecord.id || "");
    onAirMusicPrimaryCue = cue;
  }
  try {
    pushMusicDiagnostic(
      "cue_source_ready",
      "track=" +
        String((playableTrack && playableTrack.id) || trackRecord.id || "") +
        " | layered=" +
        (usePrimary ? "no" : "yes") +
        " | source=web-audio"
    );
  } catch (error) {
    pushMusicDiagnostic(
      "cue_prepare_failed",
      "track=" +
        String((playableTrack && playableTrack.id) || trackRecord.id || "") +
        " | message=" +
        String((error && error.message) || "prepare failed")
    );
    throw error;
  }
    try {
      await startOnAirEngineCue(cue, { startMuted: onAirMusicAutoFadeInEnabled });
      pushMusicDiagnostic("cue_play_ok", "track=" + String((playableTrack && playableTrack.id) || trackRecord.id || "") + " | layered=" + (usePrimary ? "no" : "yes"));
    if (onAirMusicAutoFadeInEnabled) {
      const fadeInDelay = Math.max(0, getRecordingAutoFadeInStartMs());
      const fadeInDuration = Math.max(0, getRecordingAutoFadeInDurationMs());
      const statusLead = (slotLabel ? slotLabel + ": " : "") + trackRecord.name;
      if (fadeInDelay > 0) {
        onAirMediaStatus.textContent = statusLead + " is armed and muted. Fade in starts in " + Math.round(fadeInDelay / 1000) + "s.";
      } else {
        onAirMediaStatus.textContent = statusLead + " is fading in over " + Math.round(fadeInDuration / 1000) + "s.";
      }
    } else {
      onAirMediaStatus.textContent = (slotLabel ? slotLabel + ": " : "") + trackRecord.name + " is playing live.";
    }
  } catch (error) {
    cleanupOnAirEngineCue(cue);
    pushMusicDiagnostic("cue_play_failed", "track=" + String((playableTrack && playableTrack.id) || trackRecord.id || "") + " | message=" + String((error && error.message) || "play blocked"));
    onAirMediaStatus.textContent =
      error && error.message === "Cue playback timed out before audio started."
        ? "Music cue did not start. DFS reset the player, but this cue needs another run."
        : "Music cue playback was blocked by the browser. Try again after clicking the page.";
  }
  updateOnAirMusicCuesUI();
  queueOnAirAudioControlsRefresh();
}

async function playNextQueuedOnAirMusicCue() {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can play queued cues.", true);
    return;
  }
  let nextItem = onAirMusicQueue.shift() || null;
  if (!nextItem) {
    onAirMediaStatus.textContent = "Nothing is queued. Use Queue Next for timed playback.";
    updateOnAirMusicCuesUI();
    return;
  }
  const trackRecord = await getMusicLibraryTrackById(nextItem.track).catch(() => null);
  if (!trackRecord) {
    onAirMediaStatus.textContent = "Selected track could not be loaded from the music library.";
    updateOnAirMusicCuesUI();
    return;
  }
  await playOnAirMusicCue(trackRecord, nextItem.slotLabel);
  updateOnAirMusicCuesUI();
}

function getSelectedOnAirMusicSlot() {
  if (!onAirMusicSlotSelect) {
    return "intro";
  }
  return String(onAirMusicSlotSelect.value || "intro").trim() || "intro";
}

function getSelectedOnAirMusicSlotLabel() {
  if (!onAirMusicSlotSelect) {
    return "Intro";
  }
  const option = onAirMusicSlotSelect.selectedOptions && onAirMusicSlotSelect.selectedOptions[0];
  return option ? option.textContent.trim() : "Intro";
}

function getSelectedOnAirMusicTrackLabel() {
  if (!onAirMusicTrackSelect) {
    return "";
  }
  const option = onAirMusicTrackSelect.selectedOptions && onAirMusicTrackSelect.selectedOptions[0];
  return option ? option.textContent.trim() : "";
}

async function attemptOnAirCuePlayback(player) {
  if (!player) {
    throw new Error("Cue player is unavailable.");
  }
  let settled = false;
  const playbackPromise = Promise.resolve()
    .then(() => player.play())
    .then((result) => {
      settled = true;
      return result;
    });
  const timeoutPromise = new Promise((_, reject) => {
    window.setTimeout(() => {
      if (!settled) {
        reject(new Error("Cue playback timed out before audio started."));
      }
    }, 2000);
  });
  return await Promise.race([playbackPromise, timeoutPromise]);
}

function peekNextOnAirMusicCue() {
  if (Array.isArray(onAirMusicQueue) && onAirMusicQueue.length > 0) {
    return { ...onAirMusicQueue[0], fromQueue: true };
  }
  return null;
}

async function startQueuedOnAirMusicForRecording() {
  if (!isCurrentUserHost()) {
    return false;
  }
  if (onAirRecordingStartCue) {
    const preparedCue = onAirRecordingStartCue;
    onAirRecordingStartCue = null;
    if (preparedCue.fromQueue && Array.isArray(onAirMusicQueue) && onAirMusicQueue.length && onAirMusicQueue[0].id === preparedCue.id) {
      onAirMusicQueue.shift();
    }
    try {
      onAirMusicCurrentTrackId = String(preparedCue.trackId || preparedCue.trackRecord.id || "");
      onAirMusicPrimaryCue = createOnAirCueEngineState(
        "primary",
        preparedCue.playableTrack || preparedCue.trackRecord,
        preparedCue.slotLabel,
        preparedCue.buffer
      );
      await startOnAirEngineCue(onAirMusicPrimaryCue, { startMuted: onAirMusicAutoFadeInEnabled });
      pushMusicDiagnostic("recording_start_cue_ok", "track=" + String(preparedCue.trackId || preparedCue.trackRecord.id || ""));
      onAirMediaStatus.textContent = (preparedCue.slotLabel ? preparedCue.slotLabel + ": " : "") + preparedCue.trackRecord.name + " is playing live.";
      updateOnAirMusicCuesUI();
      queueOnAirAudioControlsRefresh();
      return true;
    } catch (error) {
      pushMusicDiagnostic("recording_start_cue_failed", "track=" + String(preparedCue.trackId || preparedCue.trackRecord.id || "") + " | message=" + String((error && error.message) || "start failed"));
      onAirMediaStatus.textContent = "Recording started, but the queued music cue was blocked by the browser.";
      updateOnAirMusicCuesUI();
      queueOnAirAudioControlsRefresh();
      return false;
    }
  }
  const hasQueuedCue = Array.isArray(onAirMusicQueue) && onAirMusicQueue.length > 0;
  if (!hasQueuedCue) {
    const selectedTrackId = getSelectedOnAirMusicTrack();
    const selectedTrackLabel = getSelectedOnAirMusicTrackLabel();
    if (!selectedTrackId || !selectedTrackLabel) {
      pushMusicDiagnostic("recording_queue_play_skipped", "reason=no-queue-no-selection");
      return false;
    }
    try {
      const trackRecord = await getMusicLibraryTrackById(selectedTrackId).catch(() => null);
      if (!trackRecord) {
        pushMusicDiagnostic("recording_selected_play_failed", "track=" + String(selectedTrackId || "") + " | reason=track-missing");
        onAirMediaStatus.textContent = "Recording started, but the selected music track could not be loaded.";
        updateOnAirMusicCuesUI();
        return false;
      }
      await playOnAirMusicCue(trackRecord, getSelectedOnAirMusicSlotLabel(), { allowLayer: true });
      pushMusicDiagnostic("recording_selected_play_ok", "track=" + String(selectedTrackId || ""));
      return true;
    } catch (error) {
      pushMusicDiagnostic(
        "recording_selected_play_failed",
        "track=" + String(selectedTrackId || "") + " | message=" + String((error && error.message) || "selected start failed")
      );
      onAirMediaStatus.textContent = "Recording started, but the selected music track could not be started.";
      updateOnAirMusicCuesUI();
      return false;
    }
  }
  try {
    await playNextQueuedOnAirMusicCue();
    pushMusicDiagnostic("recording_queue_play_ok", "remaining=" + String(onAirMusicQueue.length));
    return true;
  } catch (error) {
    pushMusicDiagnostic("recording_queue_play_failed", "message=" + String((error && error.message) || "queue start failed"));
    onAirMediaStatus.textContent = "Recording started, but the queued music cue could not be started.";
    updateOnAirMusicCuesUI();
    return false;
  }
}

async function primeOnAirMusicCueForRecordingStart() {
  if (!isCurrentUserHost() || onAirRecordingStartCue) {
    return false;
  }
  await ensureOnAirMixerReady();
  const nextCue = peekNextOnAirMusicCue();
  if (!nextCue) {
    pushMusicDiagnostic("prime_skip", "reason=no-cue");
    return false;
  }
  pushMusicDiagnostic("prime_request", "track=" + String(nextCue.track || "") + " | slot=" + String(nextCue.slotLabel || ""));
  const trackRecord = await getMusicLibraryTrackById(nextCue.track).catch(() => null);
  if (!trackRecord) {
    pushMusicDiagnostic("prime_failed", "track=" + String(nextCue.track || "") + " | reason=track-missing");
    return false;
  }
  const playableTrack = await resolveMusicTrackForPlayback(trackRecord).catch(() => null);
  if (!playableTrack) {
    pushMusicDiagnostic("prime_failed", "track=" + String(nextCue.track || "") + " | reason=playback-unavailable");
    return false;
  }
  let buffer = null;
  try {
    buffer = await decodeOnAirPlayableTrack(playableTrack);
  } catch (error) {
    buffer = null;
  }
  if (!buffer) {
    pushMusicDiagnostic("prime_failed", "track=" + String(nextCue.track || "") + " | reason=buffer-missing");
    return false;
  }
  cancelOnAirMusicFade();
  try {
    pushMusicDiagnostic("prime_play_ok", "track=" + String((playableTrack && playableTrack.id) || trackRecord.id || ""));
    onAirRecordingStartCue = {
      ...nextCue,
      trackRecord,
      playableTrack,
      trackId: String((playableTrack && playableTrack.id) || trackRecord.id || ""),
      buffer
    };
    return true;
  } catch (error) {
    pushMusicDiagnostic("prime_play_failed", "track=" + String((playableTrack && playableTrack.id) || trackRecord.id || "") + " | message=" + String((error && error.message) || "play blocked"));
    return false;
  }
}

function updateOnAirMusicCuesUI() {
  const isHost = isCurrentUserHost();
  const hasTrackLibrary = onAirMusicLibrary.length > 0;
  const hasSelectedTrack = !!getSelectedOnAirMusicTrack();
  const activeCueCount = getActiveOnAirMusicCueTargets().length;
  const isPlaying = activeCueCount > 0;
  if (onAirMusicCuesBadge) {
    onAirMusicCuesBadge.textContent = hasTrackLibrary
      ? onAirMusicLibrary.length + " track" + (onAirMusicLibrary.length === 1 ? "" : "s")
      : "No tracks uploaded";
  }
  if (onAirMusicUploadBtn) {
    onAirMusicUploadBtn.disabled = !isHost;
  }
  if (onAirMusicQueueBtn) {
    onAirMusicQueueBtn.disabled = !isHost || !hasTrackLibrary || !hasSelectedTrack;
  }
  if (onAirMusicPlayBtn) {
    onAirMusicPlayBtn.disabled = !isHost || (!onAirMusicQueue.length && !hasSelectedTrack);
  }
  if (onAirMusicStopBtn) {
    onAirMusicStopBtn.disabled = !isHost || !isPlaying;
  }
  if (onAirMusicClearBtn) {
    onAirMusicClearBtn.disabled = !isHost || onAirMusicQueue.length === 0;
  }
  if (onAirMusicNext) {
    if (activeCueCount > 1) {
      onAirMusicNext.textContent = "Now Playing: " + activeCueCount + " active cues";
    } else if (isPlaying) {
      const activeTrack = onAirMusicLibrary.find((track) => track.id === onAirMusicCurrentTrackId);
      onAirMusicNext.textContent = "Now Playing: " + (activeTrack ? activeTrack.name : "Live cue");
    } else if (onAirMusicQueue.length > 0) {
      const nextItem = onAirMusicQueue[0];
      onAirMusicNext.textContent = "Up Next: " + nextItem.slotLabel + " - " + nextItem.trackLabel;
    } else {
      onAirMusicNext.textContent = "Up Next: nothing queued.";
    }
  }
  if (onAirMusicCuesNote) {
    if (!isHost) {
      onAirMusicCuesNote.textContent = "Only the active host can upload, queue, and play music cues.";
    } else if (!hasTrackLibrary) {
      onAirMusicCuesNote.textContent =
        onAirMusicCatalogStatus === "synced"
          ? "Upload non-copyright tracks here for intros, beds, and outros. Shared metadata sync is active."
          : "Upload non-copyright tracks here for intros, beds, and outros.";
    } else {
      onAirMusicCuesNote.textContent =
        onAirMusicCatalogStatus === "synced"
          ? "Queue Next schedules timed playback. Play Now starts the selected cue immediately. Both route into the live mix and shared library."
          : "Queue Next schedules timed playback. Play Now starts the selected cue immediately.";
    }
  }
  queueOnAirAudioControlsRefresh();
}

async function syncTrackMetadataToSharedLibrary(trackRecord) {
  if (!window.TBRAuth || typeof window.TBRAuth.createLibraryAssetMeta !== "function" || !trackRecord) {
    return;
  }
  const response = await window.TBRAuth.createLibraryAssetMeta({
    libraryKind: "music",
    assetRole: "cue-track",
    title: String(trackRecord.name || "Untitled Track"),
    originalFilename: String(trackRecord.name || ""),
    mimeType: String(trackRecord.mimeType || "audio/mpeg"),
    byteSize: Math.max(0, Number(trackRecord.size || 0) || 0),
    status: "uploaded",
    storageProvider: "browser-local",
    metadata: {
      localTrackId: String(trackRecord.id || ""),
      source: "browser-local",
      hostScoped: true
    }
  });
  if (response && response.ok) {
    onAirMusicCatalogStatus = "synced";
  }
}

function setRecordingState(nextRecording, nextReady, sourceUser, startedAtMs) {
  const wasRecording = isRecording;
  isRecording = !!nextRecording;
  recordingReady = !!nextReady;
  updateMediaActionsUI();
  if (onAirRecordPill) {
    onAirRecordPill.classList.toggle("active", isRecording);
    onAirRecordPill.classList.toggle("idle", !isRecording);
  }
  if (onAirRecordDot) {
    onAirRecordDot.classList.toggle("active", isRecording);
  }

  if (isRecording) {
    setRecordingWorkflowState("recording");
    const startedAt = Number(startedAtMs || 0);
    if (startedAt > 0) {
      recordingStartedAt = startedAt;
    } else if (!recordingStartedAt) {
      recordingStartedAt = Date.now();
    }
    if (isOnAir) {
      if (onAirRecordStrip) {
        onAirRecordStrip.classList.remove("hidden");
        onAirRecordStrip.classList.add("active");
      }
      if (!wasRecording || startedAt > 0 || !recordingTimerId) {
        startRecordingTimer(recordingStartedAt);
      }
      if (!wasRecording || !recordingWaveFrameId) {
        try {
          startRecordingWave();
        } catch (error) {
          // Keep status/timer functional if waveform init fails.
        }
      }
    }
  } else {
    clearRecordingAutomationTimers();
    recordingStartInProgress = false;
    setOnAirCountdownPopoutOpen(false);
    if (onAirRecordStrip) {
      onAirRecordStrip.classList.add("hidden");
      onAirRecordStrip.classList.remove("active");
    }
    if (onAirRecordTimer) {
      onAirRecordTimer.textContent = "00:00";
    }
    recordingStartedAt = 0;
    stopRecordingTimer();
    if (wasRecording) {
      stopRecordingWave();
    }
    if (!recordingReady) {
      setRecordingWorkflowState("ready");
    }
  }

  if (isRecording) {
    onAirMediaStatus.textContent = "Recording in progress" + (sourceUser ? " (host: " + sourceUser + ")." : ".");
  } else if (recordingReady) {
    if (RECORDING_DEMO_MODE) {
      onAirMediaStatus.textContent = "Demo recording complete. Playback/download are preview-only in this phase.";
    } else {
      onAirMediaStatus.textContent = hasLocalRecordingAsset()
        ? "Recording complete. Playback and download are now available."
        : "Recording complete. Host can export local file in this phase.";
    }
  } else {
    onAirMediaStatus.textContent = "Ready to record.";
  }
  updatePreflightSummary();
  syncReviewPanelUI();
}

async function runPreflightMicCheck() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    preflightMicAssessment = {
      state: "blocked",
      summary: "Mic optimization is not supported in this browser."
    };
    updatePreflightSummary();
    return;
  }
  if (preflightMicCheckInProgress) {
    return;
  }

  preflightMicCheckInProgress = true;
  preflightMicAssessment = {
    state: "neutral",
    summary: "Listening... speak normally for 6 seconds."
  };
  if (preflightMicCheckBtn) {
    preflightMicCheckBtn.disabled = true;
    preflightMicCheckBtn.textContent = "Listening...";
  }
  updatePreflightSummary();

  let tempStream = null;
  let audioContext = null;
  let shouldRestartLiveMic = false;
  try {
    const selectedId = micDeviceSelect ? String(micDeviceSelect.value || "").trim() : "";
    const constraints = {
      audio: {
        deviceId: selectedId ? { exact: selectedId } : undefined,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      },
      video: false
    };
    const analysisStream = micStream || (tempStream = await navigator.mediaDevices.getUserMedia(constraints));
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(analysisStream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.82;
    source.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const startedAt = performance.now();
    const frames = [];
    const noiseFrames = [];

    while (performance.now() - startedAt < 6000) {
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      let peak = 0;
      for (let index = 0; index < data.length; index += 1) {
        const sample = (data[index] - 128) / 128;
        sum += sample * sample;
        peak = Math.max(peak, Math.abs(sample));
      }
      const rms = Math.sqrt(sum / data.length);
      frames.push({ rms, peak });
      if (performance.now() - startedAt < 1500) {
        noiseFrames.push(rms);
      }
      await new Promise((resolve) => window.setTimeout(resolve, 60));
    }

    const avgRms = frames.reduce((total, frame) => total + frame.rms, 0) / Math.max(1, frames.length);
    const maxPeak = frames.reduce((max, frame) => Math.max(max, frame.peak), 0);
    const noiseFloor = noiseFrames.reduce((total, value) => total + value, 0) / Math.max(1, noiseFrames.length);

    if (avgRms < 0.008) {
      preflightMicAssessment = {
        state: "blocked",
        summary: "No usable mic signal was detected. Check the selected microphone and browser permission."
      };
      return;
    }

    let gain = 100;
    const notes = [];
    if (avgRms < 0.02) {
      gain = 138;
      notes.push("raised mic gain to 138%");
    } else if (avgRms < 0.03) {
      gain = 125;
      notes.push("raised mic gain to 125%");
    } else if (maxPeak > 0.92) {
      gain = 76;
      notes.push("reduced mic gain to 76% to protect against clipping");
    } else if (maxPeak > 0.85) {
      gain = 85;
      notes.push("reduced mic gain to 85% to keep peaks under control");
    }

    const noiseProfile = noiseFloor > 0.03 ? "high" : noiseFloor > 0.018 ? "medium" : "low";
    if (noiseProfile === "high") {
      notes.push("set noise control to High");
    } else if (noiseProfile === "medium") {
      notes.push("set noise control to Balanced");
    } else {
      notes.push("set noise control to Low");
    }
    const profile = NOISE_PROFILE_TO_VALUES[noiseProfile] || NOISE_PROFILE_TO_VALUES.medium;
    const summaryParts = [
      "gain " + gain + "%",
      "noise " + formatMicNoiseProfileLabel(noiseProfile),
      "limiter on",
      "loudness Podcast Standard"
    ];
    studioSettings = window.TBRAuth.saveStudioSettings({
      micPreset: "custom",
      micInputGainPercent: gain,
      micLimiterEnabled: true,
      micAutoGainControl: true,
      micNoiseSuppression: profile.micNoiseSuppression,
      micNoiseGateThresholdDb: profile.micNoiseGateThresholdDb,
      micLoudnessTargetPreset: "podcast-standard",
      micEchoCancellation: true
    });
    applyMicSettingsFromStudioSettings();
    shouldRestartLiveMic = !!micStream;

    if (notes.length || !headphonesToggle.checked) {
      preflightMicAssessment = {
        state: notes.length ? "adjusted" : "warning",
        summary:
          notes.length
            ? "Mic optimized for podcast use: " + notes.join(", ") + ". Current profile: " + summaryParts.join(" | ") + "."
            : "Mic is clear, but headphones are still recommended to avoid echo. Current profile: " + summaryParts.join(" | ") + "."
      };
    } else {
      preflightMicAssessment = {
        state: "ready",
        summary: "Mic sounds clear and is ready for studio use. Current profile: " + summaryParts.join(" | ") + "."
      };
    }
  } catch (error) {
    preflightMicAssessment = {
      state: "blocked",
      summary: "Mic check failed. Allow microphone access and try again."
    };
  } finally {
    if (tempStream) {
      tempStream.getTracks().forEach((track) => track.stop());
    }
    if (audioContext) {
      audioContext.close().catch(() => {
        // Ignore close races.
      });
    }
    if (shouldRestartLiveMic) {
      startMic().catch(() => {
        // Ignore restart races after applying new defaults.
      });
    }
    preflightMicCheckInProgress = false;
    if (preflightMicCheckBtn) {
      preflightMicCheckBtn.disabled = false;
      preflightMicCheckBtn.textContent = "Run Mic Check";
    }
    updatePreflightSummary();
  }
}

async function stopHostRecordingWithReason(reasonText) {
  await stopOnAirMusicCue().catch(() => {
    // Ignore cue-stop failures during recording finalize.
  });
  let ready = false;
  if (RECORDING_DEMO_MODE) {
    abortLocalRecordingCapture();
    ready = true;
  } else {
    const blob = await stopLocalRecordingCaptureAndFinalize().catch(() => null);
    ready = !!((blob && blob.size > 0) || (recordingAudioBlob && recordingAudioBlob.size > 0));
  }
  clearRecordingAutomationTimers();
  recordingStartInProgress = false;
  setOnAirCountdownPopoutOpen(false);
  setRecordingState(false, ready, session.username);
  if (ready) {
    beginRecordingProcessingPhase();
  } else {
    setRecordingWorkflowState("ready");
  }
  sendHostSignalToAll("host-record-state", { recording: false, downloadReady: ready, startedAt: 0 }).catch(() => {
    // Ignore sync errors.
  });
  if (reasonText) {
    sendChat(reasonText).catch(() => {
      // Ignore chat post errors.
    });
  }
}

function setupRecordingAutomation() {
  clearRecordingAutomationTimers();

  const adminMaxMinutes = Math.max(20, Number(adminSettings.recordingMaxMinutes || 180));
  const autoStopMinutes = (() => {
    const requested = getRecordingAutoStopMinutes();
    if (!requested) {
      return adminMaxMinutes;
    }
    return Math.min(requested, adminMaxMinutes);
  })();
  if (autoStopMinutes > 0) {
    recordingAutoStopTimerId = window.setTimeout(() => {
      if (!isRecording || !isCurrentUserHost()) {
        return;
      }
      onAirMediaStatus.textContent = "Auto-stop safety timer reached. Finalizing recording.";
      stopHostRecordingWithReason("Recording auto-stopped after " + autoStopMinutes + " minutes.").catch(() => {
        // Ignore stop races.
      });
    }, autoStopMinutes * 60 * 1000);
  }

  const autoSplitMinutes = getRecordingAutoSplitMinutes();
  if (RECORDING_DEMO_MODE) {
    return;
  }
  if (autoSplitMinutes > 0) {
    recordingAutoSplitTimerId = window.setInterval(() => {
      if (!isRecording || !isCurrentUserHost() || recordingSplitInProgress) {
        return;
      }
      recordingSplitInProgress = true;
      onAirMediaStatus.textContent = "Auto-splitting recording segment...";
      stopLocalRecordingCaptureAndFinalize()
        .then(async (blob) => {
          if (!(blob && blob.size > 0)) {
            throw new Error("Segment finalize failed.");
          }
          await startLocalRecordingCapture(false);
          onAirMediaStatus.textContent = "Auto-split complete. Recording continues.";
          sendChat("Recording auto-split at " + autoSplitMinutes + " minute interval.").catch(() => {
            // Ignore chat post errors.
          });
        })
        .catch(() => {
          onAirMediaStatus.textContent = "Auto-split failed. Recording stopped for safety.";
          stopHostRecordingWithReason("Recording stopped because auto-split failed.").catch(() => {
            // Ignore stop races.
          });
        })
        .finally(() => {
          recordingSplitInProgress = false;
        });
    }, autoSplitMinutes * 60 * 1000);
  }
}

async function startHostRecordingFlow() {
  if (!canCurrentUserControlRecording()) {
    recordingStartInProgress = false;
    setOnAirCountdownPopoutOpen(false);
    onAirMediaStatus.textContent = "Recording is restricted to admins right now.";
    return;
  }
  recordingStartInProgress = true;
  setRecordingWorkflowState("countdown");
  clearRecordingProcessingTimer();
  clearRecordingAutomationTimers();
  if (!RECORDING_DEMO_MODE) {
    clearLocalRecordingAsset();
  }
  const countdown = getRecordingCountdownSeconds();
  await primeOnAirMusicCueForRecordingStart().catch(() => false);
  onAirMediaStatus.textContent = "Recording starts in " + countdown + " seconds...";
  sendChat("Recording starts in " + countdown + " seconds.").catch(() => {
    // Ignore chat post errors.
  });

  await runRecordingCountdown(countdown);

  if (!isCurrentUserHost()) {
    recordingStartInProgress = false;
    setOnAirCountdownPopoutOpen(false);
    setRecordingWorkflowState("ready");
    onAirMediaStatus.textContent = "Recording start canceled: host changed.";
    return;
  }

  const startedAt = Date.now();
  try {
    if (!RECORDING_DEMO_MODE) {
      await startLocalRecordingCapture(false);
    }
  } catch (error) {
    recordingStartInProgress = false;
    setOnAirCountdownPopoutOpen(false);
    setRecordingWorkflowState("ready");
    onAirMediaStatus.textContent = error && error.message ? error.message : "Recording could not start.";
    throw error;
  }
  setRecordingState(true, false, session.username, startedAt);
  setupRecordingAutomation();
  await startQueuedOnAirMusicForRecording();
  recordingStartInProgress = false;
  sendHostSignalToAll("host-record-state", { recording: true, downloadReady: false, startedAt }).catch(() => {
    // Ignore sync errors.
  });
  sendChat("Recording started by " + (sessionIdentity.displayName || session.username) + ".").catch(() => {
    // Ignore chat post errors.
  });
}

function setHostOwner(username) {
  const normalized = String(username || "").trim().toLowerCase();
  currentHostUsername = normalized;
  if (!normalized) {
    hostOwnerStatus.textContent = "Host: Unassigned";
  } else if (normalized === session.username) {
    hostOwnerStatus.textContent = "Host: " + getDisplayNameForUsername(normalized) + " (You)";
  } else {
    hostOwnerStatus.textContent = "Host: " + getDisplayNameForUsername(normalized);
  }
  updateHostControlsAvailability();
  refreshMessagePopovers();
}

function renderHostTransferOptions(rows) {
  const participants = Array.isArray(rows) ? rows : [];
  const prev = hostTransferSelect.value;
  hostTransferSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select transfer target";
  hostTransferSelect.appendChild(defaultOption);

  participants
    .filter((row) => row.username && row.username !== session.username)
    .forEach((row) => {
      const option = document.createElement("option");
      option.value = row.username;
      option.textContent = getDisplayNameForRow(row);
      hostTransferSelect.appendChild(option);
    });

  if (prev && participants.some((row) => row.username === prev && row.username !== session.username)) {
    hostTransferSelect.value = prev;
  } else {
    hostTransferSelect.value = "";
  }
}

function renderHostSpotlightOptions(rows) {
  const participants = Array.isArray(rows) ? rows : [];
  const prev = hostSpotlightSelect.value;
  hostSpotlightSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select participant";
  hostSpotlightSelect.appendChild(defaultOption);

  participants.forEach((row) => {
    const option = document.createElement("option");
    option.value = row.username;
    option.textContent = row.username === session.username ? getDisplayNameForRow(row) + " (You)" : getDisplayNameForRow(row);
    hostSpotlightSelect.appendChild(option);
  });

  if (spotlightUsername && participants.some((row) => row.username === spotlightUsername)) {
    hostSpotlightSelect.value = spotlightUsername;
  } else if (prev && participants.some((row) => row.username === prev)) {
    hostSpotlightSelect.value = prev;
  } else {
    hostSpotlightSelect.value = "";
  }
}

function applySpotlightUI() {
  localVideoTile.classList.toggle("spotlight", !!(spotlightUsername && spotlightUsername === session.username));
  onAirLocalVideoTile.classList.toggle("spotlight", !!(spotlightUsername && spotlightUsername === session.username));
  remoteVideoTile.classList.toggle(
    "spotlight",
    !!(spotlightUsername && activePeerUsername && spotlightUsername === activePeerUsername)
  );
  onAirRemoteVideoTile.classList.toggle(
    "spotlight",
    !!(spotlightUsername && activePeerUsername && spotlightUsername === activePeerUsername)
  );
  const items = Array.from(participantsList.querySelectorAll(".participant-item"));
  items.forEach((item) => {
    const username = item.dataset.username || "";
    item.classList.toggle("spotlight", !!(spotlightUsername && spotlightUsername === username));
  });
}

async function applySpotlight(username, sourceUser) {
  const normalized = String(username || "").trim().toLowerCase();
  spotlightUsername = normalized;
  applySpotlightUI();

  if (!normalized) {
    setHostStatus(
      "Spotlight cleared" + (sourceUser ? " by " + getDisplayNameForUsername(sourceUser) + "." : "."),
      false
    );
    return;
  }

  if (currentParticipants.includes(normalized)) {
    hostSpotlightSelect.value = normalized;
    setHostStatus(
      "Spotlight set to " +
        getDisplayNameForUsername(normalized) +
        (sourceUser ? " by " + getDisplayNameForUsername(sourceUser) + "." : "."),
      false
    );
  } else {
    setHostStatus("Spotlight user is not currently online.", true);
  }
}

async function sendHostSignalToAll(type, payload) {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can use host controls.", true);
    return false;
  }
  if (!realtimeEnabled) {
    setHostStatus("Realtime server is offline. Host controls unavailable.", true);
    if (onAirRosterStatus) {
      onAirRosterStatus.textContent = "On-Air now: realtime offline.";
    }
    return false;
  }
  const peers = currentParticipants.filter((name) => name && name !== session.username);
  if (!peers.length) {
    setHostStatus("No other participants are online.", true);
    return false;
  }
  await Promise.all(peers.map((peer) => sendSignal(peer, type, payload)));
  return true;
}

async function claimHost() {
  const data = await api("/host/claim", {
    method: "POST",
    body: JSON.stringify({ username: session.username })
  });
  setHostOwner(data.hostUsername || "");
  return data;
}

async function releaseHost() {
  const data = await api("/host/release", {
    method: "POST",
    body: JSON.stringify({ username: session.username })
  });
  setHostOwner(data.hostUsername || "");
  return data;
}

async function transferHost(toUsername) {
  const data = await api("/host/transfer", {
    method: "POST",
    body: JSON.stringify({ from: session.username, to: toUsername })
  });
  setHostOwner(data.hostUsername || "");
  return data;
}

function getDisplayNameForRow(row) {
  const username = String(row && row.username ? row.username : "").trim().toLowerCase();
  if (!username) {
    return "";
  }
  const explicit = String(row && row.displayName ? row.displayName : "").trim();
  if (explicit) {
    return explicit;
  }
  return participantDisplayNames.get(username) || username;
}

function getDisplayNameForUsername(username) {
  const raw = String(username || "").trim();
  const normalized = raw.toLowerCase();
  if (!normalized) {
    return "";
  }
  if (normalized === session.username) {
    return sessionIdentity.displayName || session.username;
  }
  return participantDisplayNames.get(normalized) || window.TBRAuth.getDisplayName(normalized) || raw || normalized;
}

function getEntryDisplayName(entry) {
  if (!entry || typeof entry !== "object") {
    return "";
  }
  const explicit = String(entry.displayName || "").trim();
  if (explicit) {
    return explicit;
  }
  return getDisplayNameForUsername(entry.username);
}

function normalizeParticipants(rows) {
  const now = Date.now();
  const map = new Map();
  const input = Array.isArray(rows) ? rows : [];

  input.forEach((row) => {
    const username = String(row && row.username ? row.username : "").trim().toLowerCase();
    if (!username) {
      return;
    }
    const displayName = String(row && row.displayName ? row.displayName : "").trim();
    const prev = map.get(username);
    const lastSeenAt = Number(row && row.lastSeenAt ? row.lastSeenAt : 0) || now;
    const onAir = !!(row && row.onAir);
    if (!prev) {
      map.set(username, { username, displayName, onAir, lastSeenAt });
      return;
    }
    map.set(username, {
      username,
      displayName: prev.displayName || displayName,
      onAir: prev.onAir || onAir,
      lastSeenAt: Math.max(prev.lastSeenAt, lastSeenAt)
    });
  });

  return Array.from(map.values()).sort((a, b) => {
    if (a.username === session.username && b.username !== session.username) {
      return -1;
    }
    if (b.username === session.username && a.username !== session.username) {
      return 1;
    }
    if (a.onAir !== b.onAir) {
      return a.onAir ? -1 : 1;
    }
    return a.username.localeCompare(b.username);
  });
}

function renderParticipants(participants) {
  const rows = normalizeParticipants(participants);
  rows.forEach((row) => {
    if (row && row.username) {
      participantDisplayNames.set(row.username, getDisplayNameForRow(row));
    }
  });
  currentParticipants = rows.map((row) => row.username);
  const nextAudienceSignature = buildReceiptAudienceSignature(currentParticipants);
  if (nextAudienceSignature !== lastReceiptAudienceSignature) {
    lastReceiptAudienceSignature = nextAudienceSignature;
    refreshAllMessageMeta();
    refreshMessagePopovers();
  }
  const onAirUsers = rows.filter((row) => !!row.onAir).map((row) => getDisplayNameForRow(row));
  if (!videoRoomEnabled) {
    updateRemoteVideoLabel(getTargetPeer() || "Guest");
    updateRemoteTileVisibility();
  }
  participantsList.innerHTML = "";

  if (!rows.length) {
    participantsStatus.textContent = "No active participants in room.";
    setChatOnlineState("0 online", true);
    if (onAirRosterStatus) {
      onAirRosterStatus.textContent = "On-Air now (0): nobody.";
    }
    renderHostSpotlightOptions(rows);
    renderHostTransferOptions(rows);
    applySpotlightUI();
    maybeStartVideoRoomConnection();
    updatePreflightSummary();
    return;
  }

  participantsStatus.textContent = rows.length + " participant(s) active in room.";
  setChatOnlineState(rows.length + " online", true);
  if (onAirUsers.length) {
    airStatusEl.textContent = "On-Air";
    airStatusEl.classList.remove("off");
    airStatusEl.classList.add("on");
  } else {
    airStatusEl.textContent = "Off-Air";
    airStatusEl.classList.remove("on");
    airStatusEl.classList.add("off");
  }
  if (!onAirUsers.length) {
    if (onAirRosterStatus) {
      onAirRosterStatus.textContent = "On-Air now (0): nobody.";
    }
  } else if (onAirRosterStatus) {
    onAirRosterStatus.textContent = "On-Air now (" + onAirUsers.length + "): " + onAirUsers.join(", ") + ".";
  }

  rows.forEach((row) => {
    const username = row.username;
    const item = document.createElement("div");
    item.className = "participant-item";
    item.dataset.username = username;
    if (spotlightUsername && spotlightUsername === username) {
      item.classList.add("spotlight");
    }

    const avatar = document.createElement("span");
    avatar.className = "participant-avatar";
    avatar.textContent = toAvatarInitial(getDisplayNameForRow(row));

    const name = document.createElement("span");
    name.className = "participant-name";
    const isHostRow = !!(currentHostUsername && currentHostUsername === username);
    const isYou = username === session.username;
    name.textContent = getDisplayNameForRow(row) + (isYou ? " (You)" : "") + (isHostRow ? " [Host]" : "");

    const quality = document.createElement("span");
    const qualityState = getConnectionQuality(row);
    quality.className = "participant-quality " + qualityState;
    quality.textContent = qualityState === "good" ? "Good" : qualityState === "fair" ? "Fair" : "Poor";

    const air = document.createElement("span");
    const onAir = !!row.onAir;
    air.className = "participant-air " + (onAir ? "on" : "off");
    air.textContent = onAir ? "On-Air" : "Off-Air";

    item.appendChild(avatar);
    item.appendChild(name);
    item.appendChild(quality);
    item.appendChild(air);
    participantsList.appendChild(item);
  });

  renderHostSpotlightOptions(rows);
  renderHostTransferOptions(rows);
  applySpotlightUI();
  updateRemoteTileVisibility();
  updateOnAirGuestAudioUI();
  maybeStartVideoRoomConnection();
  updatePreflightSummary();
}

function getTargetPeer() {
  return currentParticipants.find((name) => name !== session.username) || "";
}

function isOfferInitiator(peerUsername) {
  return session.username.localeCompare(peerUsername) < 0;
}

function isLocalRuntimeHost() {
  const host = String(window.location.hostname || "").toLowerCase();
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
}

function updateRealtimeBaseUrl(nextUrl) {
  const normalized = normalizeRealtimeBaseUrl(nextUrl);
  if (!normalized) {
    return false;
  }
  REALTIME_BASE_URL = normalized;
  try {
    localStorage.setItem(REALTIME_URL_KEY, REALTIME_BASE_URL);
  } catch (error) {
    // Ignore storage write failures.
  }
  return true;
}

async function api(path, options) {
  const method = String((options && options.method) || "GET").toUpperCase();
  const hasBody = !!(options && options.body !== undefined && options.body !== null);
  const headers = {
    ...(options && options.headers ? options.headers : {})
  };
  if (hasBody && !Object.prototype.hasOwnProperty.call(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json";
  }
  const timeoutMs = method === "GET" ? 7000 : 12000;
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => {
    try {
      controller.abort();
    } catch (error) {
      // Ignore abort races.
    }
  }, timeoutMs);
  const requestOptions = {
    ...options,
    method,
    cache: "no-store",
    signal: controller.signal,
    headers
  };
  const canFallbackToProd = !isLocalRuntimeHost() && REALTIME_BASE_URL !== PRODUCTION_REALTIME_URL;
  let response;
  try {
    try {
      response = await fetch(REALTIME_BASE_URL + path, requestOptions);
    } catch (error) {
      if (!canFallbackToProd) {
        const aborted = error && (error.name === "AbortError" || String(error.message || "").toLowerCase().includes("abort"));
        if (aborted) {
          const timeoutErr = new Error("Request timeout");
          timeoutErr.status = 0;
          throw timeoutErr;
        }
        throw error;
      }
      updateRealtimeBaseUrl(PRODUCTION_REALTIME_URL);
      response = await fetch(REALTIME_BASE_URL + path, requestOptions);
    }
    if (!response.ok && canFallbackToProd) {
      updateRealtimeBaseUrl(PRODUCTION_REALTIME_URL);
      response = await fetch(REALTIME_BASE_URL + path, requestOptions);
    }
  } finally {
    window.clearTimeout(timeoutId);
  }
  let data = null;
  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }
  if (!response.ok) {
    const message = data && data.error ? data.error : "HTTP " + response.status;
    const err = new Error(message);
    err.status = response.status;
    err.data = data;
    throw err;
  }
  return data || {};
}

async function sendPresenceHeartbeat() {
  await api("/presence/heartbeat", {
    method: "POST",
    body: JSON.stringify({
      sessionId,
      username: session.username,
      displayName: sessionIdentity.displayName || session.username,
      onAir: isOnAir
    })
  });
  realtimeEnabled = true;
}

async function pollPresence() {
  const data = await api("/presence/list");
  realtimeEnabled = true;
  if (data && data.adminSettings && typeof data.adminSettings === "object") {
    adminSettings = {
      ...adminSettings,
      ...data.adminSettings
    };
  }
  applyAdminSettingsToUi();
  showRuntimeWarnings();
  applyStudioControlState(data && data.studioControlState ? data.studioControlState : null);
  updateChatStatusFromState();
  setHostOwner(data.hostUsername || "");
  const participants = Array.isArray(data.participants)
    ? data.participants
    : (Array.isArray(data.users)
      ? data.users.map((username) => ({
          username: String(username || "").trim().toLowerCase(),
          onAir: false,
          lastSeenAt: Date.now()
        }))
      : []);
  renderParticipants(participants);
}

async function sendChat(text, attachment, replyTo) {
  return api("/chat/send", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      displayName: sessionIdentity.displayName || session.username,
      text,
      attachment: attachment || null,
      replyTo: replyTo || null
    })
  });
}

function sendChatWithProgress(text, attachment, onProgress, replyTo) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    attachmentUploadXhr = xhr;
    xhr.open("POST", REALTIME_BASE_URL + "/chat/send", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (attachmentUploadXhr === xhr) {
        attachmentUploadXhr = null;
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
      if (attachmentUploadXhr === xhr) {
        attachmentUploadXhr = null;
      }
      reject(new Error("Upload failed"));
    };
    xhr.onabort = () => {
      if (attachmentUploadXhr === xhr) {
        attachmentUploadXhr = null;
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
        username: session.username,
        displayName: sessionIdentity.displayName || session.username,
        text,
        attachment: attachment || null,
        replyTo: replyTo || null
      })
    );
  });
}

async function sendChatReaction(messageId, emoji) {
  await api("/chat/react", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      messageId,
      emoji
    })
  });
}

async function sendChatEdit(messageId, text) {
  await api("/chat/edit", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      messageId,
      text
    })
  });
}

async function sendChatDelete(messageId, asHost) {
  return api("/chat/delete", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      messageId,
      asHost: !!asHost
    })
  });
}

async function sendChatSeen(seenUpTo) {
  if (!seenUpTo) {
    return;
  }
  await api("/chat/seen", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      seenUpTo
    })
  });
}

async function sendChatTyping(typing) {
  await api("/chat/typing", {
    method: "POST",
    body: JSON.stringify({
      username: session.username,
      displayName: sessionIdentity.displayName || session.username,
      typing: !!typing
    })
  });
}

function handleIncomingChatEvents(events, suppressAlerts) {
  const list = Array.isArray(events) ? events : [];
  const suppress = !!suppressAlerts;
  for (const event of list) {
    const eventId = Number(event && event.id ? event.id : 0);
    if (eventId > lastChatId) {
      lastChatId = eventId;
    }
    if (event.type === "message") {
      const item = event.payload && event.payload.message ? event.payload.message : null;
      const messageId = Number(item && item.id ? item.id : 0);
      if (!item || !messageId) {
        continue;
      }
      const isKnownMessage = seenMessageIds.has(messageId);
      const entry = {
        id: messageId,
        kind: item.kind === "system" || item.username === "system" ? "system" : "chat",
        username: item.username,
        text: item.text,
        timestamp: item.timestamp,
        reactions: item.reactions && typeof item.reactions === "object" ? { ...item.reactions } : {},
        attachment: item.attachment && typeof item.attachment === "object" ? { ...item.attachment } : null,
        replyTo: item.replyTo && typeof item.replyTo === "object" ? { ...item.replyTo } : null,
        editedAt: Number(item.editedAt || 0),
        deleted: !!item.deleted,
        seenBy: item.seenBy && typeof item.seenBy === "object" ? { ...item.seenBy } : {}
      };
      const isRemote = entry.username !== session.username;
      const isUnreadRemote = isRemote && entry.id > lastSeenUpTo && entry.kind !== "system";
      appendEntryToUI(entry, isUnreadRemote);
      if (!suppress && isUnreadRemote && !isKnownMessage) {
        notifyIncomingRemoteMessage(entry);
      }
      continue;
    }

    if (event.type === "reaction") {
      const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
      if (!suppress) {
        notifyIncomingReaction(event.id, payload);
      }
      applyReactionUpdate(payload.messageId, payload.reactions);
      continue;
    }

    if (event.type === "edit") {
      const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
      applyMessageEdit(payload.messageId, payload.text, payload.editedAt);
      continue;
    }

    if (event.type === "delete") {
      const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
      applyMessageDelete(payload.messageId);
      continue;
    }

    if (event.type === "seen") {
      const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
      applySeenUpdate(payload.username, payload.seenUpTo);
      continue;
    }

    if (event.type === "clear") {
      clearChatUiForAdminReset();
      setChatStatus("Chat history was cleared by admin.", "warn");
      continue;
    }

    if (event.type === "typing") {
      const payload = event.payload && typeof event.payload === "object" ? event.payload : {};
      setTypingUsers(Array.isArray(payload.typingUsers) ? payload.typingUsers : []);
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
    const isKnownMessage = seenMessageIds.has(messageId);
    const entry = {
      id: messageId,
      kind: item.kind === "system" || item.username === "system" ? "system" : "chat",
      username: item.username,
      text: item.text,
      timestamp: item.timestamp,
      reactions: item.reactions && typeof item.reactions === "object" ? { ...item.reactions } : {},
      attachment: item.attachment && typeof item.attachment === "object" ? { ...item.attachment } : null,
      replyTo: item.replyTo && typeof item.replyTo === "object" ? { ...item.replyTo } : null,
      editedAt: Number(item.editedAt || 0),
      deleted: !!item.deleted,
      seenBy: item.seenBy && typeof item.seenBy === "object" ? { ...item.seenBy } : {}
    };
    const isRemote = entry.username !== session.username;
    const isUnreadRemote = isRemote && entry.id > lastSeenUpTo && entry.kind !== "system";
    appendEntryToUI(entry, isUnreadRemote);
    if (!suppress && isUnreadRemote && !isKnownMessage) {
      notifyIncomingRemoteMessage(entry);
    }
    if (messageId > lastChatId) {
      lastChatId = messageId;
    }
  }
}

function normalizeServerMessageToEntry(item) {
  const messageId = Number(item && item.id ? item.id : 0);
  if (!messageId) {
    return null;
  }
  return {
    id: messageId,
    kind: item.kind === "system" || item.username === "system" ? "system" : "chat",
    username: item.username,
    text: item.text,
    timestamp: item.timestamp,
    reactions: item.reactions && typeof item.reactions === "object" ? { ...item.reactions } : {},
    attachment: item.attachment && typeof item.attachment === "object" ? { ...item.attachment } : null,
    replyTo: item.replyTo && typeof item.replyTo === "object" ? { ...item.replyTo } : null,
    editedAt: Number(item.editedAt || 0),
    deleted: !!item.deleted,
    seenBy: item.seenBy && typeof item.seenBy === "object" ? { ...item.seenBy } : {}
  };
}

function resetChatSyncState() {
  lastChatId = 0;
  lastSeenUpTo = 0;
  pendingSeenUpTo = 0;
  seenMessageIds.clear();
  chatEntriesById.clear();
  chatMessages.innerHTML = "";
  saveSeenUpTo(0);
}

function clearChatUiForAdminReset() {
  lastChatId = 0;
  seenMessageIds.clear();
  chatEntriesById.clear();
  chatMessages.innerHTML = "";
  pendingSeenUpTo = 0;
  lastSeenUpTo = 0;
  saveSeenUpTo(0);
  clearEditingMessageStatus();
  clearReplyingMessage();
  clearLocalPendingMessages();
  chatQueue = [];
  saveChatQueue();
  clearChatAttention();
  setUnreadCount(0);
  updateChatStatusFromState();
}

async function pollChat(allowRetry) {
  if (chatPollInFlight) {
    return;
  }
  chatPollInFlight = true;
  try {
    const canRetry = allowRetry !== false;
    const data = await api("/chat/since?since=" + encodeURIComponent(String(lastChatId)));
    realtimeEnabled = true;
    const serverLastEventId = Number(data.lastEventId || 0);
    const syncMode = String(data && data.syncMode ? data.syncMode : "events").toLowerCase();
    if (canRetry && syncMode !== "messages" && lastChatId > 0 && serverLastEventId < lastChatId) {
      // Backend event ids can drift during deploy overlap/instance switches.
      // Soft-resync from zero without clearing UI to avoid visible chat flicker.
      const fullData = await api("/chat/since?since=0");
      const fullEvents = Array.isArray(fullData.events) ? fullData.events : [];
      const fullMessages = Array.isArray(fullData.messages) ? fullData.messages : [];
      const isInitialHydration = false;
      if (fullMessages.length) {
        handleIncomingLegacyMessages(fullMessages, isInitialHydration);
      }
      if (fullEvents.length) {
        handleIncomingChatEvents(fullEvents, isInitialHydration);
      }
      setTypingUsers(Array.isArray(fullData.typingUsers) ? fullData.typingUsers : []);
      const fullLatestMessageId = fullMessages.length ? Number(fullMessages[fullMessages.length - 1].id || 0) : 0;
      lastChatId = Math.max(lastChatId, Number(fullData.lastEventId || 0), fullLatestMessageId);
      updateChatStatusFromState();
      refreshMessagePopovers();
      markChatSeenUpToLatest();
      return;
    }
    flushSeenSyncQueue();
    setTypingUsers(Array.isArray(data.typingUsers) ? data.typingUsers : []);
    const isInitialHydration = lastChatId === 0 && seenMessageIds.size === 0;
    const events = Array.isArray(data.events) ? data.events : [];
    const messages = Array.isArray(data.messages) ? data.messages : [];
    if (messages.length) {
      handleIncomingLegacyMessages(messages, isInitialHydration);
    }
    if (events.length) {
      handleIncomingChatEvents(events, isInitialHydration);
    }
    const latestMessageId = messages.length ? Number(messages[messages.length - 1].id || 0) : 0;
    if (latestMessageId > lastChatId) {
      lastChatId = latestMessageId;
    }
    if (serverLastEventId > lastChatId) {
      lastChatId = serverLastEventId;
    }
    updateChatStatusFromState();
    refreshMessagePopovers();
    markChatSeenUpToLatest();
  } finally {
    chatPollInFlight = false;
  }
}

function stopChatStreamRetry() {
  if (chatStreamRetryTimer) {
    clearTimeout(chatStreamRetryTimer);
    chatStreamRetryTimer = null;
  }
}

function closeChatStream() {
  if (chatStream) {
    try {
      chatStream.close();
    } catch (error) {
      // Ignore close races.
    }
    chatStream = null;
  }
}

function scheduleChatStreamReconnect() {
  if (chatStreamRetryTimer || !realtimeEnabled) {
    return;
  }
  chatStreamRetryTimer = window.setTimeout(() => {
    chatStreamRetryTimer = null;
    startChatStream();
  }, 1500);
}

function handleChatStreamPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return;
  }
  const events = Array.isArray(payload.events)
    ? payload.events
    : (payload.event ? [payload.event] : []);
  if (events.length) {
    handleIncomingChatEvents(events, false);
  }
  if (Array.isArray(payload.typingUsers)) {
    setTypingUsers(payload.typingUsers);
  }
  const serverLastEventId = Number(payload.lastEventId || 0);
  if (serverLastEventId > lastChatId) {
    lastChatId = serverLastEventId;
  }
  updateChatStatusFromState();
  refreshMessagePopovers();
  markChatSeenUpToLatest();
}

function startChatStream() {
  if (!realtimeEnabled || chatStream || typeof window.EventSource !== "function") {
    return;
  }
  stopChatStreamRetry();
  const since = Number(lastChatId || 0);
  const streamUrl =
    REALTIME_BASE_URL +
    "/chat/stream?since=" +
    encodeURIComponent(String(since)) +
    "&_=" +
    encodeURIComponent(String(Date.now()));
  try {
    const stream = new EventSource(streamUrl);
    chatStream = stream;
    stream.addEventListener("open", () => {
      realtimeEnabled = true;
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

async function sendSignal(to, type, payload) {
  if (!realtimeEnabled || !to) {
    return;
  }
  await api("/webrtc/signal", {
    method: "POST",
    body: JSON.stringify({
      from: session.username,
      to,
      type,
      payload
    })
  });
}

async function renegotiatePeerConnection(statusText) {
  if (useTwilioVideoRoom()) {
    try {
      await syncTwilioPublishedTracks();
      if (statusText) {
        setVideoRoomStatus(statusText);
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  if (!peerConnection || !activePeerUsername || !realtimeEnabled) {
    return false;
  }
  if (peerConnection.signalingState !== "stable") {
    return false;
  }
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  await sendSignal(activePeerUsername, "offer", offer);
  hasSentOffer = true;
  if (statusText) {
    setVideoRoomStatus(statusText);
  }
  return true;
}

function clearMediaConnectRetryTimer() {
  if (mediaConnectRetryTimer) {
    clearTimeout(mediaConnectRetryTimer);
    mediaConnectRetryTimer = null;
  }
}

function scheduleMediaConnectRetry(peerUsername) {
  clearMediaConnectRetryTimer();
  if (!peerUsername || !realtimeEnabled || !videoRoomEnabled) {
    return;
  }
  mediaConnectRetryTimer = window.setTimeout(() => {
    if (
      !peerConnection ||
      activePeerUsername !== peerUsername ||
      !realtimeEnabled ||
      !videoRoomEnabled ||
      hasRenderableVideo(remoteVideo) ||
      hasRenderableVideo(onAirRemoteVideo)
    ) {
      return;
    }
    renegotiatePeerConnection("Connection stalled. Retrying " + peerUsername + "...").catch(() => {
      // Ignore retry races.
    });
  }, 4500);
}

async function flushPendingIceCandidates() {
  if (!peerConnection || !pendingIceCandidates.length || !peerConnection.remoteDescription) {
    return;
  }
  const queue = pendingIceCandidates.splice(0, pendingIceCandidates.length);
  for (const candidate of queue) {
    try {
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (error) {
      // Ignore individual ICE application failures during reconnect races.
    }
  }
}

async function loadRtcIceServers() {
  try {
    const data = await api("/webrtc/ice");
    const list = data && Array.isArray(data.iceServers) ? data.iceServers : [];
    if (list.length) {
      rtcIceServers = list;
      return;
    }
    rtcIceServers = [...DEFAULT_ICE_SERVERS];
  } catch (error) {
    rtcIceServers = [...DEFAULT_ICE_SERVERS];
  }
}

async function createPeerConnection(peerUsername) {
  if (peerConnection && activePeerUsername === peerUsername) {
    updateRemoteVideoLabel(peerUsername);
    addLocalTracksToPeerConnection();
    return;
  }

  closePeerConnection();
  activePeerUsername = peerUsername;
  updateRemoteVideoLabel(peerUsername);
  applySpotlightUI();
  hasSentOffer = false;
  pendingIceCandidates = [];
  clearMediaConnectRetryTimer();

  peerConnection = new RTCPeerConnection({
    iceServers: Array.isArray(rtcIceServers) && rtcIceServers.length ? rtcIceServers : DEFAULT_ICE_SERVERS
  });

  peerConnection.onicecandidate = (event) => {
    if (event.candidate && activePeerUsername) {
      sendSignal(activePeerUsername, "ice", event.candidate).catch(() => {
        // Ignore transient signaling errors.
      });
    }
  };

  peerConnection.ontrack = (event) => {
    const [stream] = event.streams;
    if (stream) {
      if (remoteAudio) {
        remoteAudio.srcObject = stream;
        remoteAudio.muted = false;
        remoteAudio.volume = 1;
        remoteAudio.play().catch(() => {
          // Ignore autoplay restrictions; user interaction can resume playback.
        });
      }
      remoteVideo.srcObject = stream;
      onAirRemoteVideo.srcObject = stream;
      remoteVideo.muted = false;
      onAirRemoteVideo.muted = false;
      remoteVideo.volume = 1;
      onAirRemoteVideo.volume = 1;
      remoteVideo.play().catch(() => {
        // Ignore autoplay restrictions; user interaction can resume playback.
      });
      onAirRemoteVideo.play().catch(() => {
        // Ignore autoplay restrictions; user interaction can resume playback.
      });
      applySpeakerOutput(studioSettings.preferredSpeakerId || "", false).catch(() => {
        // Ignore speaker routing failures during remote track start.
      });
      updateRemoteTileVisibility();
      setVideoRoomStatus("Connected to " + activePeerUsername + ".");
      if (isRecording) {
        refreshRecordingWaveSources().catch(() => {
          // Ignore source refresh failures.
        });
      }
    }
  };

  peerConnection.onconnectionstatechange = () => {
    const state = peerConnection ? peerConnection.connectionState : "closed";
    if (state === "connected") {
      clearMediaConnectRetryTimer();
      setVideoRoomStatus("Connected to " + activePeerUsername + ".");
    }
    if (state === "connecting") {
      setVideoRoomStatus("Connecting to " + activePeerUsername + "...");
      scheduleMediaConnectRetry(activePeerUsername);
    }
    if (state === "disconnected" || state === "failed" || state === "closed") {
      remoteVideo.srcObject = null;
      onAirRemoteVideo.srcObject = null;
      updateRemoteTileVisibility();
      clearMediaConnectRetryTimer();
      if (isRecording) {
        refreshRecordingWaveSources().catch(() => {
          // Ignore source refresh failures.
        });
      }
      if (videoRoomEnabled) {
        setVideoRoomStatus("Connection interrupted. Reconnecting...", true);
        hasSentOffer = false;
        scheduleMediaConnectRetry(activePeerUsername);
      }
    }
  };

  peerConnection.oniceconnectionstatechange = () => {
    const state = peerConnection ? String(peerConnection.iceConnectionState || "").toLowerCase() : "";
    if (state === "connected" || state === "completed") {
      clearMediaConnectRetryTimer();
      return;
    }
    if (state === "checking") {
      setVideoRoomStatus("Negotiating media path with " + activePeerUsername + "...");
      scheduleMediaConnectRetry(activePeerUsername);
      return;
    }
    if (state === "failed" || state === "disconnected") {
      hasSentOffer = false;
      scheduleMediaConnectRetry(activePeerUsername);
    }
  };

  addLocalTracksToPeerConnection();
}

async function maybeStartVideoRoomConnection() {
  if (useTwilioVideoRoom()) {
    if (!videoRoomEnabled || !realtimeEnabled) {
      return;
    }
    const targetPeer = getTargetPeer();
    updateRemoteVideoLabel(targetPeer || "Guest");
    updateRemoteTileVisibility();
    if (!shouldMaintainTwilioRoomConnection()) {
      setVideoRoomStatus("Waiting for another participant to join video room.");
      return;
    }
    const activeTwilioPeer =
      twilioVideoRoom && twilioRemoteParticipant && twilioRemoteParticipant.identity
        ? String(twilioRemoteParticipant.identity || "").trim().toLowerCase()
        : "";
    if (twilioVideoRoom && activeTwilioPeer && targetPeer && activeTwilioPeer === String(targetPeer || "").trim().toLowerCase()) {
      return;
    }
    await ensureTwilioRoomConnection();
    await syncTwilioPublishedTracks();
    return;
  }
  if (!videoRoomEnabled || !realtimeEnabled) {
    return;
  }

  const peerUsername = getTargetPeer();
  updateRemoteVideoLabel(peerUsername || "Guest");
  updateRemoteTileVisibility();
  if (!peerUsername) {
    setVideoRoomStatus("Waiting for another participant to join video room.");
    closePeerConnection();
    return;
  }

  await createPeerConnection(peerUsername);

  if (isOfferInitiator(peerUsername) && !hasSentOffer && peerConnection.signalingState === "stable") {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    await sendSignal(peerUsername, "offer", offer);
    hasSentOffer = true;
    scheduleMediaConnectRetry(peerUsername);
    setVideoRoomStatus(
      cameraStream ? "Calling " + peerUsername + "..." : "Connecting to " + peerUsername + " while your camera is off..."
    );
  } else if (
    !isOfferInitiator(peerUsername) &&
    peerConnection &&
    !["connected", "connecting"].includes(String(peerConnection.connectionState || "").toLowerCase()) &&
    !peerConnection.remoteDescription &&
    !peerConnection.currentRemoteDescription &&
    !peerConnection.localDescription &&
    !peerConnection.currentLocalDescription
  ) {
    setVideoRoomStatus("Waiting for " + peerUsername + " to connect...");
  }
}

async function handleSignal(signal) {
  if (!signal || !signal.type || !signal.from) {
    return;
  }

  if (signal.type === "host-mute-all") {
    if (micStream) {
      setMicMuted(true);
      setMicStatus("Mic muted by host.");
    }
    setHostStatus("Mute all triggered by " + getDisplayNameForUsername(signal.from) + ".", false);
    return;
  }

  if (signal.type === "host-spotlight") {
    const payload = signal.payload && typeof signal.payload === "object" ? signal.payload : {};
    await applySpotlight(payload.username || "", signal.from);
    return;
  }

  if (signal.type === "host-record-state") {
    const payload = signal.payload && typeof signal.payload === "object" ? signal.payload : {};
    setRecordingState(!!payload.recording, !!payload.downloadReady, signal.from, payload.startedAt);
    return;
  }

  if (useTwilioVideoRoom()) {
    return;
  }

  if (!videoRoomEnabled) {
    videoRoomEnabled = true;
    setVideoRoomStatus("Incoming video connection from " + signal.from + "...");
  }

  await createPeerConnection(signal.from);

  if (signal.type === "offer") {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(signal.payload));
    await flushPendingIceCandidates();
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    await sendSignal(signal.from, "answer", answer);
    scheduleMediaConnectRetry(signal.from);
    setVideoRoomStatus("Connecting to " + signal.from + "...");
    return;
  }

  if (signal.type === "answer") {
    if (peerConnection.signalingState !== "stable") {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(signal.payload));
      await flushPendingIceCandidates();
      scheduleMediaConnectRetry(signal.from);
      setVideoRoomStatus("Connected to " + signal.from + ".");
    }
    return;
  }

  if (signal.type === "ice" && signal.payload) {
    if (!peerConnection.remoteDescription) {
      pendingIceCandidates.push(signal.payload);
      return;
    }
    try {
      await peerConnection.addIceCandidate(new RTCIceCandidate(signal.payload));
    } catch (error) {
      pendingIceCandidates.push(signal.payload);
    }
  }
}

async function pollSignals() {
  if (!realtimeEnabled || !videoRoomEnabled) {
    return;
  }
  const data = await api(
    "/webrtc/signals?for=" + encodeURIComponent(session.username) + "&since=" + encodeURIComponent(String(lastSignalId))
  );
  const signals = Array.isArray(data.signals) ? data.signals : [];
  for (const signal of signals) {
    if (signal.id > lastSignalId) {
      lastSignalId = signal.id;
    }
    await handleSignal(signal);
  }
}

function setRealtimeOfflineFallback() {
  participantsStatus.textContent = "Realtime server offline. Start server to share chat/presence across users.";
  setChatOnlineState("offline", false);
  setVideoRoomStatus("Realtime server offline for video room.", true);
  setHostStatus("Realtime server offline. Host controls unavailable.", true);
  setHostOwner("");
  if (onAirRosterStatus) {
    onAirRosterStatus.textContent = "On-Air now: realtime offline.";
  }
  stopTypingTimer();
  typingIsActive = false;
  setTypingUsers([]);
  updateChatStatusFromState();
  updatePreflightSummary();
}

async function syncSessionState() {
  if (sessionSyncInFlight) {
    return;
  }
  if (typeof window.TBRAuth.refreshSessionFromServer !== "function") {
    return;
  }
  sessionSyncInFlight = true;
  try {
    const result = await window.TBRAuth.refreshSessionFromServer();
    if (!result || result.invalid || (!result.ok && !result.transient) || (result.ok && !result.session)) {
      stopRealtimeLoops();
      leaveVideoRoom();
      stopCameraStream();
      stopMicLoopback();
      stopMicStream();
      window.TBRAuth.clearSession();
      window.location.replace("./");
    }
  } finally {
    sessionSyncInFlight = false;
  }
}

async function initRealtime() {
  if (realtimeEnabled && heartbeatTimer && chatPollTimer && presencePollTimer && signalPollTimer) {
    return;
  }
  try {
    await api("/health");
    await loadRtcIceServers();
    realtimeEnabled = true;
    stopRealtimeBootstrapRetry();
    await sendPresenceHeartbeat();
    await pollPresence();
    await pollChat();
    startChatStream();
    await flushChatQueue();
    setHostStatus("Host controls ready.", false);
    updateChatStatusFromState();

    heartbeatTimer = window.setInterval(() => {
      sendPresenceHeartbeat().catch(() => {
        realtimeEnabled = false;
        setRealtimeOfflineFallback();
      });
    }, HEARTBEAT_MS);

    presencePollTimer = window.setInterval(() => {
      pollPresence().catch(() => {
        realtimeEnabled = false;
        setRealtimeOfflineFallback();
      });
    }, POLL_PRESENCE_MS);

    chatPollTimer = window.setInterval(() => {
      pollChat().catch(() => {
        // Keep realtime marked online when presence/heartbeat are healthy.
        // Chat poll can fail transiently without full realtime outage.
        updateChatStatusFromState();
      });
      flushChatQueue().catch(() => {
        // Retry on next poll.
      });
    }, POLL_CHAT_MS);

    signalPollTimer = window.setInterval(() => {
      pollSignals().catch(() => {
        // Keep non-fatal during intermittent network issues.
      });
    }, POLL_WEBRTC_MS);

    sessionSyncTimer = window.setInterval(() => {
      syncSessionState().catch(() => {
        // Ignore transient auth sync errors.
      });
    }, SESSION_SYNC_MS);
  } catch (error) {
    realtimeEnabled = false;
    setRealtimeOfflineFallback();
    startRealtimeBootstrapRetry();
  }
}

function stopRealtimeLoops() {
  [heartbeatTimer, chatPollTimer, presencePollTimer, signalPollTimer, sessionSyncTimer].forEach((timer) => {
    if (timer) {
      clearInterval(timer);
    }
  });
  heartbeatTimer = null;
  chatPollTimer = null;
  presencePollTimer = null;
  signalPollTimer = null;
  sessionSyncTimer = null;
  closeChatStream();
  stopChatStreamRetry();
}

function stopRealtimeBootstrapRetry() {
  if (realtimeBootstrapRetryTimer) {
    clearInterval(realtimeBootstrapRetryTimer);
    realtimeBootstrapRetryTimer = null;
  }
}

function startRealtimeBootstrapRetry() {
  if (realtimeBootstrapRetryTimer) {
    return;
  }
  realtimeBootstrapRetryTimer = window.setInterval(() => {
    if (realtimeEnabled || heartbeatTimer || chatPollTimer || presencePollTimer || signalPollTimer) {
      stopRealtimeBootstrapRetry();
      return;
    }
    initRealtime().catch(() => {
      // Keep retrying until realtime reconnects.
    });
  }, REALTIME_BOOTSTRAP_RETRY_MS);
}

function leavePresence(force) {
  if (!force && !realtimeEnabled) {
    return;
  }
  const payload = JSON.stringify({
    sessionId,
    username: session.username,
    displayName: sessionIdentity.displayName || session.username
  });
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    const ok = navigator.sendBeacon(REALTIME_BASE_URL + "/presence/leave", blob);
    if (ok) {
      return;
    }
  }
  fetch(REALTIME_BASE_URL + "/presence/leave", {
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
    sessionId,
    username: session.username,
    displayName: sessionIdentity.displayName || session.username
  });
  try {
    await api("/presence/leave", {
      method: "POST",
      body: payload
    });
  } catch (error) {
    // Ignore errors; unload fallback still runs.
  }
}

function releaseHostOnLeave() {
  if (!isCurrentUserHost()) {
    return;
  }
  const payload = JSON.stringify({ username: session.username });
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    navigator.sendBeacon(REALTIME_BASE_URL + "/host/release", blob);
    return;
  }
  fetch(REALTIME_BASE_URL + "/host/release", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true
  }).catch(() => {
    // Ignore unload errors.
  });
}

function leaveVideoRoom() {
  pushMediaDebug("twilio.room.localDisconnect", "leaveVideoRoom");
  videoRoomEnabled = false;
  closePeerConnection();
  setVideoRoomStatus("Not connected to video room.");
  updateRemoteVideoLabel(getTargetPeer() || "Guest");
}

async function submitChatText(text, attachment, forcedReplyTo) {
  stopTypingTimer();
  if (typingIsActive) {
    typingIsActive = false;
    sendChatTyping(false).catch(() => {
      // Ignore transient realtime failures.
    });
  }
  const hasText = !!text;
  const hasAttachment = !!(attachment && typeof attachment === "object");
  if (!hasText && !hasAttachment) {
    return;
  }
  if (hasAttachment && adminSettings.chatAttachmentsEnabled === false) {
    setChatStatus("Attachments are disabled by admin.", "warn");
    return;
  }
  if (hasAttachment && attachment && attachment.kind === "video" && adminSettings.chatVideoAttachmentsEnabled === false) {
    setChatStatus("Video attachments are disabled by admin.", "warn");
    return;
  }
  pendingChatResponse = false;
  clearChatAttention();
  setChatStatus(hasAttachment ? "Uploading attachment..." : "Sending message...", "warn");
  const replyToPayload = forcedReplyTo ? { ...forcedReplyTo } : (replyingToMessage ? { ...replyingToMessage } : null);
  const pendingId = appendLocalPendingMessage(text, attachment, replyToPayload);
  let sendCommitted = false;
  let sentMessage = null;
  try {
    if (hasAttachment) {
      setAttachmentBusy(true);
      setAttachmentProgress(0);
      const response = await sendChatWithProgress(text, attachment || null, (pct) => {
        setAttachmentProgress(pct);
      }, replyToPayload);
      sentMessage = response && response.message ? response.message : null;
      sendCommitted = true;
      setAttachmentProgress(100);
    } else {
      const response = await sendChat(text, attachment || null, replyToPayload);
      sentMessage = response && response.message ? response.message : null;
      sendCommitted = true;
    }
    removeLocalPendingMessage(pendingId);
    const committedEntry = normalizeServerMessageToEntry(sentMessage);
    if (committedEntry) {
      appendEntryToUI(committedEntry, false);
      if (committedEntry.id > lastChatId) {
        lastChatId = committedEntry.id;
      }
      markChatSeenUpToLatest();
    }
    try {
      await pollChat();
    } catch (error) {
      // Message already sent; realtime sync can catch up in next poll.
    }
    updateChatStatusFromState();
    clearReplyingMessage();
    if (hasAttachment) {
      setAttachmentBusy(false);
      clearPendingAttachment();
    }
  } catch (error) {
    if (hasAttachment) {
      const reason = error && error.message ? error.message : "Attachment send failed.";
      if (reason.toLowerCase().includes("canceled")) {
        setChatStatus("Upload canceled.", "warn");
      } else {
        setChatStatus(reason, "error");
      }
      setAttachmentBusy(false);
      setAttachmentRetryVisible(true);
      pendingAttachmentRetry = {
        text,
        attachment,
        replyTo: replyToPayload
      };
      updateLocalPendingMessage(pendingId, "Failed");
      return;
    }
    if (sendCommitted) {
      removeLocalPendingMessage(pendingId);
      setChatStatus("Message sent. Live sync will catch up shortly.", "warn");
      return;
    }
    if (isRetryableChatError(error)) {
      enqueueChatAction({
        type: "message",
        text,
        replyTo: replyToPayload,
        queuedAt: Date.now()
      });
      clearReplyingMessage();
      updateLocalPendingMessage(pendingId, "Queued");
      return;
    }
    const reason = error && error.message ? error.message : "Unable to send message.";
    setLockedChatErrorStatus(reason, 9000);
    updateLocalPendingMessage(pendingId, "Failed");
  }
}

function stopTypingTimer() {
  if (typingStopTimer) {
    clearTimeout(typingStopTimer);
    typingStopTimer = null;
  }
}

function scheduleTypingStop() {
  stopTypingTimer();
  typingStopTimer = setTimeout(() => {
    if (!typingIsActive) {
      return;
    }
    sendChatTyping(false)
      .catch(() => {
        // Ignore transient realtime failures.
      })
      .finally(() => {
        typingIsActive = false;
      });
  }, CHAT_TYPING_IDLE_MS);
}

function handleComposerTypingState(value) {
  const text = String(value || "").trim();
  if (!realtimeEnabled) {
    return;
  }
  if (!text) {
    stopTypingTimer();
    if (!typingIsActive) {
      return;
    }
    sendChatTyping(false)
      .catch(() => {
        // Ignore transient realtime failures.
      })
      .finally(() => {
        typingIsActive = false;
      });
    return;
  }
  scheduleTypingStop();
  const nowMs = Date.now();
  if (typingIsActive && nowMs - lastTypingSentAt < CHAT_TYPING_SEND_THROTTLE_MS) {
    return;
  }
  typingIsActive = true;
  lastTypingSentAt = nowMs;
  sendChatTyping(true).catch(() => {
    // Ignore transient realtime failures.
  });
}

if (profileOpenLink) {
  profileOpenLink.addEventListener("click", (event) => {
    event.preventDefault();
    setMenuOpen(false);
    loungeProfileState = window.TBRAuth.getCurrentUserProfile ? window.TBRAuth.getCurrentUserProfile() : loungeProfileState;
    renderLoungeProfileIdentity();
    refreshLoungeProfileMeta();
    setLoungeProfileModalOpen(true);
  });
}

if (settingsOpenLink) {
  settingsOpenLink.addEventListener("click", (event) => {
    event.preventDefault();
    setMenuOpen(false);
    setLoungeSettingsModalOpen(true);
  });
}

if (helpOpenLink) {
  helpOpenLink.addEventListener("click", (event) => {
    event.preventDefault();
    setMenuOpen(false);
    setLoungeHelpModalOpen(true);
  });
}

if (loungeProfileCloseBtn) {
  loungeProfileCloseBtn.addEventListener("click", () => {
    setLoungeProfileModalOpen(false);
  });
}

if (loungeProfileBackBtn) {
  loungeProfileBackBtn.addEventListener("click", () => {
    setLoungeProfileModalOpen(false);
  });
}

if (loungeProfileBackdrop) {
  loungeProfileBackdrop.addEventListener("click", () => {
    setLoungeProfileModalOpen(false);
  });
}

if (loungeProfilePhotoUploadBtn) {
  loungeProfilePhotoUploadBtn.addEventListener("click", () => {
    loungeProfilePhotoInput.click();
  });
}

if (loungeProfilePhotoEditBtn) {
  loungeProfilePhotoEditBtn.addEventListener("click", () => {
    setLoungeAvatarStudioOpen(true);
  });
}

if (loungeAvatarStudioCloseBtn) {
  loungeAvatarStudioCloseBtn.addEventListener("click", () => {
    setLoungeAvatarStudioOpen(false);
  });
}

if (loungeAvatarStudioBackdrop) {
  loungeAvatarStudioBackdrop.addEventListener("click", () => {
    setLoungeAvatarStudioOpen(false);
  });
}

if (loungeProfilePhotoInput) {
  loungeProfilePhotoInput.addEventListener("change", () => {
    const file = loungeProfilePhotoInput.files && loungeProfilePhotoInput.files[0] ? loungeProfilePhotoInput.files[0] : null;
    if (!file) {
      return;
    }
    if (!String(file.type || "").startsWith("image/")) {
      setLoungeProfileMessage("Please choose an image file.", true);
      return;
    }
    if (Number(file.size || 0) > 2 * 1024 * 1024) {
      setLoungeProfileMessage("Image too large. Use 2MB or less.", true);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      if (!dataUrl.startsWith("data:image/")) {
        setLoungeProfileMessage("Unable to read selected image.", true);
        return;
      }
      loungeProfileState.avatarDataUrl = dataUrl;
      renderLoungeProfileIdentity();
      setLoungeProfileMessage("Profile photo ready. Save profile to apply.", false);
    };
    reader.onerror = () => {
      setLoungeProfileMessage("Unable to read selected image.", true);
    };
    reader.readAsDataURL(file);
  });
}

if (loungeProfilePhotoRemoveBtn) {
  loungeProfilePhotoRemoveBtn.addEventListener("click", () => {
    loungeProfileState.avatarDataUrl = "";
    setSelectedLoungeAvatarPreset("");
    renderLoungeProfileIdentity();
    setLoungeProfileMessage("Profile photo removed. Save profile to apply.", false);
  });
}

if (loungeAvatarCategorySelect) {
  loungeAvatarCategorySelect.addEventListener("change", () => {
    renderLoungeAvatarPresetGrid();
  });
}

if (loungeAvatarPresetGrid) {
  loungeAvatarPresetGrid.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    const presetButton = target.closest("[data-lounge-avatar-preset-id]");
    if (!presetButton) {
      return;
    }
    const presetId = String(presetButton.getAttribute("data-lounge-avatar-preset-id") || "");
    const preset = AVATAR_PRESETS.find((item) => item.id === presetId);
    if (!preset) {
      return;
    }
    loungeProfileState.avatarDataUrl = buildAvatarPresetDataUrl(preset);
    setSelectedLoungeAvatarPreset(preset.id);
    renderLoungeProfileIdentity();
    setLoungeProfileMessage("Preset selected. Save profile to apply.", false);
  });
}

if (loungeProfileAliasInput) {
  loungeProfileAliasInput.addEventListener("input", () => {
    loungeProfileState.alias = String(loungeProfileAliasInput.value || "");
    renderLoungeProfileIdentity();
  });
}

if (loungeProfileUseAliasToggle) {
  loungeProfileUseAliasToggle.addEventListener("change", () => {
    loungeProfileState.useAlias = !!loungeProfileUseAliasToggle.checked;
    renderLoungeProfileIdentity();
  });
}

if (loungeProfileSaveBtn) {
  loungeProfileSaveBtn.addEventListener("click", async () => {
    const result = await window.TBRAuth.saveCurrentUserProfile(getLoungeProfilePayload());
    if (!result || !result.ok) {
      setLoungeProfileMessage((result && result.error) || "Unable to save profile.", true);
      return;
    }
    loungeProfileState = result.profile;
    renderLoungeProfileIdentity();
    const nextIdentity = window.TBRAuth.getIdentity(session.username);
    const nextDisplay =
      nextIdentity.displayName !== nextIdentity.username
        ? nextIdentity.displayName + " (@" + nextIdentity.username + ")"
        : nextIdentity.username;
    profileUserEl.textContent = nextDisplay;
    if (sessionUserEl) {
      sessionUserEl.textContent = nextDisplay;
    }
    if (nextIdentity.avatarDataUrl) {
      profileAvatarEl.textContent = "";
      profileAvatarEl.classList.add("hidden");
      if (profileAvatarImgEl) {
        profileAvatarImgEl.src = nextIdentity.avatarDataUrl;
        profileAvatarImgEl.classList.remove("hidden");
      }
    } else {
      profileAvatarEl.classList.remove("hidden");
      if (profileAvatarImgEl) {
        profileAvatarImgEl.removeAttribute("src");
        profileAvatarImgEl.classList.add("hidden");
      }
      profileAvatarEl.textContent = nextIdentity.initial || "U";
    }
    setLoungeProfileMessage("Profile saved.", false);
  });
}

if (loungeProfileChangePasswordBtn) {
  loungeProfileChangePasswordBtn.addEventListener("click", async () => {
    const currentPassword = String(loungeProfileCurrentPasswordInput.value || "");
    const nextPassword = String(loungeProfileNewPasswordInput.value || "");
    const confirmPassword = String(loungeProfileConfirmPasswordInput.value || "");
    if (!currentPassword || !nextPassword || !confirmPassword) {
      setLoungeProfileMessage("Enter current password, new password, and confirm password.", true);
      return;
    }
    if (nextPassword.length < 8) {
      setLoungeProfileMessage("New password must be at least 8 characters.", true);
      return;
    }
    if (nextPassword !== confirmPassword) {
      setLoungeProfileMessage("New password and confirmation do not match.", true);
      return;
    }
    const result = await window.TBRAuth.changePassword(currentPassword, nextPassword);
    if (!result || !result.ok) {
      setLoungeProfileMessage((result && result.error) || "Unable to change password.", true);
      return;
    }
    loungeProfileCurrentPasswordInput.value = "";
    loungeProfileNewPasswordInput.value = "";
    loungeProfileConfirmPasswordInput.value = "";
    setLoungeProfileMessage("Password changed successfully.", false);
  });
}

if (loungeProfileDeleteAccountBtn) {
  loungeProfileDeleteAccountBtn.addEventListener("click", () => {
    setLoungeProfileDeleteModalOpen(true);
  });
}

if (loungeProfileDeleteCancelBtn) {
  loungeProfileDeleteCancelBtn.addEventListener("click", () => {
    setLoungeProfileDeleteModalOpen(false);
  });
}

if (loungeProfileDeleteBackdrop) {
  loungeProfileDeleteBackdrop.addEventListener("click", () => {
    setLoungeProfileDeleteModalOpen(false);
  });
}

if (loungeProfileDeleteConfirmBtn) {
  loungeProfileDeleteConfirmBtn.addEventListener("click", async () => {
    if (typeof window.TBRAuth.deleteCurrentUser !== "function") {
      setLoungeProfileMessage("Delete account API is unavailable.", true);
      return;
    }
    loungeProfileDeleteConfirmBtn.disabled = true;
    try {
      const result = await window.TBRAuth.deleteCurrentUser();
      if (!result || !result.ok) {
        setLoungeProfileMessage((result && result.error) || "Unable to delete account.", true);
        return;
      }
      window.location.replace("./");
    } finally {
      loungeProfileDeleteConfirmBtn.disabled = false;
      setLoungeProfileDeleteModalOpen(false);
    }
  });
}

if (loungeSettingsCloseBtn) {
  loungeSettingsCloseBtn.addEventListener("click", () => {
    setLoungeSettingsModalOpen(false);
  });
}

if (loungeSettingsBackdrop) {
  loungeSettingsBackdrop.addEventListener("click", () => {
    setLoungeSettingsModalOpen(false);
  });
}

if (loungeHelpBackdrop) {
  loungeHelpBackdrop.addEventListener("click", () => {
    setLoungeHelpModalOpen(false);
  });
}

profileMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = profileMenuBtn.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

document.addEventListener("click", (event) => {
  if (!profileMenuEl.contains(event.target)) {
    setMenuOpen(false);
  }
  if (
    loungeProfileModal &&
    !loungeProfileModal.classList.contains("hidden") &&
    loungeProfileMessage &&
    !loungeProfileMessage.classList.contains("hidden") &&
    event.target instanceof Element &&
    event.target.closest("#lounge-profile-modal") &&
    !event.target.closest("#lounge-profile-save-btn") &&
    !event.target.closest("#lounge-profile-message")
  ) {
    clearLoungeProfileMessage();
  }
  if (
    loungeProfileModal &&
    !loungeProfileModal.classList.contains("hidden") &&
    !event.target.closest(".lounge-page-card") &&
    !event.target.closest(".avatar-studio-card") &&
    !event.target.closest("#lounge-profile-delete-modal .chat-confirm-card") &&
    !event.target.closest("#profile-open-link")
  ) {
    setLoungeProfileModalOpen(false);
  }
  if (
    loungeSettingsModal &&
    !loungeSettingsModal.classList.contains("hidden") &&
    !event.target.closest(".lounge-settings-card") &&
    !event.target.closest("#settings-open-link")
  ) {
    setLoungeSettingsModalOpen(false);
  }
  if (
    loungeHelpModal &&
    !loungeHelpModal.classList.contains("hidden") &&
    !event.target.closest(".lounge-help-card") &&
    !event.target.closest("#help-open-link")
  ) {
    setLoungeHelpModalOpen(false);
  }
  if (
    emojiPickerOpen &&
    chatEmojiPicker &&
    chatEmojiToggle &&
    !chatEmojiPicker.contains(event.target) &&
    !chatEmojiToggle.contains(event.target)
  ) {
    setEmojiPickerOpen(false);
  }
  if (!event.target.closest(".chat-message")) {
    closeAllMessageMoreMenus();
    const openWrappers = Array.from(chatMessages.querySelectorAll(".chat-message.reaction-open"));
    openWrappers.forEach((wrapper) => setReactionPopoverOpen(wrapper, false));
  }
  if (plusMenuOpen && chatPlusMenu && chatAttachBtn && !chatPlusMenu.contains(event.target) && !chatAttachBtn.contains(event.target)) {
    setPlusMenuOpen(false);
  }
});

document.addEventListener(
  "focusin",
  (event) => {
    if (
      loungeProfileModal &&
      !loungeProfileModal.classList.contains("hidden") &&
      loungeProfileMessage &&
      !loungeProfileMessage.classList.contains("hidden") &&
      event.target instanceof Element &&
      event.target.closest("#lounge-profile-modal") &&
      !event.target.closest("#lounge-profile-save-btn") &&
      !event.target.closest("#lounge-profile-message")
    ) {
      clearLoungeProfileMessage();
    }
  },
  true
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLoungeHelpModalOpen(false);
    setLoungeSettingsModalOpen(false);
    setLoungeProfileDeleteModalOpen(false);
    setLoungeAvatarStudioOpen(false);
    setLoungeProfileModalOpen(false);
    closeChatMediaPreview();
    closeChatConfirmDialog(false);
    closeChatScheduleDialog();
    setPlusMenuOpen(false);
    closeAllMessageMoreMenus();
    setMenuOpen(false);
    setChatOpen(false);
    clearReplyingMessage();
    if (isOnAir) {
      setOnAirMode(false).catch(() => {
        // Ignore transient close failures.
      });
    }
  }
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin || !event.data || typeof event.data !== "object") {
    return;
  }
  if (event.data.type === "dfs-close-settings-modal") {
    setLoungeSettingsModalOpen(false);
  }
  if (event.data.type === "dfs-close-help-modal") {
    setLoungeHelpModalOpen(false);
  }
});

document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const link = target.closest("a[href]");
    if (!link) {
      return;
    }
    if (link.target && link.target !== "_self") {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    const href = String(link.getAttribute("href") || "").trim();
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) {
      return;
    }
    let destination = null;
    try {
      destination = new URL(href, window.location.href);
    } catch (error) {
      return;
    }
    if (destination.origin !== window.location.origin) {
      return;
    }
    if (/\.html(?:$|[?#])/i.test(destination.pathname) || destination.pathname.endsWith("/")) {
      markInternalNavigationInProgress();
    }
  },
  true
);

chatLauncher.addEventListener("click", (event) => {
  event.stopPropagation();
  setChatOpen(!chatOpen);
});

chatCloseBtn.addEventListener("click", () => {
  setChatOpen(false);
});

if (chatReplyPreviewClose) {
  chatReplyPreviewClose.addEventListener("click", () => {
    clearReplyingMessage();
  });
}

chatEmojiToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  setEmojiPickerOpen(!emojiPickerOpen);
});

chatEmojiPicker.addEventListener("click", (event) => {
  const target = event.target.closest(".chat-emoji-btn");
  if (!target) {
    return;
  }
  const emoji = target.getAttribute("data-emoji") || "";
  if (emoji) {
    insertEmojiIntoChatInput(emoji);
    pushRecentEmoji(emoji);
  }
});

async function submitChatComposer() {
  const text = chatInput.value.trim();
  if (!text && !pendingAttachment) {
    return false;
  }
  if (editingMessageId) {
    const entry = chatEntriesById.get(editingMessageId);
    if (!entry) {
      clearEditingMessageStatus();
      setChatStatus("Message no longer exists.", "error");
      return false;
    }
    if (!canEditChatMessage(entry) || Date.now() > editingMessageExpireAt) {
      clearEditingMessageStatus();
      setChatStatus("Edit window expired (60s).", "warn");
      return false;
    }
    if (pendingAttachment) {
      setChatStatus("Attachments are not supported when editing a message.", "warn");
      return false;
    }
    if (!text || text === String(entry.text || "").trim()) {
      clearEditingMessageStatus();
      chatInput.value = "";
      resizeChatInput();
      removeSessionValue(CHAT_DRAFT_KEY);
      setChatStatus("Edit canceled.", "warn");
      return false;
    }
    chatInput.value = "";
    resizeChatInput();
    removeSessionValue(CHAT_DRAFT_KEY);
    const messageId = editingMessageId;
    clearEditingMessageStatus();
    try {
      await sendChatEdit(messageId, text);
      await pollChat();
      clearChatAttention();
    } catch (error) {
      setChatStatus(error && error.message ? error.message : "Unable to edit message.", "error");
    }
    return true;
  }
  chatInput.value = "";
  resizeChatInput();
  removeSessionValue(CHAT_DRAFT_KEY);
  await submitChatText(text, pendingAttachment);
  clearChatAttention();
  return true;
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await submitChatComposer();
});

quickNoteButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.getAttribute("data-note") || "";
    await submitChatText(text);
    setQuickNotesOpen(false);
  });
});

chatQuickToggle.addEventListener("click", () => {
  setQuickNotesOpen(!quickNotesOpen);
});

chatDrawer.addEventListener("click", () => {
  clearChatAttention();
});

chatMessages.addEventListener("click", async (event) => {
  const openMedia = event.target.closest("[data-chat-media-open]");
  if (openMedia) {
    openChatMediaPreview({
      kind: String(openMedia.getAttribute("data-chat-media-kind") || "image"),
      name: String(openMedia.getAttribute("data-chat-media-name") || "media"),
      dataUrl: String(openMedia.getAttribute("data-chat-media-url") || "")
    });
    return;
  }

  const downloadMedia = event.target.closest("[data-chat-media-download]");
  if (downloadMedia) {
    const name = String(downloadMedia.getAttribute("data-chat-media-name") || "media");
    const url = String(downloadMedia.getAttribute("data-chat-media-url") || "");
    if (url) {
      triggerDataUrlDownload(url, name);
    }
    return;
  }

  const target = event.target.closest("[data-react-message-id][data-react-emoji]");
  const moreTrigger = event.target.closest("[data-chat-more-trigger]");
  if (moreTrigger) {
    event.preventDefault();
    event.stopPropagation();
    const wrapper = moreTrigger.closest(".chat-message");
    if (wrapper) {
      const open = wrapper.classList.contains("more-open");
      setReactionPopoverOpen(wrapper, true);
      closeAllMessageMoreMenus(wrapper);
      clearReactionHoverTimers(wrapper);
      setMessageMoreMenuOpen(wrapper, !open);
    }
    return;
  }

  const clickedMessage = event.target.closest(".chat-message");
  if (
    clickedMessage &&
    !clickedMessage.classList.contains("system") &&
    !event.target.closest(".chat-message-react-popover") &&
    !event.target.closest(".chat-more-menu") &&
    !event.target.closest(".chat-reaction-chip") &&
    !event.target.closest(".chat-reply-block") &&
    !event.target.closest("[data-chat-media-open]") &&
    !event.target.closest("[data-chat-media-download]")
  ) {
    return;
  }

  const replyJump = event.target.closest("[data-chat-reply-jump-id]");
  if (replyJump) {
    const targetId = Number(replyJump.getAttribute("data-chat-reply-jump-id") || 0);
    if (targetId) {
      const targetMessage = chatMessages.querySelector('[data-chat-message-id="' + String(targetId) + '"]');
      if (targetMessage) {
        targetMessage.scrollIntoView({ behavior: "smooth", block: "center" });
        targetMessage.classList.add("chat-search-hit", "active");
        window.setTimeout(() => {
          targetMessage.classList.remove("active");
        }, 1200);
      }
    }
    return;
  }

  const editBtn = event.target.closest("[data-chat-edit]");
  if (editBtn) {
    const messageId = Number(editBtn.getAttribute("data-chat-edit") || 0);
    const entry = chatEntriesById.get(messageId);
    if (!entry) {
      return;
    }
    startEditingMessage(entry);
    const wrapper = editBtn.closest(".chat-message");
    if (wrapper) {
      setMessageMoreMenuOpen(wrapper, false);
    }
    return;
  }

  const replyBtn = event.target.closest("[data-chat-reply]");
  if (replyBtn) {
    const messageId = Number(replyBtn.getAttribute("data-chat-reply") || 0);
    const entry = chatEntriesById.get(messageId);
    if (!entry) {
      return;
    }
    startReplyingMessage(entry);
    const wrapper = replyBtn.closest(".chat-message");
    if (wrapper) {
      setMessageMoreMenuOpen(wrapper, false);
    }
    return;
  }

  const seenBtn = event.target.closest("[data-chat-seen]");
  if (seenBtn) {
    event.preventDefault();
    event.stopPropagation();
    const messageId = String(seenBtn.getAttribute("data-chat-seen") || "");
    const wrapper = seenBtn.closest(".chat-message");
    if (!wrapper || !messageId) {
      return;
    }
    const panel = wrapper.querySelector('[data-chat-seen-panel="' + messageId + '"]');
    if (panel) {
      const numericMessageId = Number(messageId || 0);
      const nextOpen = !panel.classList.contains("is-open");
      if (nextOpen) {
        seenPanelOpenMessageId = numericMessageId;
        clearReactionHoverTimers(wrapper);
        setReactionPopoverOpen(wrapper, true);
        setMessageMoreMenuOpen(wrapper, true);
      } else if (seenPanelOpenMessageId === numericMessageId) {
        seenPanelOpenMessageId = 0;
      }
      panel.classList.toggle("is-open", nextOpen);
    }
    return;
  }

  const deleteBtn = event.target.closest("[data-chat-delete]");
  if (deleteBtn) {
    const messageId = Number(deleteBtn.getAttribute("data-chat-delete") || 0);
    if (!messageId) {
      return;
    }
    const confirmed = await openChatConfirmDialog(
      "You are about to delete this message for everyone in chat. This cannot be undone.",
      "Delete Message?",
      "Delete"
    );
    if (!confirmed) {
      return;
    }
    try {
      const response = await sendChatDelete(messageId, false);
      applyMessageDelete(Number((response && response.messageId) || messageId));
      pollChat().catch(() => {
        // Keep optimistic delete applied even if sync poll transiently fails.
      });
      closeAllMessageMoreMenus();
    } catch (error) {
      setChatStatus(error && error.message ? error.message : "Unable to delete message.", "error");
    }
    return;
  }

  const hostDeleteBtn = event.target.closest("[data-chat-host-delete]");
  if (hostDeleteBtn) {
    const messageId = Number(hostDeleteBtn.getAttribute("data-chat-host-delete") || 0);
    if (!messageId) {
      return;
    }
    const confirmed = await openChatConfirmDialog(
      "You are about to remove this message for everyone in chat. This cannot be undone.",
      "Remove Message?",
      "Remove"
    );
    if (!confirmed) {
      return;
    }
    try {
      const response = await sendChatDelete(messageId, true);
      applyMessageDelete(Number((response && response.messageId) || messageId));
      pollChat().catch(() => {
        // Keep optimistic delete applied even if sync poll transiently fails.
      });
      closeAllMessageMoreMenus();
    } catch (error) {
      setChatStatus(error && error.message ? error.message : "Unable to remove message.", "error");
    }
    return;
  }

  if (!target) {
    return;
  }
  const messageId = Number(target.getAttribute("data-react-message-id") || 0);
  const emoji = String(target.getAttribute("data-react-emoji") || "").trim();
  if (!messageId || !emoji) {
    return;
  }
  await applyReactionChoice(messageId, emoji);
});

chatMessages.addEventListener("contextmenu", (event) => {
  const wrapper = event.target.closest(".chat-message");
  if (!wrapper || wrapper.classList.contains("system")) {
    return;
  }
  event.preventDefault();
  setReactionPopoverOpen(wrapper, true);
  closeAllMessageMoreMenus(wrapper);
  setMessageMoreMenuOpen(wrapper, true);
});

chatMessages.addEventListener("pointerdown", (event) => {
  const target = event.target.closest("[data-react-message-id][data-react-emoji]");
  if (!target) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  const messageId = Number(target.getAttribute("data-react-message-id") || 0);
  const emoji = String(target.getAttribute("data-react-emoji") || "").trim();
  if (!messageId || !emoji) {
    return;
  }
  applyReactionChoice(messageId, emoji);
});

chatInput.addEventListener("focus", () => {
  acknowledgeChatComposerInteraction();
  setEmojiPickerOpen(false);
  handleComposerTypingState(chatInput.value);
});

chatInput.addEventListener("pointerdown", () => {
  acknowledgeChatComposerInteraction();
});

chatInput.addEventListener("click", () => {
  acknowledgeChatComposerInteraction();
});

chatInput.addEventListener("mousedown", () => {
  acknowledgeChatComposerInteraction();
});

chatInput.addEventListener("touchstart", () => {
  acknowledgeChatComposerInteraction();
});

if (chatForm) {
  chatForm.addEventListener("focusin", () => {
    acknowledgeChatComposerInteraction();
  });
  chatForm.addEventListener("pointerdown", () => {
    acknowledgeChatComposerInteraction();
  });
}

chatInput.addEventListener("input", () => {
  acknowledgeChatComposerInteraction();
  writeSessionValue(CHAT_DRAFT_KEY, chatInput.value);
  resizeChatInput();
  handleComposerTypingState(chatInput.value);
});

chatInput.addEventListener("paste", (event) => {
  handleChatComposerPaste(event).catch(() => {
    setChatStatus("Unable to paste into chat right now.", "error");
  });
});

chatInput.addEventListener("blur", () => {
  handleComposerTypingState("");
});

chatInput.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter" || event.shiftKey) {
    return;
  }
  event.preventDefault();
  await submitChatComposer();
});

chatSearchInput.addEventListener("input", () => {
  runChatSearch(chatSearchInput.value);
});

chatSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (!searchResults.length) {
      runChatSearch(chatSearchInput.value);
      return;
    }
    jumpToNextSearchResult();
  }
});

chatSearchNextBtn.addEventListener("click", () => {
  if (!searchResults.length) {
    runChatSearch(chatSearchInput.value);
    return;
  }
  jumpToNextSearchResult();
});

chatAttachBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  setPlusMenuOpen(!plusMenuOpen);
});

if (chatPlusAttachBtn) {
  chatPlusAttachBtn.addEventListener("click", () => {
    setPlusMenuOpen(false);
    chatAttachInput.click();
  });
}

if (chatPlusScheduleBtn) {
  chatPlusScheduleBtn.addEventListener("click", () => {
    setPlusMenuOpen(false);
    openChatScheduleDialog();
  });
}

chatAttachInput.addEventListener("change", async () => {
  const file = chatAttachInput.files && chatAttachInput.files[0] ? chatAttachInput.files[0] : null;
  if (!file) {
    return;
  }
  await stageAttachmentFromFile(file, "Preparing attachment...");
});

if (chatScheduleBackdrop) {
  chatScheduleBackdrop.addEventListener("click", () => {
    closeChatScheduleDialog();
  });
}

if (chatScheduleCancelBtn) {
  chatScheduleCancelBtn.addEventListener("click", () => {
    closeChatScheduleDialog();
  });
}

if (chatScheduleOkBtn) {
  chatScheduleOkBtn.addEventListener("click", async () => {
    await scheduleCurrentComposerSend();
  });
}

if (chatSchedulePresetSelect) {
  chatSchedulePresetSelect.addEventListener("change", () => {
    const custom = String(chatSchedulePresetSelect.value || "") === "custom";
    setScheduleCustomVisible(custom);
    setChatScheduleWarning("");
    if (custom && chatScheduleMinutesInput) {
      chatScheduleMinutesInput.focus();
      chatScheduleMinutesInput.select();
    }
  });
}

if (chatScheduleMinutesInput) {
  chatScheduleMinutesInput.addEventListener("input", () => {
    const minutes = Number(chatScheduleMinutesInput.value || 0);
    if (minutes > 30) {
      setChatScheduleWarning("Custom times are set to 30 minutes only.");
      return;
    }
    setChatScheduleWarning("");
  });
  chatScheduleMinutesInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await scheduleCurrentComposerSend();
    }
  });
}

if (chatScheduleMessageInput) {
  chatScheduleMessageInput.addEventListener("input", () => {
    resizeScheduleMessageInput();
  });
  chatScheduleMessageInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      await scheduleCurrentComposerSend();
    }
  });
}

chatAttachRemoveBtn.addEventListener("click", () => {
  clearPendingAttachment();
  updateChatStatusFromState();
});

chatAttachCancelBtn.addEventListener("click", () => {
  if (attachmentUploadXhr) {
    attachmentUploadXhr.abort();
  }
});

chatAttachRetryBtn.addEventListener("click", async () => {
  if (!pendingAttachmentRetry) {
    return;
  }
  const { text, attachment, replyTo } = pendingAttachmentRetry;
  await submitChatText(String(text || ""), attachment || null, replyTo || null);
});

chatMediaModalBackdrop.addEventListener("click", () => {
  closeChatMediaPreview();
});

chatMediaModalClose.addEventListener("click", () => {
  closeChatMediaPreview();
});

chatMediaModalDownload.addEventListener("click", () => {
  if (!chatMediaPreviewPayload || !chatMediaPreviewPayload.dataUrl) {
    return;
  }
  triggerDataUrlDownload(chatMediaPreviewPayload.dataUrl, chatMediaPreviewPayload.name || "media");
});

if (chatConfirmBackdrop) {
  chatConfirmBackdrop.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeChatConfirmDialog(false);
  });
}

if (chatConfirmCancelBtn) {
  chatConfirmCancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeChatConfirmDialog(false);
  });
}

if (chatConfirmOkBtn) {
  chatConfirmOkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeChatConfirmDialog(true);
  });
}

if (mediaDebugClearBtn) {
  mediaDebugClearBtn.addEventListener("click", () => {
    clearMediaDebugLog();
    pushMediaDebug("debug.cleared");
  });
}

cameraEnabledToggle.addEventListener("change", async () => {
  if (cameraEnabledToggle.checked) {
    const toggled = setLocalCameraEnabled(true);
    if (!toggled) {
      const started = await startCamera();
      if (!started) {
        cameraEnabledToggle.checked = false;
      }
    }
    return;
  }
  // Turn camera fully off at OS/device level (hardware indicator off).
  stopCameraStream();
  setCameraStatus("Camera is off.");
  if (videoRoomEnabled) {
    setVideoRoomStatus("Camera off. Turn it on to rejoin video room.", true);
  }
});

onAirCameraPauseBtn.addEventListener("click", () => {
  const track = cameraStream ? cameraStream.getVideoTracks()[0] : null;
  if (!track) {
    setCameraStatus("Start camera first to pause/resume.");
    updateOnAirCameraPauseUI();
    return;
  }
  setLocalCameraEnabled(!track.enabled);
  syncOnAirVideoViews();
});

cameraDeviceSelect.addEventListener("change", async () => {
  studioSettings = window.TBRAuth.saveStudioSettings({
    preferredCameraId: cameraDeviceSelect.value || ""
  });
  if (cameraStream) {
    await startCamera();
  }
});

cameraBlurToggle.addEventListener("change", async () => {
  studioSettings = window.TBRAuth.saveStudioSettings(
    cameraBlurToggle.checked
      ? {
          cameraBackgroundMode: "blur",
          cameraBackgroundBlurEnabled: true
        }
      : {
          cameraBackgroundMode: getCameraBackgroundMode() === "blur" ? "off" : getCameraBackgroundMode(),
          cameraBackgroundBlurEnabled: false
        }
  );
  if (cameraBackgroundImageToggle && cameraBlurToggle.checked) {
    cameraBackgroundImageToggle.checked = false;
  }
  if (rawCameraStream) {
    await applyCameraOutputStream();
    setCameraStatus(
      cameraBlurToggle.checked
        ? "Camera is live with background blur."
        : "Camera is live."
    );
  }
});

if (cameraBackgroundImageToggle) {
  cameraBackgroundImageToggle.addEventListener("change", async () => {
    const hasImage = !!String(studioSettings.cameraBackgroundImageDataUrl || "").trim();
    if (cameraBackgroundImageToggle.checked && !hasImage) {
      cameraBackgroundImageToggle.checked = false;
      setCameraStatus("Save a background image in Settings first.", true);
      return;
    }
    studioSettings = window.TBRAuth.saveStudioSettings(
      cameraBackgroundImageToggle.checked
        ? {
            cameraBackgroundMode: "image",
            cameraBackgroundBlurEnabled: false
          }
        : {
            cameraBackgroundMode: getCameraBackgroundMode() === "image" ? "off" : getCameraBackgroundMode(),
            cameraBackgroundBlurEnabled: getCameraBackgroundMode() === "blur"
          }
    );
    cameraBlurToggle.checked = false;
    if (rawCameraStream) {
      await applyCameraOutputStream();
      setCameraStatus(
        cameraBackgroundImageToggle.checked
          ? "Camera is live with your background image."
          : "Camera is live."
      );
    }
  });
}

micEnabledToggle.addEventListener("change", async () => {
  if (micEnabledToggle.checked) {
    if (micStream) {
      setMicStandbyEnabled(true);
      return;
    }
    await startMic();
    setMicActiveUI(isMicUiActive());
    return;
  }
  setMicStandbyEnabled(false);
});

micMuteBtn.addEventListener("change", () => {
  if (!micStream || studioSettings.pushToTalkEnabled) {
    setMicActiveUI(isMicUiActive());
    return;
  }
  setMicMuted(!!micMuteBtn.checked);
});

if (preflightMicCheckBtn) {
  preflightMicCheckBtn.addEventListener("click", () => {
    runPreflightMicCheck().catch(() => {
      preflightMicAssessment = {
        state: "blocked",
        summary: "Mic check failed. Try again."
      };
      preflightMicCheckInProgress = false;
      preflightMicCheckBtn.disabled = false;
      preflightMicCheckBtn.textContent = "Run Mic Check";
      updatePreflightSummary();
    });
  });
}

pushToTalkToggle.addEventListener("change", () => {
  studioSettings = window.TBRAuth.saveStudioSettings({
    pushToTalkEnabled: !!pushToTalkToggle.checked
  });
  if (studioSettings.pushToTalkEnabled && micStream) {
    setMicMuted(true);
    setMicStatus("Push-to-talk enabled. Hold Space or button to speak.");
  }
  if (!studioSettings.pushToTalkEnabled) {
    pttTalking = false;
    if (micStream) {
      setMicMuted(false);
      setMicStatus("Push-to-talk disabled. Mic is live.");
    }
  }
  setMicActiveUI(isMicUiActive());
});

pttHoldBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  beginPushToTalk();
});

pttHoldBtn.addEventListener("pointerup", () => {
  endPushToTalk();
});

pttHoldBtn.addEventListener("pointerleave", () => {
  endPushToTalk();
});

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") {
    return;
  }
  const target = event.target;
  const isTypingTarget =
    target instanceof HTMLElement &&
    (target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      target.isContentEditable);
  if (isTypingTarget) {
    return;
  }
  if (canUsePushToTalk()) {
    event.preventDefault();
    beginPushToTalk();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space" && pttTalking) {
    event.preventDefault();
    endPushToTalk();
  }
});

airToggleBtn.addEventListener("click", async () => {
  await setOnAirMode(!isOnAir);
});

onAirCloseBtn.addEventListener("click", async () => {
  await setOnAirMode(false);
});

onAirOverlay.addEventListener("click", (event) => {
  if (event.target === onAirOverlay && isOnAir) {
    setOnAirMode(false).catch(() => {
      // Ignore transient close failures.
    });
  }
});

onAirMicEnabledToggle.addEventListener("change", async () => {
  if (onAirMicEnabledToggle.checked) {
    if (micStream) {
      setMicStandbyEnabled(true);
      return;
    }
    await startMic();
    setMicActiveUI(isMicUiActive());
    return;
  }
  setMicStandbyEnabled(false);
});

onAirMicMuteBtn.addEventListener("change", () => {
  if (!micStream || studioSettings.pushToTalkEnabled) {
    setMicActiveUI(isMicUiActive());
    return;
  }
  setMicMuted(!!onAirMicMuteBtn.checked);
});

onAirMicGainSlider.addEventListener("input", () => {
  applyMicGain(onAirMicGainSlider.value, true);
  setAudioRackStatus("Mic gain set to " + getMicGainPercent() + "%.", false);
});

onAirLiveMicSlider?.addEventListener("input", () => {
  applyMicGain(onAirLiveMicSlider.value, true);
  setOnAirMicStatus("Live mic level set to " + getMicGainPercent() + "%.", false);
});

micGainSlider.addEventListener("input", () => {
  applyMicGain(micGainSlider.value, true);
  setAudioRackStatus("Mic gain set to " + getMicGainPercent() + "%.", false);
});

onAirLimiterToggle.addEventListener("change", () => {
  applyLimiterToggle(onAirLimiterToggle.checked, true);
});

limiterToggle.addEventListener("change", () => {
  applyLimiterToggle(limiterToggle.checked, true);
});

onAirNoiseToggle.addEventListener("change", () => {
  applyNoiseReductionToggle(onAirNoiseToggle.checked, true).catch(() => {
    setAudioRackStatus("Unable to apply noise reduction right now.", true);
  });
});

noiseToggle.addEventListener("change", () => {
  applyNoiseReductionToggle(noiseToggle.checked, true).catch(() => {
    setAudioRackStatus("Unable to apply noise reduction right now.", true);
  });
});

onAirRecordBtn.addEventListener("click", async () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control recording.", true);
    return;
  }
  if (!canCurrentUserControlRecording()) {
    setHostStatus("Recording control is restricted by admin.", true);
    return;
  }
  if (recordingStartInProgress || recordingSplitInProgress) {
    return;
  }
  if (!isRecording) {
    try {
      updateMediaActionsUI();
      await startHostRecordingFlow();
      updateMediaActionsUI();
    } catch (error) {
      clearRecordingAutomationTimers();
      recordingStartInProgress = false;
      setRecordingState(false, false, session.username);
      onAirMediaStatus.textContent = error && error.message ? error.message : "Unable to start recording.";
    }
  } else {
    await stopHostRecordingWithReason("Recording stopped by " + (sessionIdentity.displayName || session.username) + ".");
  }
});

onAirPlaybackBtn.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Playback is host-only.", true);
    return;
  }
  if (isRecording) {
    onAirMediaStatus.textContent = "Stop recording before playback.";
    return;
  }
  if (!recordingReady) {
    onAirMediaStatus.textContent = "Playback is available after a completed recording.";
    return;
  }
  if (RECORDING_DEMO_MODE) {
    onAirMediaStatus.textContent = "Demo mode: playback preview is disabled until real recording is enabled.";
    return;
  }
  if (!hasLocalRecordingAsset()) {
    onAirMediaStatus.textContent = "No local playback file found yet for this browser.";
    return;
  }
  setRecordingWorkflowState("review");
  syncReviewPanelUI();
  const preferredKind = getPreferredOnAirReviewKind();
  if (preferredKind) {
    openOnAirReviewPlayback(preferredKind);
  }
  onAirMediaStatus.textContent = "Review cut opened in front of the control room.";
});

onAirDownloadBtn.addEventListener("click", () => {
  if (!canCurrentUserDownloadRecording()) {
    onAirMediaStatus.textContent = "Download is restricted by admin.";
    return;
  }
  if (isRecording) {
    onAirMediaStatus.textContent = "Stop recording before download.";
    return;
  }
  if (!recordingReady) {
    onAirMediaStatus.textContent = "Download is available after recording is stopped.";
    return;
  }
  if (RECORDING_DEMO_MODE) {
    onAirMediaStatus.textContent = "Demo mode: download is disabled until real recording is enabled.";
    return;
  }
  if (!hasLocalRecordingAsset()) {
    onAirMediaStatus.textContent = "No local download file exists on this browser yet.";
    return;
  }
  setRecordingWorkflowState("export");
  syncReviewPanelUI();
  onAirReviewPanel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  onAirMediaStatus.textContent = "Export options are ready in the review panel.";
});

onAirReviewLaunchBtn?.addEventListener("click", () => {
  if (!hasLocalRecordingAsset()) {
    return;
  }
  setRecordingWorkflowState("review");
  syncReviewPanelUI();
  const preferredKind = getPreferredOnAirReviewKind();
  if (preferredKind) {
    openOnAirReviewPlayback(preferredKind);
    onAirMediaStatus.textContent = "Review cut opened.";
  }
});

onAirExportVideoBtn?.addEventListener("click", () => {
  if (!recordingMediaUrl) {
    return;
  }
  const extension = getVideoExportExtension();
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  downloadBlobAsset(recordingMediaUrl, "doggfather-show-video-" + stamp + "." + extension);
  onAirMediaStatus.textContent = "Video show download started.";
});

onAirExportAudioBtn?.addEventListener("click", () => {
  if (!recordingAudioUrl) {
    return;
  }
  const extension = getAudioExportExtension();
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  downloadBlobAsset(recordingAudioUrl, "doggfather-show-audio-" + stamp + "." + extension);
  onAirMediaStatus.textContent = "Audio-only download started.";
});

onAirMusicTrackSelect.addEventListener("change", () => {
  updateOnAirMusicCuesUI();
});

onAirMusicSlotSelect.addEventListener("change", () => {
  updateOnAirMusicCuesUI();
});

onAirMusicUploadBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can upload music cues.", true);
    return;
  }
  onAirMusicUploadInput?.click();
});

onAirLibraryOpenBtn?.addEventListener("click", async () => {
  setOnAirLibraryOpen(true);
  await setOnAirLibraryView(onAirLibraryView || "music", true);
});

onAirLibrarySideTab?.addEventListener("click", async () => {
  setOnAirLibraryOpen(true);
  await setOnAirLibraryView(onAirLibraryView || "music", true);
});

onAirAudioSideTab?.addEventListener("click", () => {
  setOnAirAudioOpen(true);
});

onAirAudioCloseBtn?.addEventListener("click", () => {
  setOnAirAudioOpen(false);
});

onAirAudioFadeInBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    return;
  }
  if (!getActiveOnAirMusicCueTargets().length) {
    onAirMediaStatus.textContent = "Start a cue before using Fade In.";
    return;
  }
  startOnAirMusicFade(getOnAirMusicEffectiveVolume(), getRecordingFadeInDurationMs()).then(() => {
    onAirMediaStatus.textContent = "Music cue faded in.";
  }).catch(() => {
    onAirMediaStatus.textContent = "Unable to fade the music cue in right now.";
  });
});

onAirAudioFadeOutBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    return;
  }
  if (!getActiveOnAirMusicCueTargets().length) {
    onAirMediaStatus.textContent = "Start a cue before using Fade Out.";
    return;
  }
  startOnAirMusicFade(0, getRecordingFadeOutDurationMs(), {
    after() {
      stopOnAirMusicCue().catch(() => {
        // Ignore stop cleanup issues.
      });
    }
  }).then(() => {
    onAirMediaStatus.textContent = "Music cue faded out.";
  }).catch(() => {
    onAirMediaStatus.textContent = "Unable to fade the music cue out right now.";
  });
});

onAirAudioAutoFadeInToggle?.addEventListener("change", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    onAirAudioAutoFadeInToggle.checked = onAirMusicAutoFadeInEnabled;
    return;
  }
  onAirMusicAutoFadeInEnabled = !!onAirAudioAutoFadeInToggle.checked;
  queueOnAirAudioControlsRefresh();
  onAirMediaStatus.textContent = "Auto Fade In " + (onAirMusicAutoFadeInEnabled ? "enabled." : "disabled.");
});

onAirAudioAutoFadeOutToggle?.addEventListener("change", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    onAirAudioAutoFadeOutToggle.checked = onAirMusicAutoFadeOutEnabled;
    return;
  }
  onAirMusicAutoFadeOutEnabled = !!onAirAudioAutoFadeOutToggle.checked;
  queueOnAirAudioControlsRefresh();
  onAirMediaStatus.textContent = "Auto Fade Out " + (onAirMusicAutoFadeOutEnabled ? "enabled." : "disabled.");
});

onAirAudioResetMixBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    return;
  }
  onAirMusicAutoFadeInEnabled = false;
  onAirMusicAutoFadeOutEnabled = false;
  onAirMusicDuckVoiceEnabled = false;
  onAirMusicPrimaryVolume = 1;
  onAirAuxMusicCues.forEach((cue) => {
    if (cue) {
      cue.volumeMultiplier = 1;
    }
  });
  setOnAirMusicVolumeNormalized(0.62, { apply: true });
  onAirActiveCueRenderSignature = "";
  queueOnAirAudioControlsRefresh();
  onAirMediaStatus.textContent = "Audio controls reset to the default mix.";
});

onAirAudioStopAllBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    return;
  }
  stopOnAirMusicCue().then(() => {
    onAirMediaStatus.textContent = "All active cues stopped.";
  }).catch(() => {
    onAirMediaStatus.textContent = "Unable to stop all cues right now.";
  });
});

onAirAudioDuckVoiceToggle?.addEventListener("change", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can control live music.", true);
    onAirAudioDuckVoiceToggle.checked = onAirMusicDuckVoiceEnabled;
    return;
  }
  onAirMusicDuckVoiceEnabled = !!onAirAudioDuckVoiceToggle.checked;
  queueOnAirAudioControlsRefresh();
  applyOnAirMusicOutputVolume(true);
  onAirMediaStatus.textContent = "Duck Voice " + (onAirMusicDuckVoiceEnabled ? "enabled." : "disabled.");
});

onAirAudioVolumeSlider?.addEventListener("input", (event) => {
  if (!isCurrentUserHost()) {
    queueOnAirAudioControlsRefresh();
    return;
  }
  handleOnAirVolumeSliderInput(event.target.value);
});
onAirAudioVolumeSlider?.addEventListener("change", (event) => {
  if (!isCurrentUserHost()) {
    queueOnAirAudioControlsRefresh();
    return;
  }
  handleOnAirVolumeSliderInput(event.target.value);
});

onAirGuestVolumeSlider?.addEventListener("input", (event) => {
  if (!isCurrentUserHost()) {
    updateOnAirGuestAudioUI();
    return;
  }
  applyOnAirGuestVolume(event.target.value);
});

onAirLibraryCloseBtn?.addEventListener("click", () => {
  setOnAirLibraryOpen(false);
});

onAirLibraryPreviewCloseBtn?.addEventListener("click", () => {
  closeOnAirLibraryPreview();
});

onAirLibraryPreviewPlayBtn?.addEventListener("click", async () => {
  if (!onAirLibraryPreviewAudio || !onAirLibraryPreviewAudio.src) {
    return;
  }
  if (onAirLibraryPreviewAudio.paused) {
    await onAirLibraryPreviewAudio.play().catch(() => {});
  } else {
    onAirLibraryPreviewAudio.pause();
  }
  updateOnAirLibraryPreviewPlayState();
});

onAirLibraryPreviewMuteBtn?.addEventListener("click", () => {
  if (!onAirLibraryPreviewAudio || !onAirLibraryPreviewAudio.src) {
    return;
  }
  const nextMuted = !(onAirLibraryPreviewAudio.muted || Number(onAirLibraryPreviewAudio.volume || 0) <= 0.001);
  onAirLibraryPreviewAudio.muted = nextMuted;
  updateOnAirLibraryPreviewMuteState();
});

onAirLibraryPreviewAudio?.addEventListener("loadedmetadata", () => {
  pushMusicDiagnostic("preview_loadedmetadata", "duration=" + String(onAirLibraryPreviewAudio.duration || 0));
  updateOnAirLibraryPreviewTime();
  updateOnAirLibraryPreviewPlayState();
});

onAirLibraryPreviewAudio?.addEventListener("timeupdate", () => {
  updateOnAirLibraryPreviewTime();
});

onAirLibraryPreviewAudio?.addEventListener("play", () => {
  pushMusicDiagnostic("preview_play_event", "currentTime=" + String(onAirLibraryPreviewAudio.currentTime || 0));
  updateOnAirLibraryPreviewPlayState();
});

onAirLibraryPreviewAudio?.addEventListener("pause", () => {
  pushMusicDiagnostic("preview_pause_event", "currentTime=" + String(onAirLibraryPreviewAudio.currentTime || 0));
  updateOnAirLibraryPreviewPlayState();
});

onAirLibraryPreviewAudio?.addEventListener("ended", () => {
  pushMusicDiagnostic("preview_ended", "duration=" + String(onAirLibraryPreviewAudio.duration || 0));
  updateOnAirLibraryPreviewPlayState();
  updateOnAirLibraryPreviewTime();
});

onAirLibraryPreviewAudio?.addEventListener("error", () => {
  const mediaError = onAirLibraryPreviewAudio.error;
  pushMusicDiagnostic(
    "preview_error",
    "code=" + String(mediaError && mediaError.code ? mediaError.code : "unknown")
  );
});

onAirMusicPlayer?.addEventListener("play", () => {
  pushMusicDiagnostic("cue_play_event", "track=" + String(onAirMusicPlayer.dataset.trackId || ""));
});

onAirMusicPlayer?.addEventListener("error", () => {
  const mediaError = onAirMusicPlayer.error;
  pushMusicDiagnostic(
    "cue_error",
    "track=" + String(onAirMusicPlayer.dataset.trackId || "") + " | code=" + String(mediaError && mediaError.code ? mediaError.code : "unknown")
  );
});

if (onAirLibraryPreviewAudio) {
  onAirLibraryPreviewAudio.volume = 1;
}
updateOnAirLibraryPreviewMuteState();
updateOnAirLibraryPreviewPlayState();
updateOnAirLibraryPreviewTime();

document.querySelectorAll("[data-library-view]").forEach((button) => {
  button.addEventListener("click", async () => {
    await setOnAirLibraryView(String(button.dataset.libraryView || "music"), true);
  });
});

onAirMusicUploadInput?.addEventListener("change", async () => {
  const file = Array.from(onAirMusicUploadInput.files || [])[0];
  if (!file) {
    return;
  }
  const trackRecord = {
    id: "track_" + Date.now(),
    name: file.name,
    mimeType: file.type || "audio/mpeg",
    size: file.size,
    createdAt: Date.now(),
    file
  };
  let sharedUploadError = "";
  try {
    let uploadedToShared = false;
    if (window.TBRAuth && typeof window.TBRAuth.requestMediaUpload === "function" && typeof window.TBRAuth.completeMediaUpload === "function") {
      try {
        const uploadTicket = await window.TBRAuth.requestMediaUpload({
          libraryKind: "music",
          assetRole: "cue-track",
          title: file.name.replace(/\.[^.]+$/, ""),
          filename: file.name,
          mimeType: file.type || "audio/mpeg",
          byteSize: file.size
        });
        if (!uploadTicket || !uploadTicket.ok) {
          throw new Error((uploadTicket && uploadTicket.error) || "Unable to request shared upload ticket.");
        }
        if (uploadTicket && uploadTicket.ok && uploadTicket.asset) {
          let uploadResult = null;
          if (typeof window.TBRAuth.uploadMediaBytes === "function") {
            uploadResult = await window.TBRAuth.uploadMediaBytes(uploadTicket.asset.id, file);
            if (!uploadResult || !uploadResult.ok) {
              throw new Error((uploadResult && uploadResult.error) || "Shared upload failed.");
            }
          } else {
            if (!uploadTicket.uploadUrl) {
              throw new Error("Shared upload URL was not returned.");
            }
            const uploadResponse = await fetch(uploadTicket.uploadUrl, {
              method: uploadTicket.uploadMethod || "PUT",
              headers: uploadTicket.uploadHeaders || { "Content-Type": file.type || "application/octet-stream" },
              body: file
            });
            if (!uploadResponse.ok) {
              throw new Error("Shared upload failed with status " + uploadResponse.status + ".");
            }
          }
          const completed = await window.TBRAuth.completeMediaUpload(uploadTicket.asset.id, {
            byteSize: file.size,
            title: file.name.replace(/\.[^.]+$/, "")
          });
          if (!completed || !completed.ok) {
            throw new Error((completed && completed.error) || "Shared upload metadata could not be finalized.");
          }
          if (completed && completed.ok && completed.asset) {
            uploadedToShared = true;
            await refreshOnAirMusicLibrary();
            onAirMusicTrackSelect.value = completed.asset.id;
            onAirMediaStatus.textContent = "Track uploaded to the shared Music Library.";
          }
        }
      } catch (sharedError) {
        sharedUploadError = sharedError && sharedError.message ? sharedError.message : "Shared upload failed.";
      }
    }
  if (!uploadedToShared) {
      await putMusicLibraryTrack(trackRecord);
      await refreshOnAirMusicLibrary();
      const latest = onAirMusicLibrary[onAirMusicLibrary.length - 1];
      if (latest) {
        onAirMusicTrackSelect.value = latest.id;
      }
      onAirMediaStatus.textContent = sharedUploadError
        ? sharedUploadError + " Saved only in this browser for testing."
        : "Track uploaded to the browser music library.";
    }
  } catch (error) {
    onAirMediaStatus.textContent = error && error.message ? error.message : "Unable to save this track right now.";
  } finally {
    onAirMusicUploadInput.value = "";
    updateOnAirMusicCuesUI();
  }
});

onAirMusicQueueBtn.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can queue music cues.", true);
    return;
  }
  const trackValue = getSelectedOnAirMusicTrack();
  const trackLabel = getSelectedOnAirMusicTrackLabel();
  if (!trackValue || !trackLabel) {
    onAirMediaStatus.textContent = "No track is available yet. Upload support comes in the storage phase.";
    updateOnAirMusicCuesUI();
    return;
  }
  const slotValue = getSelectedOnAirMusicSlot();
  const slotLabel = getSelectedOnAirMusicSlotLabel();
  onAirMusicQueue.push({
    id: Date.now(),
    slot: slotValue,
    slotLabel,
    track: trackValue,
    trackLabel
  });
  onAirMediaStatus.textContent = "Queued " + slotLabel + ": " + trackLabel + ".";
  updateOnAirMusicCuesUI();
});

onAirMusicPlayBtn?.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can play music cues.", true);
    return;
  }
  const trackId = getSelectedOnAirMusicTrack();
  const trackLabel = getSelectedOnAirMusicTrackLabel();
  if (!trackId || !trackLabel) {
    onAirMediaStatus.textContent = "Choose a track first.";
    updateOnAirMusicCuesUI();
    return;
  }
  getMusicLibraryTrackById(trackId)
    .then((trackRecord) => {
      if (!trackRecord) {
        onAirMediaStatus.textContent = "Selected track could not be loaded from the music library.";
        updateOnAirMusicCuesUI();
        return null;
      }
      return playOnAirMusicCue(trackRecord, getSelectedOnAirMusicSlotLabel(), { allowLayer: true });
    })
    .catch(() => {
      onAirMediaStatus.textContent = "Unable to start the selected music cue right now.";
    })
    .finally(() => {
      updateOnAirMusicCuesUI();
      queueOnAirAudioControlsRefresh();
    });
});

onAirMusicStopBtn?.addEventListener("click", () => {
  const stopPromise = onAirMusicAutoFadeOutEnabled && getActiveOnAirMusicCueTargets().length
    ? startOnAirMusicFade(0, getRecordingFadeOutDurationMs(), {
        after() {
          stopOnAirMusicCue().catch(() => {
            // Ignore stop cleanup issues.
          });
        }
      })
    : stopOnAirMusicCue();
  stopPromise.then(() => {
    onAirMediaStatus.textContent = onAirMusicAutoFadeOutEnabled ? "Music cue faded out and stopped." : "Music cue stopped.";
  }).catch(() => {
    onAirMediaStatus.textContent = "Unable to stop the music cue right now.";
  });
});

onAirMusicPlayer?.addEventListener("ended", () => {
  const continueQueue = Array.isArray(onAirMusicQueue) && onAirMusicQueue.length > 0 && isCurrentUserHost();
  stopPrimaryOnAirMusicCue()
    .then(() => {
      if (!continueQueue) {
        return;
      }
      return playNextQueuedOnAirMusicCue().catch(() => {
        onAirMediaStatus.textContent = "The next queued music cue could not be started.";
      });
    })
    .catch(() => {
      // Ignore end cleanup errors.
    })
    .finally(() => {
      updateOnAirMusicCuesUI();
    });
});

onAirMusicClearBtn.addEventListener("click", () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can clear queued cues.", true);
    return;
  }
  onAirMusicQueue = [];
  onAirMediaStatus.textContent = "Music cue queue cleared.";
  updateOnAirMusicCuesUI();
});

hostClaimBtn.addEventListener("click", async () => {
  if (!canCurrentUserHost() && !isCurrentUserHost()) {
    setHostStatus("Host control is restricted by admin.", true);
    return;
  }
  if (isCurrentUserHost()) {
    try {
      const data = await releaseHost();
      if (!data.hostUsername) {
        setHostStatus("Host control released. Any On-Air user can claim host.", false);
        await sendChat("Host released by " + (sessionIdentity.displayName || session.username) + ".").catch(() => {
          // Ignore chat post errors.
        });
      } else {
        setHostStatus("Host is still assigned to " + getDisplayNameForUsername(data.hostUsername) + ".", true);
      }
      await pollPresence().catch(() => {
        // Ignore refresh errors.
      });
    } catch (error) {
      if (error && error.data && error.data.error) {
        setHostStatus(error.data.error, true);
      } else {
        setHostStatus("Unable to release host control right now.", true);
      }
    }
    return;
  }

  try {
    const data = await claimHost();
    if (data.hostUsername === session.username) {
      setHostStatus("You are now the host.", false);
      await sendChat("Host assigned: " + (sessionIdentity.displayName || session.username) + ".").catch(() => {
        // Ignore chat post errors.
      });
    }
  } catch (error) {
    if (error && error.status === 404) {
      setHostStatus("Host API not found on realtime server. Restart/deploy latest realtime server.", true);
      return;
    }
    if (error && error.status === 409 && error.data && error.data.hostUsername) {
      setHostOwner(error.data.hostUsername);
      setHostStatus("Host already assigned to " + getDisplayNameForUsername(error.data.hostUsername) + ".", true);
      return;
    }
    if (error && error.data && error.data.error) {
      setHostStatus(error.data.error, true);
    } else {
      setHostStatus("Unable to claim host role right now.", true);
    }
    await pollPresence().catch(() => {
      // Ignore refresh errors.
    });
  }
});

hostSpotlightApplyBtn.addEventListener("click", async () => {
  const target = String(hostSpotlightSelect.value || "").trim().toLowerCase();
  if (!target) {
    setHostStatus("Choose a participant to spotlight.", true);
    return;
  }
  await applySpotlight(target, session.username);
  const ok = await sendHostSignalToAll("host-spotlight", { username: target });
  if (ok) {
    await sendChat("Host spotlight: " + getDisplayNameForUsername(target) + ".").catch(() => {
      // Ignore chat post errors.
    });
  }
});

hostClearSpotlightBtn.addEventListener("click", async () => {
  await applySpotlight("", session.username);
  const ok = await sendHostSignalToAll("host-spotlight", { username: "" });
  if (ok) {
    await sendChat("Host cleared spotlight.").catch(() => {
      // Ignore chat post errors.
    });
  }
});

hostMuteAllBtn.addEventListener("click", async () => {
  const ok = await sendHostSignalToAll("host-mute-all", { reason: "host_control" });
  if (micStream) {
    setMicMuted(true);
  }
  if (ok) {
    setHostStatus("Mute all sent to active participants.", false);
    await sendChat("Host requested mute all.").catch(() => {
      // Ignore chat post errors.
    });
  }
});

hostSpotlightSelect.addEventListener("change", () => {
  const value = String(hostSpotlightSelect.value || "").trim().toLowerCase();
  if (!value) {
    setHostStatus("Choose a participant to spotlight.", false);
    return;
  }
  setHostStatus("Ready to spotlight " + value + ".", false);
});

hostTransferBtn.addEventListener("click", async () => {
  if (!isCurrentUserHost()) {
    setHostStatus("Only the active host can transfer host control.", true);
    return;
  }
  const target = String(hostTransferSelect.value || "").trim().toLowerCase();
  if (!target) {
    setHostStatus("Choose a user to transfer host control.", true);
    return;
  }
  try {
    const data = await transferHost(target);
    const hostDisplay = getDisplayNameForUsername(data.hostUsername);
    setHostStatus("Host transferred to " + hostDisplay + ".", false);
    await sendChat("Host transferred to " + hostDisplay + ".").catch(() => {
      // Ignore chat post errors.
    });
    await pollPresence().catch(() => {
      // Ignore refresh errors.
    });
  } catch (error) {
    setHostStatus("Unable to transfer host control.", true);
  }
});

hostTransferSelect.addEventListener("change", () => {
  const value = String(hostTransferSelect.value || "").trim().toLowerCase();
  if (!value) {
    return;
  }
  setHostStatus("Ready to transfer host to " + value + ".", false);
});

micDeviceSelect.addEventListener("change", async () => {
  studioSettings = window.TBRAuth.saveStudioSettings({
    preferredMicId: micDeviceSelect.value || ""
  });
  if (micStream) {
    await startMic();
  }
  updateEchoWarning();
});

headphonesToggle.addEventListener("change", () => {
  studioSettings = window.TBRAuth.saveStudioSettings({
    usingHeadphones: !!headphonesToggle.checked
  });
  updateEchoWarning();
});

window.addEventListener("storage", (event) => {
  if (event.key === "tbr_studio_settings") {
    studioSettings = window.TBRAuth.getStudioSettings();
    applyContainerModeFromSettings();
    applyChatThemeFromSettings();
    applyCameraSettingsFromStudioSettings();
    if (rawCameraStream) {
      applyCameraOutputStream().catch(() => {
        // Ignore cross-tab camera output refresh failures.
      });
    }
    applyMicSettingsFromStudioSettings();
    renderUnread();
    if (studioSettings.chatAlertsDisabledAll || studioSettings.chatPulseEnabled === false) {
      pendingChatResponse = false;
      setChatAttention(false);
    }
    applySpeakerOutput(studioSettings.preferredSpeakerId || "", false).catch(() => {
      // Ignore cross-tab speaker routing refresh failures.
    });
  }
});

profileLogoutBtn.addEventListener("click", async () => {
  stopRealtimeLoops();
  removeSessionValue(CHAT_OPEN_STATE_KEY);
  removeSessionValue(CHAT_DRAFT_KEY);
  removeSessionValue(CHAT_QUEUE_KEY);
  removeSessionValue(CHAT_REACTION_CACHE_KEY);
  clearRecordingAutomationTimers();
  abortLocalRecordingCapture();
  leaveVideoRoom();
  stopCameraStream();
  stopMicStream();
  stopRecordingTimer();
  stopRecordingWave();
  releaseHostOnLeave();
  await Promise.race([
    leavePresenceImmediate(),
    new Promise((resolve) => setTimeout(resolve, 450))
  ]);
  realtimeEnabled = false;
  window.TBRAuth.clearSession();
  window.location.replace("./");
});

window.addEventListener("beforeunload", () => {
  flushMediaDebugUploadsOnUnload();
  clearRecordingAutomationTimers();
  abortLocalRecordingCapture();
  leaveVideoRoom();
  stopCameraStream();
  stopMicLoopback();
  stopMicStream();
  stopRecordingTimer();
  stopRecordingWave();
  stopRealtimeLoops();
  releaseHostOnLeave();
  if (shouldSuppressPresenceLeaveOnUnload()) {
    return;
  }
  leavePresence(true);
});

if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
  navigator.mediaDevices.addEventListener("devicechange", () => {
    loadCameraDevices().catch(() => {
      // Ignore device refresh errors.
    });
    loadMicDevices().catch(() => {
      // Ignore device refresh errors.
    });
    loadSpeakerDevices().catch(() => {
      // Ignore device refresh errors.
    });
    refreshPermissionPanel().catch(() => {
      // Ignore permission refresh errors.
    });
  });
}

window.addEventListener("resize", () => {
  if (isRecording) {
    resizeRecordingWaveCanvas();
  }
  queueOnAirReviewWaveRender();
});

renderUnread();
loadRecentEmojis();
renderRecentEmojis();
loadChatQueue();
pruneChatQueue();
loadReactionCache();
loadSeenUpTo();
if (chatInput) {
  chatInput.spellcheck = true;
  chatInput.setAttribute("spellcheck", "true");
  chatInput.setAttribute("lang", "en-US");
  chatInput.setAttribute("autocorrect", "on");
  chatInput.setAttribute("autocapitalize", "sentences");
}
const draftText = readSessionValue(CHAT_DRAFT_KEY);
if (draftText) {
  chatInput.value = draftText;
}
resizeChatInput();
resizeScheduleMessageInput();
updateChatComposerEditMode();
const rememberedChatOpen = readSessionValue(CHAT_OPEN_STATE_KEY) === "1";
if (rememberedChatOpen) {
  setChatOpen(true);
}
setChatStatus(CHAT_STATUS_DEFAULT);
loadCameraDevices();
loadMicDevices();
loadSpeakerDevices().catch(() => {
  setSpeakerStatus("Could not load speaker devices. Using browser default output.");
});
showRuntimeWarnings();
setVideoRoomStatus("Studio room active. Waiting for participant video.");
setMicStatus("Microphone is off.");
setMicActiveUI(false);
setCameraStatus("Camera is off.");
renderOnAirStatus();
updateRemoteVideoLabel("Guest");
updateRemoteTileVisibility();

window.DFSMediaDebug = {
  enable() {
    setMediaDebugEnabled(true);
    return "DFS media diagnostics enabled";
  },
  disable() {
    setMediaDebugEnabled(false);
    return "DFS media diagnostics disabled";
  },
  clear() {
    clearMediaDebugLog();
    return "DFS media diagnostics cleared";
  },
  dump() {
    return [...mediaDebugEntries];
  }
};

onAirReviewAudio?.addEventListener("loadedmetadata", () => {
  logReviewAudioState("loadedmetadata");
  normalizeInfinityDurationReviewAudio();
  updateOnAirReviewTime();
});

onAirReviewAudio?.addEventListener("loadeddata", () => {
  logReviewAudioState("loadeddata");
  updateOnAirReviewTime();
});

onAirReviewAudio?.addEventListener("canplay", () => {
  logReviewAudioState("canplay");
  updateOnAirReviewTime();
});

onAirReviewAudio?.addEventListener("play", () => {
  logReviewAudioState("play");
  updateOnAirReviewPlayState();
});

onAirReviewAudio?.addEventListener("pause", () => {
  logReviewAudioState("pause");
  updateOnAirReviewPlayState();
});

onAirReviewAudio?.addEventListener("ended", () => {
  logReviewAudioState("ended");
  updateOnAirReviewPlayState();
  updateOnAirReviewTime();
});

onAirReviewAudio?.addEventListener("error", () => {
  logReviewAudioState("error");
});

onAirReviewAudio?.addEventListener("timeupdate", () => {
  updateOnAirReviewTime();
  if (!onAirReviewAudio || onAirReviewAudio.currentTime < 0.9) {
    return;
  }
  if (Math.abs(onAirReviewAudio.currentTime - Math.round(onAirReviewAudio.currentTime)) <= 0.08) {
    logReviewAudioState("timeupdate");
  }
});

onAirReviewVideo?.addEventListener("loadedmetadata", () => {
  updateOnAirReviewTime();
});

onAirReviewVideo?.addEventListener("loadeddata", () => {
  updateOnAirReviewTime();
});

onAirReviewVideo?.addEventListener("play", () => {
  updateOnAirReviewPlayState();
});

onAirReviewVideo?.addEventListener("pause", () => {
  updateOnAirReviewPlayState();
});

onAirReviewVideo?.addEventListener("ended", () => {
  updateOnAirReviewPlayState();
  updateOnAirReviewTime();
});

onAirReviewVideo?.addEventListener("timeupdate", () => {
  updateOnAirReviewTime();
});

onAirReviewPlayBtn?.addEventListener("click", async () => {
  const media = getActiveOnAirReviewMediaElement();
  if (!media || !media.src) {
    return;
  }
  if (isOnAirReviewPlaying()) {
    pauseOnAirReviewPlaybackLoop();
  } else {
    await startOnAirReviewPlaybackLoop();
  }
  updateOnAirReviewPlayState();
});

onAirReviewUndoBtn?.addEventListener("click", () => {
  const snapshot = undoOnAirReviewEdit();
  if (snapshot) {
    onAirMediaStatus.textContent = "Review edit undone.";
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "Undo restored the previous review draft state.";
    }
  }
});

onAirReviewRedoBtn?.addEventListener("click", () => {
  const snapshot = redoOnAirReviewEdit();
  if (snapshot) {
    onAirMediaStatus.textContent = "Review edit restored.";
    if (onAirReviewWaveNote) {
      onAirReviewWaveNote.textContent = "Redo restored the next review draft state.";
    }
  }
});

onAirReviewMuteBtn?.addEventListener("click", () => {
  const media = getActiveOnAirReviewMediaElement();
  if (!media || !media.src) {
    return;
  }
  onAirReviewMuted = !onAirReviewMuted;
  applyOnAirReviewPlaybackGain(true);
  updateOnAirReviewMuteState();
});

onAirReviewZoomOutBtn?.addEventListener("click", () => {
  setOnAirReviewZoomLevel(onAirReviewZoomLevel / 1.6);
});

onAirReviewMoveModeBtn?.addEventListener("click", () => {
  setOnAirReviewMoveMode(!onAirReviewMoveMode);
});

onAirReviewSelectModeBtn?.addEventListener("click", () => {
  setOnAirReviewSelectMode(!onAirReviewSelectMode);
  if (onAirReviewSelectMode && onAirReviewSelectAllBtn && hasOnAirReviewSelectableAsset()) {
    onAirReviewSelectAllBtn.disabled = false;
  }
});

onAirReviewSelectAllBtn?.addEventListener("click", () => {
  ensureOnAirReviewTimeline();
  const duration = getOnAirReviewTimelineDuration();
  if (!(duration > 0)) {
    return;
  }
  setOnAirReviewSelectMode(true);
  setOnAirReviewSelection(0, duration);
  setOnAirReviewViewportFocusTime(duration / 2);
});

onAirReviewClearSelectionBtn?.addEventListener("click", () => {
  clearOnAirReviewSelection();
});

onAirReviewDeleteBtn?.addEventListener("click", () => {
  if (applyOnAirReviewDeleteToTimeline("delete")) {
    onAirMediaStatus.textContent = "Selected range deleted in the draft timeline.";
  }
});

onAirReviewRippleDeleteBtn?.addEventListener("click", () => {
  if (applyOnAirReviewDeleteToTimeline("ripple")) {
    onAirMediaStatus.textContent = "Selected range ripple-deleted from the draft timeline.";
  }
});

onAirReviewSplitBtn?.addEventListener("click", () => {
  if (applyOnAirReviewSplitAtPlayhead()) {
    onAirMediaStatus.textContent = "Clip split at the playhead.";
  }
});

onAirReviewSplitSelectionBtn?.addEventListener("click", () => {
  if (applyOnAirReviewSplitAtSelectionEdges()) {
    onAirMediaStatus.textContent = "Selection edges split into their own clip range.";
  }
});

onAirReviewGainDownBtn?.addEventListener("click", () => {
  if (applyOnAirReviewSelectionGain(-3)) {
    onAirMediaStatus.textContent = "Selected range lowered by 3 dB.";
  }
});

onAirReviewGainUpBtn?.addEventListener("click", () => {
  if (applyOnAirReviewSelectionGain(3)) {
    onAirMediaStatus.textContent = "Selected range raised by 3 dB.";
  }
});

onAirReviewGainResetBtn?.addEventListener("click", () => {
  if (resetOnAirReviewSelectionGain()) {
    onAirMediaStatus.textContent = "Selected range gain reset.";
  }
});

onAirReviewGainNormalizeBtn?.addEventListener("click", () => {
  if (normalizeOnAirReviewSelectionGain()) {
    onAirMediaStatus.textContent = "Selected range normalized.";
  }
});

onAirReviewOverlapBlendBtn?.addEventListener("click", () => {
  if (setOnAirReviewOverlapMode("blend")) {
    onAirMediaStatus.textContent = "Overlap mode set to blend.";
  }
});

onAirReviewOverlapFrontBtn?.addEventListener("click", () => {
  if (setOnAirReviewOverlapMode("front")) {
    onAirMediaStatus.textContent = "Overlap mode set to front clip priority.";
  }
});

onAirReviewOverlapBackBtn?.addEventListener("click", () => {
  if (setOnAirReviewOverlapMode("back")) {
    onAirMediaStatus.textContent = "Overlap mode set to back clip priority.";
  }
});

onAirReviewZoomFitBtn?.addEventListener("click", () => {
  setOnAirReviewZoomLevel(1);
});

onAirReviewZoomInBtn?.addEventListener("click", () => {
  setOnAirReviewZoomLevel(onAirReviewZoomLevel * 1.6);
});

onAirReviewCloseBtn?.addEventListener("click", () => {
  closeOnAirReviewPlayback();
});

onAirReviewBackdrop?.addEventListener("click", () => {
  closeOnAirReviewPlayback();
});

onAirReviewScrub?.addEventListener("input", () => {
  onAirReviewScrubInFlight = true;
  const duration = getOnAirReviewTimelineDuration();
  const percent = Number(onAirReviewScrub.value || 0) / 1000;
  if (duration > 0) {
    seekOnAirReviewEditedTime(duration * percent);
  }
});

onAirReviewScrub?.addEventListener("change", () => {
  onAirReviewScrubInFlight = false;
  updateOnAirReviewTime();
});

onAirReviewWaveCanvas?.addEventListener("pointerdown", (event) => {
  onAirReviewWavePointerDown = true;
  onAirReviewSelectionPointerClientX = event.clientX;
  onAirReviewSelectionPointerId = event.pointerId;
  onAirReviewWaveCanvas.setPointerCapture?.(event.pointerId);
  const seconds = getOnAirReviewSecondsFromClientX(event.clientX);
  if (onAirReviewSelectMode) {
    const hitHandle = getOnAirReviewSelectionHandleHit(seconds);
    if (hitHandle) {
      onAirReviewSelectionDragMode = hitHandle;
      onAirReviewSelectionHandleOffset = hitHandle === "start"
        ? seconds - onAirReviewSelectionStart
        : seconds - onAirReviewSelectionEnd;
    } else {
      onAirReviewSelectionDragMode = "new";
      onAirReviewSelectionAnchor = seconds;
      onAirReviewSelectionHandleOffset = 0;
      setOnAirReviewSelection(seconds, seconds);
    }
    if (onAirReviewSelectionDragMode === "start") {
      onAirReviewSelectionAnchor = onAirReviewSelectionEnd;
    } else if (onAirReviewSelectionDragMode === "end") {
      onAirReviewSelectionAnchor = onAirReviewSelectionStart;
    }
    setOnAirReviewViewportFocusTime(seconds);
    startOnAirReviewSelectionAutoPan();
    return;
  }
  if (onAirReviewMoveMode) {
    const clipHit = getOnAirReviewClipHit(seconds);
    if (clipHit && beginOnAirReviewClipDrag(clipHit, seconds)) {
      setOnAirReviewViewportFocusTime(seconds);
      return;
    }
  }
  onAirReviewSelectionDragMode = "";
  seekOnAirReviewFromClientX(event.clientX);
});

onAirReviewWaveCanvas?.addEventListener("pointermove", (event) => {
  if (!onAirReviewWavePointerDown) {
    return;
  }
  onAirReviewSelectionPointerClientX = event.clientX;
  if (onAirReviewSelectMode) {
    const seconds = getOnAirReviewSecondsFromClientX(event.clientX);
    updateOnAirReviewSelectionFromDrag(seconds);
    return;
  }
  if (onAirReviewMoveMode && onAirReviewClipDragState) {
    const seconds = getOnAirReviewSecondsFromClientX(event.clientX);
    updateOnAirReviewClipDrag(seconds);
    return;
  }
  seekOnAirReviewFromClientX(event.clientX);
});

onAirReviewWaveCanvas?.addEventListener("pointerup", (event) => {
  onAirReviewWavePointerDown = false;
  stopOnAirReviewSelectionAutoPan();
  if (onAirReviewSelectionPointerId !== null) {
    onAirReviewWaveCanvas.releasePointerCapture?.(onAirReviewSelectionPointerId);
  }
  onAirReviewSelectionPointerId = null;
  endOnAirReviewClipDrag();
  onAirReviewSelectionDragMode = "";
  onAirReviewSelectionHandleOffset = 0;
  resetOnAirReviewViewportFocusTime();
});

onAirReviewWaveCanvas?.addEventListener("pointerleave", () => {
  if (!onAirReviewSelectMode) {
    onAirReviewWavePointerDown = false;
    endOnAirReviewClipDrag();
    onAirReviewSelectionDragMode = "";
    onAirReviewSelectionHandleOffset = 0;
  }
});

onAirReviewWaveCanvas?.addEventListener("pointercancel", () => {
  onAirReviewWavePointerDown = false;
  stopOnAirReviewSelectionAutoPan();
  onAirReviewSelectionPointerId = null;
  endOnAirReviewClipDrag();
  onAirReviewSelectionDragMode = "";
  onAirReviewSelectionHandleOffset = 0;
  resetOnAirReviewViewportFocusTime();
});

updateOnAirCameraPauseUI();
applyCameraSettingsFromStudioSettings();
applyContainerModeFromSettings();
applyChatThemeFromSettings();
renderLoungeProfileIdentity();
refreshLoungeProfileMeta();
applyAdminSettingsToUi();
applyToggleLabelTooltips();
setHostOwner("");
setHostStatus("Host controls ready.", false);
setRecordingState(false, false);
setRecordingWorkflowState("ready");
syncReviewPanelUI();
updateOnAirReviewOverlapModeUi();
updateOnAirReviewZoomControls();
updateOnAirReviewSelectionControls();
setOnAirLibraryOpen(false);
setOnAirAudioOpen(false);
updateOnAirAudioSliderFill();
setOnAirMusicVolumeNormalized(0.62, { apply: true });
updateOnAirAudioControlsUI();
updateOnAirLibraryTabsUI();
updateOnAirMusicCuesUI();
refreshOnAirMusicLibrary().catch(() => {
  // Keep cue UI usable even if browser storage is unavailable.
});
applyMicSettingsFromStudioSettings();
updatePreflightSummary();
refreshPermissionPanel().catch(() => {
  applyPermissionState("camera", "unknown");
  applyPermissionState("microphone", "unknown");
});
if (studioSettings.cameraAutoStart) {
  studioSettings = window.TBRAuth.saveStudioSettings({
    cameraAutoStart: false
  });
}
initRealtime();
