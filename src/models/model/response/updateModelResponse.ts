import { GetByIdBrandResponse } from "../../brands/response/getByIdBrandResponse";

export interface UpdateModelResponse{
    id: number;
    name:string;
    brandResponse: GetByIdBrandResponse;
}