export interface ICustomer {
    customerID:   number;
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
    rowGuid:      string;
    modifiedDate: Date;
}