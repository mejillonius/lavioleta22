const btnNuevoJuego = document.querySelector("#nuevo-juego");
const nombre = document.querySelector("#nombre");
const numMin = document.querySelector("#num-min");
const numMax = document.querySelector("#num-max");
const contenido = document.querySelector(".contenido");
var target;



btnNuevoJuego.addEventListener("click", () => {
    minimo = Number(numMin.value);
    maximo = Number(numMax.value);
    target = Math.floor(Math.random()*(maximo-minimo)+1)+minimo;
    archipielago = "";
    console.log(target);
    for(let i = minimo; i<=maximo ; i++){
        isla = `<div class="isla" >${i}</div>`;
        archipielago += isla;
    }
    contenido.innerHTML = archipielago;
    islas = document.querySelectorAll(".isla");
    islas.forEach(isla => {
        isla.addEventListener("click",()=>{
            console.log(typeof(isla),isla);
            
        })
    });
});