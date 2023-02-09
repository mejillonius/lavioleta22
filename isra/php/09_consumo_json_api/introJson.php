<?php
// Función para Dumpear Variables con un estilo Amigable
function pDump($variable){
      echo "<hr style='border: 2px solid black'>";
      echo "<pre style='color: white;background-color: grey;font-size:22px;padding:15px;'>";
      echo "<code>";
      var_dump($variable);
      echo "</code>";
      echo "</pre>";
      echo "<hr style='border: 2px solid black'>";
}

// json_encode() -> Método para codificar en JSON
$prueba1 = json_encode(["Gato", "Perro", "Caballo"]);
pDump($prueba1);
echo $prueba1;

$prueba2 = json_encode([0 => "Gato", 1 => "Perro", 2 => "Caballo"]);
pDump($prueba2);
echo $prueba2;

$prueba3 = json_encode(["Animal1" => "Gato", "Animal2" => "Perro", "Animal3" => "Caballo"]);
pDump($prueba3);
echo $prueba3;

$prueba4 = json_encode(["Gato" => true, "Perro" => 6, "Caballo" => null,"Otro" => ["Gato", "Perro", "Caballo"]]);
pDump($prueba4);
echo $prueba4;

class User{

      public $nombre = "Oscar";
      public $apellidos = "Perolillos";
      public $direccion = "Mi calle";
      public $poblacion = "Ullastrell";
}

$user = new User();
$printUser = json_encode($user);
pDump($printUser);
echo $printUser;

$str1 = '{"0":"Isidoro","1":"Pepe"}';
$result = json_decode($str1);
pDump($result);
//echo $result;

$str2 = '[{"0":"Isidoro","1":"Pepe","2":"otroNombre"}]';
$result2 = json_decode($str2);
pDump($result2);
//echo $result2;

$temps = '{
"lat": 52.2297,
"lon": 21.0122,
"timezone": "Europe/Warsaw",
"timezone_offset": 3600,
"data": [
  {
    "dt": 1645888976,
    "sunrise": 1645853361,
    "sunset": 1645891727,
    "temp": 279.13,
    "feels_like": 276.44,
    "pressure": 1029,
    "humidity": 64,
    "dew_point": 272.88,
    "uvi": 0.06,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 3.6,
    "wind_deg": 340,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ]
  }
]
}';

$temps_decoded = json_decode($temps);
pDump($temps_decoded);

?>