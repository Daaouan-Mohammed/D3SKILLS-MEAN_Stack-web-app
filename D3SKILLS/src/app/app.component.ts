import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D3SKILLS';
  constructor(private _login : LoginService, private _router:Router){}
  
  ngOnInit(): void {
    if(this._login.isLoggedIn())
    {
      this._router.navigate(['/admin'])
    }
}
}
