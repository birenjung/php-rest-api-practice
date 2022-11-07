<?php
    include("config.php");
    header("Content-Type: application/json");
    header("Allow-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");

    $data = json_decode(file_get_contents("php://input"), true);
    
    $id = $data['id'];

    $sql = "SELECT * FROM employee_info WHERE id={$id}";
    $res = mysqli_query($conn, $sql) or die("Mysql Query Failed");

    if(mysqli_num_rows($res)==1){
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $output = json_encode($output);
        echo $output;
    }
    else
    {
        echo json_encode(array('message' => 'No record found', 'status' => 'false'));
    }
?>