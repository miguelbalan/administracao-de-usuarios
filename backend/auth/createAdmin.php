<?php
require "../database/connect.php";

$name = 'admin';
$pwd = password_hash('12345', null);
$position = 'Administrador de Dashboard';
$permission = intval(4);

if (4 == 1) {
    echo json_encode([
        "message" => "Permission Level too low",
        "code" => 400
    ]);
    return;
}

try {
    if ($permission > 4) {
        echo json_encode([
            "message" => "Create Failed",
            "code" => 400
        ]);
    }

    $query = "INSERT INTO users(name, pwd, position, permission) VALUES(:name, :pwd, :position, :permission)";
    $stm = $conn->prepare($query);

    $stm->bindParam(":name", $name);
    $stm->bindParam(":pwd", $pwd);
    $stm->bindParam(":position", $position);
    $stm->bindParam(":permission", $permission);

    $resp = $stm->execute();

    if ($resp == true) {
        echo json_encode([
            "message" => "Create Successful",
            "code" => 200
        ]);
    } else {
        echo json_encode([
            "message" => "Create Failed",
            "code" => 400
        ]);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
