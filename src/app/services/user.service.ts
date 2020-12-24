import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, pipe, BehaviorSubject, Subject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class UserService {
  endpoint: string = environment.apiUrl;
  public UserRole: any;
  public UserId: any;
  constructor(private http: HttpClient) { }


  login(FormData) {
    return this.http.post(this.endpoint + 'user/validateUser', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }



  getUserDetail(id: string) {
    return this.http.get(this.endpoint + 'user/userprofile/' + id)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }


  updateUser(formData) {
    return this.http.post(this.endpoint+'user/updateCollector', formData)
    .pipe(
        // retry(1),
        // catchError(this.handleError)
        catchError((err) => {
            console.log('error caught in service')
            console.error(err);
   
            //Handle the error here
   
            return throwError(err);    //Rethrow it back to component
          })
    );
  }

  getUsers() {
    return this.http.get(this.endpoint + 'user/getUsers')
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  userLoan(FormData) {
    return this.http.post(this.endpoint + 'payment/userLoan', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  payLoan(FormData) {
    return this.http.post(this.endpoint + 'payment/paidLoan', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }


  pay(FormData) {
    return this.http.post(this.endpoint + 'payment/payment', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  loanPaymentHistory(FormData) {
    return this.http.post(this.endpoint + 'payment/loanPaymentHistory', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }
  flatPaymentHistory(FormData){
    return this.http.post(this.endpoint + 'payment/flatPaymentHistory',FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }
  getUserFlatsByCivilid(id:string){
    return this.http.get(this.endpoint + 'property/getUserFlatsByCivilId/'+id)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  // handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  paidFlat(FormData){
    return this.http.post(this.endpoint + 'payment/paidFlat',FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }
  createUser(FormData){
    return this.http.post(this.endpoint + 'user/createUser',FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
  
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  usePaymentLinkDetails(FormData) {
    return this.http.post(this.endpoint + 'payment/paymentLinkDetails', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  } 

  usePaymentLinkDetails1(FormData) {
    return this.http.post(this.endpoint + 'payment/paymentLinkDetails1', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  } 

  checkout(FormData) {
    return this.http.post(this.endpoint + 'payment/sendPayment', FormData)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  } 

  getPaymentStatus(id: string) {
    return this.http.get(this.endpoint + 'payment/paymentStatus/' + id)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      );
  }

  getQuickpayPaymentStatus(id: string) {
    return this.http.get(this.endpoint + 'payment/quickpayGetPaymentStatus/' + id)
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


  

  // createUser(formData) {
  //   return this.http.post(this.endpoint+'user/createUser',formData)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

}
