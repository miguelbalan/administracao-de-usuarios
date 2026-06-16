<?php
require "../database/connect.php";

try {
    $query = "SELECT id, name FROM permission_reference";

    $stm = $conn->prepare($query);

    $stm->execute();

    $resp = $stm->fetchAll(PDO::FETCH_ASSOC);

    $limit = count($resp);
    for ($i = 0; $i < count($resp); $i += 1) {
        if ($resp[$i]["id"] > $_SESSION['permission_lvl']) {
            $limit = $i;
            break;
        }
    }

    echo json_encode(array_slice($resp, 0, $limit));
} catch (PDOException $e) {
    echo $e->getMessage();
}
