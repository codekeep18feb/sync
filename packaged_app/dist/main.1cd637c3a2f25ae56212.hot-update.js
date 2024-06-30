"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
this["webpackHotUpdaterandomColorPackage"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHeader: () => (/* binding */ addHeader),\n/* harmony export */   changeBackgroundColor: () => (/* binding */ changeBackgroundColor),\n/* harmony export */   routeToChat: () => (/* binding */ routeToChat),\n/* harmony export */   routeToLogin: () => (/* binding */ routeToLogin),\n/* harmony export */   routeToSignup: () => (/* binding */ routeToSignup)\n/* harmony export */ });\n// src/index.js\n\n// Function to change the background color of the body\nfunction changeBackgroundColor() {\n  var colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];\n  var randomColor = colors[Math.floor(Math.random() * colors.length)];\n  document.body.style.backgroundColor = randomColor;\n}\n\n// Function to add a full-width header with a fixed height and red background color\nfunction addHeader() {\n  var header = document.createElement('header');\n  header.style.width = '100%';\n  header.style.height = '80px';\n  header.style.borderRadius = '10px';\n  header.style.backgroundColor = 'red';\n  header.style.color = 'white';\n  header.style.textAlign = 'center';\n  header.style.display = 'flex'; // Display header content in a flex container\n  header.style.justifyContent = 'space-between'; // Space items evenly along the main axis\n  header.style.alignItems = 'center'; // Center items along the cross axis\n\n  // Left part (Tezkit)\n  var leftPart = document.createElement('div');\n  leftPart.style.width = '50%';\n  leftPart.style.textAlign = 'left';\n  leftPart.innerText = 'Tezkit';\n  header.appendChild(leftPart);\n\n  // Right part (Notification icon, Signup, Login buttons)\n  var rightPart = document.createElement('div');\n  rightPart.style.display = 'flex';\n  rightPart.style.justifyContent = 'flex-end';\n  rightPart.style.width = '50%';\n\n  // Notification icon\n\n  // Signup menu button\n  var signupButton = createHeaderButton('Signup', function () {\n    routeToSignup();\n  });\n  rightPart.appendChild(signupButton);\n\n  // Login menu button\n  var loginButton = createHeaderButton('Login', function () {\n    routeToLogin();\n  });\n  rightPart.appendChild(loginButton);\n  header.appendChild(rightPart);\n\n  // Append header to the body\n  document.body.prepend(header);\n}\n\n// Function to create header buttons\nfunction createHeaderButton(text, onClick) {\n  var button = document.createElement('button');\n  button.textContent = text;\n  button.style.cursor = 'pointer';\n  button.style.color = 'white';\n  button.style.padding = '10px';\n  button.style.margin = '10px';\n  button.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';\n  button.style.borderRadius = '5px';\n  button.style.border = 'none';\n  button.addEventListener('click', onClick);\n  return button;\n}\n\n// Function to handle routing to /chat and render a box with an orange background\nfunction routeToChat() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the chat box\n  var chatBox = document.createElement('div');\n  chatBox.style.width = '100%';\n  chatBox.style.height = '200px';\n  chatBox.style.backgroundColor = 'orange';\n  chatBox.style.color = 'black';\n  chatBox.style.textAlign = 'center';\n  chatBox.style.lineHeight = '200px';\n  chatBox.innerText = 'Welcome to the Chat!';\n\n  // Append the chat box to the body\n  document.body.appendChild(chatBox);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/chat');\n}\n\n// Function to handle routing to /login and render a login form\nfunction routeToLogin() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the login form\n  var loginForm = createForm('Login', 'Enter your email', 'Enter your password', 'Login');\n  document.body.appendChild(loginForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/login');\n}\n\n// Function to handle routing to /signup and render a signup form\nfunction routeToSignup() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the signup form\n  var signupForm = createForm('Signup', 'Enter your email', 'Enter your password', 'Signup', 'Enter your name');\n  document.body.appendChild(signupForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/signup');\n}\n\n// Function to create a form with email, password inputs and optional name input\nfunction createForm(title, emailPlaceholder, passwordPlaceholder, submitButtonText) {\n  var namePlaceholder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var form = document.createElement('form');\n  form.style.width = '100%';\n  form.style.maxWidth = '400px';\n  form.style.margin = 'auto';\n  form.style.padding = '20px';\n  form.style.backgroundColor = '#f2f2f2';\n  form.style.border = '1px solid #ccc';\n  form.style.borderRadius = '5px';\n\n  // Title (Login or Signup)\n  var titleElement = document.createElement('h2');\n  titleElement.textContent = title;\n  titleElement.style.textAlign = 'center';\n  titleElement.style.marginBottom = '20px';\n  form.appendChild(titleElement);\n\n  // Email input\n  var emailInput = createFormInput('email', emailPlaceholder);\n  form.appendChild(emailInput);\n\n  // Password input\n  var passwordInput = createFormInput('password', passwordPlaceholder);\n  form.appendChild(passwordInput);\n\n  // Name input (for signup form only)\n  if (namePlaceholder) {\n    var nameInput = createFormInput('text', namePlaceholder);\n    form.appendChild(nameInput);\n  }\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = submitButtonText;\n  submitButton.style.width = '100%';\n  submitButton.style.padding = '10px';\n  submitButton.style.backgroundColor = '#4CAF50';\n  submitButton.style.color = 'white';\n  submitButton.style.border = 'none';\n  submitButton.style.borderRadius = '3px';\n  form.appendChild(submitButton);\n\n  // Form submission handling (prevent default for now)\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    // Handle form submission (e.g., send data to server)\n  });\n  return form;\n}\n\n// Function to create form input elements\nfunction createFormInput(type, placeholder) {\n  var input = document.createElement('input');\n  input.type = type;\n  input.placeholder = placeholder;\n  input.style.width = '100%';\n  input.style.marginBottom = '15px';\n  input.required = true; // Example: Marking inputs as required\n  return input;\n}\n\n//# sourceURL=webpack://randomColorPackage/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a89cf35b5a9329a2761")
/******/ })();
/******/ 
/******/ }
);