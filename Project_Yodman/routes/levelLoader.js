var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('level', { number: 'Sample',scor: "sample" });
});

router.post('/', function(req, res, next) {
    let levelNO = parseInt(req.body.levelNo);
    let score = parseInt(req.body.score);
    console.log(req.body);
    res.render('level', { number: levelNO, scor: score});
});


module.exports = router;