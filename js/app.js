import { Base, Laberinto } from './Base.js'
//import { Laberinto } from './Laberinto.js'

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


let dir = 0;
let speed = 2;
let walls = [];
let pause = false;
let tyme = 0;
let image = new Image(10, 10);
image.src = "./img/ballena_2_24px_right.png";



const whale = new Base(25, 30, 10, 10, "black");
const food = new Base(350, 350, 40, 40, "red");


walls.push(new Base(15, 15, 5, 500, "gray"));
walls.push(new Base(510, 15, 5, 450, "gray"));
walls.push(new Base(20, 510, 450, 5, "gray"));
walls.push(new Base(45, 15, 465, 5, "gray"));

//PRUEBA LABERINTO
//VERTICAL
walls.push(new Base(45, 21, 5, 45, "gray"));
walls.push(new Base(70, 21, 5, 20, "gray"));//vertical
walls.push(new Base(95, 40, 5, 50, "gray"));
walls.push(new Base(155, 21, 5, 20, "gray"));
walls.push(new Base(180, 41, 5, 20, "gray"));
walls.push(new Base(205, 21, 5, 20, "gray"));
walls.push(new Base(244, 41, 5, 20, "gray"));
walls.push(new Base(283, 21, 5, 40, "gray"));
walls.push(new Base(155, 66, 5, 24, "gray"));
walls.push(new Base(268, 66, 5, 24, "gray"));
walls.push(new Base(308, 41, 5, 40, "gray"));
walls.push(new Base(230, 91, 5, 19, "gray"));
walls.push(new Base(120, 90, 5, 50, "gray"));
walls.push(new Base(180, 89, 5, 20, "gray"));



//HORIZONTAL
walls.push(new Base(50, 61, 45, 5, "gray"));
walls.push(new Base(120, 36, 33, 5, "gray"));
walls.push(new Base(230, 36, 33, 5, "gray"));
walls.push(new Base(120, 61, 129, 5, "gray"));
walls.push(new Base(268, 61, 20, 5, "gray"));
walls.push(new Base(308, 36, 65, 5, "gray"));
walls.push(new Base(100, 85, 54, 5, "gray"));
walls.push(new Base(230, 85, 36, 5, "gray"));
walls.push(new Base(293, 83, 20, 5, "gray"));
walls.push(new Base(150, 110, 85, 5, "gray"));
walls.push(new Base(180, 83, 25, 5, "gray"));



document.addEventListener("keydown", (e) =>{

    console.log(e) 

    switch(e.keyCode) {
        case 87:
            if (!pause) dir = e.keyCode; 
        break;
        case 83:
            if (!pause) dir = e.keyCode;
        break;
        case 68:
            if (!pause) dir = e.keyCode;
        break;
        case 65:
            if (!pause) dir = e.keyCode;
        break;
        case 32:
            pause = !pause;
        break;

    }   

});

const update = () => {
    if( !pause ) {
        switch (dir) {
            case 87:
                whale.y -= speed;
                image.src = "./img/ballena_2_24px_up.png";

                //if (whale.y < -50) { whale.y = 550 }
                break;
            case 83:
                whale.y += speed;
                image.src = "./img/ballena_2_24px_down.png";

                //if (whale.y > 550) { whale.y = 0 }
                break;
            case 68:
                whale.x += speed;
                //if (whale.x > 550) { whale.x = 0 }
                image.src = "./img/ballena_2_24px_right.png";

                break;
            case 65:
                whale.x -= speed;
                image.src = "./img/ballena_2_24px.png";
                //if (whale.x < -50) { whale.x = 550 }
                break;
        }

        if (whale.seTocan(food)) {
            food.x = Math.random() * (460);
            food.y = Math.random() * (460);
            tyme += 1; 
            tyme += 10;

            //audio.play();
        }

        for (let i = walls.length - 1; i >= 0; i--) {
            if( whale.seTocan(walls[i]) ) {    
                switch( dir ) {
                    case 87:
                        whale.y += speed;
                    break;
                    case 83:
                        whale.y -= speed;
                    break;
                    case 68:
                        whale.x -= speed;
                    break;
                    case 65:
                        whale.x += speed;
                    break;
                } 
                dir = 0;
            }
        }
    }

    paint();
    window.requestAnimationFrame(update);
}

const paint = () => {
    if(!pause){
        ctx.fillStyle = "white";
        ctx.fillRect (0, 0, 600, 600);

        ctx.font = "20px Verdana";
        ctx.fillStyle = "black";
        ctx.fillText("TIEMPO:"+ tyme ,380,20);

        
        whale.paint(ctx)
        //ctx.drawImage(image, whale.x, whale.y,20,20); 

        food.paint(ctx) 

        for (let i = walls.length - 1; i >= 0; i--) {
            walls[i].paint(ctx)
        }
    }else{

        ctx.fillStyle = "rgba(154,160,154,0.020)";
        ctx.fillRect (0, 0, 600, 600);

        ctx.font = "30px Verdana";
        ctx.fillStyle = "black";
        ctx.fillText("P A U S E",180,230);

    }
}

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());
window.requestAnimationFrame(update);