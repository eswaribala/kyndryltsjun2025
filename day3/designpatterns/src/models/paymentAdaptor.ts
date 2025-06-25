import { PaymentGateway } from '../facades/paymentgateway';
import { GooglePay } from './googlepay';
import { Paytm } from './paytm';
export class PaymentAdaptor implements PaymentGateway {
  private paymentMethod: any;

  constructor(private upiMethod: GooglePay | Paytm) {

    if (upiMethod instanceof GooglePay) {
      this.paymentMethod = upiMethod;
    } else if (upiMethod instanceof Paytm) {
      this.paymentMethod = upiMethod;
    } else {
      throw new Error('Unsupported payment method');
    }
  }

  public processPayment(amount: number, currency: string): any {
    if (this.paymentMethod && typeof this.paymentMethod.processPaymentUsingGP === 'function') {
      return this.paymentMethod.processPaymentUsingGP(amount, currency);
    } else if (this.paymentMethod && typeof this.paymentMethod.processPaymentUsingPaytm === 'function') {
      return this.paymentMethod.processPaymentUsingPaytm(amount, currency);
    } else {
      throw new Error('Unsupported payment method');
    }
  }
}   
