document.title = window.name;
//ejercicio 9

const muestraReloj = function muestraReloj() {
  let fechaHora = new Date();
  let horas = fechaHora.getHours();
  let minutos = fechaHora.getMinutes();
  let segundos = fechaHora.getSeconds();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  let texto;

  if (horas >= 6 && horas < 14) {
    texto = "Buenos Días";
  } else if (horas >= 14 && horas < 20) {
    texto = "Buenas Tardes";
  } else {
    texto = "Buenas noches";
  }

  document.getElementById("reloj").innerHTML =
    "<h2>Ahora mismo son \n\
                " +
    horas +
    ":" +
    minutos +
    ":" +
    segundos +
    ": " +
    texto +
    "</h2>";
};

setInterval(muestraReloj, 1000);

//ejercicio 10
// let direccion = window.prompt("introduce una nueva direccion HTML para la ventana principal");
// let pattern = /^(http|https?:\/\/)? [a-z0-9\.-]+\.[a-z]{2,4}/;

//     if(direccion.match(pattern)){
//         window.opener.location.replace(direccion);
//     }

let error = "";
let direccion = "";

let pattern = /^(http|https):\/\/[a-z0-9\.-]+\.[a-z]{2,9}$/;

do {
  direccion = prompt(
    error + " introduce una nueva direccion HTML para la ventana principal"
  );
  error = "Error!!!";
  comprolet = direccion.match(pattern);
} while (!comprolet);
if (direccion.match(pattern)) {
  window.opener.location.replace(direccion);
}

//window.opener.location.replace(direccion);
