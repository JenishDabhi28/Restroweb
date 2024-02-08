<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = isset($_POST['name']) ? $_POST['name'] : '';
$contactNumber = isset($_POST['contactNumber']) ? $_POST['contactNumber'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if ($name && $contactNumber && $password) {

    $checkQuery = "SELECT * FROM users WHERE contactNumber = '$contactNumber'";
    $checkResult = mysqli_query($conn, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        echo "Error: Contact number already in use. Please use a new number.";
    } else {
       
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (name, contactNumber, password) VALUES ('$name', '$contactNumber', '$hashedPassword')";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            echo "success";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
} else {
    echo "Error: Missing or invalid POST data";
}

$conn->close();
?>
