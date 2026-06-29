// Initialize AOS Animations
AOS.init({
  duration: 900,
  once: true,
  offset: 100
});

// Loading Screen
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

// Header Scroll Effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Animated Counters
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
  counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = 35;

    const updateCounter = () => {
      const increment = Math.ceil(target / speed);

      if (count < target) {
        count += increment;
        counter.textContent = count > target ? target : count;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

window.addEventListener("scroll", () => {
  const heroStats = document.querySelector(".hero-stats");
  const statsPosition = heroStats.getBoundingClientRect().top;

  if (statsPosition < window.innerHeight - 80 && !countersStarted) {
    startCounters();
    countersStarted = true;
  }
});

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || filterValue === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// Contact Form Simulation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  formMessage.textContent = "Thank you! Your message has been prepared successfully.";
  formMessage.style.color = "#a96f18";

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Small Parallax Effect in Hero
const hero = document.querySelector(".hero");

window.addEventListener("mousemove", event => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;

  document.querySelectorAll(".hero-bg-shape").forEach(shape => {
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});