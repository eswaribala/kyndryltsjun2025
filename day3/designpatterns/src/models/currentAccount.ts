import { Account } from "../facades/account";
export class CurrentAccount implements Account {
    getAccountDetails() {
        return {
            accountType: "Current Account",
            overdraftLimit: 5000,
            features: ["Online Banking", "ATM Access", "Monthly Statements", "Overdraft Facility"]
        };
    }
    
   
}