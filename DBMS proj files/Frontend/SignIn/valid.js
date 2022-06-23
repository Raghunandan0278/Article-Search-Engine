const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const num = document.getElementById('num');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const fullname = document.getElementById('fullname');



if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    return false;
} else {
    setSuccessFor(username);
}

if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    return false;
} else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
    return false;
} else {
    setSuccessFor(email);
}

if(numValue === '') {
    setErrorFor(num, 'Phone number cannot be blank');
    return false;
} else if (!isnum(numValue)) {
    setErrorFor(num, 'Not a valid input');
    return false;
} else {
    setSuccessFor(num);
}

if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    return false;
} else {
    setSuccessFor(password);
}

if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
    return false;
} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
    return false;
} else{
    setSuccessFor(password2);
}
