const categoriesLabel = document.querySelector('.categories__form');
categoriesLabel.getElementsByTagName('label').forEach(label => {
  label.addEventListener("click", () => {
    categoriesLabel.getElementsByTagName('label').forEach(labelNotCheck => {
      labelNotCheck.classList.remove("categories__label--active");
    });
    label.classList.add("categories__label--active");
  });
});