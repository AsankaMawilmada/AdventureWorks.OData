import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerModule } from './customer/customer.module';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { PlaceholderComponentComponent } from './layout/components/placeholder-component/placeholder-component.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { TopnavComponent } from './layout/components/topnav/topnav.component';
import { LayoutComponent } from './layout/layout.component';
import { SecuredRoutingModule } from './secured.routing.module';

export const modules = [
  SharedModule,
  SecuredRoutingModule,
  CustomerModule,
];

export const declarations = [
  LayoutComponent,
  PlaceholderComponentComponent,
  SidenavComponent,
  TopnavComponent,
  FooterComponent,
  HeaderComponent
];

@NgModule({
  imports: [
    modules
  ],
  declarations: [
    declarations
  ]
})
export class SecuredModule { }
