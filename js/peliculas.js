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


document.querySelectorAll('.hover-elevate').forEach(div => {
  div.addEventListener('mouseenter', () => {
    div.classList.add('hovered');
  });
  div.addEventListener('mouseleave', () => {
    div.classList.remove('hovered');
  });
});

document.querySelectorAll('.hover-elevate').forEach(div => {
  // Animación al pasar el cursor
  div.addEventListener('mouseenter', () => {
    div.classList.add('hovered');
  });
  div.addEventListener('mouseleave', () => {
    div.classList.remove('hovered');
  });

  // Abrir enlace en nueva pestaña al hacer clic
  div.addEventListener('click', () => {
    const url = div.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});
