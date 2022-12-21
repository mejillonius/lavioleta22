/* declarando las constantes de los botones de los ejercicios */
const btnej9 = document.getElementById("botonEjercicio9");
const clrej9 = document.getElementById("borraEjercicio9");
const btnej10 = document.getElementById("botonEjercicio10");
const clrej10 = document.getElementById("borraEjercicio10");
const btnej11 = document.getElementById("botonEjercicio11");
const clrej11 = document.getElementById("borraEjercicio11");
const btnej12 = document.getElementById("botonEjercicio12");
const clrej12 = document.getElementById("borraEjercicio12");
const btnej13 = document.getElementById("botonEjercicio13");
const clrej13 = document.getElementById("borraEjercicio13");
const btnej14 = document.getElementById("botonEjercicio14");
const clrej14 = document.getElementById("borraEjercicio14");
const btnej15 = document.getElementById("botonEjercicio15");
const clrej15 = document.getElementById("borraEjercicio15");
const btnej16 = document.getElementById("botonEjercicio16");
const clrej16 = document.getElementById("borraEjercicio16");
const btnej17 = document.getElementById("botonEjercicio17");
const clrej17 = document.getElementById("borraEjercicio17");
const btnej18 = document.getElementById("botonEjercicio18");
const clrej18 = document.getElementById("borraEjercicio18");
const btnej19 = document.getElementById("botonEjercicio19");
const clrej19 = document.getElementById("borraEjercicio19");



/* helpers */

/* funcion hipotenusa

    objetivo calcular la hipotenusa de un triangulo recto dado el ancho y el alto

    Input
        a: un numero normalmente el acho 
        b: un numero normalmente el alto

    Output
        return: un numero la hipotenusa entre los 2 numeros proporcionados
    */
function hipotenusa(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}
function limpiezaTexto (texto){
    valido1 = /[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,40}/.test(texto);

    if (valido1) {
        return texto;
    } else {
        return false;
    }
}
function limpiarFondo(){
/*     document.body.classList.remove("w3-orange","w3-blue","w3-red","w3-brown"); */
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add("w3-container");
}

/* declarando las funciones de los ejercicios */

/* funcion del ejercicio 9
  enunciado:
    9. Crea un nuevo documento  HTML con un script que a partir de un interactivo nos muestre 
el ancho de pantalla, alto de pantalla y diagonal de pantalla en pixels.

  objetivo:
    la funcion transformara el texto dentro de un div ya establecido en el HTML con el alto, el ancho, y la diagonal

    input:
        niguna
    
    output:
        ninguna, actua directamente sobre el html

    dependencias

        se llama a la funcion "hipotenusa (a,b)" para calcular la diagonal
*/
function ej9() {   
    const divrespuesta = document.getElementById("ansEjercicio9");
    let ancho = window.outerWidth;
    let alto = window.outerHeight;
    let diagonal = Math.round(hipotenusa(ancho,alto));
    divrespuesta.innerHTML = `<p class="respuesta">El ancho de la pantalla es ${ancho}, el alto de la pantalla es ${alto} y la diagonal es ${diagonal}</p>`;
};

