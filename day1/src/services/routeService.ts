import {faker, ro} from '@faker-js/faker';
import { Route } from '../models/route';
import { checkRoute } from '../utils/checkRoute';
import { getRouteProps } from '../utils/closuredata';

//mandatory type from optional type
type RequiredRoute = Required<Route>;

let routes:Route[] = [];
for(let i = 0; i < 100; i++) {
    const route: RequiredRoute = {
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


type ExtractedRoute =  ReturnType<typeof getRouteProps>;
let routeProps: ExtractedRoute={
    id: faker.string.uuid(),
    name: faker.company.name(),
    startCity: faker.location.city(),
    endCity: faker.location.city()
};
console.log('routeProps:', routeProps.id,routeProps.name);;