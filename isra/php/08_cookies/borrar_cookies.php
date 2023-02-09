<?php

if ($_COOKIE["micookie"])
      setcookie("micookie", "", time() - 1);

if ($_COOKIE["unyear"])
      setcookie("unyear", "", time() - 1);

header("Location:ver_cookies.php");


?>