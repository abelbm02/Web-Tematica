"use strict"


document.addEventListener("DOMContentLoaded", function () {
    
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebarMenu");

    
    toggleButton.addEventListener("click", function () {
      
        sidebar.classList.toggle("show");
    });
});

