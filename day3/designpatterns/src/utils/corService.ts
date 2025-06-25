import { FundTransferRequest } from "../facades/fundtransferrequest";
import { AccountStatusCheck } from "../models/accountStatusCheck";
import { DailyLimitCheck } from "../models/dailyLimitCheck";
import { SufficientBalanceCheck } from "../models/sufficientBalanceCheck";

const accountStatusCheck = new AccountStatusCheck();
const sufficientBalanceCheck=new SufficientBalanceCheck();
const dailyTransferLimitCheck = new DailyLimitCheck();
accountStatusCheck.setNext(sufficientBalanceCheck);
sufficientBalanceCheck.setNext(dailyTransferLimitCheck);
const request:FundTransferRequest={
    fromAcountStatus: "ACTIVE",
    balance: 1000,
    amount: 500,
    dayLimit: 1000,  
    currency: "USD",
    fromAccountId: "1234567890",
    toAccountId: "0987654321",
    transferDate: new Date(),
    transferType: "IMPS",
     flaggedForFraud: false,
  
}
accountStatusCheck.handle(request);
