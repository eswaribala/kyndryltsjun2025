import { User } from '../models/user';
import {faker} from '@faker-js/faker';
export function createUser():User[]{
    const users: User[] = [];
    for (let i = 0; i < 10; i++) {
        const user = new User(
            faker.string.uuid(),
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.internet.password(),
            faker.phone.number(),
            faker.datatype.boolean(),
            new Date(),
            new Date()
        );
        users.push(user);
    }
    return users;   

}