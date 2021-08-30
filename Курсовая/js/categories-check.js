const categoriesLabel = document.querySelector('.categories__form');
categoriesLabel.querySelectorAll(".check__input").forEach(input => {
  if(input.hasAttribute('checked')) {
    input.parentElement.classList.add("categories__label--active");
  }
});
categoriesLabel.querySelectorAll(".check__input").forEach(input => {
  input.addEventListener("input", () => {
    if(!input.hasAttribute('checked')) {
      input.setAttribute("checked", "");
      input.parentElement.classList.add("categories__label--active");
    } else {
      input.removeAttribute("checked");
      input.parentElement.classList.remove("categories__label--active");
    }
  });
});