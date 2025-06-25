import { Booking } from '../facades/booking';
import { CarType } from './cartype';
export class SingleBooking implements Booking {
    allocation(cartype: CarType, pax: number): boolean {
        // For a single booking, we assume that any car type can accommodate one passenger.
        // This is a simplified logic; in a real-world scenario, you might have more complex rules.
        if (pax === 1) {
            console.log(`Single booking confirmed for ${cartype} with ${pax} passenger.`);
            return true;
        } else {
            console.log(`Single booking failed: cannot book for more than one passenger.`);
            return false;
        }   
    }
   
}