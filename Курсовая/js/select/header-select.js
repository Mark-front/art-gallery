function selectOpen() {
  const headerElement = document.querySelectorAll('.bottom-header__btn');
  headerElement.forEach(el => {
    el.addEventListener('click', () => {
      if (el.parentElement.querySelector('.select-list')) {
        const list = el.parentElement.querySelector('.select-list');
        //закрытие открытых списков
        document.querySelectorAll('.select-list--visible-list').forEach(item => {
          item.classList.remove('select-list--visible-list');
          item.classList.add('select-list');
          el.classList.remove("bottom-header__btn--active");
        });
        document.querySelectorAll('.bottom-header__btn--active').forEach(item => {
          item.classList.remove("bottom-header__btn--active");
        });
        //открытие списка
        list.classList.remove('select-list');
        list.classList.add('select-list--visible-list');
        el.classList.add('bottom-header__btn--active');
      } else {
        if (el.parentElement.querySelector('.select-list--visible-list')) {
          //закрытие списка
          const list = el.parentElement.querySelector('.select-list--visible-list');
          list.classList.remove('select-list--visible-list');
          list.classList.add('select-list');
          el.classList.remove('bottom-header__btn--active');
        }
      }
    });
  });
}


selectOpen();