const botones = document.querySelectorAll("button.boton");
const nombre = document.querySelector("#nombre");
const numMin = document.querySelector("#num_min");
const numMax = document.querySelector("#num_max");
const contenido = document.querySelector(".contenido");
const ariaCognitivo = document.querySelector("#formAyudaCognitivo");
const pMensajes = document.querySelector("#welcome");
const num_try = document.querySelector("#num_try");
const formAyudaContraste = document.querySelector("#formAyudaContraste");
const masterCSS = document.querySelector("#masterCSS");
const msgMenor = "La casilla es de un numero menor";
const msgMayor = "La casilla es de un numero Mayor";
const rutaAltoContraste = "./css/alto_contraste.css";
const rutaMasterCSS = "./css/juego.css";


var target;
var vnumMin;
var vnumMax;
var intentos;




const nuevoJuego = () => {
    intentos = num_try.value;
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
const btnEstadisticas = () => {
    document.querySelector("#form_estadisticas").classList.toggle("collapse");
}
const btnOpciones = () => {
    document.querySelector("#form_opciones").classList.toggle("collapse");
}
const btnGuardarOpciones = () => {

    if (formAyudaContraste.checked){
        masterCSS.href = rutaAltoContraste;
    } else {
        masterCSS.href = rutaMasterCSS;
    }
    intentos = num_try.value;
    btnOpciones();
}

function pasaValor (e){
    console.log(e);
    console.log(e.srcElement.innerHTML);
    switch (e.code) {
        case "Space":
        case "Enter":
            actuTablero(e.srcElement.innerHTML);
            break;
        case "ArrowRight":
            e.srcElement.nextElementSibling.focus();
            break;
        case "ArrowLeft":
            e.srcElement.previousElementSibling.focus();
    }

}

function actuTablero (numero) {
    islas = document.querySelectorAll(".isla");
    if (esLaCorrecta(numero)){
        console.log("felicidades");
        alert("felicidades");
    } else {
        marronizar(islas, numero);
    }
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
        isla.addEventListener("keyup",pasaValor);
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
    if (intentos > 0){
        if (ariaCognitivo.checked){
            if (direccion(objetivo)) {
                desdeAbajo(islas,objetivo);
            } else {
                desdeArriba(islas,objetivo);
            }
        } else {
            soloEsta (islas, objetivo);
        }
        intentos -= 1;
    } else {
        alert("juego terminado");
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
                messenger(msgMenor);
            }
        }
    });
}
const soloEsta = (islas, objetivo) => {
    islas.forEach ( isla => {
        if (Number(isla.innerHTML) == objetivo){
            if(isla.classList.contains("isla")){
                isla.classList.toggle("isla");
                isla.classList.toggle("nope");
                if (direccion (objetivo)) {
                    messenger(msgMayor);
                } else {
                    messenger(msgMenor);
                }
            };           
        }
    })
}
const messenger = (mensaje) => {
    pMensajes.innerHTML = mensaje;
}
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        /* console.log(boton); */
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
            case "btnEstadisticas":
                btnEstadisticas();
                break;
            case "btnOpciones":
                btnOpciones();
                break;
            case "btnGuardarOpciones":
                btnGuardarOpciones();
                break;
            default:
                console.log("boton!");
        }
    });
    
});