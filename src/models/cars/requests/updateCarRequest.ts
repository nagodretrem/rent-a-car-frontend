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
    carType: string;
    fuelType: string;
    transmissionType: string;
}
