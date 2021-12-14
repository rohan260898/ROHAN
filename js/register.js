'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
// get form controls to check for validity
const uname = $('#fname');
const email = $('#e-mail');
const password = $('#psw');
const rpassword = $('#psw-repeat');

// check user entries for validity

//username validation
let isValid = true;
if (uname.value == '')
{
    uname.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
}
else if (!uname.value.match(/^[A-Za-z]+$/))
{
    uname.nextElementSibling.textContent = 'This field must have alphabet characters only.';
    isValid = false;
} 
else 
{
    uname.nextElementSibling.textContent = '';
}

//Email Validation
if (email.value == '')
{
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
}
else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
{
    email.nextElementSibling.textContent = 'Enter Valid E-mail Id.';
    isValid = false;
} 
else 
{
    email.nextElementSibling.textContent = '';
}

//Password Validation
if (password.value == '')
{
    password.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
}
else if (password.value.length <8 || password.value.length>12)
{
    password.nextElementSibling.textContent = 'Password must be in length of 8-12';
    isValid = false;
} 
else 
{
    password.nextElementSibling.textContent = '';
}
 
//Confirm Password Validation
if (rpassword.value == '')
{
    rpassword.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
} 
else if(password.value!=rpassword.value)
{
    rpassword.nextElementSibling.textContent = 'Confirm the password again.';
    isValid = false;
}
else 
{
    rpassword.nextElementSibling.textContent = '';
}

//Submit the form if all the fields are valid
if (isValid == true) {
    $('form').submit();
  }
};

//Reset the form 
const resetForm = () => {
    $('form').reset();
    $('#fname').nextElementSibling.textContent = '*';
    $('#e-mail').nextElementSibling.textContent = '*';
    $('#psw').nextElementSibling.textContent = '*';
    $('#psw-repeat').nextElementSibling.textContent = '*';
    $('#fname').focus();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    $('#btn1').addEventListener('click', processEntries);
    $('#btn2').addEventListener('click', resetForm);
    $('#fname').focus();
  });