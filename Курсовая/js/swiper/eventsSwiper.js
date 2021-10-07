var mySwiper = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  autoHeight: true,
  slidesPerView: 1,

  pagination: {
    el: '.events-swiper__pagination',
    type: 'bullets',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});