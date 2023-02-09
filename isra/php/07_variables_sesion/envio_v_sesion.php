<?php 

//En esta página queremos recoger el envío
function volver()
{
    header('Location: crea_sesiones_alumnes.php');
}

//Se tiene que asegurar (con if) que se ha declarado el método GET en el botón de la pág principal
if(!isset($_GET['enviar'])){        //Botón con atributo name=enviar. Si nadie lo ha declarado, me devuelve.
    volver();
}
if(empty($_GET['nombre']) || empty($_GET['mail'])){
    volver();
}

$nombre = $_GET['nombre'];
$mail = $_GET['mail'];

session_start();

//Creamos las variables de sesión
$_SESSION['nombre'] = $nombre;      
$_SESSION['mail'] = $mail;
echo $_SESSION['nombre'];
echo "<br>";
echo $_SESSION['mail'];

header("refresh:5;url=verifica_sesion.php");        //header es una función de gestión de las cabeceras. Con refresh refresca a los 5 segundos y nos envía a la nueva url

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabajando con sesiones</title>
</head>
<body>
    <h1>Estamos verificando sus datos, en breve serás redirigido a la página de inicio de su usuario</h1>
</body>
</html>