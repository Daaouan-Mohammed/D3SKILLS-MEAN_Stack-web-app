import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(public dialog: MatDialog, private _login: LoginService, private _router: Router) {}

  ngOnInit(): void {
    if(this._login.isLoggedIn())
    {
      this._router.navigate(['/admin'])
    }
}

  userInfo() {
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
}
