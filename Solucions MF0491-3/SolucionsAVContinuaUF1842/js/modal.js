// Declaración de variables
let imagenes, modal, imagen, boton, i, src;

// Asignación de valores a las variables
imagenes = document.querySelectorAll(".galeria-imagenes");
modal = document.querySelector("#modal");
imagen = document.querySelector("#modal-imagen");
boton = document.querySelector("#modal-boton");

// Mostrar la imagen en la que se hace click
for (i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", (ruta) => {
    modal.classList.toggle("modal-visible");
    src = ruta.target.src;
    imagen.setAttribute("src", src);
  });
}

// Función del botón de cierre
boton.addEventListener("click", function () {
  modal.classList.toggle("modal-visible");
});
