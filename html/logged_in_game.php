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
        <button id="logout-button" class="login-sign-up-button">Logout</button>
        <div id="leaderboard-area"></div>
        <button id="leaderboard-button">All Time Leaderboard</button>
    </body>

</html>