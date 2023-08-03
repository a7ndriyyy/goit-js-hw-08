import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textareaInput = document.querySelector('.feedback-form textarea');

const FORM_VALUE_KEY = 'feedback-form-state';

getSaveFormState();

form.addEventListener('input', throttle(getSaveFormState, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit() {
    const storedState = localStorage.getItem('feedback-form-state');
    if (storedState) {
      const formData = JSON.parse(storedState);
      emailInput.value = formData.email;
      textareaInput.value = formData.message;
    }
  }
  form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    const formData = {
      email: emailInput.value,
      message: textareaInput.value,
    };
    console.log(formData);
    clearFormState();
  });
  function clearFormState() {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    textareaInput.value = '';
  }
function getSaveFormState() {
  const formData = {
    email: emailInput.value,
    message: textareaInput.value,
    email: emailInput.value || "",
    message: textareaInput.value || "",
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
// fillFormFromState();
onFormSubmit();