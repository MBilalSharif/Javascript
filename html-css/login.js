function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Dummy validation for demonstration
    if (email === "test@example.com" && password === "password") {
        alert('Login successful!');
        window.location.href = 'welcome.html'; // Redirect to a welcome page
    } else {
        alert('Invalid credentials');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Store user data in localStorage (for demonstration purposes)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Registration successful!');
    showLoginForm();
}
