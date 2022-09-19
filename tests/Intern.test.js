const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', ()=>{
        it('should return an Intern object containing a name, id, email, and school property', () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });
        it('should set the values for each parameter when initialized', () => {
            const obj = new Intern('Tom', 1, 'tom@email.com', 'Harvard');

            expect(obj.name).toEqual('Tom');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('tom@email.com');
            expect(obj.school).toEqual('Harvard');
        });
    });
    describe('Get school', () => {
        it('Should return the school of the object when called', () => {
            const obj = new Intern('Tom', 1, 'tom@email.com', 'Harvard');
            expect(obj.getSchool()).toEqual('Harvard');
        });
    });
    describe('Get Role', () => {
        it('Should return the role of the object when called', () => {
            const obj = new Intern('Tom', 1, 'tom@email.com', 'Harvard');
            expect(obj.getRole()).toEqual('Intern');
        });
    });
});