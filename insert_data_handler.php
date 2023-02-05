<?php
var_dump($_POST);

$_post_time = $_POST["time"];
$_post_user = $_POST["user"];

$time = floatval($_post_time);
$user = $_post_user;

echo $time . "\n\n";
echo $user . "\n\n";

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO leaderboard (username, time) VALUES ('$user', '$time')";

if ($conn->query($sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br/>" . $conn->error;
}

$conn->close();

?>