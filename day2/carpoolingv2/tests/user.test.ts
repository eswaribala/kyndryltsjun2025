
import { Employee } from '../src/models/employee';
import {fa, faker} from '@faker-js/faker';
import { createUser } from '../src/utils/generateusers';
describe('User Instance Tests', () => {
  const user=createUser()[0]; // Get the first user from the generated users

it('is User Object Created', () => {
   
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Employee);
    
 });

it('should create a user object with the correct properties', () => {
   
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('firstName');
});
it('loop over user object properties and check existence', () => {
   
  const fieldNames=Object.keys(user);
  fieldNames.forEach((fieldName) => {
    expect(user).toHaveProperty(fieldName);
  });
});

it.each(createUser())('should create a user object with the correct properties from createUser function', (user) => {
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Employee);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('password');
    expect(user).toHaveProperty('phone');
   
   
  });   


});





