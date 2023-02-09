<?php

function pDump($variable){
    echo "<hr style='border: 2px solid black'>";
    echo "<pre style='color: white;background-color: grey;font-size:22px;padding:15px;'>";
    var_dump($variable);
    echo "</pre>";
    echo "<hr style='border: 2px solid black'>";
}

/* Bucle for
for(variable contador, condición, actualizando contador){
// instrucciones
}
 */

$resultado = 0;
for ($i = 0; $i <= 10; $i++) {
/*  $resultado += $i; */
    $resultado = $resultado + $i;
    print("$resultado<br/>");
}
pDump($resultado);
echo "<h1>El resultado final es: $resultado</h1>";

// Ejemplo de Tabla de Multiplicar
?>
<form action="" method="get">
    <input type="number" name="numero" id="numero">
    <button type="submit">Enviar</button>
</form>

<?php

if(isset($_GET["numero"]) && is_numeric($_GET["numero"])){
    $numero = $_GET["numero"];
} else {
    $numero = 1;
}

echo "<h1> Tabla de multiplicar del número $numero </h1>";
$num = "";

for($contador = 0;$contador<=10;$contador++){
    $num .= "$numero x $contador = " . ($numero * $contador) . "<br />";
}
pDump($num);

// ++ FOREACH ++
echo "<hr/>";
$marcas_motos = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "Ducati"];

echo $marcas_motos[4];
echo "<br />";
echo $marcas_motos[2];
echo "<br />";

foreach($marcas_motos as $value){
    echo "$value<br />";
}

foreach ($marcas_motos as $key => $value) {
    echo ($key + 1) . " : $value";
    echo "<br />";
}

echo "<hr/>";

$marcas_motos_asoc = ["Honda" => "Vmax","Yamaha" => "Rd250","Suzuki" => "S500","Kawasaki" => "Kamikaze","Ducati" => "Scarver500"];
pDump($marcas_motos_asoc);

echo "<hr/>";
foreach ($marcas_motos_asoc as $key => $value) {
    echo "Marca : $key -- Módelo : $value";
    echo "<br />";
}


?>