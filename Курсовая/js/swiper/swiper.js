document.addEventListener("DOMContentLoaded", function(event)
{
  if ( window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".swiper-1920").remove();
  }
  var mySwiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

