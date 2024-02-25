import { GetByIdUserResponse } from "../../user/response/getByIdUserResponse";

export interface UpdateCustomerResponse{
    id: number;
   
    nationalityId: string;
    firstName: string;
    lastName: string;
    gsm: string;
    address: string,
    birthDate: string;
    userResponse: GetByIdUserResponse;
}