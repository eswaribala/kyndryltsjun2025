import {faker} from '@faker-js/faker';
import { Route } from '../models/route';
import { checkRoute } from '../utils/checkRoute';

let routes:Route[] = [];
for(let i = 0; i < 100; i++) {
    const route: Route = {
        id: faker.string.uuid(),
        name: faker.company.catchPhrase(),
        startCity: faker.location.city(),
        endCity: faker.location.city(),
        distance: faker.number.int({ min: 50, max: 500 }), // distance in kilometers
        estimatedTime: faker.number.int({ min: 30, max: 300 }), // estimated time in minutes
        stops: faker.number.int({ min: 1, max: 10 }),
        isActive: faker.datatype.boolean()
    };
    routes.push(route);
}
console.log('status of routes:', checkRoute(routes));
