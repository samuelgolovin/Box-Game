<?php
session_start();

$_SESSION["loggedin"] = false;
$_SESSION["username"] = null;

header("location: ../../index.html");
exit;
?>