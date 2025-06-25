import {Request,Response} from "express";
import customerRepository from "../../db/repositories/customer.repository";
import {Customer} from "../../db/models/customer.model";
import {UpdateRequest} from "../../db/dtos/customer.request";

export default class CustomerController{

    async create(req:Request,res:Response){
        console.log(req.body)
        //validation
        if (!req.body.firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        let customer:Customer=req.body;

        try{

            const savedResponse:Customer= await customerRepository.addCustomer(customer);
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

    async findAll(req:Request,res:Response){
        //console.log(typeof req.query.mobileNo)
       // const firstName:string = typeof req.query.firstName === "string" ? req.query.firstName : "";
       // const mobileNo:string = typeof req.query.mobileNo === "string" ? req.query.mobileNo : "0";

        //validation
        /*
        if (!firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        let contactNo:number=parseInt(mobileNo)
        */

        try{

           // const customers:Customer[]= await customerRepository.findAllCustomers({firstName:firstName,contactNo:contactNo})
           const customers:Customer[]= await customerRepository.findAllCustomers();
            return res.status(200).send(customers)

        }catch(error){
            return res.status(500).send({

                'message': `customer not found ${error}`
            })
        }


    }
    async findById(req:Request,res:Response){

        const customerId: number = parseInt(req.params.id);

        //validation
        if (customerId<=0) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }


        try{

            const customer:Customer|null= await customerRepository.findCustomerById(customerId)
            return res.status(200).send(customer)

        }catch(error){
            return res.status(500).send({

                'message': `customer not found ${error}`
            })
        }


    }
    async deleteById(req:Request,res:Response){

        const customerId: number = parseInt(req.params.id);

        //validation
        if (customerId<=0) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }


        try{

            const data= await customerRepository.deleteCustomerById(customerId)
            return res.status(200).send(data)

        }catch(error){
            return res.status(500).send({

                'message': `customer not found ${error}`
            })
        }


    }
    async deleteAll(req:Request,res:Response){
        try{
            const data= await customerRepository.deleteAllCustomers()
            if(data) {
                return res.status(200).send({
                    message: 'All the customers deleted'
                })
            }else{
                return res.status(500).send({
                    message: 'Not deleted'
                })
            }

        }catch(error){
            return res.status(500).send({

                'message': `customer not found ${error}`
            })
        }


    }

    async updateCustomer(req:Request,res:Response){

        const email:string = typeof req.body.email === "string" ? req.body.email : "";
        const mobileNo:number = typeof req.body.mobileNo === "number" ? req.body.mobileNo : 0;
        const customerId:number = typeof req.body.customerId === "number" ? req.body.customerId : 0;
        console.log(typeof (mobileNo))
        let updateRequest:UpdateRequest=new UpdateRequest(email,mobileNo,customerId);

        //validation
        if (!email) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        try{
            const data= await customerRepository.updateCustomer(updateRequest);

                return res.status(200).send(data)


        }catch(error){
            return res.status(500).send({

                'message': `customer not found ${error}`
            })
        }


    }
/*
    async publishCustomerInfo(req:Request,res:Response){
        const customerId: number = parseInt(req.params.id);

        //validation
        if (customerId<=0) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }


        try{

            const customer:Customer|null= await customerRepository.findCustomerById(customerId)
            await publish(customer);

            return res.status(200).send('Data Published')

        }catch(error){
            return res.status(500).send({

                'message': `Data not found ${error}`
            })
        }

    }
*/
}