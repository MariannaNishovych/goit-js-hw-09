'use strict';

const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');



form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const message = event.currentTarget.elements.message.value.trim();
    const email = event.currentTarget.elements.email.value.trim();

    if (!email || !message) {
        return alert('Fill please all fields');
    };

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};


form.addEventListener('input', onFormInput);

function onFormInput (event) {
    formData = {  
    email: form.elements.email.value.trim(),  
    message: form.elements.message.value.trim(),  
}; 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));  
if (savedData) {  
formData = savedData;  
form.elements.email.value = formData.email;  
form.elements.message.value = formData.message;  
} 



