import { ICustomer } from "./customer";
import { IEntityBase } from "./entity.base";

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
}