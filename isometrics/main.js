var canvas = new Canvas(document.getElementById('canvas'));
canvas.size(window.innerWidth,window.innerHeight);
canvas.background('skyblue');

var isometric = new Isometric(canvas.graphics);

for(let y = 0; y < map.length; y++){
    for(let x = 0; x < map[y].length; x++){
        if (map[y][x] != null)
            var texture = new IsometricTexturize(map[y][x]);
            isometric.drawTile(
                new IsomtericPoint(x, y, texture.getHeight()),
                texture.getTexture(),
                false,
                x != map[y].length && map[y][x+1] ==  map[y][x] ? false  : true,
                y + 1 >= map.length  ? false : true
            );
    }
}

isometric.drawSprite(new IsomtericPoint(0, 0, 4), "trees");