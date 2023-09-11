//I Ching


// Función para generar una línea (yang o yin) de manera aleatoria
function genLin() {
  return Math.random() < 0.5 ? "yang" : "yin";
}

// Función para generar un hexagrama aleatorio
function genHexa() {
  const hexagram = [];
  for (let i = 0; i < 6; i++) {
    hexagram.push(genLin());
  }
  return hexagram;
}

// Función para mostrar el hexagrama
function mostrarHexa(hexagram) {
  for (let i = 0; i < 6; i++) {
    const linea = hexagram[i];
    simbolo = linea == "yang" ? "——————" : "——X——";
    console.log(simbolo);
  }
}

// Generar y mostrar un hexagrama aleatorio
alert("Hola, este programa le muestra un hexagrama de el I Ching");
mostrarHexa(genHexa());

// mensaje en pantalla
