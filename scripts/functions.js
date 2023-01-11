export function random(arr) {
  let out;
  typeof arr == "number"
    ? (out = Math.floor(Math.random() * arr))
    : (out = arr[Math.floor(Math.random() * arr.length)]);
  return out;
}
export function speak(text) {
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(text));
}
