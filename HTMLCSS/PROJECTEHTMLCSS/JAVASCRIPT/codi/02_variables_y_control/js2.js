let num_1=Number(prompt("dame argo"));
let result;
let mostra = document.getElementById("titular");
switch( num_1 ){ //valor a comparar case 10:
case 10:
    result = `${num_1} es igual a 10`;
    break; 
case 20:
    result = `${num_1} es igual a 20`;
    break; 
case 30:
    result = `${num_1} es igual a 30`;
    break; 
default:
    result = `${num_1} no es igual a 10, 20 ni 30`;   
}
console.log(result);
mostra.innerHTML = result;