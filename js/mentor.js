/* ==========================
   FIND MENTOR PAGE
========================== */

/* Search Mentors */

const searchInput = document.getElementById("mentorSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".mentor-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* ==========================
   FILTER BUTTONS
========================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const mentorCards = document.querySelectorAll(".mentor-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filter = this.innerText.toLowerCase();

        mentorCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (filter === "all") {

                card.style.display = "block";

            } else if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/* ==========================
   SEND REQUEST
========================== */

const requestButtons = document.querySelectorAll(".request-btn");

requestButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "✅ Request Sent";
        this.style.background = "#22C55E";
        this.disabled = true;

        alert("Mentorship Request Sent Successfully!");

    });

});

/* ==========================
   VIEW PROFILE
========================== */

const profileButtons = document.querySelectorAll(".profile-btn");

profileButtons.forEach(button => {

    button.addEventListener("click", function () {

        const mentorName =
            this.parentElement.parentElement.querySelector("h3").innerText;

        alert(
            "Mentor: " + mentorName +
            "\n\nExperience: 5+ Years" +
            "\nRating: ⭐ 4.9" +
            "\nStatus: Available"
        );

    });

});

/* ==========================
   HOVER EFFECT
========================== */

mentorCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/* ==========================
   PAGE LOADED
========================== */

console.log("✅ Find Mentor Page Loaded Successfully");