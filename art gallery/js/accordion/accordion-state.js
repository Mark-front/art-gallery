document.addEventListener("DOMContentLoaded", () => {
  const headerArr = document.querySelectorAll(".ui-accordion-header");
  headerArr[headerArr.length-1].classList.add('ui-accordion-header--last-border');
  headerArr.forEach((header, index) => {
    header.addEventListener('mouseover', () => {
      headerArr[index + 1].classList.add("ui-accordion-header--hover-bottom-border");
    });
    header.addEventListener('mouseout', () => {
      headerArr[index + 1].classList.remove("ui-accordion-header--hover-bottom-border");
    });
  });
});