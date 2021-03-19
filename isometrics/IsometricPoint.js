class IsomtericPoint{
    constructor(x, y){
        this.x = 32 * x;
        if(y == 0) { y = 1 };
        this.y  = 16 * y;
    }
}