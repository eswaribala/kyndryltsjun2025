import { Employee } from '../models/employee';
import {faker} from '@faker-js/faker';
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
            faker.commerce.department() // department
        );
        users.push(user);
    }
    return users;   

}