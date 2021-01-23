import {setDirection} from "../player.js";

function setUpInput()
{
    document.body.addEventListener("keydown",onKeyDown);
}

function onKeyDown(e)
{
    //left arrow 37
    //right arrow 39
    //up arrow 38
    //down arrow 40

    let x = 0;
    let y = 0;
    switch (e.keyCode)
    {
        case 37: //left
            console.log("left");
            x = -1;
            y = 0;
            break;
        case 39: //right
            console.log("right");
            x = 1;
            y = 0;
            break;
        case 38: //up
            console.log("up")
            x = 0;
            y = -1;
            break;
        case 40: //down
            console.log("down");
            x = 0;
            y = 1;
            break;
    }
    setDirection(x,y);

}


export {setUpInput}