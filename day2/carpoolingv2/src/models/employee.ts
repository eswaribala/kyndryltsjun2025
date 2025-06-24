import { User } from './user';
import {GST} from '../facades/gst';

//multiple inheritance is not supported in TypeScript, so we use interfaces to achieve similar functionality
export class Employee extends User implements GST{
   
    private _employeeId: string;
    private _department: string;
    gstNumber: string;
    companyName: string;
    address: string;
    state: string;
    pinCode: string;

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob:Date, isDriver: boolean, createdAt: Date, updatedAt: Date, employeeId: string, department: string,gstNumber: string, companyName: string, address: string, state: string, pinCode: string) {
        super(id, firstName, lastName, email, password, phone, dob, isDriver, createdAt, updatedAt);
        this._employeeId = employeeId;
        this._department = department;
        this.gstNumber = gstNumber;
        this.companyName = companyName;   
        this.address = address;
        this.state = state;     
        this.pinCode = pinCode;
          


    }
    
    getGSTDetails(): Promise<{ gstNumber: string; companyName: string; address: string; state: string; pinCode: string; }> {
        throw new Error('Method not implemented.');
    }

    get employeeId(): string {
        return this._employeeId;
    }

    get department(): string {
        return this._department;
    }       
     //payroll
     computeSalary(): number {
        throw new Error('Method not implemented.');
    }

}