//Redirect to the login page if not already logged in
if(localStorage.getItem("loggedInUser") === null || localStorage.loggedInUser == ""){
    /*----------Commenting this just for the evaluation purpose, else the page will redirect 
        to other page when link of evaluation form opened-------------------------------------*/
    //window.location = "login.html";
    localStorage.setItem("loggedInUser", "rahulbt2016@gmail.com");
}

//Creating users if doesn't already exist
if(localStorage.getItem("users") === null || localStorage.users == ""){
    
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

}

//Execute when page is fully loaded
$(document).ready(function(){
    
    //Fetch dynamic details of logged-in user
    let users = JSON.parse(localStorage.users);
            
    users.forEach(user => {
        if(localStorage.loggedInUser == user.email){
            email = user.email;
            password = user.password;
            phone = user.phone;
            address = user.address;
            image = user.image;
            userName = user.name;
        }
    });

    $("form #user-name").attr("value",userName);
    $("form #user-image").attr("src",image);
    $("form #user-email").attr("value",email);
    $("form #user-password").attr("value",password);
    $("form #user-confirm-password").attr("value",password);
    $("form #user-phone").attr("value",phone);
    $("form #user-address").html(address);

    /*Click on the hidden input type file field, to open file explored to select new image, 
    when the edit icon is clicked*/
    $('#edit-image').click(function(){
        $('#new-image').click();
    });

    //Function triggered when the image is changed; to preview the new image
    $('#new-image').change(function(event){

        var tmppath = URL.createObjectURL(event.target.files[0]);
	    $("#user-image").fadeIn("fast").attr('src',tmppath);
    });

    //Function to handle the save button click event
    $('#save-changes').click(function(event){
        event.preventDefault();

        let newPassword = $("form #user-password").val();
        let newConfirmPassword = $("form #user-confirm-password").val();
        let newPhoneNumber = $("form #user-phone").val();
        let newAddress = $("form #user-address").val();

        if(newPassword == newConfirmPassword) {
            if(confirm("Save Changes?")){
                
                users.forEach(user => {
                    if(localStorage.loggedInUser == user.email){
                        user.password = newPassword;
                        user.phone = newPhoneNumber;
                        user.address = newAddress;
                    }
                });
        
                localStorage.setItem("users", JSON.stringify(users));
        
                
                //alert("Changes saved successfully!");
                //location.reload();
                $('#successful-save-message').css('display','block');
                //Scroll animation
                $('html, body').stop().animate({
                    'scrollTop': 0
                }, 100, 'swing');
            }
        }
        else {

            //alert("Passwords do not match!");
            //location.reload();
            $("#user-confirm-password").next().html("* Passwords do not match!");
            $("#user-confirm-password").css('margin-bottom','1vh');
            $("#user-confirm-password").next().css('margin-bottom','4vh');
            $("#user-confirm-password").css('border-color','red');
            //Scroll animation
            $('html, body').stop().animate({
                'scrollTop': $("#user-confirm-password").prev().offset().top
            }, 100, 'swing');

        }
        
    });

    //When confirm password text box is in focus
    $("#user-confirm-password").on('focus', function(){
        $("#user-confirm-password").next().html("");
        $("#user-confirm-password").css('margin-bottom','4vh');
        $("#user-confirm-password").next().css('margin-bottom','0');
        $("#user-confirm-password").css('border-color','');
    });

    //Disappear message on click
    $('#successful-save-message').click(function(){
        $('#successful-save-message').css('display','none');
    });

});
