document.addEventListener("DOMContentLoaded", () => {
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: Math.round(box.top + scrollY - 50),
      left: Math.round(box.left + scrollX - 50)
    };
  }
  
  if ((window.matchMedia("(max-width: 768px)").matches)) {
    const authors = document.querySelectorAll('.accordion__btn');
    const el = document.querySelector("#about-the-artist__name");
    authors.forEach(item => {
      item.addEventListener('click', () => {
        window.scrollTo( 
          getCoords(document.querySelector(".catalog__about-the-artist--768 .about-the-artist__img")).left,
          getCoords(document.querySelector(".catalog__about-the-artist--768 .about-the-artist__img")).top
        );    
      });
    });
  }
});