import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '.';
import { ICustomer, IODataResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private resource:string = 'customers';
  constructor(private service: BaseService) { }

  getPaged<T>(page: number, itemsPerPage: number, columns:string[], searchTerm?: string): Observable<IODataResponse<T[]>> { 
    const params = new HttpParams()
                      .set('$filter', `contains(firstName,'${searchTerm}')` + 
                          ` or contains(lastName,'${searchTerm}')`+
                          ` or contains(companyName,'${searchTerm}')` +
                          ` or contains(emailAddress,'${searchTerm}')`+
                          ` or contains(phone,'${searchTerm}')`);

    return this.service.getPaged(this.resource, page, itemsPerPage, columns, undefined, searchTerm ? params : undefined)
         .pipe(map((data) => data));
  }
}