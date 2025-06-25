import {Customer} from "../models/customer.model";
import {UpdateRequest} from "../dtos/customer.request";

export interface ICustomerRepository{

    addCustomer(customer:Customer):Promise<Customer>
    //findAllCustomers(searchParams:{firstName:string,contactNo:number}):Promise<Customer[]>
    findAllCustomers():Promise<Customer[]>
    findCustomerById(id:number):Promise<Customer|null>
    updateCustomer(data:UpdateRequest|null):Promise<Customer|null>
    deleteCustomerById(id:number):Promise<string>
    deleteAllCustomers():Promise<boolean>

}