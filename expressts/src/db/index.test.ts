import {Customer} from "./models/customer.model";
import customerRepository from "./repositories/customer.repository";


describe('CustomerRepo', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('CustomerRepo.__getCustomers', () => {
        it('should return customers detail', async () => {
            //arrange
            const customerId = 8;
            const mockResponse = {
                customerId: 1,
                firstName:"Vignesh",
                lastName:"Bala",
                middleName:"",
                contactNo:9952032863,
                email:"viki@gmail.com",
                password:"test@123"
            }

            Customer.findByPk = jest.fn().mockResolvedValue(mockResponse);
            //Customer.findOne = jest.fn().mockResolvedValue(mockResponse);
            //act
            const result = await customerRepository.findCustomerById(customerId)

            //assert
            expect(result).toEqual(mockResponse);
            expect(Customer.findByPk).toHaveBeenCalledTimes(1);

        });
    });
});
/*
    describe('BookRepo.__removeBook', () => {
        it('should return true remove book', async () => {
            //arrange
            const bookID = 1;
            const mockResponse = true;

            Book.destroy = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await BookRepo.removeBook(bookID);

            //assert
            expect(result).toEqual(mockResponse);
            expect(Book.destroy).toHaveBeenCalledTimes(1);
            expect(Book.destroy).toBeCalledWith({
                where: {
                    id: bookID
                }
            });
        });
    });




*/