window.addEventListener('load', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 540;
    canvas.height = 400;

    class InputHandler {
        constructor(game) {
            this.game = game;
            window.addEventListener("click", e => {
                if (e.target == canvas) {
                    this.game.mouseClicked = e;
                    console.log(this.game.mouseClicked);
                    if (e.target == this.box) {
                        console.log(e.target);
                        this.box.pop();
                    }
                }
                
            })
        }
    }

    var size = 50;
    var numOfBoxes = 5;
    var boxes = [];

    class Box {
        constructor(game, posX, posY, size) {
            this.game = game;
            this.width = size;
            this.height = size;
            this.x = posX;
            this.y = posY;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
        update() {

        }
    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.mouseClicked = undefined;
            this.input = new InputHandler(this);
            for (var i = 0; i < numOfBoxes; i++) {
                let x = Math.floor(Math.random() * (this.width - size));
                let y = Math.floor(Math.random() * (this.height - size));
                this.box = new Box(this, x, y, size);
                boxes.push(this.box);
                console.log(this.box);
                console.log(boxes);
            }
            
        }
        render(context) {
            for(var i = 0; i < numOfBoxes; i++) {
                boxes[i].draw(context);
                boxes[i].update(context);
            }
        }
        
    }

    const game = new Game(canvas.width, canvas.height);
    game.render(ctx);
    
    function animate() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(ctx);
        game.box.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});
