<!DOCTYPE html>
<html lang="es">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Crear Cookies con Formulario</title>

      <link rel="stylesheet" href="css/miestilo.css">
</head>
<body>
<div class="container mb-5 mt-5">
            <h1>
                  Crear Cookies con Formulario
            </h1>
            <div class="row" id="content_miformulario">
                  <form id="miformulario" name="miformulario" class="row g-3 needs-validation" novalidate action="gestion_cookies.php" method="get">
                        
                        <!-- Solo texto -->
                        <div class="col-md-12 col-sm-12">
                              <label for="nombre" class="form-label">Nombre</label>
                              <input type="text" class="form-control" placeholder="Introduce un Nombre" id="nombre" name="nombre" value="" required pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,60}">
                              <div class="valid-feedback">
                                    Solo texto Correcto
                              </div>
                              <div class="invalid-feedback">
                                    Introduce bien, solo texto 
                              </div>
                        </div>

                        <!-- Campo Email -->
                        <div class="col-md-12 col-sm-12">
                              <label for="email" class="form-label">Email</label>
                              <input type="email" class="form-control" placeholder="Introduce un Email" id="email" name="email" value="" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                              <div class="valid-feedback">
                                    Email Correcto
                              </div>
                              <div class="invalid-feedback">
                                    Introduce bien, Email incorrecto
                              </div>
                        </div>

                        <div class="col-md-12 col-sm-12">
                              <button class="btn btn-primary" type="submit">Enviar Formulario</button>
                        </div>
                  </form> 
            </div>
      </div>
      

      <script src="js/bootstrap.bundle.js"></script>
      <script src="js/validateform.js"></script>      
</body>
</html>