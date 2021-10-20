export interface ICustomer {
    CustomerID:   number;
    NameStyle:    boolean;
    Title:        string;
    FirstName:    string;
    MiddleName:   null | string;
    LastName:     string;
    Suffix:       null | string;
    CompanyName:  string;
    SalesPerson:  string;
    EmailAddress: string;
    Phone:        string;
    RowGuid:      string;
    ModifiedDate: Date;
}