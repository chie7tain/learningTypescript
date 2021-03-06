// in a situation where you don't know what type to declare a variable as, you can use the unknown type as it does not ensures that it can't just be reassigned to a different type.
let userInput: unknown;
// let userName: string;

userInput = "string";
userInput = "james";
// as in this case because username is a string but userInput is of type unknown
// userName = userInput;

// never type is used to specify what type a function that return anything even undefined is set
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
