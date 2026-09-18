/* =====================================================
   ICE CAMPUS EVENTS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   EVENT DATA
===================================================== */

const events = [

    {
        id: 1,
        name: "Web Development Workshop",
        date: "12 Sep 2026",
        venue: "Computer Lab",
        category: "Workshop"
    },

    {
        id: 2,
        name: "CSE Programming Contest",
        date: "23 Sep 2026",
        venue: "Computer Lab",
        category: "Contest"
    },

    {
        id: 3,
        name: "AI & Machine Learning Seminar",
        date: "15 Oct 2026",
        venue: "Seminar Hall",
        category: "Seminar"
    },

    {
        id: 4,
        name: "Cyber Security Workshop",
        date: "03 Sep 2026",
        venue: "Computer Lab",
        category: "Workshop"
    },

    {
        id: 5,
        name: "Campus Cultural Fest",
        date: "01 Dec 2026",
        venue: "Student Activity Center",
        category: "Cultural"
    },

    {
        id: 7,
        name: "Ethical Hacking",
        date: "30 Sep 2026",
        venue: "Computer Lab",
        category: "Workshop"
    }

];


/* =====================================================
   OPEN EVENT DETAILS
===================================================== */

function openEvent(id) {

    localStorage.setItem(
        "currentEventId",
        String(id)
    );

    window.location.href =
        "event-details.html?id=" + id;
}


/* =====================================================
   DASHBOARD SEARCH
===================================================== */

const dashboardSearch =
    document.getElementById("dashboardSearch");

const searchResults =
    document.getElementById("searchResults");


if (dashboardSearch && searchResults) {

    dashboardSearch.addEventListener(
        "input",
        function () {

            const searchText =
                dashboardSearch.value
                    .toLowerCase()
                    .trim();

            searchResults.innerHTML = "";


            if (searchText === "") {

                searchResults.style.display =
                    "none";

                return;
            }


            const matchedEvents =
                events.filter(function (event) {

                    return (
                        event.name
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        event.category
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        event.venue
                            .toLowerCase()
                            .includes(searchText)
                    );

                });


            searchResults.style.display =
                "block";


            if (matchedEvents.length === 0) {

                searchResults.innerHTML = `
                    <div class="no-result">
                        No event found
                    </div>
                `;

                return;
            }


            matchedEvents.forEach(
                function (event) {

                    const resultItem =
                        document.createElement("div");

                    resultItem.className =
                        "search-result-item";


                    resultItem.innerHTML = `

                        <div class="search-result-info">

                            <h4>
                                ${event.name}
                            </h4>

                            <p>
                                ${event.date}
                                •
                                ${event.venue}
                            </p>

                        </div>


                        <button
                            type="button"
                            onclick="openEvent(${event.id})"
                        >
                            View
                        </button>

                    `;


                    searchResults.appendChild(
                        resultItem
                    );

                }
            );

        }
    );

}


/* =====================================================
   SIGN IN
===================================================== */

const signinForm =
    document.getElementById("signinForm");


if (signinForm) {

    signinForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById(
                    "signinEmail"
                );


            const passwordInput =
                document.getElementById(
                    "signinPassword"
                );


            const rememberInput =
                document.getElementById(
                    "rememberMe"
                );


            const email =
                emailInput.value.trim();


            const password =
                passwordInput.value;


            /* ---------- VALIDATION ---------- */

            if (email === "") {

                alert(
                    "Please enter your email."
                );

                return;
            }


            if (password === "") {

                alert(
                    "Please enter your password."
                );

                return;
            }


            /* ---------- GET SAVED ACCOUNT ---------- */

            const savedEmail =
                localStorage.getItem(
                    "campusUser"
                );


            const savedPassword =
                localStorage.getItem(
                    "studentPassword"
                );


            /* ---------- CHECK ACCOUNT ---------- */

            if (!savedEmail) {

                alert(
                    "No account found. Please Sign Up first."
                );

                return;
            }


            /* ---------- CHECK EMAIL ---------- */

            if (
                email.toLowerCase() !==
                savedEmail.toLowerCase()
            ) {

                alert(
                    "Email does not match your account."
                );

                return;
            }


            /* ---------- CHECK PASSWORD ---------- */

            if (
                password !== savedPassword
            ) {

                alert(
                    "Incorrect password."
                );

                return;
            }


            /* ---------- LOGIN SUCCESS ---------- */

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            if (
                rememberInput &&
                rememberInput.checked
            ) {

                localStorage.setItem(
                    "rememberMe",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "rememberMe"
                );

            }


            alert(
                "Sign in successful!"
            );


            window.location.href =
                "dashboard.html";

        }
    );

}


