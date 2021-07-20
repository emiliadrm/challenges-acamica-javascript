function prepararCafe(capaTaza, cantAgua, grCafe, azucar) {

    if(capaTaza <= cantAgua) {
        console.log("Lo siento, es mucha agua");
    } else {
        console.log("Se esta preparando el café");

        if (grCafe => 50) {
            console.log("Tendrá un sabor fuerte");
        } else {
            console.log("Tendrá un sabor suave");
        }
    
        if (azucar) {
            console.log("Con un poco de azúcar");
        } else {
            console.log("Sin azúcar");
        }
    
        console.log ("El café esta preparado");
    };
   
};

prepararCafe(300, 240, 30, true)
prepararCafe(300, 340, 50, false)
prepararCafe(300, 120, 60, false)
