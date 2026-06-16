<?php
require "../../database/connect.php";

$id = intval($_GET['id']);

if ($_SESSION["permission_lvl"] == 1) {
    echo json_encode([
        "message" => "Permission Level too low",
        "code" => 400
    ]);
    return;
}

try {
    $query = "DELETE FROM users WHERE id = :id AND permission <= :permission_lvl";
    $stm = $conn->prepare($query);

    $stm->bindParam(":id", $id);
    $stm->bindParam(":permission_lvl", $_SESSION["permission_lvl"]);

    $resp = $stm->execute();

    if ($resp == true) {
        echo json_encode([
            "message" => "Delete Successful",
            "code" => 200
        ]);
    } else {
        echo json_encode([
            "message" => "Delete Failed",
            "code" => 400
        ]);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
