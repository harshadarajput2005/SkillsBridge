// ===============================
// SkillBridge Notifications JS
// ===============================

// Theme Toggle
const themeBtn = document.querySelector(".theme-btn");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

});

// ===============================
// Mark All Read
// ===============================

const markAll = document.getElementById("markAll");

markAll.addEventListener("click", () => {

    const unread = document.querySelectorAll(".notification.unread");

    unread.forEach(item => {
        item.classList.remove("unread");
    });

    alert("All notifications marked as read.");

});

// ===============================
// Click Notification
// ===============================

const notifications = document.querySelectorAll(".notification");

notifications.forEach(notification => {

    notification.addEventListener("click", () => {

        notification.classList.remove("unread");

    });

});

// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        localStorage.clear();

        window.location.href = "login.html";

    }

});

// ===============================
// Auto Count
// ===============================

function updateNotificationCount() {

    const unreadCount =
        document.querySelectorAll(".notification.unread").length;

    document.title =
        unreadCount > 0
        ? `(${unreadCount}) Notifications | SkillBridge`
        : "Notifications | SkillBridge";

}

updateNotificationCount();

notifications.forEach(item => {

    item.addEventListener("click", () => {

        updateNotificationCount();

    });

});

markAll.addEventListener("click", updateNotificationCount);

// ===============================
// Animation
// ===============================

window.addEventListener("load", () => {

    notifications.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});