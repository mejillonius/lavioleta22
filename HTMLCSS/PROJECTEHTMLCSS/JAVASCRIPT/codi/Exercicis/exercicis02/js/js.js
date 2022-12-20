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