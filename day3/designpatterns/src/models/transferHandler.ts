import { FundTransferRequest } from "../facades/fundtransferrequest";

export abstract class TransferHandler {
    protected next: TransferHandler | null = null;
    setNext(handler: TransferHandler): TransferHandler {
        this.next = handler;
        return handler;
    }
    handle(reuest:FundTransferRequest):void {
        if (this.next) {
            return this.next.handle(reuest);
        }
       

    }
}