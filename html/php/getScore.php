
<body>

<?php
$con = mysqli_connect('localhost','username','password');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"myDB");
$sql="SELECT username, min(time) as time FROM leaderboard GROUP BY username ORDER BY time ASC LIMIT 10";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Top</th>
<th>Username</th>
<th>Time</th>
</tr>";
$i = 1;
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $i . "</td>";
  echo "<td>" . $row['username'] . "</td>";
  echo "<td>" ." - " .  $row['time'] . "0" . "</td>";
  echo "</tr>";
  $i++;
}
echo "</table>";
mysqli_close($con);
?>
</body>
