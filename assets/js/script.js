const toggler = document.querySelector(".nav__toggler");
const closeBtn = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav__menu");
const overlay = document.querySelector(".nav__overlay");

// Open menu
toggler.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
  overlay?.classList.add("nav__overlay--active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
  overlay?.classList.remove("nav__overlay--active");
});

// Close when clicking outside menu
overlay?.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
  overlay.classList.remove("nav__overlay--active");
});
