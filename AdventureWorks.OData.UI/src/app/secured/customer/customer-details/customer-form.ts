import { required, compare, alpha, maxLength, greaterThanEqualTo } from "@rxweb/reactive-form-validators";
import { ICustomer } from "src/app/shared/models";
export class CustomerForm {
    constructor(customer?: ICustomer) {
        if (customer) {
            //this.rowGuid = customer.rowGuid;
            this.companyName = customer.companyName;
            this.emailAddress = customer.emailAddress;
            this.firstName = customer.firstName;
            this.lastName = customer.lastName;
            this.middleName = customer.middleName;
            this.phone = customer.phone;
            this.salesPerson = customer.salesPerson;
            this.suffix = customer.suffix;
            this.title = customer.title;
        }
    }

    rowGuid?: string;

    @maxLength({ value: 128 })
    companyName?: string;

    @maxLength({ value: 50 })
    emailAddress?: string;

    @required()
    @maxLength({ value: 50 })
    firstName?: string;

    @required()
    @maxLength({ value: 50 })
    lastName?: string;

    @maxLength({ value: 50 })
    middleName?: string;

    @maxLength({ value: 25 })
    phone?: string;

    @maxLength({ value: 256 })
    salesPerson?: string;

    @maxLength({ value: 10 })
    suffix?: string;

    @maxLength({ value: 8 })
    title?: string;
}

export class CustomerEditForm extends CustomerForm {
    constructor(customer?: ICustomer) {
        super(customer);
        if (customer) {
            this.customerId = customer.customerId;
        }
    }

    @greaterThanEqualTo({ value: 0 })
    customerId?: number;
}