<?php
// var_dump($_POST);

$_post_username = $_POST["username"];
$_post_userpassword = $_POST["password"];
$_post_email = $_POST["email"];

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

$sql = "SELECT username from users WHERE username = '$_post_username'";

$result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) != 0) {
        header( "Location: ../username_taken_sign_up.html");
    }
    else {
        $sql = "INSERT INTO users (username, userpassword, email) VALUES ('$_post_username', '$_post_userpassword', '$_post_email')";

        if ($conn->query($sql)) {
            echo "New account created successfully";
            header("location: ../just_signed_up_login.html");
            exit;
        } else {
        echo "Error: " . $sql . "<br/>" . $conn->error;
        }
    }

$conn->close();

?>