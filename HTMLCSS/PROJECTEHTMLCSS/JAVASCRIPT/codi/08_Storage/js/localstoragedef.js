/* localStorage;
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();

sessionStorage;
sessionStorage.setItem(key, value);
sessionStorage.getItem(key);
sessionStorage.removeItem(key);
sessionStorage.clear(); */

const boton = document.querySelector("#grabar");
const clave = document.querySelector("#clave");
const valor = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");

const nuevoitem = () => {
  localStorage.setItem(clave.value, valor.value);
  clave.value = "";
  valor.value = "";
  mostrar();
};

const mostrar = () => {
  boton.onclick = nuevoitem;
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (const key in localStorage) {
    if(!localStorage.getItem(key)){
      continue;
    }
    let valor = localStorage.getItem(key);
    cajadatos.innerHTML += `<div> ${key} - ${valor} <br><input type='button' onclick='eliminar("${key}")' value='Eliminar'></div>`;

  }
/*   for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type='button' onclick='eliminar("${clave}")' value='Eliminar'></div>`;
  } */
};

const eliminar = (clave) => {
  if (confirm("¿Está Seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Está Seguro?")) {
    localStorage.clear();
    mostrar();
  }
};
window.onload = mostrar;

/* window.addEventListener("load", iniciar); */
