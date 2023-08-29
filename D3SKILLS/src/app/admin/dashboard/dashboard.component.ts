import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ServiceFormComponent } from '../service-form/service-form.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { GalerieFormComponent } from '../galerie-form/galerie-form.component';
import { ReferenceFormComponent } from '../reference-form/reference-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ReferencesService } from 'src/app/services/references.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit{
  constructor(public dialog: MatDialog, public _login: LoginService, private _router: Router, private _references: ReferencesService) {}
  
  openServiceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ServiceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  openSubServiceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  openGalerieDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GalerieFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  openReferenceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReferenceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }

  logout() {
    this._login.logout();
    this._router.navigate(['/']);
  }

  //Sidebar toggle show hide function
  status = false;
  addToggle(){
    this.status = !this.status;
  }

  //references table:
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  references : any;

  ngOnInit(){
    this._references.getReferences().subscribe((references: any) =>{
    this.references = references;
    console.log(references);
  })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.references.paginator = this.paginator;
  }

  //delete ref:
  onDeleteRef(RefId: string){
    this._references.deleteReference(RefId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('Reference deleted successfully');
    }, error => {
      console.error('Error deleting reference:', error);
    });
  }



}
