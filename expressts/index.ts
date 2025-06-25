// @ts-ignore
import express, { Application } from "express";
import {Server} from "./src/index";

export const app: Application = express();
const server: Server = new Server(app);
//const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3200;
const PORT=3200;
app
    .listen(PORT,  function () {
        console.log(`Server is running on port ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });