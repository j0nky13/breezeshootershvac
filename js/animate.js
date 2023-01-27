var currentIndex = 0;
var reviews = document.getElementsByClassName("review");
var dots = document.getElementsByClassName("dot");

function showNextReview() {
    reviews[currentIndex].style.display = "none";

    dots[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}

setInterval(showNextReview, 3000);

var carousel = document.getElementsByClassName("review-carousel")[0];
var hammer = new Hammer(carousel);
hammer.on("swipeleft", showNextReview);
hammer.on("swiperight", showPrevReview);

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentIndex = i;
        showNextReview();
    });
}

// lazy load intersecion observer

// Select the lazy-loaded section
var lazyLoadedSection = document.querySelector('.lazy-loaded-section');

// Create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
    // Check if the lazy-loaded section is visible
    if (entries[0].isIntersecting) {
        // Execute the carousel code
        // ...

        // Stop observing the lazy-loaded section
        observer.unobserve(lazyLoadedSection);
    }
});

// Start observing the lazy-loaded section
observer.observe(lazyLoadedSection);

// reveal text section


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint) {
            reveals[i].classList.add('active');

        } else {
            reveals[i].classList.remove('active'); // remove this to stop loop of revealing the sections on scroll
        }
    }

}
// ---------------------------


// ------------------------
// var currentIndex = 0;
// var reviews = document.getElementsByClassName("review");

// function showNextReview() {
//     reviews[currentIndex].style.display = "none";
//     currentIndex = (currentIndex + 1) % reviews.length;
//     reviews[currentIndex].style.display = "block";
// }

// var dots = document.getElementsByClassName("dot");

// function showNextReview() {
//     reviews[currentIndex].style.display = "none";
//     dots[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % reviews.length;
//     reviews[currentIndex].style.display = "block";
//     dots[currentIndex].classList.add("active");
// }


// setInterval(showNextReview, 8000);

// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function() {
//         currentIndex = i;
//         showNextReview();
//     });
// }
// -----------------------------
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

// var carousel = document.getElementsByClassName("review-carousel")[0];
// var hammer = new Hammer(carousel);
// hammer.on("swipeleft", showNextReview);
// hammer.on("swiperight", showPrevReview);

// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function() {
//         currentIndex = i;
//         showNextReview();
//     });
// }