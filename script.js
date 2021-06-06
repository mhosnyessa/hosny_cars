var galleryElement = document.getElementsByClassName("gallery-l");
var browseGallary = document.getElementById("browse-gallery");
browseGallary.addEventListener('click', fun);

console.log("hello");
console.log("hello");
alert("hello");
console.log("hello");
console.log(galleryElement);

for (var i = 0; i < galleryElement.length; i++) {
    galleryElement[i].addEventListener('click', fun);
}

function fun() {
    alert('hello');
}