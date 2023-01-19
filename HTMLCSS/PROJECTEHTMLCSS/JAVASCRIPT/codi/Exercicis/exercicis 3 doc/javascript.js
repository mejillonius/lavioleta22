const ex1input = document.querySelector("#ex1 input");
const ex1button = document.querySelector("#ex1 button");
const ex1output = document.querySelector("#ex1 p");
const ex2input = document.querySelector("#ex2 input");
const ex2button = document.querySelector("#ex2 button");
const ex2output = document.querySelector("#ex2 p");
const ex3inputA = document.querySelector("#ex3 #ex3inA");
const ex3inputB = document.querySelector("#ex3 #ex3inB");
const ex3button = document.querySelector("#ex3 button");
const ex3output = document.querySelector("#ex3 p");
const ex4inputA = document.querySelector("#ex4 #ex4inA");
const ex4inputB = document.querySelector("#ex4 #ex4inB");
const ex4inputC = document.querySelector("#ex4 #operador");
const ex4button = document.querySelector("#ex4 button");
const ex4output = document.querySelector("#ex4 p");


const ex1 = () => {
    ex1output.innerHTML = ex1input.value % 2 ? "es impar" : "es par";
}

function calculaEx2 (input) {
    console.log(input, typeof(input));
    return 144/input == 12 ? true : false;
}

const ex2 = () => {
    if (calculaEx2(ex2input.value)){
        alert("bienvenido");
    } else {
        alert("no puedes pasar");
    }
}

const ex3 = () => {
    let articulo = parseInt(ex3inputA.value);
    let iva = parseInt(ex3inputB.value);
    let final = (articulo * (iva/100))+articulo;
    console.log(articulo,typeof(articulo),iva,typeof(iva),final, typeof(final));
    if (!isNaN(final)){
        ex3output.innerHTML = `El precio del articulo es ${final}`;
    } else {
        
        ex3output.innerHTML = `hay un error en los datos introducidos`;
    } 
}

const ex4 = () => {
    let num1 = parseInt(ex4inputA.value);
    let num2 = parseInt(ex4inputB.value);
    let result;
    switch (ex4inputC.value) {
        case "suma":
            result = num1 + num2;
            break;
        case "resta":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "modulo":
            result = num1%num2;
            break;
    
        default:
            break;
    }
    if (!isNaN(result)){
        ex4output.innerHTML = `El precio del articulo es ${result}`;
    } else {
        
        ex4output.innerHTML = `hay un error en los datos introducidos`;
    } 
}

ex1button.addEventListener("click",ex1);
ex2button.addEventListener("click",ex2);
ex3button.addEventListener("click",ex3);
ex4button.addEventListener("click",ex4);