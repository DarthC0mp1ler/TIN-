class Tile {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        if (type === "+")
            this.hasCollectible = false;
        else
            this.hasCollectible = true;
    }

    setDistToPlayer(dist)
    {
        this.distToPlayer = dist;
    }

    setRight(tile) {
        this.right = tile;
    }

    setLeft(tile) {
        this.left = tile;
    }

    setTop(tile) {
        this.top = tile;
    }

    setBottom(tile) {
        this.bottom = tile;
    }

    removeCollectible() {
        this.hasCollectible = false;
    }

    setParent(parent)
    {
        this.parent = parent;
    }
}

var levelLayout;
var loaded = false;
var textFile;
var collectiblesCounter = 0;

function getData(file) {
    fetch(file)
        .then(s => s.text())
        .then(t => textFile = t).then(t => loaded = true)
}

function layoutLevel() {
    let textArray = textFile.split(/\n/);
    let rows = textArray.length;
    let cols = textArray[0].length - 1;

    levelLayout = Array(rows);

    for (let i = 0; i < rows; i++) {
        levelLayout[i] = Array(cols);
        for (let j = 0; j < cols; j++) {
            levelLayout[i][j] = new Tile(textArray[i][j], i, j);
            if(levelLayout[i][j].type==="_") collectiblesCounter++;
        }
    }

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (levelLayout[i - 1][j].type !== "#") levelLayout[i][j].setBottom(levelLayout[i - 1][j]);
            if (levelLayout[i + 1][j].type !== "#") levelLayout[i][j].setTop(levelLayout[i + 1][j]);
            if (levelLayout[i][j - 1].type !== "#") levelLayout[i][j].setLeft(levelLayout[i][j - 1]);
            if (levelLayout[i][j + 1].type !== "#") levelLayout[i][j].setRight(levelLayout[i][j + 1]);
        }
    }

    loaded = true;
}

function decreaseCollectibles()
{
    collectiblesCounter--;
}



function getTile(x, y) {
    return levelLayout[y][x];
}

export {Tile, textFile, loaded, layoutLevel, getData, levelLayout, getTile, collectiblesCounter,decreaseCollectibles}