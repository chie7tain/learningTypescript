"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n1;
}
// since this function does not return anything, it is inferred to be of type void
function printResult(numb) {
    console.log("Result :" + numb);
}
printResult(add(5, 12));
// assigning a return type of undefined to a function would throw an error because it is not possible to infer the return type of a function that does not return anything
// you can create a function type in two ways
// 1. using the function keyword and setting it as a value to a variable
var combineValues;
// this does not allow typescript to detect the expected behavior of the function
// 2. specifying the function type of the function you want to store, its parameters and return type and then assigning it to a variable
var combineValues2;
// combineValues2 = add;
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
addAndHandle(20, 30, printResult);
var test;
test = function (q, w) { return q + w; };
console.log(test(1, 5));
//# sourceMappingURL=functionTypes.js.map