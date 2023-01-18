const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const value = document.querySelector("#texto");

function iniciar() {
  boton.addEventListener("click", nuevoitem);
  mostrar();
}
function nuevoitem() {
  let clave = indice.value;
  let valor = value.value;
  sessionStorage.setItem(clave, valor);
  indice.value = "";
  value.value = "";
  mostrar();
}
function mostrar() {
  let cajadatos = document.getElementById("cajadatos");
  cajadatos.innerHTML =
    '<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>';
  for (let f = 0; f < sessionStorage.length; f++) {
    let clave = sessionStorage.key(f);
    let valor = sessionStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type='button' onclick='eliminar("${clave}")' value='Eliminar'><div>`;
  }
}
function eliminar(clave) {
  if (confirm("¿Está Seguro?")) {
    sessionStorage.removeItem(clave);
    mostrar();
  }
}
function eliminarTodo() {
  if (confirm("Are you sure?")) {
    sessionStorage.clear();
    mostrar();
  }
}

addEventListener("load", iniciar);
