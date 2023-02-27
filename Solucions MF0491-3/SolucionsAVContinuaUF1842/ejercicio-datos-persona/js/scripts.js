let presenta = [];
let recogida = [];
const nombre = document.querySelector("#nom");
const apellido = document.querySelector("#cognom");
const edad = document.querySelector("#edad");
const dni = document.querySelector("#dni");
const muestra = document.querySelector("#muestra");
const mostra = document.querySelector("#mostra");
const blistado = document.querySelector("#borrar_listado");
const bultimo = document.querySelector("#borrar_ultimo");
const formu = document.querySelector("#formu");
let cont = 0;

const datos=() =>{
  formu.addEventListener("submit", (e) => {
formu.classList.add("was-validated"); 
    e.preventDefault();
    if (formu.checkValidity()) {
      let nom = nombre.value;
      let ap = apellido.value;
      let ed = edad.value;
      let dn = dni.value;

      recogida = {
        "Nombre: ": nom,
        "Apellido: ": ap,
        "Edad: ": ed,
        "Dni: ": dn,
      };
      crea_presenta();
      mostra.style.display = "block";
      mostra.innerHTML = presenta;
    }
  });
}

function crea_presenta() {
  presenta += "<ul>";
  for (let b in recogida) {
    presenta += "<li>" + b + " " + recogida[b] + "</li>";
  }
  presenta += "</ul>";
   formu.classList.remove("was-validated"); 
  formu.reset();
}

function borrar() {
  while (mostra.hasChildNodes()) {
    mostra.removeChild(mostra.lastChild);
    formu.classList.remove("was-validated"); 
    mostra.style.display = "none";
    presenta = [];
  }
}
function borra_ultimo() {
  if (mostra.hasChildNodes()) {
    mostra.removeChild(mostra.lastChild);
     formu.classList.remove("was-validated"); 
    for (let b in mostra) {
      `${b}   ${presenta[b]}`;
    }
  }
  if (mostra.childNodes.length == 0) {
    mostra.style.display = "none";
    location.reload(true);
  }
}
muestra.addEventListener("click", datos);
blistado.addEventListener("click", borrar);
bultimo.addEventListener("click", borra_ultimo);
