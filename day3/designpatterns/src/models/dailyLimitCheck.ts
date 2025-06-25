import { TransferHandler } from './transferHandler';
export class DailyLimitCheck extends TransferHandler {
    handle(request: any): void {
        // Check if the daily limit is set and if the transfer amount exceeds it
        if (request.dayLimit && request.amount > request.dayLimit) {
            console.log(`Transfer cannot be processed. Amount: ${request.amount} exceeds daily limit: ${request.dayLimit}`);
            return;
        }

        console.log(`Transfer amount: ${request.amount} is within the daily limit: ${request.dayLimit}`);
        super.handle(request);
    }

}