//Variables
//cambiar el valor de la variable maximosIntentos para cambiar el número de intentos
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste el número secreto: ${numeroSecreto}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intentos++;
    if (intentos > maximosIntentos) {
      alert(`Lo siento, has agotado tus ${maximosIntentos} intentos `);
      break;
    }
  }
}

