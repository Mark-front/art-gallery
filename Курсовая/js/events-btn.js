let hideValue = 3;
const arrayEventCard = document.querySelectorAll('.events__item');

function wrapperAdd(numberWrap, arrItemList, list) {
  let numberСontainers = Math.ceil(arrItemList.length/numberWrap);
  for (let index = 0; index < numberСontainers; index++) {
    const wrapperEventCard = document.createElement("div");
    for (let index = 0; index < numberWrap; index++) {
      if (arrItemList[0] !== undefined) {
        wrapperEventCard.append(arrItemList[0]);
        arrItemList.shift();
      } else {
        break;
      }
    }
    wrapperEventCard.classList.add("events__item--wrapper");
    list.append(wrapperEventCard);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if ((window.matchMedia("(max-width: 768px)").matches)) {
    hideValue = 2;
  } else {
    hideValue = 3;
  }
  window.addEventListener(`resize`, event => {
    if ((window.matchMedia("(max-width: 768px)").matches)) {
      hideValue = 2;
    } else {
      hideValue = 3;
    }
    document.querySelectorAll(".events__item--wrapper").forEach(item => {
      item.remove()
    });
    arrayEventCard.forEach((item, index,) => {
      item.classList.remove('events__item--hide');
      if (index >= hideValue) {
        item.classList.add('events__item--hide');
      }
    });
    wrapperAdd(hideValue, Array.from(arrayEventCard), document.querySelector(".events__list"));
  }, false);
  wrapperAdd(hideValue, Array.from(arrayEventCard), document.querySelector(".events__list"));
  arrayEventCard.forEach((item, index,) => {
    item.classList.remove('events__item--hide');
    if (index >= hideValue) {
      item.classList.add('events__item--hide');
    }
  });
  document.querySelector(".events__btn").addEventListener('click', () => {
    arrayEventCard.forEach((item, index) => {
      if (index >= hideValue) {
        item.classList.toggle('events__item--hide');
      }
    });
  });
});
