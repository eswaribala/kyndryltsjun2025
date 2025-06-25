import {ICustomerRepository} from "./icustomer.repository";
import {Customer} from "../models/customer.model";
import {Op} from "sequelize";
import {UpdateRequest} from "../dtos/customer.request";


class CustomerRepository implements ICustomerRepository{
    async addCustomer(customer: Customer): Promise<Customer|never> {
       try{
           return await Customer.create({
               firstName:customer.firstName,
               middleName:customer.middleName,
               lastName:customer.lastName,
               email:customer.email,
               password:customer.password,
               contactNo:customer.contactNo
           })

       }catch(error){
           throw new Error("Failed to create Customer!");
       }
    }
    async deleteAllCustomers(): Promise<boolean> {
        try {
            const rows=await  Customer.destroy({
                where: {},
                truncate: false
            });
            if(rows>0)
                return true
            else
                return false
        } catch (error) {
            throw new Error("Failed to delete all customers!");
        }
    }

    async deleteCustomerById(id: number): Promise<string> {
        try {
            const rows = await Customer.destroy({
                where: {
                    customerId: id,
                },
            });
            if (rows > 0)
                return `Customer with Id=${id} deleted`
            else
                return `Customer with Id=${id} not found`
        }catch(error){
            throw new Error("Failed to delete customers!");
        }
    }

    async findAllCustomers(): Promise<Customer[]> {

        try {
            return await Customer.findAll({
             //   where: {
             //       [Op.and]: [],
              //  },
            });
        }catch(error){
            throw new Error("Failed to find all customers!");
        }
    }

    async findCustomerById(id: number): Promise<Customer|null> {
        try {
            return await Customer.findByPk(id)
        }catch(error){
            throw new Error("Failed to find customer!");
        }
    }

    async updateCustomer(data:UpdateRequest): Promise<Customer|null> {

        console.log(data)
        try {
            await Customer.update(
                {email: data.email, contactNo: data.contactNo},
                {
                    where: {
                        customerId: data.customerId,
                    },
                },
            );
            return await this.findCustomerById(data.customerId)
        }catch(error){
            throw new Error("Failed to update customer!");
        }
    }



}

export default new CustomerRepository();