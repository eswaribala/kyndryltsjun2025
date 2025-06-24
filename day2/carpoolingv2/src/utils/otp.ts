import {faker} from '@faker-js/faker';
export function generateOTP(length: number = 6): number {
  
  return faker.number.int({ min: 1000, max: 9999 });
}