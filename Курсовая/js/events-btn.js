document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.events__item').forEach((item, index) => {
    if (index >= 3) {
      item.classList.add('events__item--hide');
    }
  });
  document.querySelector(".events__btn").addEventListener('click', () => {
    document.querySelectorAll('.events__item').forEach((item, index) => {
      if (index >= 3) {
        item.classList.toggle('events__item--hide');
      }
    });
  });
});
