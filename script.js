gsap.registerPlugin(ScrollTrigger);

// MASTER TIMELINE
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  }
});

// SCENE 1 – OPENING CRAWL
tl.to(".scene-1", { opacity: 1, duration: 2 })
  .to(".scene-1", { opacity: 0, duration: 2 });

// SCENE 2 – SIDE SCROLL FEEL
tl.to(".scene-2", { opacity: 1, duration: 2 })
  .fromTo(".scene-2",
    { x: 200 },
    { x: -200, duration: 4 }
  )
  .to(".scene-2", { opacity: 0, duration: 2 });

// SCENE 3 – CITY / WORK
tl.to(".scene-3", { opacity: 1, duration: 2 })
  .to(".scene-3", { scale: 1.1, duration: 3 })
  .to(".scene-3", { opacity: 0, duration: 2 });

// SCENE 4 – ACHIEVEMENTS
tl.to(".scene-4", { opacity: 1, duration: 2 })
  .from(".scene-4 h1", { y: 100, opacity: 0, duration: 3 })
  .to(".scene-4", { opacity: 0, duration: 2 });

// SCENE 5 – CLOUD DESCENT
tl.to(".scene-5", { opacity: 1, duration: 2 })
  .from(".scene-5", { y: -200, duration: 4 })
  .to(".scene-5", { opacity: 0, duration: 2 });

// SCENE 6 – ENDING
tl.to(".scene-6", { opacity: 1, duration: 3 });
