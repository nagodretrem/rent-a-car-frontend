import { GetByIdRentalResponse } from "../../rental/response/getByIdRentalResponse";

export interface GetByIdInvoiceResponse{
    id:number;
    ownerUser: number;
    discountRate: number;
    totalPrice:number;
    rentalResponse:GetByIdRentalResponse;
}