document.addEventListener("DOMContentLoaded", () => {

    //When user not logged in, hide logout button  & show login and register buttons
    if(localStorage.getItem("loggedInUser") === null || localStorage.loggedInUser == ""){
        document.querySelector("nav #login").style.display = "block";
        document.querySelector("nav #register").style.display = "block";
        document.querySelector("nav #logout").style.display = "none";

        //To hide loggged-in user's name
        document.querySelector("nav #logged-in-user").style.display = "none";
    }
    
    //When user already logged in, hide login and register buttons & show logout button
    else{
        document.querySelector("nav #login").style.display = "none";
        document.querySelector("nav #register").style.display = "none";
        document.querySelector("nav #logout").style.display = "block";

        //To show loggged-in user's name
        document.querySelector("nav #logged-in-user").style.display = "block";
        
        let users = JSON.parse(localStorage.users);

        users.forEach(user => {
            if(user.email == localStorage.loggedInUser)
            {
                document.querySelector("nav #logged-in-user").innerHTML = "Hello,<br>" + user.name;
            }
        });
    }

    //Managing logout button click event
    document.querySelector("nav #logout").addEventListener("click", function() {
        if(window.confirm("Logout?")){
            localStorage.loggedInUser = "";
            window.location="login.html";
        }
    }); 

});