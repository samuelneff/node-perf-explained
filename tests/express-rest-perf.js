/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />
/// <reference path='../typings/node-rest-client/node-rest-client.d.ts' />
// SERVER
var express = require('express');
var app = express();

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.post('/', function (req, res) {
    setTimeout(function () {
        return res.send(req.body);
    }, 500);
});

app.listen(8099);

// CLIENT
var rest = require('node-rest-client');

var client = new rest.Client();

function start() {
    for (var i = 0; i < 50; i++) {
        console.log(new Date().getSeconds() + new Date().getMilliseconds() + ' - Sending ' + i);

        client.post('http://localhost:8099', { data: { i: i }, headers: { 'Content-Type': 'application/json' } }, responseHandler);
    }

    function responseHandler(json) {
        var o = JSON.parse(json);
        console.log(new Date().getSeconds() + new Date().getMilliseconds() + ' - Received ' + o.i);
    }
}

start();
//# sourceMappingURL=express-rest-perf.js.map
