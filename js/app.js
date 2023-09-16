import { Base, Laberinto, Player } from './Base.js'
//import { Laberinto } from './Laberinto.js'

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


let dir = 0;
let speed = 3;
let walls = [];
let blocks = [];
let pause = false;
let timeLife = 65;
let ballena = new Image();
let piedra = new Image();
let fondo = new Image();
let audioLevel = new Audio();
let audioWin = new Audio();


ballena.src = "./img/ballena_down.png";
piedra.src = "./img/piedras.png";
fondo.src = "./img/fondo.jpg";
audioLevel.src = "./sound/donkey-kong-country.mp3";
audioWin.src = "./sound/donkey-kong-levels.mp3";


const whale = new Player(25, 30, 20, 20, ballena);


//Marco
walls.push(new Laberinto(15, 30, 10, 710, piedra));
walls.push(new Laberinto(715, 30, 10, 675, piedra));
walls.push(new Laberinto(20, 730, 670, 10, piedra));
walls.push(new Laberinto(50, 30, 665, 10, piedra));


//Bloques salida
blocks.push(new Base(15, 25, 45, 5, "white"));
blocks.push(new Base(680, 740, 45, 5, "white",));
blocks.push(new Base(725, 700, 5, 45, "white"));

//Vertical
//Linea No1 Listo
walls.push(new Laberinto(50, 40, 10, 70, piedra));
walls.push(new Laberinto(50, 285, 10, 140, piedra));
walls.push(new Laberinto(50, 530, 10, 140, piedra));


//Linea No2 Listo
walls.push(new Laberinto(85, 40, 10, 35,piedra));
walls.push(new Laberinto(85, 145, 10, 70,piedra));
walls.push(new Laberinto(85, 250, 10, 35, piedra));
walls.push(new Laberinto(85, 355, 10, 105, piedra));
walls.push(new Laberinto(85, 495, 10, 140, piedra));
walls.push(new Laberinto(85, 670, 10, 35, piedra));


//Linea No3 Listo
walls.push(new Laberinto(120, 65, 10, 80, piedra));
walls.push(new Laberinto(120, 215, 10, 35, piedra));
walls.push(new Laberinto(120, 390, 10, 105, piedra));
walls.push(new Laberinto(120, 565, 10, 105, piedra));
walls.push(new Laberinto(120, 705, 10, 35, piedra));


//Linea No4 Listo
walls.push(new Laberinto(155, 145, 10, 105, piedra));
walls.push(new Laberinto(155, 285, 10, 70, piedra));
walls.push(new Laberinto(155, 425, 10, 105, piedra));
walls.push(new Laberinto(155, 635, 10, 35, piedra));



//Linea No5 Listo
walls.push(new Laberinto(190, 215, 10, 35, piedra));
walls.push(new Laberinto(190, 285, 10, 35, piedra));
walls.push(new Laberinto(190, 390, 10, 70, piedra));
walls.push(new Laberinto(190, 565, 10, 140, piedra));


//Linea No6 Listo
walls.push(new Laberinto(225, 40, 10, 35, piedra));
walls.push(new Laberinto(225, 110, 10, 35, piedra));
walls.push(new Laberinto(225, 250, 10, 70, piedra));
walls.push(new Laberinto(225, 355, 10, 70, piedra));
walls.push(new Laberinto(225, 530, 10, 105, piedra));
walls.push(new Laberinto(225, 670, 10, 35, piedra));



//Linea No7 Listo
walls.push(new Laberinto(260, 70, 10, 40, piedra));
walls.push(new Laberinto(260, 145, 10, 35, piedra));
walls.push(new Laberinto(260, 250, 10, 35, piedra));
walls.push(new Laberinto(260, 355, 10, 70, piedra));
walls.push(new Laberinto(260, 485, 10, 185, piedra));
walls.push(new Laberinto(260, 695, 10, 45, piedra));


