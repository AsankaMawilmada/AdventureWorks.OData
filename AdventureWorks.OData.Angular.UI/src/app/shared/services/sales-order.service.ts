import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '.';
import { IODataResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private resource:string = 'salesOrderHeaders';
  constructor(private service: BaseService) { }

  getPaged<T>(page: number, itemsPerPage: number, columns:string[], searchTerm?: string): Observable<IODataResponse<T[]>> { 
    const filterParams = new HttpParams()
                      .set('$filter', `contains(salesOrderNumber,'${searchTerm}')`);                     

    const expand = ['customer($select=companyName,firstName,lastName)' + 
                    ',billToAddress($select=addressLine1,addressLine2,city,stateProvince,countryRegion,postalCode)' +
                    ',shipToAddress($select=addressLine1,addressLine2,city,stateProvince,countryRegion,postalCode)'];

    return this.service.getPaged<IODataResponse<T[]>>(this.resource, page, itemsPerPage, columns, expand, searchTerm ? filterParams : undefined)
         .pipe(map((data) => data));
  }
}