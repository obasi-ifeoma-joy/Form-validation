const form  = document.querySelector('#create-account-form');
const FirstnameInput = document.querySelector('#Firstname');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const passwordInput =document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

   
form.addEventListener('submit', (event) => {
event.preventDefault();

validateInput();

});

const validateInput = () => {

// firstname

if(FirstnameInput.value.trim() == ''){
    setError(FirstnameInput, 'firstname cannot be empty');
}else if(FirstnameInput.value.trim().length < 5 || FirstnameInput.value.trim().length > 15){
    setError(FirstnameInput, 'firstname must be min of 5 and max of 15');
}else{
    setSuccess(FirstnameInput);
}

// lastname
if(lastnameInput.value.trim() == ''){
    setError(lastnameInput, 'lastname cannot be empty');
}else if(lastnameInput.value.trim().length < 5 || lastnameInput.value.trim().length > 15){
    setError(lastnameInput, 'lastname must be min of 5 and max of 15');
}else{
    setSuccess(lastnameInput);
}
// email
if(emailInput.value.trim() == ''){
    setError(emailInput, 'email cannot be empty');
}else if(isEmailValid(emailInput.value)){
    setSuccess(emailInput);
}else{
    setError(emailInput, 'provide valid email');
}
// password
if(passwordInput.value.trim() == ''){
    setError(passwordInput, 'password cannot be empty');
}else if(passwordInput.value.trim().length < 4 || passwordInput.value.trim().length > 8){
    setError(passwordInput, 'password must be min 4 and max of 8');
}else{
    setSuccess(passwordInput);
}

// confirm password
if(confirmPasswordInput.value.trim() ==''){
    setError(confirmPasswordInput, 'password cannot be empty');
}else if(confirmPasswordInput.value !== passwordInput.value){
    setError(confirmPasswordInput, 'password must match');
}else{
    setSuccess(confirmPasswordInput);
}

}

const setError = (element, errorMessage) => {

const parent = element.parentElement;

if(parent.classList.contains('success')){
parent.classList.remove('success');
}

parent.classList.add('error');
const smallTag = parent.querySelector('small');
smallTag.textContent = errorMessage;

}

const setSuccess = (element) => {
const parent = element.parentElement;

if(parent.classList.contains('error')){
parent.classList.remove('error');
}

parent.classList.add('success');

}

const isEmailValid = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

};