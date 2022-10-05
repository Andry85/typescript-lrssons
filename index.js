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
function greeter(fn) {
    fn('Hello, World');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function firstElement(arr) {
    return arr[0];
}
var s = firstElement(['a', 'b', 'c']);
console.log(s);
function showMan(name) {
    return "I am ".concat(name);
}
var myMan = showMan('Peter');
console.log(myMan);
function showFirstDayOfWeek(arr) {
    return arr[0];
}
var firstday = showFirstDayOfWeek(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
console.log(firstday);
var f1 = function () {
    return true;
};
var v1 = f1();
console.log(v1);
function paintShape(_a) {
    var shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    console.log('x coordinate at', xPos);
    // var xPos: number
    console.log('y coordinate at', yPos);
    // var yPos: number
    // ...
}
function showUserInfo(obg) {
    console.log(obg.age);
}
showUserInfo({ age: 25 });
function showBus(obj) {
    console.log(obj.seat);
}
showBus({
    price: 2000,
    seat: 8
});
function draw(circle) {
    console.log("\u0426\u0432\u0435\u0442 \u043A\u0440\u0443\u0433\u0430: ".concat(circle.color));
    console.log("\u0420\u0430\u0434\u0438\u0443\u0441 \u043A\u0440\u0443\u0433\u0430: ".concat(circle.radius));
}
draw({ color: 'red', raidus: 42 });
