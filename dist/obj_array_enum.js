"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
var person = {
    name: "Ifeanyi",
    age: 30,
    hobbies: [30, "Cooking"],
};
console.log(person.name);
//# sourceMappingURL=obj_array_enum.js.map