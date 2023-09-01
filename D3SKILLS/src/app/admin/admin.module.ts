import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { NbAlertModule, NbLayoutModule } from '@nebular/theme';
import { AuthComponent } from './auth/auth.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { ServiceFormComponent } from './service-form/service-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WebReqInterceptor } from '../services/web-req.interceptor';
import { ReferenceFormComponent } from './reference-form/reference-form.component';
import { GalerieFormComponent } from './galerie-form/galerie-form.component';
import { MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    DashboardComponent,
    AuthComponent,
    LoginFormComponent,
    ServiceFormComponent,
    ReferenceFormComponent,
    GalerieFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    NbAlertModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true}
  ],
})
export class AdminModule { }
