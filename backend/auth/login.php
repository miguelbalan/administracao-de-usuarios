<?php
require "../database/connect.php";

$user = $_POST["user"];
$pwd = $_POST["pwd"];

try {
    $query = "SELECT id, permission FROM users WHERE name = :name AND pwd = :pwd";

    $stm = $conn->prepare($query);

    $stm->bindParam(":name", $user);
    $stm->bindParam(":pwd", $pwd);

    $stm->execute();
    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);

    if ($resp) {
        $_SESSION["user_id"] = $resp[0]["id"];
        $_SESSION["permission_lvl"] = intval($resp[0]["permission"]);
        header("Location: ../../mainpage.html");
    } else {
        header("Location: ../../index.html");
    }
} catch (PDOException $e) {
    echo $e->getMessage();
    header("Location: ../../index.html");
}
