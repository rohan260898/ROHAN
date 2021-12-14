/*Name and Email tag validation for contact us page*/
'use strict';
const $ = (selector) => document.querySelector(selector);
const processEntries = () => {
  const email = $('#email');
  const name = $('#name');
  
  var r = /^[a-zA-Z]+$/;
  var n = document.getElementById('name').value;
  var e = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var em = document.getElementById('email').value;
  let isValid = true;
  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  }
  else if(!e.test(em)){
    email.nextElementSibling.textContent = 'Incorrect Email.';
    isValid = false;
  } 
  else {
    email.nextElementSibling.textContent = '';
  }
  
if (name.value == '') {
    name.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  }
  else if (!r.test(n)){
    name.nextElementSibling.textContent = 'Name must have letters.';
    isValid = false;
  } 
  else {
    name.nextElementSibling.textContent = '';
  }
  
  if (isValid == true) {
    $('form').submit();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  $('#Submit').addEventListener('click', processEntries);
  
  
});
