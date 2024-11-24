gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
  duration:2
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// lenis.on("scroll", ScrollTrigger.update);

// gsap.to(".secondPage-note h1 ", {
//   color: "#0000000",
//   scrollTrigger: {
//     trigger: ".secondPage-note",
//     scroller: "body",
//     start: "top 10%",
//     end: "bottom 90%",
//     scrub: true,

//   },
// });

// let firstPage = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".secondPage-note",
//     scroller: "body",
//     start: "top 20%",
//     end: "bottom 100%",
//     scrub: 5,
//   },
// });

// firstPage.to(".full-screen ", {
//   backgroundColor: "#FFFFFF",
// });

// home page //////////////////////////

gsap.from(".navbar-category , .logo-section", {
  y: -100,
  duration: 1,
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-section",
    start: "0% top",
    end: "+=800 top",
    scrub: 5,
    pin:true
  },
});

document
  .querySelectorAll(".name-section .name span")
  .forEach((span, index) => {
     t1.to(span , {
      y : -500,
      duration:2,
      opacity:0,
      ease : "power1.out"
     } , index*0.1)

  });

const aboutText = gsap.utils.toArray(".about-text");

aboutText.forEach((text) => {
  gsap.to(text, {
    ease: 'none',
    backgroundSize: "100%",
    scrollTrigger: {
      trigger: text,
      start: "center 55%",
      end: "center 25%",
      scrub: true,
    //   markers:true,
    //   pin:true
    },
  });
});
