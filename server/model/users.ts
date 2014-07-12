/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />
import timer = require('../../util/timer');

export function getUser(userName:string, callback:(user:User) => void):void {
    timer.log('Simulating getting from database : ' + userName);
    setTimeout(getUserImpl, 500, userName, callback);
}

function getUserImpl(userName:string, callback:(user:User) => void):void {
    var user:User = {
        userName: userName,
        password: "password"
    };
    timer.log('Simulating response from database: ' + userName);
    callback(user);
}