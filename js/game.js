window.onload = function() {
    function startGame() {
        var gameArea = document.getElementById("game-area");

        boxCount = 10;
        for(var i = 0; i < boxCount; i++) {
            var box = document.createElement("div");
            box.innerHTML = "";
            box.className = "box";
            box.style.left = 2 + parseInt(Math.random() * 646) + "px";
		    box.style.top = 2 + parseInt(Math.random() * 246) + "px";
            //box.addEventListerener("mouseup", boxWhenClicked);
            gameArea.appendChild(box);
        }
    }

    startGame();
};
