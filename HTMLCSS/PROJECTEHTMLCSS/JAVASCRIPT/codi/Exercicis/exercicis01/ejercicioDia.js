//captamos el elemento de la div para usarlo despues
const mostra = document.getElementById("mostra");
//pedimos al usuario el dia y lo convertimos a mayusculas todo a la vez
let dia = prompt("introdueix un dia en catala").toUpperCase();
//console.log(dia);

//se crea una variable para almacenar el texto que pondremos en el switch case
let texto = ``;

//se compara el texto introducido contra los valores establecidos previamente y asignamos el texto adecuado a la variable de texto
switch (dia) {
    case "DILLUNS":
        texto = "dia de la setmana 1";
        break;
    
    case "DIMARTS":
        texto = "dia de la setmana 2";
        break;
    
    case "DIMECRES":
        texto = "dia de la setmana 3";
        break;
    
    case "DIJOUS":
        texto = "dia de la setmana 4";
        break;
    
    case "DIVENDRES":
        texto = "dia de la setmana 5";
        break;
    
    case "DISABTE":
        texto = "dia de la setmana 6";
        break;
    
    case "DIUMENGE":
        texto = "dia de la setmana 7";
        break;
    default:
        texto = "no he entes el que s'ha introduit";
        break;
};

//recogemos el elemento mostra y usamos la variable de texto para mostrarlo en los elementos que se os pide
mostra.innerHTML = `<p>${texto}</p>`;
alert(texto);