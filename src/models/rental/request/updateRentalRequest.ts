export interface UpdateRentalRequest{
    id:number;
    returnDate:string;
    endKilometer: number;
    startDate: string;
    endDate: string;
    carId: number;
    userId: number;
}