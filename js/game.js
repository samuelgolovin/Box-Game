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
    var boxCount = 20;
    var newGame = true;

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
        timerRef.innerHTML = "Time: 0.000";

        gameCanvas.innerHTML = "";

        // let timerText = document.createElement("div");
        // timerText.className = "timer-text";
        // timerText.id = "timer-text";
        // gameCanvas.appendChild(timerText);
        // timerText.innerHTML = "Time: 0.000 s";

        for(var i = 0; i < boxCount; i++) {
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

        if(newGame == true) {
            originalNumOfBoxes = boxCount;

            newGame = false;

            startTimer();
        }
        
        this.parentNode.removeChild(this);
        boxCount--;

        if (boxCount <= 0) {
            stopTimer();

            newGameMenu();
            
            boxCount = originalNumOfBoxes;
            newGame = true;
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

    newGameMenu();

};