var spriteSheet;
var loaded = false;

function loadImage(imageUrl)
{
    spriteSheet = new Image();
    spriteSheet.src = imageUrl;
    spriteSheet.onload = () => loaded = true;
}

export {spriteSheet, loaded, loadImage}
