"use strict";

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

// Hover efecto
document.querySelectorAll('.hover-elevate').forEach(div => {
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

// Curiosidades con sonido
document.querySelectorAll('.curiosity-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Reproducir sonido
    const curiosityAudio = document.getElementById('curiositySound');
    if (curiosityAudio) {
      curiosityAudio.currentTime = 0;
      curiosityAudio.play();
    }

    const parent = btn.closest('.trailer-box');
    const url = parent.dataset.url;

    let datoCurioso = '';

    switch (url) {
      case 'https://www.youtube.com/watch?v=SbXIj2T-_uk':
        datoCurioso = 'Dato curioso: El diseño de Rayo McQueen está inspirado en varios coches clásicos de carreras reales.';
        break;
      case 'https://youtu.be/lg5hj2c5Nkk':
        datoCurioso = 'Dato curioso: Cars 2 fue la primera película de Pixar en centrarse en espionaje y acción.';
        break;
      case 'https://youtu.be/2LeOH9AGJQM':
        datoCurioso = 'Dato curioso: Para Cars 3, se usaron nuevas técnicas para animar reflejos en el coche más realistas.';
        break;
      default:
        datoCurioso = 'No hay datos curiosos disponibles.';
    }

    const existing = parent.querySelector('.curiosity-text');
    if (existing) {
      existing.remove();
      if (existing.textContent === datoCurioso) {
        return;
      }
    }

    const div = document.createElement('div');
    div.className = 'curiosity-text';
    div.textContent = datoCurioso;
    parent.appendChild(div);
  });
});
