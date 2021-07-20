let persona1 = 10;
let persona2 = 5;
let persona3 = 15;

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