/* =====================================================
   FORGOT PASSWORD
===================================================== */

function forgotPassword(event) {

    event.preventDefault();


    const savedEmail =
        localStorage.getItem(
            "campusUser"
        );


    if (!savedEmail) {

        alert(
            "No account found. Please Sign Up first."
        );

        return;
    }


    alert(
        "Your registered email is: " +
        savedEmail
    );

}


/* =====================================================
   SIGN UP
===================================================== */

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* ---------- GET INPUTS ---------- */

            const nameInput =
                document.getElementById(
                    "signupName"
                );


            const studentIdInput =
                document.getElementById(
                    "studentId"
                );


            const emailInput =
                document.getElementById(
                    "signupEmail"
                );


            const passwordInput =
                document.getElementById(
                    "signupPassword"
                );


            const confirmPasswordInput =
                document.getElementById(
                    "confirmPassword"
                );


            const termsInput =
                document.getElementById(
                    "terms"
                );


            /* ---------- GET VALUES ---------- */

            const name =
                nameInput.value.trim();


            const studentId =
                studentIdInput.value.trim();


            const email =
                emailInput.value.trim();


            const password =
                passwordInput.value;


            const confirmPassword =
                confirmPasswordInput.value;


            /* ---------- VALIDATION ---------- */

            if (name === "") {

                alert(
                    "Please enter your full name."
                );

                return;
            }


            if (studentId === "") {

                alert(
                    "Please enter your Student ID."
                );

                return;
            }


            if (email === "") {

                alert(
                    "Please enter your email."
                );

                return;
            }


            if (password.length < 6) {

                alert(
                    "Password must be at least 6 characters."
                );

                return;
            }


            if (
                password !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;
            }


            if (
                termsInput &&
                !termsInput.checked
            ) {

                alert(
                    "Please agree to the Terms & Conditions."
                );

                return;
            }


            /* =================================================
               SAVE STUDENT INFORMATION
            ================================================= */


            /* ---------- NAME ---------- */

            localStorage.setItem(
                "campusUserName",
                name
            );


            localStorage.setItem(
                "studentName",
                name
            );


            /* ---------- STUDENT ID ---------- */

            localStorage.setItem(
                "studentId",
                studentId
            );


            /* ---------- EMAIL ---------- */

            localStorage.setItem(
                "campusUser",
                email
            );


            localStorage.setItem(
                "studentEmail",
                email
            );


            /* ---------- PASSWORD ---------- */

            localStorage.setItem(
                "studentPassword",
                password
            );


            /* ---------- DEPARTMENT ---------- */

            localStorage.setItem(
                "studentDepartment",
                "CSE"
            );


            /* ---------- LOGIN STATUS ---------- */

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            /* ---------- SUCCESS ---------- */

            alert(
                "Account created successfully!"
            );


            /* ---------- GO TO DASHBOARD ---------- */

            window.location.href =
                "dashboard.html";

        }
    );

}


/* =====================================================
   DASHBOARD VIEW EVENTS BUTTON
===================================================== */

function goToExplore() {

    window.location.href =
        "explore-event.html";

}


/* =====================================================
   DASHBOARD EVENT BUTTON
===================================================== */

function eventButton(event, id) {

    event.stopPropagation();

    openEvent(id);

}
