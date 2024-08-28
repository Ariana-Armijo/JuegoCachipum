function juegoCachipun() {
    let opciones = ["piedra", "papel", "tijera"];

    let rondas = parseInt(prompt("¿Cuántas veces quieres jugar?"));

    let victorias = 0;
    let victoriasCompu = 0;
    let empates = 0;

    for (let i = 0; i < rondas; i++) {
        let eleccionUsuario = prompt("Elige piedra, papel o tijera:");
        let eleccionCompu = opciones[Math.floor(Math.random() * 3)];
        alert("Elegiste:" + eleccionUsuario);
        alert("La computadora eligió:" + eleccionCompu);

        if (eleccionUsuario === eleccionCompu) {
            alert("¡Es un empate!");
            empates++;

        } else if (
            (eleccionUsuario === "piedra" && eleccionCompu === "tijera") ||
            (eleccionUsuario === "papel" && eleccionCompu === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionCompu === "papel")
        ) {
            alert("¡Ganaste esta ronda!");
            victorias++;

        } else {
            alert("La computadora gana esta ronda.");
            victoriasCompu++;
        }
    }

    alert("Juego terminado\nTu ganaste: " + victorias + "\nLa computadora ganó: " + victoriasCompu + "\nEmpates: " + empates);

    if (victorias > victoriasCompu) {
        alert("¡Wujuuu! Ganaste el juego.");
    } else if (victorias < victoriasCompu) {
        alert("¡Ufff!...La computadora ganó el juego.");
    } else {
        alert("El juego terminó en empate.");
    }
}
juegoCachipun();