//Linea No8 Listo
walls.push(new Laberinto(295, 40, 10, 35, piedra));
walls.push(new Laberinto(295, 215, 10, 70, piedra));
walls.push(new Laberinto(295, 320, 10, 35, piedra));
walls.push(new Laberinto(295, 390, 10, 140, piedra));
walls.push(new Laberinto(295, 565, 10, 70, piedra));
walls.push(new Laberinto(295, 670, 10, 35, piedra));


//Linea No9 Listo
walls.push(new Laberinto(330, 145, 10, 105, piedra));
walls.push(new Laberinto(330, 285, 10, 35, piedra));
walls.push(new Laberinto(330, 355, 10, 35, piedra));
walls.push(new Laberinto(330, 460, 10, 35, piedra));
walls.push(new Laberinto(330, 600, 10, 35, piedra));
walls.push(new Laberinto(330, 705, 10, 35, piedra));


//Linea No10 Listo
walls.push(new Laberinto(365, 75, 10, 35, piedra));
walls.push(new Laberinto(365, 180, 10, 35, piedra));
walls.push(new Laberinto(365, 320, 10, 35, piedra));
walls.push(new Laberinto(365, 390, 10, 70, piedra));
walls.push(new Laberinto(365, 495, 10, 70, piedra));
walls.push(new Laberinto(365, 600, 10, 105, piedra));


//Linea No11 Listo
walls.push(new Laberinto(400, 110, 10, 35, piedra));
walls.push(new Laberinto(400, 215, 10, 35, piedra));
walls.push(new Laberinto(400, 285, 10, 35, piedra));
walls.push(new Laberinto(400, 355, 10, 35, piedra));
walls.push(new Laberinto(400, 460, 10, 35, piedra));
walls.push(new Laberinto(400, 565, 10, 35, piedra));
walls.push(new Laberinto(400, 670, 10, 70, piedra));


//Linea No12 Listo
walls.push(new Laberinto(435, 40, 10, 70, piedra));
walls.push(new Laberinto(435, 145, 10, 35, piedra));
walls.push(new Laberinto(435, 320, 10, 105, piedra));
walls.push(new Laberinto(435, 495, 10, 70, piedra));
walls.push(new Laberinto(435, 635, 10, 70, piedra));


//Linea No13 Listo
walls.push(new Laberinto(470, 75, 10, 70, piedra));
walls.push(new Laberinto(470, 285, 10, 70, piedra));
walls.push(new Laberinto(470, 425, 10, 35, piedra));
walls.push(new Laberinto(470, 495, 10, 35, piedra));
walls.push(new Laberinto(470, 600, 10, 35, piedra));
walls.push(new Laberinto(470, 670, 10, 35, piedra));


//Linea No14 Listo
walls.push(new Laberinto(505, 145, 10, 35, piedra));
walls.push(new Laberinto(505, 215, 10, 70, piedra)); 
walls.push(new Laberinto(505, 460, 10, 35, piedra)); 
walls.push(new Laberinto(505, 530, 10, 70, piedra));
walls.push(new Laberinto(505, 635, 10, 70, piedra));


//Linea No15 Listo
walls.push(new Laberinto(540, 110, 10, 105, piedra));
walls.push(new Laberinto(540, 460, 10, 35, piedra));
walls.push(new Laberinto(540, 635, 10, 35, piedra));


//Linea No16 Listo
walls.push(new Laberinto(575, 75, 10, 140, piedra));
walls.push(new Laberinto(575, 250, 10, 70, piedra));
walls.push(new Laberinto(575, 600, 10, 35, piedra));
walls.push(new Laberinto(575, 705, 10, 35, piedra));


//Linea No17 Listo
walls.push(new Laberinto(610, 145, 10, 140, piedra));
walls.push(new Laberinto(610, 320, 10, 70, piedra));
walls.push(new Laberinto(610, 425, 10, 35, piedra));
walls.push(new Laberinto(610, 530, 10, 35, piedra));
walls.push(new Laberinto(610, 670, 10, 35, piedra));




