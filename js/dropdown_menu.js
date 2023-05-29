"use strict";
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function hamburgerFunction() {
    document.getElementById("navmenu").classList.toggle("show");
}

function dropdownFunction() {
    document.getElementById("dropdown-gallery").classList.toggle("show");
}

// Close the mobile dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-hamburger')) {
        var dropdowns = document.getElementsByClassName("nav-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

// Close the tablet dropdown menu if the user clicks outside of it
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns2 = document.getElementsByClassName("dropdown-content");
        var j;
        for (j = 0; j < dropdowns2.length; j++) {
            var openDropdown2 = dropdowns2[j];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
}
