const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer(function (request, responce) {

    if (request.url === '/') {
        createHtml(responce,null);
        return;
    } else {
        process(request,responce);
    }
});

function createHtml(responce,result) {
    fs.readFile('./7a.html', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let file = data.toString();
            if(result !== null)
            {
                file = file.replace("<!--res-->","<label>Result = " + result +"</label>");

            }
            responce.writeHead(200, {"Content-Type": "text/html"});
            responce.end(file);

        }
    });
}

let add = function(par1,par2){return (par1+par2)};
let sub = function(par1,par2){return (par1-par2)};
let mul = function(par1,par2){return (par1*par2)};
let div = function(par1,par2){return (par1/par2)};

function process(request,responce) {
    responce.writeHead(200, {"Content-Type": "text/html"});
    const query= url.parse(request.url,true).query;
    let req = request.url.toString().split("?")[0];
    let in1 = parseFloat(query['in1']);
    let in2 = parseFloat(query['in2']);
    switch (req)
    {
        case '/Add':
            createHtml(responce,add(in1,in2));
            break;
        case '/Sub':
            createHtml(responce,sub(in1,in2));
            break;
        case '/Mul':
            createHtml(responce,mul(in1,in2));
            break;
        case '/Div':
            createHtml(responce,div(in1,in2));
            break;
        default:
            createHtml(responce,"Could not calculate");
            break;
    }
}

server.listen(8000, "127.0.0.1");
console.log("server is running: ");