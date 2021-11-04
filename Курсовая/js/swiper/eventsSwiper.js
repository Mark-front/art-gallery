var mySwiper = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  spaceBetween: 34,

  autoHeight: true,
  slidesPerView: 1,

  pagination: {
    el: '.events-swiper__pagination',
    type: 'bullets',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});