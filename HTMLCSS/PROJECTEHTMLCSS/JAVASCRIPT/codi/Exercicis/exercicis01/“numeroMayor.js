let numero = 0;
let intentos = 0;

while (numero<50){
    intentos++;
    numero= Number(prompt(`numero de intentos ${intentos} Introduce un numero`));
    //error catcher por si introducen algo que no sea un numero
    if (isNaN(numero)){
        numero = 0;
    }
};
alert(`ha costado ${intentos} intentos!`);
