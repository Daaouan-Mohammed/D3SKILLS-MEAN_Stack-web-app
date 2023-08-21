import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
  ]
})
export class AdminModule { }
