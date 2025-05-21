"use strict"

// Codigo para que se muestre el menu lateral al hacer click en el boton
document.addEventListener("DOMContentLoaded", function () {
    
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebarMenu");

    
    toggleButton.addEventListener("click", function () {
      
        sidebar.classList.toggle("show");
    });
});

// codigo para poner el audio al clickar en el menu


function setupSidebarToggle() {
    const toggleButton = document.getElementById('toggleSidebar');
    const audio = document.getElementById('mcqueenaudio');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();

      sidebar.classList.toggle('visible');
    });
  }

 
  document.addEventListener('DOMContentLoaded', setupSidebarToggle);
