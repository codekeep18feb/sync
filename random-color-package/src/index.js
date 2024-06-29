// src/index.js

// Function to change the background color of the body
export function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to add a full-width header with a fixed height and red background color
export function addHeader() {
    const header = document.createElement('header');
    header.style.width = '100%';
    header.style.height = '200px';
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    header.style.textAlign = 'center';
    header.style.lineHeight = '200px';
    header.innerText = 'This is a header';
    document.body.prepend(header);
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
