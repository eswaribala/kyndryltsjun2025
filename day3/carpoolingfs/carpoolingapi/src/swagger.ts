import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vehicle API",
      version: "1.0.0",
    },
  },
   apis: ["./src/routes/*.ts", "./src/api/routes/*.ts"], // update as needed
};

export default swaggerJSDoc(options);
