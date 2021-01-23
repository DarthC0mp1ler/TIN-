import * as imageManager from './modules/imageManager.js'
import * as levelManager from './modules/levelManager.js'
import * as inputManager from './modules/inputManager.js'
import * as playerManager from './player.js'
import {calcDist, eaten} from "./player.js";
import {collectiblesCounter, levelLayout} from "./modules/levelManager.js";
import {Npc, NPC_TYPE} from "./npc.js";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
const levelUrl = "http://localhost:3000/levels/level"
var running = false;

var startWidth = 800, startHeight = 450;

var blockSize = 30;
var dotsCount = 0;

var isBlueMode = false;
var startX = 0, startY = 0;

var npc = Array();

function SetUP() {
    document.getElementById("next").style.display="none";
    canvas.width = startWidth;
    canvas.height = startHeight;
    fillScreen();
    drawLoading("Loading Resources");

    imageManager.loadImage("http://localhost:3000/images/sprites.png");
    console.log("START " + document.getElementById("levelNo").innerText);
    try {
        levelManager.getData(levelUrl + document.getElementById("levelNo").innerText + ".lvl");
    }catch (e)
    {
        ctx.font = '48px serif';
        ctx.fillStyle = "white";
        ctx.fillText("More levels soon", 0, 40);
    }
    inputManager.setUpInput();
    //TODO add soundManager manager
    setTimeout(function () {
        StartLoop()
    }, 500);
}

function StartLoop() {
    fillScreen();
    drawLoading("Loading Resources");
    if (levelManager.loaded && imageManager.loaded) {
        levelManager.layoutLevel();
        if (levelManager.levelLayout.length < levelManager.levelLayout[0].length) {
            blockSize = canvas.height / levelManager.levelLayout.length;
            if(blockSize > 50) blockSize = 50;
            canvas.width = blockSize * levelManager.levelLayout[0].length;
        } else {
            blockSize = canvas.width / levelManager.levelLayout[0].length;
            if(blockSize > 50) blockSize = 50;
            canvas.height = blockSize * levelManager.levelLayout.length;
        }
        fillScreen();
        running = true;
        setInterval(gameLoop, 500);
        setNpc();
    } else {

        setTimeout(function () {
            StartLoop()
        }, 500);
    }

}

function drawLoading(text) {
    ctx.font = '48px serif';
    ctx.fillStyle = "white";
    let dots = "";
    if (dotsCount !== 0) {

        for (let i = 0; i < dotsCount; i++)
            dots += "."
    }
    ctx.fillText(text + dots, 0, 40);

    dotsCount += 1;
    if (dotsCount === 4) dotsCount = 0;
}

function fillScreen(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLevel() {
    let x = startX, y = startY;
    for (let i = 0; i < levelManager.levelLayout.length; i++) {
        x = startX;
        for (let j = 0; j < levelManager.levelLayout[i].length; j++) {
            switch (levelManager.levelLayout[i][j].type) {
                case "#":
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        16 * 2, 0, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                case "_":
                    if (levelManager.levelLayout[i][j].hasCollectible) {
                        ctx.drawImage(
                            imageManager.spriteSheet,
                            16 * 3, 0, 16, 16,
                            x, y, blockSize, blockSize
                        );
                    }
                    break;
                case "+":
                    if (!playerManager.loaded) playerManager.setUpPlayer(j, i);
                    if (playerManager.eaten) {
                        if (playerManager.playerDirX < 0) {
                            ctx.drawImage(
                                imageManager.spriteSheet,
                                16, 0, 16, 16,
                                x, y, blockSize, blockSize
                            );
                        } else if (playerManager.playerDirX > 0) {
                            ctx.drawImage(
                                imageManager.spriteSheet,
                                16 * 9, 16, 16, 16,
                                x, y, blockSize, blockSize
                            );
                        } else if (playerManager.playerDirY < 0) {
                            ctx.drawImage(
                                imageManager.spriteSheet,
                                16 * 9, 0, 16, 16,
                                x, y, blockSize, blockSize
                            );
                        } else if (playerManager.playerDirY > 0) {
                            ctx.drawImage(
                                imageManager.spriteSheet,
                                160, 0, 16, 16,
                                x, y, blockSize, blockSize
                            );
                        }
                        playerManager.changeEaten();

                        break;
                    }

                    ctx.drawImage(
                        imageManager.spriteSheet,
                        0, 0, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                case "1": {
                    let imX = 0;
                    if (isBlueMode)
                        imX = 16 * 4;
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        imX, 16, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                }
                case "2": {
                    let imX = 16;
                    if (isBlueMode)
                        imX = 16 * 4;
                    console.log(imX);
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        imX, 16, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                }
                case "3": {
                    let imX = 16 * 2;
                    if (isBlueMode)
                        imX = 16 * 4;
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        imX, 16, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                }
                case "4": {
                    let imX = 16 * 3;
                    if (isBlueMode)
                        imX = 16 * 4;
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        imX, 16, 16, 16,
                        x, y, blockSize, blockSize
                    );
                    break;
                }
                case "=": {
                    ctx.drawImage(
                        imageManager.spriteSheet,
                        16 * 6, 0, 16 * 3, 16 * 2,
                        x - 2 * blockSize, y - blockSize, blockSize * 3, blockSize * 2
                    );
                    break;
                }
            }
            x += blockSize;
        }
        y += blockSize;
    }
}


function setNpc(){
    for(let i = 0; i < levelManager.levelLayout.length; i++)
    {
        for(let j = 0; j < levelManager.levelLayout[i].length; j++)
        {
            if(levelManager.levelLayout[i][j].type === "1" ||
                levelManager.levelLayout[i][j].type === "2" ||
                levelManager.levelLayout[i][j].type === "3" ||
                levelManager.levelLayout[i][j].type === "4"
            )
            {
                npc.push(new Npc(NPC_TYPE[levelManager.levelLayout[i][j].type],j,i));
            }
        }
    }
}

function reloadNpc()
{
    for(let i = 0; i < npc.length; i++) {
        npc[i].reload();
    }
    playerManager.setReload();
}

function gameLoop() {
    if(collectiblesCounter === 0)
    {
        setTimeout(()=>nextLevel(),1000);
    }
    if (running) {
        console.log(collectiblesCounter);
        fillScreen("black");

        calcDist();
        if(playerManager.reloaded){
            reloadNpc();
            fillScreen("red");
            running = false;
            setTimeout(revive,1000);
        }
        else
        for(let i = 0; i < npc.length; i++) {
            npc[i].calcNextCoordinates();
        }
        drawLevel();
        if(!playerManager.displayStats())
        {
            running = false;
            return;
        }
        isBlueMode = playerManager.moveAndCheckBlue(isBlueMode);
        //console.log("Looping");
        if(playerManager.lives === 0)
        {
            gameOver();
        }

    }
}

function nextLevel()
{
    running = false;
    document.getElementById("nextLevelNo").value = (parseInt(document.getElementById("levelNo").innerText) + 1);
    document.getElementById("score").value = playerManager.score;
    document.getElementById("next").style.display="block";
}

function gameOver()
{
    running = false;
    window.location.href = 'http://localhost:3000/gameover?score='+playerManager.score;
}

function revive()
{
    running = true;
}


SetUP();