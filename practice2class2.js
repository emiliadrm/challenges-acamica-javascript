/*function mayorQue(a, b) {
    if(a > b) {
        return true;
    } else {
        return false;
    }
}

//mayorQue(2,4)

let resultado = mayorQue (2,4);
console.log(resultado);*/

/*function suma(a, b) { //declarativa
    return a + b;
}
console.log(suma(2,3));

const suma2 = function (a, b) { //expression
    return a + b;
}
console.log(suma2(4,2));

const suma3 = (a, b) => { // arrow funtion v1
    return a + b;
}
console.log(suma3(1,2));

const suma4 = (a, b) => a + b; //arrow funtion v2
console.log(suma4(2,8));*/

function escandoloTron (persona1, persona2, persona3) {

    let totalDecibelios = persona1 + persona2 + persona3;

    if(totalDecibelios > 0 && totalDecibelios <= 30) {
        console.log("Las personas están susurrando.");
    };

    if(totalDecibelios > 30 && totalDecibelios <= 60) {
        console.log("El sonido es normal.");
    };

    if(totalDecibelios > 60) {
        console.log("¡Están haciendo un ESCÁNDALO!.");
    };
}

let nombre = "Emilia"
escandoloTron(30,20,10);
escandoloTron(30,40,30);
escandoloTron(15,10,5);

console.log(`Hola, ${nombre}`);