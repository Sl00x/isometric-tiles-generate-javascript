class Size{
    constructor(width= 0, height= 0){
        this.height = height;
        this.width = width;
    }

    squareSize = (factorSize) => {
        this.width = factorSize;
        this.height = factorSize;
    }
}