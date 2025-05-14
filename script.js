// Animate on Scroll
document.addEventListener("DOMContentLoaded", function () {
  setupSplitText();
  //setupFadeIn();
  setupHeaderEffect();
  //setUpVideoBGR();
  panelsTop();
  //giảm tốc độ cuộn
  scrollSlow();
  // Ẩn header khi cuộn xuống
  hideHeader();
  // Animation cho các tag
  animation_tag4();
  animation_tag5();
  animation_tag6();
  animation_tag7();
  animation_tag8();
  animation_tag9();
});
gsap.registerPlugin(SplitText); // Đăng ký plugin
gsap.registerPlugin(ScrollTrigger);




// Animation cho tag4
function animation_tag4() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl.to("#tag4-1", { xPercent: -20, yPercent: -100 })
    .from("#tag4-2", { xPercent: 10, yPercent: 100 }, "<=+0")
    .to("#tag4-2", { xPercent: -40, yPercent: -100 })
    .from("#tag4-3", { xPercent: 40, yPercent: 100 }, "<=+0")
    .to("#tag4-3", { xPercent: -20, yPercent: -100 });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag4",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Animation Trước 1954
function animation_tag5() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl
  .to("#tag5-1", { xPercent: -100, yPercent: -100 })
  .from("#tag5-2", { xPercent: 40, yPercent: 100 }, "<=+0")
  .to("#tag5-2", { xPercent: -90, yPercent: -100 })
  .from("#tag5-3", { xPercent: 100, yPercent: -40 }, "<=+0")
  .to("#tag5-3", { xPercent: -100, yPercent: 100 })
  .from("#tag5-4", { xPercent: -60, yPercent: -100 }, "<=+0")
  .to("#tag5-4", { xPercent: 30, yPercent: 100 });
  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag5",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Animation cho 1954-1960
function animation_tag6() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl
    .to("#tag6-1", { xPercent: -100, yPercent: -100 })
    .from("#tag6-2", { xPercent: 100, yPercent: 70 }, "<=+0")
    .to("#tag6-2", { xPercent: -100, yPercent: -40 })
    .from("#tag6-3", { xPercent: 100, yPercent:-70 }, "<=+0")
    .to("#tag6-3", { xPercent: -100, yPercent: 40 })
    .from("#tag6-4", { xPercent: 100, yPercent: 70 }, "<=+0")
    .to("#tag6-4", { xPercent: -100, yPercent: -40 })
    .from("#tag6-5", { xPercent: 100, yPercent: -70 }, "<=+0")
    .to("#tag6-5", { xPercent: -100, yPercent: 40 })
  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag6",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Animation Từ 1965 đến 1968 
function animation_tag7() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl
    .to("#tag7-1", { xPercent: 30, yPercent: -100 })
    .from("#tag7-2", { xPercent: -20, yPercent: 100 }, "<=+0")
    .to("#tag7-2", { xPercent: 40, yPercent: -100 })
    .from("#tag7-3", { xPercent: -100, yPercent: 30 }, "<=+0")
    .to("#tag7-3", { xPercent: 60, yPercent: -100 })
    .from("#tag7-4", { xPercent: -100, yPercent: 30 }, "<=+0")
    .to("#tag7-4", { xPercent: 60, yPercent: -100 })
    .from("#tag7-5", { xPercent: -100, yPercent: 30 }, "<=+0")
    .to("#tag7-5", { xPercent: 60, yPercent: -100 })
    .from("#tag7-6", { xPercent: -100, yPercent: 30 }, "<=+0")
    .to("#tag7-6", { xPercent: 60, yPercent: -100 })
  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag7",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Animation cho tag8
function animation_tag8() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl
    .to("#tag8-1", { xPercent: -20, yPercent: -100 })
    .from("#tag8-2", { xPercent: 40, yPercent: 100 }, "<=+0")
    .to("#tag8-2", { xPercent: -30, yPercent: -100 })
    .from("#tag8-3", { xPercent: 20, yPercent: 100 }, "<=+0")
    .to("#tag8-3", { xPercent: -20, yPercent: -100 })
    .from("#tag8-4", { xPercent: 10, yPercent: 100 }, "<=+0")
    .to("#tag8-4", { xPercent: 10, yPercent: -100 })
    .from("#tag8-5", { xPercent: -20, yPercent: 100 }, "<=+0")
    .to("#tag8-5", { xPercent: 20, yPercent: -100 })
    .from("#tag8-6", { xPercent: -40, yPercent: 100 }, "<=+0")
    .to("#tag8-6", { xPercent: 40, yPercent: -100 })
    .from("#tag8-7", { xPercent: -20, yPercent: 100 }, "<=+0")
    .to("#tag8-7", { xPercent: 10, yPercent: -100 })
  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag8",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Animation cho tag9
