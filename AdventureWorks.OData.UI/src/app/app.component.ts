import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BaseService } from './services/base.service';


export interface IODataResponse<T> {
  "@odata.context": string;
  value: T;
  "@odata.nextLink": string;
}


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
  PasswordHash: string;
  PasswordSalt: string;
  RowGuid:      string;
  ModifiedDate: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'AdventureWorks-OData-UI';
  busy: boolean = false;
  data: any ={};

  constructor(private service: BaseService) {}
  ngOnInit(): void {
  

    this.service.get('Customers')
      .pipe(first())
      .subscribe(
        (data: IODataResponse<ICustomer[]>) => {
          this.data = data.value;
          this.busy = false;
        },
        (error: any) => {
          this.busy = false;
        }
      );
  }
}
