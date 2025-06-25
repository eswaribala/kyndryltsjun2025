export class UpdateRequest{
    email:string
    contactNo:number
    customerId:number

    constructor(email: string, contactNo: number, customerId: number) {
        this.email = email;
        this.contactNo = contactNo;
        this.customerId = customerId;
    }
}