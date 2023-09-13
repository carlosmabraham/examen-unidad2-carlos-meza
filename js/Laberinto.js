

export class Laberinto extends Base {
    constructor(x,y,w,h,c){
        super(x, y, w, h, c); 
    }

    paint(ctx){
        ctx.fillStyle = this.c;
        ctx.fillRect (this.x, this.y, this.w, this.h);
        ctx.strokeRect (this.x, this.y, this.w, this.h);
    }
}