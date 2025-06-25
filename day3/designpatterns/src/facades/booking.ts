import { CarType } from '../models/cartype'
export interface Booking {
    allocation(cartype:CarType, pax:number ): boolean;
}