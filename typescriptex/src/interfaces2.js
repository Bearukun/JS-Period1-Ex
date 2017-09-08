"use strict";
//b
var f1 = function (a, b, c) {
    var list = [a, b, c];
    return list;
};
console.log(f1("hello ", "world..", "!"));
//c
var f1Upper = function (a, b, c) {
    var list = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return list;
};
console.log(f1Upper("hello ", "world..", "!"));
//d
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
//e
f2(f1);
f2(f1Upper);
//f - For some reason it works?
var f3 = function (a, b) {
    var list = [a, b];
    return list;
};
f2(f3);
