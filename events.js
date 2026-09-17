/* =====================================================
   EVENTS PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   SEARCH EVENTS
===================================================== */

const searchInput =
    document.getElementById("eventSearch");


const eventCards =
    document.querySelectorAll(".event-card");


const noResult =
    document.getElementById("noResult");


searchInput.addEventListener(
    "input",
    function () {


        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        let found = false;


        eventCards.forEach(
            function (card) {


                const text =
                    card.innerText
                        .toLowerCase();


                if (
                    text.includes(searchText)
                ) {


                    card.style.display =
                        "block";


                    found = true;

                }

                else {


                    card.style.display =
                        "none";

                }

            }
        );


        if (found) {

            noResult.style.display =
                "none";

        }

        else {

            noResult.style.display =
                "block";

        }

    }
);


/* =====================================================
   VIEW EVENT DETAILS
===================================================== */

function viewEvent(eventId) {


    window.location.href =
        "event-details.html?id=" + eventId;

}