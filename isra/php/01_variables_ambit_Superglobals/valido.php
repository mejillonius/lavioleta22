<?php

function pDump($variable){
      echo "<hr style='border: 2px solid black'>";
      echo "<pre style='color: white;background-color: grey;font-size:18px;padding:15px;'>";
      var_dump($variable);
      echo "</pre>";
      echo "<hr style='border: 2px solid black'>";
}

echo "<h1>" . $_REQUEST["nombre"] . "</h1>";
echo "<h1>" . $_REQUEST["apellidos"] . "</h1>";

pDump($_REQUEST);

pDump($_SERVER);

?>