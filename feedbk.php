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
$userInput = isset($_POST['userInput']) ? $_POST['userInput'] : '';

$userInput = mysqli_real_escape_string($conn, $userInput);


$sql = "INSERT INTO feedback (user_feedback, submission_date) VALUES ('$userInput', NOW())";

if ($conn->query($sql) === TRUE) {
   
    echo "Feedback submitted successfully!";
} else {
  
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

?>
