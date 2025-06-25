import {DatabaseConnection} from "./db";
import {Application} from "express";
import cors,{CorsOptions} from "cors";
import express from 'express'
import {Routes} from "./api/routes";

export class Server{
    constructor(app:Application) {
        this.config(app);
        this.syncDatabase();
        new Routes(app);
    }

    config(app:Application){
        const corsOptions: CorsOptions = {
            origin: "http://localhost:3000",
              methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        

    }

    syncDatabase(){
        new DatabaseConnection().sequelize?.sync();
    }
}