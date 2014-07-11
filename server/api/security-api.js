/// <reference path='../../typings/node/node.d.ts' />
/// <reference path='../../typings/express/express.d.ts' />
/// <reference path='../types/user.d.ts' />
var securityController = require('../controllers/security-controller');

function login(req, res) {
    var inUser = req.body;

    function processLogin(outUser) {
        res.send(outUser);
    }

    securityController.login(inUser, processLogin);
}
exports.login = login;
//# sourceMappingURL=security-api.js.map
