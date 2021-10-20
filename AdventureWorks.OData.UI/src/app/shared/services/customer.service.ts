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

  getPaged(page: number, itemsPerPage: number, columns:string[]): Observable<IODataResponse<ICustomer[]>> { 
    return this.service.getPaged(this.resource, page, itemsPerPage, columns)
         .pipe(map((data) => data));
  }
}

