import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: false,
  target: [],
  speed: 50,
  smooth: 10,
};

const smoothSlice = createSlice({
  name: "smooth",
  initialState,
  reducers: {
    smoothScroll({ target, speed, smooth }, doc) {
      console.log(doc);
      target = doc.payload;
      if (target === document)
        target =
          document.scrollingElement ||
          document.documentElement ||
          document.body.parentNode ||
          document.body; // cross browser support for document scrolling

      var moving = false;
      var pos = target.scrollTop;
      var frame =
        target === document.body && document.documentElement
          ? document.documentElement
          : target; // safari is the new IE

      target.addEventListener("mousewheel", scrolled, { passive: false });
      target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

      function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e);

        pos += -delta * speed;
        pos = Math.max(
          0,
          Math.min(pos, target.scrollHeight - frame.clientHeight)
        ); // limit scrolling

        if (!moving) update();
      }

      function normalizeWheelDelta(e) {
        if (e.detail) {
          if (e.wheelDelta)
            return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
          // Opera
          else return -e.detail / 3; // Firefox
        } else return e.wheelDelta / 120; // IE,Safari,Chrome
      }

      function update() {
        moving = true;

        var delta = (pos - target.scrollTop) / smooth;

        target.scrollTop += delta;

        if (Math.abs(delta) > 0.5) requestFrame(update);
        else moving = false;
      }

      var requestFrame = (function () {
        // requestAnimationFrame cross browser
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (func) {
            window.setTimeout(func, 1000 / 50);
          }
        );
      })();
    },
    init({ target, speed, smooth }, fn) {
      //   new SmoothScroll(document, 100, 20);
      //   fn();
    },
  },
});

export const { smoothScroll, init } = smoothSlice.actions;

export default smoothSlice.reducer;
