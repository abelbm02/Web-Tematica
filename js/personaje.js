"use strict"

document.getElementById("toggleSidebar").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.classList.toggle("show");
  });

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
