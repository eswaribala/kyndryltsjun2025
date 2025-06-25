import { Account } from "../facades/account";
import { Product } from "../facades/product";
import { AbstractCustomerFactory } from "./abstractCustomerFactory";
import { TaxableProduct } from "./taxableProduct";
import { TaxExemptedProduct } from "./taxExemptedProduct";
import { SavingsAccount } from "./savingsAccount";
import { CurrentAccount } from "./currentAccount";
export class OnlineCustomerFactory extends AbstractCustomerFactory {

    constructor(){
        super();
        console.log("Online Customer Factory Created"); 

    }
    createProduct(type: "taxable"|"exempted"): Product {
        if (type === "taxable") {
            return new TaxableProduct()
            
        } else{
            return new TaxExemptedProduct()
            
        }
            
    }
    createAccount(type:"savings"|"current"): Account {
        if (type === "savings") {
            return new SavingsAccount()
            
        } else{
            return new CurrentAccount()
            
        }
    }
    
   
}