const User = require('../models/User.js');

describe('User', () => {
  it('should create a user successfully with valid input', () => {
    const user = new User("John", 123, 123);
    const result = user.createUser();
    expect(result).toBe("Register successfully");
  });

  it('should throw an error when creating a user with missing information', () => {
    const user = new User("Jane", 33, null);
    expect(() => {
      user.createUser();
    }).toThrow("Couldn't create because have a missing information");
  });

  it('should throw an error when creating a user with missing password confirmation', () => {
    const user = new User("Alice", 123, undefined);
    expect(() => {
      user.createUser();
    }).toThrow("Couldn't create because have a missing information");
  });
});
