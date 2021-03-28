const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const message = document.getElementById('message');
const container = document.querySelector('.container');

// Process Form Data ---------------------
let valid = false;
let passwordMatch = false;

function validateForm() {
    valid = form.checkValidity();
    // Style Message for an Error
    if (!valid) {
        message.textContent = 'Please Fill Out All Fields';
        message.style.color = 'rgb(255, 25, 83)';
        return;
    }

    // Check to see if Passwords Match
    if (passwordEl.value === confirmPasswordEl.value) {
        passwordMatch = true;
        passwordEl.style.borderColor = 'rgb(37, 124, 255)';
        confirmPasswordEl.style.borderColor = 'rgb(37, 124, 255)';
    }
    else {
        passwordMatch = false;
        message.textContent = 'Make Sure Password Match';
        message.style.color = 'rgb(255, 25, 83)';
        return;
    }

    // If Form is Valid & Passwords Match
    if (valid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'rgb(37, 124, 255)';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        webiste: form.website.value,
        password: form.password.value,
    };

    // Do something with Object
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    if (valid && passwordMatch) {
        storeFormData();
    }
}

// Event Listeners -----------------------
form.addEventListener('submit', processFormData);