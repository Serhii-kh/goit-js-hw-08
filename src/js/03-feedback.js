import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onInputChange, 500));

function onInputChange(e) {
  e.preventDefault();

  formData[e.target.name] = e.target.value;
  const JSONformData = JSON.stringify(formData);

  localStorage.setItem('LOCALSTORAGE_KEY', JSONformData);
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  const submitFormData = {
    email: email.value,
    message: message.value,
  };

  console.log(submitFormData);
  e.currentTarget.reset();
  localStorage.removeItem('LOCALSTORAGE_KEY');
}

const returnValues = () => {
  const parsedStorageData = JSON.parse(
    localStorage.getItem('LOCALSTORAGE_KEY')
  );

  if (parsedStorageData) {
    const savedMsg = parsedStorageData.message;
    const savedEmail = parsedStorageData.email;
    const formElements = formRef.elements;
    formElements.message.value = savedMsg;
    formElements.email.value = savedEmail;
  }
};

returnValues();
