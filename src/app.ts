class Department {
  // name: string;
  // private props
  private employees: string[] = [];
// using the readonly access modifier to prevent any property from being reassigned e.g id
  constructor(private readonly id: number = 0, public name: string) {
    this.id = id;
    this.name = name;
  }
  describe(this: Department) {
    console.log("Department:" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(12, "Accounting");
// accounting.id = 8;
console.log(accounting);
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();
