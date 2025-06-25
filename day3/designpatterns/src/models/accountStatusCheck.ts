import { FundTransferRequest } from '../facades/fundtransferrequest';
import { TransferHandler } from './transferHandler';
export class AccountStatusCheck extends TransferHandler {
    handle(request: FundTransferRequest): void {
        // Check if the account status is valid
        if (request.fromAcountStatus !== 'ACTIVE') {
            console.log(`Transfer cannot be processed. From account status: ${request.fromAcountStatus}`);
        return
        }
        console.log(`From account status is valid: ${request.fromAcountStatus}`);
        super.handle(request);
    }
        
        // If the account status is valid, pass the request
}