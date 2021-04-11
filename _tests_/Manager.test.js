const Manager = require('../lib/Manager');
 
describe("Initialize", () => {
  // Positive test
  it("should create an object with its 'name', 'id', and 'email' fields set to the values provided when called with the 'new' keyword", () => {
    // Arrange
    const name = 'John';
    const id = 1;
    const email = 'test@test.com';
    const officeNumber = 2;

    // Act
    const obj = new Manager(name, id, email, officeNumber);

    // Assert
    expect(obj.name).toEqual(name); 
    expect(obj.id).toEqual(id); 
    expect(obj.email).toEqual(email);
    expect(obj.officeNumber).toEqual(officeNumber);
  });
});

describe("getName", () => {
  it("Should return the value in the object's 'name' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const officeNumber = 2;

      const obj = new Manager(name, id, email, officeNumber);
      const returnedName = obj.getName();
      
      expect(returnedName).toEqual(name);
  });
});

describe("getId", () => {
  it("Should return the value in the object's 'id' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const officeNumber = 2;

      const obj = new Manager(name, id, email, officeNumber);
      const returnedId = obj.getId();
      
      expect(returnedId).toEqual(id);
  });
});

describe("getEmail", () => {
  it("Should return the value in the object's 'email' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const officeNumber = 2;

      const obj = new Manager(name, id, email, officeNumber);
      const returnedEmail = obj.getEmail();
      
      expect(returnedEmail).toEqual(email);
  });
});

describe("getOfficeNumber", () => {
  it("Should return the value in the object's 'officeNumber' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const officeNumber = 2;

      const obj = new Manager(name, id, email, officeNumber);
      const returnedOfficeNumber = obj.getOfficeNumber();
      
      expect(returnedOfficeNumber).toEqual(officeNumber);
  });
});

describe("getRole", () => {
  it("Should return 'Manager'", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const officeNumber = 2;

      const obj = new Manager(name, id, email, officeNumber);
      const role = obj.getRole();
      
      expect(role).toEqual("Manager");
  });
});