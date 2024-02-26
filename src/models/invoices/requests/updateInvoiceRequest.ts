export interface UpdateInvoiceRequest{
    id:number;
    ownerUser: number;
    discountRate: number;
    totalPrice:number;
    rentalId:number;
}