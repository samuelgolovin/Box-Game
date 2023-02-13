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

    var timeToSend;
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
            if (seconds <= 999) {
                if (milliseconds < 100) {
                    timeToSend = seconds.toString() + ".0" + milliseconds.toString();
                } else {
                    timeToSend = seconds.toString() + "." + milliseconds.toString();
                }
                //submitScore(timeToSend, "samuel");
                timeToSend = null;
            }

            stopTimer();
            
            boxesLeft = totalBoxCount;
            gameStarted = false;
            newGameMenu();
        }
    }

    document.getElementById("login-sign-up-button").addEventListener("click", function() {
        location.href = "html/sign_up.html";
    });

    function startTimer() {
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    }

    function stopTimer() {
        clearInterval(int);
        console.log(seconds + " " + milliseconds);
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

    function getScoresToLeaderboard() {
	    var xmlhttp = new XMLHttpRequest();
    	xmlhttp.onreadystatechange = function() {
     	    if (this.readyState == 4 && this.status == 200) {
        	document.getElementById("leaderboard-area").innerHTML = this.responseText;
            }
       	};

        xmlhttp.open("GET", "html/php/getScore.php");
        xmlhttp.send();
    }

    function submitScore(time, user) {
        const XHR = new XMLHttpRequest();
        const FD = new FormData();
      
        // Push our data into our FormData object
        FD.set("time", time);
        FD.set("user", user);

        // Define what happens on successful data submission
        XHR.addEventListener('load', (event) => {
          //alert('Yeah! Data sent and response loaded.');
          console.log(XHR.responseText);
        });
      
        // Define what happens in case of an error
        XHR.addEventListener('error', (event) => {
          alert('Oops! Something went wrong.');
        });
      
        // Set up our request
        XHR.open("POST", "insert_data_handler.php", true);
      
        // Send our FormData object; HTTP headers are set automatically
        XHR.send(FD);

        getScoresToLeaderboard();
    }

    document.getElementById("reset-game").addEventListener("click", function() {
        stopTimer();
        timerRef.innerHTML = "Time: 0.000";
        boxesLeft = totalBoxCount;
        newGameMenu();
    });

    newGameMenu();
    getScoresToLeaderboard();

};