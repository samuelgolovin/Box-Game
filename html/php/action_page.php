<?php
var_dump($_POST);

$_post_username = $_POST["username"];
$_post_userpassword = $_POST["password"];
$_post_email = $_POST["email"];

echo $_post_username . "\n\n";
echo $_post_userpassword . "\n\n";
echo $_post_email . "\n\n";

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql1 = "SELECT username from users";

$result = mysqli_query($conn,$sql1);

while($row = mysqli_fetch_array($result)) {
    echo " This is a username: ";
    echo $row['username'];
}

// if ($sql1 != $_post_username) {
//     $sql = "INSERT INTO users (username, userpassword, email) VALUES ('$_post_username', '$_post_userpassword', '$_post_email')";

//     if ($conn->query($sql)) {
//     echo "New record created successfully";
//     } else {
//     echo "Error: " . $sql . "<br/>" . $conn->error;
//     }
// }

$conn->close();

?>