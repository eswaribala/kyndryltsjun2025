import { faker } from '@faker-js/faker';
import { Employee } from '../models/employee';
export function createUser():Employee[]{
    const users: Employee[] = [];
    for (let i = 0; i < 10; i++) {
        const user = new Employee(
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
        users.push(user);
    }
    return users;   

}