import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', onInputChange);

const returnValues = () => {
  const savedMsg = localStorage.getItem('feedback-msg');
  const savedMail = localStorage.getItem('user-mail');
	const formElements = formRef.elements;
	
  if (savedMsg) {
    formElements.message.value = savedMsg;
    console.log(savedMsg);
  }

  if (savedMail) {
    formElements.email.value = savedMail;
    console.log(savedMail);
  }
};

returnValues();

function onInputChange(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  const msg = message.value;
  const mail = email.value;
  localStorage.setItem('feedback-msg', msg);
  localStorage.setItem('user-mail', mail);
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
  localStorage.clear();
}
