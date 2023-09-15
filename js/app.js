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

//Prueba2
walls.push(new Base(15, 30, 10, 710, "gray"));
walls.push(new Base(715, 30, 10, 710, "gray"));
walls.push(new Base(20, 730, 695, 10, "gray"));
walls.push(new Base(50, 30, 665, 10, "gray"));9

//Vertical
//Linea No1 Listo
walls.push(new Base(50, 40, 10, 70, "gray"));
walls.push(new Base(50, 285, 10, 140, "gray"));
walls.push(new Base(50, 530, 10, 140, "gray"));

//walls.push(new Base(50, 285, 10, 445, "gray"));

//Linea No2 Listo
walls.push(new Base(85, 40, 10, 35, "gray"));
walls.push(new Base(85, 145, 10, 70, "gray"));
walls.push(new Base(85, 250, 10, 35, "gray"));
walls.push(new Base(85, 355, 10, 105, "gray"));
walls.push(new Base(85, 495, 10, 140, "gray"));
walls.push(new Base(85, 670, 10, 35, "gray"));

//walls.push(new Base(85, 145, 10, 585, "gray"));

//Linea No3 Listo
walls.push(new Base(120, 65, 10, 80, "gray"));
walls.push(new Base(120, 215, 10, 35, "gray"));
walls.push(new Base(120, 390, 10, 105, "gray"));
walls.push(new Base(120, 565, 10, 105, "gray"));
walls.push(new Base(120, 705, 10, 35, "gray"));

//walls.push(new Base(120, 170, 10, 690, "gray"));

//Linea No4 Listo
walls.push(new Base(155, 145, 10, 105, "gray"));
walls.push(new Base(155, 285, 10, 70, "gray"));
walls.push(new Base(155, 425, 10, 105, "gray"));
walls.push(new Base(155, 635, 10, 35, "gray"));

//walls.push(new Base(155, 285, 10, 690, "gray"));

//Linea No5 Listo
walls.push(new Base(190, 215, 10, 35, "gray"));
walls.push(new Base(190, 285, 10, 35, "gray"));
walls.push(new Base(190, 390, 10, 70, "gray"));
walls.push(new Base(190, 565, 10, 140, "gray"));

//walls.push(new Base(190, 285, 10, 690, "gray"));

//Linea No6 Listo
walls.push(new Base(225, 40, 10, 35, "gray"));
walls.push(new Base(225, 110, 10, 35, "gray"));
walls.push(new Base(225, 250, 10, 70, "gray"));
walls.push(new Base(225, 355, 10, 70, "gray"));
walls.push(new Base(225, 530, 10, 105, "gray"));
walls.push(new Base(225, 670, 10, 35, "gray"));

//walls.push(new Base(225, 40, 10, 690, "gray"));


//Linea No7 Listo
walls.push(new Base(260, 75, 10, 35, "gray"));
walls.push(new Base(260, 145, 10, 35, "gray"));
walls.push(new Base(260, 250, 10, 35, "gray"));
walls.push(new Base(260, 355, 10, 70, "gray"));
walls.push(new Base(260, 485, 10, 185, "gray"));
walls.push(new Base(260, 695, 10, 45, "gray"));

//walls.push(new Base(260, 455, 10, 690, "gray"));

//Linea No8 Listo
walls.push(new Base(295, 40, 10, 35, "gray"));
walls.push(new Base(295, 215, 10, 70, "gray"));
walls.push(new Base(295, 320, 10, 35, "gray"));
walls.push(new Base(295, 390, 10, 140, "gray"));
walls.push(new Base(295, 565, 10, 70, "gray"));
walls.push(new Base(295, 670, 10, 35, "gray"));

//walls.push(new Base(295, 40, 10, 690, "gray"));

//Linea No9 Listo
walls.push(new Base(330, 145, 10, 105, "gray"));
walls.push(new Base(330, 285, 10, 35, "gray"));
walls.push(new Base(330, 355, 10, 35, "gray"));
walls.push(new Base(330, 460, 10, 35, "gray"));
walls.push(new Base(330, 600, 10, 35, "gray"));
walls.push(new Base(330, 705, 10, 35, "gray"));

//walls.push(new Base(330, 40, 10, 690, "gray"));

//Linea No10 Listo
walls.push(new Base(365, 75, 10, 35, "gray"));
walls.push(new Base(365, 180, 10, 35, "gray"));
walls.push(new Base(365, 320, 10, 35, "gray"));
walls.push(new Base(365, 390, 10, 70, "gray"));
walls.push(new Base(365, 495, 10, 70, "gray"));
walls.push(new Base(365, 600, 10, 105, "gray"));

//walls.push(new Base(365, 40, 10, 690, "gray"));

//Linea No11 Listo
walls.push(new Base(400, 110, 10, 35, "gray"));
walls.push(new Base(400, 215, 10, 35, "gray"));
walls.push(new Base(400, 285, 10, 35, "gray"));
walls.push(new Base(400, 355, 10, 35, "gray"));
walls.push(new Base(400, 460, 10, 35, "gray"));
walls.push(new Base(400, 565, 10, 35, "gray"));
walls.push(new Base(400, 670, 10, 70, "gray"));

