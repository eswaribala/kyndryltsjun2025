import { FuelType } from "./fueltype.model";
import {Model,Column, DataType, Table} from "sequelize-typescript";
@Table({
    tableName: 'vehicle',
})
export class Vehicle extends Model{
    @Column({
        type: DataType.STRING,
        field:'RegistrationNumber',
        primaryKey: true,
        autoIncrement: false,
    })
    registrationNumber?: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 100], // Assuming a maximum length of 100 characters for make
        },
        field: 'Make',
        defaultValue: 'Unknown', // Default value if not provided
    })
    make?: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1, 100], // Assuming a maximum length of 100 characters for model
        },
        field: 'Model',
        defaultValue: 'Unknown', // Default value if not provided

    })
    model?: string;
    @Column({
        type: DataType.INTEGER,
        
        validate: {
            min: 2000, // The first gasoline-powered car was invented in 1886
            max: new Date().getFullYear() + 1, // Allow up to next year
        },
        field: 'Year',
        defaultValue: new Date().getFullYear(), // Default to current year if not provided

    })
    year?: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isIn: [['Red', 'Blue', 'Green', 'Black', 'White', 'Silver', 'Gray', 'Yellow', 'Orange', 'Purple']], // Example color options
            len: [1, 50], // Assuming a maximum length of 50 characters for color   

        },
        field: 'Color',
        defaultValue: 'Blue', // Default value if not provided

    })
    color?: string;
    @Column({
        type: DataType.DATE,
        allowNull: true,
        field: 'DateAdded', 
        defaultValue: DataType.NOW, // Default to current date if not provided
        validate: { 
            isDate: true, // Ensure the value is a valid date
        },  
    })
    dateAdded?: Date;
    @Column({
        type: DataType.ENUM('Petrol', 'Diesel', 'Electric', 'Hybrid'),
        allowNull: false,   
        field: 'FuelType',
        defaultValue: 'Petrol', // Default value if not provided    
    })
    fuelType?: FuelType; // Assuming FuelType is a string enum
    @Column({
        type: DataType.STRING,
        allowNull: false,
       // validate: {
         //   is: /^[A-Z0-9]{1,17}$/, // Assuming a standard 17-character VIN format
      //  },
        field: 'ChassisNumber',
        defaultValue: 'Unknown', // Default value if not provided   
    })
    chassisNumber?: string;
    @Column({
        type: DataType.STRING,
        allowNull: true,
        //validate: {
//
      //      is: /^[A-Z0-9]{1,20}$/, // Assuming a maximum of 20 characters for engine number
      //  },  
        field: 'EngineNumber',
        defaultValue: 'Unknown', // Default value if not provided       
    })
    engineNumber?: string;
}