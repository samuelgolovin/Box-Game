<?php
session_start();
if (!$_SESSION["loggedin"]) {
    header("location: sign_up.html");
    exit;
}
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Box Game</title>
        <script src="js/logged-in-game.js" type="text/javascript"></script>
        <link href="css/game.css" rel="stylesheet">
    </head>

    <body>
        <h1>Box Game</h1>

        <div class="game-container">
            
            <div class="game-area">
                <div class="top-container">
                    <div id="timer-text" class="timer-text">Time: 0.000</div>
                    <button class="reset-game" id="reset-game">Reset Game</button>
                </div>
                <div id="game-area-canvas"></div>
            </div> 
            
        </div>

        <div class="dropdown">
            <button id="dropdown-button" class="dropbtn">More &#x25BC;</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="profile.php" target="_blank">Profile</a>
                <a href="leaderboard.php" target="_blank">All Time Leaderboard</a>
                <a href="profile.php" target="_blank">About Creator</a>
                <a href="php/logout_handler.php">Logout</a>
            </div>
        </div>

        <div id="leaderboard-area"></div>
    </body>

</html>