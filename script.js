window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('fixed-nav', 'shadow-navbar');
    } else {
        navbar.classList.remove('fixed-nav', 'shadow-navbar');
    }
});