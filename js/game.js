//This is the javascript that controls the game
//Thanks for checking out my code!
//Samuel Golovin

//Variables that control aspects of the game are make the game easier to manipulate and tweak
var boxSize = 50;           //size of the boxes
var boxCount = 20;


window.onload = function() {
    function spawnBoxes() {
        //gets the game canvas and assigns it to gameCanvas variable
        var gameCanvas = document.getElementById("game-area-canvas");

        //destroys boxes if any are still there
        gameCanvas.innerHTML = "";
        for(var i = 0; i < boxCount; i++) {

            //creates a new box game element
            var box = document.createElement("div");
            box.className = "box";

            //places boxes in random positions on the game canvas
            box.style.left = parseInt(Math.random() * (640 - boxSize)) + "px";
            box.style.top = parseInt(Math.random() * (480 - boxSize)) + "px";
            box.style.backgroundColor = "#000000";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

            //makes it so that when a box is clicked, a function is called that does something to it
            box.addEventListener("mouseup", boxClicked);

            //add the game element to the game canvas
            gameCanvas.appendChild(box);

            //used this to figure out why the boxes wouldn't spawn
            console.log(box);
            //was because I need to give them a width and height
            //they were there, just couldn't see them :/
        }
    }

    function boxClicked() {
        console.log("Box clicked");
    }

    spawnBoxes();
};