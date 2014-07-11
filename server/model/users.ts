/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />


export function getUser(userName:string, callback:(user:User) => void):void {
    console.log('    ' + new Date().valueOf() + 'Simulating getting from database : ' + userName);
    setTimeout(getUserImpl, 500, userName, callback);
}

function getUserImpl(userName:string, callback:(user:User) => void):void {
    var user:User = {
        userName: userName,
        password: "password"
    };
    console.log('    ' + new Date().valueOf() + 'Simulating response from database: ' + userName);
    callback(user);
}