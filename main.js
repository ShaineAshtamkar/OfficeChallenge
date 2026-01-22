//write your code here to make the tests pass

class Document {
    constructor(employeeName) {
        this.EmployeeName = employeeName;
    }
}
class Employee {
    constructor(employeeName) {
        this.name = employeeName
    }
    work(office) {
        for (let i = 0; i < 10; i++) {
            office.documents.push(new Document(this.name))
        }
    }
}
class Manager {
    constructor(managerName) {
        this.name = managerName;
        this.employees = [];
    }
    hireEmployee(employeeName) {
        const e = new Employee(employeeName);
        this.employees.push(e);
    }
    askEmployeesToWork(office) {
        for (let i = 0; i < this.employees.length; i++) {
            this.employees[i].work(office);
        }
    }
}
class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log('Clean')
    }

}

class Office {

    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
        this.employees = [];
    }
    hireManager(managerName) {
        const m = new Manager(managerName);
        this.managers.push(m);
    }
    hireCleaner(cleanerName) {
        const c = new Cleaner(cleanerName);
        this.cleaners.push(c);
    }
    hireEmployee(employeeName) {
        const e = new Employee(employeeName);
        this.employees.push(e);
    }
    startWorkDay() {
        for (let i = 0; i < this.managers.length; i++) {
            this.managers[i].askEmployeesToWork(this);
        }

    }
}