const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', ()=>{
        it('should return an Manager object containing a name, id, email, and officenumber property', () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });
        it('should set the values for each parameter when initialized', () => {
            const obj = new Manager('Tom', 1, 'tom@email.com', 1);

            expect(obj.name).toEqual('Tom');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('tom@email.com');
            expect(obj.officeNumber).toEqual(1);
        });
    });
    describe('Get officenumber', () => {
        it('Should return the officenumber of the object when called', () => {
            const obj = new Manager('Tom', 1, 'tom@email.com', 1);
            expect(obj.getOfficeNumber()).toEqual(1);
        });
    });
    describe('Get Role', () => {
        it('Should return the role of the object when called', () => {
            const obj = new Manager('Tom', 1, 'tom@email.com', 1);
            expect(obj.getRole()).toEqual('Manager');
        });
    });
});