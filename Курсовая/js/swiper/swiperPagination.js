function swiperPagonation(swiperContainer, btnPrev, btnNext) {
  let outCurrent = swiperContainer.querySelector(".nav-and-pagination__pagination-current");
  let outTotal = swiperContainer.querySelector(".nav-and-pagination__pagination-total");
  outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;

  btnPrev.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
  btnNext.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  swiperPagonation(
    document.querySelector(".gallery__swiper-container"),
    document.querySelector(".swiper-button-prev"),
    document.querySelector(".swiper-button-next")
  );
  swiperPagonation(
    document.querySelector(".publication__swiper-container"),
    document.querySelector(".publication__swiper-button-prev"),
    document.querySelector(".publication__swiper-button-next")
  );
})
