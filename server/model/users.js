/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />
var timer = require('../../util/timer');

function getUser(userName, callback) {
    timer.log('Simulating getting from database : ' + userName);
    setTimeout(getUserImpl, 500, userName, callback);
}
exports.getUser = getUser;

function getUserImpl(userName, callback) {
    var user = {
        userName: userName,
        password: "password"
    };
    timer.log('Simulating response from database: ' + userName);
    callback(user);
}
//# sourceMappingURL=users.js.map
