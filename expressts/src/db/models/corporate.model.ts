import {Customer} from "./customer.model";
import {Column, DataType, Table} from "sequelize-typescript";
import {CompanyType} from "./companytype.enum";

@Table({
    tableName:'Corporate'
})
export class Corporate extends Customer{
    @Column({
        type:DataType.ENUM(...Object.values(CompanyType)),
        field:'Company_Type'
    })
    companyType?:CompanyType

}