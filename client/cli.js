/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../server/types/user.d.ts' />
/// <reference path='../typings/node-rest-client/node-rest-client.d.ts' />
var rest = require('node-rest-client');
var timer = require('../util/timer');
var http = require('http');

http.globalAgent.maxSockets = 50;

var client = new rest.Client();

var waitingOnUsers = 0;

function logUsersIn(count, next) {
    console.log('');
    console.log('');
    timer.log('Starting test with ' + count + ' users.');
    console.log('');
    console.log('');

    waitingOnUsers += count;

    for (var i = 0; i < count; i++) {
        var user = {
            userName: 'user' + i,
            password: 'password'
        };
        var data = {
            data: user,
            headers: { 'Content-Type': 'application/json' }
        };

        timer.log('Logging in ' + user.userName);
        client.post('http://localhost:8090/api/security/login', data, logUserInHandler);
    }

    function logUserInHandler(json) {
        var user = JSON.parse(json);
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

logUsersIn(1, function () {
    logUsersIn(5, function () {
        logUsersIn(20, function () {
            logUsersIn(100);
        });
    });
});
//# sourceMappingURL=cli.js.map
