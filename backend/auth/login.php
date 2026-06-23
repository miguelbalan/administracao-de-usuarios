<?php
require "../database/connect.php";

$user = $_POST["user"];
$pwd = $_POST["pwd"];

try {
    $query = "SELECT id, permission, pwd FROM users WHERE name = :name";

    $stm = $conn->prepare($query);

    $stm->bindParam(":name", $user);

    $stm->execute();
    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);

    if (empty($resp)) {
        header("Location: ../../index.html");
        exit();
    }
    
    if (password_verify($pwd, $resp[0]['pwd'])){
        $_SESSION["user_id"] = $resp[0]["id"];
        $_SESSION["permission_lvl"] = intval($resp[0]["permission"]);
        header("Location: ../../mainpage.html");
        exit();
    } else {
        header("Location: ../../index.html");
        exit();
    }
} catch (PDOException $e) {
    echo $e->getMessage();
    header("Location: ../../index.html");
    exit();
}
