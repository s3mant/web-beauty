import { random } from "./functions.js";
import { IMGs, AUDs, VIDs } from "./arrays.js";
import { openWindow } from "./danceWindow.js";
const meta = document.querySelector("meta.theme-color");

function spam() {
  page();
  audVid();
}

function audVid() {
  //sapm audio and video
  for (let i = 1; i < 30; i++) {
    imageBlast();
    let audio = document.createElement("audio"),
      video = document.createElement("video");

    audio.src = random(AUDs);
    audio.autoplay = true;
    audio.loop = true;

    video.src = random(VIDs);
    video.autoplay = true;
    video.loop = true;

    video.style =
      "top: " +
      Math.random() * 500 +
      "px; right: " +
      Math.random() * 1200 +
      "px";
    setTimeout(() => openWindow(), random(5e3));
    setTimeout(() => document.body.appendChild(video), random(3e3));
    setTimeout(() => document.body.appendChild(audio), 800);
  }
}

function imageBlast() {
  let img = document.createElement("img");
  img.src = random(IMGs);
  img.type = img.src.split(".").pop()[0];
  img.style = `width: ${Math.random() * 100 + 10}; top: ${
    Math.random() * 500
  }px; right: ${Math.random() * 1200}px">`;

  setTimeout(() => document.body.appendChild(img), random(3e3));
}

function page() {
  //fill history
  for (let i = 1; i < 20; i++) {
    window.history.pushState(
      {},
      "",
      window.location.pathname + "?suscount=" + i
    );
  }
  window.history.pushState({}, "", window.location.pathname);

  //gay theme color
  setInterval(() => {
    let wdth = 6,
      num = random(16777215).toString(16);
    wdth -= num.toString().length;

    meta.setAttribute(
      "content",
      "#" + new Array(wdth + (/\./.test(num) ? 2 : 1)).join("0") + num
    );
  }, 100);
}
export { imageBlast, spam };
