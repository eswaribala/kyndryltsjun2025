import { randomGender } from "../utils/randomGender";
import { Gender } from "./gender";
import {faker} from '@faker-js/faker';
import { Address } from "./address";
//basic data types
let userId: number;
let firstName: string;
let lastName: string;
let isActive: boolean;
let dob: Date;
let email: string;
let contactNumber: number;
let userGender: Gender;
let addresses:Address[] = [];
userId= faker.number.int({ min: 1, max: 1000 });
firstName= faker.person.firstName();
lastName= faker.person.lastName();
isActive= faker.datatype.boolean();
dob= faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
email= faker.internet.email({ firstName, lastName });
contactNumber= faker.number.int({ min: 99999000, max: 999999999 });
userGender= randomGender(Gender)
for(let i=0; i<3; i++){
    const address: Address = {
        street: faker.location.street(),
        doorNo: faker.location.buildingNumber(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    };
    addresses.push(address);
}
console.log(`User ID: ${userId}`);
console.log(`First Name: ${firstName}`);            
console.log(`Last Name: ${lastName}`);
console.log(`Is Active: ${isActive}`);
console.log(`Date of Birth: ${dob}`);
console.log(`Email: ${email}`);  

console.log(`Contact Number: ${contactNumber}`);
console.log(`Gender: ${userGender}`);   
// Accessing the first address's street name
console.log(`Addresses: ${JSON.stringify(addresses, null, 2)}`); // Pretty print addresses
addresses.forEach((address, index) => {
    console.log(`Address ${index + 1}:`);
    console.log(`  Street: ${address.street}`);
    console.log(`  Door No: ${address.doorNo}`);
    console.log(`  City: ${address.city}`);
    console.log(`  State: ${address.state}`);
    console.log(`  Zip Code: ${address.zipCode}`);
    console.log(`  Country: ${address.country}`);
});