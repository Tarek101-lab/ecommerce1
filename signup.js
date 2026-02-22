
const signupForm = document.getElementById('signupForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

// Form validation and signup handling
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error messages
    fullnameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    fullnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let isValid = true;

    // Validate full name
    const fullnameValue = fullnameInput.value.trim();
    if (!fullnameValue) {
        fullnameError.textContent = 'Full name is required';
        fullnameError.style.display = 'block';
        isValid = false;
    } else if (fullnameValue.length < 2) {
        fullnameError.textContent = 'Name must be at least 2 characters';
        fullnameError.style.display = 'block';
        isValid = false;
    }

    // Validate email
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate password
    const passwordValue = passwordInput.value;
    if (!passwordValue) {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    }

    // Validate password confirmation
    const confirmPasswordValue = confirmPasswordInput.value;
    if (!confirmPasswordValue) {
        confirmPasswordError.textContent = 'Please confirm your password';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Store user data using JSON (simulating database storage)
        const userData = {
            fullname: fullnameValue,
            email: emailValue,
            password: passwordValue, // In real app, this should be hashed
            registeredAt: new Date().toISOString()
        };
        localStorage.setItem('newUser', JSON.stringify(userData));

        // Show success message
        successMessage.style.display = 'block';

        // Redirect to login page after 1.5 seconds (using setTimeout)
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
});

// Clear error messages on input
const inputs = [fullnameInput, emailInput, passwordInput, confirmPasswordInput];
const errors = [fullnameError, emailError, passwordError, confirmPasswordError];

inputs.forEach((input, index) => {
    input.addEventListener('input', function () {
        if (errors[index].textContent) {
            errors[index].style.display = 'none';
        }
    });
});