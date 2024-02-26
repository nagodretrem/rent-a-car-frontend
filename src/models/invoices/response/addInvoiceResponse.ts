import { GetByIdRentalResponse } from "../../rental/response/getByIdRentalResponse";

export interface AddInvoiceResponse{
    id:number;
    ownerUser: number;
    discountRate: number;
    totalPrice:number;
    rentalResponse:GetByIdRentalResponse;
}