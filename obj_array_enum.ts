enum Role{
  Admin,Read_Only,Author
}
const person: {
  name: string;
  age: number;
  hobbies: [ number, string ];
} = {
  name: "Ifeanyi",
  age: 30,
  hobbies: [30, "Cooking"],
};

console.log(person.name);
