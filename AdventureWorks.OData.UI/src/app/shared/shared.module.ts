import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
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
import { ReactiveFormConfig, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormFieldErrorsComponent } from './components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

export const modules = [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    PaginationModule,
    TypeaheadModule,
    ModalModule,
    RxReactiveFormsModule 
  ];
  
  export const declarations = [
    SpinnerDirective,
    SubmitButtonDirective,
    IconButtonDirective,
    TableShimmerDirective,
    FormFieldErrorsComponent
  ];

  export const providers = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    DatePipe,
    CurrencyPipe,
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
  export class SharedModule {

    constructor(){  
      ReactiveFormConfig.set({
        "internationalization": {
            "dateFormat": "dmy",
            "seperator": "/"
        },
        "validationMessage": {
            "alpha": "Only alphabelts are allowed.",
            "alphaNumeric": "Only alphabet and numbers are allowed.",
            "compare":"Inputs are not matched.",
            "contains":"Value is not contains in the input",
            "creditcard":"Credit card number is not correct",
            "digit":"Only digit are allowed",
            "email":"Email is not valid",
            "greaterThanEqualTo":"Please enter greater than or equal to current value",
            "greaterThan":"Please enter greater than current value",
            "hexColor":"Please enter hex code",
            "json":"Please enter valid json",
            "lessThanEqualTo":"Please enter less than or equal to the current experience",
            "lessThan":"Please enter less than or equal to the current experience",
            "lowerCase":"Only lowercase is allowed",
            "maxLength":"Maximum length is 10 digit",
            "maxNumber":"Enter value less than equal to 3",
            "minNumber":"Enter value greater than equal to 1",
            "password":"Please enter valid password",
            "pattern":"Please enter valid zip code",
            "range":"Please enter age between 18 to 60",
            "required":"This field is required",
            "time":"Only time format is allowed",
            "upperCase":"Only uppercase is allowed",
            "url":"Only url format is allowed",
            "zipCode":"Enter valid zip code",
            "minLength":"Minimum length is 10 digit"
        }
    });
    }
   }