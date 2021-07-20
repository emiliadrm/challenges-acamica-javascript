
// definicion
function verificarEdad(edad) {
    let minEdad = 18;

    if (edad >= minEdad) {
        return true;
    } else {
        return false;
    };
}

// invocacion
let edadMarco = 20;
console.log(verificarEdad(edadMarco));
