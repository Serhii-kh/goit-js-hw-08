import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
let LOCALSTORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  e.preventDefault();
  let LOCALSTORAGE_KEY = new FormData(e.currentTarget);
  console.log(LOCALSTORAGE_KEY);
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  const formData = {
    email: email.value,
    message: message.value,
  };

  console.log(formData);
  e.currentTarget.reset();
}
