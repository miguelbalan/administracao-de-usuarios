<?php
require "conect.php";

$name = $_GET['name'];
$pwd = $_GET['pwd'];
$position = $_GET['position'];
$permission = intval($_GET['permission']);

if ($_SESSION["permission_lvl"] == 1){
    return json_encode([
        "message" => "Permission Level too low",
        "code" => 400
    ]);
}

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
