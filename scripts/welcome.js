import { start } from "./index.js";
window.vars = {
  pops: null,
  screenOn: false,
  show: document.getElementById("show"),
  enter: document.getElementById("enter"),
};
function init() {
  const params = new URLSearchParams(new URL(window.location.href).search);
  if (params.get("notice") == "false") start();

  window.onkeydown = (e) => {
    e.preventDefault();
    !window.vars.screenOn ? start() : alert("Chunga bunga?");
  };
}
export { init };
