
import {Router} from "express";
import CustomerController from "../controllers/customer.controller";

class CustomerRoute{
    router:Router;
    customerController:CustomerController;

    constructor() {
        this.router = Router();
        this.customerController=new CustomerController();
        this.initializeRoutes()
    }

    initializeRoutes(){
         /**
 * @openapi
 * /api/customers/v1.0:
 *   post:
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               middleName:
 *                 type: string
 *                 example: A.
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               contactNo:
 *                 type: integer
 *                 format: int64
 *                 example: 9876543210
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: MySecret123
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Invalid input
 */
        this.router.post("/v1.0",this.customerController.create)
        
  /**
 * @openapi
 * /api/customers/v1.0:
 *   get:
 *     summary: Get all customers (with optional filters)
 *     
 *     responses:
 *       200:
 *         description: List of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  customerId:
 *                   type: integer
 *                  firstName:
 *                   type: string
 *                  middleName:
 *                   type: string
 *                  lastName:
 *                   type: string
 *                  contactNo:
 *                   type: integer
 *                  email:
 *                   type: string
 */
        this.router.get("/v1.0",this.customerController.findAll)
          /**
 * @openapi
 * /api/customers/v1.0/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer's unique ID
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Customer details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 customerId:
 *                   type: integer
 *                 firstName:
 *                   type: string
 *                 middleName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 contactNo:
 *                   type: integer
 *                 email:
 *                   type: string
 *       404:
 *         description: Customer not found
 */
        this.router.get("/v1.0/:id",this.customerController.findById)
        /**
 * @openapi
 * /api/customers/v1.0:
 *   put:
 *     summary: Update a customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 */
        this.router.put("/v1.0",this.customerController.updateCustomer)
        /**
 * @openapi
 * /api/customers/v1.0:
 *   delete:
 *     summary: Delete all customers
 *     responses:
 *       200:
 *         description: All customers deleted
 */
        this.router.delete("/v1.0",this.customerController.deleteAll)
        /**
 * @openapi
 * /api/customers/v1.0/{id}:
 *   delete:
 *     summary: Delete customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 */
        this.router.delete("/v1.0/:id",this.customerController.deleteById)
       // this.router.get("/v1.0/publish/:id",this.customerController.publishCustomerInfo)
    }

}


export default new CustomerRoute().router