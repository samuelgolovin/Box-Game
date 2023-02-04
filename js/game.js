//This is the javascript that controls the game
//Thanks for checking out my code!
//Samuel Golovin

window.onload = function() {
    var gameCanvas = document.getElementById("game-area-canvas");

    var canvasHeight = 640;
    var canvasWidth = 480;
    var newGameButtonWidth = 175;
    var newGameButtonHeight = 75;
    var boxSize = 75;
    var totalBoxCount = 3;
    var boxesLeft = totalBoxCount;
    var gameStarted = false;

    var [milliseconds,seconds] = [0,0];
    var timerRef = document.getElementById("timer-text");
    var int = null; 
    
    function newGameMenu() {
        
        gameCanvas.innerHTML = ""; 

        let instructions = document.createElement("div");

        instructions.className = "instructions";
        instructions.innerHTML = "When Start Game is press, boxes will spawn. The timer will start as soon you click the first box!";
        instructions.style.width = 420 + "px";
        instructions.style.top = 120 + "px";
        instructions.style.left = 110 + "px";
        gameCanvas.appendChild(instructions);

        let newGameButton = document.createElement("button");
        newGameButton.className = "new-game-button";
        newGameButton.id = "new-game-button";
        newGameButton.innerHTML = "Start Game"
        newGameButton.style.height = newGameButtonHeight + "px";
        newGameButton.style.width = newGameButtonWidth + "px";
        newGameButton.style.top = (300) + "px";
        newGameButton.style.left = (canvasWidth * 0.5) + "px";
        newGameButton.style.top = (canvasHeight * 0.45) + "px";
        newGameButton.addEventListener("click", startNewGame);

        gameCanvas.appendChild(newGameButton);
    }

    function startNewGame() {
     gameStarted = true;
        timerRef.innerHTML = "Time: 0.000";

        gameCanvas.innerHTML = "";

        for(var i = 0; i < totalBoxCount; i++) {
            let box = document.createElement("div");
            box.className = "box";

            box.style.left = parseInt(Math.random() * (canvasHeight - boxSize)) + "px";
            box.style.top = parseInt(Math.random() * (canvasWidth - boxSize)) + "px";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

            box.addEventListener("click", boxClicked);

            gameCanvas.appendChild(box);
        }
    }

    function boxClicked() {
        startTimer();
        
        this.parentNode.removeChild(this);
        boxesLeft--;

        if (boxesLeft <= 0) {
            stopTimer();
            
            boxesLeft = totalBoxCount;
            gameStarted = false;
            newGameMenu();
        }
    }

    function startTimer() {
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    }

    function stopTimer() {
        clearInterval(int);
        [milliseconds,seconds] = [0,0];
    }

    function displayTimer(){
        milliseconds += 10;
        if(milliseconds == 1000){
            milliseconds = 0;
            seconds++;
        }

        let s = seconds < 10 ? "" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    
        timerRef.innerHTML = "Time: " + s + "." + ms;
    }

    function submitTimeToLeaderboard() {
	var xmlhttp = new XMLHttpRequest();
    	xmlhttp.onreadystatechange = function() {
     	    if (this.readyState == 4 && this.status == 200) {
        	document.getElementById("leaderboard-area").innerHTML = this.responseText;
            }
       	};

        xmlhttp.open("GET", "getScore.php?q=", true);
        xmlhttp.send();
    }

    document.getElementById("reset-game").addEventListener("click", function() {
        stopTimer();
        timerRef.innerHTML = "Time: 0.000";
        boxesLeft = totalBoxCount;
        newGameMenu();

    });

    newGameMenu();
    submitTimeToLeaderboard();

};