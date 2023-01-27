// // Get the element you want to show on scroll
// const textElement = document.querySelector('.text-to-show');

// // Set the initial state of the text to hidden
// textElement.style.opacity = 0;

// // Listen for the scroll event on the window
// window.onscroll = function() {
//     // Get the current scroll position
//     let scrollPos = window.pageYOffset;

//     // Check if the scroll position is greater than a certain value
//     if (scrollPos > 100) {
//         // If it is, show the text by setting the opacity to 1
//         textElement.style.opacity = 1;
//     } else {
//         // If it's not, hide the text by setting the opacity to 0
//         textElement.style.opacity = 0;
//     }
// };

// var currentIndex = 0;
// var reviews = document.getElementsByClassName("review");
// var dots = document.getElementsByClassName("dot");

// function showNextReview() {
//     reviews[currentIndex].style.display = "none";
//     dots[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % reviews.length;
//     reviews[currentIndex].style.display = "block";
//     dots[currentIndex].classList.add("active");
// }

// setInterval(showNextReview, 3000);

// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function() {
//         currentIndex = i;
//         showNextReview();
//     });
// }

// // Get all of the sections on the page
// var sections = document.querySelectorAll("section");

// // Set the initial state of all sections to be hidden
// for (var i = 0; i < sections.length; i++) {
//     sections[i].style.opacity = 0;
// }

// // When the user scrolls, check if each section is in the viewport
// window.addEventListener("scroll", function() {
//     for (var i = 0; i < sections.length; i++) {
//         var bounds = sections[i].getBoundingClientRect();
//         if (bounds.top < window.innerHeight && bounds.bottom > 0) {
//             sections[i].style.opacity = 1;
//         } else {
//             sections[i].style.opacity = 0;
//         }
//     }
// });

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

// Handle dot clicks
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('dot')) {
//         currentIndex = event.target.index;
//         displayCurrentReview();
//     }
// });

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

// function displayCurrentReview() {
//     // ...
//     reviews[currentIndex].classList.add('active');
//     reviews[currentIndex].classList.add('ease-in');
// }


// KEEP BELOW CODE, WILL FIGURE OUT HOW TO GET IT TO WORK SHORTLY

// function displayCurrentReview() {
//     reviews.forEach((review) => {
//         review.classList.remove('active');
//         review.classList.remove('out');
//     });
//     reviews[currentIndex].classList.add('active');
//     reviews[currentIndex].classList.add('out');
// }

// function displayCurrentReview() {
//     reviews.forEach((review) => {
//         review.classList.remove('active');
//         review.classList.remove('out');
//     });
//     reviews[currentIndex].classList.add('active');
//     reviews[currentIndex].classList.add('out');
//     reviews[(currentIndex + 1) % reviews.length].classList.add('in');
// }