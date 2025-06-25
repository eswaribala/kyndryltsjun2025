import { Vehicle } from '../../db/models/vehicle.model';
import vehicleRepository from '../../db/repositories/vehiclerepoimpl';
export class VehicleController{

    async createVehicle(req: any, res: any): Promise<Vehicle|any> {
         //validation
        if (!req.body.registrationNumber || !req.body.make || !req.body.model) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        let vehicle:Vehicle=req.body;

        try{

            const savedResponse:Vehicle= await vehicleRepository.createVehicle(vehicle);
             return res.status(201).send({
                 'data':savedResponse,
                 'message':'customer successfully created'
             })

        }catch(error){
            return res.status(500).send({

                'message': `customer could not be created ${error}`
            })
        }

    }

    async getVehicleByRegistrationNumber(req: any, res: any): Promise<Vehicle|any> {
        const registrationNumber = req.params.registrationNumber;

        try {
            const vehicle: Vehicle | null = await vehicleRepository.getVehicleByRegistrationNumber(registrationNumber);
            if (!vehicle) {
                return res.status(404).send({
                    message: `Vehicle with registration number ${registrationNumber} not found.`
                });
            }
            return res.status(200).send(vehicle);
        } catch (error) {
            return res.status(500).send({
                message: `Error fetching vehicle: ${error}`
            });
        }
    }   

    async updateVehicle(req: any, res: any): Promise<Vehicle|any> {
        const registrationNumber = req.params.registrationNumber;
        const vehicleColor = req.body.color;

        try {
            const updatedVehicle: Vehicle | null = await vehicleRepository.updateVehicle(registrationNumber, vehicleColor);
            if (!updatedVehicle) {
                return res.status(404).send({
                    message: `Vehicle with registration number ${registrationNumber} not found.`
                });
            }
            return res.status(200).send(updatedVehicle);
        } catch (error) {
            return res.status(500).send({
                message: `Error updating vehicle: ${error}`
            });
        }
    }

    async deleteVehicle(req: any, res: any): Promise<any> {
        const registrationNumber = req.params.registrationNumber;

        try {
            const deleted: boolean = await vehicleRepository.deleteVehicle(registrationNumber);
            if (!deleted) {
                return res.status(404).send({
                    message: `Vehicle with registration number ${registrationNumber} not found.`
                });
            }
            return res.status(200).send({
                message: `Vehicle with registration number ${registrationNumber} successfully deleted.`
            });
        } catch (error) {
            return res.status(500).send({
                message: `Error deleting vehicle: ${error}`
            });
        }
    }   

    async getAllVehicles(req: any, res: any): Promise<Vehicle[]|any> {
        try {
            const vehicles: Vehicle[] | null = await vehicleRepository.getAllVehicles();
            if (!vehicles || vehicles.length === 0) {
                return res.status(404).send({
                    message: 'No vehicles found.'
                });
            }
            return res.status(200).send(vehicles);
        } catch (error) {
            return res.status(500).send({
                message: `Error fetching all vehicles: ${error}`
            });
        }
    }   
    
}