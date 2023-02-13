<?php
session_start();
if (!$_SESSION["loggedin"]) {
    header("location: sign_up.html");
    exit;
}

$conn = mysqli_connect('localhost','username','password');
if (!$conn) {
  die('Could not connect: ' . mysqli_error($conn));
}

mysqli_select_db($conn,"myDB");
$sql="SELECT * FROM leaderboard ORDER BY time ASC LIMIT 1000";
$result = mysqli_query($conn,$sql);

?>

<!DOCTYPE html>

<html>
    <head>
        <title>Box Game All Time Leaderboard</title>
        <link href="css/leaderboard.css" rel="stylesheet">
    </head>

    <body>
        <h1>Leaderboard</h1>

        <div class="container">
            <table>
            <tr><th>Top</th><th>Username</th><th>Time</th></tr>
            <?php
            $i = 1;
            while($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $i . "</td>";
            echo "<td>" . $row['username'] . "</td>";
            echo "<td>" .  $row['time'] . "0" . "</td>";
            echo "</tr>";
            $i++;
            }

            mysqli_close($conn);
            ?>
            </table>
        </div>

    </body>

</html>