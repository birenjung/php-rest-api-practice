<?php
    include("config.php");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Methods: POST");

    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    
    $sql = "UPDATE employee_info SET 
            name = $data['name'];
            age = $data['age'];
            city = $data['city'];
            WHERE id = {$id}
            ";
    if(mysqli_query($conn, $sql)==TRUE)
    {
        
    }
?>