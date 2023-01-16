const boton = document.querySelector("#grabar");
const clave = document.querySelector("#clave");
const valor = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");


const nuevoItem = () => {
    localStorage.setItem(clave.value,valor.value);
    clave.value = "";
    valor.value = "";
    mostrar();
}

const mostrar = () => {
    boton.onclick = nuevoItem;
    cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
    for (let f = 0; f < localStorage.length; f++) {
        let clave = localStorage.key(f);
        let valor = localStorage.getItem(clave);
        cajadatos.innerHTML += `<div>${clave} - ${valor} <br> <input type="button" onclick="eliminar('${clave}')" value="eliminar"></div>`   
    }
}

const eliminar = (clave) => {
    if(confirm("are you sure?")){
        localStorage.removeItem(clave);
        mostrar();
    } 
}

const eliminarTodo = () => {
    if(confirm("are you sure?")){
        localStorage.clear();
        mostrar();
    }
}

window.onload=mostrar;

/* window.addEventListener("load", iniciar); */