import { GetByIdColorResponse } from "../../color/response/getByIdColorResponse";
import { GetByIdModelResponse } from "../../model/response/getByIdModelResponse";
import { GetByIdCarResponse } from "./getByIdCarResponse";

export interface GetAllCarResponse{
   
    
    carType: string;
    fuelType: string;
    transmissionType: string;
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


