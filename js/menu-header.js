// menu.js
document.querySelectorAll('.menu ul li a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('men-u').checked = false;
    });
  });
  


//desplazamiento suavizado
 
document.addEventListener('DOMContentLoaded', () => {
  const smoothScrollLinks = document.querySelectorAll('a[href="index.html#contact"]');

  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Evita el comportamiento predeterminado del enlace

          const targetId = this.getAttribute('href').split('#')[1]; // Obtiene el ID del destino
          const targetElement = document.querySelector(`#${targetId}`); // Selecciona el elemento objetivo

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth' // Desplazamiento suave
              });
          }
      });
  });
});