function animation_tag9() {
  let tl = gsap.timeline({
    defaults: { ease: "linear", duration: 1 },
  });
  tl
    .to("#tag9-1", { xPercent: -10, yPercent: -100 })
    .from("#tag9-2", { xPercent: -40, yPercent: 100 }, "<=+0")
    .to("#tag9-2", { xPercent: 10, yPercent: -100 })
    .from("#tag9-3", { xPercent: 40, yPercent: 100 }, "<=+0")
    .to("#tag9-3", { xPercent: -10, yPercent: -100 })
    .from("#tag9-4", { xPercent: -40, yPercent: 100 }, "<=+0")
    .to("#tag9-4", { xPercent: 10, yPercent: -100 })
    .from("#tag9-5", { xPercent: 40, yPercent: 100 }, "<=+0")
    .to("#tag9-5", { xPercent: -10, yPercent: -100 })
    .from("#tag9-6", { xPercent: -40, yPercent: 100 }, "<=+0")
    .to("#tag9-6", { xPercent: 10, yPercent: -100 })
    .from("#tag9-7", { xPercent: 40, yPercent: 100 }, "<=+0")
    .to("#tag9-7", { xPercent: -10, yPercent: -100 })
    .from("#tag9-8", { xPercent: -40, yPercent: 100 }, "<=+0")
    .to("#tag9-8", { xPercent: 10, yPercent: -100 })
  ScrollTrigger.create({
    animation: tl,
    trigger: "#tag9",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1,
    //markers: true,
    anticipatePin: 1,
  });
}
// Ẩn header khi cuộn xuống
function hideHeader() {
  let lastScroll = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // Cuộn xuống
      header.classList.add("hide");
    } else {
      // Cuộn lên
      setTimeout(() => {
        header.classList.remove("hide");
      }, 200);
    }
    lastScroll = currentScroll;
  });
}
function scrollSlow() {
  let scrollAmount = 200; // Số pixel cuộn mỗi lần
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      // cuộn thủ công
      window.scrollBy({
        top: e.deltaY > 0 ? scrollAmount : -scrollAmount,
      });
    },
    { passive: false }
  ); // quan trọng: để e.preventDefault() hoạt động
}
function setupSplitText() {
  document.fonts.ready.then(() => {
    gsap.utils.toArray(".text-title").forEach((el) => {
      let split = SplitText.create(el, {
        type: "chars words",
        lineClass: "line",
        wordsClass: "word",
        charsClass: "char",
      });
      gsap.from(split.chars, {
        opacity: 0,
        yPercent: "random(-100, 100)",
        rotation: "random(-60, 60)",
        ease: "back.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reverse play reverse",
          //markers: true, // Hiện marker để debug
        },
      });
    });
  });
}

function setupFadeIn() {
  document.fonts.ready.then(() => {
    gsap.utils.toArray(".fade-in").forEach((el) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "center 90%",
            end: "center 10%",
            toggleActions: "play reverse play reverse",
            markers: true, // Hiện marker để debug
          },
        })
        .from(el, {
          opacity: 0,
          y: -50,
          duration: 0.5,

          ease: "linear",
        });
    });
  });
}

function setupHeaderEffect() {
  const logos = document.querySelectorAll(".logo");
  const triggers = document.querySelectorAll(".change-header");

  triggers.forEach((trigger) => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 10%",
      end: "bottom 10%",
      onEnter: () => logos.forEach((el) => el.classList.add("light")),
      onLeave: () => logos.forEach((el) => el.classList.remove("light")),
      onEnterBack: () => logos.forEach((el) => el.classList.add("light")),
      onLeaveBack: () => logos.forEach((el) => el.classList.remove("light")),
    });
  });
}

function setUpVideoBGR() {
  const video = document.getElementById("background-video");
  //const audio = document.getElementById("background-audio");

  // Nếu có audio riêng, mute video
  // if (audio) {
  //   video.muted = true;
  // }

  // GSAP ScrollTrigger

  ScrollTrigger.create({
    trigger: video,
    start: "top 5%", // Khi phần top video chạm đáy màn hình
    end: "bottom 5%", // Khi bottom video chạm top màn hình
    //markers: true, // Ẩn các marker

    onEnter: () => {
      video.play();
      //gsap.to(video, { opacity: 1, duration: 0.5 });
    },
    onLeave: () => {
      video.pause();
      //gsap.to(video, { opacity: 0.5, duration: 1 });
    },
    onEnterBack: () => {
      video.play();
      //gsap.to(video, { opacity: 1, duration: 0.5 });
    },
    onLeaveBack: () => {
      video.pause();
      //gsap.to(video, { opacity: 0.5, duration: 1 });
    },
  });
}

function panelsTop() {
  gsap.to(".panel", {
    scrollTrigger: {
      trigger: ".panel",
      stat: "top top",
      end: "+=30%",
      //markers: true,
      pin: true,
    },
  });
}

const sidebar = document.getElementById("open-nav");
const links = document.querySelectorAll(".sidebar-link");
sidebar.addEventListener("click", () => {
  links.forEach((link) => {
    setTimeout(() => {
      link.classList.add("skew-active");
    }, 400);
  });
});

// Khi sidebar đóng
sidebar.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.remove("skew-active");
  });
});
