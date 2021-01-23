var sound
var playing;

function setUp()
{
    loadSound("http://localhost:3000/sound/sound1.wav");
    playing = false;
}

function loadSound(src) {
    sound = document.createElement("audio");
    sound.src = src;
}

function toggle()
{
    if(playing)
    {
        sound.pause();
    }
    else
    {
        sound.play();
    }
    playing = !playing;
}



setUp();