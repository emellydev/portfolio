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
  showProjectsButton.textContent = "Mostar menos";
}

// Parallax effect
document.documentElement.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
});

// Typing effect
const text = "Olá! sou a Emelly Beatriz.";
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

