import { random } from "./functions.js";
function emojiUrl() {
  window.ApplePaySession ||
    random([
      function () {
        const o = ["🏻", "🏼", "🏽", "🏾", "🏿"];
        setInterval(() => {
          let n,
            t,
            e = "";
          for (n = 0; n < 10; n++)
            (t = Math.floor(
              o.length * ((Math.sin(Date.now() / 100 + n) + 1) / 2)
            )),
              (e += "👶" + o[t]);
          window.location.hash = e;
        }, 100);
      },
      function () {
        setInterval(() => {
          let o,
            n,
            t = "";
          for (o = 0; o < 10; o++)
            (n = Math.floor(4 * Math.sin(Date.now() / 200 + o / 2)) + 4),
              (t += String.fromCharCode(9601 + n));
          window.location.hash = t;
        }, 100);
      },
      function () {
        const o = ["🌑", "🌘", "🌗", "🌖", "🌕", "🌔", "🌓", "🌒"],
          n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let t = 0;
        setInterval(() => {
          let e = "",
            a = 0;
          if (t) {
            for (; 0 === n[a]; ) a++;
            a >= n.length ? (t = 0) : (n[a]++, 8 === n[a] && (n[a] = 0));
          } else {
            for (; 4 === n[a]; ) a++;
            a >= n.length ? (t = 1) : n[a]++;
          }
          n.forEach(function (n) {
            e += o[n];
          }),
            (window.location.hash = e);
        }, 100);
      },
    ])();
}

export { emojiUrl };
