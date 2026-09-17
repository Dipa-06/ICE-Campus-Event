/* =====================================================
   CATEGORIES PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   SHOW CATEGORY
===================================================== */

function showCategory(category) {


    const message =
        document.getElementById(
            "categoryMessage"
        );


    message.innerHTML =

        "Selected Category: <strong>"
        + category
        + "</strong><br><br>"
        + "Click here to view related events.";


    message.style.color = "#149447";

    message.style.cursor = "pointer";


    message.onclick = function () {

        window.location.href =
            "events.html";

    };

}