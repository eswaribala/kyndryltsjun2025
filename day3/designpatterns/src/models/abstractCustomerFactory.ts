import { Product } from '../facades/product';
import { Account } from '../facades/account';
export abstract class AbstractCustomerFactory {
    constructor() {
        // Initialization if needed
    }   
    abstract createProduct(type:"taxable"|"exempted"): Product;
    abstract createAccount(type:"savings"|"current"): Account;
    
     
}