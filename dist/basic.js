"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        return phrase + ": " + (n1 + n2);
    }
    else {
        return;
    }
}
var numb1 = 5;
var numb2 = 7;
var result = add(numb1, numb2, true, "Hello ");
console.log(result);
var userName = "Max";
// userName = "Anna";
//# sourceMappingURL=basic.js.map