// import AOS from "aos";
// import "aos/dist/aos.css";

// // init AOS animation
// AOS.init({
//     duration: 1000,
//     offset: 50,
// });

// JavaScript to toggle the navbar
document.getElementById("navbar-toggle").addEventListener("click", function() {
    var navbar = document.querySelector(".header-nav");
    if (window.getComputedStyle(navbar).display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  });
  
  