/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />

// SERVER

import express = require('express');
var app:express.Application = express();

import http = require('http');

http.globalAgent.maxSockets = 10;


app.get('*', (req:express.Request, res:express.Response) => {
    //setTimeout(() => res.send(req.query.i), 500);
    res.send(req.query.i);
});

app.listen(8099);

// CLIENT

function start():void {

    for(var i:number = 0; i<50; i++) {
        console.log(new Date().getSeconds() + ':' + new Date().getMilliseconds() + ' - Sending ' + i);
        http.get('http://localhost:8099?i=' + i, responseHandler);
    }

    function responseHandler(res:http.ClientResponse):void {
        res.on('data', body =>
            console.log(new Date().getSeconds() + ':' + new Date().getMilliseconds() + ' - Received ' + body)
        );
    }
}

start();