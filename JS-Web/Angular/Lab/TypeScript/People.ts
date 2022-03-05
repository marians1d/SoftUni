abstract class Employee {
    salary: number;
    tasks: Array<string>;


    constructor(public name: string, public age: number) {
        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(currentTask);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);

        this.tasks.push(`${this.name} is working on a simple task.`);
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);

        this.tasks.push(`${this.name} is working on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }
}

export class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0

        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${this.name} is preparing a quarterly report.`);
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary + this.divident} this month.`);
    }
}