document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});
