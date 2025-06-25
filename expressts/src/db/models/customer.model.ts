import {Model,Column, DataType, Table} from "sequelize-typescript";


@Table({
    tableName:'Customer'
})
export class Customer extends Model{
      @Column({
          type:DataType.BIGINT,
          field:'Customer_Id',
          primaryKey:true,
          autoIncrement:true
      })
     customerId?:number
     @Column({
         type:DataType.STRING,
         allowNull:false,
         field:'First_Name'
     })
     firstName?:string
    @Column({
        type:DataType.STRING,
        allowNull:true,
        field:'Middle_Name'
    })
    middleName?:string
    @Column({
        type:DataType.STRING,
        allowNull:false,
        field:'Last_Name'
    })
    lastName?:string
    @Column({
        type:DataType.BIGINT,
        field:'Contact_No',
        defaultValue:0
    })
    contactNo?:number
    @Column({
        type:DataType.STRING,
        allowNull:false,
        field:'Email'
    })
    email?:string

    @Column({
        type:DataType.STRING,
        allowNull:false,
        field:'Password'
    })
    password?:string
}