<?php
function pDump($variable)
{
      echo "<pre>";
      var_dump($variable);
      echo "</pre>";
}

$cantantes = ['Josele Santiago', 'Justin Sullivan', 'Chrissie Hynde', 'Yomismo'];
$numeros = [1, 2, 5, 8, 3, 4];
pDump($numeros);

// Ordenar

sort($numeros);
pDump($numeros);

pDump($cantantes);

//Añadir elementos array
$cantantes[] = "Natos";                   //Añade el valor al final del array
pDump($cantantes);
array_push($cantantes, "Waor");           //Más lenta que la primera
pDump($cantantes);
$cantantes[] = "otro";
pDump($cantantes);

//Eliminar elementos Array
array_pop($cantantes);                     //Elimina el último elemento
pDump($cantantes);

unset($cantantes[2]);                     //Borrará el valor del índice 2
pDump($cantantes);

//Aleatorio
$indice = array_rand($cantantes);         //Hace un random entre todas las posiciones y te devuelve un índice aleatorio
echo $cantantes[$indice];

//Invertir orden
pDump(array_reverse($numeros));

//Buscar dentro de un array
$resultado = array_search('Natos', $cantantes);             //Busca el valor deseado y te devuelve el índice correspondiente a ese valor
pDump($resultado);

//Contar número de elementos
echo sizeof($cantantes);
echo "<br>";

echo count($cantantes);
echo "<br>";

//Comprobar un key. 
$animales = ["perro" => "Bruce", "gato" => "Schmeichel"];
if(array_key_exists('perro',$animales)){
      echo "Tengo un perro llamado $animales[perro]";
}

echo "<br>";
$animales = ["perro", "gato", "oso"];

//Muestra tengo un perro
if(in_array("perro", $animales)){
      pDump($animales);
      echo "Tengo un $animales[0] de mascota";
}

echo "<br><hr/>";

//Codificar como JSON {"nom":"value"} -> Todos los lenguajes tienen un método para convertir en JSON (codificar y decodificar)
$prueba1 = json_encode($animales);

echo "<br><hr/>";
pDump($prueba1);
echo $prueba1;
echo "<br><hr/>";
$prueba2 = json_decode($prueba1);
pDump($prueba2);
echo "<br><hr/>";

//Crear arrays asociativos a partir de 2 arrays. Primer array serán los índices y el segundo los valores
$keys = ['cielo', 'tierra', 'mar'];
$values = ['azul', 'verde', 'turquesa'];
$new_array = array_combine($keys, $values);
pDump($new_array);
echo "<br>";

//Recorrer un array aplicando una función callback al array
/*array_map("param1:la función o acción que ejecutará","param2:array a recorrer, Opcional rango del array a recorrer")*/
/*range(1,10);*/


function alCubo($numero)
{
      return $numero * $numero * $numero;
}

$a = [1, 2, 3, 4, 5];
$result = array_map('alCubo', $a);        //Ejecuta la función alCubo en cada posición del array a[]. (1*1*1, 2*2*2, 3*3*3,...). Se puede poner rango (donde empieza y acaba)
pDump($result);
echo "<br>";

$result2 = array_map(function($n){return($n*$n*$n);},$a);         //Forma más abreviada, una expresión. 
pDump($result2);

echo "<br>";

$result3 = array_map(fn($n) => $n * $n * $n, range($a[1], $a[3]));            //Escrito en modo arrow function, lo más rápido.
pDump($result3);

echo "<br>";

$array = ['Apple', 'BANANA', 'Mango', 'orange', 'GRAPES'];

$results = array_map(fn($element) => strtolower($element), $array);           //Paso todos los elementos a minúsculas con strtolower
pDump($results);

echo "<br>";
echo "<br>";

//Si en vez de poner una función ponemos null, lo que hará será crear con los 2 arrays un nuevo array que tendrá tantas posiciones como el más largo de los 2 y que cada posición es un nuevo array
$employeeNames = ['john', 'mark', 'lisa'];
$employeeEmails = ['john@example.com', 'mark@example.com', 'lisa@example.com', 'uuu@ooo.com'];
$res = array_map(null, $employeeNames, $employeeEmails);          
pDump($res);

echo "<br>";

$string_res = json_encode($res);
echo "<br>";
pDump($string_res);
echo "<br>";
echo $string_res;

//Codificar como JSON {"nom":"value"} 
$agenda = [
      ['nombre' => 'Pepe', 'email' => 'email@email.com',],
      ['nombre' => 'Pepon', 'email' => 'otro@email.com',],
      ['nombre' => 'Jose', 'email' => 'masl@email.com',],
      'nombre' => 'Antonio',
];

$agenda2 = json_encode($agenda);
echo "<br>";
pDump($agenda2);
echo "<br>";
echo $agenda2;



