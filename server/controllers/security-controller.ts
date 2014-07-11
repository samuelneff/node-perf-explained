/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />

import usersModel = require('../model/users');

export function login(inUser:User, callback:(user:User) => void):void {

    function testUser(outUser:User):void {
        if (outUser !== undefined && outUser.password == 'password') {
            // do stuff to log user in..
            callback(outUser);
            return;
        }
        console.log('Login failed.');
    }

    usersModel.getUser(inUser.userName, testUser);
}
