export interface CarModel{
   id: number;
   plate: string;
   kilometer: number;
   dailyPrice: number;
   modelYear: number;
   minFindeksRate: number;
   imagePath: string;
   model_id : {
    name: string;
    brandResponse: {
        id: number;
        name: string;
        logoPath: string;
    }
   },
   color_id: {
    name: string;
    code: string;
   }
}