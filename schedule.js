/* =====================================================
   MY SCHEDULE JAVASCRIPT
===================================================== */


/* =====================================================
   EVENT DATA
===================================================== */

const scheduleEvents = [

    {
        id: 1,
        name: "Web Development Workshop",
        date: "12 Sep 2026",
        venue: "Computer Lab",
        category: "Technology"
    },

    {
        id: 2,
        name: "CSE Programming Contest",
        date: "23 Sep 2026",
        venue: "Computer Lab",
        category: "Programming"
    },

    {
        id: 3,
        name: "AI & Machine Learning Seminar",
        date: "28 Sep 2026",
        venue: "Seminar Hall",
        category: "AI"
    },

    {
        id: 4,
        name: "Cyber Security Workshop",
        date: "03 Oct 2026",
        venue: "CSE Lab",
        category: "Cyber Security"
    },

    {
        id: 5,
        name: "Campus Cultural Fest",
        date: "10 Oct 2026",
        venue: "Main Auditorium",
        category: "Cultural"
    },

    {
        id: 6,
        name: "Programming Club Meetup",
        date: "15 Oct 2026",
        venue: "CSE Room",
        category: "Programming"
    },

    {
        id: 7,
        name: "Ethical Hacking",
        date: "10 Dec 2026",
        venue: "Digital Lab",
        category: "Security"
    }

];



/* =====================================================
   LOAD SCHEDULE
===================================================== */

function loadScheduleEvents() {

    const container =
        document.getElementById(
            "scheduleEventsContainer"
        );


    // LocalStorage থেকে schedule IDs নেওয়া

    let savedSchedule =
        JSON.parse(
            localStorage.getItem("scheduleEvents")
        ) || [];


    // ID number করা

    savedSchedule =
        savedSchedule.map(Number);


    // Actual event খুঁজে বের করা

    const mySchedule =
        scheduleEvents.filter(function(event) {

            return savedSchedule.includes(event.id);

        });


    // Container clear

    container.innerHTML = "";



    /* =================================================
       NO SCHEDULE
    ================================================= */

    if (mySchedule.length === 0) {

        container.innerHTML = `

            <div class="empty-schedule">

                <div class="empty-icon">
                    📅
                </div>

                <h2>
                    No Scheduled Events
                </h2>

                <p>
                    You haven't added any events to your schedule yet.
                </p>

            </div>

        `;

        return;

    }



    /* =================================================
       SHOW EVENTS
    ================================================= */

    mySchedule.forEach(function(event) {


        const card =
            document.createElement("div");


        card.className =
            "schedule-event-card";


        card.innerHTML = `

            <div class="schedule-event-icon">
                ${getScheduleIcon(event.category)}
            </div>


            <h2>
                ${event.name}
            </h2>


            <p class="schedule-detail">
                📅 ${event.date}
            </p>


            <p class="schedule-detail">
                📍 ${event.venue}
            </p>


            <p class="schedule-detail">
                📌 ${event.category}
            </p>


            <div class="schedule-event-actions">


                <a
                    href="event-details.html?id=${event.id}"
                    class="view-schedule-btn">

                    View Event

                </a>


                <button
                    class="remove-schedule-btn"
                    onclick="removeFromSchedule(${event.id})">

                    Remove

                </button>


            </div>

        `;


        container.appendChild(card);

    });

}



/* =====================================================
   EVENT ICON
===================================================== */

function getScheduleIcon(category) {

    if (category === "Technology") {
        return "WEB";
    }

    if (category === "Programming") {
        return "C";
    }

    if (category === "AI") {
        return "AI";
    }

    if (category === "Cyber Security") {
        return "CY";
    }

    if (category === "Cultural") {
        return "ART";
    }

    if (category === "Security") {
        return "SEC";
    }

    return "EV";

}



/* =====================================================
   REMOVE FROM SCHEDULE
===================================================== */

function removeFromSchedule(eventId) {

    let savedSchedule =
        JSON.parse(
            localStorage.getItem("scheduleEvents")
        ) || [];


    savedSchedule =
        savedSchedule.filter(function(id) {

            return Number(id) !== Number(eventId);

        });


    localStorage.setItem(
        "scheduleEvents",
        JSON.stringify(savedSchedule)
    );


    // Page update

    loadScheduleEvents();

}



/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    loadScheduleEvents
);
