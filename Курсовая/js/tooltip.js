function tooltipOutside(tooltip, textBox) {
  let tooltipCoord = tooltip.getBoundingClientRect();
  let sideCoord = textBox.getBoundingClientRect();
  
  //left 
  if ((tooltipCoord.left <= sideCoord.left)) {
    console.log("left: ", tooltipCoord.left, sideCoord.left, (tooltipCoord.left <= sideCoord.left)&&!(tooltipCoord.right <= sideCoord.right))
    tooltip.classList.remove("right");
    tooltip.classList.add("left");
  } else {  //right
    if ((tooltipCoord.right >= sideCoord.right)) {
      console.log("right: ", tooltipCoord.right, sideCoord.right, (tooltipCoord.right >= sideCoord.right))
      tooltip.classList.remove("left");
      tooltip.classList.add("right");
    } else {  //center (default)
      if (!(tooltipCoord.left <= sideCoord.left)&&!(tooltipCoord.right >= sideCoord.right)) {
        tooltip.classList.remove("right");
        tooltip.classList.remove("left");
      }
    }
  } 
}

function tooltipBtnClick(btns) {
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle('tooltip__btn--active');
      let tooltip = btn.parentNode.querySelector(".tooltip__txt");
      if (btn.classList.contains('tooltip__btn--active')) {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = "visible";
      } else {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = "hidden";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if ((window.matchMedia("(max-width: 1024px)").matches)) {
    tooltipBtnClick(document.querySelectorAll(".tooltip__btn"));
  }
  tooltipOutside(document.querySelector("#tooltip-3"), document.querySelector(".container"));
  tooltipOutside(document.querySelector("#tooltip-2"), document.querySelector(".container"));
  tooltipOutside(document.querySelector("#tooltip-1"), document.querySelector(".container"));
  window.addEventListener(`resize`, event => {
    if ((window.matchMedia("(max-width: 1024px)").matches)) {
      tooltipBtnClick(document.querySelectorAll(".tooltip__btn"));
    }
    tooltipOutside(document.querySelector("#tooltip-3"), document.querySelector(".container"));
    tooltipOutside(document.querySelector("#tooltip-2"), document.querySelector(".container"));
    tooltipOutside(document.querySelector("#tooltip-1"), document.querySelector(".container"));
  }, false);
});