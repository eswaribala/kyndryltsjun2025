import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../../../src/swagger"
import customerRoute from "./customer.route";
//import corporateRoutes from "./corporate.routes";

export class Routes{
    constructor(app:Application) {
        // Mount Swagger UI
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.use("/api/customers",customerRoute)
        //app.use("/api/corporates",corporateRoutes)
    }
}