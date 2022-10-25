// Modules
import g from "./utils/gsap";
import "swiper/swiper-bundle.css";

// Style
import "./assets/main.scss";

// Configuring
import Swiper from "swiper";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const timeline = g.timeline();

window.addEventListener("load", function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  document.querySelector(".mySwiper").addEventListener("click", () => {
    console.log("clicked");
  });
  const elem = document.querySelector(".getCordinates").getBoundingClientRect();
  const w = elem.width / 2;
  const drops = document.querySelectorAll(".dropping div");
  function startDrop() {
    const drop = g.timeline();
    drop.to(drops[0], {
      opacity: 1,
    });
    drop.to(drops[0], {
      delay: 0.4,
      opacity: 0,
      yPercent: -100,
    });
    drop.set(drops[1], {
      yPercent: -50,
    });
    drop.to(drops[1], {
      opacity: 1,
      yPercent: -100,
    });
    drop.to(drops[1], {
      delay: 0.4,
      opacity: 0,
      yPercent: -200,
    });
    drop.set(drops[2], {
      yPercent: -150,
    });
    drop.to(drops[2], {
      opacity: 1,
      yPercent: -200,
    });
    drop.to(drops[2], {
      delay: 0.4,
      opacity: 0,
      yPercent: -300,
    });
    drop.set(drops[3], {
      yPercent: -250,
    });
    drop.to(drops[3], {
      opacity: 1,
      yPercent: -300,
    });
    drop.to([".getCordinates", drops[3]], {
      delay: 0.4,
      opacity: 0,
      y: -50,
    });
    drop.to(".content", {
      width: 0,
      duration: 1,
    });
  }
  timeline.from(".firstTransition > div", {
    opacity: 0,
    y: 80,
    duration: 0.3,
    delay: 0.5,
    stagger: 1.5,
  });
  timeline.to(".firstTransition .hideAway", {
    duration: 0.3,
    opacity: 0,
    y: -80,
    delay: 0.5,
  });
  timeline.to(".getCordinates", {
    delay: 0.4,
    x: -(w - w / 2 + 10),
    duration: 0.5,
    onComplete: () => {
      startDrop();
    },
  });
});
