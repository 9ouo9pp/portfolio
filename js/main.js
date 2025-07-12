// intro================================================================
// title================
// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// 셔플 함수
function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

// 텍스트 등장 애니메이션 (속도 빠르게 + show 클래스 조작 유지)
function aniMainTitleIn() {
    const spans = document.querySelectorAll(".main-title span");
    const randomOrder = shuffle([...spans.keys()]);

    randomOrder.forEach((index, i) => {
        setTimeout(() => {
            spans[index].classList.add("show");
            spans[index].classList.remove("hide");
        }, i * 30);
    });
}

// 텍스트 퇴장 애니메이션 (속도 빠르게)
function aniMainTitleOut() {
    const spans = document.querySelectorAll(".main-title span");
    const randomOrder = shuffle([...spans.keys()]);

    randomOrder.forEach((index, i) => {
        setTimeout(() => {
            spans[index].classList.remove("show");
            spans[index].classList.add("hide");
        }, i * 20);
    });
}

// 초기 등장 실행
document.addEventListener("DOMContentLoaded", () => {
    aniMainTitleIn();
});

// ScrollTrigger로 사라지게 연결 및 다시 맨 위로 돌아가면 등장 재실행
ScrollTrigger.create({
    trigger: ".visual",
    start: "+=2%",
    onEnter: () => aniMainTitleOut(),
    onLeaveBack: () => aniMainTitleIn(),  // 뒤로 스크롤시 등장 재실행
});

// title end ================

// bg=======================
gsap.to(".bg", {
    backgroundPosition: "100% 100%",
    rotation: 15,
    duration: 8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});

// bg end=======================

// about me =================
gsap.set(".visual .bg-wrap", {
    // width: "25vw",
    // height: "60vh",
    borderRadius: "500px",
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        pinSpacing: true,
        // markers: true,
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

tl.to(".visual .bg-wrap", {
    clipPath: "inset(0% 0%)",
    duration: 2,
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    ease: "power2.inOut",
});

tl.to({}, { duration: 2 });
// about me end======================
// intro end================================================================

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
// app end=========================================================
