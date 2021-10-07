var publicationSwiper = new Swiper('.publications__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    741: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1701: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.publication__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.publication__swiper-button-next',
    prevEl: '.publication__swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

