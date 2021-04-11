const Intern = require('../lib/Intern');
 
describe("Initialize", () => {
  // Positive test
  it("should create an object with its 'name', 'id', and 'email' fields set to the values provided when called with the 'new' keyword", () => {
    // Arrange
    const name = 'John';
    const id = '1';
    const email = 'test@test.com';
    const school = 'UW';

    // Act
    const obj = new Intern(name, id, email, school);

    // Assert
    expect(obj.name).toEqual(name); 
    expect(obj.id).toEqual(id); 
    expect(obj.email).toEqual(email);
    expect(obj.school).toEqual(school);
  });
});

describe("getName", () => {
  it("Should return the value in the object's 'name' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const school = 'UW';

      const obj = new Intern(name, id, email, school);
      const returnedName = obj.getName();
      
      expect(returnedName).toEqual(name);
  });
});

describe("getId", () => {
  it("Should return the value in the object's 'id' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const school = 'UW';

      const obj = new Intern(name, id, email, school);
      const returnedId = obj.getId();
      
      expect(returnedId).toEqual(id);
  });
});

describe("getEmail", () => {
  it("Should return the value in the object's 'email' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const school = 'UW';

      const obj = new Intern(name, id, email, school);
      const returnedEmail = obj.getEmail();
      
      expect(returnedEmail).toEqual(email);
  });
});

describe("getSchool", () => {
  it("Should return the value in the object's 'school' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const school = 'UW';

      const obj = new Intern(name, id, email, school);
      const returnedSchool = obj.getSchool();
      
      expect(returnedSchool).toEqual(school);
  });
});

describe("getRole", () => {
  it("Should return 'Intern'", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const school = 'UW';

      const obj = new Intern(name, id, email, school);
      const role = obj.getRole();
      
      expect(role).toEqual("Intern");
  });
});