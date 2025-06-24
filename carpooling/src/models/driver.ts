import { User } from './user';
export class Driver extends User {
    
    private _licenseNumber: string;
    private _isActive: boolean;
    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob:Date, isDriver: boolean, createdAt: Date, updatedAt: Date, licenseNumber: string, isActive: boolean) {
        super(id, firstName, lastName, email, password, phone, dob,isDriver, createdAt, updatedAt);
        this._licenseNumber = licenseNumber;
        this._isActive = isActive;
    }   
    get licenseNumber(): string {
        return this._licenseNumber;
    }
    //wages
    computeSalary(): number {
        throw new Error('Method not implemented.');
    }
}