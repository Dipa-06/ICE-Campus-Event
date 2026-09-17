/* =====================================================
   EVENT DETAILS JAVASCRIPT
===================================================== */


const events = [

    {
        id: 1,
        name: "Web Development Workshop",
        date: "12 Sep 2026",
        venue: "Computer Lab",
        category: "Technology",
        description:
        "Learn the basics of modern web development and improve your practical web development skills."
    },

    {
        id: 2,
        name: "CSE Programming Contest",
        date: "23 Sep 2026",
        venue: "Computer Lab",
        category: "Programming",
        description:
        "Test your programming and problem-solving skills through an exciting campus programming contest."
    },

    {
        id: 3,
        name: "AI & Machine Learning Seminar",
        date: "28 Sep 2026",
        venue: "Seminar Hall",
        category: "AI",
        description:
        "Explore artificial intelligence and machine learning concepts with practical examples."
    },

    {
        id: 4,
        name: "Cyber Security Workshop",
        date: "03 Oct 2026",
        venue: "CSE Lab",
        category: "Cyber Security",
        description:
        "Learn important cyber security concepts and understand how to stay safe in the digital world."
    },

    {
        id: 5,
        name: "Campus Cultural Fest",
        date: "10 Oct 2026",
        venue: "Main Auditorium",
        category: "Cultural",
        description:
        "Enjoy music, performances and cultural activities with students from across the campus."
    },

    {
        id: 6,
        name: "Programming Club Meetup",
        date: "15 Oct 2026",
        venue: "CSE Room",
        category: "Programming",
        description:
        "Join fellow programming enthusiasts and discuss coding, projects and programming ideas."
    },

    {
        id: 7,
        name: "Ethical Hacking",
        date: "10 Dec 2026",
        venue: "Digital Lab",
        category: "Security",
        description:
        "Learn the basic concepts of ethical hacking, security testing and responsible cyber security practices."
    }

];


/* =====================================================
   GET ID FROM URL
===================================================== */

const params =
    new URLSearchParams(window.location.search);

const eventId =
    Number(params.get("id"));


/* =====================================================
   FIND EVENT
===================================================== */

const event =
    events.find(item => item.id === eventId);


/* =====================================================
   SHOW DETAILS
===================================================== */

function showEventDetails() {

    const container =
        document.getElementById(
            "eventDetailsContainer"
        );


    if (!event) {

        container.innerHTML = `

            <div class="not-found">

                <h1>Event Not Found</h1>

                <p>
                    The event you are looking for
                    does not exist.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML = `

        <div class="details-icon">
            ${getIcon(event.category)}
        </div>


        <h1>
            ${event.name}
        </h1>


        <span class="details-category">
            ${event.category}
        </span>


        <div class="details-info">

            <p>
                📅
                <strong>Date:</strong>
                ${event.date}
            </p>

            <p>
                📍
                <strong>Venue:</strong>
                ${event.venue}
            </p>

            <p>
                📌
                <strong>Category:</strong>
                ${event.category}
            </p>

        </div>


        <div class="details-description">

            <h3>
                About This Event
            </h3>

            <p>
                ${event.description}
            </p>

        </div>


        <div class="details-actions">

            <button
                id="saveButton"
                class="details-button save-button"
                onclick="toggleSave()">

                ♡ Save Event

            </button>


            <button
                class="details-button schedule-button"
                onclick="addToSchedule()">

                📅 Add to My Schedule

            </button>

        </div>

    `;


    updateSaveButton();
}


/* =====================================================
   ICON
===================================================== */

function getIcon(category) {

    if (category === "Technology")
        return "WEB";

    if (category === "Programming")
        return "C";

    if (category === "AI")
        return "AI";

    if (category === "Cyber Security")
        return "CY";

    if (category === "Cultural")
        return "ART";

    if (category === "Security")
        return "SEC";

    return "EV";
}


/* =====================================================
   SAVE EVENT
===================================================== */

function toggleSave() {

    let savedEvents =
        JSON.parse(
            localStorage.getItem("savedEvents")
        ) || [];


    savedEvents =
        savedEvents.map(Number);


    if (savedEvents.includes(eventId)) {

        savedEvents =
            savedEvents.filter(
                id => id !== eventId
            );

    } else {

        savedEvents.push(eventId);

    }


    localStorage.setItem(
        "savedEvents",
        JSON.stringify(savedEvents)
    );


    updateSaveButton();
}


/* =====================================================
   UPDATE SAVE BUTTON
===================================================== */

function updateSaveButton() {

    const button =
        document.getElementById("saveButton");


    if (!button)
        return;


    let savedEvents =
        JSON.parse(
            localStorage.getItem("savedEvents")
        ) || [];


    savedEvents =
        savedEvents.map(Number);


    if (savedEvents.includes(eventId)) {

        button.innerHTML =
            "♥ Saved";

    } else {

        button.innerHTML =
            "♡ Save Event";

    }

}


/* =====================================================
   ADD TO SCHEDULE
===================================================== */

function addToSchedule() {

    let scheduleEvents =
        JSON.parse(
            localStorage.getItem("scheduleEvents")
        ) || [];


    scheduleEvents =
        scheduleEvents.map(Number);


    if (!scheduleEvents.includes(eventId)) {

        scheduleEvents.push(eventId);


        localStorage.setItem(
            "scheduleEvents",
            JSON.stringify(scheduleEvents)
        );


        alert(
            "Event added to My Schedule!"
        );

    } else {

        alert(
            "This event is already in your schedule."
        );

    }

}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    showEventDetails
);