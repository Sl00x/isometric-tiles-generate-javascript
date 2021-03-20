var baseX = window.innerWidth / 2;
var baseY = window.innerHeight / 2;

class Isometric{
    constructor(graphics){
        this.graphics = graphics; //Load context
    }
    tileSkull = (initX, initY, height, color) => {
        let y = baseY + ((initY + initX - height) * 16);
        let x = baseX + (initX * 32) - (initY * 32);

        this.graphics.fillStyle = color;
        this.graphics.beginPath();
        this.graphics.moveTo(x + 32, y);
        this.graphics.lineTo(x + 64, y + 16);
        this.graphics.lineTo(x + 32, y + 32);
        this.graphics.lineTo(x , y + 16);
        this.graphics.lineTo(x + 32, y);
        this.graphics.closePath();
        this.graphics.fill();

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

    tileBorder = (initX, initY, height, color, tileOnRight = false, tileOnLeft = false) => {
        let y = baseY + ((initY + initX - height) * 16);
        let x = baseX + (initX * 32) - (initY * 32);
        this.graphics.fillStyle = color;

        if (!tileOnLeft) {
            this.graphics.beginPath();
            this.graphics.moveTo(x, y + 16);
            this.graphics.lineTo(x, y + 32);
            this.graphics.lineTo(x + 32, y + 48);
            this.graphics.lineTo(x + 32, y + 32);
            this.graphics.lineTo(x, y + 16);
            this.graphics.closePath();
            this.graphics.fill();
        }

        if (!tileOnRight) {
            this.graphics.beginPath();
            this.graphics.moveTo(x + 32 ,y + 32);
            this.graphics.lineTo(x +  64, y + 16);
            this.graphics.lineTo(x +  64, y + 32);
            this.graphics.lineTo(x + 32, y + 48);
            this.graphics.closePath();
            this.graphics.fill();
        }
    }

    drawTile(isoPoint, texture, float, tileOnRight, tileOnLeft){

        if (float || isoPoint.height == 0) {
            this.tileSkull(isoPoint.x, isoPoint.y, isoPoint.height, materials[texture][0]);
            this.tileBorder(isoPoint.x, isoPoint.y, isoPoint.height, materials[texture][1]);
        } else {
            if (texture != "water")
                for (let i = 0; i <= isoPoint.height; i++) {
                    this.tileSkull(isoPoint.x, isoPoint.y, i, materials[texture][0]);
                    this.tileBorder(isoPoint.x, isoPoint.y, i, materials[texture][1]);
                }
            if (texture == "water")
                for (let i = isoPoint.height; i <= 0; i++) {
                    if (i == 0)
                        this.tileSkull(isoPoint.x, isoPoint.y, i, materials[texture][0]);
                    this.tileBorder(isoPoint.x, isoPoint.y, i, materials[texture][1], tileOnRight, tileOnLeft);
                }
        }
    }

    drawMontain(isoPoint, color, height){
        this.graphics.fillStyle = color;
        this.montainSkull(isoPoint.x, isoPoint.y, color, height);
        this.graphics.fillStyle = color;
        this.tileBorder(isoPoint.x, isoPoint.y, color);
    }

    drawSprite(isoPoint,  sprite){
        let y = baseY + ((isoPoint.y + isoPoint.x - isoPoint.height) * 16) - 32 + 8;
        let x = (baseX + (isoPoint.x * 32) - (isoPoint.y * 32));
        var sprt = new Image();
        sprt.src = "isometrics/sprite/" + sprite + ".png";
        this.graphics.drawImage(sprt, x, y, 64,64);
    }
}