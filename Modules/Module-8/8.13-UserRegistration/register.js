function checkForm() {
    var fullName = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordConfirm = document.forms["myForm"]["passwordConfirm"].value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (fullName.length < 1) {
        document.getElementById('errorList').innerHTML += '<li>Missing full name.</li>'
        document.getElementById('fullName').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if (email.length < 1 || !regex.test(email)) {
        document.getElementById('errorList').innerHTML += '<li>Invalid or missing email address.</li>'
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if (password.length < 10 || password.length > 20) {
        document.getElementById('errorList').innerHTML += '<li>Password must be between 10 and 20 characters.</li>'
        document.getElementById('password').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    if(!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/)){
        if(!password.match(/[a-z]/)){
            document.getElementById('errorList').innerHTML += '<li>Password must contain at least one lowercase character.</li>'
            document.getElementById('password').style.border = "2px solid red";
            document.getElementById('formErrors').style.display = "block";
        }
        if(!password.match(/[A-Z]/)){
            document.getElementById('errorList').innerHTML += '<li>Password must contain at least one uppercase character.</li>'
            document.getElementById('password').style.border = "2px solid red";
            document.getElementById('formErrors').style.display = "block";
        }
        if(!password.match(/[0-9]/)){
            document.getElementById('errorList').innerHTML += '<li>Password must contain at least one digit.</li>'
            document.getElementById('password').style.border = "2px solid red";
            document.getElementById('formErrors').style.display = "block";
        }
    }
    if (passwordConfirm.length < 1 || !(passwordConfirm === password)) {
        document.getElementById('errorList').innerHTML += "<li>Password and confirmation password don't match.</li>"
        document.getElementById('passwordConfirm').style.border = "2px solid red";
        document.getElementById('formErrors').style.display = "block";
    }
    return false;
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});
