import { IEntityBase } from "./entity.base";

export interface IAddress extends IEntityBase {
    addressId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    stateProvince: string;
    countryRegion: string;
    postalCode: string;
}