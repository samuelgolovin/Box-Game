
<body>

<?php
$q = $_GET['q'];

$con = mysqli_connect('localhost','username','password');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"myDB");
$sql="SELECT * FROM leaderboard";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Username</th>
<th>Time</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['username'] . "</td>";
  echo "<td>" ." - " .  $row['time'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
