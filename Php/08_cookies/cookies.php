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
	setcookie("unyear", "Cookie de 365 dias", time() + (60 * 60 * 24 * 365));
	setcookie("contador", $_COOKIE['contador'] + 1, time() + 10);
	var_dump($_COOKIE);
	?>
	</code>
</pre>

</body>

</html>