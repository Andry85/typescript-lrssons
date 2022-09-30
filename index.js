function printCoords(pt) {
    console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B 'x': ".concat(pt.x));
    console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B 'y': ".concat(pt.y));
}
printCoords({ x: 3, y: 7 });
function getBear(animal) {
    console.log("Name animal': ".concat(animal.name));
    console.log("Food animal: ".concat(animal.honey));
}
var bear = getBear({ name: 'Medvid', honey: true });
function configure(x) {
    // ...
}
configure({ width: 100 });
configure('auto');
configure('automatic');
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + input;
        // (parameter) padding: number
    }
    return padding + input;
    // (parameter) padding: string
}
console.log(padLeft(100, 'teset'));
