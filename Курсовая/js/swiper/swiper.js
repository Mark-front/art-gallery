document.addEventListener("DOMContentLoaded", function(event)
{
  //загружает слайдер при изменения размера экрана
  window.addEventListener(`resize`, event => {
    if (window.matchMedia("(max-width: 1400px)").matches) {
      document.querySelector(".swiper-1024").style.display = 'block';
      document.querySelector(".swiper-1920").style.display = 'none';
      document.querySelector(".swiper-320").style.display = 'none';
      document.querySelector(".swiper-740").style.display = 'none';
      if (window.matchMedia("(max-width: 740px)").matches) {
        document.querySelector(".swiper-740").style.display = 'block';
        document.querySelector(".swiper-1024").style.display = 'none';
        if (window.matchMedia("(max-width: 500px)").matches) {
          document.querySelector(".swiper-320").style.display = 'block';
          document.querySelector(".swiper-740").style.display = 'none';
        }
      }
    } else {
      document.querySelector(".swiper-1920").style.display = 'block';
      document.querySelector(".swiper-1024").style.display = 'none';
      document.querySelector(".swiper-740").style.display = 'none';
      document.querySelector(".swiper-320").style.display = 'none';
    }
  }, false);
  
  //загружает слайдер при загрузке сайта
  if (window.matchMedia("(max-width: 1400px)").matches) {
    document.querySelector(".swiper-1024").style.display = 'block';
    document.querySelector(".swiper-1920").style.display = 'none';
    if (window.matchMedia("(max-width: 740px)").matches) {
      document.querySelector(".swiper-740").style.display = 'block';
      document.querySelector(".swiper-1024").style.display = 'none';
      if (window.matchMedia("(max-width: 500px)").matches) {
        document.querySelector(".swiper-320").style.display = 'block';
        document.querySelector(".swiper-740").style.display = 'none';
      }
    }
  } else document.querySelector(".swiper-1920").style.display = "block";

  var mySwiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
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

