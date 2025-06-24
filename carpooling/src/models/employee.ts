import { User } from './user';
export class Employee extends User{
    private _employeeId: string;
    private _department: string;

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob:Date, isDriver: boolean, createdAt: Date, updatedAt: Date, employeeId: string, department: string) {
        super(id, firstName, lastName, email, password, phone, dob, isDriver, createdAt, updatedAt);
        this._employeeId = employeeId;
        this._department = department;
    }

    get employeeId(): string {
        return this._employeeId;
    }

    get department(): string {
        return this._department;
    }       

}