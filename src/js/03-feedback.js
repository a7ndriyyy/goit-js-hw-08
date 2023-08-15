import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaInput = document.querySelector('[name="message"]');

 onPageLoad();
 
form.addEventListener('input', throttle(getSaveFormState, 500));
form.addEventListener('submit', onPageReload);

 function onPageReload() {
  let currentLocalStorage = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: textareaInput.value }),
  );
  currentLocalStorage ? JSON.parse(localStorage.getItem('feedback-form-state')) : {};
};
 
   function getSaveFormState(evt) {
    evt.preventDefault();
  
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
  
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
  };
   
  function onPageLoad(){
    let currentLocalStorage = localStorage.getItem('feedback-form-state');
  if (currentLocalStorage) {
    currentLocalStorage = JSON.parse(currentLocalStorage);
    Object.entries(currentLocalStorage).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
};