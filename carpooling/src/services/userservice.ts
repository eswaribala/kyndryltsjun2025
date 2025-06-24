import { Employee } from '../models/employee';
import {faker} from '@faker-js/faker';
import { UserFacade } from '../facades/userfacade';
import { User } from '../models/user';
export class UserService implements UserFacade {

    private users: User[];
    constructor() {
        this.users = [];
    }   

    async createUser(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob: Date, isDriver: boolean, createdAt: Date, updatedAt: Date, employeeId: string, department: string,gstNumber: string, companyName: string, address: string, state: string, pinCode: string): Promise<User> {
        
        let user:User =new Employee(id, firstName, lastName, email, password, phone, dob, isDriver, createdAt, updatedAt, employeeId, department,gstNumber, companyName, address, state, pinCode);
        this.users.push(user);
        return user; // Return the created user
    }

    async getUserById(userId: string): Promise<User | null> {
        // Implementation to fetch user by ID
        return this.users.find(user => user.id === userId) || null; // Placeholder
    }

    async updateUser(email?: string): Promise<Employee> {
        // Implementation to update user
        return new Employee(
            faker.string.uuid(),
            faker.person.firstName(),
            faker.person.lastName(),
            email || faker.internet.email(),
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

    async deleteUser(userId: string): Promise<boolean> {
        // Implementation to delete user
        return true; // Placeholder
    }

    async listUsers(): Promise<Array<User>> {
        // Implementation to list users
        return this.users; // Placeholder
    }
}






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