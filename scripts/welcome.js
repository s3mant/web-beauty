import { start } from "./index.js";
window.vars = {
  pops: null,
  screenOn: false,
  show: document.getElementById("show"),
  enter: document.getElementById("enter"),
};
function init() {
  let params = new URLSearchParams(new URL(window.location.href).search),
    ebtn = document.getElementById("enterbtn");
  if (params.get("notice") == "false") start();
  document.getElementById("enterbtn1").onclick = ebtn.onclick = start;
  ebtn.onmouseover = () => {
    ebtn.style.left == "200px"
      ? (ebtn.style.left = "-200px")
      : (ebtn.style.left = "200px");
  };

  window.onkeydown = (e) => {
    e.preventDefault();
    !window.vars.screenOn ? start() : alert("Chunga bunga?");
  };
}
export { init };
