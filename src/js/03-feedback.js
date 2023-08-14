import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textareaInput = document.querySelector('.feedback-form textarea');

const FORM_VALUE_KEY = 'feedback-form-state';

 onPageLoad();
 
 const formData = {
     email: "",
     message: "",
   };

form.addEventListener('input', throttle(getSaveFormState, 500));
form.addEventListener('submit', onPageReload);

 function onPageReload() {
   e.preventDefault()
    console.log(formData);
     clearFormState();
   }
 function clearFormState() {
     localStorage.removeItem('feedback-form-state');
    formData = {
     email: "",
     message: "",
   };
     form.reset()
   }
   function getSaveFormState(e) {
    formData[e.target.name]= e.target.value
   };

   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
   
  function onPageLoad(){
    const dataFromLS= JSON.parse(localStorage.getItem('feedback-form-state'));
   if(dataFromLS) {
    formData = dataFromLS;
    emailInput.value = formData.email;
    textareaInput.value = formData.message;
   }
 }