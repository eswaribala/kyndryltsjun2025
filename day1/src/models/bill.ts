import { Route } from './route';
import { CarType } from './cartype'
export type Bill={
    billId: number
    route:Route,
    carType:CarType,
    noofPassengers:number,
    totalCost:number,

}