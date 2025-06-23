import {fa, faker} from '@faker-js/faker';
export function getRouteProps(){
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        startCity: faker.location.city(),
        endCity: faker.location.city(),      
    }
}