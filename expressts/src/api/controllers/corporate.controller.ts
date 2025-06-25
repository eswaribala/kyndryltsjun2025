/*
import {Request,Response} from "express";
import {Customer} from "../../db/models/customer.model";
import customerRepository from "../../db/repositories/customer.repository";
import {Corporate} from "../../db/models/corporate.model";
import corporateRepository from "../../db/repositories/corporate.repository";

export class CorporateController{
    async addCorporate(req:Request,res:Response){
        console.log(req.body)
        //validation
        if (!req.body.firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        let corporate:Corporate=req.body;

        try{

            const savedResponse:string= await corporateRepository.addCorporate(corporate);
            return res.status(201).send({

                'message': `customer successfully created${savedResponse}`
            })

        }catch(error){
            return res.status(500).send({

                'message': `customer could not be created ${error}`
            })
        }
    }
}
    */