// Toggle menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fermer le menu après clic sur un lien
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
