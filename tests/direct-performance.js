function start() {
    for (var i = 0; i < 50; i++) {
        var date = new Date();
        console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Starting ' + i);
        setTimeout(finish, 500, i);
    }
}

function finish(i) {
    var date = new Date();
    console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Finished ' + i);
}

start();
//# sourceMappingURL=direct-performance.js.map
