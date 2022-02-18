import { IEntityBase } from "./entity.base";

export interface ICustomer extends IEntityBase {
    customerId:   number;
    nameStyle:    boolean;
    title:        string;
    firstName:    string;
    middleName:   string;
    lastName:     string;
    suffix:       string;
    companyName:  string;
    salesPerson:  string;
    emailAddress: string;
    phone:        string;
}