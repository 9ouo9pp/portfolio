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
  borderRadius: "200px"
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
    }
  }
});

tl.to(".visual .bg", {
  clipPath: "inset(0% 0%)",
  duration: 2,
  width: "100vw",
  height: "100vh",
  borderRadius: "0px",
  ease: "power2.inOut"
});

tl.to({}, { duration: 2 });

// pin page
