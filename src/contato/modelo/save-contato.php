<?php

include('../../conexao/conn.php');

$USUARIO_ID = 1;





$sql = "INSERT INTO CONTATO (NOME, CEP, LOGRADOURO, BAIRRO, CIDADE, NCASA, TELEFONE, CELULAR, EMAIL, USUARIO_ID) VALUES
('".$_REQUEST{'NOME'}."', ".$_REQUEST{'CEP'}.", '".$_REQUEST{'LOGRADOURO'}."', '".$_REQUEST{'BAIRRO'}."', 
'".$_REQUEST{'CIDADE'}."', ".$_REQUEST{'NCASA'}.", '".$_REQUEST{'TELEFONE'}."', '".$_REQUEST{'CELULAR'}."', 
'".$_REQUEST{'EMAIL'}."', ".$USUARIO_ID.")";


if(mysqli_query($conecta, $sql)){
    $dados = array('return' => true);
}else{
    $dados = array('return' => false);
}

echo json_encode($dados);