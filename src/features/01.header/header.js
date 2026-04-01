/*----- sticky header -----*/
var header = document.querySelector("#main-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

/*----- mobile menu toggle -----*/
var hamburger = document.querySelector(".hamburger");
var mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
  var isOpen = hamburger.classList.contains("open");
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  });
});

document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

function closeMenu() {
  hamburger.classList.remove("open");
  mobileNav.classList.remove("open");
  hamburger.setAttribute("aria-label", "Open navigation menu");
}
