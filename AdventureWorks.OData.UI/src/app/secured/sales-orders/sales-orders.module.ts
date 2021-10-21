import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderRoutingModule } from './sales-orders.routing.module';

export const imports = [  
  SharedModule,
  SalesOrderRoutingModule
];

export const declarations = [
  SalesOrderListComponent
];

@NgModule({
  imports: [
    imports
  ],
  declarations: [
    declarations
  ]
})
export class SalesOrdersModule { }
