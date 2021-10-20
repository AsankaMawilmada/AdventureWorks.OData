import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { first } from 'rxjs/operators';
import { ODataHelper } from 'src/app/shared/helpers';
import { IODataResponse, ICustomer } from 'src/app/shared/models';
import { CustomerService } from 'src/app/shared/services';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {
  columns:string[] = ['CustomerID','Title','Suffix','FirstName','LastName','CompanyName','EmailAddress','Phone','RowGuid'];
  busy: boolean = false;
  customers: ICustomer[] = [];
  page: number = 1;
  itemsPerPage:number = 10;
  totalItems: number = 0;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadData(this.page);
  }

  loadData(page: number){
    this.busy = true;    
    this.customerService
      .getPaged(page, this.itemsPerPage, this.columns)
      .pipe(first())
      .subscribe(
        (data: IODataResponse<ICustomer[]>) => {
          this.customers = data.value;
          this.totalItems = ODataHelper.getTotalItems(data['@odata.count'], this.itemsPerPage);
          this.busy = false;
        },
        (error: any) => {
          this.busy = false;
        }
      );
  }

  onPageChanged(event: PageChangedEvent): void {
    this.loadData(this.page = event.page);  
  }
}
