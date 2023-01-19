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
const ex5button = document.querySelector("#ex5 button");
const ex5output = document.querySelector("#ex5 div");
const ex6button = document.querySelector("#ex6 button");
const ex6output = document.querySelector("#ex6 div");


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

const ex5 = () => {
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    let conGuiones = ""
    meses.forEach(mes => {conGuiones += `${mes} - `});
    let conAsteriscos = ""
    meses.forEach(mes => {conAsteriscos += `${mes} * `});

    ex5output.innerHTML = `<h3>orden real</h3><p>${meses.toString()}</p>
                            <h3>en orden alfabetico</h3><p>${[...meses].sort().toString()}</p>
                            <h3>con guiones</h3><p>${conGuiones.substring(0,conGuiones.length -3)}</p>
                            <h3>orden inverso</h3><p>${meses.reverse().toString()}</p>
                            <h3>con asteriscos</h3><p>${conAsteriscos.substring(0,conAsteriscos.length -3)}</p>
                            `;
}

const ex6 = () => {
    datos = {
        "producto1" : "0001",
        "producto2" : "0002",
        "producto3" : "0003",
        "producto4" : "0004",
        "producto5" : "0005",
        "producto6" : "0006",
        "producto7" : "0007",
        "producto8" : "0008",
        "producto9" : "0009"
    };

    output = "";
    for (const ids in datos) {
        output += `<p>${ids}-${datos[ids]}</p>`;
    }
    ex6output.innerHTML = output;
}

ex1button.addEventListener("click",ex1);
ex2button.addEventListener("click",ex2);
ex3button.addEventListener("click",ex3);
ex4button.addEventListener("click",ex4);
ex5button.addEventListener("click",ex5);
ex6button.addEventListener("click",ex6);