<?php
require "conect.php";

$id = intval($_GET['id']);

try {
    $query = "DELETE FROM users WHERE id = :id AND permission <= :permission_lvl";
    $stm = $conn->prepare($query);

    $stm->bindParam(":id", $id);
    $stm->bindParam(":permission_lvl", $_SESSION["permission_lvl"]);

    $resp = $stm->execute();

    if ($resp == true) {
        return json_encode([
            "message" => "Delete Successful",
            "code" => 200
        ]);
    }

    return json_encode([
        "message" => "Delete Failed",
        "code" => 400
    ]);
} catch (PDOException $e) {
    echo $e->getMessage();
}
