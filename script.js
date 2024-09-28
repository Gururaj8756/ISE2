// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to navigation links
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            if (target === '#') {
                window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
                window.location.href = target;
            }
        });
    });

    // Add event listener to enrollment buttons
    document.querySelectorAll('.enrollment-button').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
        });
    });
});
