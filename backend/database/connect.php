<?php
session_start();

$host = "localhost";
$db = "administracao";
$user = "root";
$pwd = "";

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db, $user, $pwd);
} catch (PDOException $e) {
    echo $e->getMessage();
}
