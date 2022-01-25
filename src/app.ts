class Department {
  // name: string;
  // private props
  private employees: string[] = [];

  constructor(private id: number, public name: string) {
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
console.log(accounting);
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();
