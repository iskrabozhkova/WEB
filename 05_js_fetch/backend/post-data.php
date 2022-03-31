<?php
    $data = file_get_contents("php://input");
    $data_decoded = json_decode($data);
    $input_name = $data_decoded->name;
    if($input_name === 'Ivan'){
        echo json_encode(["message"=>"Ivan is succesfull written!"]);
    }else{
        echo "$input_name try again!";
    }
?>