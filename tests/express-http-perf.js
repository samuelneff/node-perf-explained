/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />
// SERVER
var express = require('express');
var app = express();

var http = require('http');

http.globalAgent.maxSockets = 10;

app.get('*', function (req, res) {
    //setTimeout(() => res.send(req.query.i), 500);
    res.send(req.query.i);
});

app.listen(8099);

// CLIENT
function start() {
    for (var i = 0; i < 50; i++) {
        console.log(new Date().getSeconds() + ':' + new Date().getMilliseconds() + ' - Sending ' + i);
        http.get('http://localhost:8099?i=' + i, responseHandler);
    }

    function responseHandler(res) {
        res.on('data', function (body) {
            return console.log(new Date().getSeconds() + ':' + new Date().getMilliseconds() + ' - Received ' + body);
        });
    }
}

start();
//# sourceMappingURL=express-http-perf.js.map
