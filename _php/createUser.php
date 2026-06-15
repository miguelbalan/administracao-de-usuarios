<?php
require "conect.php";

$name = $_POST['name'];
$pwd = $_POST['pwd'];
$position = $_POST['position'];
$permission = intval($_POST['permission-options']);

try {
    if ($permission > $_SESSION["permission_lvl"]) {
        return json_encode([
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
        return json_encode([
            "message" => "Create Successful",
            "code" => 200
        ]);
    }

    return json_encode([
        "message" => "Create Failed",
        "code" => 400
    ]);
} catch (PDOException $e) {
    echo $e->getMessage();
}
