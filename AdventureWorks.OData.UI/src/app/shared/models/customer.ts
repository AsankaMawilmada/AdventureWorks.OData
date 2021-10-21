import { IEntityBase } from "./entity.base";

export interface ICustomer extends IEntityBase {
    customerId:   number;
    nameStyle:    boolean;
    title:        string;
    firstName:    string;
    middleName:   null | string;
    lastName:     string;
    suffix:       null | string;
    companyName:  string;
    salesPerson:  string;
    emailAddress: string;
    phone:        string;
}