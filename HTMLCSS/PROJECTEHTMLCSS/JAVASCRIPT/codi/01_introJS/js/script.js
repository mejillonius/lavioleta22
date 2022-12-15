// window.alert("PopUp lanzadeo desde externo");
const btn = document.getElementById("nombre");

function dimeTuNombre() {
  let nombre = window.prompt("Die tu nombre");
  console.log(nombre);
  alert(nombre);
  // document.writeln(nombre);
  // document.getElementById("mostra").innerHTML="tu nombre es " + nombre;
  document.getElementById(
    "mostra"
  ).innerHTML = `<p style="font-size:30px;">tu nombre es ${nombre}</p>`; //template string
}

btn.onclick=dimeTuNombre;
// document.getElementById("nombre").onclick=dimeTuNombre;
