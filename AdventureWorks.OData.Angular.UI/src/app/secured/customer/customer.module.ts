import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

export const imports = [  
  SharedModule,
  CustomerRoutingModule
];

export const declarations = [
  CustomerDetailsComponent,
  CustomerListComponent
];

@NgModule({
  imports: [
    imports
  ],
  declarations: [declarations]
})
export class CustomerModule { }
