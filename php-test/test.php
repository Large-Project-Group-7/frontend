<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $user = $_POST['username'];
    $pass = $_POST['password'];
    echo ("$user | $pass");
?>