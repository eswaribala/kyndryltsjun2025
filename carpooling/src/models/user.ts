export class User{
    private _id: string;
    private _firstName: string;  
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _phone: string;
    private _isDriver: boolean;    
    private _createdAt: Date;
    private _updatedAt: Date;
    
    constructor(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, isDriver: boolean, createdAt: Date, updatedAt: Date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._phone = phone;
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