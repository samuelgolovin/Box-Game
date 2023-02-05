<?php
var_dump($_POST);

$_post_data = "";

for ($i = 0; $i < count($_POST); $i++) {
  $_post_data = $_post_data . $_POST[$i];
}

$time = floatval($_post_data);

echo $time . "\n\n";

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO leaderboard (time) VALUES ('$time')";

if ($conn->query($sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br/>" . $conn->error;
}

$conn->close();

?>