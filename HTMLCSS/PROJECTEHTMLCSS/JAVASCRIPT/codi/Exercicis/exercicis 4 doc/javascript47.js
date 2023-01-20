const grabar = document.querySelector("#grabar");
const mostrar = document.querySelector("#mostrar");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const dni = document.querySelector("#dni");
const target = document.querySelector("#target");

var matrizDeDatos = [];

const grabaDatos = ()=>{
    let varNombre = nombre.value;
    let varApellido = apellido.value;
    let varEdad = edad.value;
    let varDni = dni.value;

    let datos = {"nombre":varNombre,"apellido":varApellido,"edad":varEdad,"dni":varDni};
    console.log(datos);
    matrizDeDatos.push(datos);
    console.log(matrizDeDatos);
}

const mostrarDatos =()=>{
    let salida = "";
    matrizDeDatos.forEach(persona => {
        for (const dato in persona) {
            console.log(dato, persona[dato]);
            salida += `<p>${dato} - ${persona[dato]}</p>`;
        }
    });
    target.innerHTML = salida;
}


grabar.addEventListener("click",grabaDatos)
mostrar.addEventListener("click",mostrarDatos)


