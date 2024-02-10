// After the page is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    const events = document.querySelectorAll('.event');
    events.forEach(function (event) {
        event.addEventListener('click', function () {
            // Toggle active class
            if (event.classList.contains('active')) {
                event.classList.remove('active');
            } else {
                // Remove active class from all events
                events.forEach(function (item) {
                    item.classList.remove('active');
                });
                event.classList.add('active');
            }
        });
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
