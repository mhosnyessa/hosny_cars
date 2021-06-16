/*Register page*/

function containsSymbol(str) {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(str)) {
        return true;
    } else { return false; }
}



function containDigit(str) {
    return /\d/.test(str);
}



function hasWhiteSpace(str) {
    return /\s/g.test(str);
}




function isLetter(str) {
    return str.toLowerCase() != str.toUpperCase();
}




function isLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}



function Validate() {
    const registerPassword = document.getElementById('registerPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!isLetter(registerPassword.charAt(0))) {
        alert("First character of password must be a letter");
        return false;
    }
    if (isLowerCase(registerPassword.charAt(0))) {
        alert("First character of password must be an UPPERCASE letter");
        return false;
    }
    if (!containsSymbol(registerPassword)) {
        alert("Password must contain at least one symbol");
        return false;
    }
    if (!containDigit(registerPassword)) {
        alert("Password must contain at least one digit");
        return false;
    }
    if (hasWhiteSpace(registerPassword)) {
        alert("Password must not contain any whitespaces");
        return false;
    }
    if (registerPassword.length != 8) {
        alert("Password must exactly be 8 characters");
        return false;
    }
    if (phoneNumber.length != 11) {
        alert("Phone Number must exactly be 11 digits");
        return false;
    }
    alert("You've registered succesfully");
    return true;
}

document.getElementById("register_form").addEventListener("submit", Validate);


// const passWord = document.querySelector('#registerPassword');
// const note = document.querySelector('.password-note');
// passWord.onfocus = function() {
//     note.classList.remove('invisible');
// }
// passWord.onblur = function() {
//     note.classList.add('invisible');
// }
// document.getElementById("register_form").addEventListener("submit", Validate);
// const passWord = document.querySelector('#registerPassword');
// const note = document.querySelector('.password-note');
// passWord.onfocus = function() {
//     note.classList.remove('invisible');
// }
// passWord.onblur = function() {
//     note.classList.add('invisible');
// }
let goToMainClasses = document.getElementsByClassName("go-to-main");
for (let i = 0; i < goToMainClasses.length; i++) {
    goToMainClasses[i].addEventListener("click", function() { location.href = "../index.html" });
}
let goToGalleryClasses = document.getElementsByClassName("go-to-gallery");
for (let i = 0; i < goToGalleryClasses.length; i++) {
    goToGalleryClasses[i].addEventListener("click", function() { location.href = "../gallery/index.html" });
}
let goToStaff = document.getElementsByClassName("go-to-staff");
for (let i = 0; i < goToStaff.length; i++) {
    goToStaff[i].addEventListener("click", function() { location.href = "../staff/index.html" });
}
let goToRegister = document.getElementsByClassName("go-to-register");
for (let i = 0; i < goToRegister.length; i++) {
    goToRegister[i].addEventListener("click", function() { location.href = "../register/index.html" });
}
let goToFavourites = document.getElementsByClassName("go-to-favourites");
for (let i = 0; i < goToFavourites.length; i++) {
    goToFavourites[i].addEventListener("click", function() { location.href = "../favourites/index.html" });
}