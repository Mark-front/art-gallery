function flagsRadio() {
  listRadio = document.querySelectorAll(".flags__country").forEach(radio => {
    radio.addEventListener("click", (event) => {
      if(!radio.hasAttribute("checked")) {
        document.querySelectorAll(".flags__country").forEach(radioCheck => {
          if(radioCheck.hasAttribute("checked")) {
            radioCheck.removeAttribute("checked");
            radioCheck.parentElement.classList.remove("flags__country--border")
          }
        });
        radio.setAttribute("checked", "");
        radio.parentElement.classList.add("flags__country--border")
      } 
    });
  });
}

flagsRadio();