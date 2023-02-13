<?php
session_start();
// var_dump($_SESSION["username"]);
// var_dump($_POST);

$_post_time = floatval($_POST["time"]);
$_post_user = $_SESSION["username"];

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO leaderboard (username, time) VALUES ('$_post_user', '$_post_time')";

if ($conn->query($sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br/>" . $conn->error;
}

$conn->close();

?>