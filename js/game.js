//This is the javascript that controls the game
//Thanks for checking out my code!
//Samuel Golovin

var canvasHeight = 640;
var canvasWidth = 480;
var newGameButtonWidth = 175;
var newGameButtonHeight = 75;
var boxSize = 75;
var boxCount = 2;
var firstClick = true;
var timer = null; 




window.onload = function() {
    var gameCanvas = document.getElementById("game-area-canvas");
    
    function newGameMenu() {
        
        gameCanvas.innerHTML = ""; 

        let instructions = document.createElement("div");

        instructions.className = "instructions";
        instructions.innerHTML = "When Start Game is press, the boxes will spawn. A timer will start as soon you click the first box!";
        instructions.style.width = 420 + "px";
        instructions.style.top = 150 + "px";
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
        newGameButton.style.top = (canvasHeight * 0.5) + "px";
        newGameButton.addEventListener("click", startNewGame);

        gameCanvas.appendChild(newGameButton);
    }

    function startNewGame() {
        gameCanvas.innerHTML = "";

        let timerText = document.createElement("div");
        timerText.className = "timer-text";
        timerText.id = "timer-text";
        gameCanvas.appendChild(timerText);
        timerText.innerHTML = "Time: 0.000 s";

        for(var i = 0; i < boxCount; i++) {
            let box = document.createElement("div");
            box.className = "box";

            box.style.left = parseInt(Math.random() * (canvasHeight - boxSize)) + "px";
            box.style.top = 0.5*boxSize + parseInt(Math.random() * (canvasWidth - 1.5*boxSize)) + "px";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

            box.addEventListener("click", boxClicked);

            gameCanvas.appendChild(box);
        }
    }

    function boxClicked() {

        if(firstClick == true) {
            originalNumOfBoxes = boxCount;

            firstClick = false;

            startTimer();
        }
        
        this.parentNode.removeChild(this);
        boxCount--;

        if (boxCount <= 0) {
            stopTimer();

            console.log("Time: " + (elapsedTime / 1000).toFixed(3) + " s");
            elapsedTime = 0;

            newGameMenu();
            boxCount = originalNumOfBoxes;
        }
    }

    function startTimer() {
        startTime = Date.now();
        timer = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("timer-text").textContent = "Time: " + (elapsedTime / 1000).toFixed(3) + " s";
        }, 100);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    
        
        newGameMenu();
        //startNewGame();
};