'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
    
// get form controls to check for validity
    const uname = $('#cname');
    const cardno = $('#ccnum');
    const month = $('#expmonth');
    const year = $('#expyear');
    const cvcno = $('#cvv');

// check user entries for validity
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

if (cardno.value == '')
{
    cardno.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
}
else if (!cardno.value.match(/^4[0-9]{12}(?:[0-9]{3})?$/))
{
    cardno.nextElementSibling.textContent = 'Enter Valid Card Number';
    isValid = false;
} 
else 
{
    cardno.nextElementSibling.textContent = '';
}

if (month.value == '')
{
    month.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
}
else 
{
    month.nextElementSibling.textContent = '';
}

if (year.value == '')
{
    year.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
} 
else 
{
    year.nextElementSibling.textContent = '';
} 

if (cvcno.value == '')
{
    cvcno.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
} 
else if(!cvcno.value.match(/^[0-9]{3}$/))
{
    cvcno.nextElementSibling.textContent = 'Enter Valid CVC Number';
    isValid = false;
}
else 
{
    cvcno.nextElementSibling.textContent = '';
}

//Submit the form if all the fields are valid
if (isValid == true) {
    $('form').submit();
  }
};



document.addEventListener('DOMContentLoaded', () => {
    $('#pay').addEventListener('click', processEntries);
    //$('#fname').focus();
});

