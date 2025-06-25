import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec  from "../../swagger";
import vehicleRoute from "./vehicleroute";
//import corporateRoutes from "./corporate.routes";

export class Routes{
    constructor(app:Application) {
        // Mount Swagger UI
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.use("/api/vehicles",vehicleRoute)
        //app.use("/api/corporates",corporateRoutes)
    }
}