//Linea No18 Listo
walls.push(new Laberinto(645, 75, 10, 140, piedra));
walls.push(new Laberinto(645, 390, 10, 35, piedra));
walls.push(new Laberinto(645, 460, 10, 70, piedra));
walls.push(new Laberinto(645, 565, 10, 105, piedra));
walls.push(new Laberinto(645, 705, 10, 35, piedra));


//Linea No19 Listo
walls.push(new Laberinto(680, 75, 10, 35, piedra));
walls.push(new Laberinto(680, 145, 10, 105, piedra));
walls.push(new Laberinto(680, 285, 10, 70, piedra));
walls.push(new Laberinto(680, 425, 10, 140, piedra));
walls.push(new Laberinto(680, 600, 10, 35, piedra));
walls.push(new Laberinto(680, 670, 10, 35, piedra));



//Horizontal
//Linea No1 Listo
walls.push(new Laberinto(155, 65, 80, 10, piedra));
walls.push(new Laberinto(330, 65, 80, 10, piedra));
walls.push(new Laberinto(470, 65, 115, 10, piedra));
walls.push(new Laberinto(610, 65, 80, 10, piedra));

//walls.push(new Laberinto(15, 65, 710, 10, ));

//Linea No2 Listo
walls.push(new Laberinto(50, 100, 80, 10, piedra));
walls.push(new Laberinto(155, 100, 220, 10, piedra));
walls.push(new Laberinto(400, 100, 45, 10, piedra));
walls.push(new Laberinto(505, 100, 45, 10, piedra));
walls.push(new Laberinto(575, 100, 45, 10, piedra));

//walls.push(new Laberinto(15, 100, 710, 10, ));

//Linea No3 Listo
walls.push(new Laberinto(15, 135, 80, 10, piedra));
walls.push(new Laberinto(120, 135, 115, 10, piedra));
walls.push(new Laberinto(260, 135, 45, 10, piedra));
walls.push(new Laberinto(330, 135, 80, 10, piedra));
walls.push(new Laberinto(435, 135, 45, 10, piedra));
walls.push(new Laberinto(610, 135, 45, 10, piedra));
walls.push(new Laberinto(680, 135, 45, 10, piedra));


//walls.push(new Laberinto(15, 135, 710, 10, ));

//Linea No4 Listo
walls.push(new Laberinto(15, 170, 45, 10, piedra));
walls.push(new Laberinto(85, 170, 45, 10, piedra));
walls.push(new Laberinto(190, 170, 150, 10, piedra));
walls.push(new Laberinto(365, 170, 150, 10, piedra));

//walls.push(new Laberinto(15, 170, 710, 10, ));

//Linea No5 Listo
walls.push(new Laberinto(50, 205, 45, 10, piedra));
walls.push(new Laberinto(120, 205, 45, 10, piedra));
walls.push(new Laberinto(190, 205, 115, 10, piedra));
walls.push(new Laberinto(365, 205, 45, 10, piedra));
walls.push(new Laberinto(435, 205, 150, 10, piedra));

//walls.push(new Laberinto(15, 205, 710, 10, ));

//Linea No6 Listo
walls.push(new Laberinto(50, 240, 80, 10, piedra));
walls.push(new Laberinto(190, 240, 45, 10, piedra));
walls.push(new Laberinto(330, 240, 45, 10, piedra));
walls.push(new Laberinto(400, 240, 80, 10, piedra));
walls.push(new Laberinto(540, 240, 80, 10, piedra));
walls.push(new Laberinto(645, 240, 45, 10, piedra));

//walls.push(new Laberinto(15, 240, 710, 10, ));

//Linea No7 Listo
walls.push(new Laberinto(15, 275, 45, 10, piedra));
walls.push(new Laberinto(85, 275, 115, 10, piedra));
walls.push(new Laberinto(260, 275, 290, 10, piedra));
walls.push(new Laberinto(610, 275, 80, 10, piedra));

