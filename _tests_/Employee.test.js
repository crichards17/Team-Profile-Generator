const Employee = require('../lib/Employee');
 
describe("Initialize", () => {
  // Positive test
  it("should create an object with its 'name', 'id', and 'email' fields set to the values provided when called with the 'new' keyword", () => {
    // Arrange
    const name = 'John';
    const id = 1;
    const email = 'test@test.com';

    // Act
    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.name).toEqual(name); 
    expect(obj.id).toEqual(id); 
    expect(obj.email).toEqual(email);
  });
});

describe("getName", () => {
    it("Should return the value in the object's 'name' field", () => {
        const name = 'John';
        const id = 1;
        const email = 'test@test.com';

        const obj = new Employee(name, id, email);
        const returnedName = obj.getName();
        
        expect(returnedName).toEqual(name);
    });
});

describe("getId", () => {
    it("Should return the value in the object's 'id' field", () => {
        const name = 'John';
        const id = 1;
        const email = 'test@test.com';

        const obj = new Employee(name, id, email);
        const returnedId = obj.getId();
        
        expect(returnedId).toEqual(id);
    });
});

describe("getEmail", () => {
    it("Should return the value in the object's 'email' field", () => {
        const name = 'John';
        const id = 1;
        const email = 'test@test.com';

        const obj = new Employee(name, id, email);
        const returnedEmail = obj.getEmail();
        
        expect(returnedEmail).toEqual(email);
    });
});