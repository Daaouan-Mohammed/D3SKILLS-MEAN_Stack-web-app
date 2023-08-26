import { DialogRef } from '@angular/cdk/dialog';
import { HttpResponse } from '@angular/common/http';
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
  error!: boolean;
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

  OnFormLogin(email: string, password: string) {
    this._login.login(email, password).subscribe((res: HttpResponse<any>) => {
      localStorage.setItem('token',res.body.token);
      localStorage.setItem('userId',res.body.userId);
      console.log(res);
      this._router.navigate(['/admin']);
      this._dialogRef.close();
    })
  }
}
