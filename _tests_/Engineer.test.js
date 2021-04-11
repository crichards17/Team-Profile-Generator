const Engineer = require('../lib/Engineer');
 
describe("Initialize", () => {
  // Positive test
  it("should create an object with its 'name', 'id', and 'email' fields set to the values provided when called with the 'new' keyword", () => {
    // Arrange
    const name = 'John';
    const id = '1';
    const email = 'test@test.com';
    const gitHub = 'gitHubTest'

    // Act
    const obj = new Engineer(name, id, email, gitHub);

    // Assert
    expect(obj.name).toEqual(name); 
    expect(obj.id).toEqual(id); 
    expect(obj.email).toEqual(email);
    expect(obj.gitHub).toEqual(gitHub);
  });
});

describe("getName", () => {
  it("Should return the value in the object's 'name' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const gitHub = 'testhub';

      const obj = new Engineer(name, id, email, gitHub);
      const returnedName = obj.getName();
      
      expect(returnedName).toEqual(name);
  });
});

describe("getId", () => {
  it("Should return the value in the object's 'id' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const gitHub = 'testhub';

      const obj = new Engineer(name, id, email, gitHub);
      const returnedId = obj.getId();
      
      expect(returnedId).toEqual(id);
  });
});

describe("getEmail", () => {
  it("Should return the value in the object's 'email' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const gitHub = 'testhub';

      const obj = new Engineer(name, id, email, gitHub);
      const returnedEmail = obj.getEmail();
      
      expect(returnedEmail).toEqual(email);
  });
});

describe("getGitHub", () => {
  it("Should return the value in the object's 'gitHub' field", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const gitHub = 'testhub';

      const obj = new Engineer(name, id, email, gitHub);
      const returnedGitHub = obj.getGitHub();
      
      expect(returnedGitHub).toEqual(gitHub);
  });
});

describe("getRole", () => {
  it("Should return 'Engineer'", () => {
      const name = 'John';
      const id = 1;
      const email = 'test@test.com';
      const gitHub = 'testhub';

      const obj = new Engineer(name, id, email, gitHub);
      const role = obj.getRole();
      
      expect(role).toEqual("Engineer");
  });
});