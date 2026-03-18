document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Toggle Menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active"); // Optional: Add animation to hamburger icon itself if needed
  });

  // Close menu when clicking a link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

//footer togle
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      warn.style.display = "none";
    } else {
      warn.style.display = "";
    }
  });
}

city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Acceso denegado. Sitio solo para mayores de 18 a�os.");
  window.close();
  window.location.href = "https://www.google.es";
});

// Description section "See more" functionality
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenDescriptions = Array.from(
  document.querySelectorAll(".description-hidden")
);
const seeMoreText = "Ver más ";
const seeLessText = "Ver menos";

if (seeMoreBtn) {
  seeMoreBtn.textContent = seeMoreText;
  seeMoreBtn.setAttribute("data-expanded", "false");
  seeMoreBtn.addEventListener("click", () => {
    const isExpanded = seeMoreBtn.getAttribute("data-expanded") === "true";

    if (!isExpanded) {
      hiddenDescriptions.forEach((desc) => {
        desc.classList.remove("description-hidden");
        desc.classList.add("description-visible", "expanded");
      });
      seeMoreBtn.textContent = seeLessText;
      seeMoreBtn.setAttribute("data-expanded", "true");
    } else {
      hiddenDescriptions.forEach((desc) => {
        desc.classList.remove("description-visible", "expanded");
        desc.classList.add("description-hidden");
      });
      seeMoreBtn.textContent = seeMoreText;
      seeMoreBtn.setAttribute("data-expanded", "false");
    }
  });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}

