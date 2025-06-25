import { TransferHandler } from './transferHandler';
import { FundTransferRequest } from '../facades/fundtransferrequest';
export class SufficientBalanceCheck extends TransferHandler {
     handle(request: FundTransferRequest): void {
            // Check if the account status is valid
            if (request.balance< request.amount) {
                console.log(`Transfer cannot be processed. Insufficient balance: ${request.balance} for amount: ${request.amount}`);
                return;
            }
           
            console.log(`Sufficient balance available: ${request.balance} for transfer amount: ${request.amount}`);
            super.handle(request);
            }
           
        }
       
            

