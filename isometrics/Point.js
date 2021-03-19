class Point{
    constructor(x= 0, y= 0){
        this.x = x;
        this.y = y;
    }

    setX = (x) => {
        this.x = x;
    }

    moveLeftX = (speedMove) => {
        this.x -= speedMove;
    }

    moveRightX = (speedMove) => {
        this.x += speedMove;
    }

    setY = (y) => {
        this.y = y;
    }

    moveTopY = (speedMove) => {
        this.y -= speedMove;
    }

    moveBottomY = (speedMove) => {
        this.y += speedMove;
    }


}