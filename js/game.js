//This is the javascript that controls the game
//Thanks for checking out my code!
//Samuel Golovin

//Variables that control aspects of the game are make the game easier to manipulate and tweak
var canvasHeight = 640;     //canvas size
var canvasWidth = 480;
var newGameButtonWidth = 175;
var newGameButtonHeight = 75;
var boxSize = 75;           //size of the boxes
var boxCount = 2;           //num of boxes in game
var firstClick = true;      //whether or not the game has started
var timerClock = 0;         //allows for the time to be saved and used in other places
var startTime1, interval;




window.onload = function() {
    //getting the elements from DOM
    var gameCanvas = document.getElementById("game-area-canvas");
    
    function newGameMenu() {
        //gets game canvas and assigns it to gameCanvas variable
        
        gameCanvas.innerHTML = ""; 

        let instructions = document.createElement("div");

        instructions.className = "instructions";
        instructions.innerHTML = "When Start Game is press, the boxes will spawn. A timer will start as soon you click the first box!";
        instructions.style.width = 420 + "px";
        instructions.style.top = 150 + "px";
        instructions.style.left = 120 + "px";
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
        //gets the game canvas and assigns it to gameCanvas variable
        

        //resets the canvas
        gameCanvas.innerHTML = "";

        //sets up the timer
        //creates timer div
        let timerText = document.createElement("div");
        timerText.className = "timer-text";
        timerText.id = "timer-text";
        //add div to the gameCanvas
        gameCanvas.appendChild(timerText);
        timerText.innerHTML = "Time: 0.000 s";

        for(var i = 0; i < boxCount; i++) {

            //creates a new box game element
            let box = document.createElement("div");
            box.className = "box";

            //places boxes in random positions on the game canvas
            box.style.left = parseInt(Math.random() * (canvasHeight - boxSize)) + "px";
            box.style.top = 0.5*boxSize + parseInt(Math.random() * (canvasWidth - 1.5*boxSize)) + "px";
            
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

            //makes it so that when a box is clicked, a function is called that does something to it
            box.addEventListener("click", boxClicked);

            //add the game element to the game canvas
            gameCanvas.appendChild(box);

            //used this to figure out why the boxes wouldn't spawn
            //console.log(box);
            //was because I need to give them a width and height
            //they were there, just couldn't see them :/
        }
    }

    function boxClicked() {
        //if this is the first box to be clicked then set the variable
        //also, since it's the first box,  
        if(firstClick == true) {
            //starts the timer
            //startTime = performance.now();
            //sets variable that resets boxCount after game finishes
            originalNumOfBoxes = boxCount;
            //will not allow for this code to run again until new game resets the game
            firstClick = false;
            //starts timer
            startTimer();
        }
        
        //deletes the box when it is clicked and subtracts from the boxCount
        this.parentNode.removeChild(this);
        boxCount--;

        //checks to see of any boxes left and if none then stops the timer
        //also does math to find the time it took to click all of the boxes
        if (boxCount <= 0) {
            //stops the timer
            stopTimer();

            //shows the time to console
            console.log("Time: " + (elapsedTime / 1000).toFixed(3) + " s");
            elapsedTime = 0;
            //sets the boxCount back to its original number in preperation for a new round
            newGameMenu();
            boxCount = originalNumOfBoxes;
        }

        //used this to see if the function worked
        //console.log("Box clicked");
    }

var timer = null;

    function startTimer() {
        startTime = Date.now();
        //makes timer visible on screen and updates it
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
    
        
    //before the game starts, give the option to start a new game.
        //this will also show a list of your scores, etc.
        newGameMenu();
        //startNewGame();
};