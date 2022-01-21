function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    return `${phrase}: ${n1 + n2}`;
  } else {
    return;
  }
}

const numb1 = 5;
const numb2 = 7;

const result = add(numb1, numb2, true, "Hello ");
console.log(result);
const userName = "Max";
userName = "Anna";
