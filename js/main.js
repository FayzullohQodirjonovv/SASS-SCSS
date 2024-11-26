let elBody = document.querySelector("body");
let openBurger = document.querySelector(".header__open-button-burger-mb");
let closeBurger = document.querySelector(".header__close-button-burger-mb");
let elNavbar = document.querySelector(".header__nav-mb");
let elLinks = document.querySelectorAll(".header__links-mb");
openBurger.addEventListener("click", (e) => {
  e.preventDefault();
  elNavbar.classList.add("open");
  elBody.style.overflow = "hidden";
});
closeBurger.addEventListener("click", (e) => {
  e.preventDefault();
  elNavbar.classList.remove("open");
  elBody.style.overflow = "auto";
});

elLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    elNavbar.classList.toggle("open");
  });
});
