import { CarType } from "./cartype";

export type Vehicle={
    vehicleId: string; // Unique identifier for the vehicle
    type: CarType; // Type of the vehicle (e.g., car, bus, etc.)
    model: string; // Model of the vehicle
    licensePlate: string; // License plate number of the vehicle
    capacity: number; // Seating capacity of the vehicle
    isActive: boolean; // Indicates if the vehicle is currently active
    
}