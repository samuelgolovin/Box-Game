<?php
session_start();
$username = $_SESSION["username"];
if (!$_SESSION["loggedin"]) {
    header("location: sign_up.html");
    exit;
}

$conn = mysqli_connect('localhost','username','password');
if (!$conn) {
  die('Could not connect: ' . mysqli_error($conn));
}

mysqli_select_db($conn,"myDB");
$sql="SELECT username, userpassword FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>

<html>
    <head>
        <title>Box Game Profile</title>
        <link href="css/profile.css" rel="stylesheet">
    </head>

    <body>
        <h1>Profile</h1>

        <div class="container">
            <table>
            <tr><th>Username</th><th>Password</th></tr>
            <?php
            while($row = mysqli_fetch_array($result)) {
                echo "<tr>";
                echo "<td>" . $row['username'] . "</td>";
                echo "<td>" .  $row['userpassword'] . "</td>";
                echo "</tr>";
                }
    

            mysqli_close($conn);
            ?>
            <!-- <tr><td><a href="#">Change Username?</a></td><td><a href="php/change_username_password_handler.php">Change Password?</a></td></tr> -->
            </table>
        </div>

    </body>

</html>