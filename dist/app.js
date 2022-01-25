"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department:" + this.name);
        return this;
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
var accountingCopy = { name: "james", describe: accounting.describe };
console.log(accountingCopy.describe());
//# sourceMappingURL=app.js.map