const imagenes = document.querySelectorAll('.contenedor-imagen-desplazable img');
const flechaIzquierda = document.querySelector('.flecha-izquierda');
const flechaDerecha = document.querySelector('.flecha-derecha');
const contenedor = document.querySelector('.contenedor-imagen-desplazable');
let posicion = 0;
let imagenAncho = 0;
let contenedorAncho = 0;

function calcularAnchoImagen() {
  imagenAncho = imagenes[0].offsetWidth;
  contenedorAncho = contenedor.offsetWidth;
}

calcularAnchoImagen(); // Calculate initial width

window.addEventListener('resize', calcularAnchoImagen); // Recalculate on resize

flechaIzquierda.addEventListener('click', () => {
  posicion -= imagenAncho;
  if (posicion < 0) {
    posicion = 0;
  }
  actualizarPosicion();
});

flechaDerecha.addEventListener('click', () => {
  posicion += imagenAncho;
  const maxPosicion = imagenes.length * imagenAncho - contenedorAncho;
  if (posicion > maxPosicion) {
    posicion = maxPosicion;
  }
  actualizarPosicion();
});

function actualizarPosicion() {
  contenedor.style.transform = `translateX(-${posicion}px)`;
}