const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector("#close");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});