import {fa, faker} from '@faker-js/faker';
import { r } from '@faker-js/faker/dist/airline-BUL6NtOJ';
export function getRouteProps(){
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        startCity: faker.location.city(),
        endCity: faker.location.city(),      
    }
}

export function getData():string | number | boolean|object {
    let data:any = {};
    if(faker.number.int({ min: 0, max: 3 }) === 0) {
        data= faker.string.uuid();
    }else if(faker.number.int({ min: 0, max: 3 }) === 1) {
        data= faker.number.int({ min: 0, max: 100 });
    }else
     data= faker.datatype.boolean();
     return{
        datatype:data
     }
}