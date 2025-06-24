import { generateOTP} from '../src/utils/otp';
//test suite
describe('OTP Tests', () => {
  const otp = generateOTP();
  //test case
  it('should define OTP', () => {
    
    expect(otp).toBeDefined();
  
  });
  //test case
  it('should generate a 4-digit OTP', () => {
   
    expect(typeof otp).toBe('number');
    expect(otp.toString().length).toBe(4); // Assuming OTP is
  });
  
});