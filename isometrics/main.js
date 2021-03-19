var canvas = new Canvas(document.getElementById('canvas'));
canvas.size(window.innerWidth,window.innerHeight);
canvas.background('skyblue');

var isometric = new Isometric(canvas.graphics);

var mapVertex = [
    //MpaLine One
    [new IsomtericPoint(7,5), [false, false]],
]

for(let i = 0; i <= mapVertex.length; i++){
    isometric.drawMontain(mapVertex[i][0], "gray", mapVertex[i][1], 3);
}