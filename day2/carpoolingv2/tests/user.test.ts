
import { Employee } from '../src/models/employee';
import {fa, faker} from '@faker-js/faker';
describe('User Instance Tests', () => {
  const user=new Employee(
            faker.string.uuid(),
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.internet.password(),
            faker.phone.number(),
            faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            faker.datatype.boolean(),
            new Date(),
            new Date(),
            faker.string.uuid(), // employeeId
            faker.commerce.department(), // department
             faker.string.uuid(), // gstNumber
            faker.company.name(), // companyName
            faker.location.streetAddress(), // address
            faker.location.state(), // state
            faker.location.zipCode() // pinCode
        );


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


});





