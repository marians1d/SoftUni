const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('Company Administration Tests', () => {
    describe('Hiring Employee', () => {
        it('Invalid input - non Programmer position', () => {
            expect(() => companyAdministration.hiringEmployee('string', 'string', 0)).to.throw(Error, 'We are not looking for workers for this position.');
        });

        it('Valid input - has required experience', () => {
            expect(companyAdministration.hiringEmployee('string', 'Programmer', 3)).to.equal('string was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('string', 'Programmer', 5)).to.equal('string was successfully hired for the position Programmer.');
        });

        it('Valid input - has required experience', () => {
            expect(companyAdministration.hiringEmployee('string', 'Programmer', 2)).to.equal('string is not approved for this position.');
            expect(companyAdministration.hiringEmployee('string', 'Programmer', 1)).to.equal('string is not approved for this position.');
        });
    });

    describe('Calculate Salary', () => {
        it('Valid input - less than or equal to 160 hours', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(10.5)).to.equal(157.5);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('Valid input - more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });

        it('Invalid input - non number hours', () => {
            expect(() => companyAdministration.calculateSalary('string')).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(null)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, 'Invalid hours');
        });

        it('Invalid input - negative hours', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(-10)).to.throw(Error, 'Invalid hours');
        });
    });

    describe('Fired Employee', () => {
        const employees = ['Petar', 'Ivan', 'George'];
        it('Valid input - fire first employee', () => {
            expect(companyAdministration.firedEmployee(employees, 0)).to.equal('Ivan, George');
        });

        it('Invalid input - non array employees', () => {
            expect(() => companyAdministration.firedEmployee({}, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(null, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(0, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee('string', 0)).to.throw(Error, 'Invalid input');
        });

        it('Invalid input - non integer number index', () => {
            expect(() => companyAdministration.firedEmployee(employees, 1.5)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, 'string')).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, [])).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, {})).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, undefined)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, null)).to.throw(Error, 'Invalid input');
        });

        it('Invalid input - out of range index', () => {
            expect(() => companyAdministration.firedEmployee(employees, -1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, employees.length)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(employees, employees.length + 3)).to.throw(Error, 'Invalid input');
        });

    });    
});