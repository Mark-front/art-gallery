document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.prise-form__text').forEach(input => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d]/g,'');
    });
  });
});