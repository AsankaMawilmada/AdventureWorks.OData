import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { DialogActionEnum } from 'src/app/shared/enums';
import { ICustomer, IODataResponse } from 'src/app/shared/models';
import { CustomerService } from 'src/app/shared/services';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  busy: boolean = false;
  title: string = '';
  customerId: number = 0;
  customer?: ICustomer;
  public onAction: Subject<string> = new Subject();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadData(this.customerId);
  }

  loadData(customerId: number){
    this.busy = true;   
    this.customerService
    .get<ICustomer>(customerId)
      .pipe(first())
      .subscribe(
        (response: ICustomer) => {
          this.customer = response;
          this.busy = false;
        },
        (error: any) => {
          this.busy = false;
        }
      );
  }

  close() {
    this.onAction.next(DialogActionEnum.Close);
  }
}
