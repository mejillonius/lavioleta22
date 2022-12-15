numero = Number(prompt("inserta un numero"));
resultado = 1;

while (numero > 0){
    console.log(numero,resultado);
    resultado = numero * resultado;
    numero--;
}
alert(resultado);