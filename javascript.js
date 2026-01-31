const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
