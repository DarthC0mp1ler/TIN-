import {levelLayout,Tile} from "./levelManager.js";

function findPath(positionX, positionY, destinationX, destinationY)
{
    let path = Array();
    let queue = Array();
    let arrCpy = levelLayout;
    queue.push(arrCpy[positionY][positionX]);
    let tmp;
    //console.log("Enter " + queue.length);
    let i = 0;
    //console.log("start " + positionY + " " + positionX);
    loop: while(queue.length > 0 && i < 100)
    {
        tmp = queue.pop();
        //console.log(tmp.type);
        if(tmp.type === "+") break loop;
       /* console.log(tmp.x + " " + tmp.y +
            (tmp.top == null ? "undefined" : tmp.top.type) +
            " " + (tmp.bottom == null ? "undefined" : tmp.bottom.type) +
            " " + (tmp.left == null ? "undefined" : tmp.left.type) +
            " " + (tmp.right == null ? "undefined" : tmp.right.type));*/
        // console.log("============================================");
        //console.log(tileMatches(tmp.top,tmp.parent));
        // console.log(tileMatches(tmp.top,tmp.parent));
        if(tileMatches(tmp.top,tmp.parent)){
            //console.log("top" + tmp.top.type + " " + tmp.top.x + " " + tmp.top.y);
            console.log(isChildEmty(tmp.top));
            tmp.top.setParent(tmp);
            queue.push(tmp.top);
        }
        // console.log(tileMatches(tmp.bottom,tmp.parent));
        if(tileMatches(tmp.bottom,tmp.parent)){
            //console.log("Bottom" + tmp.bottom.type + " " + tmp.bottom.x + " " + tmp.bottom.y);
            tmp.bottom.setParent(tmp);
           queue.push(tmp.bottom);
        }
        // console.log(tileMatches(tmp.right,tmp.parent));
        if(tileMatches(tmp.right,tmp.parent)){
            //console.log("right" + tmp.right.type + " " + tmp.right.x + " " + tmp.right.y);
            tmp.right.setParent(tmp);
            queue.push(tmp.right);
        }
        // console.log(tileMatches(tmp.left,tmp.parent));
        if(tileMatches(tmp.left,tmp.parent)){
            //console.log(tmp.left.type);
            tmp.left.setParent(tmp);
            queue.push(tmp.left);
        }
        // console.log("============================================");
        //console.log("beforeSort " + queue.length);
        queue.sort((a,b) => { return b.distToPlayer - a.distToPlayer});
        /*let str = "";
        queue.forEach((a)=>{str += "[" + a.distToPlayer + " " + a.x + " " + a.y  + "]"});
        console.log(str);*/
        //console.log("after sort " + queue.length + " " + queue);
        i++;
    }
    //console.log(i);
    //console.log("tmp" + tmp + " " +tmp.type + "  : " + tmp.x + " " + tmp.y + " == " +tmp.parent + ": " + tmp.parent.x + " " + tmp.parent.y);
    //console.log(positionX,positionY,tmp.x,tmp.y);
    //console.log("Start=================================");
    if(i===100)return null;
    if(tmp == null) return null;
    while(tmp.y !== positionX || tmp.x !== positionY)
    {
        //console.log("logg tmp" + tmp + " " +tmp.type + "  " + tmp.parent.type);
        //console.log("tmp" + tmp + " " +tmp.type + "  : " + tmp.x + " " + tmp.y + " == " +tmp.parent + ": " + tmp.parent.x + " " + tmp.parent.y);
        //console.log(positionX,positionY,tmp.x,tmp.y);
        //console.log("pushb");
        path.push(tmp);
        //console.log("pusha");
        tmp = tmp.parent;
    }
    //console.log("=================================");

    //console.log("Path " + path.length);
    return path;
}

function tileMatches(child,parent)
{
    if(child == null) return false;
    if(child === parent) return false;
    //if(child.type === "+") return false;
    //return child != null && child !== parent;
    if(child.type === "1" || child.type === "2" || child.type === "3" || child.type === "4") return false;
    return true;
}

function isChildEmty(child){
    console.log("Comparer",child,child.type,"_",child.type==="_");
    return child.type==="_";
}

export{findPath}