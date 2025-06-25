import { PaymentAdaptor } from "../models/paymentAdaptor";
import { GooglePay } from "../models/googlepay";
import { Paytm } from "../models/paytm";


function processPaymentViaGateway(type: "googlepay"|"paytm", amount: number, currency: string): any {
  
    
      if (type === "googlepay") {
        // Simulate Google Pay payment processing
        
          new PaymentAdaptor(new GooglePay()).processPayment(amount, currency);
       
      } else {
        // Simulate Paytm payment processing
       
          new PaymentAdaptor(new Paytm()).processPayment(amount, currency);
   
      } 
    

    

}

processPaymentViaGateway("googlepay", 100, "USD")
processPaymentViaGateway("paytm", 200, "INR")