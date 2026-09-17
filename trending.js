/* =====================================================
   TRENDING EVENTS JAVASCRIPT
===================================================== */


/* =====================================================
   SAVE / UNSAVE EVENT
===================================================== */

function toggleBookmark(button, eventId) {

    // LocalStorage থেকে saved events নেওয়া
    let savedEvents =
        JSON.parse(localStorage.getItem("savedEvents")) || [];


    // সব ID number করা
    savedEvents = savedEvents.map(Number);

    eventId = Number(eventId);


    // যদি event আগে থেকেই saved থাকে
    if (savedEvents.includes(eventId)) {

        // Event remove
        savedEvents = savedEvents.filter(function(id) {
            return id !== eventId;
        });

        // LocalStorage update
        localStorage.setItem(
            "savedEvents",
            JSON.stringify(savedEvents)
        );

        // Bookmark normal
        button.innerHTML = "♡";
        button.style.color = "#555";
        button.style.borderColor = "#d9e3dc";
        button.style.background = "#ffffff";

    }


    // যদি event আগে saved না থাকে
    else {

        // Event save
        savedEvents.push(eventId);

        // LocalStorage update
        localStorage.setItem(
            "savedEvents",
            JSON.stringify(savedEvents)
        );

        // Bookmark green
        button.innerHTML = "♥";
        button.style.color = "#149447";
        button.style.borderColor = "#149447";
        button.style.background = "#eaf8ef";

    }

}



/* =====================================================
   CHECK SAVED EVENTS WHEN PAGE LOADS
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    let savedEvents =
        JSON.parse(localStorage.getItem("savedEvents")) || [];


    savedEvents = savedEvents.map(Number);


    const buttons =
        document.querySelectorAll(".trending-bookmark");


    buttons.forEach(function(button) {

        const eventId =
            Number(button.dataset.eventId);


        if (savedEvents.includes(eventId)) {

            button.innerHTML = "♥";
            button.style.color = "#149447";
            button.style.borderColor = "#149447";
            button.style.background = "#eaf8ef";

        }

    });

});
