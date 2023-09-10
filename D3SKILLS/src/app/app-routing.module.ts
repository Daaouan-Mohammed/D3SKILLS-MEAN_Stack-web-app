import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthComponent } from './admin/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { RefsPageComponent } from './components/refs-page/refs-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'RefsPage', component: RefsPageComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
