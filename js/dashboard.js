/* ==========================
   LOGIN CHECK
========================== */

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    alert("Please Login First!");
    window.location.href = "login.html";
}

/* ==========================
   USER NAME
========================== */

const username = localStorage.getItem("loggedInUser");

if (username) {

    const user1 = document.getElementById("username");
    const user2 = document.getElementById("welcomeUser");

    if(user1) user1.innerText = username;
    if(user2) user2.innerText = username + " 👋";

}

/* ==========================
   LOGOUT
========================== */

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",function(e){

e.preventDefault();

const ans = confirm("Are you sure you want to Logout ?");

if(ans){

localStorage.removeItem("isLoggedIn");

localStorage.removeItem("loggedInUser");

window.location.href="login.html";

}

});

}

/* ==========================
   DARK MODE
========================== */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});

/* Load Theme */

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark-mode");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

/* ==========================
   SEARCH
========================== */

const searchInput=document.querySelector(".search-box input");

searchInput.addEventListener("keyup",()=>{

console.log(searchInput.value);

});

/* ==========================
   FIND MENTOR BUTTON
========================== */

const mentorBtn=document.getElementById("findMentorBtn");

if(mentorBtn){

mentorBtn.onclick=()=>{

window.location.href="findmentor.html";

}

}

/* ==========================
   ADD SKILL BUTTON
========================== */

const skillBtn=document.getElementById("addSkillBtn");

if(skillBtn){

skillBtn.onclick=()=>{

window.location.href="myskills.html";

}

}
/* ==========================
   WEEKLY ACTIVITY CHART
========================== */

const activityCanvas = document.getElementById("activityChart");

if (activityCanvas) {

new Chart(activityCanvas, {

type: "line",

data: {

labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets: [{

label: "Mentorship Activity",

data: [12,19,15,28,24,32,40],

borderColor: "#2563EB",

backgroundColor: "rgba(37,99,235,0.15)",

fill: true,

tension: 0.4,

borderWidth: 3,

pointRadius: 5,

pointBackgroundColor: "#2563EB"

}]

},

options: {

responsive: true,

plugins: {

legend: {

display: false

}

},

scales: {

y: {

beginAtZero: true

}

}

}

});

}

/* ==========================
   SKILLS PIE CHART
========================== */

const skillCanvas = document.getElementById("skillsChart");

if (skillCanvas) {

new Chart(skillCanvas, {

type: "doughnut",

data: {

labels: [

"Java",

"Python",

"Web",

"UI/UX",

"AI"

],

datasets: [{

data: [25,20,30,15,10],

backgroundColor: [

"#2563EB",

"#22C55E",

"#7C3AED",

"#F59E0B",

"#EF4444"

],

borderWidth: 2

}]

},

options: {

responsive: true,

plugins: {

legend: {

position: "bottom"

}

}

}

});

}

/* ==========================
   NOTIFICATION
========================== */

const notification = document.querySelector(".notification");

if(notification){

notification.onclick = () => {

alert("You have 5 new notifications.");

};

}

/* ==========================
   PAGE LOADER
========================== */

window.onload = () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition = "0.5s";

document.body.style.opacity = "1";

},200);

};
/* ==========================
   SMART SEARCH
========================== */

const search = document.querySelector(".search-box input");

if (search) {

search.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

document.querySelectorAll(".stat-card,.mentor-card,.analytics-box").forEach(card => {

if (card.innerText.toLowerCase().includes(value)) {

card.style.display = "";

} else {

card.style.display = "none";

}

});

});

}

/* ==========================
   QUICK ACTION BUTTONS
========================== */

document.querySelectorAll(".quick-actions button").forEach(btn => {

btn.addEventListener("click", function () {

const text = this.innerText.trim();

if (text.includes("Find Mentor")) {

window.location.href = "findmentor.html";

}

else if (text.includes("Add")) {

window.location.href = "myskills.html";

}

else if (text.includes("Request")) {

window.location.href = "requests.html";

}

else if (text.includes("Notification")) {

window.location.href = "notifications.html";

}

});

});

/* ==========================
   SESSION JOIN BUTTON
========================== */

document.querySelectorAll(".join-btn").forEach(btn => {

btn.addEventListener("click", function () {

alert("🎉 Session Joined Successfully!");

});

});

/* ==========================
   NOTIFICATION BADGE
========================== */

const badge = document.querySelector(".notification span");

if (badge) {

badge.addEventListener("click", () => {

alert("You have " + badge.innerText + " new notifications.");

});

}

/* ==========================
   WELCOME MESSAGE
========================== */

setTimeout(() => {

console.log("Welcome to SkillBridge Dashboard");

},1000);
/* ==========================
   LIVE COUNTER ANIMATION
========================== */

function animateCounter(element, target) {

let count = 0;

let speed = Math.ceil(target / 50);

let interval = setInterval(() => {

count += speed;

if (count >= target) {

count = target;

clearInterval(interval);

}

element.innerText = count;

},30);

}

document.querySelectorAll(".stat-card h2").forEach(card => {

let value = parseInt(card.innerText);

if (!isNaN(value)) {

card.innerText = "0";

animateCounter(card, value);

}

});

/* ==========================
   CARD HOVER EFFECT
========================== */

document.querySelectorAll(".stat-card,.analytics-box,.mentor-card,.achievement-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

/* ==========================
   SAVE LAST LOGIN
========================== */

const now = new Date();

localStorage.setItem("lastLogin", now.toLocaleString());

/* ==========================
   SHOW LAST LOGIN
========================== */

const lastLogin = localStorage.getItem("lastLogin");

if(lastLogin){

console.log("Last Login :",lastLogin);

}

/* ==========================
   AUTO REFRESH STATS
========================== */

setInterval(()=>{

const badge=document.querySelector(".notification span");

if(badge){

let num=parseInt(badge.innerText);

badge.innerText=num+1;

}

},60000);

/* ==========================
   SUCCESS MESSAGE
========================== */

console.log("✅ SkillBridge Dashboard Loaded Successfully");