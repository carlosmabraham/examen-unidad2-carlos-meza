export class Base {
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c; 
    }

    paint(ctx){

        ctx.fillStyle = this.c;
        ctx.fillRect (this.x, this.y, this.w, this.h);
    }
}


export class Player extends Base{
    constructor(x,y,w,h, img){
        super(x, y, w, h);
        this.img = img;
    }

    seTocan(target){

        if(this.x < target.x + target.w &&  
           this.x + this.w > target.x   &&    
           this.y < target.y + target.h &&   
           this.y + this.h > target.y)
            {
                return true;
            }
        return false;
    }

    setImagen(ctx) {
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h );
    }
}


export class Laberinto extends Base {
    constructor(x,y,w,h, img ){
        super(x, y, w, h);
        this.img = img;
    }

    setImagen(ctx) {
        ctx.fillStyle = ctx.createPattern(this.img, 'repeat');
        ctx.fillRect (this.x, this.y, this.w, this.h);
    }
}