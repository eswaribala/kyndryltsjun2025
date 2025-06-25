import { Product } from "../facades/product";
export class TaxableProduct implements Product {
    getProductDetails() {
        return {
            productType: "Taxable Product",
            taxRate: "15%",
            features: ["Tax Deductible", "Annual Tax Reporting", "Investment Growth"]
        };
    }
    
   
}   