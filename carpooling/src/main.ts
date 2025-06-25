import './utils/userdata'
import './services/notificationservice'
import { processPayment } from './models/payment'
import { PaymentMethod } from './models/payment';
import {getExternalApiPromise} from './services/externalapipromise';
import { r } from '@faker-js/faker/dist/airline-BUL6NtOJ';
import './services/generatorservice';

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

//external api
getExternalApiPromise<any>('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        let result=JSON.parse(JSON.stringify(data));
        result.forEach((user: any) => {
            console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        });
        console.log('External API data fetched successfully.');
    })
    .catch(error => {
        console.error('Error fetching external API:', error);
    });