export interface GST {
    gstNumber: string;
    companyName: string;
    address: string;
    state: string;
    pinCode: string;

    getGSTDetails(): Promise<{
        gstNumber: string;
        companyName: string;
        address: string;
        state: string;
        pinCode: string;
    }>;
}