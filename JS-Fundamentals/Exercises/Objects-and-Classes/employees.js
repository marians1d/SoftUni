function employees(employees) {
    for (let employee of employees) {
        let currentEmployee = {
            name: employee,
            personalNum: employee.length,
        };

        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personalNum}`);
    }
}