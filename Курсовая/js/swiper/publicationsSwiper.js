var publicationSwiper = new Swiper('.publications__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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

