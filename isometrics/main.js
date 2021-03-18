var canvas = new Canvas(document.getElementById('canvas'));
canvas.size(window.innerWidth,window.innerHeight);
canvas.background('skyblue');

var xFac = 10;
var yFac = 15;
var FactorX = 64;
var FactorY= 16;

for(let x = 0; x < xFac; x++){
    for(let y = 0; y < yFac; y++){
        canvas.isoRect(
            new Point(((x + y/2) * FactorX), (y * FactorY)), 
            "rgb("+  (x * 2 + y * 2) * 6+", "+ 10 +", "+ 250 +")"
        );
    }
}
