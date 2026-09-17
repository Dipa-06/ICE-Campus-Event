/* =====================================================
   SAVED EVENTS JAVASCRIPT
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
    }

];



/* =====================================================
   LOAD SAVED EVENTS
===================================================== */

function loadSavedEvents() {

    const container =
        document.getElementById("savedEventsContainer");


    /* Get saved event IDs */

    let savedEvents =
        JSON.parse(localStorage.getItem("savedEvents")) || [];


    /* Convert IDs to numbers */

    savedEvents = savedEvents.map(Number);


    /* Find actual events */

    const savedEventList =
        events.filter(event =>
            savedEvents.includes(event.id)
        );


    /* Clear container */

    container.innerHTML = "";


    /* No saved events */

    if (savedEventList.length === 0) {

        container.innerHTML = `

            <div class="empty-saved">

                <div class="empty-icon">
                    ♡
                </div>

                <h2>
                    No Saved Events
                </h2>

                <p>
                    You haven't saved any events yet.
                </p>

            </div>

        `;

        return;
    }


    /* Show saved events */

    savedEventList.forEach(event => {

        const card =
            document.createElement("div");

        card.className = "saved-event-card";


        card.innerHTML = `

            <div class="saved-event-icon">
                ${getEventIcon(event.category)}
            </div>

            <h2>
                ${event.name}
            </h2>

            <p class="event-detail">
                📅 ${event.date}
            </p>

            <p class="event-detail">
                📍 ${event.venue}
            </p>

            <p class="event-detail">
                📌 ${event.category}
            </p>

            <div class="saved-event-actions">

                <a
                    href="event-details.html?id=${event.id}"
                    class="view-event-btn">

                    View Event

                </a>


                <button
                    class="remove-event-btn"
                    onclick="removeSavedEvent(${event.id})">

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

function getEventIcon(category) {

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

    return "EV";
}



/* =====================================================
   REMOVE SAVED EVENT
===================================================== */

function removeSavedEvent(eventId) {

    let savedEvents =
        JSON.parse(localStorage.getItem("savedEvents")) || [];


    savedEvents =
        savedEvents.filter(id =>
            Number(id) !== Number(eventId)
        );


    localStorage.setItem(
        "savedEvents",
        JSON.stringify(savedEvents)
    );


    /* Reload page content */

    loadSavedEvents();

}



/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    loadSavedEvents
);

