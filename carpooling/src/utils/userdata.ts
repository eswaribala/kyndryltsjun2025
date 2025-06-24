import { User } from "../models/user";
import { createUser, UserService } from "../services/userservice";
import { faker } from '@faker-js/faker';

//invoke
let userService = new UserService();
userService.createUser(
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
            , faker.string.uuid(), // gstNumber
            faker.company.name(), // companyName
            faker.location.streetAddress(), // address
            faker.location.state(), // state
            faker.location.zipCode() // pinCode
        )
userService.listUsers().then(users => {
    users.forEach(user => { 
        console.log(`User ID: ${user.id}`);
        console.log(`First Name: ${user.firstName}`);
        console.log(`Last Name: ${user.lastName}`);
        console.log(`Email: ${user.email}`);        
        console.log(`Phone: ${user.phone}`);
        console.log(`Is Driver: ${user.isDriver}`);
        console .log(`Created At: ${user.createdAt}`);
        console.log(`Updated At: ${user.updatedAt}`);   
        console.log('---------------------------');
    })
});

/*
createUser().forEach((user) => {
    console.log(`User ID: ${user.id}`);
    console.log(`First Name: ${user.firstName}`);
    console.log(`Last Name: ${user.lastName}`);
    console.log(`Email: ${user.email}`);        
    console.log(`Phone: ${user.phone}`);
    console.log(`Is Driver: ${user.isDriver}`);
    console .log(`Created At: ${user.createdAt}`);
    console.log(`Updated At: ${user.updatedAt}`);   
    console.log('---------------------------');
});
*/