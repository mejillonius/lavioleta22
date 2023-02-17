<?php
$automobil1 = ["marca" => "Toyota", "model" => "Corolla"];
$automobil2 = ["marca" => "Hyundai", "model" => "AccentVision"];

function mostrar($automobil)
{
      echo "<p>Hola! sòc un $automobil[marca], model: $automobil[model]</p>";
}

mostrar($automobil1);
mostrar($automobil2);

//POO
class Automobil
{
      public $marca;
      public $model;

      public function setMarca($marca)
      {
            $this->marca = $marca;
      }
      public function setModel($model)
      {
            $this->model = $model;
      }
      public function getDatos()
      {
            echo "<p>Hola! sòc un $this->marca, model: $this->model.</p>";
      }
};
