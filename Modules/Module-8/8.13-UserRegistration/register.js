function checkForm() {
    var fullName = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordConfirm = document.forms["myForm"]["passwordConfirm"].value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    if (fullName.length<1) {
        document.getElementById('error-fullName').innerHTML = "Missing full name.";
        document.getElementById('error-fullName').style.display = "inline";
        document.getElementById('fullName').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if (email.length<1 || regex.test(email)) {
        document.getElementById('error-email').innerHTML = "Invalid or missing email address.";
        document.getElementById('error-email').style.display = "inline";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if (password.length < 10 || password.length > 20) {
        document.getElementById('error-password').innerHTML = "Password must be between 10 and 20 characters.";
        document.getElementById('error-password').style.display = "inline";
        document.getElementById('password').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if (!(passwordConfirm === password)) {
        document.getElementById('error-passwordConfirm').innerHTML = "Password and confirmation password don't match.";
        document.getElementById('error-passwordConfirm').style.display = "inline";
        document.getElementById('passwordConfirm').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});
