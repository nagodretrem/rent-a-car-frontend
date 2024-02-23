export interface AddCarRequest {
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
export enum Available{
    YES='YES',
    NO='NO',
}
export enum FuelType {
    DIESEL = 'DIESEL',
    GASOLINE = 'GASOLINE',
  }
export enum TransmissionType {
    AUTOMATIC = 'AUTOMATIC',
    MANUAL = 'MANUAL',
}
export enum CarType {
    ECOHATCHBACK,
    ECOSEDAN,

    MIDHATCHBACK,
    MIDSEDAN,

    LUXURYSEDAN,
    PREMIUMSEDAN,

    SUV,

    VAN
}