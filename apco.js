const passwordBox = document.getElementById('password-box');
const hiddenContent = document.getElementById('hidden-content');
const hiddenName = document.getElementById('hidden-name');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const customAlert = document.getElementById('custom-alert');
const customAlertMessage = document.getElementById('custom-alert-message');
const customAlertClose = document.getElementById('custom-alert-close');
const overlay = document.getElementById('overlay');
const detailsForm = document.getElementById('details-form');

// Replace 'your_password' with the actual password you want to use
const correctPassword = 'i am special';

customAlertClose.addEventListener('click', () => {
    customAlert.style.display = 'none';
    overlay.style.display = 'none';
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const enteredName = nameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if name is entered
    if (!enteredName) {
        showCustomAlert('You Havent Entered Your Name, Yet');
        return;
    }

    // Check password
    if (enteredPassword === correctPassword) {
        passwordBox.style.display = 'none';

        // Apply fade-in animation to show hidden content
        hiddenContent.style.display = 'block';
        setTimeout(() => {
            hiddenContent.style.opacity = '1';
        }, 150); 

        hiddenName.textContent = enteredName;
        overlay.style.display = 'none';
    } else {
        showCustomAlert('the Password is wrong, try once again');
        overlay.style.display = 'block';
    }
});

function showCustomAlert(message) {
    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';
    overlay.style.display = 'block';
    setTimeout(() => {
        customAlert.style.opacity = '1';
    }, 150); 
}

