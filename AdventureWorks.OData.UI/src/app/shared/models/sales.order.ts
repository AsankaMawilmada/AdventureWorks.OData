import { ICustomer } from "./customer";
import { IEntityBase } from "./entity.base";
import { IAddress } from "./address";

export interface ISalesOrder extends IEntityBase {
    orderDate: Date;
    dueDate: Date;
    shipDate: Date;
    status: number;
    salesOrderNumber: string;
    shipMethod: string;
    subTotal: number;
    taxAmt: number;
    freight: number;
    customer?: ICustomer;
    billToAddress?: IAddress;
    shipToAddress?: IAddress;    
}