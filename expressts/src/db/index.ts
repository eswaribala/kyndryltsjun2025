import {Sequelize} from "sequelize-typescript";
import {config,dialect} from "../config";
import {createConnection} from "net";
import {Customer} from "./models/customer.model";
import {Individual} from "./models/individual.model";
import {Corporate} from "./models/corporate.model";
import {Address} from "./models/address.model";

export class DatabaseConnection{
    sequelize:Sequelize|undefined;
    constructor() {
       console.log(`Host=${config.HOST}`)
        this.createConnection()

    }

    private async createConnection(){
        this.sequelize=new Sequelize({
            database:config.DB,
            port: config.PORT,
            host:config.HOST,
            username:config.USER,
            password:config.PASSWORD,
            dialect:dialect,
            pool:{
                max:config.pool.max,
                min:config.pool.min,
                acquire:config.pool.acquire,
                idle:config.pool.idle
            },
            models:[Customer,Individual,Corporate,Address]
        })
        await this.sequelize.authenticate().then(()=>{
            console.log("DB Connection Ready")
        }).catch((error)=>{
            console.log("DB Connection Error")
        })

    }



}