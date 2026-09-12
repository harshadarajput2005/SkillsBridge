/* ==========================================
   Admin Dashboard - Part 12.3
   User Management + Search + Delete + Chart
========================================== */



// ==============================
// User Data
// ==============================


let users = JSON.parse(
    localStorage.getItem("users")
) || [

    {
        name:"Rahul Sharma",
        email:"rahul@gmail.com",
        role:"Mentor"
    },

    {
        name:"Priya Patel",
        email:"priya@gmail.com",
        role:"Student"
    },

    {
        name:"Amit Joshi",
        email:"amit@gmail.com",
        role:"Mentor"
    }

];




// Elements


const userTable =
document.getElementById("userTable");


const searchUser =
document.getElementById("searchUser");




// ==============================
// Display Users
// ==============================


function displayUsers(data=users){


    userTable.innerHTML="";



    if(data.length===0){


        userTable.innerHTML=`

        <tr>

        <td colspan="4">

        No Users Found

        </td>

        </tr>

        `;


        return;

    }



    data.forEach((user,index)=>{


        userTable.innerHTML += `


        <tr>


        <td>
        ${user.name}
        </td>


        <td>
        ${user.email}
        </td>


        <td>
        ${user.role}
        </td>


        <td>


        <button class="delete-btn"
        onclick="deleteUser(${index})">


        Delete


        </button>


        </td>


        </tr>


        `;


    });


}




displayUsers();







// ==============================
// Search User
// ==============================


searchUser.addEventListener(
"keyup",
()=>{


    let value =
    searchUser.value.toLowerCase();



    let filteredUsers =
    users.filter(user=>


        user.name
        .toLowerCase()
        .includes(value)

        ||

        user.email
        .toLowerCase()
        .includes(value)


    );



    displayUsers(filteredUsers);


});








// ==============================
// Delete User
// ==============================


function deleteUser(index){



    let confirmDelete =
    confirm(
        "Delete this user?"
    );



    if(confirmDelete){



        users.splice(index,1);



        localStorage.setItem(

            "users",

            JSON.stringify(users)

        );



        displayUsers();



        showToast(
        "User Deleted Successfully 🗑️"
        );


    }


}







// ==============================
// Update Statistics
// ==============================


document.getElementById(
"userCount"
).innerHTML =
users.length;



document.getElementById(
"mentorCount"
).innerHTML =

users.filter(
u=>u.role==="Mentor"
).length;









// ==============================
// Admin Chart
// ==============================


const ctx =
document.getElementById(
"adminChart"
);



new Chart(ctx,{


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

            label:"Users Growth",


            data:[

                20,
                35,
                50,
                75,
                100,
                users.length

            ],


            borderWidth:3


        }]


    },


    options:{


        responsive:true


    }



});







// ==============================
// Logout
// ==============================


document
.getElementById("logoutBtn")
.addEventListener(
"click",
()=>{


    let logout =
    confirm(
    "Logout from Admin Panel?"
    );



    if(logout){


        localStorage.removeItem(
            "admin"
        );


        window.location.href =
        "login.html";


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
        document.createElement("div");


        toast.className="toast";


        document.body.appendChild(toast);


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