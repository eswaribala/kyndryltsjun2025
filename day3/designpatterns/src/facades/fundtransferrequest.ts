export interface FundTransferRequest {
  fromAccountId: string;
    toAccountId: string;        
    amount: number;
    balance:number;
    fromAcountStatus?: 'ACTIVE' | 'INACTIVE' | 'FROZEN';
    currency: string;
    transferDate?: Date; // ISO 8601 format
    transferType?: 'NEFT' | 'RTGS' | 'IMPS' | 'UPI' | 'INSTANT' | 'OTHER';

    referenceId?: string; // Optional reference for tracking
    dayLimit?: number; // Optional daily limit for transfers
    flaggedForFraud: boolean; // Indicates if the transfer is flagged for fraud checks
}

