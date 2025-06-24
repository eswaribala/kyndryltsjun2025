import {User} from '../src/models/user'; // Adjust the import path as necessary
import {fa, faker} from '@faker-js/faker';
describe('User class', () => {
  it('should create a User object', () => {
    const user = new User(faker.string.uuid(),faker.person.firstName(), faker.internet.email(), new Date(), new Date());

    expect(user).toBeDefined();                // ✅ Object exists
    expect(user).toBeInstanceOf(User);         // ✅ Correct class
    expect(user.name.length).toBeGreaterThanOrEqual(6)         // ✅ Field check
     // ✅ Partial shape check
  });
});