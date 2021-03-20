class IsometricTexturize{
    constructor(strs){
        this.item = strs.split(':');
        this.height = this.item[1];
        this.texture = this.item[0];
    }

    getHeight = () => {
        return this.height;
    }

    getTexture = () => {
        return this.texture;
    }
}