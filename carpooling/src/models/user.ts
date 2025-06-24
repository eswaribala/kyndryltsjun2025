export abstract class User{
    protected _id: string;
     protected _firstName: string;  
     protected _lastName: string;
     protected _email: string;
     protected _password: string;
     protected _phone: string;
     protected readonly _dob: Date;
     protected _isDriver: boolean;    
     protected _createdAt: Date;
     protected _updatedAt: Date;
    
    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob:Date, isDriver: boolean, createdAt: Date, updatedAt: Date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._phone = phone;
        this._dob = dob;
        this._isDriver = isDriver;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): string {
        return this._id;
    }
    get firstName(): string {
        return this._firstName;
    }   

    get lastName(): string {
        return this._lastName;
    }
    get email(): string {
        return this._email;
    }


    get password(): string {
        return this._password;
    }
    get phone(): string {
        return this._phone;
    }


    get isDriver(): boolean {
        return this._isDriver;
    }
    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }


    set email(email: string) {
        this._email = email;
    }
    set password(password: string) {
        this._password = password;
    }
    set phone(phone: string) {
        this._phone = phone;
    }
    

}