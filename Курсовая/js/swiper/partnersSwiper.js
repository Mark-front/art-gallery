var mySwiper = new Swiper('.partners__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    561: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },

  
  // Navigation arrows
  navigation: {
    nextEl: '.partners__button-prev',
    prevEl: '.partners__button-next',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});