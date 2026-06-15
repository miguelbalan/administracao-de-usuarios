<?php
require "conect.php";

try{
    $query = "SELECT id, name FROM permission_reference_table";

    $stm = $conn->prepare($query);

    $stm->execute();

    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($resp);
} catch(PDOException $e){
    echo $e->getMessage();
}