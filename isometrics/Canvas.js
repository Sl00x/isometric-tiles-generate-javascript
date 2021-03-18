class Canvas{
    constructor(htmlCanvas){
        this.canvas = htmlCanvas;
        this.graphics =  this.canvas.getContext('2d');
    }

    size = (width, height) => {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    background = (color) => {
        this.canvas.style.background = color;
    }

    drawRect(size, point, color){
        this.graphics.fillStyle = color;
        this.graphics.fillRect(point.x, point.y, size.width, size.height);
    }

    isoRect(point, color){
        this.graphics.fillStyle = color;
        var pixel = 2;
        for(var i = 0; i < 17; i++) {
            this.graphics.fillRect(point.x + i * 2, point.y + (32 / 2) - 1 + i, ((32 / 2) - i) * 4, 1);
            this.graphics.fillRect(point.x + i * 2, point.y + (32 / 2) - 1 - i, ((32 / 2) - i) * 4, 1);
        
        }

    }



}