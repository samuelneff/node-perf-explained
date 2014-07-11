/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />
var usersModel = require('../model/users');

function login(inUser, callback) {
    function testUser(outUser) {
        if (outUser !== undefined && outUser.password == 'password') {
            // do stuff to log user in..
            callback(outUser);
            return;
        }
        console.log('Login failed.');
    }

    usersModel.getUser(inUser.userName, testUser);
}
exports.login = login;
//# sourceMappingURL=security-controller.js.map
