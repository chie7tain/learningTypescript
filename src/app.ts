class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this:Department) {
    console.log("Department:" + this.name);
    return this;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
const accountingCopy = {name:"james",describe:accounting.describe}
console.log(accountingCopy.describe());