import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { first } from 'rxjs/operators';
import { ODataHelper } from 'src/app/shared/helpers';
import { IODataResponse, ISalesOrder } from 'src/app/shared/models';
import { SalesOrderService } from 'src/app/shared/services';
@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.sass']
})
export class SalesOrderListComponent implements OnInit {
  columns:string[] = ['salesOrderNumber','orderDate','dueDate','shipDate','shipMethod','status','subTotal','taxAmt','freight','rowGuid'];
  busy: boolean = false;
  orders: ISalesOrder[] = [];
  page: number = 1;
  itemsPerPage:number = 10;
  totalItems: number = 0;
  searchTerm?: string;
  bsModalRef?: BsModalRef;

  constructor(private salesOrderService: SalesOrderService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.loadData(this.page);
  }

  loadData(page: number){
    this.busy = true;   
    this.salesOrderService
      .getPaged<ISalesOrder>(page, this.itemsPerPage, this.columns, this.searchTerm ? this.searchTerm : undefined)
      .pipe(first())
      .subscribe(
        (response: IODataResponse<ISalesOrder[]>) => {
          this.orders = response.value;
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

  onEdit(customer: any){
    // const initialState: ModalOptions = {
    //   animated: true,
    //   initialState: {
    //     rowGuid: customer.rowGuid,
    //     title: `${customer.firstName} ${customer.lastName}`    
    //   } 
    // };
    //this.bsModalRef = this.modalService.show(CustomerDetailsComponent, initialState);  
    //this.bsModalRef.content.   Action
  }
}
