let screenOn;
window.onkeydown = (e) => {
  e.preventDefault();
  !screenOn ? start() : alert("Chunga Bunga");
};
function start() {
  if (!screenOn) screenOn = true;
  else return;
  alert("be ready");
  const enter = document.getElementById("enter"),
    show = document.getElementById("show");
  enter.style.opacity = "0";
  setTimeout(() => {
    document.body.removeChild(enter);
    document.body.classList.add("gay");
    show.style.display = "block";
    alert("wip");
  }, 500);
}
