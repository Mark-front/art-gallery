const arrArtists = [
  {
    artistImg: "img/png/image 3.png",
    artistName: "Доменико Гирландайо",
    yearsOfLife: "2 июня 1448 — 11 января 1494.",
    biography: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)."
  },
];

function artistShow(artistActive) {
  arrArtists.forEach((artist, index) => {
    if(artist.artistName === artistActive) {
      document.querySelector('.about-the-artist__img').src = artist.artistImg;
      document.querySelector('.about-the-artist__name').innerText = artist.artistName;
      document.querySelector('.about-the-artist__life-year').innerText = artist.yearsOfLife;
      document.querySelector('.about-the-artist__text').innerText = artist.biography;
    } else {
      document.querySelector('.about-the-artist__img').src = "img/png/unknown-artist-img.png";
      document.querySelector('.about-the-artist__name').innerText = "Что мы о нём знаем?";
      document.querySelector('.about-the-artist__text').innerText = "Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!";
      document.querySelector('.about-the-artist__life-year').innerText = "";
      document.querySelector('.to-gallary-link').innerText = "В галерею";
    }
  });
}

function accordionBtnWork(arrArtists) {
  let artistActive = document.querySelector(".accordion__btn--active").innerText;

  document.querySelectorAll('.accordion__btn').forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".accordion__btn--active").forEach(btnActive => {
        btnActive.classList.remove("accordion__btn--active");
      });
      btn.classList.add("accordion__btn--active");
      artistActive = btn.innerText;
      artistShow(artistActive)
    });
  });

  artistShow(artistActive);
} 

document.addEventListener("DOMContentLoaded", () => {
  accordionBtnWork(arrArtists);
});