import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '.';
import { ICustomer, IODataResponse, ISalesOrder } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private resource:string = 'salesorders';
  constructor(private service: BaseService) { }

  getPaged<T>(page: number, itemsPerPage: number, columns:string[], searchTerm?: string): Observable<IODataResponse<T[]>> { 
    const params = new HttpParams()
                      .set('$filter', `contains(salesOrderNumber,'${searchTerm}')`);                     

    return this.service.getPaged(this.resource, page, itemsPerPage, columns, ['customer'] , searchTerm ? params : undefined)
         .pipe(map((data) => data));
  }
}