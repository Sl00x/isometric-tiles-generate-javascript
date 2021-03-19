class Isometric{
    constructor(graphics){
        this.graphics = graphics; //Load context
    }
    tileSkull = (x, y, color) => {


        this.graphics.fillStyle = color;
        this.graphics.beginPath();
        this.graphics.moveTo(x + 32, y - 16);
        this.graphics.lineTo(x + 64, y);
        this.graphics.lineTo(x + 32, y + 16);
        this.graphics.lineTo(x , y);
        this.graphics.lineTo(x + 32, y - 16);
        this.graphics.closePath();
        this.graphics.fill();
        this.graphics.stroke();

    }

    montainSkull = (x, y , color, height) => {
        this.graphics.fillStyle = color;
        this.graphics.beginPath();
        this.graphics.moveTo(x + 32, y - 16);
        this.graphics.lineTo(x + 64, y);
        this.graphics.lineTo(x + 32, y + 16);
        this.graphics.lineTo(x , y);
        this.graphics.lineTo(x + 32, y - 16);
        this.graphics.lineTo(x, y);
        this.graphics.lineTo(x +32, y - 16 * height);
        this.graphics.lineTo(x +32, y - 16);
        this.graphics.lineTo(x + 32, y - 16 * height);
        this.graphics.closePath();
        this.graphics.fill();
        this.graphics.stroke();
    }

    tileBorder = (x, y, border, color) => {
        if(border[0] == true){
            this.graphics.fillStyle = color;
            this.graphics.moveTo(x,y);
            this.graphics.lineTo(x, y + 16);
            this.graphics.lineTo(x + 32, y + 32);
            this.graphics.lineTo(x + 32, y + 16);
            this.graphics.lineTo(x, y);
            this.graphics.closePath();
            this.graphics.fill();
            this.graphics.stroke();
        }
        if(border[1] == true){
            this.graphics.fillStyle = color;
            this.graphics.beginPath();
            this.graphics.moveTo(x + 32 ,y + 16);
            this.graphics.lineTo(x +  64, y);
            this.graphics.lineTo(x +  64, y + 16);
            this.graphics.lineTo(x + 32, y + 32);
            this.graphics.closePath();
            this.graphics.fill();
            this.graphics.stroke();
        }
    }

    drawTile(isoPoint, color, border){
        this.graphics.fillStyle = color;
        this.tileSkull(isoPoint.x, isoPoint.y, color);
        this.graphics.fillStyle = color;
        this.tileBorder(isoPoint.x, isoPoint.y, border, color);
    }

    drawMontain(isoPoint, color, border, height){
        this.graphics.fillStyle = color;
        this.montainSkull(isoPoint.x, isoPoint.y, color, height);
        this.graphics.fillStyle = color;
        this.tileBorder(isoPoint.x, isoPoint.y, border, color);
    }
}