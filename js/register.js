// Register Form

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const college = document.getElementById("college").value.trim();
    const skill = document.getElementById("skill").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Empty Validation

    if (
        fullname === "" ||
        email === "" ||
        mobile === "" ||
        college === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Skill Validation

    if (skill === "Select Skill") {
        alert("Please select your skill.");
        return;
    }

    // Mobile Validation

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter valid 10 digit mobile number.");
        return;
    }

    // Email Validation

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid Email Address.");
        return;
    }

    // Password Length

    if (password.length < 8) {
        alert("Password must contain minimum 8 characters.");
        return;
    }

    // Password Match

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save User

    const user = {
        fullname,
        email,
        mobile,
        college,
        skill,
        password
    };

    localStorage.setItem("skillbridgeUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

});