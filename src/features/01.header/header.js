/*----- scroll reveal -----*/
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); /* stop watching after revealed */
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

/*----- sticky header -----*/
var header = document.getElementById("main-header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/*----- mobile menu toggle -----*/
var hamburger = document.querySelector(".hamburger");
var mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
  var isOpen = hamburger.classList.contains("open");
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

mobileNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  });
});

document.addEventListener("click", function (e) {
  if (!header.contains(e.target)) {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  }
});
