function selectOpen() {
  const headerElement = document.querySelectorAll('.art-directions-item-btn');
  headerElement.forEach(el => {
    el.addEventListener('click', () => {
      if (el.parentElement.querySelector('.hiding-list')) {
        const list = el.parentElement.querySelector('.hiding-list');
        document.querySelectorAll('.visible-list').forEach(item => {
          item.classList.remove('visible-list');
          item.classList.add('hiding-list');
        });
        list.classList.remove('hiding-list');
        list.classList.add('visible-list');
      } else {
        if (el.parentElement.querySelector('.visible-list')) {
          const list = el.parentElement.querySelector('.visible-list');
          list.classList.remove('visible-list');
          list.classList.add('hiding-list');
        }
      }
    });
  });
}


selectOpen();