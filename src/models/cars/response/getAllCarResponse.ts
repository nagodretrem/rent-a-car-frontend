import { GetByIdCarResponse } from "./getByIdCarResponse";

export interface GetAllCarResponse{
    total:number;
    skip:number;
    limit:number;
    products : GetByIdCarResponse[];
}