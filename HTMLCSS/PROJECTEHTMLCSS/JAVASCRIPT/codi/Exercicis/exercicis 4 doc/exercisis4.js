const ex1BotonMostrar = document.querySelector("#mostrarBotones");
const ex1BotonBorrar = document.querySelector("#borrarBotones");
const ex1DivTarget = document.querySelector("#sitioBotones")

const ex1Muestra = () => {
    ex1DivTarget.innerHTML = `  <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>`;
}

const ex1Borra = () => {
    ex1DivTarget.innerHTML = ``;
}

ex1BotonMostrar.addEventListener("click", ex1Muestra);
ex1BotonBorrar.addEventListener("click",ex1Borra);
