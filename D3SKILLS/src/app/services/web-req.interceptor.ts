import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable, catchError, throwError } from 'rxjs'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private _router: Router, private _login: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{
    //handle the request
    request = this.addAuthHeader(request);

    //call next() and handle response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) =>{

        if(error.status === 401){
          this._login.logout();
          this._router.navigate(['/auth']);
        }

        return throwError(error);
      })
    )
  }

  addAuthHeader(request: HttpRequest<any>){
    //get the token
    const token = this._login.getToken();
    if(token){
      //append the token to the request header
      return request.clone({
        setHeaders:{
          'token': token
        }
      })      
    }
    return request;
  }
}
