import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { IconButtonDirective, SpinnerDirective, SubmitButtonDirective, TableShimmerDirective } from './directives';
import { BaseService, CustomerService } from './services';
import { BreadcrumbModule } from 'angular-crumbs';

export const modules = [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    PaginationModule,
    TypeaheadModule,
    ModalModule
  ];
  
  export const declarations = [
    SpinnerDirective,
    SubmitButtonDirective,
    IconButtonDirective,
    TableShimmerDirective
  ];

  export const providers = [
    //{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    DatePipe,
    BaseService,
    CustomerService,
    // AuthenticationService,  
    // JwtService,
    // NotificationService,   
    BsModalService
  ];

@NgModule({
    imports: [
      modules,
      TooltipModule.forRoot()
    ],
    declarations: [
      declarations
    ],
    providers: [
      ...providers
    ],
    exports:[
      ...modules,
      ...declarations,
      TooltipModule 
    ]
  })
  export class SharedModule { }