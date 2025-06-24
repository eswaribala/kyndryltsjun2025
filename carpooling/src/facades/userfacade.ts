import { User } from "../models/user";

export interface UserFacade {
    
    createUser(id: string, firstName: string, lastName: string, email: string, password: string, phone: string, dob:Date, isDriver: boolean, createdAt: Date, updatedAt: Date, employeeId: string, department: string): Promise<User>;
    getUserById(userId: string): Promise<User | null>;
    updateUser(email?: string): Promise<User>;   
    deleteUser(userId: string): Promise<boolean>;
    listUsers(): Promise<Array<User>>;   
   
}    
