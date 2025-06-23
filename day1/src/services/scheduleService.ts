import { Schedule } from "../models/schedule";
import {faker} from '@faker-js/faker';

// Create a type for the schedule record
type scheduleRecord= Record<string, Schedule>;

// Initialize an empty object to hold the schedules
export let schedules: scheduleRecord = {};
// Function to add a schedule
for(let i = 0; i < 100; i++) {
   
     let scheduleId = `schedule-${i + 1}`; // Generate a unique identifier for the schedule
    const schedule: Schedule = {
        scheduleId: faker.string.uuid(), // Generate a unique identifier for the schedule
        route: {
            id: `route-${i + 1}`,
            name: `Route ${i + 1}`,
            startCity: `City ${i + 1}`,
            endCity: `City ${i + 2}`,
            distance: Math.floor(Math.random() * 500) + 50, // distance in kilometers
            estimatedTime: Math.floor(Math.random() * 300) + 30, // estimated time in minutes
            stops: Math.floor(Math.random() * 10) + 1,
            isActive: true
        },
        startTime: new Date(Date.now() + Math.floor(Math.random() * 1000000000)), // random future start time
        endTime: new Date(Date.now() + Math.floor(Math.random() * 1000000000) + 3600000), // random future end time, at least an hour later
        isActive: true,
        driver: {
            driverId: faker.string.uuid(), // Generate a unique identifier for the driver
            name: faker.person.fullName(), // Generate a random full name for the driver
            licenseNumber: faker.commerce.isbn(),// Generate a random license number
            phoneNumber: faker.phone.number(),// Generate a random phone number
            email: faker.internet.email(), // Generate a random email address
            isActive: true // Set the driver as active
        }, // Optional driver can be added later
        vehicle: undefined // Optional vehicle can be added later
    };
    schedules[scheduleId] = schedule;
}

// populate the vehicle field with a random vehicle
for(const key in schedules) {
    console.log(`Schedule ID: ${schedules[key].scheduleId}, Route: ${schedules[key].route.name}, Start Time: ${schedules[key].startTime}, End Time: ${schedules[key].endTime}, Is Active: ${schedules[key].isActive}`);
}