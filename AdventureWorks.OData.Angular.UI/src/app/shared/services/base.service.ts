import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: HttpErrorResponse) {  
    //const notificationService = new NotificationService();    
    switch (error.status) {
      case 0:
        //notificationService.error('There was an error encountered while establishing the connection to server, please check if server is running or application pointing to correct server.');
        break;
      case 500:
        //notificationService.error('There was an error processing your request please try again later or contact support.');
        break;
      case 400:
        //notificationService.error('Validation errors occurred please confirm the fields and submit it again.');
        break;
      case 422:
        //notificationService.error('Validation errors occurred please confirm the fields and submit it again.');
        break;
      case 401:
        //notificationService.error('Your session expired, please login again.');
        break;
      default:
        break;
    }

    return throwError(error.error);
  }

  getPaged<T>(path: string, page: number, itemsPerPage: number, columns:string[], expand?:string[], filterParams?: HttpParams): Observable<T> {    
    let params = new HttpParams()    
        .set('$select', columns.toString())  
        .set('$count', true)
        .set('$top', itemsPerPage)
        .set('$skip', page > 1 ? (page -1) * itemsPerPage : 0);

        if(expand != null)
          params = params.append('$expand', expand.toString());

        if(filterParams != null)
          params = this.mergeParams(params, filterParams);    

    return this.http
              .get<T>(`${environment.api_url}${path}`, { params })
              .pipe(catchError(this.formatErrors));
  }

  get<T>(path: string, columns:string[], expand?:string[]): Observable<T> {    
    let params = new HttpParams()
        .set('$select', columns.toString());

    if(expand != null)
      params = params.append('$expand', expand.toString())

    return this.http
              .get<T>(`${environment.api_url}${path}`, { params })
              .pipe(catchError(this.formatErrors));
  }


  private mergeParams(params: HttpParams, _params: HttpParams): HttpParams{    
      const items: any = _params;
      Object.keys(items.updates).forEach(function (key) {
        params = params.append(items.updates[key].param, items.updates[key].value);
      });

      return params;
  }

  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http
  //     .get(`${environment.api_url}${path}`, { params })
  //     .pipe(catchError(this.formatErrors));
  // }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  // patch(path: string, body: Object = {}): Observable<any> {
  //   return this.http
  //     .patch(`${environment.api_url}${path}`, JSON.stringify(body))
  //     .pipe(catchError(this.formatErrors));
  // }

  // post(path: string, body: Object = {}): Observable<any> {
  //   return this.http
  //     .post(`${environment.api_url}${path}`, JSON.stringify(body))
  //     .pipe(catchError(this.formatErrors));
  // }

  // delete(path: string): Observable<any> {
  //   return this.http
  //     .delete(`${environment.api_url}${path}`)
  //     .pipe(catchError(this.formatErrors));
  // }
}