/* funcion del ejercicio 10

    enunciado:
        10. Construye un programa que accionemos con un botón y calcule un número aleatorio 
del 1 al 10 y lo muestre en una div del html.

    objetivo:
        calcular un numero random y transformar el div ya preparado para la respuesta

    input: 
        ninguna
    
    output:
        ninguna, actua directamente sobre el html
*/
function ej10(){
    const divrespuesta = document.getElementById("ansEjercicio10");
    let numero = Math.floor(Math.random()*10)+1;
    divrespuesta.innerHTML = `<p class="respuesta">Entre el 1 y el 10 elijo el: ${numero}</p>`
}
/* funcion del ejercicio 11
    enunciado:
        11. Escribe un programa que pida por control de texto una frase y si es mas largo de 10 
caracteres, extrae los 5 últimos y muestralos en pantalla

    objetivo:
        recoger el valor del campo de texto -> comprobar que sea valido -> limpiarlo -> comprobar el largo -> extraer los 5 ultimos caracteres -> transformar el div de respuesta con la respuesta

    input 
        ninguna
    
    output

        ninguna, actua directamente sobre el html

    dependencias

        se llama a la funcion "limpiezaTexto(texto)" para limpiar la entrada

*/
function ej11(){
    let texto = document.getElementById("ej11txt").value;
    const divrespuesta = document.getElementById("ansEjercicio11");
    let extraido = "";
    texto = limpiezaTexto(texto);
    console.log (texto);

    if (texto != false && texto.length > 10){
        extraido = texto.substr(texto.length-5,5);
        extraido = `Los ultimos caracteres son : ${texto.substr(texto.length-5,5)}`;
    } else {
        extraido = "texto no valido";
    }
    divrespuesta.innerHTML = `<p class="respuesta">${extraido}</p>`;
}
/* funcion del ejercicio12 */
function ej12(){
    const divrespuesta = document.getElementById("ansEjercicio12");
    divrespuesta.innerHTML = 
    `<select name="colores" id="colores">
        <option value="w3-orange">naranja</option>
        <option value="w3-blue">azul</option>
        <option value="w3-red">rojo</option>
        <option value="w3-brown">marron</option>
    </select>
    <button id="boton12" onclick="
        let colorin = document.getElementById('colores').value;
        limpiarFondo();
        document.body.classList.add(colorin);
    ">Aplicar color</button>`

/* let color = document.getElementById('colores').value;
document.bgcolor= color; */
    
    // document.body.classList.add("w3-orange");
}
/* funcion del ejercicio 13 */
function ej13(){
    let alto = 500;
    let ancho = 500;
    let izquierda = 100;
    let arriba = 100;
    let caracteristicas = `height=${alto}, width=${ancho}, left=${izquierda},top=${arriba}, popup=yes`
    let documento = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/w3.css">
        <link rel="stylesheet" href="css/style.css">
        <title>Nueva ventana</title>
    </head>
    <body class="w3-container">
        <h1>Esta es una nueva ventana</h1>
        <p>esta ventana mide ${alto} x ${ancho} px y se ha abierto desde la ventana padre</p>
    </body>
    </html>`;

    let nuevaVentana = window.open("","new", caracteristicas );
    nuevaVentana.document.write(documento);
}
/* funcion del ejercicio 14 */
function ej14(){
    let imagen = document.getElementById("bombilla");
    let encendida = "imgs/encendida.gif";
    let apagada = "imgs/apagada.gif";
    let ruta = imagen.src.substr(imagen.src.length-16,16);
    if (ruta == apagada){
        imagen.src=encendida;
    } else {
        imagen.src=apagada;
    }
    
}
/* funcion del ejercicio 15 */
function ej15(){
    let texto = document.getElementById("ej15txt").value;
    console.log(texto);
    const divrespuesta = document.getElementById("ansEjercicio15");
    let textoEnCursiva = `<p class="w3-cursive">${texto}</p>`;
    let textoEnNegrita = `<p class="negrita">${texto}</p>`;
    let textoEnRojo = `<p class="w3-text-red">${texto}</p>`;
    let textoGrande = `<p class="w3-jumbo">${texto}</p>`;
    let textoTachado = `<p class="tachado">${texto}</p>`;
    divrespuesta.innerHTML = `${textoEnCursiva} ${textoEnNegrita} ${textoEnRojo} ${textoGrande} ${textoTachado}`;


}
/* funcion del ejercicio 16 */
function ej16(){
    const divrespuesta = document.getElementById("ansEjercicio16");
    let alto = 2;
    let ancho = 2;
    let texto = "un texto";
    let tabla = "<table>";

    for (let i = 0; i < alto; i++) {
        tabla += "<tr>";
        for (let j = 0; j < ancho; j++) {
            tabla += `<td contenteditable>${texto}</td>`;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    divrespuesta.innerHTML = tabla;
}
/* funcion del ejercicio 17 */
function ej17(){
    const finDelMundo = new Date(2012,12,21,0,0);
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth();
    const anyo = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const diaDeLaSemana = ahora.getDay();
    const semana = ["lunes", "martes", "miercoles","jueves","viernes","sabado", "domingo"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    const divrespuesta = document.getElementById("ansEjercicio17");
    divrespuesta.innerHTML = `<p>Los mayas van con un retraso de ${ahora-finDelMundo} milisegundos</p>
    hoy es ${semana[diaDeLaSemana]}, dia ${dia} de ${meses[mes]} del año ${anyo} y son las ${hora} horas, ${minutos} minutos y ${segundos} segundos `;
    
    
}

/* funcion del ejercicio 18 */
function ej18(){
    const alto = Number(document.ej18.altura.value);
    const ancho = Number(document.ej18.ancho.value);
    const divrespuesta = document.getElementById("ansEjercicio18");
    divrespuesta.innerHTML = `<p class="respuesta">el area es ${(alto*ancho)/2}</p>`;
}
/* funcion del ejercicio 19 */
function ej19(){
    const alto = Number(document.ej19.altura.value);
    const ancho = Number(document.ej19.ancho.value);
    const divrespuesta = document.getElementById("ansEjercicio19");
    let texto = "un texto";
    let tabla = "<table>";

    for (let i = 0; i < alto; i++) {
        tabla += "<tr>";
        for (let j = 0; j < ancho; j++) {
            tabla += `<td contenteditable>${texto}</td>`;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    divrespuesta.innerHTML = tabla;
}

/* declarando funciones de borrado de ejercicios */
function clearej9() {
    const divrespuesta = document.getElementById("ansEjercicio9");
    divrespuesta.innerHTML = ``;
}
function clearej10() {
    const divrespuesta = document.getElementById("ansEjercicio10");
    divrespuesta.innerHTML = ``;
}
function clearej11() {
    const divrespuesta = document.getElementById("ansEjercicio11");
    const texto = document.getElementById("ej11txt");
    texto.value = "";
    divrespuesta.innerHTML = ``;
}
function clearej12() {
    limpiarFondo();
    const divrespuesta = document.getElementById("ansEjercicio12");
    divrespuesta.innerHTML = ``;
}
function clearej13(){
    return 0;
}
function clearej14(){
    let imagen = document.getElementById("bombilla");
    let apagada = "imgs/apagada.gif";
    
    imagen.src=apagada;
}
function clearej15(){
    const divrespuesta = document.getElementById("ansEjercicio15");
    document.getElementById("ej15txt").value = "";
    divrespuesta.innerHTML = ``;
}
function clearej16(){
    const divrespuesta = document.getElementById("ansEjercicio16");
    divrespuesta.innerHTML = ``;
}
function clearej17(){
    const divrespuesta = document.getElementById("ansEjercicio17");
    divrespuesta.innerHTML = ``;
}
function clearej18(){
    const divrespuesta = document.getElementById("ansEjercicio18");
    divrespuesta.innerHTML = ``;
}
function clearej19(){
    const divrespuesta = document.getElementById("ansEjercicio19");
    document.ej19.altura.value = "";
    document.ej19.ancho.value = "";
    divrespuesta.innerHTML = ``;
}


/* delcarando las acciones al pulsar el boton */

btnej9.onclick = ej9;
clrej9.onclick = clearej9;
btnej10.onclick = ej10;
clrej10.onclick = clearej10;
btnej11.onclick = ej11;
clrej11.onclick = clearej11;
btnej12.onclick = ej12;
clrej12.onclick = clearej12;
btnej13.onclick = ej13;
clrej13.onclick = clearej13;
btnej14.onclick = ej14;
clrej14.onclick = clearej14;
btnej15.onclick = ej15;
clrej15.onclick = clearej15;
btnej16.onclick = ej16;
clrej16.onclick = clearej16;
btnej17.onclick = ej17;
clrej17.onclick = clearej17;
btnej18.onclick = ej18;
clrej18.onclick = clearej18;
btnej19.onclick = ej19;
clrej19.onclick = clearej19;