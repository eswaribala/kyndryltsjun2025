//make bill ReadOnly Type
import { Bill } from '../models/bill';
import { randomCarType } from '../utils/randomcarType';
import { CarType } from '../models/cartype';
type ReadOnlyBill = Readonly<Bill>;

export let bills: ReadOnlyBill[] = [];
for (let i = 0; i < 100; i++) {
    const bill: ReadOnlyBill = {
        billId: i + 1,
        route: {
            id: `route-${i + 1}`,
            name: `Route ${i + 1}`,
            startCity: `City ${i + 1}`,
            endCity: `City ${i + 2}`,
            distance: Math.floor(Math.random() * 500) + 50, // distance in kilometers
            estimatedTime: Math.floor(Math.random() * 300) + 30, // estimated time in minutes
            stops: Math.floor(Math.random() * 10) + 1,
            isActive: true
        },
        carType: randomCarType(CarType),
        noofPassengers: Math.floor(Math.random() * 4) + 1, // number of passengers between 1 and 4
        totalCost: Math.floor(Math.random() * 500) + 100 // total cost in currency units
    };
    // Setting a fixed billId for all bills
    //bill.billId=359536; // setting a fixed billId for all bills
    bills.push(bill);
}
bills.forEach((bill) => {
    console.log(`Bill ID: ${bill.billId}, Route: ${bill.route.name}, Car Type: ${bill.carType}, Passengers: ${bill.noofPassengers}, Total Cost: ${bill.totalCost}`);
});