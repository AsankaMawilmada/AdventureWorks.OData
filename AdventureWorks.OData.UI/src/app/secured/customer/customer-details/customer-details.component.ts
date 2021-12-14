import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormConfig, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { DialogActionEnum } from 'src/app/shared/enums';
import { ICustomer, IODataResponse } from 'src/app/shared/models';
import { CustomerService } from 'src/app/shared/services';
import { CustomerForm, CustomerEditForm } from './customer-form';

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

  customerForm: FormGroup;
  constructor(private customerService: CustomerService, private formBuilder: RxFormBuilder) {
    this.customerForm = this.customerId > 0 ? this.formBuilder.formGroup(new CustomerEditForm()) : this.formBuilder.formGroup(new CustomerForm());
  }

  ngOnInit(): void {
    this.loadData(this.customerId);
  }

  loadData(customerId: number) {
    this.busy = true;
    this.customerService
      .get<ICustomer>(customerId)
      .pipe(first())
      .subscribe(
        (response: ICustomer) => {
          this.customer = response;
          this.customerForm = this.formBuilder.formGroup(new CustomerEditForm(response));
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

  save() {
     this.customerService.update(this.customerForm.value).subscribe(
      (customer:ICustomer) => {
        //this.notificationService.success('The information was updated successfully.');
        //this.router.navigate(['candidates']);
      },
      (error) => {
        this.busy = false;
      });
  }
}
