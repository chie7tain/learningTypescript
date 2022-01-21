// this is an example of type aliases
type Combinable = number | string;
type User = { name: string; age: number; address: string };
let age:[number,string];
age = [1, '2'];
let john: User = { name: "john", age: 30, address: "123 main st" };

// create enum type Admin user
enum UserType {
  Admin,
  User,
}

