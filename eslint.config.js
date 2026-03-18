const js = require("@eslint/js");

const browserGlobals = {
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  location: "readonly",
  history: "readonly",
  localStorage: "readonly",
  sessionStorage: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  Blob: "readonly",
  File: "readonly",
  FileReader: "readonly",
  FormData: "readonly",
  Headers: "readonly",
  Request: "readonly",
  Response: "readonly",
  Image: "readonly",
  Audio: "readonly",
  MediaRecorder: "readonly",
  MediaStream: "readonly",
  MediaStreamAudioDestinationNode: "readonly",
  AudioContext: "readonly",
  webkitAudioContext: "readonly",
  AbortController: "readonly",
  DOMParser: "readonly",
  MutationObserver: "readonly",
  ResizeObserver: "readonly",
  IntersectionObserver: "readonly",
  HTMLElement: "readonly",
  HTMLAudioElement: "readonly",
  HTMLCanvasElement: "readonly",
  OffscreenCanvas: "readonly",
  CanvasRenderingContext2D: "readonly",
  performance: "readonly",
  requestAnimationFrame: "readonly",
  cancelAnimationFrame: "readonly",
  fetch: "readonly",
  crypto: "readonly",
  console: "readonly",
  alert: "readonly",
  confirm: "readonly",
  CustomEvent: "readonly",
  Event: "readonly",
  EventTarget: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  Twilio: "readonly"
};

const nodeGlobals = {
  console: "readonly",
  process: "readonly",
  Buffer: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  module: "readonly",
  exports: "readonly",
  require: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  AbortController: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  fetch: "readonly"
};

module.exports = [
  {
    ignores: [
      "landing/vendor/**",
      "**/*.min.js",
      "_site/**",
      "node_modules/**"
    ]
  },
  js.configs.recommended,
  {
    files: ["landing/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: browserGlobals
    },
    rules: {
      "no-undef": "off",
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
    }
  },
  {
    files: ["realtime/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: nodeGlobals
    },
    rules: {
      "no-extra-boolean-cast": "off",
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
    }
  }
];
