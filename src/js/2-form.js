const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    for (const key in parsedData) {
      form[key].value = parsedData[key];
      formData[key] = parsedData[key];
    }
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
  formData.email = '';
  formData.message = '';
});