<?php
//https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=3a0e73cbb9bd59e0dc18c53fb836e2ea&units=metric&lang=es


//$urlContent = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$ciudad."&appid=3a0e73cbb9bd59e0dc18c53fb836e2ea&units=metric&lang=es");
$prevision = "";
$error = "";

if("POST" ===$_SERVER['REQUEST_METHOD']&&isset($_POST['ciudad'])){ //el get server request es para seguridad que compruebe que la peticion viene de nuestro servidor
      if(empty($_POST['ciudad'])){
            $error = "no ha introducido una ciudad";
      } else if (!empty($_POST['ciudad'])){
            $ciudad = $_POST['ciudad'];
            $urlContent = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$ciudad."&appid=3a0e73cbb9bd59e0dc18c53fb836e2ea&units=metric&lang=es");

            /* var_dump($urlContent); */

            if (!$urlContent){
                  $error = "no se ha podido obtener el tiempo de la ciudad indicada";
            } else {
                  $convertida = json_decode($urlContent, true);
                  //var_dump($convertida);
                  $tempActual = $convertida['main']['temp'];
                  $tempActual = intval($tempActual);
                  $tempMin = $convertida['main']['temp_min'];
                  $tempMin = intval($tempMin);
                  $tempMax = $convertida['main']['temp_max'];
                  $tempMax = intval($tempMax);

                  $prevision = "El tiempo actual en ".$ciudad." es ".$tempActual." grados. Oscilando entre una minima de ".$tempMin." grados y una maxima de  ".$tempMax." grados. ".$convertida['weather'][0]['description'];

            }
      }
}

?>


<!DOCTYPE html>
<html lang="es">

<head>
      <!-- Required meta tags always come first -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <link rel="stylesheet" href=" https://www.w3schools.com/w3css/4/w3.css">
      <title>¿Qué tiempo hace?</title>
      <style>
      html {
            
            /* background: url("https://api.lorem.space/image/movie?w=1000&h=1000&hash=yvfe6n59") no-repeat center center fixed; */
            /*     background: url("https: //picsum.photos/1000") no-repeat center center fixed; */
            background-size: cover;
      }

      .w3-container {
            text-align: center;
      }

      h1,
      label {
            color: white;
            font-weight: 800;
            text-shadow: 1px 1px black, -1px -1px black;

      }
      </style>
</head>

<body>
      <div class="w3-container w3-display-middle">
            <h1>¿Qué tiempo hace?</h1>
            <form class="w3-margin" action="" method="POST">
                  <fieldset class="w3-padding w3-margin">
                        <label for="ciudad">Introduce el nombre de una ciudad:</label>
                        <input type="text" class="w3-padding" id="ciudad" name="ciudad"
                              placeholder="Por ej. Londres, Tokyo" value="">

                  </fieldset>

                  <button type="submit" class="w3-button w3-black">Enviar</button>
            </form>
            <div id="previsionTiempo">
                  <?php

                        if($prevision!=""){
                             echo "<div class='w3-panel w3-green w3-padding-24' role='alert'>".$prevision."</div>";
                        } else if ($error!=""){
                             echo "<div class='w3-panel w3-red w3-padding-24' role='alert'>".$error."</div>";
                        }
                  ?>
            </div>
      </div>

</body>

</html>