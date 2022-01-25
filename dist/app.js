"use strict";
var Department = /** @class */ (function () {
    // using the readonly access modifier to prevent any property from being reassigned e.g id
    function Department(id, name) {
        if (id === void 0) { id = 0; }
        this.id = id;
        this.name = name;
        // name: string;
        // private props
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department:" + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department(12, "Accounting");
// accounting.id = 8;
console.log(accounting);
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map