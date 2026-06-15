<?php
require "conect.php";

try{
    $query = "SELECT * FROM users WHERE permission <= :permission_lvl";

    $stm = $conn->prepare($query);
    $stm->bindParam(":permission_lvl", $_SESSION["permission_lvl"]);

    $stm->execute();

    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($resp);
} catch(PDOException $e){
    echo $e->getMessage();
}