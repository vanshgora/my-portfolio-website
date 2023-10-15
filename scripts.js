document.addEventListener("DOMContentLoaded", function () {
    // --------------------------------------------------position1 for locomotive js
    ScrollReveal().reveal('.animate__animated', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        delay: 100,
    });

    const animateElements = document.querySelectorAll('.animate__animated');
    animateElements.forEach((element) => {
        element.style.visibility = 'hidden';
    });

    const timeline = anime.timeline({
        duration: 800,
        delay: anime.stagger(100),
    });

    animateElements.forEach((element) => {
        timeline.add({
            targets: element,
            opacity: 1,
            translateY: 0,
            easing: 'easeOutExpo',
        });
    });

    // Add scroll-to functionality for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            scroll.scrollTo(targetSection);
        });
    });
});







// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const navbarBurger = document.querySelector(".navbar-burger");
    const navbarMenu = document.getElementById("navbarMenu");

    navbarBurger.addEventListener("click", function () {
        navbarBurger.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
});





// home section js
//---------------------------------------------------position 2


// Initialize ScrollReveal.js
ScrollReveal().reveal("#name, #profession", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 300,
});

// Add an entrance animation using Anime.js
anime.timeline({
    targets: "#name, #profession",
    opacity: [0, 1],
    translateY: [50, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(200),
});







// ==========================================================position3 

ScrollReveal().reveal("#about-me", {
    duration: 800,
    distance: "20px",
    origin: "bottom",
    delay: 200,
    reset: true,
});
anime({
    targets: ".about-me-text",
    opacity: 1,
    translateY: [-20, 0],
    duration: 1000,
    delay: 200,
    easing: "easeOutSine",
});

anime({
    targets: ".about-me-image img",
    opacity: 1,
    translateX: [20, 0],
    duration: 1000,
    delay: 200,
    easing: "easeOutSine",
});







// portfolio script
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#portfolio'),
        smooth: true,
    });

    // Initialize ScrollReveal.js
    const sr = ScrollReveal({
        duration: 1000,
        scale: 1,
    });

    // Add ScrollReveal.js animations to portfolio items
    sr.reveal('.portfolio-item', {
        origin: 'bottom',
        distance: '50px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Initialize Anime.js animations
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const animeAnimation = anime({
                targets: item,
                scale: 1.1,
                duration: 300,
                easing: 'easeOutQuad',
            });
        });

        item.addEventListener('mouseleave', () => {
            anime({
                targets: item,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad',
            });
        });
    });
});









document.addEventListener('DOMContentLoaded', function () {
    // Get all social media links
    const socialLinks = document.querySelectorAll('.social-link');

    // Add a click event listener to each social media link
    socialLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Remove the "active" class from all links
            socialLinks.forEach(function (l) {
                l.classList.remove('active');
            });

            // Add the "active" class to the clicked link
            link.classList.add('active');
        });
    });
});







//certificate section
// -------------------------------------------------------position4



// Use ScrollReveal.js to trigger animations when certificates are in view
ScrollReveal().reveal('.certificate', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.5,
});

// Use Anime.js for additional animations on certificates (e.g., scaling)
anime({
    targets: '.certificate',
    scale: [0, 1],
    duration: 1000,
    delay: anime.stagger(200),
});






//contact section
 // Initialize ScrollReveal
 const sr = ScrollReveal();

 // Create an animation with Anime.js
 const contactForm = document.querySelector(".contact");
 sr.reveal(contactForm, {
   duration: 1000,
   scale: 0.7,
   opacity: 0,
   easing: "ease-in-out",
 });







 //career section
 document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------------------------------------position 5
    // Initialize ScrollReveal
    ScrollReveal().reveal('.career-entry', {
      duration: 800,
      scale: 0.9,
      reset: true,
    });
  });
  
  







//footer script
// Initialize ScrollReveal
ScrollReveal().reveal('.footer', {
    duration: 800,
    reset: true,
    distance: '20px',
    origin: 'bottom',
    delay: 200
});

anime({
    targets: '.title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo'
});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

//key board acessablity for key board
const footerLinks = document.querySelectorAll('.footer a');

footerLinks.forEach((link, index) => {
    link.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' && index > 0) {
            footerLinks[index - 1].focus();
        } else if (event.key === 'ArrowDown' && index < footerLinks.length - 1) {
            footerLinks[index + 1].focus();
        }
    });
});
