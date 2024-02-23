import { Available, CarType, FuelType, TransmissionType } from "./addCarRequest";

export interface UpdateCarRequest{
    id:number;
    plate: string;
    kilometer: number;
    dailyPrice: number;
    modelYear: number;
    minFindeksRate: number;
    imagePath: string;
    modelId: number;
    colorId: number;
    carType: CarType;
    fuelType: FuelType;
    transmissionType: TransmissionType;
    available:Available;

}
