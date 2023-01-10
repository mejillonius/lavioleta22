function crearTabla(arrayDeLineas){
    let tablaDeVuelta = "<table>\n";
    for( let contenidoDeCelda of arrayDeLineas.shift()){
        celda = `<th>${contenidoDeCelda}</th>`;
        // console.log(celda);     
        tablaDeVuelta += celda;
    }    
    for (let valoresDeLinea of arrayDeLineas){
        tablaDeVuelta += "<tr>\n";
        for( let contenidoDeCelda of valoresDeLinea){
            celda = `<td>${contenidoDeCelda}</td>`;
            // console.log(celda);     
            tablaDeVuelta += celda;
        }
        tablaDeVuelta += "</tr>\n";
    }
    tablaDeVuelta += "</table>";
    return tablaDeVuelta;

}
/* function ejercicio2i(){
    let text = window.location.href;
    let elementosSeparados = text.split("/");
    let documento = elementosSeparados.pop().split(".")
    return documento.shift();
} */
//esta hace lo mismo que la de arriba pero en pequeño
function ejercicio2ii(){
    return window.location.href.split("/").pop().split(".").shift();
}

function ejercicio2 (){
    let tabla = [];
    let titulo = ["PROPIEDAD", "VALOR OBTENIDO CON JS"];
    tabla.push(titulo);
    tabla.push(["Valor máximo que puede tener un número en JavaScript", Number.MAX_VALUE]);
    tabla.push(["Valor mínimo que puede tener un número en JavaScript", Number.MIN_VALUE]);
    tabla.push(
    ["Altura total de la pantalla", screen.height ],
    ["Anchura total de la pantalla", screen.width],
    ["Altura de la página web", window.innerHeight],
    ["Anchura de la página web", window.innerWidth],
    ["URL de la página web", document.title],
    ["Nombre de la página web con su extensión (index.html)", window.location.href],
    ["Nombre de la página web sin su extensión (index)",ejercicio2ii()],
    ["Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)", Math.floor(Math.random()*201)],
    ["Sistema operativo del ordenador.", navigator.userAgentData.platform]
    )

    return tabla;
}

document.querySelector("#ej2").innerHTML = crearTabla(ejercicio2());


