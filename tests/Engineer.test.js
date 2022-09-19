const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', ()=>{
        it('should return an Engineer object containing a name, id, email, and GitHub property', () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("gitHub" in obj).toEqual(true);
        });
        it('should set the values for each parameter when initialized', () => {
            const obj = new Engineer('Tom', 1, 'tom@email.com', 'tom0123');

            expect(obj.name).toEqual('Tom');
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual('tom@email.com');
            expect(obj.gitHub).toEqual('tom0123');
        });
    });
    describe('Get GitHub', () => {
        it('Should return the GitHub of the object when called', () => {
            const obj = new Engineer('Tom', 1, 'tom@email.com', 'tom0123');
            expect(obj.getGithub()).toEqual('tom0123');
        });
    });
    describe('Get Role', () => {
        it('Should return the role of the object when called', () => {
            const obj = new Engineer('Tom', 1, 'tom@email.com', 'tom0123');
            expect(obj.getRole()).toEqual('Engineer');
        });
    });
});