/// <reference path='../typings/node/node.d.ts' />
function log(message) {
    var time = new Date();

    console.log(two(time.getHours()) + ':' + two(time.getMinutes()) + ':' + two(time.getSeconds()) + '.' + four(time.getMilliseconds()) + ' - ' + message);
}
exports.log = log;

function two(value) {
    return places(value, 2);
}

function four(value) {
    return places(value, 4);
}

function places(value, places) {
    var s = value.toString();

    while (s.length < places) {
        s = '0' + s;
    }

    return s;
}
//# sourceMappingURL=timer.js.map
