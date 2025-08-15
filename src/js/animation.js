// Animaition for skills section on scroll
const skillsSection = document.querySelector('.skills');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      skillsSection.classList.add('in-view');
      observer.unobserve(skillsSection);
    }
  });
}, {
  threshold: 0.4
});
observer.observe(skillsSection);
