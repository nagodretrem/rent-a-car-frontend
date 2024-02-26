import { GetByIdRentalResponse } from "../../rental/response/getByIdRentalResponse";

export interface GetAllInvoiceResponse{
    id:number;
    ownerUser: number;
    discountRate: number;
    totalPrice:number;
    rentalResponse:GetByIdRentalResponse;
}