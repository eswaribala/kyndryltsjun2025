import { createUser } from "../services/userservice";


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