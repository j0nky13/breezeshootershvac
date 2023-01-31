const contactBtn = document.getElementById("contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeBtn = document.querySelector(".close");

contactBtn.addEventListener("click", function() {
    contactModal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    contactModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
});