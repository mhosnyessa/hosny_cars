// document.getElementById("logo").onclick = function() {
//     location.href = "./index.html";
// };
let goToMainClasses = document.getElementsByClassName("go-to-main");
for (let i = 0; i < goToMainClasses.length; i++) {
    goToMainClasses[i].addEventListener("click", function() { location.href = "./index.html" });
}
let goToGalleryClasses = document.getElementsByClassName("go-to-gallery");
for (let i = 0; i < goToGalleryClasses.length; i++) {
    goToGalleryClasses[i].addEventListener("click", function() { location.href = "./gallery/index.html" });
}