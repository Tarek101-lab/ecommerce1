
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Basic form validation and login handling
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

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

    if (isValid) {
        // Store user data in localStorage using JSON
        const userData = {
            email: emailValue,
            loginTime: new Date().toISOString(),
            lastLogin: new Date().toLocaleString()
        };
        localStorage.setItem('user', JSON.stringify(userData));

        // Show success message
        successMessage.style.display = 'block';

        // Redirect to home page after 1.5 seconds (using setTimeout)
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
});

// Clear error messages on input
emailInput.addEventListener('input', function () {
    if (emailError.textContent) {
        emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('input', function () {
    if (passwordError.textContent) {
        passwordError.style.display = 'none';
    }
});
