import { Product } from "../facades/product";
export class TaxExemptedProduct implements Product {
    getProductDetails() {
        return {
            productType: "Tax Exempted Product",
            taxExemptionReason: "Non-profit Organization",
            features: ["Tax Exempt", "Annual Reporting", "Investment Growth"]
        };
    }
 
}   