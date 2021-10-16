document.addEventListener("DOMContentLoaded", () => {
  if ((window.matchMedia("(max-width: 768px)").matches)) {
    const authors = document.querySelectorAll('.accordion__btn');
    const el = document.querySelector("#about-the-artist__name");
    authors.forEach(item => {
      item.addEventListener('click', () => {
        window.scrollBy(0, window.innerHeight);    
      });
    });
  }
});