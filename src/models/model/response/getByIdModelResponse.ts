import { GetByIdBrandResponse } from "../../brands/response/getByBrandResponse";

export interface GetByIdModelResponse{
    
    name:string;
    brandResponse: GetByIdBrandResponse;
}