<?php
    class Conexion{
        public function conectar(){
            $usuario="root";
            $password="";
            $host="localhost";
            $db="ejemplo_bloquera";

            $conexion = new PDO("mysql:host=$host;dbname=$db;charset=utf8",$usuario,$password);
            return $conexion;
        }
    }
?>