import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaInput = document.querySelector('[name="message"]');

const FORM_VALUE_KEY = 'feedback-form-state';

 onPageLoad();
 
//  const formData = {
//   email: "",
//   message: "",
// };


form.addEventListener('input', throttle(getSaveFormState, 500));
form.addEventListener('submit', onPageReload);

 function getSaveFormState() {
  let currentLocalStorage = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: textareaInput.value }),
  );
  currentLocalStorage ? JSON.parse(localStorage.getItem('feedback-form-state')) : {};
};
 
   function onPageReload(evt) {
    evt.preventDefault();
    if(emailInput.value === "" || textareaInput.value === "")
    {return alert("fill all the fields")
    }
  
    const formData = new FormData(form);
    // formData.forEach((value, name) => console.log(value, name));
    console.log(formData);
  
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
  };
   
  function onPageLoad(){
    let currentLocalStorage = localStorage.getItem(FORM_VALUE_KEY);
  if (currentLocalStorage) {
    currentLocalStorage = JSON.parse(currentLocalStorage);
    Object.entries(currentLocalStorage).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
};