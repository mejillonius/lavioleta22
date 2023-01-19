const ex1BotonMostrar = document.querySelector("#mostrarBotones");
const ex1BotonBorrar = document.querySelector("#borrarBotones");
const ex1DivTarget = document.querySelector("#sitioBotones")


const ex1Muestra = () => {
    ex1DivTarget.innerHTML = `  
    <a href="https://www.google.es" class="bloquear" >enlace1</a>
    <a href="https://www.google.es" class="bloquear" >enlace2</a>
    <a href="https://www.google.es" class="bloquear" >enlace3</a>
    <a href="https://www.google.es" class="bloquear" >enlace4</a>
    <a href="https://www.google.es" class="bloquear" >enlace5</a>
    <a href="https://www.google.es" class="bloquear" >enlace6</a>

    <button type="button" class="desbloquear btn btn-primary">Primary</button>
     `;

    enlaces = document.querySelectorAll(".bloquear");
    console.log(enlaces);
    enlaces.forEach(enlace => {
        enlace.addEventListener("click",  function(event) {
            event.preventDefault();
          });
    });

    document.querySelector(".desbloquear").addEventListener("click",()=>{
        enlaces.forEach(enlace => {
            enlace.removeEventListener("click",preventDefault());
        });  
    })
}

const ex1Borra = () => {
    ex1DivTarget.innerHTML = ``;
}
bh¡¡


ex1BotonMostrar.addEventListener("click", ex1Muestra);
ex1BotonBorrar.addEventListener("click",ex1Borra);

