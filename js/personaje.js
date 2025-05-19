"use strict"

document.getElementById("toggleSidebar").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.classList.toggle("show");
  });