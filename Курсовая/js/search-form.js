document.querySelector(".top-header__search").addEventListener("submit", (event) => {
  return false;
});
document.querySelector(".search__btn--fake").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".search__btn--fake").style.visibility = "hidden";
  }
  document.querySelector(".top-header__search").classList.toggle("top-header__search--active");
});

document.querySelector(".search__close").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".search__btn--fake").style.visibility = "visible";
  }
  document.querySelector(".top-header__search").classList.toggle("top-header__search--active");
});