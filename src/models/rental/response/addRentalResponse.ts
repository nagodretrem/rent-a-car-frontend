import { GetByIdCarResponse } from "../../cars/response/getByIdCarResponse";
import { GetByIdUserResponse } from "../../user/response/getByIdUserResponse";

export interface AddRentalResponse{
    id:number;
    returnDate:string;
    endKilometer: number;
    startDate: string;
    endDate: string;
    startKilometer: number;
    carResponse: GetByIdCarResponse;
    userResponse: GetByIdUserResponse;
}