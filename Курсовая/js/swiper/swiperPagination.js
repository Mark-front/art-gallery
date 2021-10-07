function swiperPagonation(swiperContainer, btnPrev, btnNext) {
  let outCurrent = swiperContainer.querySelector(".nav-and-pagination__pagination-current");
  let outTotal = swiperContainer.querySelector(".nav-and-pagination__pagination-total");
  outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;
  //адапитвное изменение
  window.addEventListener(`resize`, event => {
    if (window.matchMedia("(max-width: 1400px)").matches) {
      outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
      outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;
    } else {
      outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
      outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;
    }
  }, false);
  
  if (window.matchMedia("(max-width: 1400px)").matches) {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
    outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;
  } else {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
    outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText
  };

  btnPrev.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
  btnNext.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  swiperPagonation(
    document.querySelector(".gallery__swiper-container.swiper-320"),
    document.querySelector(".gallery__swiper-container.swiper-320 .swiper-button-prev"),
    document.querySelector(".gallery__swiper-container.swiper-320 .swiper-button-next")
  );
  swiperPagonation(
    document.querySelector(".gallery__swiper-container.swiper-740"),
    document.querySelector(".gallery__swiper-container.swiper-740 .swiper-button-prev"),
    document.querySelector(".gallery__swiper-container.swiper-740 .swiper-button-next")
  );
  swiperPagonation(
    document.querySelector(".gallery__swiper-container.swiper-1024"),
    document.querySelector(".gallery__swiper-container.swiper-1024 .swiper-button-prev"),
    document.querySelector(".gallery__swiper-container.swiper-1024 .swiper-button-next")
  );
  swiperPagonation(
    document.querySelector(".gallery__swiper-container.swiper-1920"),
    document.querySelector(".gallery__swiper-container.swiper-1920 .swiper-button-prev"),
    document.querySelector(".gallery__swiper-container.swiper-1920 .swiper-button-next")
  );
  swiperPagonation(
    document.querySelector(".publication__swiper-container"),
    document.querySelector(".publication__swiper-button-prev"),
    document.querySelector(".publication__swiper-button-next")
  );
})
