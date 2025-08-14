const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostrarProjetos.addEventListener("click", () => {
  const botaoEstaAtivo = botaoMostrarProjetos.classList.contains("ativo");

  if (botaoEstaAtivo) {
    esconderProjetos();
  } else {
    mostrarMaisProjetos();
  }
});

// Esconder os projetos
function esconderProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.remove("ativo");
  });
  botaoMostrarProjetos.classList.remove("ativo");
  botaoMostrarProjetos.textContent = "Mostrar mais";
}

// Mostrar mais projetos
function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
  botaoMostrarProjetos.classList.add("ativo");
  botaoMostrarProjetos.textContent = "Mostrar menos";
}

// Efeito de parallax
document.documentElement.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
});

// Efeito de digitação
const text = "Olá! sou a Emelly Beatriz.";
const typedE1 = document.querySelector(".typed");

let i = 0;

function type() {
  if (i < text.length) {
    typedE1.textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
window.addEventListener("DOMContentLoaded", type);

// Efeito slide certificados
window.addEventListener("load", () => {
    const slide = document.querySelector(".certificates-slide");
    const slideContent = slide.innerHTML;
    slide.innerHTML += slideContent; 
});
