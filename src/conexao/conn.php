<?php

$host = 'localhost';
$bd = 'agenda_pw2';
$usuario = 'root';
$senha = '';


//conecao com o banco de dados

if($conecta = mysqli_connect($host, $usuario, $senha, $bd)){
//echo 'Conexão com o banco de dados, realizado com sucesso!';
}
else{
    echo 'ERRO:'.mysqli_connect_error();

}