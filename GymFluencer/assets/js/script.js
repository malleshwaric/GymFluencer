"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Slide-in effect for the title
 */
const slideInText = document.querySelector(".slide-in-text");

window.addEventListener("DOMContentLoaded", (event) => {
  if (slideInText) {
    slideInText.classList.add("visible"); // Add the class to trigger the slide-in effect
  }
});

function uncheckAllRadios() {
  const radios = document.querySelectorAll(
    'input[type="radio"][name="accordion"]'
  );
  radios.forEach((radio) => {
    radio.checked = false;
  });
}

// Event listener for clicks on the document
document.addEventListener("click", function (event) {
  const accordion = document.getElementById("accordion");
  // Check if the click was outside the accordion
  if (!accordion.contains(event.target)) {
    uncheckAllRadios();
  }
});
