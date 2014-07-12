
function start():void {
    for(var i:number = 0; i<50; i++) {
        var date:Date = new Date();
        console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Starting ' + i);
        setTimeout(finish, 500, i);
    }
}

function finish(i:number):void {
    var date:Date = new Date();
    console.log(date.getSeconds() + '.' + date.getMilliseconds() + ' - Finished ' + i);
}

start();