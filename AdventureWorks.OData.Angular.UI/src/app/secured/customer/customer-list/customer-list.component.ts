import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { first } from 'rxjs/operators';
import { ODataHelper } from 'src/app/shared/helpers';
import { IODataResponse, ICustomer } from 'src/app/shared/models';
import { CustomerService } from 'src/app/shared/services';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {
  columns:string[] = ['customerID','title','suffix','firstName','lastName','companyName','emailAddress','phone','rowGuid'];
  busy: boolean = false;
  customers: ICustomer[] = [];
  page: number = 1;
  itemsPerPage:number = 10;
  totalItems: number = 0;
  searchTerm?: string;

  constructor(private customerService: CustomerService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.loadData(this.page);
  }

  loadData(page: number){
    this.busy = true;   
    this.customerService
      .getPaged<ICustomer>(page, this.itemsPerPage, this.columns, this.searchTerm ? this.searchTerm : undefined)
      .pipe(first())
      .subscribe(
        (response: IODataResponse<ICustomer[]>) => {
          this.customers = response.value;
          this.totalItems = ODataHelper.getTotalItems(response, this.itemsPerPage);
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

  onSearch(){
    this.loadData(this.page);
  }

  onAddNew(){

  }

  onEdit(customer: ICustomer){
    const initialState: ModalOptions = {
      animated: true,
      class:'modal-lg',
      initialState: {
        customerId: customer.customerId,
        title: `${customer.firstName} ${customer.lastName}`    
      } 
    };
    const modalRef: BsModalRef = this.modalService.show(CustomerDetailsComponent, initialState);  
    modalRef.content.onAction.subscribe(() => { modalRef.hide(); });
  }
}
