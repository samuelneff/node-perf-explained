/// <reference path='./types/user.d.ts' />

import sec = require('./controllers/security-controller');

function start():void {
    for(var i:number = 0; i<50; i++) {
        var date:Date = new Date();

        var user:User = {
            userName: 'user' + i,
            password: 'password'
        };

        //console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Starting ' + user.userName);
        sec.login(user, finish);
    }
}

function finish(user:User):void {
    var date:Date = new Date();
    //console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Finished ' + user.userName);
}

start();