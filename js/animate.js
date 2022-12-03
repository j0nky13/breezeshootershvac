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