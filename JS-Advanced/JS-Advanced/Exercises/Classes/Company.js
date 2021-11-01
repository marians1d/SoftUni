class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position
        });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestSalary = 0;
        let bestDepartment;
        for (const department in this.departments) {
            let totalSalary = 0;

            for (const employee of this.departments[department]) {
                totalSalary += employee.salary;
            }

            let averageSalary =
                totalSalary / this.departments[department].length;

            if (averageSalary > bestSalary) {
                bestDepartment = department;
                bestSalary = averageSalary;
            }
        }

        const employees = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let message = '';
        message += `Best Department is: ${bestDepartment}\n`;
        message += `Average salary: ${bestSalary.toFixed(2)}\n`
        for (const employee of employees) {
            message += `${employee.name} ${employee.salary} ${employee.position}\n`
        }

        return message.trim();
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());








// Unexpected error: not equal: expected 'Best Department is: 
// Construction\n
// Average salary: 1500.00\n
// Stan 2000 architect\n
// Stanimir 2000 engineer\n
// Pesho 1500 electrical engineer\n
// Slavi 500 dyer\n
// ' to equal 'Best Department is: 
// Construction\n
// Average salary: 1500.00\n
// Stan 2000 architect\n
// Stanimir 2000 engineer\n
// Pesho 1500 electrical engineer\n
// Slavi 500 dyer'