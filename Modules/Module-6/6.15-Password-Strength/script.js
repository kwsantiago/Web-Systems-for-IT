function isStrongPassword(password){
    if(password.length < 8 || password.indexOf("password") != -1 || !hasUpperCase(password))
        return false;
    else
        return true;
}

function hasUpperCase(str) {
    return str.toLowerCase() != str;
}
