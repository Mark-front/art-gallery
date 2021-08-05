function swiperPagonation(swiperContainer, outCurrent, outTotal, btnPrev, btnNext) {
  outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  outTotal.innerText = swiperContainer.querySelector(".swiper-pagination-total").innerText;

  btnPrev.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
  btnNext.addEventListener("click", (event) => {
    outCurrent.innerText = swiperContainer.querySelector(".swiper-pagination-current").innerText;
  });
}

swiperPagonation(document.querySelector(".gallery__swiper"), document.querySelector(".gallary__pagination-current"), document.querySelector(".gallary__pagination-total"), document.querySelector(".swiper-button-prev"), document.querySelector(".swiper-button-next"));