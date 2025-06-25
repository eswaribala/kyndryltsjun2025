import { Router } from "express";
import { Vehicle } from "../../db/models/vehicle.model";
import { VehicleController } from "../controllers/vehiclecontroller";

export class VehicleRoute{

    vehicleController:VehicleController
    router: Router;
    constructor() {
        this.vehicleController = new VehicleController();
        this.router = Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        /**
 * @openapi
 * /api/vehicles/v1.0:
 *   post:
 *     summary: Create a new vehicle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - registrationNumber
 *               - make
 *               - model
 *               - year
 *               - color
 *               - chassisNumber
 *               - engineNumber
 *               - fuelType  
 *               - dateAdded
 *             properties:
 *               registrationNumber:
 *                 type: string
 *                 example: "TN-21-0334"
 *               make:
 *                 type: string
 *                 example: "Honda"
 *               model:
 *                 type: string
 *                 example: "XUV"
 *               color:
 *                 type: string *                
 *                 example: "Red"
 *               chassisNumber:
 *                 type: string
 *                 example: "CH1234567890"
 *               engineNumber:
 *                 type: string
 *                 example: "EN1234567890"
 *               fuelType:
 *                 type: string 
 *                 example: "Petrol"
 *               year:
 *                 type: integer
 *                 example: 2020
 *               dateAdded:
 *                 type: date
 *                 example: "2023-10-01"    
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Invalid input
 */

        this.router.post("/v1.0", (req, res) => this.vehicleController.createVehicle(req, res));
        
        this.router.get("/v1.0:registrationNumber", (req, res) => this.vehicleController.getVehicleByRegistrationNumber(req, res));
        
        
        this.router.put("/v1.0:registrationNumber", (req, res) => this.vehicleController.updateVehicle(req, res));
        
        
        this.router.delete("/v1.0:registrationNumber", (req, res) => this.vehicleController.deleteVehicle(req, res));
        /**
 * @openapi
 * /api/vehicles/v1.0:
 *   get:
 *     summary: Get all vehicles (with optional filters)
 *     
 *     responses:
 *       200:
 *         description: List of vehicles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  registrationNumber:
 *                   type: string
 *                  make:
 *                   type: string
 *                  model:
 *                   type: string
 *                  coloe:
 *                   type: string
 *                  year:
 *                   type: integer
 *                  dateAdded:
 *                   type: date
 *                  fuelType:
 *                   type: string
 *                  chassisNumber: 
 *                   type: string
 *                  engineNumber:
 *                   type: string
 */
        this.router.get("/v1.0", (req, res) => this.vehicleController.getAllVehicles(req, res));
    }   

}
export default new VehicleRoute().router