<?php
    $name = $_POST['username'];
    $pass = $_POST['password'];

    echo "Username: " . $name . "<br/>";
    echo "Password: " . $pass . "<br/>";

    header("Location: http://www.google.com/"); /* Redirect browser */
?>