<?php

$hostName = "localhost:8080";
$user = "root";
$password = "";
$dbName   = "infinity_web";

$conexion = mysqli_connect($hostName, $user, $passwpord, $dbName);

// Check connection
if (mysqli_connect_errno( $conexion )) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error($conexion);
}

?>