const menuIcon = document.querySelector('.icono_menu');
const navUl = document.querySelector('.nav-contenedor_ul');

menuIcon.addEventListener('click', () => {
    if(navUl.style.display === 'flex') {
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'column'; // Para móvil
    }
});

