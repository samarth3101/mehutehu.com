// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger and navbar elements
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar-links');

    // Toggle mobile menu when hamburger is clicked
    if (hamburger && navbarLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navbarLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navbarLinks.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (navbarLinks && navbarLinks.classList.contains('active') &&
            !navbarLinks.contains(event.target) &&
            !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navbarLinks.classList.remove('active');
        }
    });

    // Add scroll event for navbar styling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});