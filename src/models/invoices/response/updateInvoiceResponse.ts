import { GetByIdRentalResponse } from "../../rental/response/getByIdRentalResponse";

export interface UpdateInvoiceResponse{
    id:number;
    ownerUser: number;
    discountRate: number;
    totalPrice:number;
    rentalResponse:GetByIdRentalResponse;
}