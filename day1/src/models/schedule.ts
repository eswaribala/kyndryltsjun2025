import { Route } from './route';
import { DriverProfile } from './driver';
import { Vehicle } from './vehicle';
export type Schedule={
    scheduleId: string; // Unique identifier for the schedule
    route: Route; // Identifier for the route associated with this schedule
    startTime: Date; // Start time of the schedule
    endTime: Date; // End time of the schedule
    isActive: boolean; // Indicates if the schedule is currently active
    driver?: DriverProfile; // Optional identifier for the driver assigned to this schedule
    vehicle?: Vehicle; // Optional identifier for the vehicle assigned to this schedule
}