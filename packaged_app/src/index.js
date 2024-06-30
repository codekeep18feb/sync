// Import the CSS file
import './style.css';

// Function to change the background color of the body
export function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to add a full-width header with a fixed height and red background color
export function addHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const leftPart = document.createElement('div');
    leftPart.classList.add('left');
    leftPart.textContent = 'Tezkit';
    header.appendChild(leftPart);

    const rightPart = document.createElement('div');
    rightPart.classList.add('right');

    const notificationIcon = document.createElement('span');
    notificationIcon.textContent = '🔔';
    rightPart.appendChild(notificationIcon);

    const signupButton = createHeaderButton('Signup', () => {
        routeToSignup();
    });
    rightPart.appendChild(signupButton);

    const loginButton = createHeaderButton('Login', () => {
        routeToLogin();
    });
    rightPart.appendChild(loginButton);

    header.appendChild(rightPart);

    document.body.prepend(header);
}

function createHeaderButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

// Other functions (routeToChat, routeToLogin, routeToSignup, createForm, createFormInput) remain unchanged


// Function to handle routing to /chat and render a box with an orange background
export function routeToChat() {
    // Clear the body content
    document.body.innerHTML = '';

    // Create the chat box
    const chatBox = document.createElement('div');
    chatBox.style.width = '100%';
    chatBox.style.height = '200px';
    chatBox.style.backgroundColor = 'orange';
    chatBox.style.color = 'black';
    chatBox.style.textAlign = 'center';
    chatBox.style.lineHeight = '200px';
    chatBox.innerText = 'Welcome to the Chat!';

    // Append the chat box to the body
    document.body.appendChild(chatBox);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/chat');
}

// Function to handle routing to /login and render a login form
export function routeToLogin() {
    // Clear the body content
    document.body.innerHTML = '';

    // Create the login form
    const loginForm = createForm('Login', 'Enter your email', 'Enter your password', 'Login');
    document.body.appendChild(loginForm);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/login');
}

// Function to handle routing to /signup and render a signup form
export function routeToSignup() {
    // Clear the body content
    document.body.innerHTML = '';

    // Create the signup form
    const signupForm = createForm('Signup', 'Enter your email', 'Enter your password', 'Signup', 'Enter your name');
    document.body.appendChild(signupForm);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/signup');
}

// Function to create a form with email, password inputs and optional name input
function createForm(title, emailPlaceholder, passwordPlaceholder, submitButtonText, namePlaceholder = null) {
    const form = document.createElement('form');
    form.style.width = '100%';
    form.style.maxWidth = '400px';
    form.style.margin = 'auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f2f2f2';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';

    // Title (Login or Signup)
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '20px';
    form.appendChild(titleElement);

    // Email input
    const emailInput = createFormInput('email', emailPlaceholder);
    form.appendChild(emailInput);

    // Password input
    const passwordInput = createFormInput('password', passwordPlaceholder);
    form.appendChild(passwordInput);

    // Name input (for signup form only)
    if (namePlaceholder) {
        const nameInput = createFormInput('text', namePlaceholder);
        form.appendChild(nameInput);
    }

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = submitButtonText;
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    form.appendChild(submitButton);

    // Form submission handling (prevent default for now)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission (e.g., send data to server)
    });

    return form;
}

// Function to create form input elements
function createFormInput(type, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.style.width = '100%';
    input.style.marginBottom = '15px';
    input.required = true; // Example: Marking inputs as required
    return input;
}
