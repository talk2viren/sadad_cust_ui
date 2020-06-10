import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of,throwError, pipe, BehaviorSubject, Subject } from 'rxjs';
import { retry,catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class UserService {
    endpoint: string =environment.apiUrl; 
    public UserRole: any;
    public UserId: any;
    constructor(private http: HttpClient) {}

    
login(FormData){
  return this.http.post(this.endpoint + 'user/validateUser',FormData)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
}

userLoan(FormData){
    return this.http.post(this.endpoint + 'payment/userLoan',FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  payLoan(FormData){
    return this.http.post(this.endpoint + 'payment/paidLoan',FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }

handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
  } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}
