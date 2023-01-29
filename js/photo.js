// photo carousel

const carousel2 = document.getElementById("carousel");
const enlargedPhoto = document.getElementById("enlarged-photo");

carousel2.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const img = document.createElement("img");
        img.src = event.target.src;
        enlargedPhoto.innerHTML = "";
        enlargedPhoto.appendChild(img);
        enlargedPhoto.style.display = "flex";
    }
});

enlargedPhoto.addEventListener("click", function() {
    enlargedPhoto.style.display = "none";
});

carousel2.addEventListener("touchstart", function(event) {
    if (event.target.tagName === "IMG") {
        const img = document.createElement("img");
        img.src = event.target.src;
        enlargedPhoto.innerHTML = "";
        enlargedPhoto.appendChild(img);
        enlargedPhoto.style.display = "flex";
    }
});

enlargedPhoto.addEventListener("touchend", function() {
    enlargedPhoto.style.display = "none";
});