//walls.push(new Laberinto(15, 275, 710, 10, ));

//Linea No8 Listo
walls.push(new Laberinto(50, 310, 80, 10, piedra));
walls.push(new Laberinto(225, 310, 45, 10, piedra));
walls.push(new Laberinto(365, 310, 45, 10, piedra));
walls.push(new Laberinto(505, 310, 150, 10, piedra));

//walls.push(new Laberinto(15, 310, 710, 10, ));

//Linea No9 Listo
walls.push(new Laberinto(85, 345, 150, 10, piedra));
walls.push(new Laberinto(260, 345, 115, 10, piedra));
walls.push(new Laberinto(400, 345, 45, 10, piedra));
walls.push(new Laberinto(470, 345, 115, 10, piedra));
walls.push(new Laberinto(645, 345, 45, 10, piedra));

//walls.push(new Laberinto(15, 345, 710, 10, ));

//Linea No10 Listo
walls.push(new Laberinto(120, 380, 45, 10, piedra));
walls.push(new Laberinto(365, 380, 45, 10, piedra));
walls.push(new Laberinto(435, 380, 185, 10, piedra));
walls.push(new Laberinto(645, 380, 80, 10, piedra));

//walls.push(new Laberinto(15, 380, 710, 10, ));

//Linea No11 Listo
walls.push(new Laberinto(155, 415, 45, 10, piedra));
walls.push(new Laberinto(225, 415, 45, 10, piedra));
walls.push(new Laberinto(295, 415, 80, 10, piedra));
walls.push(new Laberinto(400, 415, 45, 10, piedra));
walls.push(new Laberinto(470, 415, 185, 10, piedra));

//walls.push(new Laberinto(15, 415, 710, 10, ));

//Linea No12 Listo
walls.push(new Laberinto(50, 450, 80, 10, piedra));
walls.push(new Laberinto(190, 450, 115, 10, piedra));
walls.push(new Laberinto(400, 450, 115, 10, piedra));
walls.push(new Laberinto(575, 450, 45, 10, piedra));

//walls.push(new Laberinto(15, 450, 710, 10, ));

//Linea No13 Listo
walls.push(new Laberinto(15, 485, 80, 10, piedra));
walls.push(new Laberinto(155, 485, 80, 10, piedra));
walls.push(new Laberinto(330, 485, 80, 10, piedra));
walls.push(new Laberinto(505, 485, 150, 10, piedra));

//walls.push(new Laberinto(15, 485, 710, 10, ));

//Linea No14 Listo
walls.push(new Laberinto(85, 520, 80, 10, piedra));
walls.push(new Laberinto(190, 520, 45, 10, piedra));
walls.push(new Laberinto(260, 520, 80, 10, piedra));
walls.push(new Laberinto(365, 520, 80, 10, piedra));
walls.push(new Laberinto(470, 520, 150, 10, piedra));

//walls.push(new Laberinto(15, 520, 710, 10, ));

//Linea No15 Listo
walls.push(new Laberinto(120, 555, 80, 10, piedra));
walls.push(new Laberinto(295, 555, 80, 10, piedra));
walls.push(new Laberinto(435, 555, 45, 10, piedra));
walls.push(new Laberinto(540, 555, 150, 10, piedra));

//walls.push(new Laberinto(15, 555, 710, 10, ));

//Linea No16 Listo
walls.push(new Laberinto(155, 590, 45, 10, piedra));
walls.push(new Laberinto(365, 590, 220, 10, piedra));
walls.push(new Laberinto(610, 590, 45, 10, piedra));
walls.push(new Laberinto(680, 590, 45, 10, piedra));

//walls.push(new Laberinto(15, 590, 710, 10, ));

