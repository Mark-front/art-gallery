const burgerBtn = document.querySelector('.burger');

const navigationMenu = document.querySelector('.nav').cloneNode(true);
const selectMenu = document.querySelector('.bottom-header__list').cloneNode(true);
const btnLogIn = document.querySelector('.top-header__log-in').cloneNode(true);

const burgerMenu = document.querySelector('.header__burger-menu');

document.addEventListener("DOMContentLoaded", () => {
  let linkLogIn = document.createElement("a");

  linkLogIn.classList.add("burger-menu__log-in");
  linkLogIn.innerText = "Войти";

  burgerMenu.querySelector('.burger-menu__left').append(navigationMenu, btnLogIn, linkLogIn);
  burgerMenu.querySelector('.burger-menu__right').append(selectMenu);
  burgerMenu.querySelector('.nav').classList.add('burger-content--active');


  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--active");
    burgerBtn.classList.toggle("burger--active");
    burgerBtn.querySelector(".burger__span").classList.toggle("burger__span--active");
  });
});