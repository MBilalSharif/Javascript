function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation for demonstration
    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add the code to send the form data to your email or server
    } else {
        alert('Please fill out all fields.');
    }
}


// portfolio.js
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.style.backgroundColor === 'rgb(52, 58, 64)';
    body.style.backgroundColor = isDarkMode ? '#f8f9fa' : '#343a40';
    body.style.color = isDarkMode ? '#343a40' : '#f8f9fa';

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = isDarkMode ? '#ffffff' : '#495057';
        card.style.color = isDarkMode ? '#343a40' : '#f8f9fa';
    });

    const navLinks = document.querySelectorAll('.navbar-light .navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.style.color = isDarkMode ? '#f8f9fa' : '#343a40';
    });

    const carouselControls = document.querySelectorAll('.carousel-control-prev-icon, .carousel-control-next-icon');
    carouselControls.forEach(control => {
        control.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    });

    // Save the current theme to localStorage
    localStorage.setItem('darkMode', !isDarkMode ? 'enabled' : 'disabled');
}

// Load the saved theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        toggleTheme();
    }
});



// function toggleTheme() {
//     document.body.classList.toggle('dark-mode');
//     document.querySelector('header').classList.toggle('dark-mode');
//     document.querySelectorAll('.project').forEach(project => project.classList.toggle('dark-mode'));
//     document.querySelector('footer').classList.toggle('dark-mode');
//     document.querySelectorAll('#contact form input, #contact form textarea').forEach(input => input.classList.toggle('dark-mode'));
// }
