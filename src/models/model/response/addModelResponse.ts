import { GetByIdBrandResponse } from "../../brands/response/getByIdBrandResponse";

export interface AddModelResponse{
    name:string;
    brandResponse: GetByIdBrandResponse;
   
}