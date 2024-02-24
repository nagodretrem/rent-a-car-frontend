import { GetByIdColorResponse } from "../../color/response/getByIdColorResponse";
import { GetByIdModelResponse } from "../../model/response/getByIdModelResponse";
import { Available, CarType, FuelType, TransmissionType } from "../requests/addCarRequest";

export interface GetByIdCarResponse{
    id:number;
    plate: string;
    kilometer: number;
    dailyPrice: number;
    modelYear: number;
    minFindeksRate: number;
    imagePath: string;
    model_id: GetByIdModelResponse;
    color_id: GetByIdColorResponse;
    carType: CarType;
    fuelType: FuelType;
    transmissionType: TransmissionType;
    available:Available;

}