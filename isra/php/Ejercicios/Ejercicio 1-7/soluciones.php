<?php

// Función para Dumpear Variables con un estilo Amigable
function pDump($variable){
      echo "<hr style='border: 2px solid black'>";
      echo "<pre style='color: white;background-color: grey;font-size:22px;padding:15px;'>";
      var_dump($variable);
      echo "</pre>";
      echo "<hr style='border: 2px solid black'>";
}

/* Ejercicio 1
Crear dos variables "país" y "continente" y mostrar su valor por pantalla(imprimir) mostrar el tipo de dato contienen con alguna función que nos permita obtenerlo.
*/
function ejercicio1(){
      $pais = "Portugal";
      $continente = "Europa";
      pDump($pais);
      pDump($continente);
}

/* Ejercicio 2
Escribir un script en PHP que nos muestre por pantalla todos los numeros pares que hay del 1 al 50. (bucle...)
*/
function ejercicio2(){
      for($x = 1; $x <= 50; $x++){
            if($x % 2 == 0)
                  echo " $x ";
      }
}

/* Ejercicio 3
Escribir un programa que imprima por pantalla los cuadrados (un número multiplicado por sí mismo) de los 10 primeros números naturales.
PD: Utilizar bucle while y el bulce for
*/
function ejercicio3(){
      echo "<h3> Con el Bucle FOR </h3>";
      for($x = 1; $x <= 10; $x++){
            $result = $x * $x;
            echo "<p>El cuadrado de $x es: $result </p>";
      }
      echo "<h3> Con el Bucle WHILE </h3>";
      $y = 1;
      while($y <= 10){
            $result = $y * $y;
            echo "<p>El cuadrado de $y es: $result </p>";
            $y++;
      }
}

/* Ejercicio 4
Recoger dos numeros por url(Parametros GET) y hacer todas las operaciones basicas de una calculadora(suma, resta, multiplicación y división) de esos dos números, mostrando los números recibidos y el resultado de cada operación en una línea diferente. Si no recibimos ningún parámetro, o
contienen errores, usaremos una cabecera que permita no salir del formulario y volver a introducir los datos
*/

?>