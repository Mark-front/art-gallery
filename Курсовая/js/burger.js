const burgerBtn = document.querySelector('.burger');

const navigationMenu = document.querySelector('.nav').cloneNode(true);
const selectMenu = document.querySelector('.bottom-header__list').cloneNode(true);
const btnLogIn = document.querySelector('.top-header__log-in').cloneNode(true);

const burgerMenu = document.querySelector('.header__burger-menu');

document.addEventListener("DOMContentLoaded", () => {
  burgerMenu.querySelector('.burger-menu__left').append(navigationMenu, btnLogIn);
  burgerMenu.querySelector('.burger-menu__right').append(selectMenu);
  burgerMenu.querySelector('.nav').classList.add('burger-content--active');
  burgerMenu.querySelector('.top-header__log-in').classList.add('burger-content--active');
  burgerMenu.querySelector('.bottom-header__list').classList.add('burger-content--active');

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--active");
  });
});