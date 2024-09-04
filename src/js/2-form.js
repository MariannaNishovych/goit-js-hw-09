'use strict';

const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
console.log(form);
const textarea = document.querySelector('textarea');
console.log(textarea);