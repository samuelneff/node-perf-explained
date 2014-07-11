/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />

import express = require('express');
import securityApi = require('./api/security-api');

var app:express.Application = express();

/**
 * Configuration
 */
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/**
 * Routes
 */

app.post('/api/security/login', securityApi.login);

var port:number = process.env.PORT || 8090;

app.listen(port, function(){
    console.log('Server listening on port %d', port);
});
