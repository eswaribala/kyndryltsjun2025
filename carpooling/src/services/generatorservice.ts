import {faker} from '@faker-js/faker';
//generator
function* generateRandomString() {
    yield faker.person.firstName();
    yield faker.person.lastName();
    yield faker.internet.email();   
    yield faker.person.jobTitle();
    yield faker.internet.password();
    yield faker.phone.number();

}

for(const value of generateRandomString()) {
    console.log(value);
}   


function* generatePaginatedData():Generator<any>{
    let page = 1;
    while (page <= 10) {
        yield `https://jsonplaceholder.typicode.com/users/${page}`;
        page++;
    }

}

for(const value of generatePaginatedData()) {
    console.log(value);
}
