<?php
require "../database/connect.php";

$_SESSION["user_id"] = -1;
$_SESSION["permission_lvl"] = -1;

header("Location: ../../index.html");
