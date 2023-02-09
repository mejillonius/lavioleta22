<?php
require 'assets/functions.php';

session_start();        //Lo ponemos para que se mantenga la sesión iniciada y no dé error ya uqe la hemos iniciado en la intro

echo $normal_var;
echo "<br>";
echo $_SESSION['session_var1'];
$numero = 456321456.4576;
echo "<br>";

$_SESSION['session_var2'] = $numero;
pDump($_SESSION);
echo "<br>";
?>

<a href="intr_vars_sesion.php">ir a intro de las variables de sesión</a> || <a href="mas_vars_sesion.php">ir a más variables de sesión</a>