//Linea No17 Listo
walls.push(new Laberinto(225, 625, 45, 10, piedra));
walls.push(new Laberinto(295, 625, 45, 10, piedra));
walls.push(new Laberinto(400, 625, 80, 10, piedra));
walls.push(new Laberinto(575, 625, 45, 10, piedra));

//walls.push(new Laberinto(15, 625, 710, 10, ));

//Linea No18 Listo
walls.push(new Laberinto(50, 660, 115, 10, piedra));
walls.push(new Laberinto(190, 660, 45, 10, piedra));
walls.push(new Laberinto(260, 660, 115, 10, piedra));
walls.push(new Laberinto(470, 660, 45, 10, piedra));
walls.push(new Laberinto(540, 660, 150, 10, piedra));

//walls.push(new Laberinto(15, 660, 710, 10, ));

//Linea No19
walls.push(new Laberinto(15, 695, 45, 10, piedra));
walls.push(new Laberinto(120, 695, 45, 10, piedra));
walls.push(new Laberinto(225, 695, 45, 10, piedra));
walls.push(new Laberinto(505, 695, 80, 10, piedra));

//walls.push(new Base(15, 695, 710, 10, "gray"));


document.addEventListener("keydown", (e) =>{
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

function actualizarCuentaRegresiva() {
    if(!pause) {
        if (timeLife === -1) {
          detenerCuentaRegresiva();
        } else {
          timeLife--;
        }
    }
  }
  
  // Iniciar la cuenta regresiva
  function iniciarCuentaRegresiva() {
    actualizarCuentaRegresiva();
    cuentaRegresivaIntervalId = setInterval(actualizarCuentaRegresiva, 1000);
  }
  
  

  function puaseCuentaRegresiva() {

  }

  function detenerCuentaRegresiva() {
    clearInterval(cuentaRegresivaIntervalId);
  }
  
  let cuentaRegresivaIntervalId = null;
  iniciarCuentaRegresiva();
  
  
const update = () => {
    if( !pause || timeLife !== 0) {
        switch (dir) {
            case 87:
                whale.y -= speed;
                ballena.src = "./img/ballena_up.png";
                break;
            case 83:
                whale.y += speed;
                ballena.src = "./img/ballena_down.png";
                break;
            case 68:
                whale.x += speed;
                ballena.src = "./img/ballena_right.png";
                break;
            case 65:
                whale.x -= speed;
                ballena.src = "./img/ballena_left.png";
                break;
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


        for (let i = blocks.length - 1; i >= 0; i--) {
            if( whale.seTocan(blocks[i]) ) {    
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
    replay();
    window.requestAnimationFrame(update);
}

const paint = () => {
    if(timeLife !== -1){

        if(!pause){
            ctx.fillStyle = "white";
            ctx.fillRect( 0, 0, 740, 23 );
            ctx.drawImage(fondo, 15, 30, 710, 710);
    
            ctx.font = "20px Verdana";
            ctx.fillStyle = "black";
            ctx.fillText("TIEMPO:"+ timeLife ,580,23);
    
            whale.setImagen( ctx );
    
            for (let i = walls.length - 1; i >= 0; i--) {
                walls[i].setImagen(ctx);
            }
    
            for (let i = blocks.length - 1; i >= 0; i--) {
                blocks[i].paint(ctx);
            }
            
        }else {
            ctx.fillStyle = "rgba(154,160,154,0.020)";
            ctx.fillRect (15, 30, 710, 710);
    
            ctx.font = "30px Verdana";
            ctx.fillStyle = "black";
            ctx.fillText("P A U S E",290,380);
        }
    }else{
        ctx.fillStyle = "rgba(154,160,154,0.020)";
        ctx.fillRect(15, 30, 710, 710);

        ctx.font = "30px Verdana";
        ctx.fillStyle = "black";
        ctx.fillText("G A M E R O V E R", 290, 380);

    }
}

const replay = () => {
    if(whale.x === 705 || whale.y === 718) {
        audioWin.play()
        audioLevel.pause();
    }else {
        audioLevel.play();
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