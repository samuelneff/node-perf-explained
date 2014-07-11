/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../../typings/express/express.d.ts' />
/// <reference path='../types/user.d.ts' />

import express = require('express');
import securityController = require('../controllers/security-controller');

export function login(req:express.Request, res:express.Response):void {
    var inUser:User = <User>req.body;

    function processLogin(outUser:User):void {
        res.send(outUser);
    }

    securityController.login(inUser, processLogin);

}

