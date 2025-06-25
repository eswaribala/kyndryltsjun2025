import { Account } from "../facades/account";

export class SavingsAccount implements Account {
    getAccountDetails() {
        return {
            accountType: "Savings Account",
            interestRate: "3.5%",
            minimumBalance: 1000,
            features: ["Online Banking", "ATM Access", "Monthly Statements"]
        };
    }
    
}