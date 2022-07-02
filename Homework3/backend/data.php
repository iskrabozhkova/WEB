<?php header("Access-Control-Allow-Origin: *");
require('data2.php');
    $data=json_decode(file_get_contents("php://input"), true);
    // if(isset($data["name"])){
    // echo $data["name"];
    // }
    $validation = new Valdator($data);

    $errors = $validation->validateForm();
    echo json_encode($errors, JSON_UNESCAPED_UNICODE);
?>