// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // For a static site on Hostinger, you can use their email service or a third-party service
            // This is just a placeholder - you'll need to implement actual form submission
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

            // Reset the form
            contactForm.reset();
        });
    }

    // Reveal animations for sections when scrolling
    const revealElements = document.querySelectorAll('.section-header, .service-card, .team-member');

    const revealOnScroll = function () {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    };

    // Add classes for the animations
    revealElements.forEach(element => {
        element.classList.add('reveal');
    });

    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Trigger on page load
    revealOnScroll();
});