//walls.push(new Base(400, 40, 10, 690, "gray"));

//Linea No12 Listo
walls.push(new Base(435, 40, 10, 70, "gray"));
walls.push(new Base(435, 145, 10, 35, "gray"));
walls.push(new Base(435, 320, 10, 105, "gray"));
walls.push(new Base(435, 495, 10, 70, "gray"));
walls.push(new Base(435, 635, 10, 70, "gray"));

//walls.push(new Base(435, 40, 10, 690, "gray"));

//Linea No13 Listo
walls.push(new Base(470, 75, 10, 70, "gray"));
walls.push(new Base(470, 285, 10, 70, "gray"));
walls.push(new Base(470, 425, 10, 35, "gray"));
walls.push(new Base(470, 495, 10, 35, "gray"));
walls.push(new Base(470, 600, 10, 35, "gray"));
walls.push(new Base(470, 670, 10, 35, "gray"));

//walls.push(new Base(470, 40, 10, 690, "gray"));

//Linea No14 Listo
walls.push(new Base(505, 145, 10, 35, "gray"));
walls.push(new Base(505, 215, 10, 70, "gray")); 
walls.push(new Base(505, 460, 10, 35, "gray")); 
walls.push(new Base(505, 530, 10, 70, "gray"));
walls.push(new Base(505, 635, 10, 70, "gray"));

//walls.push(new Base(505, 40, 10, 690, "gray"));

//Linea No15 Listo
walls.push(new Base(540, 110, 10, 105, "gray"));
walls.push(new Base(540, 460, 10, 35, "gray"));
walls.push(new Base(540, 635, 10, 35, "gray"));

//walls.push(new Base(540, 40, 10, 690, "gray"));

//Linea No16 Listo
walls.push(new Base(575, 75, 10, 140, "gray"));
walls.push(new Base(575, 250, 10, 70, "gray"));320
walls.push(new Base(575, 600, 10, 35, "gray"));
walls.push(new Base(575, 705, 10, 35, "gray"));

//walls.push(new Base(575, 40, 10, 690, "gray"));

//Linea No17 Listo
walls.push(new Base(610, 145, 10, 140, "gray"));
walls.push(new Base(610, 320, 10, 70, "gray"));
walls.push(new Base(610, 425, 10, 35, "gray"));
walls.push(new Base(610, 530, 10, 35, "gray"));
walls.push(new Base(610, 670, 10, 35, "gray"));

//walls.push(new Base(610, 40, 10, 690, "gray"));

//Linea No18 Listo
walls.push(new Base(645, 75, 10, 140, "gray"));215
walls.push(new Base(645, 390, 10, 35, "gray"));
walls.push(new Base(645, 460, 10, 70, "gray"));
walls.push(new Base(645, 565, 10, 105, "gray"));
walls.push(new Base(645, 705, 10, 35, "gray"));

//walls.push(new Base(645, 40, 10, 690, "gray"));

//Linea No19
walls.push(new Base(680, 75, 10, 35, "gray"));
walls.push(new Base(680, 145, 10, 105, "gray"));
walls.push(new Base(680, 285, 10, 70, "gray"));
walls.push(new Base(680, 425, 10, 140, "gray"));
walls.push(new Base(680, 600, 10, 35, "gray"));
walls.push(new Base(680, 670, 10, 35, "gray"));

//walls.push(new Base(680, 40, 10, 690, "gray"));


//Horizontal
//Linea No1
walls.push(new Base(160, 65, 555, 10, "gray"));
//Linea No2
walls.push(new Base(55, 100, 660, 10, "gray"));
//Linea No3
walls.push(new Base(20, 135, 75, 10, "gray"));
walls.push(new Base(120, 135, 595, 10, "gray"));
//Linea No4
walls.push(new Base(20, 170, 35, 10, "gray"));
walls.push(new Base(90, 170, 695, 10, "gray"));

//Linea No5
walls.push(new Base(20, 205, 695, 10, "gray"));
//Linea No6
walls.push(new Base(20, 240, 695, 10, "gray"));
//Linea No7
walls.push(new Base(20, 275, 695, 10, "gray"));
//Linea No8
walls.push(new Base(20, 310, 695, 10, "gray"));
//Linea No9
walls.push(new Base(20, 345, 695, 10, "gray"));
//Linea No10
walls.push(new Base(20, 380, 695, 10, "gray"));
//Linea No11
walls.push(new Base(20, 415, 695, 10, "gray"));
//Linea No12
walls.push(new Base(20, 450, 695, 10, "gray"));
//Linea No13
walls.push(new Base(20, 485, 695, 10, "gray"));
//Linea No14
walls.push(new Base(20, 520, 695, 10, "gray"));
//Linea No15
walls.push(new Base(20, 555, 695, 10, "gray"));
//Linea No16
walls.push(new Base(20, 590, 695, 10, "gray"));
//Linea No17
walls.push(new Base(20, 625, 695, 10, "gray"));
//Linea No18
walls.push(new Base(20, 660, 695, 10, "gray"));
//Linea No19
walls.push(new Base(20, 695, 695, 10, "gray"));


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