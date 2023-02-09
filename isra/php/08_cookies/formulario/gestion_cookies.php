<?php

$nombre = "";
$email = "";

// Comprobar los datos que nos llegan por get
if (isset($_GET['nombre']) && !empty($_GET['nombre']) && isset($_GET['email']) && !empty($_GET['email'])){
      $nombre = $_GET['nombre'];
      $email = $_GET['email'];
      // Crear las Cookies
      setcookie("nombre", $nombre);
      setcookie("email", $email);
}

// Si no llegan a través del formulario comprobar si la cookie existe
if(isset($_COOKIE['nombre']) && !empty($_COOKIE['nombre']) && isset($_COOKIE['email']) && !empty($_COOKIE['email'])){
      $nombre = $_COOKIE['nombre'];
      $email = $_COOKIE['email'];
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gestión de Cookies</title>
      <link rel="stylesheet" href="css/miestilo.css">
</head>
<body>
      <div class="container mb-5 mt-5">
            <h1>
                  Gestión de las Cookies
            </h1>

            <?php 
            if($nombre == "" && $email == ""){ ?>
                  <div class="alert alert-danger" role="alert">
                        Todavia no existe ninguna Cookies: ¡échale un vistazo!
                  </div>
            
            <?php } else { ?>
                  <div class="alert alert-success" role="alert">  
                        <p> La Cookie Nombre tiene el valor: <?= $nombre; ?> </p>
                        <p> La Cookie Email tiene el valor: <?= $email; ?> </p>
                  </div>

            <?php } ?>

            <a class="btn btn-primary" href="crear_cookie_form.php">Volver al Formulario</a>


      </div>
      
</body>
</html>