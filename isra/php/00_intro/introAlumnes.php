<?php
$nombre = "Manolo";

$parrafada = "<h1 style='font-size:30px; font-family:Arial'>Ejemplo </h1>
<p>Donde se prueba la generación de la páginas desde PHP. Para corregir el problema de los saltos de linea, podemos poner retornos al final de la línea<br>Hemos cambiado de línea.<br>Si queremos bajar a la línea siguiente $nombre,
    ---------- lo haremos con un &lt;br&gt; <br><strong><em>tag</em></strong> de tipo:
    <code>&lt;br/&gt;</code><code>&lt;br/&gt;</code>...<br /><br />Observa<br />como<br />se<br />hace. Y fíjate que podemos utilizar también texto en múltiples líneas en el código PHP, además de incluir tantos<strong><em>tags</em></strong> como deseemos.
</p>
<p> {$nombre} - Otra manera ".$nombre." </p>";

$otra_parrafada = '<h1 style=\'font-size:30px; font-family:Arial\'>Ejemplo </h1>
<p>Donde se prueba la generación de la páginas desde PHP. Para corregir el problema de los saltos de linea, podemos poner retornos al final de la línea<br>Hemos cambiado de línea.<br>Si queremos bajar a la línea siguiente $nombre,
    ---------- lo haremos con un &lt;br&gt; <br><strong><em>tag</em></strong> de tipo:
    <code>&lt;br/&gt;</code><code>&lt;br/&gt;</code>...<br /><br />Observa<br />como<br />se<br />hace. Y fíjate que podemos utilizar también texto en múltiples líneas en el código PHP, además de incluir tantos<strong><em>tags</em></strong> como deseemos.
</p>
<p> {$nombre} - Otra manera ".$nombre." </p>';

echo $parrafada;
print($parrafada);
echo $otra_parrafada;

$edad = 56;
$otra_edad = 56.78;
$vivo = "Barcelona";
$yo_soy_ese = "Me llamo $nombre y además tengo $edad años <br />";
const PI = 3.1415;
define("OTRACONST", 3.1415);

$trabaja = true;
if($trabaja){
    $trabaja = "Es CEO";
} else {
    $trabaja = "No trabaja actualmente";
}

$verdadero_o_no = true;
$falso_o_no = true;
$sin_definir = true;


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    #roja {
        background-color: red;
        width: 300px;
        height: 300px
    }

    pre {
        display: grid;
        background-color: #eee;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;

    }

    code {
        text-align: left;
    }
    </style>

</head>

<body>
    

    <p> <?php echo $yo_soy_ese; ?> </p>
    <p> <?= $yo_soy_ese ?> </p>
    <p> <?= $yo_soy_ese.".En verdad tengo $otra_edad años, Vivo en $vivo y PI es igual a ".PI ?> </p>
    <p><?= $trabaja ?>  </p>
    <p></p>

    <?php



?>
    <pre>
	        <code>
	        	<?=
                    "<br />" . gettype($edad) . "<br />" . gettype("$otra_edad") . "<br />" . gettype($vivo) . "<br />" . gettype($yo_soy_ese) . "<br />" .
                    gettype(OTRACONST) . "<br />" . gettype($sin_definir) . "<br />" . $sin_definir . "<br />" . gettype($verdadero_o_no) . "<br />" .
                    gettype($falso_o_no) . "<br /><hr>" . $falso_o_no . "<br /><hr>";
                print_r($parrafada);  
                echo "<br /><hr>";
                var_dump($parrafada);

                ?>

	        </code>
	</pre>
    <pre>
	        <code>
	        	<?php


                ?>

	        </code>
	</pre>



</body>

</html>