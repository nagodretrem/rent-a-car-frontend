import { GetByIdBrandResponse } from "../../brands/response/getByBrandResponse";

export interface GetAllModelResponse{
    id: number;
    name:string;
    brandResponse: GetByIdBrandResponse;
}