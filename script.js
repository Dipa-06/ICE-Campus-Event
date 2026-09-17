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

    /* Save current event ID */

    localStorage.setItem(
        "currentEventId",
        String(id)
    );


    /* Open event details page */

    window.location.href =
        "event-details.html?id=" + id;

}


/* =====================================================
   SAVE EVENT
   Works with onclick="saveEvent(id)"
===================================================== */

function saveEvent(id) {

    let savedEvents =
        JSON.parse(
            localStorage.getItem("savedEvents")
        ) || [];


    /* Convert IDs to numbers */

    savedEvents =
        savedEvents.map(Number);


    id = Number(id);


    /* Check whether event is already saved */

    if (
        savedEvents.includes(id)
    ) {

        /* Remove event */

        savedEvents =
            savedEvents.filter(
                function (eventId) {

                    return eventId !== id;

                }
            );


        localStorage.setItem(
            "savedEvents",
            JSON.stringify(savedEvents)
        );


        alert(
            "Event removed from Saved Events."
        );

    }

    else {

        /* Add event */

        savedEvents.push(id);


        localStorage.setItem(
            "savedEvents",
            JSON.stringify(savedEvents)
        );


        alert(
            "Event saved successfully!"
        );

    }

}


/* =====================================================
   TOGGLE SAVE
   Works with button + ID
===================================================== */

function toggleSave(id, button) {

    let savedEvents =
        JSON.parse(
            localStorage.getItem("savedEvents")
        ) || [];


    savedEvents =
        savedEvents.map(Number);


    id = Number(id);


    /* Already saved */

    if (
        savedEvents.includes(id)
    ) {

        savedEvents =
            savedEvents.filter(
                function (eventId) {

                    return eventId !== id;

                }
            );


        button.classList.remove(
            "saved"
        );


        button.innerHTML =
            "♡";


        alert(
            "Event removed from Saved Events."
        );

    }

    else {

        savedEvents.push(id);


        button.classList.add(
            "saved"
        );


        button.innerHTML =
            "♥";


        alert(
            "Event saved successfully!"
        );

    }


    localStorage.setItem(
        "savedEvents",
        JSON.stringify(savedEvents)
    );

}


/* =====================================================
   LOAD SAVED EVENTS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        let savedEvents =
            JSON.parse(
                localStorage.getItem("savedEvents")
            ) || [];


        savedEvents =
            savedEvents.map(Number);


        /* Find save buttons */

        const saveButtons =
            document.querySelectorAll(
                ".save-btn"
            );


        saveButtons.forEach(
            function (button) {

                const id =
                    Number(
                        button.dataset.eventId
                    );


                if (
                    savedEvents.includes(id)
                ) {

                    button.classList.add(
                        "saved"
                    );


                    button.innerHTML =
                        "♥";

                }

            }
        );

    }
);


/* =====================================================
   DASHBOARD SEARCH
===================================================== */

const dashboardSearch =
    document.getElementById(
        "dashboardSearch"
    );


const searchResults =
    document.getElementById(
        "searchResults"
    );


