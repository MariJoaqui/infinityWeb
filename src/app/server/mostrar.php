<?php

require_once('conexion.php');

$q = "SELECT nombre, apellido, telefono, correo FROM usuarios"; 
$c = mysqli_query($conexion, $q) or die($mysqli_error($conexion));
   
if ($resp = mysqli_fetch_array($c)) {
  $vec[]=$resp;
}
  
$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');

?>