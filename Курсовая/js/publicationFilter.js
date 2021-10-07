let listCategories = document.querySelector('.categories__list');
let categoriesHeader = document.querySelector('.categories__header');
let categoriesHeaderIcon = document.querySelector('.categories__header-icon');
let inpuntCheckArr = document.querySelectorAll('.check__input');


//создание и изменение списка выбранных элементов
function createListCheckedElements(arrElem) {
  const listChecked = document.createElement('ul');
  listChecked.classList.add('categories__list-checked');
  console.log(listChecked)
  arrElem.forEach(item => {
    if (item.checked) {
      let copyItem = item.parentElement.cloneNode(true);
      console.log(copyItem)
      listChecked.append(copyItem);
    }
  });
  return listChecked;
}

//Изменение и скрытие листа 
function changeCategoriesList(inputArr, iconHeader, list, btn) {
  document.querySelector
  let listChecked = createListCheckedElements(Array.from(inputArr));
  document.querySelector('.categories__form').appendChild(listChecked);
  btn.addEventListener("click", () => {
    document.querySelectorAll('.categories__list-checked').forEach(item => {
      item.remove()
    });
    listChecked = createListCheckedElements(Array.from(inputArr));
    document.querySelector('.categories__form').appendChild(listChecked);
    iconHeader.classList.toggle("categories__header-icon--active");
    list.classList.toggle("visually-hidden");
    if (!list.classList.contains("visually-hidden")) {
      listChecked.classList.toggle("visually-hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if ((window.matchMedia("(max-width: 600px)").matches)) {
    changeCategoriesList(inpuntCheckArr, categoriesHeaderIcon, listCategories, categoriesHeader);
  }
  // window.addEventListener(`resize`, event => {
  //   if ((window.matchMedia("(max-width: 320px)").matches)) {
  //     changeCategoriesList(inpuntCheckArr, categoriesHeaderIcon, listCategories, categoriesHeader);
  //   }
  // }, false);
});