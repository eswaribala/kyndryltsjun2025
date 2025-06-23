export type Driver={
    driverId: string; // Unique identifier for the driver
    name: string; // Name of the driver
    licenseNumber: string; // Driver's license number
    phoneNumber: string; // Contact phone number for the driver
    email?: string; // Optional email address for the driver
    isActive: boolean; // Indicates if the driver is currently active
   
}

//export type DriverProfile=Pick<Driver, 'driverId' | 'name' | 'phoneNumber' | 'email'>;
export type DriverProfile=Omit<Driver, 'licenseNumber'|'isActive'>; // Driver profile without the license number