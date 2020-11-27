var express = require('express');
var router = express.Router();
const url = require('url');

router.get('/', function(req, res, next) {
    process(req,res);
});

let add = function(par1,par2){return (par1+par2)};
let sub = function(par1,par2){return (par1-par2)};
let mul = function(par1,par2){return (par1*par2)};
let div = function(par1,par2){return (par1/par2)};

function process(request,responce) {

    const query= url.parse(request.url,true).query;
    let in1 = parseFloat(query['in1']);
    let in2 = parseFloat(query['in2']);
    let oper = query['oper'];
    let res;
    switch (oper)
    {
        case 'Add':
            res = add(in1,in2);
            break;
        case 'Sub':
            res = sub(in1,in2);
            break;
        case 'Mul':
            res = mul(in1,in2);
            break;
        case 'Div':
            res = div(in1,in2);
            break;
        default:
            res = "Could not calculate";
            break;
    }

    responce.render('formData',
        { title: 'Task c',
            content: request.url.toString(),
            first: in1,
            second:in2,
            oper: oper,
            result: res
        });
}

module.exports = router;
