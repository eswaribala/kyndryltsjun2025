/*
//import * as AWS from "@aws-sdk/client-dynamodb";
import {ICorporateRepository} from "./icorporate.repository";
import {Corporate} from "../models/corporate.model";
import {config} from "../../config";
//import {DynamoDBClient, PutItemCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";
class CorporateRepository implements ICorporateRepository{
    client:DynamoDBClient;
    command?:AWS.PutItemCommand;
    constructor() {
        this.client = new DynamoDBClient({
            region:config.aws_remote_config.region,
            credentials:{
                accessKeyId:config.aws_remote_config.accessKeyId,
                secretAccessKey:config.aws_remote_config.secretAccessKey
            }
        });
    }

    async addCorporate(corporate: Corporate): Promise<string|never> {
        let id= Math.floor(Math.random()*99999);
        let contactNo= typeof corporate.contactNo === "number" ? corporate.contactNo : 0;

        this.command = new PutItemCommand({
            TableName: config.aws_table_name,
            Item: {
                CustomerId:{N:id.toString()},
                ContactNo:{N:contactNo.toString()},
                Corporate: {S: JSON.stringify(corporate)},
            },
        });
        try {
            await this.client.send(this.command);
            return "Saved....."
        }catch(error){
            throw new Error("Failed to create Customer!");
        }
    }



}
export default new CorporateRepository();
*/