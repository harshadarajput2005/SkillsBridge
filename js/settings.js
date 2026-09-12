/* ==========================================
   Settings Page - Part 10.4.3
   Theme + Notification + Password + Logout
========================================== */


const themeToggle =
document.getElementById("themeToggle");


const notificationToggle =
document.getElementById("notificationToggle");


const changePasswordBtn =
document.getElementById("changePassword");


const logoutBtn =
document.getElementById("logoutBtn");




// ==============================
// Load Saved Theme
// ==============================


window.addEventListener("load",()=>{


    const theme =
    localStorage.getItem("theme");


    if(theme==="light"){

        document.body.classList.add(
            "light-mode"
        );

    }



    const notification =
    localStorage.getItem(
        "notificationsEnabled"
    );


    if(notification==="false"){

        notificationToggle.checked=false;

    }


});




// ==============================
// Dark / Light Mode
// ==============================


themeToggle.addEventListener(
"click",
()=>{


    document.body.classList.toggle(
        "light-mode"
    );


    if(document.body.classList.contains(
        "light-mode"
    )){


        localStorage.setItem(
            "theme",
            "light"
        );


        showToast(
            "Light Mode Enabled ☀️"
        );


    }
    else{


        localStorage.setItem(
            "theme",
            "dark"
        );


        showToast(
            "Dark Mode Enabled 🌙"
        );


    }


});





// ==============================
// Notification Setting
// ==============================


notificationToggle.addEventListener(
"change",
()=>{


    localStorage.setItem(
        "notificationsEnabled",
        notificationToggle.checked
    );



    if(notificationToggle.checked){


        showToast(
        "Notifications Enabled 🔔"
        );


    }
    else{


        showToast(
        "Notifications Disabled 🔕"
        );


    }


});






// ==============================
// Change Password
// ==============================


changePasswordBtn.addEventListener(
"click",
()=>{


    const oldPassword =
    document.getElementById(
        "oldPassword"
    ).value;


    const newPassword =
    document.getElementById(
        "newPassword"
    ).value;



    if(oldPassword==="" ||
       newPassword===""){


        showToast(
        "Enter password details ❌"
        );


        return;

    }




    localStorage.setItem(
        "password",
        newPassword
    );



    showToast(
    "Password Changed Successfully ✅"
    );



    document.getElementById(
        "oldPassword"
    ).value="";


    document.getElementById(
        "newPassword"
    ).value="";


});






// ==============================
// Logout
// ==============================


logoutBtn.addEventListener(
"click",
()=>{


    let confirmLogout =
    confirm(
        "Are you sure you want to logout?"
    );


    if(confirmLogout){


        localStorage.removeItem(
            "currentUser"
        );


        showToast(
        "Logout Successful 🚪"
        );



        setTimeout(()=>{


            window.location.href =
            "login.html";


        },1500);



    }


});







// ==============================
// Toast
// ==============================


function showToast(message){


    let toast =
    document.querySelector(".toast");



    if(!toast){


        toast =
        document.createElement(
            "div"
        );


        toast.className="toast";


        document.body.appendChild(
            toast
        );

    }



    toast.innerHTML =
    message;



    toast.classList.add(
        "show"
    );



    setTimeout(()=>{


        toast.classList.remove(
            "show"
        );


    },3000);


}