/// <reference path='../typings/node/node.d.ts' />

export function log(message:string):void {
    var time:Date = new Date();

    console.log(two(time.getHours()) + ':' +
                two(time.getMinutes()) + ':' +
                two(time.getSeconds()) + '.' +
                four(time.getMilliseconds()) + ' - ' +
                message);
}

function two(value:number):string {
    return places(value, 2);
}

function four(value:number):string {
    return places(value, 4);
}

function places(value:number, places:number):string {
    var s:string = value.toString();

    while(s.length < places) {
        s = '0' + s;
    }

    return s;
}
