const botones = document.querySelectorAll("button.boton");
const nombre = document.querySelector("#nombre");
const numMin = document.querySelector("#num_min");
const numMax = document.querySelector("#num_max");
const contenido = document.querySelector(".contenido");
var target;
var vnumMin;
var vnumMax;
var intentos;


const nuevoJuego = () => {
    intentos = 5;
    nombre.value = "Alberto";
    numMin.value = "5";
    numMax.value = "35";
    contenido.innerHTML = "";
    document.querySelector("#form_nombre").classList.toggle("collapse");
    nombre.focus();
}
const btnNombreOk = () => {
    let fnom = document.querySelector("#form_nombre");
    fnom.children.p1.innerHTML=`tu nombre es ${fnom.children.nombre.value}`
    fnom.classList.toggle("collapse");
    document.querySelector("#form_min").classList.toggle("collapse");
    numMin.focus();
}

const btnMinNext = () => {
    let fmin = document.querySelector("#form_min");
    fmin.children.p2.innerHTML=`el mnimo es${fmin.children.num_min.value}`
    fmin.classList.toggle("collapse");
    document.querySelector("#form_max").classList.toggle("collapse");
    numMax.focus();
}

const btnMinBack = () => {
    document.querySelector("#form_min").classList.toggle("collapse");
    document.querySelector("#form_nombre").classList.toggle("collapse");
    nombre.focus();
}
const btnMaxBack = () => {
    document.querySelector("#form_min").classList.toggle("collapse");
    document.querySelector("#form_max").classList.toggle("collapse");
    numMin.focus();
}


const btnMaxNext=()=> {
    document.querySelector("#form_max").classList.toggle("collapse");
    minimo = Number(numMin.value);
    maximo = Number(numMax.value);
    target = Math.floor(Math.random()*(maximo-minimo)+1)+minimo;
    archipielago = "";
    for(let i = minimo; i<=maximo ; i++){
        isla = `<div class="isla" tabIndex=1 >${i}</div>`;
        archipielago += isla;
    }
    contenido.innerHTML = archipielago;
    islas = document.querySelectorAll(".isla");
    islas.forEach(isla => {
        isla.addEventListener("click",()=>{
            if (esLaCorrecta(isla.innerHTML)){
                console.log("felicidades");
                alert("felicidades");
            } else {
                marronizar(islas, isla.innerHTML);
            }
            
        })
    });
}

const esLaCorrecta = (texto) => {
    if (target == texto){
        return true;
    } else {
        return false;
    }
}

const marronizar = (islas, objetivo) => {
    if (direccion(objetivo)) {
        desdeAbajo(islas,objetivo);
    } else {
         desdeArriba(islas,objetivo);
    }
}

const direccion = (objetivo) => {
    if (Number(objetivo) < target) {
        return true;
    } else {
        return false;
    }
}

const desdeAbajo = (islas, objetivo) => {
    islas.forEach(isla => {
        if (Number(isla.innerHTML)<=objetivo){
            if(isla.classList.contains("isla")){
                isla.classList.toggle("isla");
                isla.classList.toggle("nope");
            }
        }
    });
}

const desdeArriba =  (islas, objetivo) => {
    islas.forEach(isla => {
        if (Number(isla.innerHTML)>=objetivo){
            if(isla.classList.contains("isla")){
                isla.classList.toggle("isla");
                isla.classList.toggle("nope");
            }
        }
    });
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log(boton);
        switch (boton.id) {
            case "btnNuevoJuego":
                nuevoJuego();
                break;
            case "btnNombreOk":
                btnNombreOk();
                break;
            case "btnMinBack":
                btnMinBack();
                break;
            case "btnMinNext":
                btnMinNext();
                break;
            case "btnMaxBack":
                btnMaxBack();
                break;
            case "btnMaxNext":
                btnMaxNext();
                break;
            default:
                console.log("boton!");
        }
    });
    
});