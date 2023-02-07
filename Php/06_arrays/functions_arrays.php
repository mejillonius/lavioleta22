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
