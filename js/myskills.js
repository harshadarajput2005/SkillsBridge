const addSkillBtn = document.getElementById("addSkillBtn");

addSkillBtn.addEventListener("click", () => {

    let skill = prompt("Enter Skill Name");

    if (!skill) return;

    let level = prompt("Enter Skill Level");

    if (!level) level = "Beginner";

    const grid = document.querySelector(".skills-grid");

    grid.innerHTML += `
        <div class="skill-card">
            <i class="fa-solid fa-code"></i>
            <h3>${skill}</h3>
            <p>${level}</p>
            <button>Edit</button>
        </div>
    `;

    alert(skill + " Added Successfully!");
});