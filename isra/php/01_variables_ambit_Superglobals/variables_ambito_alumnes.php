<?php

/*
Variables locales: Son las que se definen dentro de una función y no pueden ser usadas fuera de la función, solo estan disponibles dentro. A no ser que hagamos un return y como resultado devuelto por la función.

Variables globales: Son las que se declaran fuera de una función y estan disponibles fuera de las funciones de manera normal y dentro usando la palabra global o la palabra superglobal $GLOBALS['nombrevariable'].
 */
$foo = "Contenido de ejemplo"; 
$fo2 ="Segunda variable Global";
function test()
{
    global $fo2;
    $foo = "Fo como variable local. Foo como variable global ". $GLOBALS["foo"]."<br />";
    echo "** Ambito Local: $foo. ** Ambito Global: $fo2 ";
   /*  $fo2; */


}

test();

 // Variables globales
$frase = "Ni tan genio, ni tan mediocre";
$frasedos = "NNNNNNNo";
echo $frase, " - ", $frasedos;

function pruebaAmbito()
{
    global $frase;
    global $frasedos;
    echo $frase, " - ", $frasedos;
    //variable local

    global $year;
    $year = 2023;
    echo $year;
}
echo "<br/>";
pruebaAmbito();
echo "<br/><hr>";
echo $year;


function pAmbitoParametros($frase,$frasedos)
{
    echo "<h1>" . $frase . " - " . $frasedos . "</h1>";

}
echo "<br/>";
pAmbitoParametros($frase,$frasedos);
echo "<br/>";

/*
$nombre = "Perico Perolillos";
$edad = 19;
$mayoria_edad = 18;

//estructura de control, no función
if ($edad >= $mayoria_edad) {
    echo "<h2>$nombre es mayor de edad</h2>";
} else {
    echo "<h2>$nombre es menor de edad</h2>";
}

echo "<br>"; */