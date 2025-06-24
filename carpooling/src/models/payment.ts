type CreditCard={
    method: 'credit_card';
    cardNumber: string;
    expirationDate: string; // Format: MM/YY
    cvv: string;    
}

type UPI={
    method: 'upi';
    upiId: string; // e.g., user@bank
}

type NetBanking={
    method: 'net_banking';
    bankName: string; // e.g., "Bank of America"
    accountNumber: string; // Masked or encrypted in production
}
type Wallet={
    method: 'wallet';
    walletId: string; // e.g., "wallet123"
}   
//union type for all payment methods
export type PaymentMethod = CreditCard | UPI | NetBanking | Wallet;

export function processPayment(payment: PaymentMethod): string {
    switch (payment.method) {
        case 'credit_card':
            return `Processing credit card payment for card ending in ${payment.cardNumber.slice(-4)}`;
        case 'upi':
            return `Processing UPI payment for ID ${payment.upiId}`;
        case 'net_banking':
            return `Processing net banking payment for account ${payment.accountNumber}`;
        case 'wallet':
            return `Processing wallet payment for wallet ID ${payment.walletId}`;
        default:
            throw new Error('Unsupported payment method');
    }
}

