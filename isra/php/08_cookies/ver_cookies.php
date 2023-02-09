<?php

/* if(isset($_COOKIE['unyear'])){
      echo "<h2> La cookie unyear tiene el valor: " .$_COOKIE['unyear'] ."</h2>";
}else{
      echo "<h2>La cookie unyear no existe </h2>";
} */

echo isset($_COOKIE['unyear']) ? "<h2> La cookie unyear tiene el valor: " . $_COOKIE['unyear'] . "</h2>" : "<h2>La cookie unyear no existe </h2>";

echo isset($_COOKIE['micookie']) ? "<h2> La cookie micookie tiene el valor: " . $_COOKIE['micookie'] . "</h2>" : "<h2>La cookie micookie no existe </h2>";

?>
<a href="crear_cookie.php">Ir a guardar cookies</a> || <a href="borrar_cookies.php">Ir a borrar cookies</a>