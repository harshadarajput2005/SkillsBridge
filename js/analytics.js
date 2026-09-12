/* ==========================================
   Analytics Dashboard - Part 11.3
   Charts + Dynamic Data
========================================== */


// ==============================
// Load LocalStorage Data
// ==============================


let skills =
JSON.parse(localStorage.getItem("skills"))
|| [];


let requests =
JSON.parse(localStorage.getItem("requests"))
|| [];


let notifications =
JSON.parse(localStorage.getItem("notifications"))
|| [];




// ==============================
// Update Statistics
// ==============================


document.getElementById(
"skillCount"
).innerHTML = skills.length || 8;


document.getElementById(
"requestCount"
).innerHTML = requests.length || 15;


document.getElementById(
"notificationCount"
).innerHTML = notifications.length || 12;


document.getElementById(
"mentorCount"
).innerHTML = requests.length || 25;





// ==============================
// Skill Progress Chart
// ==============================


const skillCtx =
document.getElementById(
"skillChart"
);



new Chart(skillCtx,{

    type:"doughnut",

    data:{


        labels:[

            "Beginner",

            "Intermediate",

            "Advanced"

        ],


        datasets:[{

            label:"Skills",

            data:[

                30,

                50,

                20

            ],


            borderWidth:2


        }]


    },


    options:{

        responsive:true

    }


});







// ==============================
// Mentor Request Chart
// ==============================


const requestCtx =
document.getElementById(
"requestChart"
);



new Chart(requestCtx,{

    type:"bar",


    data:{


        labels:[

            "Pending",

            "Accepted",

            "Rejected"

        ],


        datasets:[{

            label:"Requests",

            data:[

                5,

                8,

                2

            ],


            borderWidth:1


        }]


    },


    options:{


        responsive:true,


        scales:{


            y:{


                beginAtZero:true


            }


        }


    }


});







// ==============================
// Monthly Activity Chart
// ==============================


const activityCtx =
document.getElementById(
"activityChart"
);



new Chart(activityCtx,{

    type:"line",


    data:{


        labels:[

            "Jan",

            "Feb",

            "Mar",

            "Apr",

            "May",

            "Jun"

        ],


        datasets:[{

            label:"User Activity",

            data:[

                10,

                25,

                18,

                35,

                45,

                60

            ],


            tension:.4,


            borderWidth:3


        }]


    },


    options:{


        responsive:true


    }


});