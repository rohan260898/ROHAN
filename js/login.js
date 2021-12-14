//Function to invoke query selector
const $ = selector => document.querySelector(selector);

//Function to validate users' input in the email field
function validateEmail(){
    //Regular expression for the email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Fetching the input type email node, using selector query
    let emailNode =   $("#login-wrapper input[type='email']"); 

    if(emailNode.value == ""){
        emailNode.nextElementSibling.innerHTML="* Please enter your email address"; //Error message, when email field is empty
        emailNode.style.borderColor="red";    //Change the border of the field to red
        return false;
    }
    else if(!emailRegex.test(emailNode.value)){
        emailNode.nextElementSibling.innerHTML="* Please enter a valid email address (E.G.: abc@pqr.xyz)"; //Error message, when email field has an invalid email id
        emailNode.style.borderColor="red";
        return false;
    }
    else{
        emailNode.nextElementSibling.innerHTML="";  //Removing the error message
        emailNode.style.borderColor="";     //Removes red border colour
        return true;    //Returns true only when the validation is successful
    }
}

//Function to validate whether the user has entered a password or not
function validatePassword(){
    let passwordNode =   $("#login-wrapper input[type='password']")

    if(passwordNode.value == ""){
        passwordNode.nextElementSibling.innerHTML="* Please enter your password";
        passwordNode.style.borderColor="red";
        return false;
    }
    else{
        passwordNode.nextElementSibling.innerHTML="";
        passwordNode.style.borderColor="";
        return true;
    }
}

//Function to manage the even of clicking login button
const login = evt => {

    //Prevents the default action associated with this event
    evt.preventDefault();

    validateEmail();
    validatePassword();
    enteredEmail = $("#login-wrapper input[type='email']").value;
    enteredPassWord = $("#login-wrapper input[type='password']").value;
    
    if(validateEmail() && validatePassword()){
        //Only allow login when both email and password are validated and user exists
        
        users = JSON.parse(localStorage.users);
        let loggedInUserEmail = "";
        let loggedInUserPassword = "";
        let loggedInUserName = "";
        users.forEach(user => {
            if(user.email == enteredEmail){
                loggedInUserEmail = user.email;
                loggedInUserPassword = user.password;
                loggedInUserName = user.name;
            }
        });

        if(loggedInUserEmail!=""){
            if(loggedInUserPassword == enteredPassWord){
                localStorage.setItem("loggedInUser", loggedInUserEmail);
                //alert("Welcome, " + loggedInUserName + "!");
                window.location = "home.html";
            }
            else{
                //alert("Incorrect password entered. Please retry.");
                //Error message, when incorrect password entered
                $("#login-wrapper input[type='password']").nextElementSibling.innerHTML="* Incorrect password entered. Please retry."; 
                $("#login-wrapper input[type='password']").style.borderColor="red";
            }
        }
        else {
            //alert("User doesn't exist. Please retry.");
            //Error message, when email not found in out database
            $("#login-wrapper input[type='email']").nextElementSibling.innerHTML="* User doesn't exist. Please retry."; 
            $("#login-wrapper input[type='email']").style.borderColor="red";
        }
    }
}

//Function invoked when the page is nicely loaded
document.addEventListener("DOMContentLoaded", () => {

    //Redirecting to home page, if already logged-in
    if(!(localStorage.getItem("loggedInUser") === null) && localStorage.loggedInUser != ""){
        /*----------Commenting this just for the evaluation purpose, else the page will redirect 
        to other page when link of evaluation form opened-------------------------------------*/
        //window.location = "home.html";
    }

    //Creating an array of objects (users)
    let users = [
        {
            name: "Rahul Tiwari",
            email: "rahulbt2016@gmail.com",
            password: "abc#1234",
            phone: "4379917639",
            address: "1530 Albion Road,\nEtobicoke,\nToronto ON,\nM9V-2J1",
            image: "images/default-user-image.png"
        },
        {
            name: "Mansi Patel",
            email: "mansipatel@gmail.com",
            password: "abc#1234",
            phone: "454448785",
            address: "15 Albion Road,\nEtobicoke,\nToronto ON,\nM9V-2J1",
            image: "images/default-user-image.png"
        },
        {
            name: "Rohan Patel",
            email: "rohanpatel@gmail.com",
            password: "abc#1234",
            phone: "4343455688",
            address: "1530 Albion Road,\nEtobicoke,\nToronto ON,\nM9V-2J1",
            image: "images/default-user-image.png"
        },
        {
            name: "Raina Patel",
            email: "rainapatel@gmail.com",
            password: "abc#1234",
            phone: "4333455687",
            address: "1530 Albion Road,\nEtobicoke,\nToronto ON,\nM9V-2J1",
            image: "images/default-user-image.png"
        },
        {
            name: "Raveena Katariya",
            email: "raveenak@gmail.com",
            password: "abc#1234",
            phone: "4388755555",
            address: "1530 Albion Road,\nEtobicoke,\nToronto ON,\nM9V-2J1",
            image: "images/default-user-image.png"
        }
    ];

    //converting the array of objects into string and storing it in the local storage
    if(localStorage.getItem("users") === null)
        localStorage.setItem("users", JSON.stringify(users));

    //creating a new key-value pair in local storage to store logged-in user's email
    localStorage.setItem("loggedInUser", "");

    //validateEmail function called when focus is taken off the email field
    $("#login-wrapper input[type='email']").addEventListener("blur", validateEmail);
    
    //validatePassword function called when focus is taken off the password field
    $("#login-wrapper input[type='password']").addEventListener("blur", validatePassword);
    
    //Removing the error message, when the email field is in focus
    $("#login-wrapper input[type='email']").addEventListener("focus", () => {
        $("#login-wrapper input[type='email']").nextElementSibling.innerHTML=""; //Remove the error message
    });
    
    //Removing the error message, when the password field is in focus
    $("#login-wrapper input[type='password']").addEventListener("focus", () => {
        $("#login-wrapper input[type='password']").nextElementSibling.innerHTML=""; //Remove the error message
    });

    //Invoking login function, when login button is clicked
    $("#login-wrapper button").addEventListener("click", login);

});

