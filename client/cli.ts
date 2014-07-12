/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../server/types/user.d.ts' />
/// <reference path='../typings/node-rest-client/node-rest-client.d.ts' />

import rest = require('node-rest-client');
import timer = require('../util/timer');
import http = require('http');

http.globalAgent.maxSockets = 50;

var client:rest.Client = new rest.Client();

var waitingOnUsers:number = 0;

function logUsersIn(count:number, next?:() => void):void {

    console.log('');
    console.log('');
    timer.log('Starting test with ' + count + ' users.');
    console.log('');
    console.log('');

    waitingOnUsers += count;

    for(var i:number = 0; i<count; i++) {
        var user:User = {
            userName: 'user' + i,
            password: 'password'
        };
        var data:rest.ActionDataInterface<User> = {
            data: user,
            headers: {'Content-Type': 'application/json'}
        };

        timer.log('Logging in ' + user.userName);
        client.post('http://localhost:8090/api/security/login', data, logUserInHandler);
    }

    function logUserInHandler(json:string):void {
        var user:User = JSON.parse(json);
        timer.log('Logged in  ' + user.userName);

        waitingOnUsers--;

        if (waitingOnUsers == 0) {
            timer.log('All users logged in.');
            if (next) {
                next();
            }
        }
    }
}

logUsersIn(1, function() {
    logUsersIn(5, function() {
        logUsersIn(20, function() {
            logUsersIn(100);
        })
    })
});



