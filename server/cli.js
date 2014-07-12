/// <reference path='./types/user.d.ts' />
var sec = require('./controllers/security-controller');

function start() {
    for (var i = 0; i < 50; i++) {
        var date = new Date();

        var user = {
            userName: 'user' + i,
            password: 'password'
        };

        //console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Starting ' + user.userName);
        sec.login(user, finish);
    }
}

function finish(user) {
    var date = new Date();
    //console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Finished ' + user.userName);
}

start();
//# sourceMappingURL=cli.js.map
