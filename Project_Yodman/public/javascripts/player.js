import {getTile, levelLayout, collectiblesCounter,decreaseCollectibles} from "./modules/levelManager.js";

var playerX, playerY;
var playerDirX,playerDirY;
var playerStartX, playerStartY;
var score;
var lives;
var loaded = false;
var eaten = false;
var reloaded = false;

var scoreLabel,livesLabel;


function setUpPlayer(pX,pY)
{
    playerX = pX;
    playerY = pY;
    playerStartX = pX;
    playerStartY = pY;

    playerDirX = 0;
    playerDirY = 0;

    lives = 3;

    scoreLabel = document.getElementById("scor");
    score = parseInt(scoreLabel.innerText);
    livesLabel = document.getElementById("lives");

    loaded = true;
}

function displayStats()
{
    if(scoreLabel == null)
        return false;
    scoreLabel.innerText = score;
    livesLabel.innerText = lives;
    return true;
}

function setDirection(x,y)
{
    playerDirX = x;
    playerDirY = y;
}
function setPosition(x,y)
{
    playerX = x;
    playerY = y;
}

function changeEaten(){eaten = !eaten;}

function calcDist()
{
    for (let i = 0; i < levelLayout.length; i++) {
        for (let j = 0; j < levelLayout[i].length; j++) {
            levelLayout[i][j].setDistToPlayer((j - playerX)**2 + (i-playerY)**2);
        }
    }
}

function moveAndCheckBlue(isBlue)
{
    if(playerDirX === 0 && playerDirY === 0) return false;

    let tile = getTile(playerX + playerDirX, playerY + playerDirY);
    console.log("Player: x = " + playerX + " ; y = " + playerY + "\nDirection: x = " + playerDirX + " ; y = " + playerDirY + "\nNext tile: " + tile.type);

    switch(getTile(playerX + playerDirX, playerY + playerDirY).type) {
        case "#": {
            setDirection(0, 0);
            return false;
        }
        case "1":
        case "2":
        case "3":
        case "4":
        {
            //if enemy
            //if not blue game over
            //if blue + 200
            reload();
            return false;
        }
        case "_":
        {
            if(tile.hasCollectible) {
                score += 10;
                decreaseCollectibles();
                changeEaten();
            }
            getTile(playerX + playerDirX, playerY + playerDirY).type = "+";
            getTile(playerX,playerY).type = "_";
            getTile(playerX + playerDirX, playerY + playerDirY).removeCollectible();
            setPosition(playerX + playerDirX, playerY + playerDirY);
            return false;
        }
        case "*":
        {
            getTile(playerX + playerDirX, playerY + playerDirY).type = "+";
            getTile(playerX,playerY).type = "_";
            if(getTile(playerX + playerDirX, playerY + playerDirY).hasCollectible){
                score += 50;
                decreaseCollectibles();
                changeEaten();
            }
            getTile(playerX + playerDirX, playerY + playerDirY).removeCollectible();
            setPosition(playerX + playerDirX,playerY + playerDirY);
            return true;
        }
    }
}

function reload()
{
    lives--;
    setDirection(0,0);
    getTile(playerX,playerY).type = "_";
    setPosition(playerStartX,playerStartY);
    getTile(playerX,playerY).type = "+";
    setReload();
}

function setReload()
{
    reloaded = !reloaded;
}


export {setUpPlayer,displayStats,loaded,score,setDirection,moveAndCheckBlue,reloaded,eaten,playerDirX,playerDirY,changeEaten,setReload,lives,playerX,playerY,calcDist,reload}

