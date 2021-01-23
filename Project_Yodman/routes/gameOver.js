var express = require('express');
var router = express.Router();
var url = require('url');
var fs = require('fs');

router.get('/', function (req, res, next) {
    const query = url.parse(req.url, true).query;
    let score = parseInt(query['score']);
    let highscore = "";
    fs.readFile('./public/highscores.hsc', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let saved = parseInt(data);

        if (saved < score) {
            highscore = score;
        } else {
            highscore = saved;
        }
        fs.writeFile('./public/highscores.hsc', highscore, function (err) {
            if (err) return console.log(err);
            console.log(highscore + ">>> highscores.hsc");
            res.render('gameOver',{currentScore: score, highScore: highscore});
        });
    });
});

module.exports = router;