/* =====================================================
   ICE CAMPUS EVENTS
   PROFILE JAVASCRIPT
===================================================== */


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const profileImage = document.getElementById("profileImage");

const imageUpload = document.getElementById("imageUpload");

const studentName = document.getElementById("studentName");

const studentEmail = document.getElementById("studentEmail");

const studentId = document.getElementById("studentId");

const studentDepartment =
    document.getElementById("studentDepartment");

const editButton = document.getElementById("editButton");

const saveButton = document.getElementById("saveButton");

const cancelButton = document.getElementById("cancelButton");


/* =====================================================
   LOAD PROFILE DATA
===================================================== */

window.addEventListener("DOMContentLoaded", function () {

    /* Get saved information */

    const savedName =
        localStorage.getItem("studentName");

    const savedEmail =
        localStorage.getItem("studentEmail") ||
        localStorage.getItem("campusUser");

    const savedStudentId =
        localStorage.getItem("studentId");

    const savedDepartment =
        localStorage.getItem("studentDepartment");

    const savedImage =
        localStorage.getItem("studentProfileImage");


    /* Show name */

    if (savedName) {
        studentName.value = savedName;
    }


    /* Show email */

    if (savedEmail) {
        studentEmail.value = savedEmail;
    }


    /* Show Student ID */

    if (savedStudentId) {
        studentId.value = savedStudentId;
    }


    /* Show Department */

    if (savedDepartment) {
        studentDepartment.value = savedDepartment;
    }


    /* Show saved profile picture */

    if (savedImage) {
        profileImage.src = savedImage;
    }

});


/* =====================================================
   UPLOAD PROFILE PICTURE
===================================================== */

imageUpload.addEventListener("change", function () {

    const file = imageUpload.files[0];

    if (!file) {
        return;
    }


    /* Check if selected file is an image */

    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");

        return;
    }


    /* Read image */

    const reader = new FileReader();

    reader.onload = function (e) {

        /* Show image */

        profileImage.src = e.target.result;


        /* Save image */

        localStorage.setItem(
            "studentProfileImage",
            e.target.result
        );

    };

    reader.readAsDataURL(file);

});


/* =====================================================
   EDIT PROFILE
===================================================== */

function editProfile() {

    /* Enable all fields */

    studentName.disabled = false;

    studentEmail.disabled = false;

    studentId.disabled = false;

    studentDepartment.disabled = false;


    /* Hide Edit button */

    editButton.style.display = "none";


    /* Show Save button */

    saveButton.style.display = "inline-block";


    /* Show Cancel button */

    cancelButton.style.display = "inline-block";

}


/* =====================================================
   SAVE PROFILE
===================================================== */

function saveProfile() {

    /* Get updated information */

    const name =
        studentName.value.trim();

    const email =
        studentEmail.value.trim();

    const id =
        studentId.value.trim();

    const department =
        studentDepartment.value.trim();


    /* =================================================
       VALIDATION
    ================================================= */

    if (name === "") {

        alert("Please enter your full name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (id === "") {

        alert("Please enter your Student ID.");

        return;
    }


    if (department === "") {

        alert("Please enter your department.");

        return;
    }


    /* =================================================
       SAVE UPDATED INFORMATION
    ================================================= */


    /* Save name */

    localStorage.setItem(
        "studentName",
        name
    );

    localStorage.setItem(
        "campusUserName",
        name
    );


    /* Save email */

    localStorage.setItem(
        "studentEmail",
        email
    );

    localStorage.setItem(
        "campusUser",
        email
    );


    /* Save Student ID */

    localStorage.setItem(
        "studentId",
        id
    );


    /* Save Department */

    localStorage.setItem(
        "studentDepartment",
        department
    );


    /* =================================================
       DISABLE FIELDS AGAIN
    ================================================= */

    studentName.disabled = true;

    studentEmail.disabled = true;

    studentId.disabled = true;

    studentDepartment.disabled = true;


    /* =================================================
       BUTTONS
    ================================================= */

    editButton.style.display = "inline-block";

    saveButton.style.display = "none";

    cancelButton.style.display = "none";


    /* Success message */

    alert("Profile updated successfully!");

}


/* =====================================================
   CANCEL EDIT
===================================================== */

function cancelEdit() {

    /*
       Reload the page.
       Unsaved changes will disappear.
    */

    location.reload();

}
