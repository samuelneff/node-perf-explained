/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../types/user.d.ts' />
function getUser(userName, callback) {
    console.log('    ' + new Date().valueOf() + 'Simulating getting from database : ' + userName);
    setTimeout(getUserImpl, 500, userName, callback);
}
exports.getUser = getUser;

function getUserImpl(userName, callback) {
    var user = {
        userName: userName,
        password: "password"
    };
    console.log('    ' + new Date().valueOf() + 'Simulating response from database: ' + userName);
    callback(user);
}
//# sourceMappingURL=users.js.map
