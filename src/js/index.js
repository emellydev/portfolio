const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    const botaoEstaAtivo = botaoMostrarProjetos.classList.contains('ativo');

    if (botaoEstaAtivo) {
        esconderProjetos();
    } else {
        mostrarMaisProjetos();
    }
});

function esconderProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
    botaoMostrarProjetos.classList.remove('ativo');
    botaoMostrarProjetos.textContent = 'Mostrar mais';
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
    botaoMostrarProjetos.classList.add('ativo');
    botaoMostrarProjetos.textContent = 'Mostrar menos';
}


document.documentElement.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});