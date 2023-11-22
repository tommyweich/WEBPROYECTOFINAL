const frases = ["!BY ORDER OF THE PEAKY FOOKING BLINDERS¡", "¡NO F*CKING FIGHTING!", "TICKNA MORA O'BENG", "DONT MESS WHIT THE PEAKY BLINDERS"];
const fraseDisplay = document.getElementById("frase-display");

function cambiarFraseAutomaticamente() {
  const fraseAleatoria = obtenerFraseAleatoria(frases);
  mostrarFraseEnPantalla(fraseAleatoria);
}

function obtenerFraseAleatoria(frases) {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

function mostrarFraseEnPantalla(frase) {
  fraseDisplay.innerHTML = frase;
}

setInterval(cambiarFraseAutomaticamente, 800);


    
    






