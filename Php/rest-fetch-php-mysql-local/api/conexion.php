<?php

// Variables de la conexion a la DB
$mysqli = new mysqli("localhost", "root", "", "pruebas");

// Comprobamos la conexion
if ($mysqli->connect_errno) {
    die("Error de conexion");
}