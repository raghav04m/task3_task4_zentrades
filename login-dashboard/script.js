document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.innerText = '';

        // Validate username (email format)
        if (!isValidEmail(usernameInput.value)) {
            errorMessage.innerText = 'Invalid email address';
            return;
        }

        // Validate password
        if (!isValidPassword(passwordInput.value)) {
            errorMessage.innerText = 'Invalid password';
            return;
        }

        // If both username and password are valid, you can proceed with form submission
        // You may want to redirect the user or perform other actions here
        console.log('Form submitted successfully!');
    });

    function isValidEmail(email) {
        // Use a regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Use your own password validation logic
        // Example: Require at least one uppercase letter, one number, and only allow '@' as a special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[^!@#$%^&*()_+={};:<>|?"`~]*$/;
        return passwordRegex.test(password);
    }
});
