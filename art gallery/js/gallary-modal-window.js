function createModalWindow(imgSrc, authorName, imgName, authorTimeLife, imgDescription) {
  const windowContainer = document.createElement("div");
  const window = document.createElement("div");
  const windowImg = document.createElement("img");
  const windowTextBox = document.createElement("div");
  const windowAuthorName = document.createElement("h3");
  const windowImgName = document.createElement("p");
  const windowAuthorTimeLife = document.createElement("p");
  const windowImgDescription = document.createElement("p");
  const btnCloseWindow = document.createElement("btn");

  windowContainer.classList.add("modal-window");
  windowContainer.id = "modal-window";
  window.classList.add("modal-window__card");
  windowImg.classList.add("modal-window__img");
  windowTextBox.classList.add("modal-window__text-box");
  windowAuthorName.classList.add("modal-window__author-name");
  windowImgName.classList.add("modal-window__img-name");
  windowAuthorTimeLife.classList.add("modal-window__author-life");
  windowImgDescription.classList.add("modal-window__description");
  btnCloseWindow.classList.add("modal-window__btn");

  windowImg.src = imgSrc;
  windowAuthorName.innerText = authorName;
  windowImgName.innerText = imgName;
  windowAuthorTimeLife.innerText = authorTimeLife;
  windowImgDescription.innerText = imgDescription;

  windowTextBox.append(btnCloseWindow, windowAuthorName, windowImgName, windowAuthorTimeLife, windowImgDescription);
  window.append(windowImg, windowTextBox);
  windowContainer.append(window);

  return {
    windowContainer,
    btnCloseWindow
  };
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery__item").forEach(item => {
    item.addEventListener("click", () => {
      let modalWindow = createModalWindow(item.querySelector(".gallery__image").src, "Казимир Малевич", "“Женщина с граблями”", "1931-1932", "Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.");
      document.querySelector("main").append(modalWindow.windowContainer);
      setTimeout(() => {
        document.querySelector(".modal-window").classList.add("modal-window--visible");
        document.querySelector("html").style.overflow = "hidden";
      }, 1);
      modalWindow.btnCloseWindow.addEventListener("click", () => {
        document.querySelector(".modal-window").classList.remove("modal-window--visible");
        setTimeout(() => {
          document.querySelector(".modal-window").remove();
          document.querySelector("html").style.overflow = "auto";
        }, 300);
      });
      let heightValue = 620;
      let displayHeight = window.innerHeight;
      if ((window.matchMedia(`(max-height: ${heightValue}px)`).matches)&&(heightValue-displayHeight>=10)) {
        let n = (heightValue-displayHeight)/10;
        document.querySelector('.modal-window__card').style.top = 50 + n + "%";
      }
      if ((window.matchMedia(`(max-height: 420px)`).matches)&&(heightValue-displayHeight>=10)) {
        let n = (heightValue-displayHeight)/10;
        document.querySelector('.modal-window__card').style.top = 60 + n + "%";
      }
      window.addEventListener(`resize`, event => {
        let heightValue = 620;
        let displayHeight = window.innerHeight;
        if ((window.matchMedia(`(max-height: ${heightValue}px)`).matches)&&(heightValue-displayHeight>=10)) {
          let n = (heightValue-displayHeight)/10;
          document.querySelector('.modal-window__card').style.top = 50 + n + "%";
        }
        if ((window.matchMedia(`(max-height: 420px)`).matches)&&(heightValue-displayHeight>=10)) {
          let n = (heightValue-displayHeight)/10;
          document.querySelector('.modal-window__card').style.top = 60 + n + "%";
        }
      }, false);
    });
  });
});
