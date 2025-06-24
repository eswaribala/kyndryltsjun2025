import {generateOtp} from '../src/otp';

describe('OTP Test', () => {
  it('Generate OTP', () => {
    expect(generateOtp()).toBeLessThan(10000);
  });
});
