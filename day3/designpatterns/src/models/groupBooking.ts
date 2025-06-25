import { Booking } from '../facades/booking';
import { CarType } from './cartype';
import {faker} from '@faker-js/faker';
export class GroupBooking implements Booking {
    allocation(cartype: CarType, pax: number): boolean {
        let capacity = faker.number.int({ min: 4, max: 6 }); // Simulating car capacity for the example
        // For a group booking, we assume that the car type must accommodate the number of passengers.
        if (pax > 1 &&  capacity>= pax) {
            console.log(`Group booking confirmed for ${cartype} with ${pax} passengers.`);
            return true;
        } else {
            console.log(`Group booking failed: ${cartype} cannot accommodate ${pax} passengers.`);
            return false;
        }
    }
    
}   
