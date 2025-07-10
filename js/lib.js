
// 스와이퍼 커스텀 버튼 연결

import { register } from 'swiper/element/bundle';
register();

const swiperEl = document.querySelector('.mySwiper');

swiperEl.navigation = {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
};
