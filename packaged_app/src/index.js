// Import the CSS file
import './style.css';


import myImage from './tezkit_logo.jpg';

// Function to change the background color of the body
export function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to add a full-width header with a fixed height and red background color
// Function to add a full-width header with a fixed height and red background color

// Function to add a full-width header with a fixed height and red background color
export function addHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const leftPart = document.createElement('div');
    leftPart.classList.add('left');

    // Create an img element for the logo
    const logo = document.createElement('img');
    logo.src = myImage;
    logo.alt = 'Tezkit Logo';
    logo.style.height = '50px'; // Adjust the height as needed
    logo.style.marginRight = '10px'; // Optional: Add some space between the logo and text
    leftPart.appendChild(logo);

    const logoText = document.createElement('div');
    logoText.textContent = 'Tezkit';
    logoText.style.display = 'inline-block'; // To align it horizontally with the image
    logoText.style.verticalAlign = 'middle'; // To align it vertically with the image
    leftPart.appendChild(logoText);

    header.appendChild(leftPart);

    const rightPart = document.createElement('div');
    rightPart.classList.add('right');

    const notificationIcon = document.createElement('span');
    notificationIcon.textContent = '🔔';
    notificationIcon.style.cursor = 'pointer';
    notificationIcon.addEventListener('click', toggleModal);
    rightPart.appendChild(notificationIcon);

    const token = localStorage.getItem('tezkit_token');
    if (!token) {
        const loginButton = createHeaderButton('Login', () => {
            routeToLogin();
        });
        rightPart.appendChild(loginButton);

        const signupButton = createHeaderButton('Signup', () => {
            toggleSignup();
        });
        rightPart.appendChild(signupButton);
    } else {
        const logoutButton = createHeaderButton('Logout', () => {
            // Logout here
            localStorage.removeItem('tezkit_token');
            // Reload the page
            window.location.reload();
        });
        rightPart.appendChild(logoutButton);

        const chatIcon = document.createElement('span');
        chatIcon.textContent = '💬';
        chatIcon.style.cursor = 'pointer';
        chatIcon.addEventListener('click', toggleChatModal);
        rightPart.appendChild(chatIcon);
    }

    header.appendChild(rightPart);

    document.body.prepend(header);

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'notificationModal';
    modal.textContent = 'This is the notification modal';
    document.body.appendChild(modal);

    // Create the chat_modal element
    const chat_modal = document.createElement('div');
    chat_modal.classList.add('chat_modal');
    chat_modal.id = 'chatModal';
    chat_modal.textContent = 'This is the chat modal';
    document.body.appendChild(chat_modal);
}
function createHeaderButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

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
    const loginForm = createLoginForm();
    document.body.appendChild(loginForm);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/login');
}

// Function to toggle the modal visibility
function toggleModal() {
    const modal = document.getElementById('notificationModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}


// Function to toggle the modal visibility
function toggleChatModal() {
    const chat_modal = document.getElementById('chatModal');
    if (chat_modal.style.display === 'none' || chat_modal.style.display === '') {
        chat_modal.style.display = 'block';
    } else {
        chat_modal.style.display = 'none';
    }
}

// Function to toggle the signup form visibility
function toggleSignup() {
    const existingForm = document.getElementById('signupForm');
    if (existingForm) {
        existingForm.remove();
    } else {
        const signupForm = createSignupForm();
        signupForm.id = 'signupForm';
        document.body.appendChild(signupForm);
    }
}

// Function to create the signup form
function createSignupForm() {
    const form = document.createElement('form');
    form.style.width = '100%';
    form.style.maxWidth = '400px';
    form.style.margin = 'auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f2f2f2';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    form.id = 'signupForm';

    // Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Signup';
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '20px';
    form.appendChild(titleElement);

    // Full name input
    const fullNameInput = createFormInput('text', 'Enter your full name', 'full_name');
    form.appendChild(fullNameInput);

    // Phone number input
    const phoneInput = createFormInput('text', 'Enter your phone number', 'phone');
    form.appendChild(phoneInput);

    // Email input
    const emailInput = createFormInput('email', 'Enter your email', 'email');
    form.appendChild(emailInput);

    // Password input
    const passwordInput = createFormInput('password', 'Enter your password', 'password');
    form.appendChild(passwordInput);

    // Gender input
    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender';
    form.appendChild(genderLabel);

    const genderMale = document.createElement('input');
    genderMale.type = 'radio';
    genderMale.name = 'gender';
    genderMale.value = 'Male';
    form.appendChild(genderMale);
    form.appendChild(document.createTextNode('Male'));

    const genderFemale = document.createElement('input');
    genderFemale.type = 'radio';
    genderFemale.name = 'gender';
    genderFemale.value = 'Female';
    form.appendChild(genderFemale);
    form.appendChild(document.createTextNode('Female'));

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Signup';
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    form.appendChild(submitButton);

    // Form submission handling
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            full_name: formData.get('full_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            gender: formData.get('gender'),
            type: 'user',
            tenant: 'tenant1',
            app_name: 'mynewapp32sdfsd',
        };

        try {
            const response = await fetch('https://68kdwpc2kg.execute-api.ap-south-1.amazonaws.com/prod/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Navigate to /login on successful signup
                routeToLogin();
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    return form;
}

// Function to create the login form
function createLoginForm() {
    const form = document.createElement('form');
    form.style.width = '100%';
    form.style.maxWidth = '400px';
    form.style.margin = 'auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f2f2f2';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    form.id = 'loginForm';

    // Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Login';
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '20px';
    form.appendChild(titleElement);

    // Email input
    const emailInput = createFormInput('email', 'Enter your email', 'email');
    form.appendChild(emailInput);

    // Password input
    const passwordInput = createFormInput('password', 'Enter your password', 'password');
    form.appendChild(passwordInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    form.appendChild(submitButton);

    // Form submission handling
    form.addEventListener('submit', handleLogin);

    return form;
}

// Function to create form input elements
function createFormInput(type, placeholder, name) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.name = name;
    input.style.width = '100%';
    input.style.marginBottom = '15px';
    input.required = true; // Example: Marking inputs as required
    return input;
}

// Function to handle login form submission
async function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        type: 'user',
        email: formData.get('email'),
        password: formData.get('password'),
        app_name: 'mynewapp32sdfsd',
    };

    const headersList = {
        'Accept': '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch('https://68kdwpc2kg.execute-api.ap-south-1.amazonaws.com/prod/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headersList,
        });

        if (response.ok) {

            //Save the token
            const responseData = await response.json();
            console.log("Token:", responseData.token); // Assuming token is in the response data
            localStorage.setItem('tezkit_token',responseData.token)
            // Navigate to / root on successful login
            routeToRoot();

        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle routing to / root and render a welcome message
function routeToRoot() {
    // Clear the body content
    // document.body.innerHTML = '';

    // // Create the welcome message
    // const welcomeMessage = document.createElement('div');
    // welcomeMessage.style.width = '100%';
    // welcomeMessage.style.height = '200px';
    // welcomeMessage.style.backgroundColor = '#4CAF50';
    // welcomeMessage.style.color = 'white';
    // welcomeMessage.style.textAlign = 'center';
    // welcomeMessage.style.lineHeight = '200px';
    // welcomeMessage.innerText = 'Welcome to the Home Page!';

    // // Append the welcome message to the body
    // document.body.appendChild(welcomeMessage);

    // // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/');
    window.location.reload()

}

// Attach the login form submit event handler to the login form
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
