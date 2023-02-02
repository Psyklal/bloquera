<?php
error_reporting(E_ALL);
ini_set("display_errors","1");
require_once("conexion.php");
date_default_timezone_set("America/Mexico_City");
session_start();



class Acciones{
    public function registroFlete($nombre_flete,$apellido_flete,$direccion_flete,$empresa_flete,$telefono_flete,$correo_electronico_flete){
        $modelo = new Conexion();
        $conexion = $modelo->conectar();

        $id_flete="";
        $fecha_registro_flete=date("d-m-Y H:m:s");

        // $sql_peticion="SELECT * From registro_flete";

        $sql="INSERT INTO registro_flete(id_flete,nombre_flete,apellido_flete,direccion_flete,empresa_flete,telefono_flete,correo_electronico_flete,fecha_registro_flete)
                                    values(:id_flete,:nombre_flete,:apellido_flete,:direccion_flete,:empresa_flete,:telefono_flete,:correo_electronico_flete,:fecha_registro_flete)";

        $ceros="0 - 0 - 0";
        $uno=1;
        $cero=0;
        $strVacio=" ";
        $numero = rand(1000,9999);

        


        $parametro=$conexion->prepare($sql);

        $parametro->bindParam(":id_flete",$id_flete);
        $parametro->bindParam(":nombre_flete",$nombre_flete);
        $parametro->bindParam(":apellido_flete",$apellido_flete);
        $parametro->bindParam(":direccion_flete",$direccion_flete);
        $parametro->bindParam(":empresa_flete",$empresa_flete);
        $parametro->bindParam(":telefono_flete",$telefono_flete);
        $parametro->bindParam(":correo_electronico_flete",$correo_electronico_flete);
        $parametro->bindParam(":fecha_registro_flete",$fecha_registro_flete);

        if ($parametro->execute()) {
            return "succes";
        } else {
            return $parametro->errorInfo();
        }
        
    }
}
?>