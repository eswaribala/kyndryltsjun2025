import { Vehicle } from '../models/vehicle.model';
export interface VehicleRepostory{

    getVehicleByRegistrationNumber(registrationNumber: string): Promise<Vehicle| null>;
    createVehicle(vehicleData: Vehicle): Promise<Vehicle>;
    updateVehicle(registrationNumber: string, vehicleColor: string): Promise<Vehicle| null>;
    deleteVehicle(registrationNumber: string): Promise<boolean>;
    getAllVehicles(): Promise<Vehicle[]|null>;

} 