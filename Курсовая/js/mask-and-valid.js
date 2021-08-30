const selectorTel = document.querySelectorAll("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
selectorTel.forEach(input => {
  im.mask(input);
});


function validateForms(selector) {
  new JustValidate(selector, {
    rules: { 
      name: {
        required: true,
        minLength: 2,
        function(name, value) {
          const nameValue = document.querySelector(selector).querySelector("input[type='text']").value;
          console.log(/^[а-яА-ЯёЁa-zA-Z. ]+$/.test(nameValue))
          return /^[а-яА-ЯёЁa-zA-Z. ]+$/.test(nameValue);
        }
      },
      tel: {
        required: true,
        function(name, value) {
          const phone =  document.querySelector(selector).querySelector("input[type='tel']").value;
          console.log(phone)
          return Number(phone) && phone.lenght === 10;
        }
      },
    },
    messages: {
      name: {
        required: 'Ничего не введено',
        minLength: 'Недостаточно символов',
        function: 'Недопустимый формат',
      },
      tel: {
        required: 'Ничего не введено',
        function: 'Недопустимый формат',
      },
    },
  });
}
validateForms('.order-a-call__form');