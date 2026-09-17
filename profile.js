/* =====================================================
   PROFILE PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   GET ELEMENTS
===================================================== */

const profileImage =
    document.getElementById("profileImage");

const imageUpload =
    document.getElementById("imageUpload");

const studentName =
    document.getElementById("studentName");

const studentEmail =
    document.getElementById("studentEmail");

const studentId =
    document.getElementById("studentId");

const studentDepartment =
    document.getElementById("studentDepartment");


const editButton =
    document.getElementById("editButton");

const saveButton =
    document.getElementById("saveButton");

const cancelButton =
    document.getElementById("cancelButton");


/* =====================================================
   LOAD SAVED PROFILE
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function () {


        const savedName =
            localStorage.getItem("studentName");

        const savedEmail =
            localStorage.getItem("studentEmail");

        const savedId =
            localStorage.getItem("studentId");

        const savedDepartment =
            localStorage.getItem("studentDepartment");

        const savedImage =
            localStorage.getItem("studentProfileImage");


        if (savedName) {

            studentName.value =
                savedName;

        }


        if (savedEmail) {

            studentEmail.value =
                savedEmail;

        }


        if (savedId) {

            studentId.value =
                savedId;

        }


        if (savedDepartment) {

            studentDepartment.value =
                savedDepartment;

        }


        if (savedImage) {

            profileImage.src =
                savedImage;

        }

    }
);


/* =====================================================
   UPLOAD PROFILE PICTURE
===================================================== */

imageUpload.addEventListener(
    "change",
    function () {


        const file =
            imageUpload.files[0];


        if (!file) {

            return;

        }


        /* Check image */

        if (!file.type.startsWith("image/")) {

            alert(
                "Please select an image file."
            );

            return;

        }


        const reader =
            new FileReader();


        reader.onload =
            function (e) {


                profileImage.src =
                    e.target.result;


                /* Save image */

                localStorage.setItem(
                    "studentProfileImage",
                    e.target.result
                );


            };


        reader.readAsDataURL(file);

    }
);


/* =====================================================
   EDIT PROFILE
===================================================== */

function editProfile() {


    studentName.disabled =
        false;

    studentEmail.disabled =
        false;

    studentId.disabled =
        false;

    studentDepartment.disabled =
        false;


    editButton.style.display =
        "none";

    saveButton.style.display =
        "inline-block";

    cancelButton.style.display =
        "inline-block";

}


/* =====================================================
   SAVE PROFILE
===================================================== */

function saveProfile() {


    localStorage.setItem(
        "studentName",
        studentName.value
    );


    localStorage.setItem(
        "studentEmail",
        studentEmail.value
    );


    localStorage.setItem(
        "studentId",
        studentId.value
    );


    localStorage.setItem(
        "studentDepartment",
        studentDepartment.value
    );


    studentName.disabled =
        true;

    studentEmail.disabled =
        true;

    studentId.disabled =
        true;

    studentDepartment.disabled =
        true;


    editButton.style.display =
        "inline-block";

    saveButton.style.display =
        "none";

    cancelButton.style.display =
        "none";


    alert(
        "Profile updated successfully!"
    );

}


/* =====================================================
   CANCEL EDIT
===================================================== */

function cancelEdit() {


    location.reload();

}
