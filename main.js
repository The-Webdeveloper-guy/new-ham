const hamburger = document.querySelector(".hamburgur");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("clcik", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
