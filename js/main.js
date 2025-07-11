gsap.registerPlugin(ScrollTrigger);

// function aniMainTitle() {
//   const span1 = document.querySelectorAll(".section1 .txt1 span");
//   const span2 = document.querySelectorAll(".section1 .txt2 span");

//   // random 순서 배열
//   // function shuffle(arr) {
//   //     return arr.from(arr).sort(() => Math.random() - 0.25)
//   // }
//   function shuffle(arr) {
//     return [...arr].sort(() => Math.random() - 0.5);
//   }

//   // 랜덤한 배열에 맞춰 show클래스 추가
//   const randomOrder1 = shuffle([...span1.keys()]);
//   const randomOrder2 = shuffle([...span2.keys()]);
//   const randomOrder3 = shuffle([...span3.keys()]);

//   randomOrder1.forEach((index, i) => {
//     setTimeout(() => {
//       span1[index].classList.add("show");
//     }, i * 200);
//   });
//   randomOrder2.forEach((index, i) => {
//     setTimeout(() => {
//       span2[index].classList.add("show");
//     }, i * 200);
//   });
//   randomOrder3.forEach((index, i) => {
//     setTimeout(() => {
//       span3[index].classList.add("show");
//     }, i * 200);
//   });
// }

// aniMainTitle();

// intro
gsap.set(".visual .bg", {
 width: "20vw",
 height: "64vh",
 borderRadius: "200px",
});

//gsap scrolltrigger
const tl = gsap.timeline({
 scrollTrigger: {
  trigger: ".visual",
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: 1,
  pinSpacing: true,
  markers: true,
  onUpdate: (self) => {
   const progress = self.progress;
   const aboutMe = document.querySelector(".about-me");
   if (progress >= 0.5) {
    aboutMe.classList.add("on");
   } else {
    aboutMe.classList.remove("on");
   }
  },
 },
});

tl.to(".visual .bg", {
 clipPath: "inset(0% 0%)",
 duration: 2,
 width: "100vw",
 height: "100vh",
 borderRadius: "0px",
 ease: "power2.inOut",
});

tl.to({}, { duration: 2 });

// header====================================================
const point = document.querySelector(".point");
const menuLinks = document.querySelectorAll(".gnb .frame-inner");

// 초기 위치 (Intro 메뉴)
const initTarget = menuLinks[0];
movePoint(initTarget);

menuLinks.forEach((link) => {
 link.addEventListener("click", (e) => {
  e.preventDefault();

  const targetID = link.getAttribute("href");
  const targetSection = document.querySelector(targetID);

  // 스크롤 이동
  gsap.to(window, {
   scrollTo: targetID,
   duration: 1,
   ease: "power2.out",
  });

  // 포인트 이동 및 너비 조정
  movePoint(link);
 });
});

function movePoint(target) {
 const gnbRect = document.querySelector(".gnb").getBoundingClientRect();
 const targetRect = target.getBoundingClientRect();

 const leftValue = targetRect.left - gnbRect.left;
 const widthValue = targetRect.width;

 gsap.to(point, {
  left: leftValue,
  width: widthValue,
  duration: 0.5,
  ease: "power2.out",
 });
}
// header end==================================================

// app==========================================================
function setupAutoScroll(containerSelector, speed = 0.5) {
 const container = document.querySelector(containerSelector);
 let autoScroll = true;

 function scrollLoop() {
  if (autoScroll) {
   container.scrollTop += speed;

   if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    container.scrollTop = 0;
   }
  }
  requestAnimationFrame(scrollLoop);
 }

 //  scrollLoop();

 // 사용자 스크롤 시 자동 멈춤 → 일정 시간 후 재시작
 container.addEventListener("wheel", () => {
  autoScroll = false;
  clearTimeout(container._scrollTimeout);
  container._scrollTimeout = setTimeout(() => {
   autoScroll = true;
  }, 2000); // 3초 후 재시작
 });
}

// 각각 독립적으로 자동 스크롤 적용
setupAutoScroll(".scroll-1", 0.5);
setupAutoScroll(".scroll-2", 0.3);
// detail-page 우측 이미지 자동 스크롤 적용
setupAutoScroll(".detail-page-img-1", 0.5);
setupAutoScroll(".detail-page-img-2", 0.3);
setupAutoScroll(".branding-img", 0.4);
// app end=========================================================
