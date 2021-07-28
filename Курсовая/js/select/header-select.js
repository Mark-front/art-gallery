function selectOpen() {
  const headerElement = document.querySelectorAll('.bottom-header__btn');
  headerElement.forEach(el => {
    el.addEventListener('click', () => {
      if (el.parentElement.querySelector('.select-list')) {
        const list = el.parentElement.querySelector('.select-list');
        document.querySelectorAll('.select-list--visible-list').forEach(item => {
          item.classList.remove('select-list--visible-list');
          item.classList.add('select-list');
        });
        list.classList.remove('select-list');
        list.classList.add('select-list--visible-list');
      } else {
        if (el.parentElement.querySelector('.select-list--visible-list')) {
          const list = el.parentElement.querySelector('.select-list--visible-list');
          list.classList.remove('select-list--visible-list');
          list.classList.add('select-list');
        }
      }
    });
  });
}


selectOpen();