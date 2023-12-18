import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  simulateTouch: false,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1100,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
