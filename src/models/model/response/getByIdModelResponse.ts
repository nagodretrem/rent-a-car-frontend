import { GetByIdBrandResponse } from "../../brands/response/getByIdBrandResponse";

export interface GetByIdModelResponse{
    
    name:string;
    brandResponse: GetByIdBrandResponse;
}