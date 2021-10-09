document.querySelector(".top-header__search").addEventListener("submit", (event) => {
  return false;
});
document.querySelector(".search__btn--fake").addEventListener("click", () => {
  document.querySelector(".top-header__search").classList.toggle("top-header__search--active");
});
// if ((window.matchMedia("(max-width: 1024px)").matches)) {
// }
// window.addEventListener(`resize`, event => {
//   if ((window.matchMedia("(max-width: 1024px)").matches)) {
//     listCategories.classList.add("visually-hidden");
//   } else {
//     listCategories.classList.remove("visually-hidden");
//   }
// }, false);
// document.addEventListener("DOMContentLoaded", () => {
// });