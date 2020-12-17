<?php

include('../../conexao/conn.php');

$sql = " DELETE FROM CONTATO WHERE ID = ".$_REQUEST['ID']."";;


if(mysqli_query($conecta, $sql)){
    $dados = array('return' => true);
}else{
    $dados = array('return' => false);
   
}
echo json_encode($dados);