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

//narrowing type guards for each payment method

function isUPI(payment: PaymentMethod): payment is UPI {
    return payment.method === 'upi';
}
function isCreditCard(payment: PaymentMethod): payment is CreditCard {
    return payment.method === 'credit_card';
}
function isNetBanking(payment: PaymentMethod): payment is NetBanking {  
    return payment.method === 'net_banking';
}
function isWallet(payment: PaymentMethod): payment is Wallet {
    return payment.method === 'wallet';
}


export function processPayment(payment: PaymentMethod): string {
   
    if (isUPI(payment)) {
        return `Processing UPI payment for ID ${payment.upiId}`;
    }
    if (isCreditCard(payment)) {
        return `Processing credit card payment for card ending in ${payment.cardNumber.slice(-4)}`;
    }

    if (isNetBanking(payment)) {
        return `Processing net banking payment for account ${payment.accountNumber}`;
    }

    if (isWallet(payment)) {
        return `Processing wallet payment for wallet ID ${payment.walletId}`;
    }
    return 'Unsupported payment method';

    /*
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
*/
}

