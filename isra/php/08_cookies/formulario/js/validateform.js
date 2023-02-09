const miformulario = document.querySelector("#miformulario");

// Función para comprobar los passwords
const comprobarPasswords = (formulario) =>{
    if(formulario.password == formulario.repeatpassword)
      return true;
    else
      return false;  
}

miformulario.addEventListener("submit", (e) => {

  miformulario.classList.add('was-validated');
  e.preventDefault();
  e.stopPropagation();
  if (miformulario.checkValidity()) {

      /* miformulario.classList.remove('was-validated');
      miformulario.reset(); */

      /* Abrir modal
      let myModal = new bootstrap.Modal(document.getElementById('mi_modal'));
      let texto_modal = `Persona añadida correctamente!`;
      document.querySelector(".modal-body").innerHTML = texto_modal;
      myModal.show();
      */

      miformulario.submit();

  }
});