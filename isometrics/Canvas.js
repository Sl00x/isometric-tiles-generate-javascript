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




}