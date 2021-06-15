// const navBar = document.getElementById('nav-bar');
// for (let i = 0; i < navBar.children.length; i++) {
//     child = navBar.children[i];
//     child.addEventListener("click", () => { clickedNav(child); });
// }

// function clickedNav(e) {
//     e.classList.contains("selectedNav") ? e.classList.remove("selectedNav") : e.classList.add("selectedNav");
// }

// selected[0].addEventListener("click", function() { location.href = "../index.html" });
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