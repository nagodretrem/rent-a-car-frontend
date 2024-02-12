import { GetByIdColorResponse } from "../../color/response/getByIdColorResponse";
import { GetByIdModelResponse } from "../../model/response/getByIdModelResponse";
import { GetByIdCarResponse } from "./getByIdCarResponse";

export interface GetAllCarResponse{
    id:number;
    plate: string;
    kilometer: number;
    dailyPrice: number;
    modelYear: number;
    minFindeksRate: number;
    imagePath: string;
    model_id: GetByIdModelResponse;
    color_id: GetByIdColorResponse;
   
}

