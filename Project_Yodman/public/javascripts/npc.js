import {playerX, playerY, playerDirX, playerDirY, reload} from "./player.js";
import {getTile} from "./modules/levelManager.js";
import {findPath} from "./modules/pathFinding.js";


const NPC_TYPE = Object.freeze({1:[1,0,0],2:[2,1,1],3:[3,1,1],4:[4,-1,-1]});

class Npc
{
    constructor(type = NPC_TYPE["1"],x,y)
    {
        this.type = type;
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.chasing = false;
    }

    calcNextCoordinates()
    {
        if(!this.chasing)
        {
            if(Math.sqrt((this.x - playerX)**2 + (this.y-playerY)**2) < 4)
            {
                this.chasing = true;
                return;
            }
            let i = Math.random();
            if(i < 0.25 && getTile(this.x,this.y).top != null)
            {
                this.move(getTile(this.x,this.y).top.x,getTile(this.x,this.y).top.y);
            }else if (i < 0.5 && getTile(this.x,this.y).bottom != null)
            {
                this.move(getTile(this.x,this.y).bottom.x,getTile(this.x,this.y).bottom.y);
            }else if (i < 0.75 && getTile(this.x,this.y).right != null)
            {
                this.move(getTile(this.x,this.y).right.x,getTile(this.x,this.y).right.y);
            }else if (i < 1 && getTile(this.x,this.y).left != null)
            {
                this.move(getTile(this.x,this.y).left.x,getTile(this.x,this.y).left.y);
            }


        }
        else
        {
            let path;
            switch(this.type)
            {
                case NPC_TYPE["1"]:
                    path = findPath(this.x,this.y,playerX,playerY);
                    break;
                case NPC_TYPE["2"]:
                case NPC_TYPE["3"]:
                        path = findPath(this.x,this.y,playerX+playerDirX,playerY+playerY);
                    break;
                case NPC_TYPE["4"]:
                    if(Math.sqrt((this.x - playerX)**2 + (this.y-playerY)**2) > 4)
                        path = findPath(this.x,this.y,playerX,playerY);
                    else
                        this.chasing = false;
                    break;
            }

            if(path == null || path.length <= 0) {
                this.chasing = false;
                return;
            }
            let tmp = path.pop();
            //console.log(tmp.y + " " + tmp.x + " === " + playerX + " " + playerY);
            this.move(tmp.x,tmp.y);
        }
    }

    move(x,y)
    {
        if(getTile(y,x).type === "+"){ reload();  return;}

        getTile(y,x).type = this.type[0] + "";
        getTile(this.x,this.y).type = "_";

        this.x = y;
        this.y = x;
    }

    reload()
    {
        console.log("reload");
        if(getTile(this.x,this.y).type !== "+")
            getTile(this.x,this.y).type = "_";

        this.x = this.startX;
        this.y = this.startY;
        getTile(this.x,this.y).type = this.type[0]+"";
        this.chasing = false;
    }


}

export {Npc, NPC_TYPE}