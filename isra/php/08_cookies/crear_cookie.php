<?php

// Cookie Básica
setcookie("micookie", "valor de mi galleta");

// Cookie con expiración
setcookie("unyear", "Cookie de 365 dias", time() + (60 * 60 * 24 * 365));

header('Location:ver_cookies.php');


?>