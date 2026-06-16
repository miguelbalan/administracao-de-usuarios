<?php
require "../../database/connect.php";

$user_id = $_GET['id'];
$name = $_GET['name'];
$pwd = $_GET['pwd'];
$position = $_GET['position'];
$permission = intval($_GET['permission']);

if ($_SESSION["permission_lvl"] == 1) {
    echo json_encode([
        "message" => "Permission Level too low",
        "code" => 400
    ]);
    return;
}

try {
    if ($permission > $_SESSION["permission_lvl"]) {
        echo json_encode([
            "message" => "Update Failed",
            "code" => 400
        ]);
    }

    $query = "UPDATE users SET name = :name, pwd = :pwd, position = :position, permission = :permission WHERE id = :id";
    $stm = $conn->prepare($query);

    $stm->bindParam(":name", $name);
    $stm->bindParam(":pwd", $pwd);
    $stm->bindParam(":position", $position);
    $stm->bindParam(":permission", $permission);

    $stm->bindParam(":id", $user_id);

    $stm->execute();

    $count = $stm->rowCount();

    if ($count > 0) {
        echo json_encode([
            "message" => "Update Successful",
            "code" => 200
        ]);
    } else {
        echo json_encode([
            "message" => "Update Failed",
            "code" => 400
        ]);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
