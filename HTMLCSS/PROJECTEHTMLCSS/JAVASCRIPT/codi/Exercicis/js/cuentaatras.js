let numero;
while (isNaN(numero)){
    numero = Number(prompt("dime un numero"));
}
// numero = Number(prompt("dime un numero"));
console.log("en for");
for (let i = numero; i>= 0; i--){
    console.log(i);
}

let iterador = numero;
console.log("en while");
while(iterador >=0){
    console.log(iterador);
    iterador--;
}

iterador = numero;
console.log("en do while");
do{
    console.log(iterador);
    iterador--;
} while (iterador >=0);
