// // poster
// import { register } from "swiper/element/bundle";
// register();

// const swiperEl = document.querySelector(".mySwiper");

// // navigation 설정 포함
// swiperEl.params = {
//   ...swiperEl.params,
//   navigation: {
//     nextEl: ".custom-next",
//     prevEl: ".custom-prev"
//   }
// };

// 반드시 수동 초기화 호출
// swiperEl.initialize();

// const swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".custom-next",
//     prevEl: ".custom-prev"
//   }
// });

// poster

// Smooth scroll with GSAP
document.querySelectorAll(".frame-inner").forEach((link) => {
 link.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.querySelector(link.getAttribute("href"));
  if (target) {
   gsap.to(window, {
    duration: 1,
    scrollTo: target.offsetTop,
    ease: "power2.inOut",
   });
  }
 });
});
