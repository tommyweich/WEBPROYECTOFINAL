
const palabras = ["PEAKY", "ANTAGONISTA"];
const botonGenerarPalabra = document.getElementById("generar-palabra");
const palabraDisplay = document.getElementById("palabra-display");
function obtenerFraseAleatoria(frases) {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }
botonGenerarPalabra.addEventListener("click", ()=> {
    var indice = Math.floor(Math.random() * palabras.length);
    palabraDisplay.innerHTML = palabras[indice];

}
);


var indice = Math.floor(Math.random() * palabras.length);
  
function mostrarPalabraEnPantalla() {
  palabraDisplay.innerHTML = palabras[indice];
}







const titulo = document.getElementById('animated-title');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateTitle() {
  if (isElementInViewport(titulo)) {
    titulo.style.transition = 'none';
    titulo.style.transform = 'translateY(-20px)';
    titulo.style.opacity = 0;

    setTimeout(() => {
      titulo.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
      titulo.style.transform = 'translateY(0)';
      titulo.style.opacity = 1;
    }, 100);
  }
}
window.addEventListener('load', animateTitle);
window.addEventListener('scroll', animateTitle);
