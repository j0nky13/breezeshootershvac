var reviews = document.querySelectorAll('.carousel-review');
var dots = document.querySelectorAll('.dot');
var currentIndex = 0;

// Initialize Hammer.js
var carousel = document.querySelector('.carousel-container');
var hammer = new Hammer(carousel);

function displayCurrentReview() {
    reviews.forEach(function(review) {
        review.classList.remove('active');
    });
    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });
    reviews[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextReview() {
    currentIndex++;
    if (currentIndex >= reviews.length) {
        currentIndex = 0;
    }
    displayCurrentReview();
}

function prevReview() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }
    displayCurrentReview();
}



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dot')) {
        currentIndex = event.target.dataset.index;
        displayCurrentReview();
    }
});
// Handle swipes
hammer.on('swipeleft', nextReview);
hammer.on('swiperight', prevReview);

displayCurrentReview();

setInterval(nextReview, 8000);