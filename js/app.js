const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrolling-container"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrolling-container", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scrolling-container").style.transform
    ? "transform"
    : "fixed",
});

let tl = gsap
  .timeline({ defaults: { ease: "none" } })
  .to(".changeColor", { color: "#cc7a00", duration: 1 })
  .to(".nav", { color: "#cc7a00", duration: 1 }, "-=1")
  .to(".circle", { background: "#cc7a00", duration: 1 }, "-=1");
ScrollTrigger.create({
  trigger: ".puerto-first-showCase",
  start: "50% 50%",
  end: "+=300",
  scroller: ".scrolling-container",
  animation: tl,
  scrub: true,
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

const cebuL = document.querySelector(".cebuL");
const puertoL = document.querySelector(".puertoL");
const manilaL = document.querySelector(".manilaL");
const baguioL = document.querySelector(".baguioL");

const showcaseHero = document.querySelector(".showcase-hero");

cebuL.addEventListener("mouseover", function () {
  showcaseHero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/INOCcent-afk/Testing/main/images/f177e1af-aa00-419f-a1e0-8c6db3024621.jpg";
});
// // ***********************

puertoL.addEventListener("mouseover", function () {
  showcaseHero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/INOCcent-afk/Testing/main/images/DSC3547.jpg";
});
manilaL.addEventListener("mouseover", function () {
  showcaseHero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/INOCcent-afk/Testing/main/images/3a317fa1-e122-4828-b6af-185923a225c4.jpg')";
});

baguioL.addEventListener("mouseover", function () {
  showcaseHero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/INOCcent-afk/Testing/main/images/bfc0f0e3-0f61-49c3-bf23-eaa078beaa8e.jpg')";
});

const preloader = gsap.timeline();

preloader
  .from(".line span", 2, {
    y: 200,
    ease: "power4.out",
    skewY: 10,
    stagger: {
      amount: 0.4,
    },
  })
  .to(".line span", 1, {
    y: 100,
    ease: "power4.out",
    skewY: 5,
    stagger: {
      amount: 0.4,
    },
  })
  .to(".wrapper", 1, {
    height: 0,
    ease: "power4.out",
  });
