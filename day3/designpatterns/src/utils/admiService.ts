import { requireRoleValidator } from './requireRole'

export class AdminService{   

    @requireRoleValidator('admin', ['admin', 'superadmin','manager'])
    deleteUser(userId: string) {
        // Simulate user deletion logic
        console.log(`User with ID ${userId} has been deleted.`);
    }
}

new AdminService().deleteUser('12345'); // This will work if the user has the 'admin' role
