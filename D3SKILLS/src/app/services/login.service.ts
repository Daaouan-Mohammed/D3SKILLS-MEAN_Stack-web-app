import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _webReqService: WebRequestService, _router: Router) { }

  login(email: string, password: string) {
    return this._webReqService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        const userId = res.body._id;
        const token = res.body.token;        //it should be like that : const token = res.headers.get('token');
        if (token) {
          this.setSession(token, userId);
        }
        else {
          console.error("Incomplete response data");
        }
      })
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    this.removeSession();
  }

  private setSession(token: string, userId: string) {
    localStorage.setItem('token', token);
  }

  private removeSession() {
    localStorage.removeItem('token');
     localStorage.removeItem('userId')
  }

  isLoggedIn(){
    return this.getToken()!= null;
  }

}
