'use strict';
const $ = (selector) => document.querySelector(selector);
const processEntries = () => {
  // get form controls to check for validity
  const email = $('#email_address');
  const phone = $('#phone');
  const city = $('#city');
  const address = $('#address');
  const state = $('#state');
  const fname = $('#fname');
  const lname = $('#lname');

// check user entries for validity
let isValid = true;
let minlength= 3;
let maxlength=10;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneformat = "[0-9]{3}-[0-9]{3}-[0-9]{4}";

//first name validation-should have characters between 8-9 length and field should not be empty
  if (fname.value == ''||fname.value == null) {
    fname.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } 
  else if (fname.value.length < minlength || fname.value.length > maxlength) {
    fname.nextElementSibling.textContent = 'There must be between 8-10 characters.';
    isValid = false;
  } 
  else {
    fname.nextElementSibling.textContent = '';
  }
  
  //last name validation-should have characters between 8-9 length and field should not be empty
   if (lname.value == '') {
    lname.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  }
  else if (lname.value.length < minlength || lname.value.length > maxlength) {
    lname.nextElementSibling.textContent = 'There must be between 3-10 characters.';
    isValid = false;
  } 
   else {
    lname.nextElementSibling.textContent = '';
  } 
  
  //validation for address- should not be empty
  if (address.value == '') {
    address.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    address.nextElementSibling.textContent = '';
  } 

  //validation for city it should not be empty
  if (city.value == '') {
    city.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    city.nextElementSibling.textContent = '';
  }

  //validation for state it should not be empty
  if (state.value == '') {
    state.nextElementSibling.textContent = 'Please select a state.';
    isValid = false;
  } else {
    state.nextElementSibling.textContent = '';
  }

  //validation for email should have specified format and should not be empty
  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  }
  else if(!email_address.value.match(mailformat))
  {
    email.nextElementSibling.textContent = 'Please enter correct email';
    isValid = false; 
  }
   else {
    email.nextElementSibling.textContent = '';
  }

  //validation for phone number should have specified format and should not be emppty
  if (phone.value == '') {
    phone.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  }
  else if(!phone.value.match(phoneformat))
  {
    phone.nextElementSibling.textContent = 'Please enter correct phone';
    isValid = false; 
  }
   else {
    phone.nextElementSibling.textContent = '';
  } 
 // submit the form if all fields are valid
  if (isValid == true) {
    $('form').submit();
  }
};
// adding event listner to the submit button
document.addEventListener('DOMContentLoaded', () => {
  $('#submit1').addEventListener('click', processEntries);
});