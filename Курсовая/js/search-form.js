document.querySelector(".top-header__search").addEventListener("submit", (event) => {
  return false;
});
document.querySelector(".search__btn--fake").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".search__btn--fake").style.visibility = "hidden";
  }
  document.querySelector(".top-header__search").classList.toggle("top-header__search--active");
  if ((window.matchMedia("(max-width: 320px)").matches)) {
    setTimeout(() => {
      document.querySelector(".burger-menu").classList.add("burger-menu--search-active");
    }, 390);
  }
});

document.querySelector(".search__close").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelector(".search__btn--fake").style.visibility = "visible";
  }
  if ((window.matchMedia("(max-width: 320px)").matches)) {
    document.querySelector(".burger-menu").classList.remove("burger-menu--search-active");
  }
  setTimeout(() => {
    document.querySelector(".top-header__search").classList.toggle("top-header__search--active");
  }, 150);
});