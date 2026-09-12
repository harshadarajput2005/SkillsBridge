// ===============================
// SkillBridge - Requests Page JS
// ===============================

// Search Requests
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".request-card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ===============================
// Filter Buttons
// ===============================

const filterButtons = document.querySelectorAll(".filter-bar button");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        let type = this.innerText.toLowerCase();

        cards.forEach(card => {

            let status = card.querySelector(".status").innerText.toLowerCase();

            if (type === "all") {

                card.style.display = "block";

            } else if (status === type) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// ===============================
// View Request
// ===============================

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", function () {

        let mentor =
            this.closest(".request-card")
            .querySelector("h3").innerText;

        alert("Request Details\n\nMentor : " + mentor);

    });

});

// ===============================
// Cancel Request
// ===============================

document.querySelectorAll(".cancel-btn").forEach(button => {

    button.addEventListener("click", function () {

        if (confirm("Cancel this request?")) {

            this.closest(".request-card").remove();

            alert("Request Cancelled Successfully");

        }

    });

});

// ===============================
// Chat Button
// ===============================

document.querySelectorAll(".chat-btn").forEach(button => {

    button.addEventListener("click", function () {

        let mentor =
            this.closest(".request-card")
            .querySelector("h3").innerText;

        alert("Opening chat with " + mentor);

    });

});

// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        if (confirm("Are you sure you want to logout?")) {

            localStorage.clear();

            window.location.href = "login.html";

        }

    });

}

// ===============================
// Theme Toggle
// ===============================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

    });

}
