/* ==========================================
   Profile Page - Part 10.3
   Edit + Save + Image Preview + LocalStorage
========================================== */


const editBtn =
document.getElementById("editProfileBtn");

const saveBtn =
document.getElementById("saveProfileBtn");


const nameInput =
document.getElementById("nameInput");

const emailInput =
document.getElementById("emailInput");

const bioInput =
document.getElementById("bioInput");


const userName =
document.getElementById("userName");

const userEmail =
document.getElementById("userEmail");


const profileImage =
document.getElementById("profileImage");

const uploadImage =
document.getElementById("uploadImage");



// Load Profile Data

let profileData =
JSON.parse(localStorage.getItem("profileData"))
|| {

    name:"Harshada Rajput",
    email:"harshada@gmail.com",
    bio:"Computer Engineering Student",
    image:"images/profile.jpg"

};



function loadProfile(){


    nameInput.value =
    profileData.name;


    emailInput.value =
    profileData.email;


    bioInput.value =
    profileData.bio;


    userName.innerHTML =
    profileData.name;


    userEmail.innerHTML =
    profileData.email;



    profileImage.src =
    profileData.image;


}



loadProfile();





// Edit Profile


editBtn.addEventListener(
"click",
()=>{


    nameInput.disabled=false;

    emailInput.disabled=false;

    bioInput.disabled=false;


    saveBtn.style.display="block";


    showToast(
    "You can edit profile now ✏️"
    );


});






// Save Profile


saveBtn.addEventListener(
"click",
()=>{


    profileData.name =
    nameInput.value;


    profileData.email =
    emailInput.value;


    profileData.bio =
    bioInput.value;



    localStorage.setItem(
        "profileData",
        JSON.stringify(profileData)
    );



    nameInput.disabled=true;

    emailInput.disabled=true;

    bioInput.disabled=true;


    saveBtn.style.display="none";



    loadProfile();


    showToast(
    "Profile Saved Successfully ✅"
    );


});






// Image Upload Preview


uploadImage.addEventListener(
"change",
function(){


    const file =
    this.files[0];


    if(file){


        const reader =
        new FileReader();


        reader.onload=function(e){


            profileImage.src =
            e.target.result;


            profileData.image =
            e.target.result;



            localStorage.setItem(
                "profileData",
                JSON.stringify(profileData)
            );


        };


        reader.readAsDataURL(file);


    }


});






// Toast Function


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



    toast.classList.add("show");



    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);


}