<?php
    include('config.php');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    $sql = "SELECT * FROM employee_info";
    $res = mysqli_query($conn, $sql) or die("Mysql Query Failed");

    if(mysqli_num_rows($res)>0){
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $output = json_encode($output);
        echo $output;
    }
    else
    {
        echo json_encode(array('message' => 'No record found', 'status' => 'false'));
    }
?>