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