const navbar = document.querySelector('.navbar');
const toggleButton = document.getElementById('navbar-toggle');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

