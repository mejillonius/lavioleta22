let numero1 = Number(prompt("introduzca el primer numero"));
let numero2 = Number(prompt("introduzca el segundo numero"));
if (numero1 > numero2) {
    alert(`el numero ${numero1} es mayor al ${numero2}`);
} else if (numero1 < numero2) {
    alert(`el numero ${numero1} es menor al ${numero2}`);
} else if (numero1 === numero2) {
    alert(`los numeros ${numero1} y ${numero2} son iguales`);
} else {
    alert(`no puedo determinar la igualdad entre ${numero1} y ${numero2}`);
}