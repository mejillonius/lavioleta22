<?php

session_start();        //Lo ponemos para que se mantenga la sesión iniciada y no dé error ya uqe la hemos iniciado en la intro


echo $_SESSION['session_var1'];
echo "<br>";

echo $_SESSION['session_var2'];
echo "<br>";
?>

<a href="intr_vars_sesion.php">ir a intro de las variables de sesión</a> || <a href="uso_var_sesion.php">ir a uso de variables de sesión</a>

<?php session_destroy(); ?>