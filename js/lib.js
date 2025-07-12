// // poster
// const swiper = new Swiper(".mySwiper", {
//     loop: true,
//     loopAdditionalSlides: 2,
//     slidesPerView: 3.5,
//     centeredSlides: true,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".custom-next",
//         prevEl: ".custom-prev"
//     }
// });
// console.log(swiper.realIndex)
const swiper = new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides: 2,
    centeredSlides: true,
    spaceBetween: 40, // 슬라이드 간 간격을 더 줌
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev"
    },
    watchOverflow: true,
    slideVisibleClass: 'swiper-slide-visible',
    observer: true,
    observeParents: true,
    breakpoints: {
        1440: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        480: {
            slidesPerView: 1.5,
        }
    }
});

console.log(swiper.realIndex);

//poster end

// Smooth scroll with GSAP
// document.querySelectorAll(".frame-inner").forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const target = document.querySelector(link.getAttribute("href"));
//         if (target) {
//             gsap.to(window, {
//                 duration: 1,
//                 scrollTo: target.offsetTop,
//                 ease: "power2.inOut",
//             });
//         }
//     });
// });

// modal
const swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// modal end