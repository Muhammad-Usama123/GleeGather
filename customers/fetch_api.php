<?php
include("../admin/connection/connection.inc.php");
include("function.php");



header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: Get');
header('Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Request-With');

$requestMethod = $_SERVER["REQUEST_METHOD"];



if ($requestMethod == "GET") {

    $customerList = getCustomerList();

    echo $customerList;

} else {
    $data = [
        'status' => 405,
        'message' => $requestMethod . 'Method Not Allowed',

    ];

    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}


?>