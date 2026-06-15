<?php
require "conect.php";

try{
    $query = "SELECT id, name FROM permission_reference_table";

    $stm = $conn->prepare($query);

    $stm->execute();

    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);
    
    $limit = 0;
    for ($i = 0; $i < count($resp); $i += 1){
        if ($resp[$i]["id"] > $_SESSION['permission_lvl']){
            $limit = $i;
            break;
        }
    }
    
    echo json_encode(array_slice($resp, 0, $limit));
} catch(PDOException $e){
    echo $e->getMessage();
}