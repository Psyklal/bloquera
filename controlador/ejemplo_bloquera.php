<?php
error_reporting(E_ALL);
ini_set("display_errors","1");
require_once("../modelo/modelo.php");

$nombre_flete=$_POST["nombre_flete"];
$apellido_flete=$_POST["apellido_flete"];
$direccion_flete=$_POST["direccion_flete"];
$empresa_flete=$_POST["empresa_flete"];
$telefono_flete=$_POST["telefono_flete"];
$correo_electronico_flete=$_POST["correo_electronico_flete"];

$modelo=new Acciones();
$respuesta=$modelo->registroFlete($nombre_flete,$apellido_flete,$direccion_flete,$empresa_flete,$telefono_flete,$correo_electronico_flete);

print_r($respuesta);
?>