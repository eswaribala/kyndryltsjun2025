import { Vehicle } from "../models/vehicle.model";
import { VehicleRepostory } from "./vehiclerepo";

export class VehicleRepositoryImpl implements VehicleRepostory{
   async getVehicleByRegistrationNumber(registrationNumber: string): Promise<Vehicle | null> {
      try{
          return await Vehicle.findByPk(registrationNumber);

      }catch (error) {
         console.error("Error fetching vehicle by registration number:", error);
         throw error; // Re-throw the error for further handling
      }
    
    }
    async createVehicle(vehicleData: Vehicle): Promise<Vehicle> {
        
        try{
            // Assuming vehicleData is an instance of Vehicle
           return await Vehicle.create({
                registrationNumber: vehicleData.registrationNumber,
                make: vehicleData.make,
                model: vehicleData.model,
                year: vehicleData.year,
                color: vehicleData.color,
                fuelType: vehicleData.fuelType,
                createdAt: new Date(),
                updatedAt: new Date()
            });             
          
            
        }catch (error) {
            console.error("Error creating vehicle:", error);
            throw error; // Re-throw the error for further handling
        }
    }
    async updateVehicle(registrationNumber: string, vehicleColor: string): Promise<Vehicle | null> {
        try{
            // Find the vehicle by registration number
            const vehicle = await Vehicle.findByPk(registrationNumber);
            if (!vehicle) {
                throw new Error(`Vehicle with registration number ${registrationNumber} not found.`);
            }

            // Update the vehicle properties
           
            vehicle.color = vehicleColor || vehicle.color;
          

            // Save the updated vehicle
            await vehicle.save();
            return vehicle;

        }catch (error) {
            console.error("Error updating vehicle:", error);
            throw error; // Re-throw the error for further handling
        }

    }
    async deleteVehicle(registrationNumber: string): Promise<boolean> {
        try{
            return await Vehicle.destroy({
                where: { registrationNumber: registrationNumber }
            }).then((deletedCount) => {
                if (deletedCount > 0) {
                    return true; // Vehicle deleted successfully
                } else {
                    return false; // No vehicle found with the given registration number
                }
            })
        }catch (error) {
            console.error("Error deleting vehicle:", error);
            throw error; // Re-throw the error for further handling
        }
    }
    async getAllVehicles(): Promise<Vehicle[] | null> {
        
        try {
            return await Vehicle.findAll();
        } catch (error) {
            console.error("Error fetching all vehicles:", error);
            throw error; // Re-throw the error for further handling
        }
    }
   
   
    
}

export default new VehicleRepositoryImpl();