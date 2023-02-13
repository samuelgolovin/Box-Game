<?php
session_start(); 

// var_dump($_POST);

$_post_username = $_POST["username"];
$_post_userpassword = $_POST["password"];

// echo $_post_username . "\n\n";
// echo $_post_userpassword . "\n\n";
// echo $_post_email . "\n\n";

$servername = "localhost";   
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username from users WHERE username = '$_post_username' AND userpassword = '$_post_userpassword'";

$result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 0) {
        header("location: ../wrong_username_or_password_login.html");
    }
    else {
        echo "Login was Successful!";
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $_post_username;
        header("location: ../logged_in_game.php");
        exit;
    }

$conn->close();

?>
