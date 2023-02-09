<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<title> Cookies con Php</title>
</head>

<body>
	<pre>
	<code>
	<?php
	/*
	Cookie: es un fichero que se almacena en el ordenador del usuario que visita la web, con el fin de recordar datos o rastrear el comportamiento del mismo en la web.
	*/

	// Crear cookie
	// setcookie("valor", "valor que solo puede ser texto", caducidad, ruta, dominio);

	// Cookie Básica, dura lo que dura una sesión
	// setcookie("micookie", "valor de mi galleta");

	// Cookie con expiración


	setcookie("unyear", "Cookie de 365 dias", time() + (60 * 60 * 24 * 365));
	setcookie("contador", $_COOKIE['contador'] + 1, time() + 10);
	var_dump($_COOKIE);
	?>
	</code>
</pre>

</body>

</html>