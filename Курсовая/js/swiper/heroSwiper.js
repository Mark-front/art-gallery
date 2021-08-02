var mySwiper = new Swiper('.swiper-container__arts', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-partners-prev',
  //   prevEl: '.swiper-button-partners-next',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});