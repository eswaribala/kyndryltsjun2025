import {faker} from '@faker-js/faker';

export function generateOtp(): number {
  const otp = faker.number.int({ min: 1000, max: 9999 });
  return otp;
}