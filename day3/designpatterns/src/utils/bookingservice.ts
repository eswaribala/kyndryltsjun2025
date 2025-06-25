import { Booking } from "../facades/booking";
import { CarType } from "../models/cartype";
import { SingleBooking } from "../models/singleBooking";
import { GroupBooking } from "../models/groupBooking";

//factory function to book a cab based on the type and number of passengers
function bookcab(type: "single" | "group", pax: number): boolean {
    if (type === "single") {
        // Simulate a single booking
        return new SingleBooking().allocation(CarType.Sedan, pax)
    } else if (type === "group") {
        // Simulate a group booking
       return new GroupBooking().allocation(CarType.SUV, pax)
    } else {
       return new SingleBooking().allocation(CarType.Hatchback, pax)
    }
}

bookcab("single", 1);
bookcab("group", 5);    