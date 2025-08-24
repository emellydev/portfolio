const showProjectsButton = document.querySelector(".btn-show-projects");
const inactiveProjects = document.querySelectorAll(".project:not(.active)");
const projectsSection = document.querySelector("#projects");

showProjectsButton.addEventListener("click", () => {
  const isButtonActive = showProjectsButton.classList.contains("active");

  if (isButtonActive) {
    hideProjects();
  } else {
    showMoreProjects();
  }
});

// Hide projects
function hideProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.remove("active");
  });
  showProjectsButton.classList.remove("active");
  showProjectsButton.textContent = "Mostrar mais";
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

// Show more projects
function showMoreProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.add("active");
  });
  showProjectsButton.classList.add("active");
  showProjectsButton.textContent = "Mostrar menos";
}


// Parallax effect
let isTicking = false;

document.documentElement.addEventListener("mousemove", (e) => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      isTicking = false;
    });

    isTicking = true;
  }
});

// Typing effect
const text = "Olá! Sou a Emelly Beatriz.";
const typedEl = document.querySelector(".typed");

let i = 0;

function type() {
  if (i < text.length) {
    typedEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
window.addEventListener("DOMContentLoaded", type);

// Certificate slide effect
window.addEventListener("load", () => {
  const slideContainer = document.querySelector(".certificates-slide");
  const slideContent = slideContainer.innerHTML;
  slideContainer.innerHTML += slideContent;
});

// Btn scroll to top logic
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

