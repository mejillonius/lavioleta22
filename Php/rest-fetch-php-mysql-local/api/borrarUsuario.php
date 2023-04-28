<?php
/* $dominioPermitido = "https://dominio.com";
header('Access-Control-Allow-Origin: $dominioPermitido'); */
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');  //tipo específico de aplication
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
      die();
}
require "conexion.php";

$json = file_get_contents("php://input");

$objId = json_decode($json);

$sql = "DELETE FROM usuarios WHERE id='$objId->id'";
$query = $mysqli->query($sql);

$jsonRespuesta = ['msg' => 'OK'];
echo json_encode($jsonRespuesta);
