var canvas = new Canvas(document.getElementById('canvas'));
canvas.size(window.innerWidth,window.innerHeight);
canvas.background('skyblue');

var isometric = new Isometric(canvas.graphics);

var mapVertex = [
    //MpaLine One
    [new IsomtericPoint(7,5), [false, false]],
    [new IsomtericPoint(6,6), [false, true]],
    [new IsomtericPoint(5,7), [false, true]],
    [new IsomtericPoint(4,8), [false, true]],
    [new IsomtericPoint(3,9), [false, true]],
    [new IsomtericPoint(2,10), [false, true]],
    [new IsomtericPoint(1,11), [false, true]],
    [new IsomtericPoint(0,12), [true, false]],

    //Maptop line
    [new IsomtericPoint(8,6), [true, false]],
    [new IsomtericPoint(9,7), [true, false]],
    [new IsomtericPoint(10,8), [true, false]],
    [new IsomtericPoint(11,9), [true, false]],
    [new IsomtericPoint(12,10), [true, false]],
    [new IsomtericPoint(13,11), [false, true]],

     //Mapright line
     [new IsomtericPoint(12,12), [true, true]],
     [new IsomtericPoint(10,12), [true, true]],
     [new IsomtericPoint(8,12), [true, true]],
     [new IsomtericPoint(6,12), [true, true]],
     [new IsomtericPoint(4,12), [true, true]],
     [new IsomtericPoint(2,12), [true, true]],
     [new IsomtericPoint(1,13), [true, true]],
]

for(let i = 0; i <= mapVertex.length; i++){
    isometric.drawTile(mapVertex[i][0], "gray", mapVertex[i][1]);
}