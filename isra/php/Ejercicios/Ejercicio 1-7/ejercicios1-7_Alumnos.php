<?php
require "soluciones.php";
?>
<!doctype html>
<html lang="es">

<head>
      <title>Ejercicios Php básicos</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- Bootstrap CSS v5.0.2 -->
      <link rel="stylesheet" href="css/miestilo.css">
      
      <style>
            code {
                  display: grid;
                  border: 1px solid black;
                  padding: 10px;
                  margin: 0 10px;
                  background-color: #ccc;
                  color: blue;
            }
      </style>

</head>

<body>
      <div class="container p-5">
            <h1><strong>Ejercicios básicos de Php</strong></h1>



            <p class="pt-3 mx-3"><strong>Ejercicio 1.</strong> <br />Crear dos variables "país" y "continente" y mostrar
                  su valor por pantalla(imprimir)
                  mostrar el tipo de dato contienen con alguna función que nos permita obtenerlo.</p>
            <div>
                  <code>
                  function pDump($variable){ <br />
                        echo "&lt;hr style='border: 2px solid black'>"; <br />
                        echo "&lt;pre style='color: white;background-color: grey;font-size:22px;padding:15px;'>"; <br />
                        var_dump($variable); <br />
                        echo "&lt;/pre>"; <br />
                        echo "&lt;hr style='border: 2px solid black'>"; <br />
                  } <br /> <br />

                        function ejercicio1(){ <br />
                              $pais = "Portugal"; <br />
                              $continente = "Europa"; <br />
                              pDump($pais); <br />
                              pDump($continente); <br />
                        } <br />
                        ejercicio1();

                        <hr />
                        <?php
                        ejercicio1();
                        ?>
                  </code>
            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 2.</strong> <br />
                  Ejercicio 2. Escribir un script en PHP que nos muestre por pantalla todos los numeros pares que hay
                  del 1 al 50. (bucle...)</p>
            <div>
                  <code>
                  function ejercicio2(){ <br />
                        for($x = 1; $x <= 50; $x++){ <br />
                              if($x % 2 == 0) <br />
                                    echo " $x "; <br />
                        } <br />
                  } <br />
                  ejercicio2();
                        <hr />
                        <?php
                        ejercicio2();
                        ?>
                  </code>
            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 3.</strong> <br />
                  Ejercicio 3. Escribir un programa que imprima por pantalla los cuadrados
                  (un número multiplicado por sí mismo) de los 10 primeros números naturales.
                  PD: Utilizar bucle while y el bulce for
            </p>
            <div>
                  <code>
                  function ejercicio3(){ <br />
                        echo "&lt;h3> Con el Bucle FOR &lt;/h3>"; <br />
                        for($x = 1; $x <= 10; $x++){ <br />
                              $result = $x * $x; <br />
                              echo "&lt;p>El cuadrado de $x es: $result &lt;/p>"; <br />
                        } <br />
                        echo "&lt;h3> Con el Bucle WHILE &lt;/h3>"; <br />
                        $y = 1; <br />
                        while($y <= 10){ <br />
                              $result = $y * $y; <br />
                              echo "&lt;p>El cuadrado de $y es: $result &lt;/p>"; <br />
                              $y++; <br />
                        } <br />
                  }<br />

                        <hr />
                        <?php
                        ejercicio3();
                        ?>
                  </code>
            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 4.</strong> <br />
                  Recoger dos numeros por url(Parametros GET) y hacer todas las operaciones basicas de una
                  calculadora(suma, resta, multiplicación y división) de esos dos números, mostrando los números
                  recibidos y el resultado de cada operación en una línea diferente. Si no recibimos ningún parámetro, o
                  contienen errores, usaremos una cabecera que permita no salir del formulario y volver a introducir los
                  datos.</p>
            <div id="ejercicio4">
                  <code>

                  <hr />
                  <div class="row" id="content_miformulario">
                        <form id="formularioejer4" name="miformulario" class="row g-3 needs-validation miformulario" novalidate action="#" method="get">
                        <div class="col-12">
                              <label for="numero1" class="form-label">Número 1</label>
                              <input type="number" step="1" class="form-control" id="numero1" name="numero1" min="1" max="100" pattern="^\d+(,\d{1,2})?$" required>
                              <div class="valid-feedback">
                                    Número Correcto
                              </div>
                              <div class="invalid-feedback">
                                    Introduce bien el Número
                              </div>
                        </div>
                        <div class="col-12">
                              <label for="numero2" class="form-label">Número 2</label>
                              <input type="number" step="1" class="form-control" id="numero2" name="numero2" min="1" max="100" pattern="^\d+(,\d{1,2})?$" required>
                              <div class="valid-feedback">
                                    Número Correcto
                              </div>
                              <div class="invalid-feedback">
                                    Introduce bien el Número
                              </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                              <input type="hidden" name="ejercicio4" value="ejercicio4">
                              <button class="btn btn-primary" type="submit">Enviar Formulario</button>
                        </div>

                        </form>

                  </div>

                  </code>
                  
            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 5.</strong> <br />
                  Hacer un programa que muestre todos los números entre dos números que nos lleguen por URL($_GET). El
                  primer número ha de ser menor que el segundo, si no es así informaremos al usuario y el programa
                  volverá al formulario para poder introducir los números. Una vez finalizado el script, este nos ha de
                  permitir volver l formulario para jugar de nuevo.</p>
            <div id="ejercicio5">
                  <code>

            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 6.</strong> <br />
                  Mostrar una "table" de HTML con las tablas de multiplicar del 1 al 10.</p>
            <div>
                  <code>

                        <hr />
                        <?php

                        ?>

                  </code>
            </div>
            <p class="pt-4 mx-3"><strong>Ejercicio 7.</strong> <br />
                  Hacer un programa que muestre todos los números (indicando en cada número si es par o impar) entre dos
                  números que nos lleguen por URL($_GET) de un formulario. El primer número ha de ser menor que el
                  segundo, si no es así informaremos al usuario y permitiremos con un input de tipo button que vuelva al
                  formulario volveremos a introducir los números. Una vez finalizado el script, este nos ha de permitir
                  volver al formulario para jugar de nuevo.
            </p>
            <div class="ejercicio7">
                  <code>

                  </code>
            </div>

            <script src="js/boostrap.bundle.js"></script>
            <script src="js/validateform.js"></script>
</body>

</html>