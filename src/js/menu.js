document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.header .menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            const isMenuOpen = menu.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', isMenuOpen);

            const icon = menuToggle.querySelector('i');
            if (isMenuOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }

    const dropdownLinks = document.querySelectorAll('.header .menu .dropdown > a');
    dropdownLinks.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function(e) {
            const isMobileView = window.getComputedStyle(menuToggle).display === 'block';

            if (isMobileView) {
                e.preventDefault(); 
                const parentDropdown = this.parentElement;
                parentDropdown.classList.toggle('submenu-open');
            }
        });
    });
});

