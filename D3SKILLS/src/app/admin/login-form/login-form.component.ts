import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  LoginForm: FormGroup;
  errorMsg: any;
  hide = true;
  error!: boolean ;
  show!: boolean;
  sendData!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<LoginFormComponent>,
    private _router: Router,
    private _login: LoginService,
  ) {
    this.LoginForm = this._fb.group({
      email: this._fb.control(""),
      password: this._fb.control(""),
    })
  }

  OnFormLogin() { 
    let email = this.LoginForm.value.email;
    let password = this.LoginForm.value.password;
    const loginInput={email,password}
 /*   this._login.loginUser(loginInput).subscribe((result:any)=>{
     console.log(result.data.loginUser.token);
      if (result){
        localStorage.setItem('token', result.data.loginUser.token);
        localStorage.setItem('authUser', JSON.stringify(result.data.loginUser));
        console.log('login correct');
       //  this._login.updateStateSession(true);
        this._router.navigate(['/admin']);
        this._dialogRef.close();      
      } else {
        this.error = true;
        this.show = true;
       //  this._login.updateStateSession(false);
        localStorage.removeItem('token');
        console.log('login incorrecto');
        this.sendData = false;
      }
    })*/
    console.log('login correct');
     this._router.navigate(['/admin']);
     this._dialogRef.close();   
 }
}
