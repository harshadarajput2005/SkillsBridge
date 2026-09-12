// Login Form

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Registered User

    const user = JSON.parse(localStorage.getItem("skillbridgeUser"));

    if (!user) {
        alert("No account found. Please Register First!");
        window.location.href = "register.html";
        return;
    }

    // Login Validation

    if (email === user.email && password === user.password) {

        // Save Login Session

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("loggedInUser", user.fullname);

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password!");

    }

});