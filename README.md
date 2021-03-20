### Introduction

Javascript library, use to generate map in isometric more simply.
Current version is **version 1.0**
Implementing:
- Draw tiles (64x64)
- Draw Sprite (64x64)
- IsometricPoint for position of tiles
- IsometricTexturize (Parsor for map generator)


### How to create map

go in directory: `./isometrics/maps/map01.js` or create other `map0x.js`

using variable `var map = [][];`

composition of cell : "texture:height"

```javascript
var map = [
    ["grass: 3", "grass:2"],
    ["grass:2", "grass:2"]
]
```
####Adding new texture

go in directory: `./isometrics/materials/Materials.js`

edit dictionary:

```json
{"name_texture": "color_top_tile", "color_border_tile"}
```
exemple:

```json
{"lava": "orange", "darkorange"}
```
```json
{"redblock": "rgb(255,0,0)", "rgb(100,0,0)"}
```






