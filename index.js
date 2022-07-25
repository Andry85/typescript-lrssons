var potision = {
    name: 'programmer',
    salary: 1000
};
var addr = {
    country: 'Belarus',
    city: 'minsk'
};
var employee = {
    name: 'andrew',
    potision: potision,
    addr: addr
};
console.log(employee);
function make(arr, func) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        sum += func(elem);
    }
    return sum;
}
var res = make([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res);
