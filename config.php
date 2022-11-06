<?php
    //mysqli_report(MYSQLI_REPORT_OFF);
    $conn = @mysqli_connect('localhost', 'root', '', 'rest_api_test');
    if (!$conn) {
        /* Use your preferred error logging method here */
        error_log('Connection error: ' . mysqli_connect_errno());
    }
?>