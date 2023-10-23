// JavaScript to toggle the navbar
document.getElementById("navbar-toggle").addEventListener("click", function() {
    var navbar = document.querySelector(".header-nav");
    if (window.getComputedStyle(navbar).display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  });
  
  