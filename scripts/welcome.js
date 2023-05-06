import { start } from "./index.js";
import { speak } from "./functions.js";
const protocolWhitelist = [
  "bitcoin",
  "geo",
  "im",
  "irc",
  "ircs",
  "magnet",
  "mailto",
  "mms",
  "news",
  "ircs",
  "nntp",
  "sip",
  "sms",
  "smsto",
  "ssh",
  "tel",
  "urn",
  "webcal",
  "wtai",
  "xmpp",
];

function init() {
  let params = new URLSearchParams(new URL(window.location.href).search),
    ebtn = document.getElementById("enterbtn");
  if (params.get("notice") == "false") start();
  if (params.get("theme") == "dark") {
    document.body.style.background =
      "radial-gradient(#4c4f5a 6%, transparent 6%), #18191c";
    document.body.style.color = "#fefeff";
  }
  document.getElementById("enterbtn1").onclick = ebtn.onclick = start;
  ebtn.onmouseover = () => {
    ebtn.style.left == "200px"
      ? (ebtn.style.left = "-200px")
      : (ebtn.style.left = "200px");
  };
  registerProtocolHandlers();
  blockback();
  window.onkeydown = (e) => start();
}
function blockback() {
  window.addEventListener("popstate", () => window.history.forward());
  window.addEventListener("beforeunload", (event) => {
    speak("Please don't go!");
    event.returnValue = true;
  });
}

function registerProtocolHandlers() {
  if (typeof navigator.registerProtocolHandler !== "function") return;

  const handlerUrl = window.location.href + "/url=%s";

  protocolWhitelist.forEach((proto) => {
    navigator.registerProtocolHandler(proto, handlerUrl, "The Worst Website");
  });
}
export { init };
