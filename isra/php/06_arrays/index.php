<!DOCTYPE html>
<html lang="es">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
</head>
<body>
      <img src="https://api.lorem.space/image/pizza?w=1000&h=1000&hash=39wgy77k" alt="">
</body>
</html>

<?php
/* 
 ARRAYS
 Un array es una variable que almacena una colección  de datos/valores, bajo un único nombre.
 Para acceder a esos valores podemos usar un índice número o alfanumérico.
 */

$pelicula = "Airbag";
$peliculas = ['Airbag', 'Abierto hasta el amanecer', 'Bad Taste'];
$cantantes = ['Josele Santiago', 'Justin Sullivan', 'Chrissie Hynde'];

// Array asociativo
$personas = [
      'nombre' => 'Òscar',
      'apellidos' => 'Eroles',
      'web' => 'myweb.com'
];

echo $personas['apellidos'];

// Recorrer con FOR
echo "<h1>Listado de peliculas</h1>";

echo "<ul>";

for ($i = 0; $i < count($peliculas); $i++) {
      echo "<li>" . $peliculas[$i] . "</li>";
}
echo "</ul>";
// Recorrer con Foreach
echo "<h1>Listado de cantantes</h1>";

echo "<ul>";
foreach ($cantantes as $cantante) {
      echo "<li>" . $cantante . "</li>";
}
echo "</ul>";

//Recorrer personas (asociativo)
echo "</ul>";
// Recorrer con Foreach
echo "<h1>Listado de personas</h1>";

echo "<ul>";
foreach ($personas as $key => $persona) {
      echo "<li>Persona:" . $key . " = " . $persona . "</li>";
}
echo "</ul>";
echo '<br>';

// Arrays multidimensionales
$agenda = [
      ['nombre' => 'Pepe', 'email' => 'email@email.com',],
      ['nombre' => 'Pepon', 'email' => 'otro@email.com',],
      ['nombre' => 'Jose', 'email' => 'masl@email.com',],
      'nombre' => 'Antonio',
];

foreach ($agenda as $key => $value){
      if(is_array($value)){
            foreach ($value as $indice => $valor){
                  echo $indice . "-" . $valor . "<br>";
            }
      }else{
            echo $key . "-" . $value . "<br>";
      }
}
