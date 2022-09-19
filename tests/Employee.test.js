const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an Employee object containing a name, id, and email property', () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
        it('should set the values for each parameter when initialized', () => {
            const obj = new Employee('Tom', 1, 'tom@email.com');

            expect(obj.name).toEqual('Tom');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('tom@email.com');
        });
    });
    describe('Get Name', () => {
        it('Should return the name of the object when called', () => {
            const obj = new Employee('Tom', 1, 'tom@email.com');

            expect(obj.getName()).toEqual('Tom');
        });
    });
    describe('Get ID', () => {
        it('Should return the ID of the object when called', () => {
            const obj = new Employee('Tom', 1, 'tom@email.com');
            expect(obj.getId()).toEqual(1);
        });
    });
    describe('Get Email', () => {
        it('Should return the email of the object when called', () => {
            const obj = new Employee('Tom', 1, 'tom@email.com');
            expect(obj.getEmail()).toEqual('tom@email.com');
        });
    });
    describe('Get Role', () => {
        it('Should return the role of the object when called', () => {
            const obj = new Employee('Tom', 1, 'tom@email.com');
            expect(obj.getRole()).toEqual('Employee');
        });
    });
});