import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { NbLayoutModule } from '@nebular/theme';
import { AuthComponent } from './auth/auth.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ServiceFormComponent } from './service-form/service-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    AuthComponent,
    LoginFormComponent,
    ServiceFormComponent
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
    HttpClientModule
  ]
})
export class AdminModule { }
