/* const NOMBRE="Alberto"; //constante de toda la vida
const PI=3.141516; */
const nombre = "Alberto"; //constante que puede alamacenar estructuras complejas, van en minusculas
const apellido = "Galarzo";
const saludo = `<h3>Bienvenido</h3> <p>${nombre} ${apellido} a nuestra aplicacion</p>`;
const mostra = document.getElementById("mostra");
mostra.innerHTML = saludo;

//ejemplo muesta listas
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const muestraMeses = document.getElementById("lista");
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
let estaciones = ``;

const listaEstaciones = () => { //esto es una arrow function
  estaciones = `<ul>
        <li>${meses[0]}</li>
        <li>${meses[1]}</li>
        <li>${meses[2]}</li>
        <li>${meses[3]}</li>
        <li>${meses[4]}</li>
        <li>${meses[5]}</li>
        <li>${meses[6]}</li>
        <li>${meses[7]}</li>
        <li>${meses[8]}</li>
        <li>${meses[9]}</li>
        <li>${meses[10]}</li>
        <li>${meses[11]}</li>
        </ul>`;
  muestraMeses.innerHTML = estaciones;
};

/* const delistaEstaciones = () => {
  estaciones = ``;
  muestraMeses.innerHTML = estaciones;
}; */

abrir.onclick = listaEstaciones;
cerrar.onclick = () => { //con la arrow funtion podemos hacer las acciones asi, directamente en la accion
    estaciones = ``;
    muestraMeses.innerHTML = estaciones;
  };
