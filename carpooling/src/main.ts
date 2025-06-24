import './utils/userdata'
import './services/notificationservice'
import { processPayment } from './models/payment'
import { PaymentMethod } from './models/payment';

const payment1:PaymentMethod={
    method: 'credit_card',
    cardNumber: '1234-5678-9012-3456',
    expirationDate: '12/25',
    cvv: '123'
};
const payment2:PaymentMethod={
    method: 'upi',
    upiId: 'user@bank'
};
const payment3:PaymentMethod={
    method: 'net_banking',
    bankName: 'Bank of America',
    accountNumber: '1234567890'
};

const payment4:PaymentMethod={
    method: 'wallet',
    walletId: 'wallet123'
};



console.log(processPayment(payment1));
console.log(processPayment(payment2));
console.log(processPayment(payment3));
console.log(processPayment(payment4));    
