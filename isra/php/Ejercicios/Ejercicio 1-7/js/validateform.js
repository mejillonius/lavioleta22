// Función para hacer Scroll a un elemento de la página
const ScrollToElement = (elemento) => {
  if(elemento == "#totop"){
        window.scrollTo(0,0);
  }
  else{
        document.querySelector(elemento).scrollIntoView({
              behavior: 'smooth'
        });
  }   
};

// Recoger todos los botones con la clase Scrollto para darle la funcionalidad
const botones_con_scroll = document.querySelectorAll(".scrollto");
botones_con_scroll.forEach((el) =>{
  el.addEventListener("click", ()=> {
        zona_scroll = el.attributes.href.value;
        ScrollToElement(zona_scroll);          
  });
});

// Validación de los Formularios
const formularios = document.querySelectorAll(".miformulario");
formularios.forEach((formulario) =>{
    formulario.addEventListener("submit",(e) => {
        formulario.classList.add('was-validated');
        e.preventDefault();
        e.stopPropagation();
        if (formulario.checkValidity()) 
            formulario.submit();

    });
});