if (
    dashboardSearch &&
    searchResults
) {

    dashboardSearch.addEventListener(
        "input",
        function () {

            const searchText =
                dashboardSearch.value
                .toLowerCase()
                .trim();


            /* Clear previous results */

            searchResults.innerHTML = "";


            /* Empty search */

            if (
                searchText === ""
            ) {

                searchResults.style.display =
                    "none";

                return;

            }


            /* Search */

            const matchedEvents =
                events.filter(
                    function (event) {

                        return (

                            event.name
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                            ||

                            event.category
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                            ||

                            event.venue
                                .toLowerCase()
                                .includes(
                                    searchText
                                )

                        );

                    }
                );


            searchResults.style.display =
                "block";


            /* No result */

            if (
                matchedEvents.length === 0
            ) {

                searchResults.innerHTML = `

                    <div class="no-result">

                        No event found

                    </div>

                `;

                return;

            }


            /* Show results */

            matchedEvents.forEach(
                function (event) {

                    const resultItem =
                        document.createElement(
                            "div"
                        );


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
                            onclick="openEvent(${event.id})">

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
   EXPLORE PAGE
===================================================== */

const exploreSearch =
    document.getElementById(
        "exploreSearch"
    );


const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );


const dateFilter =
    document.getElementById(
        "dateFilter"
    );


const exploreCards =
    document.querySelectorAll(
        ".explore-card"
    );


const eventCount =
    document.getElementById(
        "eventCount"
    );


const exploreNoResult =
    document.getElementById(
        "exploreNoResult"
    );


/* =====================================================
   FILTER EXPLORE EVENTS
===================================================== */

function filterExploreEvents() {

    if (
        !exploreSearch ||
        !categoryFilter ||
        !dateFilter
    ) {

        return;

    }


    const searchText =
        exploreSearch.value
        .toLowerCase()
        .trim();


    const selectedCategory =
        categoryFilter.value;


    const selectedDate =
        dateFilter.value;


    let visibleEvents = 0;


    exploreCards.forEach(
        function (card) {

            const eventName =
                (
                    card.dataset.name || ""
                )
                .toLowerCase();


            const eventCategory =
                card.dataset.category || "";


            const eventDate =
                card.dataset.date || "";


            /* Search match */

            const searchMatch =
                eventName.includes(
                    searchText
                );


            /* Category match */

            const categoryMatch =
                selectedCategory === "all" ||
                eventCategory === selectedCategory;


            /* Date match */

            const dateMatch =
                selectedDate === "all" ||
                eventDate === selectedDate;


            /* Show event */

            if (
                searchMatch &&
                categoryMatch &&
                dateMatch
            ) {

                card.style.display =
                    "block";


                visibleEvents++;

            }

            /* Hide event */

            else {

                card.style.display =
                    "none";

            }

        }
    );


    /* Event count */

    if (eventCount) {

        eventCount.textContent =
            visibleEvents + " Events";

    }


    /* No result message */

    if (exploreNoResult) {

        if (
            visibleEvents === 0
        ) {

            exploreNoResult.style.display =
                "block";

        }

        else {

            exploreNoResult.style.display =
                "none";

        }

    }

}


/* Search */

if (exploreSearch) {

    exploreSearch.addEventListener(
        "input",
        filterExploreEvents
    );

}


/* Category */

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterExploreEvents
    );

}


/* Date */

if (dateFilter) {

    dateFilter.addEventListener(
        "change",
        filterExploreEvents
    );

}


/* =====================================================
   OPEN EXPLORE EVENT
===================================================== */

function openExploreEvent(id) {

    localStorage.setItem(
        "currentEventId",
        String(id)
    );


    window.location.href =
        "event-details.html?id=" + id;

}


/* =====================================================
   SIGN IN
===================================================== */

const signinForm =
    document.getElementById(
        "signinForm"
    );


if (signinForm) {

    signinForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById(
                    "signinEmail"
                ) ||
                document.getElementById(
                    "email"
                );


            const passwordInput =
                document.getElementById(
                    "signinPassword"
                ) ||
                document.getElementById(
                    "password"
                );


            const rememberInput =
                document.getElementById(
                    "rememberMe"
                );


            if (
                !emailInput ||
                !passwordInput
            ) {

                return;

            }


            const email =
                emailInput.value.trim();


            const password =
                passwordInput.value;


            /* Email */

            if (
                email === ""
            ) {

                alert(
                    "Please enter your email."
                );

                return;

            }


            /* Password */

            if (
                password === ""
            ) {

                alert(
                    "Please enter your password."
                );

                return;

            }


            if (
                password.length < 6
            ) {

                alert(
                    "Password must be at least 6 characters."
                );

                return;

            }


            /* Save user */

            localStorage.setItem(
                "campusUser",
                email
            );


            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            /* Remember me */

            if (
                rememberInput &&
                rememberInput.checked
            ) {

                localStorage.setItem(
                    "rememberMe",
                    "true"
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

    if (event) {

        event.preventDefault();

    }


    alert(
        "Password reset feature will be available soon."
    );

}


/* =====================================================
   SIGN UP
===================================================== */

const signupForm =
    document.getElementById(
        "signupForm"
    );


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                document.getElementById(
                    "signupName"
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


            if (
                !nameInput ||
                !emailInput ||
                !passwordInput ||
                !confirmPasswordInput
            ) {

                return;

            }


            const name =
                nameInput.value.trim();


            const email =
                emailInput.value.trim();


            const password =
                passwordInput.value;


            const confirmPassword =
                confirmPasswordInput.value;


            /* Name */

            if (
                name === ""
            ) {

                alert(
                    "Please enter your full name."
                );

                return;

            }


            /* Email */

            if (
                email === ""
            ) {

                alert(
                    "Please enter your email."
                );

                return;

            }


            /* Password */

            if (
                password.length < 6
            ) {

                alert(
                    "Password must be at least 6 characters."
                );

                return;

            }


            /* Confirm password */

            if (
                password !== confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /* Terms */

            if (
                termsInput &&
                !termsInput.checked
            ) {

                alert(
                    "Please agree to the Terms & Conditions."
                );

                return;

            }


            /* Save account */

            localStorage.setItem(
                "campusUser",
                email
            );


            localStorage.setItem(
                "campusUserName",
                name
            );


            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            alert(
                "Account created successfully!"
            );


            window.location.href =
                "dashboard.html";

        }
    );

}
/* =====================================================
   DASHBOARD VIEW EVENTS BUTTON
===================================================== */

function goToExplore() {

    window.location.href = "explore-event.html";

}


/* =====================================================
   DASHBOARD EVENT BUTTON
===================================================== */

function eventButton(event, id) {

    event.stopPropagation();

    openEvent(id);

}