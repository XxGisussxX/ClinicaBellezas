// funcion para la hambuger menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// cerra el menu al hacer click en un enlace

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navegación de procedimientos
document.addEventListener('DOMContentLoaded', function() {
  const procedureLinks = document.querySelectorAll('.procedure-link');
  const procedureDetails = document.querySelectorAll('.procedure-detail');
  
  procedureLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remover clase active de todos los links y detalles
      procedureLinks.forEach(l => l.classList.remove('active'));
      procedureDetails.forEach(d => d.classList.remove('active'));
      
      // Agregar clase active al link clickeado
      this.classList.add('active');
      
      // Mostrar el detalle correspondiente
      const targetId = this.getAttribute('href').substring(1);
      const targetDetail = document.getElementById(targetId);
      if (targetDetail) {
        targetDetail.classList.add('active');
      }
      
      // Scroll suave al contenedor (opcional)
      if (window.innerWidth < 968) {
        targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});