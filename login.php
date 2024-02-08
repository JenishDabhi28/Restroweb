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

$contactNumber = isset($_POST['contactNumber']) ? $_POST['contactNumber'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if ($contactNumber && $password) {

    $sql = "SELECT * FROM users WHERE contactNumber = '$contactNumber'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if (password_verify($password, $row['password'])) {
            echo "success";
        } else {
            echo "Error: Incorrect password";
        }
    } else {
        echo "Error: User not found. Please register.";
    }
} else {
    echo "Error: Missing or invalid POST data";
}

$conn->close();
?>
