import { GetByIdUserResponse } from "../../user/response/getByIdUserResponse";

export interface AddCustomerResponse{id: number;
    userResponse: GetByIdUserResponse;
    nationalityId: string;
    firstName: string;
    lastName: string;
    gsm: string;
    address: string,
    birthDate: string;}