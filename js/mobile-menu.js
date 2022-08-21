const hamburger = document.querySelector(".open-menu");
const navMenu = document.querySelector(".nav-mobile-section");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
