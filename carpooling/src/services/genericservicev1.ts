import { GenericFacade } from '../facades/genericfacade'
import { Employee } from '../models/employee';
import { User } from '../models/user';
import { faker } from '@faker-js/faker';

export class GenericService implements GenericFacade<User,string> {
    private users: User[];
        constructor() {
            this.users = [];
        }   
    

    create(data: Employee): User {
         let user:User =data;
        this.users.push(user);
        return user; // Return the created user
    }
    getById(id: string): User | null {
         return this.users.find(user => user.id === id) || null; // Placeholder
    }
    update(id: string, data: Partial<User>): User{
       return new Employee(
            faker.string.uuid(),
            faker.person.firstName(),
            faker.person.lastName(),
            data.email || faker.internet.email(),
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
        ); // Placeholder for updated user  
    }
    delete(id: string): boolean {
        throw new Error('Method not implemented.');
    }
    list():User[] {
        throw new Error('Method not implemented.');
    }
} 